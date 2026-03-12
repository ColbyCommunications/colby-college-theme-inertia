import DarkInterstitial from "./DarkInterstitial.vue";
import { expect } from "storybook/test";

// The default export metadata for your component
export default {
  title: "Core Components/Dark Interstitial",
  component: DarkInterstitial,
};

export const Primary = {
  name: "Primary",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    icon: true,
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  play: async ({ canvas }) => {
    // Both subheading and heading are "Lorem ipsum", so use getAllByText
    const loremElements = canvas.getAllByText("Lorem ipsum");
    await expect(loremElements.length).toBeGreaterThanOrEqual(2);
    await expect(
      canvas.getByText(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ),
    ).toBeInTheDocument();
  },
};

export const Facts = {
  name: "With Facts",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    facts: [
      { figure: "100%", paragraph: "consectetur adipiscing elit" },
      { figure: "100%", paragraph: "consectetur adipiscing elit" },
    ],
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  play: async ({ canvas }) => {
    // Both subheading and heading are "Lorem ipsum", so use getAllByText
    const loremElements = canvas.getAllByText("Lorem ipsum");
    await expect(loremElements.length).toBeGreaterThanOrEqual(2);
    await expect(canvas.getAllByText("100%").length).toBeGreaterThan(0);
  },
};

export const Images = {
  name: "With Images",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    images: [
      {
        image: {
          src: "https://placeholdit.com/400x600/dddddd/999999",
          srcset:
            "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
          alt: "this is an alt tag",
          sizes: {
            Square: "https://placehold.co/400x400",
            Square_mobile: "https://placehold.co/300x300",
          },
        },
      },
      {
        image: {
          src: "https://placeholdit.com/400x600/dddddd/999999",
          srcset:
            "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
          alt: "this is an alt tag",
          sizes: {
            Square: "https://placehold.co/400x400",
            Square_mobile: "https://placehold.co/300x300",
          },
        },
      },
      {
        image: {
          src: "https://placeholdit.com/400x600/dddddd/999999",
          srcset:
            "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
          alt: "this is an alt tag",
          sizes: {
            Square: "https://placehold.co/400x400",
            Square_mobile: "https://placehold.co/300x300",
          },
        },
      },
    ],
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  play: async ({ canvas }) => {
    // Both subheading and heading are "Lorem ipsum", so use getAllByText
    const loremElements = canvas.getAllByText("Lorem ipsum");
    await expect(loremElements.length).toBeGreaterThanOrEqual(2);
  },
};

export const WithoutIcon = {
  name: "Without Icon",
  args: {
    subheading: "Campus Update",
    heading: "New Facilities",
    icon: false,
    paragraph: "Colby is investing in state-of-the-art facilities for students.",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Campus Update")).toBeInTheDocument();
    await expect(canvas.getByText("New Facilities")).toBeInTheDocument();
  },
};

export const WithoutFacts = {
  name: "Without Facts or Images",
  args: {
    subheading: "Quick Info",
    heading: "Important Dates",
    icon: true,
    paragraph: "Check the academic calendar for important deadlines.",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Quick Info")).toBeInTheDocument();
    await expect(canvas.getByText("Important Dates")).toBeInTheDocument();
  },
};
