import { expect, waitFor, spyOn } from "storybook/test";
import axios from "axios";
import PageShow from "../../pages/Page/Show.vue";

const LATEST_NEWS_ENDPOINT =
  "https://news.colby.edu/wp-json/wp/v2/posts?per_page=5&tags=561&_embed=1";
const ACADEMIC_NEWS_ENDPOINT =
  "https://news.colby.edu/wp-json/wp/v2/posts?per_page=5&categories=8,12,14,15&_embed=1";
const EXTERNAL_GRID_ENDPOINT =
  "https://news.colby.edu/wp-json/custom/v1/external-posts";

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

const createHeroBlock = () => ({
  blockName: "acf/hero",
  attrs: {
    data: {
      subheading: "Resilience",
      heading: "Resilience Hero Marker",
      paragraph: "Resilience hero paragraph.",
      image: heroImage,
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
  title: "Templates/Page Show/Full Page/Resilience",
  component: PageShow,
  tags: ["!autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export const NullBlocksProp = {
  render,
  args: {
    layout: "default",
    blocks: null,
    siteData,
    menus,
  },
  play: async ({ canvas }) => {
    await assertGlobalShell(canvas);
    await expect(canvas.queryByText("Resilience Hero Marker")).not.toBeInTheDocument();
  },
};

export const EmptyBlocksArray = {
  render,
  args: {
    layout: "default",
    blocks: [],
    siteData,
    menus,
  },
  play: async ({ canvas }) => {
    await assertGlobalShell(canvas);
    await expect(canvas.queryByText("Resilience Hero Marker")).not.toBeInTheDocument();
  },
};

export const UnknownBlockIgnored = {
  render,
  args: {
    layout: "default",
    blocks: [
      {
        blockName: "acf/not-a-real-block",
        attrs: { data: { heading: "Should Not Render" } },
      },
      createHeroBlock(),
    ],
    siteData,
    menus,
  },
  play: async ({ canvas }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Resilience Hero Marker")).toBeInTheDocument();
    await expect(canvas.queryByText("Should Not Render")).not.toBeInTheDocument();
  },
};

export const ApiEmptyResponses = {
  render,
  args: {
    layout: "default",
    blocks: [
      {
        blockName: "acf/carousel",
        attrs: {
          data: {
            render_api: true,
            api: "Latest News",
            heading: "Resilience API Carousel Marker",
            paragraph: "Should render even when API returns empty.",
            autoplay: false,
            buttons: [{ url: "#", title: "All News" }],
          },
        },
      },
      {
        blockName: "acf/article-section",
        attrs: {
          data: {
            renderApi: true,
            api: "Academic News",
            perView: 1,
          },
        },
      },
      {
        blockName: "acf/article-grid",
        attrs: {
          data: {
            display_posts_method: "api",
            api_source: "media_coverage",
            external_media_api: "all_media",
            range: 3,
            columns: 3,
            cta: "Read Story",
          },
        },
      },
    ],
    siteData,
    menus,
  },
  beforeEach: () => {
    const axiosGetSpy = spyOn(axios, "get").mockImplementation((url) => {
      const requestUrl = String(url);

      if (requestUrl === LATEST_NEWS_ENDPOINT) {
        return Promise.resolve({ data: [] });
      }
      if (requestUrl === ACADEMIC_NEWS_ENDPOINT) {
        return Promise.resolve({ data: [] });
      }
      if (requestUrl === EXTERNAL_GRID_ENDPOINT) {
        return Promise.resolve({ data: [] });
      }

      return Promise.resolve({ data: [] });
    });

    return () => {
      axiosGetSpy.mockRestore();
    };
  },
  play: async ({ canvas }) => {
    await assertGlobalShell(canvas);
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalled();
    });
    await expect(await canvas.findByText("Resilience API Carousel Marker")).toBeInTheDocument();
  },
};

export const InternalGridFetchErrorHandled = {
  render,
  args: {
    layout: "default",
    blocks: [
      createHeroBlock(),
      {
        blockName: "acf/article-grid",
        attrs: {
          data: {
            display_posts_method: "internal",
            render_posts_category: 1,
            post_limit: 12,
            columns: 3,
            cta: "Read Story",
          },
        },
      },
    ],
    siteData,
    menus,
  },
  beforeEach: () => {
    const axiosGetSpy = spyOn(axios, "get").mockImplementation((url) => {
      const requestUrl = String(url);
      if (requestUrl.includes("/wp-json/wp/v2/posts?categories=1")) {
        // Non-array payload simulates an API contract break while staying deterministic.
        return Promise.resolve({ data: {}, headers: {} });
      }
      return Promise.resolve({ data: [] });
    });

    return () => {
      axiosGetSpy.mockRestore();
    };
  },
  play: async ({ canvas }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Resilience Hero Marker")).toBeInTheDocument();
  },
};

export const ExternalGridFetchErrorHandled = {
  render,
  args: {
    layout: "default",
    blocks: [
      createHeroBlock(),
      {
        blockName: "acf/article-grid",
        attrs: {
          data: {
            display_posts_method: "api",
            api_source: "media_coverage",
            external_media_api: "all_media",
            range: 3,
            columns: 3,
            cta: "Read Story",
          },
        },
      },
    ],
    siteData,
    menus,
  },
  beforeEach: () => {
    const axiosGetSpy = spyOn(axios, "get").mockImplementation((url) => {
      const requestUrl = String(url);
      if (requestUrl === EXTERNAL_GRID_ENDPOINT) {
        // Non-array payload simulates an API contract break while staying deterministic.
        return Promise.resolve({ data: {} });
      }
      return Promise.resolve({ data: [] });
    });

    return () => {
      axiosGetSpy.mockRestore();
    };
  },
  play: async ({ canvas }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Resilience Hero Marker")).toBeInTheDocument();
  },
};
