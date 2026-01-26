import DarkInterstitial from "./DarkInterstitial.vue";

// The default export metadata for your component
export default {
  title: "Dark Interstitial",
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
};
