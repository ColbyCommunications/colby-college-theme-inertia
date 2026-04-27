import { expect } from "storybook/test";
import PeopleGrid from "../PeopleGrid.vue";

export default {
  title: "Blocks/People Grid",
  component: PeopleGrid,
  tags: ["!autodocs"],
  argTypes: {
    auto_populate: {
      name: "Auto Populate by Department Name (Academic Dept Homepages Only)",
      control: "boolean",
      table: { category: "Wordpress Fields" },
    },
    items: {
      name: "Add Additional People",
      control: "object",
      table: { category: "Wordpress Fields" },
    },
    exclude_from_listings: {
      name: "Exclude People from Appearing",
      control: "object",
      table: { category: "Wordpress Fields" },
    },
    people: { table: { disable: true } },
  },
};

const samplePeople = [
  {
    heading: "Dr. Jane Smith",
    subheading: "Professor of Biology",
    paragraph: "Department Chair, Environmental Studies Program",
    url: "#",
    image: {
      sizes: {
        desktop: "https://placehold.co/300x400",
        mobile: "https://placehold.co/300x400",
      },
      alt: "Dr. Jane Smith",
    },
  },
  {
    heading: "Dr. John Doe",
    subheading: "Associate Professor of Chemistry",
    paragraph: "Research focus on organic chemistry and catalysis",
    url: "#",
    image: {
      sizes: {
        desktop: "https://placehold.co/300x400",
        mobile: "https://placehold.co/300x400",
      },
      alt: "Dr. John Doe",
    },
  },
  {
    heading: "Dr. Emily Chen",
    subheading: "Assistant Professor of Physics",
    paragraph: "Quantum computing and theoretical physics",
    url: "#",
    image: {
      sizes: {
        desktop: "https://placehold.co/300x400",
        mobile: "https://placehold.co/300x400",
      },
      alt: "Dr. Emily Chen",
    },
  },
  {
    heading: "Prof. Michael Brown",
    subheading: "Professor of Mathematics",
    paragraph: "Applied mathematics and data science",
    url: "#",
    image: {
      sizes: {
        desktop: "https://placehold.co/300x400",
        mobile: "https://placehold.co/300x400",
      },
      alt: "Prof. Michael Brown",
    },
  },
];

export const Default = {
  name: "People Grid",
  args: {
    people: samplePeople,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Dr. Jane Smith")).toBeInTheDocument();
    await expect(canvas.getByText("Dr. John Doe")).toBeInTheDocument();
    await expect(canvas.getByText("Dr. Emily Chen")).toBeInTheDocument();
    await expect(canvas.getByText("Prof. Michael Brown")).toBeInTheDocument();
  },
};
