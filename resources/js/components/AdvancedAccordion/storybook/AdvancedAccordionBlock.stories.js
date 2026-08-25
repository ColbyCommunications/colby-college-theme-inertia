import { expect } from "storybook/test";
import AdvancedAccordion from "../AdvancedAccordion.vue";

export default {
  title: "Blocks/Advanced Accordion",
  component: AdvancedAccordion,
  tags: ["!autodocs"],
  argTypes: {
    single: {
      name: "Single Mode",
      control: { type: "boolean" },
      table: { category: "Wordpress Fields" },
    },
    blocks: { table: { disable: true } },
  }
};

const imageTextBlock = ({
  id,
  heading = "",
  paragraph = "",
  image = {},
  imageScale = "50",
  wrappingText = "no-wrap",
  alignImage = "left",
  alignText = "left",
  caption = "",
}) => ({
  blockName: "acf/image-text",
  attrs: {
    id,
    data: {
      heading,
      paragraph_text: paragraph,
      image_scale: imageScale,
      wrapping_text: wrappingText,
      align_image: alignImage,
      align_text: alignText,
      caption,
      image: {
        src: image.src || "https://placehold.co/800x600",
        url: image.url || image.src || "https://placehold.co/800x600",
        alt: image.alt || "Example image",
        width: image.width || 800,
        height: image.height || 600,
        sizes: {
          Landscape:
            image.sizes?.Landscape || "https://placehold.co/1200x800",
          Square:
            image.sizes?.Square || "https://placehold.co/800x800",
          Square_mobile:
            image.sizes?.Square_mobile || "https://placehold.co/600x600",
        },
      },
    },
  },
});

const paragraphBlock = (text, id) => ({
  blockName: "acf/paragraph",
  attrs: {
    id,
    data: {
      paragraph_text: `<p>${text}</p>`,
      buttons: [],
    },
  },
});

const headingBlock = (text, id) => ({
  blockName: "core/heading",
  attrs: {
    id,
    data: {
      heading: `<h3>${text}</h3>`,
    },
  },
});

const panels = [
  {
    blockName: "acf/advanced-accordion-panel",
    attrs: {
      id: "panel-one",
      data: {
        heading: "Admissions and Financial Aid",
        blocks: [
          paragraphBlock(
            "Learn about the admissions process, financial aid, and resources available to prospective students.",
            "paragraph-one",
          ),
          imageTextBlock({
            id: "image-text-one",
            paragraph:
              "<p>Our financial aid program is designed to make a Colby education accessible to students from a wide range of backgrounds.</p>",
            image: {
              src: "https://placehold.co/1200x800",
              alt: "Students walking across campus",
            },
            imageScale: "50",
            alignImage: "left",
          }),
        ],
      },
    },
  },
  {
    blockName: "acf/advanced-accordion-panel",
    attrs: {
      id: "panel-two",
      data: {
        heading: "Academics",
        blocks: [
          paragraphBlock(
            "Explore academic departments, programs, courses, and other learning opportunities.",
            "paragraph-two",
          ),
        ],
      },
    },
  },
  {
    blockName: "acf/advanced-accordion-panel",
    attrs: {
      id: "panel-three",
      data: {
        heading: "Student Life",
        blocks: [
          headingBlock("Life at Colby", "heading-three"),
          paragraphBlock(
            "Students participate in clubs, organizations, athletics, arts, and many other activities across campus.",
            "paragraph-three",
          ),
        ],
      },
    },
  },
];


export const Default = {
  name: "Advanced Accordion",
  args: {
    blocks: panels,
    single: false,
  },
  play: async ({ canvas, userEvent }) => {
    await expect(
      canvas.getByText("What is the application deadline?"),
    ).toBeInTheDocument();
    await expect(
      canvas.getByText("What standardized tests are required?"),
    ).toBeInTheDocument();
    await expect(
      canvas.getByText("How do I schedule a campus visit?"),
    ).toBeInTheDocument();

    // Click first panel to trigger onPanelToggle
    const buttons = canvas.getAllByRole("button");
    await userEvent.click(buttons[0]);
  },
};
