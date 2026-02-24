import Hero from "./Hero.vue";
import { expect } from "storybook/test";

// The default export metadata for your component
export default {
  title: "Core Components/Hero",
  component: Hero,
};

export const Primary = {
  name: "Primary",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    image: {
      src: "https://placeholdit.com/400x600/dddddd/999999",
      srcset:
        "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Square: "https://placehold.co/600x400",
        Square_mobile: "https://placehold.co/400x300",
      },
    },
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  play: async ({ canvas }) => {
    // Both subheading (h1) and heading (h2) are "Lorem ipsum", so use getAllByText
    const loremElements = canvas.getAllByText("Lorem ipsum");
    await expect(loremElements.length).toBeGreaterThanOrEqual(2);
    await expect(
      canvas.getByText(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ),
    ).toBeInTheDocument();
  },
};

export const Portrait = {
  name: "Portrait Orientation",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    imageOrientation: "portrait",
    image: {
      src: "https://placeholdit.com/400x600/dddddd/999999",
      srcset:
        "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Square: "https://placehold.co/400x600",
        Square_mobile: "https://placehold.co/300x400",
      },
    },
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  play: async ({ canvas }) => {
    // Both subheading (h1) and heading (h2) are "Lorem ipsum", so use getAllByText
    const loremElements = canvas.getAllByText("Lorem ipsum");
    await expect(loremElements.length).toBeGreaterThanOrEqual(2);
    await expect(
      canvas.getByText(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ),
    ).toBeInTheDocument();
  },
};

export const Center = {
  name: "Center Align",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    imageOrientation: "portrait",
    image: {
      src: "https://placeholdit.com/400x600/dddddd/999999",
      srcset:
        "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Square: "https://placehold.co/400x600",
        Square_mobile: "https://placehold.co/300x400",
      },
    },
    align: "center",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  play: async ({ canvas }) => {
    const loremElements = canvas.getAllByText("Lorem ipsum");
    await expect(loremElements.length).toBeGreaterThanOrEqual(2);
  },
};

export const NoImage = {
  name: "No Image",
  args: {
    subheading: "Welcome",
    heading: "Text Only Hero",
    paragraph: "Content only, no side image.",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Text Only Hero")).toBeInTheDocument();
  },
};

export const CenterWithSecondaryImages = {
  name: "Center With Secondary Images",
  args: {
    subheading: "Gallery",
    heading: "Four Column Layout",
    align: "center",
    columns: 4,
    images: [
      {
        src: "https://placehold.co/300x450",
        srcset: "https://placehold.co/300x450",
        alt: "Image 1",
        caption: "Image one caption",
      },
      {
        src: "https://placehold.co/300x450",
        srcset: "https://placehold.co/300x450",
        alt: "Image 2",
      },
      {
        src: "https://placehold.co/300x450",
        srcset: "https://placehold.co/300x450",
        alt: "Image 3",
      },
      {
        src: "https://placehold.co/300x450",
        srcset: "https://placehold.co/300x450",
        alt: "Image 4",
      },
    ],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Four Column Layout")).toBeInTheDocument();
    await expect(canvas.getByAltText("Image 1")).toBeInTheDocument();
    await expect(canvas.getByText("Image one caption")).toBeInTheDocument();
  },
};

export const ImageWithCaption = {
  name: "Image With Caption",
  args: {
    subheading: "Featured",
    heading: "Captioned Image",
    image: {
      src: "https://placehold.co/400x600",
      srcset: "https://placehold.co/400x600",
      alt: "Captioned photo",
      caption: "Photo by Colby College",
      sizes: {
        Square: "https://placehold.co/400x600",
        Square_mobile: "https://placehold.co/300x400",
      },
    },
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Photo by Colby College")).toBeInTheDocument();
  },
};
