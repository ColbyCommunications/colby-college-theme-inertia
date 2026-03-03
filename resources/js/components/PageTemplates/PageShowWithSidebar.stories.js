import { expect, userEvent } from "storybook/test";
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

const sidebarData = {
  nav: {
    heading: "Integration Sidebar",
    parentPermalink: "#",
    items: [
      { title: "Sidebar Overview", url: "#", active: true },
      { title: "Sidebar Faculty", url: "#" },
      { title: "Sidebar Courses", url: "#" },
    ],
  },
  widgets: [
    {
      heading: "Sidebar Contact",
      text: "<p>Page Templates Office</p><p>207-859-5000</p>",
      buttons: [{ url: "#", title: "Email Sidebar", target: "" }],
    },
  ],
};

const defaultHeroPayload = {
  type: "default",
  props: {
    subheading: "Academics",
    heading: "Default Hero Branch Marker",
    paragraph: "Default hero integration marker paragraph.",
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
    heading: "Overlay Hero Branch Marker",
    paragraph: "Overlay hero integration marker paragraph.",
    image: heroImage,
    buttons: [{ button: { url: "#", title: "Explore", target: "" } }],
    fromPage: true,
  },
};

const heroByVariant = {
  default: defaultHeroPayload,
  overlay: overlayHeroPayload,
  none: null,
};

const contentByState = {
  filled:
    "<p>Sidebar Content Marker paragraph one.</p><p>Sidebar Content Marker paragraph two.</p>",
  empty: "",
};

const assertGlobalShell = async (canvas) => {
  const admissionsLinks = await canvas.findAllByText("Admissions & Aid");
  await expect(admissionsLinks.length).toBeGreaterThan(0);
  await expect(await canvas.findByText("Contact Colby")).toBeInTheDocument();
};

const runSidebarComboPlay = async ({ canvas, canvasElement, heroVariant, isPost, contentState }) => {
  await assertGlobalShell(canvas);

  if (heroVariant === "default") {
    await expect(await canvas.findByText("Default Hero Branch Marker")).toBeInTheDocument();
    await expect(canvasElement.querySelector(".hero.full-bleed")).not.toBeNull();
    await expect(canvasElement.querySelector(".overlay-hero")).toBeNull();
  }

  if (heroVariant === "overlay") {
    await expect(await canvas.findByText("Overlay Hero Branch Marker")).toBeInTheDocument();
    await expect(canvasElement.querySelector(".overlay-hero")).not.toBeNull();
    await expect(canvasElement.querySelector(".hero.full-bleed")).toBeNull();
  }

  if (heroVariant === "none") {
    await expect(canvasElement.querySelector(".overlay-hero")).toBeNull();
    await expect(canvasElement.querySelector(".hero.full-bleed")).toBeNull();
    await expect(canvas.queryByText("Default Hero Branch Marker")).not.toBeInTheDocument();
    await expect(canvas.queryByText("Overlay Hero Branch Marker")).not.toBeInTheDocument();
  }

  if (isPost) {
    await expect(canvas.queryByText("Integration Sidebar")).not.toBeInTheDocument();
    await expect(canvas.queryByText("Email Sidebar")).not.toBeInTheDocument();
    await expect(canvasElement.querySelector(".sidebar-page__secondary")).toBeNull();

    const mainColumn = canvasElement.querySelector(".sidebar-page__main");
    await expect(mainColumn).not.toBeNull();
    await expect(mainColumn.className).toContain("md:col-span-12");
  } else {
    await expect(await canvas.findByText("Sidebar Overview")).toBeInTheDocument();
    await expect(await canvas.findByText("Email Sidebar")).toBeInTheDocument();

    const menu = canvasElement.querySelector(".subpage-nav__items");
    const toggle = canvasElement.querySelector(".subpage-nav h2 > div");

    await expect(menu).not.toBeNull();
    await expect(toggle).not.toBeNull();
    await expect(menu).toHaveClass("hidden");

    await userEvent.click(toggle);
    await expect(menu).not.toHaveClass("hidden");

    await userEvent.click(toggle);
    await expect(menu).toHaveClass("hidden");
  }

  if (contentState === "filled") {
    await expect(await canvas.findByText("Sidebar Content Marker paragraph one.")).toBeInTheDocument();
  } else {
    const wysiwyg = canvasElement.querySelector(".wysiwyg");
    await expect(wysiwyg).not.toBeNull();
    await expect((wysiwyg.textContent || "").trim()).toBe("");
    await expect(canvas.queryByText("Sidebar Content Marker paragraph one.")).not.toBeInTheDocument();
    await expect(canvas.queryByText("Sorry, no content")).not.toBeInTheDocument();
  }
};

const createSidebarStory = (heroVariant, isPost, contentState) => ({
  render,
  args: {
    layout: "with-sidebar",
    isPost,
    hero: heroByVariant[heroVariant],
    sidebar: sidebarData,
    content: contentByState[contentState],
    siteData,
    menus,
  },
  play: async ({ canvas, canvasElement }) => {
    await runSidebarComboPlay({
      canvas,
      canvasElement,
      heroVariant,
      isPost,
      contentState,
    });
  },
});

export default {
  title: "Templates/Page Show/Full Page w Sidebar",
  component: PageShow,
  parameters: {
    layout: "fullscreen",
  },
};

const render = (args) => ({
  components: { PageShow },
  setup() {
    return { args };
  },
  template: '<PageShow v-bind="args" />',
});

export const DefaultHero_NonPost_Filled = createSidebarStory(
  "default",
  false,
  "filled",
);
export const DefaultHero_NonPost_Empty = createSidebarStory(
  "default",
  false,
  "empty",
);
export const DefaultHero_Post_Filled = createSidebarStory(
  "default",
  true,
  "filled",
);
export const DefaultHero_Post_Empty = createSidebarStory(
  "default",
  true,
  "empty",
);

export const OverlayHero_NonPost_Filled = createSidebarStory(
  "overlay",
  false,
  "filled",
);
export const OverlayHero_NonPost_Empty = createSidebarStory(
  "overlay",
  false,
  "empty",
);
export const OverlayHero_Post_Filled = createSidebarStory(
  "overlay",
  true,
  "filled",
);
export const OverlayHero_Post_Empty = createSidebarStory(
  "overlay",
  true,
  "empty",
);

export const NoHero_NonPost_Filled = createSidebarStory("none", false, "filled");
export const NoHero_NonPost_Empty = createSidebarStory("none", false, "empty");
export const NoHero_Post_Filled = createSidebarStory("none", true, "filled");
export const NoHero_Post_Empty = createSidebarStory("none", true, "empty");
