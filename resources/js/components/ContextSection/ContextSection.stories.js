import ContextSection from "./ContextSection.vue";

// The default export metadata for your component
export default {
  title: "Core Components/Context Section",
  component: ContextSection,
};

export const Default = {
  // 👇 Rename this story
  name: "Default",
  args: {
    align: "left",
    heading: "Lorem Ipsum",
    subheading: "Anthropology",
    paragraph:
      "As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian.",
  },
};

export const RightAlign = {
  // 👇 Rename this story
  name: "Center Align",
  args: {
    align: "center",
    heading: "Lorem Ipsum",
    subheading: "Anthropology",
    paragraph:
      "As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian.",
  },
};

export const Large = {
  // 👇 Rename this story
  name: "Large",
  args: {
    size: "large",
    align: "center",
    heading: "Lorem Ipsum",
    subheading: "Anthropology",
    paragraph:
      "As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian.",
  },
};

export const WithButtons = {
  // 👇 Rename this story
  name: "With Buttons",
  args: {
    buttons: [
      {
        button: {
          size: "small",
          title: "button1",
          url: "https://www.colby.edu",
        },
      },
      {
        button: {
          size: "small",
          title: "button2",
          url: "https://www.colby.edu",
        },
      },
    ],
    align: "center",
    heading: "Lorem Ipsum",
    subheading: "Anthropology",
    paragraph:
      "As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian.",
  },
};
