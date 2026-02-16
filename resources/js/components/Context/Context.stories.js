import Context from "./Context.vue";

export default {
  title: "Core Components/Context",
  component: Context,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xlarge", "large", "medium", "small", "xsmall"],
    },
    align: {
      control: "select",
      options: ["left", "center"],
    },
    type: {
      control: "select",
      options: ["dark", "light"],
    },
  },
};

export const Default = {
  name: "Default",
  args: {
    size: "medium",
    align: "left",
    type: "dark",
    subheading: "Academics",
    heading: "Explore Our Programs",
    paragraph: "Colby offers more than 60 majors and minors across the liberal arts and sciences.",
    buttons: {
      items: [
        { button: { url: "#", title: "Learn More", target: "" } },
      ],
    },
  },
};

export const WithMultipleButtons = {
  name: "Multiple Buttons",
  args: {
    size: "medium",
    align: "left",
    type: "dark",
    subheading: "Admissions",
    heading: "Apply to Colby",
    paragraph: "Begin your journey at one of America's top liberal arts colleges.",
    buttons: {
      items: [
        { button: { url: "#", title: "Apply Now", target: "" } },
        { button: { url: "#", title: "Request Info", target: "" } },
      ],
    },
  },
};

export const Centered = {
  name: "Centered",
  args: {
    size: "large",
    align: "center",
    type: "dark",
    subheading: "Mission",
    heading: "Our Purpose",
    paragraph: "Colby is dedicated to the education of thoughtful, capable citizens of the world.",
    buttons: {
      items: [
        { button: { url: "#", title: "Read More", target: "" } },
      ],
    },
  },
};

export const LightType = {
  name: "Light Type",
  args: {
    size: "large",
    align: "left",
    type: "light",
    subheading: "Spotlight",
    heading: "Faculty Achievements",
    paragraph: "Celebrating the accomplishments of our distinguished faculty.",
    buttons: {
      items: [
        { button: { url: "#", title: "View All", target: "" } },
      ],
    },
  },
  decorators: [
    () => ({
      template: '<div class="bg-indigo p-10"><story /></div>',
    }),
  ],
};

export const NoButtons = {
  name: "No Buttons",
  args: {
    size: "medium",
    align: "left",
    type: "dark",
    subheading: "Research",
    heading: "Student-Faculty Collaboration",
    paragraph: "Every year, hundreds of students collaborate with faculty on original research projects.",
    buttons: { items: [] },
  },
};
