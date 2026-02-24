import { expect } from "storybook/test";
import MediaAside from "./MediaAside.vue";

export default {
  title: "Core Components/Media Aside",
  component: MediaAside,
  tags: ["autodocs"],
};

export const Static = {
  name: "Static",
  args: {
    image: {
      srcset: "https://placehold.co/900x430",
      src: "https://placehold.co/600x600",
      alt: "Placeholder image",
      caption:
        "Caption lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    heading:
      "Lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus felis, interdum vel lorem vitae, imperdiet commodo nisi.",
    buttons: [{ url: "#", title: "Read Story" }],
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByAltText("Placeholder image"),
    ).toBeInTheDocument();
    await expect(canvas.getByText("Read Story")).toBeInTheDocument();
  },
};

export const Carousel = {
  name: "Carousel",
  args: {
    carousel: true,
    items: [
      {
        image: {
          srcset: "https://placehold.co/900x430",
          src: "https://placehold.co/600x600",
          alt: "Slide 1",
          caption: "Caption for slide one.",
        },
        heading: "Slide one heading",
        paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        buttons: [{ url: "#", title: "Read Story" }],
      },
      {
        image: {
          srcset: "https://placehold.co/900x430",
          src: "https://placehold.co/600x600",
          alt: "Slide 2",
          caption: "Caption for slide two.",
        },
        heading: "Slide two heading",
        paragraph:
          "Donec lectus felis, interdum vel lorem vitae, imperdiet commodo nisi.",
        buttons: [{ url: "#", title: "Read Story" }],
      },
      {
        image: {
          srcset: "https://placehold.co/900x430",
          src: "https://placehold.co/600x600",
          alt: "Slide 3",
          caption: "Caption for slide three.",
        },
        heading: "Slide three heading",
        paragraph: "Donec nec blandit enim.",
        buttons: [{ url: "#", title: "Read Story" }],
      },
    ],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Slide one heading")).toBeInTheDocument();
  },
};

export const StaticNoCaption = {
  name: "Static No Caption",
  args: {
    image: {
      srcset: "https://placehold.co/900x430",
      src: "https://placehold.co/600x600",
      alt: "No caption image",
    },
    heading: "Static without caption",
    paragraph: "This variant has no image caption.",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Static without caption")).toBeInTheDocument();
  },
};

export const CarouselNoButtons = {
  name: "Carousel No Buttons",
  args: {
    carousel: true,
    items: [
      {
        image: {
          srcset: "https://placehold.co/900x430",
          src: "https://placehold.co/600x600",
          alt: "Slide 1",
        },
        heading: "First slide without buttons",
        paragraph: "No buttons on this slide.",
      },
      {
        image: {
          srcset: "https://placehold.co/900x430",
          src: "https://placehold.co/600x600",
          alt: "Slide 2",
        },
        heading: "Second slide without buttons",
        paragraph: "Also no buttons.",
      },
    ],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("First slide without buttons")).toBeInTheDocument();
  },
};

export const CarouselWithNavigation = {
  name: "Carousel with Navigation",
  args: {
    carousel: true,
    items: [
      {
        image: {
          srcset: "https://placehold.co/900x430",
          src: "https://placehold.co/600x600",
          alt: "Nav Slide 1",
          caption: "Caption for slide one.",
        },
        heading: "Navigation slide one",
        paragraph: "First slide content.",
        buttons: [{ url: "#", title: "Learn More" }],
      },
      {
        image: {
          srcset: "https://placehold.co/900x430",
          src: "https://placehold.co/600x600",
          alt: "Nav Slide 2",
        },
        heading: "Navigation slide two",
        paragraph: "Second slide content.",
      },
    ],
  },
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByText("Navigation slide one")).toBeInTheDocument();
    // Click next button
    const nextBtn = canvas.getByText("Next");
    await userEvent.click(nextBtn);
    // Click previous button
    const prevBtn = canvas.getByText("Previous");
    await userEvent.click(prevBtn);
  },
};

export const StaticNoParagraph = {
  name: "Static No Paragraph",
  args: {
    image: {
      srcset: "https://placehold.co/900x430",
      src: "https://placehold.co/600x600",
      alt: "Static no paragraph",
    },
    heading: "Just a heading",
    buttons: [{ url: "#", title: "Read More" }],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Just a heading")).toBeInTheDocument();
    await expect(canvas.getByText("Read More")).toBeInTheDocument();
  },
};
