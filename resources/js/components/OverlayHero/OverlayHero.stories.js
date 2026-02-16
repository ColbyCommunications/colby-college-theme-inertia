import OverlayHero from "./OverlayHero.vue";

export default {
  title: "Core Components/Overlay Hero",
  component: OverlayHero,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["large", "medium"] },
  },
};

export const WithImage = {
  name: "With Image",
  args: {
    subheading: "Welcome to",
    heading: "Colby College",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buttons: [{ button: { url: "#", title: "Learn More", target: "" } }],
    image: {
      src: "https://placehold.co/1280x720",
      srcset: "https://placehold.co/1280x720",
      alt: "Campus view",
      sizes: { Hero: "https://placehold.co/1280x720" },
    },
    fromPage: true,
  },
};

export const Medium = {
  name: "Medium Size",
  args: {
    ...WithImage.args,
    size: "medium",
  },
};
