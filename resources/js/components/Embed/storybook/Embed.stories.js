import { onMounted, ref } from "vue";
import Embed from "../Embed.vue";
import { expect, waitFor } from "storybook/test";

const renderWithMutableEmbed = (args) => ({
  components: { Embed },
  setup() {
    const embedValue = ref(args.embed);

    onMounted(() => {
      window.__EMBED_SET_VALUE__ = (value) => {
        embedValue.value = value;
      };
    });

    return { embedValue };
  },
  template: '<Embed :embed="embedValue" />',
});

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
  play: async ({ canvasElement }) => {
    const iframe = canvasElement.querySelector("iframe");
    await expect(iframe).not.toBeNull();
  },
};

export const WeatherEmbed = {
  label: "Weather Embed",
  render: renderWithMutableEmbed,
  args: {
    embed: `<a class="weatherwidget-io" href="https://forecast7.com/en/44d55n69d63/waterville/?unit=us" data-label_1="WATERVILLE" data-label_2="WEATHER" data-theme="original">WATERVILLE WEATHER</a><script id="weatherwidget-io-js" data-story="initial">window.__WEATHER_WIDGET_SCRIPT_RAN__ = (window.__WEATHER_WIDGET_SCRIPT_RAN__ || 0) + 1;</script>`,
  },
  beforeEach: () => {
    window.__TWITTER_WIDGET_CALLED__ = 0;
    window.__INSTAGRAM_WIDGET_CALLED__ = 0;

    window.twttr = {
      widgets: {
        load: () => {
          window.__TWITTER_WIDGET_CALLED__ += 1;
        },
      },
    };

    window.instgrm = {
      Embeds: {
        process: () => {
          window.__INSTAGRAM_WIDGET_CALLED__ += 1;
        },
      },
    };

    return () => {
      delete window.twttr;
      delete window.instgrm;
      delete window.__EMBED_SET_VALUE__;
      delete window.__TWITTER_WIDGET_CALLED__;
      delete window.__INSTAGRAM_WIDGET_CALLED__;
      delete window.__WEATHER_WIDGET_SCRIPT_RAN__;
    };
  },
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByText("WATERVILLE WEATHER")).toBeInTheDocument();

    await waitFor(() => {
      expect(window.__TWITTER_WIDGET_CALLED__).toBeGreaterThan(0);
      expect(window.__INSTAGRAM_WIDGET_CALLED__).toBeGreaterThan(0);
    });

    window.__EMBED_SET_VALUE__?.(
      '<div class="weatherwidget-io">UPDATED WEATHER</div><script id="weatherwidget-io-js" data-story="updated" async>window.__WEATHER_WIDGET_SCRIPT_RAN__ = (window.__WEATHER_WIDGET_SCRIPT_RAN__ || 0) + 1;</script>',
    );

    await waitFor(() => {
      expect(canvas.getByText("UPDATED WEATHER")).toBeInTheDocument();
    });

    const liveScript = canvasElement.querySelector(
      'script[data-story="updated"]',
    );
    await expect(liveScript).not.toBeNull();
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
    embed:
      '<div class="custom-widget"><p>This is a static HTML embed with no scripts.</p></div>',
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText("This is a static HTML embed with no scripts."),
    ).toBeInTheDocument();
  },
};
