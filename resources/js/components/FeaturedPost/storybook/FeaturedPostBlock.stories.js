import FeaturedPost from "../FeaturedPost.vue";

export default {
  title: "Blocks/Featured Post",
  component: FeaturedPost,
  tags: ["!autodocs"],
  argTypes: {
    heading: {
      name: "Heading",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
    paragraph: {
      name: "Paragraph",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
    caption: {
      name: "Caption",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
    buttons: { table: { disable: true } },
    post: { table: { disable: true } },
    post_image: { table: { disable: true } },
  },
};

export const Default = {
  name: "Featured Post",
  args: {
    heading: "Reunion",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",
    caption: "Welcome Alumni",
    buttons: [{ url: "#", title: "All Events" }],
    post: {
      date: "June 24, 2022",
      heading: "Lorem ipsum dolor sit amet, consectet.",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",
      buttons: [{ url: "#", title: "All Events" }],
      image: {
        srcset: "https://placehold.co/760x430",
        url: "https://www.colby.edu/wp-content/uploads/2024/12/20231017_gordoncenteraerial_0030-800x800.jpg",
        alt: "Featured post image",
        sizes: {
          Rectangle: "https://www.colby.edu/wp-content/uploads/2024/12/20231017_gordoncenteraerial_0030-800x800.jpg",
        },
      },
    },
  },
};
