import MediaAside from "./MediaAside.vue";

export default {
  title: "Core Components/Media Aside",
  component: MediaAside,
  tags: ["autodocs"],
};

export const Static = {
  name: "Static",
  args: {
    image: {
      srcset: "https://placehold.co/900x430",
      src: "https://placehold.co/600x600",
      alt: "Placeholder image",
      caption:
        "Caption lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    heading:
      "Lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus felis, interdum vel lorem vitae, imperdiet commodo nisi.",
    buttons: [{ url: "#", title: "Read Story" }],
  },
};

export const Carousel = {
  name: "Carousel",
  args: {
    carousel: true,
    items: [
      {
        image: {
          srcset: "https://placehold.co/900x430",
          src: "https://placehold.co/600x600",
          alt: "Slide 1",
          caption: "Caption for slide one.",
        },
        heading: "Slide one heading",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        buttons: [{ url: "#", title: "Read Story" }],
      },
      {
        image: {
          srcset: "https://placehold.co/900x430",
          src: "https://placehold.co/600x600",
          alt: "Slide 2",
          caption: "Caption for slide two.",
        },
        heading: "Slide two heading",
        paragraph:
          "Donec lectus felis, interdum vel lorem vitae, imperdiet commodo nisi.",
        buttons: [{ url: "#", title: "Read Story" }],
      },
      {
        image: {
          srcset: "https://placehold.co/900x430",
          src: "https://placehold.co/600x600",
          alt: "Slide 3",
          caption: "Caption for slide three.",
        },
        heading: "Slide three heading",
        paragraph: "Donec nec blandit enim.",
        buttons: [{ url: "#", title: "Read Story" }],
      },
    ],
  },
};
