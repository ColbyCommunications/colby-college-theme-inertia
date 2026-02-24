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
      src: "https://placeholdit.com/400x600/dddddd/999999",
      srcset:
        "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Square: "https://placehold.co/600x400",
        Square_mobile: "https://placehold.co/400x300",
      },
    },
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Lorem ipsum")).toBeInTheDocument();
    await expect(canvas.getAllByText("100%").length).toBeGreaterThan(0);
  },
};

export const WithoutImage = {
  name: "Without Image",
  args: {
    subheading: "By the Numbers",
    heading: "Colby at a Glance",
    facts: [
      { figure: "2,000", paragraph: "students enrolled" },
      { figure: "58", paragraph: "majors and minors" },
      { figure: "10:1", paragraph: "student-to-faculty ratio" },
    ],
    paragraph: "Colby College is one of America's premier liberal arts colleges.",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Colby at a Glance")).toBeInTheDocument();
    await expect(canvas.getByText("2,000")).toBeInTheDocument();
    await expect(canvas.getByText("10:1")).toBeInTheDocument();
  },
};
