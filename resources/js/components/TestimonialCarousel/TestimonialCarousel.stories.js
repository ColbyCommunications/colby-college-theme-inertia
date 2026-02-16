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
};
