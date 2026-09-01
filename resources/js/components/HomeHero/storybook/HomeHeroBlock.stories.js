import HomeHero from "../HomeHero.vue";

// The default export metadata for your component
export default {
  title: "Blocks/Home Hero",
  component: HomeHero,
  tags: ["!autodocs"],
  argTypes: {
    heading: {
      name: "Heading",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
    caption: {
      name: "Caption",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
    video: { table: { disable: true } },
    image: { table: { disable: true } },
    buttons: { table: { disable: true } },
    subheading: {
      name: "Subheading",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
    paragraph: {
      name: "Paragraph",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
    poster: { table: { disable: true } },
  },
};

export const Primary = {
  name: "Home Hero",
  args: {
    heading: "Lorem ipsum",
    caption: "waterville maine",
    image: {
      url: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
      srcset:
        "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Square:
          "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
        Square_mobile:
          "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
      },
    },
  },
};

export const withVideo = {
  name: "Home Hero with Video",
  args: {
    heading: "Lorem ipsum",
    caption: "waterville maine",
    video: 'https://www.colby.edu/wp-content/uploads/2024/12/24-Homepage-v3.mp4',
    image: {
      url: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
      srcset:
        "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Square:
          "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
        Square_mobile:
          "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
      },
    },
  },
};
