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

const defaultHeroPayload = {
  type: "default",
  props: {
    subheading: "Academics",
    heading: "Sidebar Composition Default Hero",
    paragraph: "Sidebar composition hero marker paragraph.",
    align: "default",
    image: heroImage,
    buttons: [{ button: { url: "#", title: "Apply", target: "" } }],
    imageOrientation: "landscape",
  },
};

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
  title: "Templates/Page Show/Full Page w Sidebar/Composition",
  component: PageShow,
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const NavOnly = {
  render,
  args: {
    layout: "with-sidebar",
    isPost: false,
    hero: defaultHeroPayload,
    sidebar: {
      nav: {
        heading: "Composition Nav Only",
        parentPermalink: "#",
        items: [
          { title: "Composition Nav Item A", url: "#", active: true },
          { title: "Composition Nav Item B", url: "#" },
        ],
      },
      widgets: [],
    },
    content: "<p>Sidebar composition nav-only content marker.</p>",
    siteData,
    menus,
  },
  play: async ({ canvas }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Composition Nav Only")).toBeInTheDocument();
    await expect(await canvas.findByText("Composition Nav Item A")).toBeInTheDocument();
    await expect(canvas.queryByText("Composition Widget A")).not.toBeInTheDocument();
  },
};

export const WidgetsOnly = {
  render,
  args: {
    layout: "with-sidebar",
    isPost: false,
    hero: defaultHeroPayload,
    sidebar: {
      nav: {
        heading: "",
        parentPermalink: "#",
        items: [],
      },
      widgets: [
        {
          heading: "Composition Widget Only",
          text: "<p>Composition widget-only text marker.</p>",
          buttons: [{ url: "#", title: "Widget CTA", target: "" }],
        },
      ],
    },
    content: "<p>Sidebar composition widgets-only content marker.</p>",
    siteData,
    menus,
  },
  play: async ({ canvas }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Composition Widget Only")).toBeInTheDocument();
    await expect(
      await canvas.findByText("Composition widget-only text marker."),
    ).toBeInTheDocument();
    await expect(await canvas.findByText("Widget CTA")).toBeInTheDocument();
  },
};

export const MultipleWidgetsOrder = {
  render,
  args: {
    layout: "with-sidebar",
    isPost: false,
    hero: defaultHeroPayload,
    sidebar: {
      nav: {
        heading: "Composition Widgets Order",
        parentPermalink: "#",
        items: [{ title: "Order Item", url: "#", active: true }],
      },
      widgets: [
        {
          heading: "Composition Widget First",
          text: "<p>First widget text</p>",
          buttons: [{ url: "#", title: "First CTA", target: "" }],
        },
        {
          heading: "Composition Widget Second",
          text: "<p>Second widget text</p>",
          buttons: [{ url: "#", title: "Second CTA", target: "" }],
        },
      ],
    },
    content: "<p>Sidebar composition widget-order content marker.</p>",
    siteData,
    menus,
  },
  play: async ({ canvas, canvasElement }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Composition Widget First")).toBeInTheDocument();
    await expect(await canvas.findByText("Composition Widget Second")).toBeInTheDocument();

    const text = canvasElement.textContent || "";
    await expect(text.indexOf("Composition Widget First")).toBeLessThan(
      text.indexOf("Composition Widget Second"),
    );
  },
};

export const ManyNavItems = {
  render,
  args: {
    layout: "with-sidebar",
    isPost: false,
    hero: defaultHeroPayload,
    sidebar: {
      nav: {
        heading: "Composition Many Nav",
        parentPermalink: "#",
        items: [
          { title: "Composition Nav 1", url: "#", active: true },
          { title: "Composition Nav 2", url: "#" },
          { title: "Composition Nav 3", url: "#" },
          { title: "Composition Nav 4", url: "#" },
          { title: "Composition Nav 5", url: "#" },
          { title: "Composition Nav 6", url: "#" },
        ],
      },
      widgets: [],
    },
    content: "<p>Sidebar composition many-nav content marker.</p>",
    siteData,
    menus,
  },
  play: async ({ canvas }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Composition Many Nav")).toBeInTheDocument();
    await expect(await canvas.findByText("Composition Nav 1")).toBeInTheDocument();
    await expect(await canvas.findByText("Composition Nav 6")).toBeInTheDocument();
  },
};
