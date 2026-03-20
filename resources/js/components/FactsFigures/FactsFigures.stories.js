import FactsFigures from "./FactsFigures.vue";
import { expect } from "storybook/test";

// The default export metadata for your component
export default {
  title: "Core Components/Facts and Figures",
  component: FactsFigures,
};

export const Primary = {
  name: "Primary",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    facts: [
      { figure: "100%", paragraph: "consectetur adipiscing elit" },
      { figure: "100%", paragraph: "consectetur adipiscing elit" },
    ],
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2024/12/20220914_sunrise_0052-HDR-1.jpg",
      alt: "this is an alt tag",
    },
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Lorem ipsum")).toBeInTheDocument();
    await expect(canvas.getAllByText("100%").length).toBeGreaterThan(0);
  },
};

