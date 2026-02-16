import Image from "./Image.vue";

export default {
  title: "Core Components/Image",
  component: Image,
  tags: ["autodocs"],
  argTypes: {
    imageScale: {
      control: "select",
      options: ["100", "75", "50", "25"],
    },
  },
};

export const Default = {
  name: "Default",
  args: {
    image: {
      url: "https://placehold.co/800x500",
      alt: "Placeholder image",
    },
    caption: "An example image caption",
  },
};

export const Scaled75 = {
  name: "75% Scale",
  args: {
    image: {
      url: "https://placehold.co/800x500",
      alt: "Placeholder image",
    },
    imageScale: "75",
    caption: "Image at 75% scale",
  },
};

export const Scaled50 = {
  name: "50% Scale",
  args: {
    image: {
      url: "https://placehold.co/800x500",
      alt: "Placeholder image",
    },
    imageScale: "50",
    caption: "Image at 50% scale",
  },
};

export const Centered = {
  name: "Centered",
  args: {
    image: {
      url: "https://placehold.co/800x500",
      alt: "Placeholder image",
    },
    imageScale: "50",
    alignCenter: true,
    caption: "Centered image at 50% scale",
  },
};

export const WithPath = {
  name: "With Image Path",
  args: {
    imagePath: "https://placehold.co/800x500",
    caption: "Image loaded via path",
  },
};
