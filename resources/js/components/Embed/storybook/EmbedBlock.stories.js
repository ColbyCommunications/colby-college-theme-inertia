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
  title: "Blocks/Embed",
  component: Embed,
  tags: ["!autodocs"],
  argTypes: {
    embed: {
      control: "text",
      name: "Embed URL",
      table: { category: "Wordpress Fields" },
    },
  },
};

export const VideoEmbed = {
  name: "Video Embed",
  args: {
    embed:
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/jQixf1UCKac?si=N5FBRCM5T5qLExde" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },
  play: async ({ canvasElement }) => {
    const iframe = canvasElement.querySelector("iframe");
    await expect(iframe).not.toBeNull();
  },
};
