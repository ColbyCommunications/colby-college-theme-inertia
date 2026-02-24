import { expect } from "storybook/test";
import HomeSection from "./HomeSection.vue";

export default {
  title: "Core Components/Home Section",
  component: HomeSection,
  tags: ["autodocs"],
};

export const Default = {
  name: "Default",
  args: {
    news: {
      renderApi: false,
      subheading: "News",
      heading: "Latest from Colby",
      paragraph: "Stay up to date with the latest news from Colby College.",
      items: [
        {
          heading: "Colby Announces New Initiative",
          subheading: "Campus News",
          paragraph: "A new program aims to expand access and opportunity.",
          image: {
            sizes: { desktop: "https://placehold.co/400x300", mobile: "https://placehold.co/400x300" },
            alt: "News item",
          },
        },
        {
          heading: "Research Breakthrough",
          subheading: "Academics",
          paragraph: "Faculty and students collaborate on cutting-edge research.",
          image: {
            sizes: { desktop: "https://placehold.co/400x300", mobile: "https://placehold.co/400x300" },
            alt: "Research",
          },
        },
        {
          heading: "Alumni Achievement",
          subheading: "Community",
          paragraph: "Colby alumni continue to make an impact worldwide.",
          image: {
            sizes: { desktop: "https://placehold.co/400x300", mobile: "https://placehold.co/400x300" },
            alt: "Alumni",
          },
        },
      ],
    },
    events: {
      subheading: "Events",
      heading: "Upcoming Events",
      paragraph: "Join us for these exciting upcoming events on campus.",
      buttons: [{ button: { url: "#", title: "View All Events", target: "" } }],
      items: [
        {
          heading: "Fall Open House",
          subheading: "Oct 15, 2025",
          paragraph: "Explore campus and meet current students and faculty.",
          url: "#",
          image: {
            sizes: { desktop: "https://placehold.co/400x300", mobile: "https://placehold.co/400x300" },
            alt: "Open House",
          },
        },
        {
          heading: "Homecoming Weekend",
          subheading: "Oct 22, 2025",
          paragraph: "Welcome back alumni for a weekend of celebration.",
          url: "#",
          image: {
            sizes: { desktop: "https://placehold.co/400x300", mobile: "https://placehold.co/400x300" },
            alt: "Homecoming",
          },
        },
        {
          heading: "Winter Concert Series",
          subheading: "Dec 5, 2025",
          paragraph: "Enjoy performances by student ensembles and guest artists.",
          url: "#",
          image: {
            sizes: { desktop: "https://placehold.co/400x300", mobile: "https://placehold.co/400x300" },
            alt: "Concert",
          },
        },
      ],
    },
    cta: {
      subheading: "Visit",
      heading: "Plan Your Visit",
      paragraph: "Come see for yourself what makes Colby special.",
      buttons: [{ url: "#", title: "Schedule a Visit" }],
      image: {
        src: "https://placehold.co/1200x600",
        srcset: "",
        alt: "Colby campus",
        sizes: { Landscape: "1200w" },
      },
    },
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Latest from Colby")).toBeInTheDocument();
    await expect(canvas.getByText("Upcoming Events")).toBeInTheDocument();
    await expect(canvas.getByText("Plan Your Visit")).toBeInTheDocument();
  },
};
