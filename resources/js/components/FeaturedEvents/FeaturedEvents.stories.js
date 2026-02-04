import FeaturedEvents from "./FeaturedEvents.vue";

// --- Mock Data for Carousel ---
const mockItems = [
  {
    title: "Keynote Speaker: Dr. Jane Goodall",
    date: "October 15, 2024",
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
    title: "Colby Symphony Orchestra",
    date: "November 3, 2024",
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
    title: "Museum Exhibition Opening",
    date: "December 10, 2024",
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
  title: "Core Components/Featured Events",
  component: FeaturedEvents,
  parameters: {
    // This component has 'full-bleed' classes, so we remove default padding
    layout: "fullscreen",
  },
  argTypes: {
    heading: { control: "text" },
    paragraph: { control: "text" },
    items: { control: "object" },
  },
};

const Template = (args) => ({
  components: { FeaturedEvents },
  setup() {
    return { args };
  },
  template: '<FeaturedEvents v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  heading: "Featured Events",
  paragraph:
    "Explore upcoming major events, lectures, and performances happening on Mayflower Hill.",
  items: mockItems,
};

export const WithoutCarouselItems = Template.bind({});
WithoutCarouselItems.args = {
  heading: "Upcoming Schedule",
  paragraph: "Check below for the full list of events from our live calendar.",
  items: [], // Tests how the carousel behaves when empty
};

export const Minimal = Template.bind({});
Minimal.args = {
  heading: "Events",
  items: [mockItems[0]], // Single item test
};
