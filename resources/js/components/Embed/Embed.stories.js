import Embed from "./Embed.vue";
import { expect } from "storybook/test";

export default {
  title: "Core Components/Embed",
  component: Embed,
  argTypes: {
    embed: { control: "text" },
  },
};

export const VideoEmbed = {
  label: "Video Embed",
  args: {
    embed:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/jQixf1UCKac?si=N5FBRCM5T5qLExde" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },
  play: async ({ canvas, canvasElement }) => {
    const iframe = canvasElement.querySelector("iframe");
    await expect(iframe).not.toBeNull();
  },
};

export const WeatherEmbed = {
  label: "Weather Embed",
  args: {
    // You can now paste the raw embed code directly, script and all
    embed: `<a class="weatherwidget-io" href="https://forecast7.com/en/44d55n69d63/waterville/?unit=us" data-label_1="WATERVILLE" data-label_2="WEATHER" data-theme="original" >WATERVILLE WEATHER</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');</script>`,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("WATERVILLE WEATHER")).toBeInTheDocument();
  },
};

export const EmptyEmbed = {
  label: "Empty Embed",
  args: {
    embed: "",
  },
  play: async ({ canvasElement }) => {
    const container = canvasElement.querySelector(".embed");
    await expect(container).not.toBeNull();
  },
};

export const HtmlOnlyEmbed = {
  label: "HTML Only (No Script)",
  args: {
    embed: '<div class="custom-widget"><p>This is a static HTML embed with no scripts.</p></div>',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("This is a static HTML embed with no scripts.")).toBeInTheDocument();
  },
};
