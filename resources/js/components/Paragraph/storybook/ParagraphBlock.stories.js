import { expect } from "storybook/test";
import Paragraph from "../Paragraph.vue";
import { text } from "superagent/lib/node/parsers";

export default {
  title: "Blocks/Paragraph",
  component: Paragraph,
  tags: ["!autodocs"],
  argTypes: {
    paragraph_text: {
      name: "Text",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
  },
};

export const Default = {
  name: "Paragraph",
  args: {
    paragraph_text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo odio, ultrices quis auctor eu, fermentum at dolor. Vivamus cursus lorem ut ultrices iaculis.",
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo odio, ultrices quis auctor eu, fermentum at dolor. Vivamus cursus lorem ut ultrices iaculis.",
      ),
    ).toBeInTheDocument();
  },
};
