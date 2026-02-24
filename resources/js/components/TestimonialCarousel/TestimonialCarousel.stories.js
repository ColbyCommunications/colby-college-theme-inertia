import { expect } from "storybook/test";
import TestimonialCarousel from "./TestimonialCarousel.vue";

export default {
  title: "Core Components/Testimonial Carousel",
  component: TestimonialCarousel,
  tags: ["autodocs"],
};

export const Default = {
  name: "Default",
  args: {
    heading: "Testimonials",
    paragraph:
      "Hear from our students and alumni about their experiences at Colby.",
    buttons: [{ url: "#", title: "All Stories" }],
    items: [
      {
        image: {
          srcset: "https://placehold.co/860x400",
          src: "https://placehold.co/600x600",
          alt: "Student photo",
          sizes: {
            Landscape: "https://placehold.co/860x400",
            Square: "https://placehold.co/600x600",
          },
        },
        testimonial: {
          quote:
            '"Colby prepared me to think critically and act with purpose in everything I do."',
          name: "Jane Doe '22",
        },
      },
      {
        image: {
          srcset: "https://placehold.co/860x400",
          src: "https://placehold.co/600x600",
          alt: "Alumni photo",
          sizes: {
            Landscape: "https://placehold.co/860x400",
            Square: "https://placehold.co/600x600",
          },
        },
        testimonial: {
          quote:
            '"The community at Colby is unlike anything I\'ve experienced. It\'s truly a special place."',
          name: "John Smith '20",
        },
      },
    ],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Testimonials")).toBeInTheDocument();
    await expect(canvas.getByText("All Stories")).toBeInTheDocument();
    await expect(canvas.getByText("Jane Doe '22")).toBeInTheDocument();
  },
};

export const WithCaptions = {
  name: "With Image Captions",
  args: {
    heading: "Student Stories",
    paragraph: "Hear directly from students about their Colby experience.",
    buttons: [{ url: "#", title: "More Stories" }],
    items: [
      {
        image: {
          srcset: "https://placehold.co/860x400",
          src: "https://placehold.co/600x600",
          alt: "Student in lab",
          sizes: {
            Landscape: "https://placehold.co/860x400",
            Square: "https://placehold.co/600x600",
          },
          caption: "A student conducting research in the biology lab.",
        },
        testimonial: {
          quote: '"The research opportunities at Colby are unparalleled."',
          name: "Alex Johnson '23",
        },
      },
      {
        image: {
          srcset: "https://placehold.co/860x400",
          src: "https://placehold.co/600x600",
          alt: "Campus event",
          sizes: {
            Landscape: "https://placehold.co/860x400",
            Square: "https://placehold.co/600x600",
          },
          caption: "Annual campus festival celebration.",
        },
        testimonial: {
          quote: '"Every day brings something new and exciting."',
          name: "Maria Garcia '21",
        },
      },
    ],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Student Stories")).toBeInTheDocument();
    await expect(canvas.getByText("Alex Johnson '23")).toBeInTheDocument();
  },
};

export const SingleItem = {
  name: "Single Item",
  args: {
    heading: "Featured Story",
    paragraph: "A single testimonial.",
    buttons: [{ url: "#", title: "Read More" }],
    items: [
      {
        image: {
          srcset: "https://placehold.co/860x400",
          src: "https://placehold.co/600x600",
          alt: "Solo student",
          sizes: {
            Landscape: "https://placehold.co/860x400",
            Square: "https://placehold.co/600x600",
          },
        },
        testimonial: {
          quote: '"My four years at Colby were transformative."',
          name: "Solo Person '24",
        },
      },
    ],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Solo Person '24")).toBeInTheDocument();
  },
};
