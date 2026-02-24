import { expect } from "storybook/test";
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
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Events")).toBeInTheDocument();
    await expect(canvas.getByText("June 24, 2022")).toBeInTheDocument();
    await expect(
      canvas.getByAltText("Featured post image"),
    ).toBeInTheDocument();
  },
};

export const WithoutPostButtons = {
  name: "Without Post Buttons",
  args: {
    heading: "News",
    paragraph: "Stay up to date with the latest from Colby.",
    buttons: [{ url: "#", title: "All News" }],
    post: {
      date: "March 15, 2024",
      heading: "Faculty Research Spotlight",
      paragraph: "Exploring new frontiers in environmental science.",
      buttons: [],
      image: {
        srcset: "https://placehold.co/760x430",
        src: "https://placehold.co/410x290",
        alt: "Research spotlight image",
        sizes: {
          Rectangle: "https://placehold.co/760x430",
        },
      },
    },
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("News")).toBeInTheDocument();
    await expect(canvas.getByText("March 15, 2024")).toBeInTheDocument();
    await expect(canvas.getByText("All News")).toBeInTheDocument();
  },
};
