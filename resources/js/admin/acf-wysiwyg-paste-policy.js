(function () {
  var LIMITED_TOOLBARS = {
    basic: true,
    limited: true,
  };

  var LIMITED_TAGS = {
    a: true,
    b: true,
    br: true,
    em: true,
    i: true,
    li: true,
    ol: true,
    p: true,
    strong: true,
    u: true,
    ul: true,
  };

  var MEDIA_TAGS = {
    audio: true,
    canvas: true,
    embed: true,
    figcaption: true,
    figure: true,
    iframe: true,
    img: true,
    object: true,
    picture: true,
    source: true,
    svg: true,
    video: true,
  };

  var DROP_WITH_CONTENT_TAGS = {
    iframe: true,
    math: true,
    object: true,
    script: true,
    style: true,
    svg: true,
  };

  var LIMITED_QUICKTAG_BUTTONS = {
    block: true,
    code: true,
    del: true,
    img: true,
    ins: true,
    more: true,
  };

  var NO_MEDIA_QUICKTAG_BUTTONS = {
    img: true,
  };

  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
      return;
    }

    callback();
  }

  function getEditorWrap(editorId) {
    return document.getElementById("wp-" + editorId + "-wrap");
  }

  function getPolicyFromWrap(wrap) {
    if (!wrap) {
      return { mode: "none" };
    }

    var toolbar = (wrap.getAttribute("data-toolbar") || "").toLowerCase();

    if (LIMITED_TOOLBARS[toolbar]) {
      return { mode: "limited" };
    }

    if (toolbar === "full" && !wrap.querySelector(".wp-media-buttons")) {
      return { mode: "no-media" };
    }

    return { mode: "none" };
  }

  function getPolicyForEditor(editor) {
    return editor && editor.id
      ? getPolicyFromWrap(getEditorWrap(editor.id))
      : { mode: "none" };
  }

  function isSafeUrl(value) {
    var url = String(value || "")
      .replace(/[\u0000-\u001f\u007f\s]+/g, "")
      .toLowerCase();

    return !/^(javascript|data|vbscript):/.test(url);
  }

  function sanitizeLinkAttributes(element) {
    Array.prototype.slice.call(element.attributes).forEach(function (attribute) {
      var name = attribute.name.toLowerCase();
      var value = attribute.value;

      if (name === "href") {
        if (!isSafeUrl(value)) {
          element.removeAttribute(attribute.name);
        }
        return;
      }

      if (name === "target") {
        if (value !== "_blank" && value !== "_self") {
          element.removeAttribute(attribute.name);
          return;
        }

        if (value === "_blank") {
          element.setAttribute("rel", "noopener noreferrer");
        }
        return;
      }

      if (name !== "title" && name !== "rel") {
        element.removeAttribute(attribute.name);
      }
    });
  }

  function sanitizeLimitedAttributes(element) {
    if (element.nodeName.toLowerCase() === "a") {
      sanitizeLinkAttributes(element);
      return;
    }

    Array.prototype.slice.call(element.attributes).forEach(function (attribute) {
      element.removeAttribute(attribute.name);
    });
  }

  function sanitizeBroadAttributes(element) {
    Array.prototype.slice.call(element.attributes).forEach(function (attribute) {
      var name = attribute.name.toLowerCase();
      var value = attribute.value;

      if (name.indexOf("on") === 0) {
        element.removeAttribute(attribute.name);
        return;
      }

      if ((name === "href" || name === "src") && !isSafeUrl(value)) {
        element.removeAttribute(attribute.name);
      }
    });
  }

  function unwrap(element) {
    var parent = element.parentNode;

    if (!parent) {
      return;
    }

    while (element.firstChild) {
      parent.insertBefore(element.firstChild, element);
    }

    parent.removeChild(element);
  }

  function wrapChildren(element, wrappers) {
    var parent = element.parentNode;
    var firstWrapper = null;
    var innermost = null;

    if (!parent || !wrappers.length) {
      unwrap(element);
      return;
    }

    wrappers.forEach(function (tagName) {
      var wrapper = document.createElement(tagName);

      if (!firstWrapper) {
        firstWrapper = wrapper;
      }

      if (innermost) {
        innermost.appendChild(wrapper);
      }

      innermost = wrapper;
    });

    while (element.firstChild) {
      innermost.appendChild(element.firstChild);
    }

    parent.insertBefore(firstWrapper, element);
    parent.removeChild(element);
  }

  function getFormattingWrappers(element) {
    var style = (element.getAttribute("style") || "").toLowerCase();
    var wrappers = [];

    if (/font-weight\s*:\s*(bold|[6-9]00)/.test(style)) {
      wrappers.push("strong");
    }

    if (/font-style\s*:\s*italic/.test(style)) {
      wrappers.push("em");
    }

    if (/text-decoration[^:]*:\s*[^;]*underline/.test(style)) {
      wrappers.push("u");
    }

    return wrappers;
  }

  function sanitizeChildren(parent, policy) {
    Array.prototype.slice.call(parent.childNodes).forEach(function (node) {
      sanitizeNode(node, policy);
    });
  }

  function sanitizeNode(node, policy) {
    var tagName;

    if (node.nodeType === 3) {
      return;
    }

    if (node.nodeType !== 1) {
      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
      return;
    }

    tagName = node.nodeName.toLowerCase();

    if (policy.mode === "no-media") {
      if (MEDIA_TAGS[tagName] || DROP_WITH_CONTENT_TAGS[tagName]) {
        node.parentNode.removeChild(node);
        return;
      }

      sanitizeBroadAttributes(node);
      sanitizeChildren(node, policy);
      return;
    }

    if (DROP_WITH_CONTENT_TAGS[tagName] || MEDIA_TAGS[tagName]) {
      node.parentNode.removeChild(node);
      return;
    }

    sanitizeChildren(node, policy);

    if (LIMITED_TAGS[tagName]) {
      sanitizeLimitedAttributes(node);
      return;
    }

    if (tagName === "span") {
      wrapChildren(node, getFormattingWrappers(node));
      return;
    }

    unwrap(node);
  }

  function sanitizeHtml(html, policy) {
    var template;

    if (!html || policy.mode === "none") {
      return html;
    }

    template = document.createElement("template");
    template.innerHTML = html;
    sanitizeChildren(template.content, policy);

    return template.innerHTML;
  }

  function attachTextarea(textarea) {
    var wrap;
    var policy;

    if (!textarea || textarea.dataset.colbyPastePolicyAttached) {
      return;
    }

    wrap = textarea.closest(".acf-editor-wrap");
    policy = getPolicyFromWrap(wrap);

    if (policy.mode === "none") {
      return;
    }

    syncQuicktagButtons(wrap, policy);

    textarea.dataset.colbyPastePolicyAttached = "1";
    textarea.addEventListener("paste", function () {
      window.setTimeout(function () {
        textarea.value = sanitizeHtml(textarea.value, policy);
      }, 0);
    });
  }

  function attachTextareas(root) {
    Array.prototype.slice
      .call((root || document).querySelectorAll(".acf-editor-wrap textarea.wp-editor-area"))
      .forEach(attachTextarea);
  }

  function shouldHideQuicktagButton(buttonKey, policy) {
    if (policy.mode === "limited") {
      return !!LIMITED_QUICKTAG_BUTTONS[buttonKey];
    }

    if (policy.mode === "no-media") {
      return !!NO_MEDIA_QUICKTAG_BUTTONS[buttonKey];
    }

    return false;
  }

  function getQuicktagButtonKey(button) {
    var id = button.id || "";
    var match = id.match(/_([^_]+)$/);

    if (match) {
      return match[1];
    }

    return String(button.value || button.textContent || "")
      .toLowerCase()
      .replace(/\s+/g, "-");
  }

  function syncQuicktagButtons(wrap, policy) {
    if (!wrap) {
      return;
    }

    Array.prototype.slice
      .call(wrap.querySelectorAll(".quicktags-toolbar input, .quicktags-toolbar button"))
      .forEach(function (button) {
        var key = getQuicktagButtonKey(button);

        if (shouldHideQuicktagButton(key, policy)) {
          button.style.display = "none";
          button.setAttribute("aria-hidden", "true");
          button.setAttribute("tabindex", "-1");
        }
      });
  }

  function attachTinyMceEditor(editor) {
    if (!editor || editor.colbyPastePolicyAttached) {
      return;
    }

    editor.colbyPastePolicyAttached = true;
    editor.on("PastePreProcess", function (event) {
      var policy = getPolicyForEditor(editor);

      if (policy.mode !== "none") {
        event.content = sanitizeHtml(event.content, policy);
      }
    });
  }

  function attachTinyMceEditors() {
    if (!window.tinymce || !window.tinymce.editors) {
      return;
    }

    Array.prototype.slice.call(window.tinymce.editors).forEach(attachTinyMceEditor);
  }

  function watchTinyMce() {
    var attempts = 0;
    var timer = window.setInterval(function () {
      attempts += 1;

      if (!window.tinymce || !window.tinymce.on) {
        if (attempts > 80) {
          window.clearInterval(timer);
        }
        return;
      }

      window.clearInterval(timer);
      attachTinyMceEditors();
      window.tinymce.on("AddEditor", function (event) {
        attachTinyMceEditor(event.editor);
      });
    }, 250);
  }

  ready(function () {
    attachTextareas(document);
    watchTinyMce();

    if (window.MutationObserver) {
      new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          mutation.addedNodes.forEach(function (node) {
            if (node.nodeType === 1) {
              attachTextareas(node);
            }
          });
        });
      }).observe(document.body, { childList: true, subtree: true });
    }
  });
})();
