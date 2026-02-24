import { expect } from "storybook/test";
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
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText("Image caption here"),
    ).toBeInTheDocument();
  },
};

export const WrapLeft = {
  name: "Wrap Left",
  args: {
    ...Default.args,
    wrappingText: "wrap",
    alignImage: "left",
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText("Image caption here"),
    ).toBeInTheDocument();
  },
};

export const WrapRight = {
  name: "Wrap Right",
  args: {
    ...Default.args,
    wrappingText: "wrap",
    alignImage: "right",
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText("Image caption here"),
    ).toBeInTheDocument();
  },
};

export const SideBySideRight = {
  name: "Side-by-Side Right",
  args: {
    ...Default.args,
    alignImage: "right",
    imageScale: "50",
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText("Image caption here"),
    ).toBeInTheDocument();
  },
};

export const Scale25 = {
  name: "Scale 25%",
  args: {
    ...Default.args,
    imageScale: "25",
    wrappingText: "no-wrap",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole("img")).toBeInTheDocument();
  },
};

export const Scale75 = {
  name: "Scale 75%",
  args: {
    ...Default.args,
    imageScale: "75",
    wrappingText: "no-wrap",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole("img")).toBeInTheDocument();
  },
};

export const Scale100 = {
  name: "Scale 100%",
  args: {
    ...Default.args,
    imageScale: "100",
    wrappingText: "no-wrap",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole("img")).toBeInTheDocument();
  },
};

export const ImagePathOnly = {
  name: "Image Path Only",
  args: {
    imagePath: "https://placehold.co/400x300",
    imageScale: "50",
    wrappingText: "no-wrap",
    paragraphText: sampleText,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole("img")).toBeInTheDocument();
  },
};

export const NoCaption = {
  name: "No Caption",
  args: {
    image: {
      url: "https://placehold.co/400x300",
      alt: "Placeholder image",
    },
    imageScale: "50",
    wrappingText: "wrap",
    alignImage: "left",
    paragraphText: sampleText,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole("img")).toBeInTheDocument();
  },
};

export const WrapWithImagePath = {
  name: "Wrap with Image Path",
  args: {
    imagePath: "https://placehold.co/400x300",
    imageScale: "50",
    wrappingText: "wrap",
    alignImage: "left",
    paragraphText: sampleText,
    mediaCaption: "Path-based image caption",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Path-based image caption")).toBeInTheDocument();
  },
};

export const CenteredText = {
  name: "Centered Text",
  args: {
    image: {
      url: "https://placehold.co/400x300",
      alt: "Centered text image",
    },
    imageScale: "50",
    wrappingText: "no-wrap",
    alignImage: "left",
    alignText: "center",
    paragraphText: sampleText,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByAltText("Centered text image")).toBeInTheDocument();
  },
};

export const WrapRightNoCaption = {
  name: "Wrap Right No Caption",
  args: {
    image: {
      url: "https://placehold.co/400x300",
      alt: "No caption wrap right",
    },
    imageScale: "75",
    wrappingText: "wrap",
    alignImage: "right",
    paragraphText: sampleText,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByAltText("No caption wrap right")).toBeInTheDocument();
  },
};
