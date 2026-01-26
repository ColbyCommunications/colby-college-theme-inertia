import ArrowButton from "./ArrowButton.vue";

// The default export metadata for your component
export default {
  title: "Core Components/ArrowButton",
  component: ArrowButton,
};

export const Primary = {
  // 👇 Rename this story
  name: "Primary",
};

export const Reverse = {
  // 👇 Rename this story
  name: "Reverse",
  args: {
    reverse: true,
  },
};
