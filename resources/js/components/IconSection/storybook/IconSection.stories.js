import { expect } from "storybook/test";
import IconSection from "../IconSection.vue";

export default {
  title: "Core Components/Icon Section",
  component: IconSection,
  tags: ["autodocs"],
};

export const Default = {
  name: "Default",
  args: {
    subheading: "Why Join",
    heading: "A global online community awaits.",
    paragraph:
      "Join an exclusive network of talented alumni to build and expand professional relationships.",
    buttons: [
      {
        url: "#",
        title: "Join Now",
      },
    ],
    items: [
      {
        image: { url: "https://www.colby.edu/wp-content/uploads/2024/12/20231017_gordoncenteraerial_0030-800x800.jpg", alt: "Connect" },
        heading: "Connect",
        paragraph:
          "Find and reminisce with fellow graduates, see what they have been up to and stay in touch.",
        sizes: {
          Square: 'https://www.colby.edu/wp-content/uploads/2024/12/20231017_gordoncenteraerial_0030-800x800.jpg',
        }
      },
      {
        image: { url: "https://www.colby.edu/wp-content/uploads/2024/12/20231017_gordoncenteraerial_0030-800x800.jpg", alt: "Give back" },
        heading: "Give back",
        paragraph:
          "Introduce, employ and offer to act as a mentor to our graduating students.",
        sizes: {
          Square: 'https://www.colby.edu/wp-content/uploads/2024/12/20231017_gordoncenteraerial_0030-800x800.jpg',
        }
      },
      {
        image: { url: "https://www.colby.edu/wp-content/uploads/2024/12/20231017_gordoncenteraerial_0030-800x800.jpg", alt: "Expand" },
        heading: "Expand",
        paragraph:
          "Leverage your professional network to get introduced to people you should know.",
        sizes: {
          Square: 'https://www.colby.edu/wp-content/uploads/2024/12/20231017_gordoncenteraerial_0030-800x800.jpg',
        }
      },
      {
        image: {
          url: "https://www.colby.edu/wp-content/uploads/2024/12/20231017_gordoncenteraerial_0030-800x800.jpg",
          alt: "Re-connect",
        },
        heading: "Re-connect with classmates",
        paragraph:
          "Colby Connect allows you to use the trusted Colby College environment to expand your professional network.",
        sizes: {
          Square: 'https://www.colby.edu/wp-content/uploads/2024/12/20231017_gordoncenteraerial_0030-800x800.jpg',
        }
      },
    ],
  },
  play: async ({ canvas }) => {
    if (import.meta.env.MODE !== 'test' ) return;
    await expect(
      canvas.getByText("A global online community awaits."),
    ).toBeInTheDocument();
    await expect(canvas.getByText("Connect")).toBeInTheDocument();
    await expect(canvas.getByText("Give back")).toBeInTheDocument();
    await expect(canvas.getByText("Join Now")).toBeInTheDocument();
  },
};


export const FollowUs = {
  name: "Follow Us",
  args: {
    subheading: "Follow Us",
    heading: "",
    paragraph:
      "Join an exclusive social network of talented alumni to build and expand professional relationships.",
    buttons: [
      {
        url: "#",
        title: "Join Now",
      },
    ],
    items: [
      {
        image: { url: "https://www.colby.edu/wp-content/uploads/2026/09/icons8-facebook-100.png", alt: "Connect", sizes: {
          Square: 'https://www.colby.edu/wp-content/uploads/2026/09/icons8-facebook-100.png',
        } },
        heading: "",
        paragraph:
          "",
        
      },
    ],
  },
};