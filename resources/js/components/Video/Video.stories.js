import Video from "./Video.vue";

// The default export metadata for your component
export default {
  title: "Core Components/Video",
  component: Video,
};

export const Primary = {
  // 👇 Rename this story
  name: "Default",
  args: {
    id: "jQixf1UCKac",
    image: {
      src: "https://placeholdit.com/600x400/dddddd/999999",
      srcset:
        "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Hero: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
        mobile: "https://placehold.co/300x200",
      },
    },
  },
};
