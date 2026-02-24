import { expect } from "storybook/test";
import Widget from "./Widget.vue";

export default {
  title: "Core Components/Widget",
  component: Widget,
  tags: ["autodocs"],
};

export const Default = {
  name: "Default",
  args: {
    heading: "Contact",
    text: '<p><a href="/">4000 Mayflower Hill<br>Waterville, Maine 04901</a></p><p>207-859-4000</p>',
    buttons: [
      {
        url: "https://www.colby.edu",
        title: "Download now",
      },
    ],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Contact")).toBeInTheDocument();
    await expect(canvas.getByText("207-859-4000")).toBeInTheDocument();
    await expect(canvas.getByText("Download now")).toBeInTheDocument();
  },
};

export const WithoutButtons = {
  name: "Without Buttons",
  args: {
    heading: "Hours",
    text: "<p>Monday - Friday: 8am - 5pm</p><p>Saturday - Sunday: Closed</p>",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Hours")).toBeInTheDocument();
    await expect(
      canvas.getByText("Monday - Friday: 8am - 5pm"),
    ).toBeInTheDocument();
  },
};

export const WithoutHeading = {
  name: "Without Heading",
  args: {
    heading: "",
    text: "<p>Quick links and resources for current students.</p>",
    buttons: [
      { url: "#", title: "Student Portal" },
    ],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Student Portal")).toBeInTheDocument();
  },
};

export const WithoutButtonTarget = {
  name: "Without Button Target",
  args: {
    heading: "Links",
    text: "<p>Important resources.</p>",
    buttons: [
      { url: "#", title: "Visit Site" },
    ],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Links")).toBeInTheDocument();
    await expect(canvas.getByText("Visit Site")).toBeInTheDocument();
  },
};
