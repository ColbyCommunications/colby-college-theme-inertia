import FeaturedPost from "./FeaturedPost.vue";

export default {
  title: "Core Components/Featured Post",
  component: FeaturedPost,
  tags: ["autodocs"],
};

export const Default = {
  name: "Default",
  args: {
    heading: "Events",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",
    caption: "Allen & Benner",
    buttons: [{ url: "#", title: "All Events" }],
    post: {
      date: "June 24, 2022",
      heading: "Lorem ipsum dolor sit amet, consectet.",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",
      buttons: [{ url: "#", title: "All Events" }],
      image: {
        srcset: "https://placehold.co/760x430",
        src: "https://placehold.co/410x290",
        alt: "Featured post image",
        sizes: {
          Rectangle: "https://placehold.co/760x430",
        },
      },
    },
  },
};
