import MediaContext from "./MediaContext.vue";

// The default export metadata for your component
export default {
  title: "Core Components/Media Context",
  component: MediaContext,
};

const globalArgs = {
  heading: "Lorem Ipsum",
  subheading: "Veritatis sit voluptatem",
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

export const Inset = {
  // 👇 Rename this story
  name: "Inset",
  args: {
    ...globalArgs,
    inset: true,
  },
};

export const Reverse = {
  // 👇 Rename this story
  name: "Reverse",
  args: {
    ...globalArgs,
    reverse: true,
  },
};

export const Large = {
  // 👇 Rename this story
  name: "Large",
  args: {
    ...globalArgs,
    size: "large",
  },
};
export const Video = {
  // 👇 Rename this story
  name: "Video",
  args: {
    ...globalArgs,
    video: {
      id: "jQixf1UCKac",
    },
  },
};
