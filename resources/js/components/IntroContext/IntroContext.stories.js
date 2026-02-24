import { expect } from "storybook/test";
import IntroContext from "./IntroContext.vue";

export default {
  title: "Core Components/Intro Context",
  component: IntroContext,
  tags: ["autodocs"],
};

export const Default = {
  name: "Default",
  args: {
    size: "medium",
    subheading: "Dare Northward Overview",
    heading:
      "We are taking an integrated, values-led approach to this campaign to reflect the realities of the world we're trying to better.",
    text: "<p>In 1818, Colby's early faculty and students sailed up the Kennebec on the sloop Hero to start a college, far north of the established centers of higher learning. Many daring moves followed as Colby grew, struggled, and prospered.</p><p>Dare Northward leverages our existing strengths to enhance our student's experiences, improve their outcomes, and produce generations of leaders to tackle the world's greatest challenges.</p>",
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

export const Inset = {
  name: "Inset",
  args: {
    ...Default.args,
    inset: true,
    size: "large",
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText("Dare Northward Overview"),
    ).toBeInTheDocument();
  },
};
