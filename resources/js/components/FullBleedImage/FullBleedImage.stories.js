import FullBleedImage from "./FullBleedImage.vue";

export default {
  title: "Core Components/Full Bleed Image",
  component: FullBleedImage,
  tags: ["autodocs"],
};

export const Default = {
  name: "Default",
  args: {
    heading: "Areas of Distinction",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",
    buttons: [
      {
        url: "#",
        title: "Areas of Distinction",
      },
    ],
    image: {
      srcset: "https://placehold.co/1280x700",
      src: "https://placehold.co/480x480",
      alt: "Placeholder image",
      sizes: {
        Hero: "https://placehold.co/1280x700",
        Square: "https://placehold.co/480x480",
      },
    },
  },
};
