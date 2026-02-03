import Embed from "./Embed.vue";

export default {
  title: "Core Components/Embed",
  component: Embed,
  argTypes: {
    embed: {
      control: "text",
    },
  },
};

export const Primary = {
  name: "Video Embed",
  args: {
    embed:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/jQixf1UCKac?si=N5FBRCM5T5qLExde" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },
};

export const Secondary = {
  name: "Weather Embed",
  args: {
    // 1. We ONLY keep the HTML part here. We remove the <script> tag.
    embed: `<a class="weatherwidget-io" href="https://forecast7.com/en/44d55n69d63/waterville/?unit=us" data-label_1="WATERVILLE" data-label_2="WEATHER" data-theme="original" >WATERVILLE WEATHER</a>`,
  },
  // 2. We use the play function to run the script manually
  play: async () => {
    const scriptId = "weatherwidget-io-js";

    // Check if script is already loaded (from visiting the story previously)
    if (!document.getElementById(scriptId)) {
      const d = document;
      const s = "script";
      const fjs = d.getElementsByTagName(s)[0];
      const js = d.createElement(s);
      js.id = scriptId;
      js.src = "https://weatherwidget.io/js/widget.min.js";
      fjs.parentNode.insertBefore(js, fjs);
    } else {
      // If the script is already there, we force the widget to re-scan the DOM
      // because Vue just replaced the <a> tag.
      if (window.__weatherwidget_init) {
        window.__weatherwidget_init();
      }
    }
  },
};
