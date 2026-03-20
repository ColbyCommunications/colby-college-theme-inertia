import Carousel from "./Carousel.vue";

const mockItems = [
    {
      image: {
        src: "https://www.colby.edu/wp-content/uploads/2024/12/20220914_sunrise_0052-HDR-1.jpg",
        alt: "this is an alt tag",
      },
      heading: "Future of Artificial Intelligence",
      subheading: "Technology",
      paragraph: "AI is reshaping industries at an unprecedented pace.",
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
        src: "https://www.colby.edu/wp-content/uploads/2024/12/20220914_sunrise_0052-HDR-1.jpg",
        alt: "this is an alt tag",
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
        src: "https://www.colby.edu/wp-content/uploads/2024/12/20220914_sunrise_0052-HDR-1.jpg",
        alt: "this is an alt tag",
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

export default {
    title: "Blocks/Carousel",
    component: Carousel,
    tags: ['!autodocs'],
};

export const Primary = {
    name: "Primary",
    args: {
      render_api: false,
      items: mockItems,
      buttons: sharedButtons,
    },
    play: runBasicInteractions,
  };