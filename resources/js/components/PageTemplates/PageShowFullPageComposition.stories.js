import { expect } from "storybook/test";
import PageShow from "../../pages/Page/Show.vue";

const siteData = {
  url: "https://www.colby.edu",
  address: {
    text: "4000 Mayflower Hill<br>Waterville, ME 04901",
  },
  phone: "207-859-4000",
  alert: null,
};

const menus = {
  utility: [
    { title: "Directory", url: "#" },
    { title: "News", url: "#" },
  ],
  main: [
    { title: "Admissions & Aid", url: "#" },
    { title: "Academics", url: "#" },
  ],
  footer: [
    { title: "Academics", url: "#" },
    { title: "Campus Life", url: "#" },
  ],
  action: [{ title: "Contact Colby", url: "#" }],
  social: [{ title: "Instagram", url: "#", icon: "instagram" }],
};

const heroImage = {
  src: "https://placehold.co/1200x800",
  srcset: "https://placehold.co/1200x800 1200w, https://placehold.co/800x533 800w",
  alt: "Students on campus",
  sizes: {
    Square: "https://placehold.co/900x600",
    Square_mobile: "https://placehold.co/500x333",
    Hero: "https://placehold.co/1800x900",
    Rectangle: "https://placehold.co/1280x720",
    Rectangle_mobile: "https://placehold.co/800x450",
  },
};

const gridImage = {
  src: "https://placehold.co/600x400",
  srcset: "https://placehold.co/600x400 600w, https://placehold.co/300x200 300w",
  alt: "Story card",
  sizes: {
    desktop: "https://placehold.co/600x400",
    mobile: "https://placehold.co/300x200",
  },
};

const makeHeroBlock = (heading, subheading = "Composition") => ({
  blockName: "acf/hero",
  attrs: {
    data: {
      subheading,
      heading,
      paragraph: `${heading} paragraph.`,
      image: heroImage,
    },
  },
});

const makeHomeHeroBlock = (heading) => ({
  blockName: "acf/home-hero",
  attrs: {
    data: {
      subheading: "Composition",
      heading,
      caption: "composition caption",
      paragraph: `${heading} paragraph.`,
      image: heroImage,
    },
  },
});

const makeCarouselBlock = (heading, itemHeading) => ({
  blockName: "acf/carousel",
  attrs: {
    data: {
      render_api: false,
      heading,
      paragraph: `${heading} paragraph.`,
      autoplay: false,
      buttons: [{ url: "#", title: "All Stories" }],
      items: [
        {
          image: heroImage,
          heading: itemHeading,
          subheading: "Carousel",
          paragraph: `${itemHeading} paragraph.`,
          url: "#",
          buttons: [{ button: { url: "#", title: "Read Story" } }],
        },
      ],
    },
  },
});

const makeGridBlock = (heading) => ({
  blockName: "acf/article-grid",
  attrs: {
    data: {
      display_posts_method: "manual",
      columns: 3,
      cta: "Read Story",
      items: [
        {
          image: gridImage,
          heading,
          subheading: "Grid",
          paragraph: `${heading} paragraph.`,
          url: "#",
        },
      ],
    },
  },
});

const makeFactsBlock = (heading) => ({
  blockName: "acf/facts-figures",
  attrs: {
    data: {
      subheading: "Composition",
      heading,
      paragraph: `${heading} paragraph.`,
      facts: [{ figure: "100", paragraph: "marker" }],
      image: heroImage,
    },
  },
});

const makeDarkBlock = (heading) => ({
  blockName: "acf/dark-interstitial",
  attrs: {
    data: {
      subheading: "Composition",
      heading,
      icon: true,
      paragraph: `${heading} paragraph.`,
    },
  },
});

const makeArticleSectionBlock = (heading, gridHeading) => ({
  blockName: "acf/article-section",
  attrs: {
    data: {
      renderApi: false,
      heading,
      subheading: "Composition",
      paragraph: `${heading} paragraph.`,
      gridProps: {
        items: [
          {
            image: gridImage,
            heading: gridHeading,
            subheading: "Section",
            paragraph: `${gridHeading} paragraph.`,
            url: "#",
            buttons: [{ button: { size: "small", title: "Read", url: "#" } }],
          },
        ],
      },
    },
  },
});

const assertGlobalShell = async (canvas) => {
  const admissionsLinks = await canvas.findAllByText("Admissions & Aid");
  await expect(admissionsLinks.length).toBeGreaterThan(0);
  await expect(await canvas.findByText("Contact Colby")).toBeInTheDocument();
};

const render = (args) => ({
  components: { PageShow },
  setup() {
    return { args };
  },
  template: '<PageShow v-bind="args" />',
});

export default {
  title: "Templates/Page Show/Full Page/Composition",
  component: PageShow,
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const SingleHeroOnly = {
  render,
  args: {
    layout: "default",
    blocks: [makeHeroBlock("Composition Single Hero")],
    siteData,
    menus,
  },
  play: async ({ canvas }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Composition Single Hero")).toBeInTheDocument();
  },
};

export const SingleCarouselOnly = {
  render,
  args: {
    layout: "default",
    blocks: [
      makeCarouselBlock("Composition Single Carousel", "Composition Carousel Item"),
    ],
    siteData,
    menus,
  },
  play: async ({ canvas }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Composition Single Carousel")).toBeInTheDocument();
  },
};

export const RepeatedHeroTwice = {
  render,
  args: {
    layout: "default",
    blocks: [
      makeHeroBlock("Composition Hero Repeat A"),
      makeHeroBlock("Composition Hero Repeat B"),
    ],
    siteData,
    menus,
  },
  play: async ({ canvas }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Composition Hero Repeat A")).toBeInTheDocument();
    await expect(await canvas.findByText("Composition Hero Repeat B")).toBeInTheDocument();
  },
};

export const RepeatedArticleGridTwice = {
  render,
  args: {
    layout: "default",
    blocks: [
      makeGridBlock("Composition Grid Repeat A"),
      makeGridBlock("Composition Grid Repeat B"),
    ],
    siteData,
    menus,
  },
  play: async ({ canvas }) => {
    await assertGlobalShell(canvas);
    const ctas = await canvas.findAllByText("Read Story");
    await expect(ctas.length).toBeGreaterThanOrEqual(2);
  },
};

export const Order_HeroThenCarousel = {
  render,
  args: {
    layout: "default",
    blocks: [
      makeHeroBlock("Order Hero First"),
      makeCarouselBlock("Order Carousel Second", "Order Carousel Second Item"),
    ],
    siteData,
    menus,
  },
  play: async ({ canvas, canvasElement }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Order Hero First")).toBeInTheDocument();
    await expect(await canvas.findByText("Order Carousel Second")).toBeInTheDocument();

    const text = canvasElement.textContent || "";
    await expect(text.indexOf("Order Hero First")).toBeLessThan(
      text.indexOf("Order Carousel Second"),
    );
  },
};

export const Order_CarouselThenHero = {
  render,
  args: {
    layout: "default",
    blocks: [
      makeCarouselBlock("Order Carousel First", "Order Carousel First Item"),
      makeHeroBlock("Order Hero Second"),
    ],
    siteData,
    menus,
  },
  play: async ({ canvas, canvasElement }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Order Carousel First")).toBeInTheDocument();
    await expect(await canvas.findByText("Order Hero Second")).toBeInTheDocument();

    const text = canvasElement.textContent || "";
    await expect(text.indexOf("Order Carousel First")).toBeLessThan(
      text.indexOf("Order Hero Second"),
    );
  },
};

export const NoHero_MixedBlocks = {
  render,
  args: {
    layout: "default",
    blocks: [
      makeHomeHeroBlock("Composition HomeHero Only"),
      makeGridBlock("Composition Grid No Hero"),
      makeFactsBlock("Composition Facts No Hero"),
      makeDarkBlock("Composition Dark No Hero"),
    ],
    siteData,
    menus,
  },
  play: async ({ canvas }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Composition HomeHero Only")).toBeInTheDocument();
    await expect(await canvas.findByText("Composition Grid No Hero")).toBeInTheDocument();
    await expect(await canvas.findByText("Composition Facts No Hero")).toBeInTheDocument();
    await expect(await canvas.findByText("Composition Dark No Hero")).toBeInTheDocument();
    await expect(canvas.queryByText("Composition Single Hero")).not.toBeInTheDocument();
  },
};

export const AllSeven_Reordered = {
  render,
  args: {
    layout: "default",
    blocks: [
      makeDarkBlock("Composition Dark First"),
      makeArticleSectionBlock("Composition Section Second", "Composition Section Grid Item"),
      makeGridBlock("Composition Grid Third"),
      makeCarouselBlock("Composition Carousel Fourth", "Composition Carousel Item Fourth"),
      makeFactsBlock("Composition Facts Fifth"),
      makeHomeHeroBlock("Composition HomeHero Sixth"),
      makeHeroBlock("Composition Hero Seventh"),
    ],
    siteData,
    menus,
  },
  play: async ({ canvas }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Composition Dark First")).toBeInTheDocument();
    await expect(await canvas.findByText("Composition Section Second")).toBeInTheDocument();
    await expect(await canvas.findByText("Composition Grid Third")).toBeInTheDocument();
    await expect(await canvas.findByText("Composition Carousel Fourth")).toBeInTheDocument();
    await expect(await canvas.findByText("Composition Facts Fifth")).toBeInTheDocument();
    await expect(await canvas.findByText("Composition HomeHero Sixth")).toBeInTheDocument();
    await expect(await canvas.findByText("Composition Hero Seventh")).toBeInTheDocument();
  },
};
