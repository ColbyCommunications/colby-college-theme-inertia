import CollageSection from "./CollageSection.vue";

// The default export metadata for your component
export default {
  title: "Core Components/Collage Section",
  component: CollageSection,
};

const globalArgs = {
  heading: "Lorem Ipsum",
  subheading: "Veritatis sit voluptatem",
  images: [
    {
      src: "https://placeholdit.com/600x400/dddddd/999999",
      srcset:
        "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      image: {
        sizes: {
          Hero: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
          mobile: "https://placehold.co/300x200",
        },
      },
    },
    {
      src: "https://placeholdit.com/600x400/dddddd/999999",
      srcset:
        "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      image: {
        sizes: {
          Square:
            "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
          mobile: "https://placehold.co/300x200",
        },
      },
    },
    {
      src: "https://placeholdit.com/600x400/dddddd/999999",
      srcset:
        "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      image: {
        sizes: {
          Rectangle:
            "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
          mobile: "https://placehold.co/300x200",
        },
      },
    },
  ],
  paragraph:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

export const Primary = {
  // 👇 Rename this story
  name: "Default",
  args: {
    ...globalArgs,
  },
};
