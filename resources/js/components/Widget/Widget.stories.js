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
};

export const WithoutButtons = {
  name: "Without Buttons",
  args: {
    heading: "Hours",
    text: "<p>Monday - Friday: 8am - 5pm</p><p>Saturday - Sunday: Closed</p>",
  },
};
