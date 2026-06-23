document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".advanced-accordion");

  accordions.forEach((accordion) => {
    const isSingle = accordion.getAttribute("data-single") === "1";
    const panels = accordion.querySelectorAll(".advanced-accordion__panel");

    panels.forEach((panel) => {
      const button = panel.querySelector(".advanced-accordion__button");
      const windowEl = panel.querySelector(".advanced-accordion__window");
      const contentEl = panel.querySelector(".advanced-accordion__content");
      const icon = panel.querySelector(".icon-container");

      button.addEventListener("click", (e) => {
        e.preventDefault();
        const isOpen = windowEl.style.visibility === "visible";

        if (isSingle) {
          panels.forEach((otherPanel) => {
            if (otherPanel !== panel) {
              closePanel(
                otherPanel.querySelector(".advanced-accordion__window"),
                otherPanel.querySelector(".icon-container"),
              );
            }
          });
        }

        if (isOpen) {
          closePanel(windowEl, icon);
        } else {
          openPanel(windowEl, contentEl, icon);
        }
      });
    });
  });

  function openPanel(windowEl, contentEl, icon) {
    windowEl.style.visibility = "visible";
    windowEl.style.height = contentEl.scrollHeight + "px";
    icon.classList.remove("-rotate-90");
    icon.classList.add("rotate-90");

    windowEl.addEventListener("transitionend", function handler(e) {
      if (e.propertyName === "height" && windowEl.style.height !== "0px") {
        windowEl.style.height = "auto";
        windowEl.removeEventListener("transitionend", handler);
      }
    });
  }

  function closePanel(windowEl, icon) {
    if (windowEl.style.visibility === "hidden") return;

    windowEl.style.height = windowEl.scrollHeight + "px";

    // Force reflow
    void windowEl.offsetHeight;

    windowEl.style.height = "0px";
    icon.classList.remove("rotate-90");
    icon.classList.add("-rotate-90");

    windowEl.addEventListener("transitionend", function handler(e) {
      if (e.propertyName === "height" && windowEl.style.height === "0px") {
        windowEl.style.visibility = "hidden";
        windowEl.removeEventListener("transitionend", handler);
      }
    });
  }
});
