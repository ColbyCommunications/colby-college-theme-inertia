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
    items: [
      { heading: "2,000", paragraph: "Students from around the world" },
      { heading: "56", paragraph: "Majors across the arts and sciences" },
      { heading: "35", paragraph: "Minors to complement any major" },
      { heading: "9:1", paragraph: "Student-to-faculty ratio" },
    ],
  },
};
