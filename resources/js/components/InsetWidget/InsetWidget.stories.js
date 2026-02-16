import InsetWidget from "./InsetWidget.vue";

export default {
  title: "Core Components/Inset Widget",
  component: InsetWidget,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
};

export const Default = {
  name: "Default",
  args: {
    subheading: "Get Involved",
    heading: "Ready to Learn More?",
    paragraph: "Connect with our admissions team to learn more about Colby College.",
    buttons: [
      { url: "#", title: "Request Information" },
      { url: "#", title: "Schedule a Visit" },
    ],
  },
};

export const Inset = {
  name: "Inset",
  args: {
    ...Default.args,
    inset: true,
  },
};
