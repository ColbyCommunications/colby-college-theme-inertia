import { expect, waitFor } from "storybook/test";
import Paragraph from "../Paragraph.vue";

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
    buttons: {
      name: "Buttons",
      table: { category: "Wordpress Fields" },
    },
  },
};

const paragraphText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo odio, ultrices quis auctor eu, fermentum at dolor. Vivamus cursus lorem ut ultrices iaculis.";

export const Default = {
  name: "Paragraph",
  args: {
    paragraph_text: paragraphText,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText(paragraphText)).toBeInTheDocument();
  },
};

export const WithButtons = {
  name: "With Buttons",
  args: {
    paragraph_text: paragraphText,
    buttons: [
      {
        button: {
          url: "#",
          title: "Learn More",
          target: "",
        },
      },
    ],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText(paragraphText)).toBeInTheDocument();
    await waitFor(
      async () => {
        await expect(canvas.getByText("Learn More")).toBeVisible();
      },
      { timeout: 3000 },
    );
  },
};
