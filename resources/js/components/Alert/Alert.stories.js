import Alert from "./Alert.vue";
import { expect } from "storybook/test";

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
  play: async ({ canvas }) => {
    // The Alert component renders heading with a trailing colon: "Alert:"
    await expect(canvas.getByText("Alert:")).toBeInTheDocument();
    await expect(
      canvas.getByText(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ),
    ).toBeInTheDocument();
    await expect(canvas.getByText("button1")).toBeInTheDocument();
  },
};

export const Secondary = {
  // 👇 Rename this story
  name: "Emergency",
  args: {
    ...globalArgs,
    type: "emergency",
  },
  play: async ({ canvas }) => {
    // The Alert component renders heading with a trailing colon: "Alert:"
    await expect(canvas.getByText("Alert:")).toBeInTheDocument();
    await expect(
      canvas.getByText(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ),
    ).toBeInTheDocument();
  },
};
