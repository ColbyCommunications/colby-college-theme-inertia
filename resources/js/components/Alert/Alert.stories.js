import Alert from "./Alert.vue";

// The default export metadata for your component
export default {
  title: "Core Components/Alert",
  component: Alert,
  argTypes: {
    type: {
      control: "select",
      options: ["info", "emergency"],
    },
    buttonType: {
      control: "select",
      options: ["dark", "light"],
    },
    buttonSize: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
};

const globalArgs = {
  label: "Alert",
  primary: true,
  heading: "Alert",
  paragraph:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  buttons: [
    {
      button: {
        size: "small",
        title: "button1",
        url: "https://www.colby.edu",
      },
    },
  ],
  buttonType: "dark",
  buttonSize: "small",
};

export const Primary = {
  // 👇 Rename this story
  name: "Info",
  args: {
    ...globalArgs,
    type: "info",
  },
};

export const Secondary = {
  // 👇 Rename this story
  name: "Emergency",
  args: {
    ...globalArgs,
    type: "emergency",
  },
};
