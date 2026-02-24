import { expect } from "storybook/test";
import StatGroup from "./StatGroup.vue";

export default {
  title: "Core Components/Stat Group",
  component: StatGroup,
  tags: ["autodocs"],
};

export const Default = {
  name: "Default",
  args: {
    subheading: "By the Numbers",
    heading: "Colby at a Glance",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",
    buttons: [
      { url: "#", title: "Full Statistics", target: "_blank" },
    ],
    items: [
      { heading: "2,000", paragraph: "Students from around the world" },
      { heading: "56", paragraph: "Majors across the arts and sciences" },
      { heading: "35", paragraph: "Minors to complement any major" },
      { heading: "9:1", paragraph: "Student-to-faculty ratio" },
    ],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Colby at a Glance")).toBeInTheDocument();
    await expect(canvas.getByText("2,000")).toBeInTheDocument();
    await expect(canvas.getByText("56")).toBeInTheDocument();
    await expect(canvas.getByText("9:1")).toBeInTheDocument();
    await expect(canvas.getByText("Full Statistics")).toBeInTheDocument();
  },
};

export const WithoutButtonTarget = {
  name: "Without Button Target",
  args: {
    subheading: "Overview",
    heading: "Quick Facts",
    paragraph: "Key statistics about the college.",
    buttons: [
      { url: "#", title: "Learn More" },
    ],
    items: [
      { heading: "1,800", paragraph: "Undergraduate students" },
      { heading: "12:1", paragraph: "Student-to-faculty ratio" },
    ],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Quick Facts")).toBeInTheDocument();
    await expect(canvas.getByText("1,800")).toBeInTheDocument();
    await expect(canvas.getByText("Learn More")).toBeInTheDocument();
  },
};
