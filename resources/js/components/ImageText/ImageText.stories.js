import ImageText from "./ImageText.vue";

export default {
  title: "Core Components/Image Text",
  component: ImageText,
  tags: ["autodocs"],
  argTypes: {
    imageScale: {
      control: "select",
      options: ["100", "75", "50", "25"],
    },
    wrappingText: {
      control: "select",
      options: ["wrap", "no-wrap"],
    },
    alignImage: {
      control: "select",
      options: ["left", "right"],
    },
    alignText: {
      control: "select",
      options: ["left", "center"],
    },
  },
};

const sampleText =
  "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo odio, ultrices quis auctor eu, fermentum at dolor. Vivamus cursus lorem ut ultrices iaculis. Phasellus et ante nec urna facilisis fringilla. Fusce tincidunt, magna sit amet varius porttitor, orci metus lacinia mi, vel vulputate nisl diam lacinia augue.</p>";

export const Default = {
  name: "Default",
  args: {
    image: {
      url: "https://placehold.co/400x300",
      alt: "Placeholder image",
    },
    imageScale: "50",
    alignImage: "left",
    wrappingText: "no-wrap",
    paragraphText: sampleText,
    mediaCaption: "Image caption here",
  },
};

export const WrapLeft = {
  name: "Wrap Left",
  args: {
    ...Default.args,
    wrappingText: "wrap",
    alignImage: "left",
  },
};

export const WrapRight = {
  name: "Wrap Right",
  args: {
    ...Default.args,
    wrappingText: "wrap",
    alignImage: "right",
  },
};

export const SideBySideRight = {
  name: "Side-by-Side Right",
  args: {
    ...Default.args,
    alignImage: "right",
    imageScale: "50",
  },
};
