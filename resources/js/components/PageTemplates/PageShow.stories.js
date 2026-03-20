import { expect, waitFor, spyOn, userEvent } from "storybook/test";
import axios from "axios";
import PageShow from "../../pages/Page/Show.vue";
import {
  createMockExternalPosts,
  createMockWpPosts,
} from "../__test-utils__/mock-data";

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
  src: "/mock-assets/hero-placeholder.jpg",
  alt: "Students on campus",
};

const gridImage = {
  src: "/mock-assets/hero-placeholder.jpg",
  alt: "Story card",
};

const manualCarouselItems = [
  {
    image: heroImage,
    heading: "Integration Carousel Story A",
    subheading: "Campus",
    paragraph: "Manual carousel integration marker A.",
    url: "#",
    buttons: [{ button: { url: "#", title: "Read Story" } }],
  },
  {
    image: heroImage,
    heading: "Integration Carousel Story B",
    subheading: "Academics",
    paragraph: "Manual carousel integration marker B.",
    url: "#",
    buttons: [{ button: { url: "#", title: "Read Story" } }],
  },
  {
    image: heroImage,
    heading: "Integration Carousel Story C",
    subheading: "Community",
    paragraph: "Manual carousel integration marker C.",
    url: "#",
    buttons: [{ button: { url: "#", title: "Read Story" } }],
  },
];

const manualArticleGridItems = [
  {
    image: gridImage,
    heading: "Integration Grid Story 1",
    subheading: "Research",
    paragraph: "Manual article-grid marker one.",
    url: "#",
  },
  {
    image: gridImage,
    heading: "Integration Grid Story 2",
    subheading: "Arts",
    paragraph: "Manual article-grid marker two.",
    url: "#",
  },
  {
    image: gridImage,
    heading: "Integration Grid Story 3",
    subheading: "Athletics",
    paragraph: "Manual article-grid marker three.",
    url: "#",
  },
];

const manualArticleSectionItems = [
  {
    image: gridImage,
    heading: "Integration ArticleSection Story 1",
    subheading: "Section",
    paragraph: "Manual article-section grid marker one.",
    url: "#",
    buttons: [{ button: { size: "small", title: "Read", url: "#" } }],
  },
  {
    image: gridImage,
    heading: "Integration ArticleSection Story 2",
    subheading: "Section",
    paragraph: "Manual article-section grid marker two.",
    url: "#",
    buttons: [{ button: { size: "small", title: "Read", url: "#" } }],
  },
  {
    image: gridImage,
    heading: "Integration ArticleSection Story 3",
    subheading: "Section",
    paragraph: "Manual article-section grid marker three.",
    url: "#",
    buttons: [{ button: { size: "small", title: "Read", url: "#" } }],
  },
];

const buildWpPosts = (titles, idOffset = 1) =>
  createMockWpPosts(titles.length).map((post, idx) => ({
    ...post,
    id: idOffset + idx,
    title: { rendered: titles[idx] },
    excerpt: {
      rendered: `<p>${titles[idx]} excerpt summary for integration testing.</p>`,
    },
    link: `https://news.colby.edu/story/${idOffset + idx}/`,
    guid: { rendered: `https://news.colby.edu/?p=${idOffset + idx}` },
  }));

const latestNewsPosts = buildWpPosts(
  [
    "Latest API Story Alpha",
    "Latest API Story Beta",
    "Latest API Story Gamma",
    "Latest API Story Delta",
    "Latest API Story Epsilon",
  ],
  100,
);

const academicNewsPosts = buildWpPosts(
  [
    "Academic API Story One",
    "Academic API Story Two",
    "Academic API Story Three",
    "Academic API Story Four",
    "Academic API Story Five",
  ],
  200,
);

const internalGridPageOne = buildWpPosts(
  Array.from({ length: 12 }, (_, idx) => `Internal Grid Page 1 - ${idx + 1}`),
  300,
);

const internalGridPageTwo = buildWpPosts(
  Array.from({ length: 12 }, (_, idx) => `Internal Grid Page 2 - ${idx + 1}`),
  400,
);

const externalGridPosts = createMockExternalPosts(3).map((post, idx) => ({
  ...post,
  title: { rendered: `External Grid API Story ${idx + 1}` },
  external_url: `https://example.com/external-grid-story-${idx + 1}`,
}));

const createHeroBlock = () => ({
  blockName: "acf/hero",
  attrs: {
    data: {
      subheading: "Integration Hero",
      heading: "Integration Hero Block",
      paragraph: "Hero block integration marker paragraph.",
      image: heroImage,
    },
  },
});

const createHomeHeroBlock = () => ({
  blockName: "acf/home-hero",
  attrs: {
    data: {
      subheading: "Discover",
      heading: "Integration HomeHero Block",
      caption: "integration home-hero caption",
      paragraph: "HomeHero integration marker paragraph.",
      image: heroImage,
    },
  },
});

const createCarouselBlock = (carouselMode) =>
  carouselMode === "api"
    ? {
        blockName: "acf/carousel",
        attrs: {
          data: {
            render_api: true,
            api: "Latest News",
            heading: "API Carousel Integration",
            paragraph: "Carousel API integration marker paragraph.",
            cta: "Read Story",
            autoplay: false,
            buttons: [{ url: "#", title: "All News" }],
          },
        },
      }
    : {
        blockName: "acf/carousel",
        attrs: {
          data: {
            render_api: false,
            heading: "Integration Carousel Block",
            paragraph: "Carousel integration marker paragraph.",
            items: manualCarouselItems,
            autoplay: false,
            buttons: [{ url: "#", title: "All Stories" }],
          },
        },
      };

const createArticleGridBlock = (gridMode) => {
  if (gridMode === "internal") {
    return {
      blockName: "acf/article-grid",
      attrs: {
        data: {
          display_posts_method: "internal",
          render_posts_category: 1,
          post_limit: 24,
          columns: 3,
          cta: "Read Story",
        },
      },
    };
  }

  if (gridMode === "api") {
    return {
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
    };
  }

  return {
    blockName: "acf/article-grid",
    attrs: {
      data: {
        display_posts_method: "manual",
        render_api: false,
        columns: 3,
        cta: "Read Story",
        items: manualArticleGridItems,
      },
    },
  };
};

const createArticleSectionBlock = (sectionMode) =>
  sectionMode === "api"
    ? {
        blockName: "acf/article-section",
        attrs: {
          data: {
            renderApi: true,
            api: "Academic News",
            perView: 1,
            gap: 0,
          },
        },
      }
    : {
        blockName: "acf/article-section",
        attrs: {
          data: {
            renderApi: false,
            heading: "Integration ArticleSection Block",
            subheading: "Article Section",
            paragraph: "ArticleSection integration marker paragraph.",
            buttons: [{ button: { url: "#", title: "View All" } }],
            gridProps: {
              items: manualArticleSectionItems,
            },
          },
        },
      };

const createFactsBlock = () => ({
  blockName: "acf/facts-figures",
  attrs: {
    data: {
      subheading: "Integration Facts",
      heading: "Integration FactsFigures Block",
      paragraph: "Facts and figures integration marker paragraph.",
      facts: [
        { figure: "2,100", paragraph: "students" },
        { figure: "10:1", paragraph: "ratio" },
      ],
      image: heroImage,
    },
  },
});

const createDarkBlock = () => ({
  blockName: "acf/dark-interstitial",
  attrs: {
    data: {
      subheading: "Integration Dark",
      heading: "Integration DarkInterstitial Block",
      icon: true,
      paragraph: "Dark interstitial integration marker paragraph.",
    },
  },
});

const createBlocks = ({ carouselMode, gridMode, sectionMode }) => [
  createHeroBlock(),
  createHomeHeroBlock(),
  createCarouselBlock(carouselMode),
  createArticleGridBlock(gridMode),
  createArticleSectionBlock(sectionMode),
  createFactsBlock(),
  createDarkBlock(),
];

const createAxiosMock = () => {
  const spy = spyOn(axios, "get").mockImplementation((url) => {
    const requestUrl = String(url);

    if (requestUrl === LATEST_NEWS_ENDPOINT) {
      return Promise.resolve({ data: latestNewsPosts });
    }

    if (requestUrl === ACADEMIC_NEWS_ENDPOINT) {
      return Promise.resolve({ data: academicNewsPosts });
    }

    if (requestUrl === EXTERNAL_GRID_ENDPOINT) {
      return Promise.resolve({ data: externalGridPosts });
    }

    if (
      requestUrl.includes("/wp-json/wp/v2/posts?categories=1") &&
      requestUrl.includes("page=1")
    ) {
      return Promise.resolve({
        data: internalGridPageOne,
        headers: {
          "x-wp-totalpages": "2",
        },
      });
    }

    if (
      requestUrl.includes("/wp-json/wp/v2/posts?categories=1") &&
      requestUrl.includes("page=2")
    ) {
      return Promise.resolve({
        data: internalGridPageTwo,
        headers: {
          "x-wp-totalpages": "2",
        },
      });
    }

    return Promise.reject(new Error(`Unexpected axios.get call: ${requestUrl}`));
  });

  return () => {
    spy.mockRestore();
  };
};

const assertGlobalShell = async (canvas) => {
  const admissionsLinks = await canvas.findAllByText("Admissions & Aid");
  await expect(admissionsLinks.length).toBeGreaterThan(0);
  await expect(await canvas.findByText("Contact Colby")).toBeInTheDocument();
};

const assertCommonBlocks = async (canvas) => {
  await waitFor(() => {
    expect(canvas.queryByText("Integration Hero Block")).toBeInTheDocument();
    expect(canvas.queryByText("Integration HomeHero Block")).toBeInTheDocument();
    expect(canvas.queryByText("Integration FactsFigures Block")).toBeInTheDocument();
    expect(canvas.queryByText("Integration DarkInterstitial Block")).toBeInTheDocument();
  });
};

const getCalledUrls = () => axios.get.mock.calls.map(([url]) => String(url));

const runComboPlay = async ({ canvas, carouselMode, gridMode, sectionMode }) => {
  await assertGlobalShell(canvas);
  await assertCommonBlocks(canvas);

  if (carouselMode === "api") {
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(LATEST_NEWS_ENDPOINT);
    });
    await expect(await canvas.findByText("Latest API Story Alpha")).toBeInTheDocument();
  } else {
    await expect(await canvas.findByText("Integration Carousel Block")).toBeInTheDocument();
  }

  if (sectionMode === "api") {
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(ACADEMIC_NEWS_ENDPOINT);
    });
    await expect(await canvas.findByText("Academic API Story One")).toBeInTheDocument();
  } else {
    await expect(
      await canvas.findByText("Integration ArticleSection Block"),
    ).toBeInTheDocument();
  }

  if (gridMode === "manual") {
    await expect(await canvas.findByText("Integration Grid Story 1")).toBeInTheDocument();
  }

  if (gridMode === "api") {
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(EXTERNAL_GRID_ENDPOINT);
    });
    await expect(await canvas.findByText("External Grid API Story 1")).toBeInTheDocument();
  }

  if (gridMode === "internal") {
    await waitFor(() => {
      const urls = getCalledUrls();
      expect(
        urls.some(
          (url) =>
            url.includes("/wp-json/wp/v2/posts?categories=1") &&
            url.includes("page=1"),
        ),
      ).toBe(true);
    });

    await expect(await canvas.findByText("Internal Grid Page 1 - 1")).toBeInTheDocument();

    const seeMoreButton = await canvas.findByRole("button", { name: "See More" });
    await userEvent.click(seeMoreButton);

    await waitFor(() => {
      const urls = getCalledUrls();
      expect(
        urls.some(
          (url) =>
            url.includes("/wp-json/wp/v2/posts?categories=1") &&
            url.includes("page=2"),
        ),
      ).toBe(true);
    });

    await waitFor(() => {
      expect(canvas.queryByRole("button", { name: "See More" })).not.toBeInTheDocument();
    });
  }

  const nextButtons = canvas.queryAllByRole("button", { name: "Next" });
  const prevButtons = canvas.queryAllByRole("button", { name: "Previous" });

  if (nextButtons.length > 0 && prevButtons.length > 0) {
    await userEvent.click(nextButtons[0]);
    await userEvent.click(prevButtons[0]);
  }
};

const createFullPageStory = (carouselMode, gridMode, sectionMode) => ({
  render,
  args: {
    layout: "default",
    blocks: createBlocks({ carouselMode, gridMode, sectionMode }),
    siteData,
    menus,
  },
  tags: ["!autodocs"],
  beforeEach: () => createAxiosMock(),
  play: async ({ canvas }) => {
    await runComboPlay({ canvas, carouselMode, gridMode, sectionMode });
  },
});

export default {
  title: "Templates/Page Show/Full Page",
  component: PageShow,
  tags: ["!autodocs"],
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

export const CarouselManual_GridManual_SectionManual = createFullPageStory(
  "manual",
  "manual",
  "manual",
);
export const CarouselManual_GridManual_SectionApi = createFullPageStory(
  "manual",
  "manual",
  "api",
);
export const CarouselManual_GridInternal_SectionManual = createFullPageStory(
  "manual",
  "internal",
  "manual",
);
export const CarouselManual_GridInternal_SectionApi = createFullPageStory(
  "manual",
  "internal",
  "api",
);
export const CarouselManual_GridApi_SectionManual = createFullPageStory(
  "manual",
  "api",
  "manual",
);
export const CarouselManual_GridApi_SectionApi = createFullPageStory(
  "manual",
  "api",
  "api",
);
export const CarouselApi_GridManual_SectionManual = createFullPageStory(
  "api",
  "manual",
  "manual",
);
export const CarouselApi_GridManual_SectionApi = createFullPageStory(
  "api",
  "manual",
  "api",
);
export const CarouselApi_GridInternal_SectionManual = createFullPageStory(
  "api",
  "internal",
  "manual",
);
export const CarouselApi_GridInternal_SectionApi = createFullPageStory(
  "api",
  "internal",
  "api",
);
export const CarouselApi_GridApi_SectionManual = createFullPageStory(
  "api",
  "api",
  "manual",
);
export const CarouselApi_GridApi_SectionApi = createFullPageStory(
  "api",
  "api",
  "api",
);
