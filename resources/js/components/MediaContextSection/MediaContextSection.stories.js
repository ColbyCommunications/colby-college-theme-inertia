import MediaContextSection from "./MediaContextSection.vue";

export default {
  title: "Core Components/Media Context Section",
  component: MediaContextSection,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["wide", "narrow"],
    },
  },
};

const sampleItems = [
  {
    image: {
      src: "https://placehold.co/600x400",
      srcset: "",
      alt: "Campus view",
    },
    subheading: "Academics",
    heading: "A World-Class Education",
    paragraph: "Colby offers a rigorous liberal arts curriculum that prepares students for success.",
    buttons: [{ button: { url: "#", title: "Learn More", target: "" } }],
  },
  {
    image: {
      src: "https://placehold.co/600x400",
      srcset: "",
      alt: "Research lab",
    },
    reverse: true,
    subheading: "Research",
    heading: "Undergraduate Research",
    paragraph: "Students work alongside faculty on groundbreaking research projects.",
    buttons: [{ button: { url: "#", title: "Explore Research", target: "" } }],
  },
];

export const Wide = {
  name: "Wide",
  args: {
    type: "wide",
    items: sampleItems,
  },
};

export const Narrow = {
  name: "Narrow",
  args: {
    type: "narrow",
    items: sampleItems,
  },
};
