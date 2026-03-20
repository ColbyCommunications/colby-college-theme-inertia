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
  src: import.meta.env.VITE_PERCY ? "/mock-assets/hero-placeholder.jpg" : 'https://colby.edu/wp-content/uploads/2024/12/20220914_sunrise_0052-HDR-1.jpg',
  alt: "Students on campus",
};

const defaultHeroPayload = {
  type: "default",
  props: {
    subheading: "Academics",
    heading: "Sidebar Resilience Default Hero",
    paragraph: "Default hero resilience marker paragraph.",
    align: "default",
    image: heroImage,
    buttons: [{ button: { url: "#", title: "Apply", target: "" } }],
    imageOrientation: "landscape",
  },
};

const overlayHeroPayload = {
  type: "overlay",
  props: {
    size: "medium",
    subheading: "Overlay",
    heading: "Sidebar Resilience Overlay Hero",
    paragraph: "Overlay resilience marker paragraph.",
    buttons: [{ button: { url: "#", title: "Explore", target: "" } }],
    fromPage: true,
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
  title: "Templates/Page Show/Full Page w Sidebar/Resilience",
  component: PageShow,
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const SidebarNullPayload_NonPost = {
  render,
  args: {
    layout: "with-sidebar",
    isPost: false,
    hero: defaultHeroPayload,
    sidebar: null,
    content: "<p>Sidebar null payload content marker.</p>",
    siteData,
    menus,
  },
  play: async ({ canvas, canvasElement }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Sidebar Resilience Default Hero")).toBeInTheDocument();
    await expect(await canvas.findByText("Sidebar null payload content marker.")).toBeInTheDocument();
    await expect(canvasElement.querySelector(".sidebar-page__secondary")).toBeNull();
  },
};

export const SidebarEmptyCollections_NonPost = {
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
      widgets: [],
    },
    content: "<p>Sidebar empty collections content marker.</p>",
    siteData,
    menus,
  },
  play: async ({ canvas, canvasElement }) => {
    await assertGlobalShell(canvas);
    await expect(
      await canvas.findByText("Sidebar empty collections content marker."),
    ).toBeInTheDocument();
    await expect(canvasElement.querySelector(".sidebar-page__secondary")).not.toBeNull();
    await expect(canvas.queryByText("Sidebar Overview")).not.toBeInTheDocument();
  },
};

export const SidebarMalformedWidgetButtons_NonPost = {
  render,
  args: {
    layout: "with-sidebar",
    isPost: false,
    hero: defaultHeroPayload,
    sidebar: {
      nav: {
        heading: "Sidebar Resilience Nav",
        parentPermalink: "#",
        items: [{ title: "Resilience Item", url: "#", active: true }],
      },
      widgets: [
        {
          heading: "Malformed Widget Buttons",
          text: "<p>Widget should still render text.</p>",
          buttons: [{ title: "", url: "", target: "" }],
        },
      ],
    },
    content: "<p>Sidebar malformed widget content marker.</p>",
    siteData,
    menus,
  },
  play: async ({ canvas }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Sidebar Resilience Nav")).toBeInTheDocument();
    await expect(await canvas.findByText("Malformed Widget Buttons")).toBeInTheDocument();
    await expect(await canvas.findByText("Widget should still render text.")).toBeInTheDocument();
  },
};

export const OverlayHeroMissingImage_Post = {
  render,
  args: {
    layout: "with-sidebar",
    isPost: true,
    hero: overlayHeroPayload,
    sidebar: {
      nav: {
        heading: "Should Be Hidden",
        parentPermalink: "#",
        items: [{ title: "Hidden Item", url: "#" }],
      },
      widgets: [
        {
          heading: "Should Be Hidden Widget",
          text: "<p>Hidden widget text</p>",
          buttons: [{ url: "#", title: "Hidden", target: "" }],
        },
      ],
    },
    content: "<p>Overlay post mode resilience content marker.</p>",
    siteData,
    menus,
  },
  play: async ({ canvas, canvasElement }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Sidebar Resilience Overlay Hero")).toBeInTheDocument();
    await expect(
      await canvas.findByText("Overlay post mode resilience content marker."),
    ).toBeInTheDocument();
    await expect(canvas.queryByText("Should Be Hidden")).not.toBeInTheDocument();
    await expect(canvasElement.querySelector(".sidebar-page__secondary")).toBeNull();
  },
};
