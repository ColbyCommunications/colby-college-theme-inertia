import { expect } from "storybook/test";
import TestimonialCarousel from "../TestimonialCarousel.vue";

export default {
  title: "Blocks/Testimonial Carousel",
  component: TestimonialCarousel,
  tags: ["!autodocs"],
  argTypes: {
    subheading: {
      name: "Subheading",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
    heading: {
      name: "Heading",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
    paragraph: {
      name: "Paragraph",
      control: "text",
      table: { category: "Wordpress Fields" },
    },
    buttons: {
      name: "Buttons",
      control: "object",
      table: { category: "Wordpress Fields" },
    },
    items: {
      name: "Items",
      control: "object",
      table: { category: "Wordpress Fields" },
    },
  },
};

export const Default = {
  name: "Testimonial Carousel",
  args: {
    subheading: "What Our Community Says",
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
            "\"The community at Colby is unlike anything I've experienced. It's truly a special place.\"",
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
