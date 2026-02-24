import Carousel from "./Carousel.vue";
import { expect, waitFor } from "storybook/test";

// The default export metadata for your component
export default {
  title: "Core Components/Carousel",
  component: Carousel,
};

const mockItems = [
  {
    image: {
      src: "https://placeholdit.com/600x400/dddddd/999999",
      srcset:
        "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Rectangle: "https://placehold.co/600x400",
        Rectangle_mobile: "https://placehold.co/300x200",
      },
    },
    heading: "Future of Artificial Intelligence",
    subheading: "Technology",
    paragraph: "AI is reshaping industries at an unprecedented pace.",
    url: "#",
    // Structure required for Accordion style images
    //

    buttons: [
      {
        button: {
          size: "small",
          title: "button1",
          url: "https://www.colby.edu",
        },
      },
    ],
  },
  {
    image: {
      src: "https://placeholdit.com/600x400/dddddd/999999",
      srcset:
        "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Rectangle: "https://placehold.co/600x400",
        Rectangle_mobile: "https://placehold.co/300x200",
      },
    },
    heading: "Sustainable Energy Solutions",
    subheading: "Environment",
    paragraph: "Solar and wind energy are becoming more accessible than ever.",
    url: "#",
    buttons: [
      {
        button: {
          size: "small",
          title: "button1",
          url: "https://www.colby.edu",
        },
      },
    ],
  },
  {
    image: {
      src: "https://placeholdit.com/600x400/dddddd/999999",
      srcset:
        "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Rectangle: "https://placehold.co/600x400",
        Rectangle_mobile: "https://placehold.co/300x200",
      },
    },
    heading: "Modern Architecture Trends",
    subheading: "Design",
    paragraph: "Exploring the intersection of function and aesthetics in 2024.",
    url: "#",

    buttons: [
      {
        button: {
          size: "small",
          title: "button1",
          url: "https://www.colby.edu",
        },
      },
    ],
  },
];

export const Primary = {
  name: "Primary",
  args: {
    render_api: false,
    items: mockItems,
    buttons: [
      {
        button: {
          size: "small",
          title: "button1",
          url: "https://www.colby.edu",
        },
      },
    ],
  },
  play: async ({ canvas }) => {
    await waitFor(() => {
      expect(
        canvas.getByText("Future of Artificial Intelligence"),
      ).toBeInTheDocument();
    });
  },
};

export const AutoplayFalse = {
  name: "Autoplay False",
  args: {
    render_api: false,
    items: mockItems,
    autoplay: false,
    buttons: [
      {
        button: {
          size: "small",
          title: "button1",
          url: "https://www.colby.edu",
        },
      },
    ],
  },
  play: async ({ canvas }) => {
    await waitFor(() => {
      expect(
        canvas.getByText("Future of Artificial Intelligence"),
      ).toBeInTheDocument();
    });
  },
};

export const WithHeadingAndParagraph = {
  name: "With Heading and Paragraph",
  args: {
    render_api: false,
    items: mockItems,
    heading: "Latest Stories",
    subheading: "News",
    paragraph: "Stay up to date with the latest from Colby.",
    buttons: [
      {
        button: {
          size: "small",
          title: "All News",
          url: "https://www.colby.edu",
        },
      },
    ],
  },
  play: async ({ canvas }) => {
    await waitFor(() => {
      expect(canvas.getByText("Latest Stories")).toBeInTheDocument();
    });
  },
};

export const CustomInterval = {
  name: "Custom Interval",
  args: {
    render_api: false,
    items: mockItems,
    autoplay: true,
    interval: 3000,
    buttons: [
      {
        button: {
          size: "small",
          title: "All News",
          url: "https://www.colby.edu",
        },
      },
    ],
  },
  play: async ({ canvas }) => {
    await waitFor(() => {
      expect(
        canvas.getByText("Future of Artificial Intelligence"),
      ).toBeInTheDocument();
    });
  },
};

export const SingleSlide = {
  name: "Single Slide (No Autoplay)",
  args: {
    render_api: false,
    items: [mockItems[0]],
    autoplay: true,
    buttons: [
      {
        button: {
          size: "small",
          title: "Read More",
          url: "https://www.colby.edu",
        },
      },
    ],
  },
  play: async ({ canvas }) => {
    await waitFor(() => {
      expect(
        canvas.getByText("Future of Artificial Intelligence"),
      ).toBeInTheDocument();
    });
  },
};

export const LightType = {
  name: "Light Type",
  args: {
    render_api: false,
    items: mockItems,
    type: "light",
    buttons: [
      {
        button: {
          size: "small",
          title: "All News",
          url: "https://www.colby.edu",
        },
      },
    ],
  },
  play: async ({ canvas }) => {
    await waitFor(() => {
      expect(
        canvas.getByText("Future of Artificial Intelligence"),
      ).toBeInTheDocument();
    });
  },
};
