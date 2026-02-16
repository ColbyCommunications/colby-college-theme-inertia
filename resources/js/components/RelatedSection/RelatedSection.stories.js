import RelatedSection from "./RelatedSection.vue";

export default {
  title: "Core Components/Related Section",
  component: RelatedSection,
  tags: ["autodocs"],
};

export const Default = {
  name: "Default",
  args: {
    subheading: "Explore",
    heading: "Related Programs",
    paragraph: "Discover more about our academic offerings and campus life.",
    buttons: [
      { url: "#", title: "View All Programs" },
    ],
    items: [
      {
        link: { url: "#", title: "Environmental Studies" },
        image: {
          src: "https://placehold.co/600x400",
          srcset: "",
          alt: "Environmental Studies",
          sizes: { Rectangle: "600w" },
        },
      },
      {
        link: { url: "#", title: "Biology Department" },
        image: {
          src: "https://placehold.co/600x400",
          srcset: "",
          alt: "Biology Department",
          sizes: { Rectangle: "600w" },
        },
      },
    ],
  },
};
