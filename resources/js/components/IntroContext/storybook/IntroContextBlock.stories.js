import { expect } from "storybook/test";
import IntroContext from "../IntroContext.vue";

export default {
  title: "Blocks/Intro Context",
  component: IntroContext,
  tags: ["!autodocs"],
  argTypes: {
    subheading: {
      name: "Subheading",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
    heading: {
      name: "Heading",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
    text: {
      name: "Text",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
    buttons: {
      name: "Buttons",
      control: "object",
      table: { category: "Wordpress Fields" },
    },
    size: { table: { disable: true } },
    inset: { table: { disable: true } },
  },
};

export const Default = {
  name: "Intro Context",
  args: {
    subheading: "Dare Northward Overview",
    heading:
      "We are taking an integrated, values-led approach to this campaign to reflect the realities of the world we're trying to better.",
    text: "<p>In 1818, Colby's early faculty and students sailed up the Kennebec on the sloop Hero to start a college, far north of the established centers of higher learning. Many daring moves followed as Colby grew, struggled, and prospered.</p><p>Dare Northward leverages our existing strengths to enhance our student's experiences, improve their outcomes, and produce generations of leaders to tackle the world's greatest challenges.</p>",
    size: "medium",
    buttons: [
      {
        url: "#",
        title: "Colby Impact",
      },
    ],
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText("Dare Northward Overview"),
    ).toBeInTheDocument();
    await expect(canvas.getByText("Colby Impact")).toBeInTheDocument();
  },
};
