import BorderedArticleRow from "./BorderedArticleRow.vue";
import { expect } from "storybook/test";

// The default export metadata for your component
export default {
  title: "Core Components/Bordered Article Row",
  component: BorderedArticleRow,
};

const mockItems = [
  {
    image: {
      src: "https://placeholdit.com/600x400/dddddd/999999",
      srcset:
        "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
    },
    heading: "Future of Artificial Intelligence",
    subheading: "Technology",
    paragraph: "AI is reshaping industries at an unprecedented pace.",
    url: "#",
    // Structure required for Accordion style images
    //
    sizes: {
      desktop: "https://placehold.co/600x400",
      mobile: "https://placehold.co/300x200",
    },
  },
  {
    image: {
      src: "https://placeholdit.com/600x400/dddddd/999999",
      srcset:
        "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
    },
    heading: "Sustainable Energy Solutions",
    subheading: "Environment",
    paragraph: "Solar and wind energy are becoming more accessible than ever.",
    url: "#",
    sizes: {
      desktop: "https://placehold.co/600x400",
      mobile: "https://placehold.co/300x200",
    },
  },
  {
    image: {
      src: "https://placeholdit.com/600x400/dddddd/999999",
      srcset:
        "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
    },
    heading: "Modern Architecture Trends",
    subheading: "Design",
    paragraph: "Exploring the intersection of function and aesthetics in 2024.",
    url: "#",
    sizes: {
      desktop: "https://placehold.co/600x400",
      mobile: "https://placehold.co/300x200",
    },
  },
];

export const Primary = {
  name: "Default",
  args: {
    items: mockItems,
  },
  play: async ({ canvas, canvasElement }) => {
    const first = canvasElement.querySelectorAll('.bordered-article-row  .article-grid__item:first-child')[0];
    const firstHeading = first.querySelectorAll('.text-group__heading')[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe('Future of Artificial Intelligence');
    await expect(firstHeading).toBeVisible();
    
    const second = canvasElement.querySelectorAll('.bordered-article-row .article-grid__item:nth-child(2)')[0];
    const secondHeading = second.querySelectorAll('.text-group__heading')[0];
    await expect(secondHeading.textContent.slice(0, -1)).toBe('Sustainable Energy Solutions');
    await expect(secondHeading).toBeVisible();
    
    const third = canvasElement.querySelectorAll('.bordered-article-row .article-grid__item:nth-child(3)')[0];
    const thirdHeading = third.querySelectorAll('.text-group__heading')[0];
    await expect(thirdHeading.textContent.slice(0, -1)).toBe('Modern Architecture Trends');
    await expect(thirdHeading).toBeVisible();

  },
};
