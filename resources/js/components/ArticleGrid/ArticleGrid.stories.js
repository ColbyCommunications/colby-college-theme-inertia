import { expect, spyOn, waitFor, within } from "storybook/test";
import axios from '../../plugins/axios';
import ArticleGrid from "./ArticleGrid.vue";
import {
  createMockExternalPosts,
  createMockWpPost,
  createMockWpPosts,
} from "../__test-utils__/mock-data";

const mockItems = [
  {
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2024/12/20220914_sunrise_0052-HDR-1.jpg",
      alt: "this is an alt tag",
    },
    heading: "Future of Artificial Intelligence",
    subheading: "Technology",
    paragraph: "AI is reshaping industries at an unprecedented pace.",
    url: "#",
    buttons: [
      {
        button: {
          title: "Read Story",
          url: "https://www.colby.edu",
        },
      },
    ],
  },
  {
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2024/12/20220914_sunrise_0052-HDR-1.jpg",
    },
    heading: "Sustainable Energy Solutions",
    subheading: "Environment",
    paragraph: "Solar and wind energy are becoming more accessible than ever.",
    url: "#",
    buttons: [
      {
        button: {
          title: "Learn More",
          url: "https://www.colby.edu/academics",
        },
      },
    ],
  },
  {
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2024/12/20220914_sunrise_0052-HDR-1.jpg",
      alt: "this is an alt tag",
    },
    heading: "Modern Architecture Trends",
    subheading: "Design",
    paragraph: "Exploring the intersection of function and aesthetics in 2024.",
    url: "#",
    buttons: [
      {
        button: {
          title: "Read Story",
          url: "https://www.colby.edu/news",
        },
      },
    ],
  },
];

const externalMediaPosts = [
  {
    ...createMockExternalPosts(1)[0],
    title: { rendered: "President Interview in National Press" },
    tags: [{ name: "president" }],
  },
  {
    ...createMockExternalPosts(1)[0],
    title: { rendered: "Editor Pick: Colby Climate Story" },
    tags: [{ name: "editors-pick" }],
  },
  {
    ...createMockExternalPosts(1)[0],
    title: { rendered: "General Media Mention" },
    tags: [{ name: "campus" }],
  },
  {
    ...createMockExternalPosts(1)[0],
    title: { rendered: "Ignored Non-Media Story" },
    story_type: [{ slug: "campus-story" }],
  },
  {
    ...createMockExternalPosts(1)[0],
    title: { rendered: "Ignored Missing Content" },
    content: { rendered: "" },
  },
];

const setElementSize = (element, key, value) => {
  if (!element) return;
  Object.defineProperty(element, key, {
    configurable: true,
    get: () => value,
  });
};

export default {
  title: "Core Components/Article Grid",
  component: ArticleGrid,
};

const render = (args) => ({
  components: { ArticleGrid },
  setup() {
    return { args };
  },
  template: '<ArticleGrid v-bind="args" />',
});

export const ManualGrid = {
  render,
  args: {
    display_posts_method: "manual",
    columns: 3,
    cta: "Read Story",
    items: mockItems,
    border: false,
  },
  play: async ({ canvasElement }) => {
    const first = canvasElement.querySelectorAll('.grid .article-grid__item:first-child')[0];
    const firstHeading = first.querySelectorAll('.text-group__heading')[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe('Future of Artificial Intelligence');
    await expect(firstHeading).toBeVisible();
    
    const second = canvasElement.querySelectorAll('.grid .article-grid__item:nth-child(2)')[0];
    const secondHeading = second.querySelectorAll('.text-group__heading')[0];
    await expect(secondHeading.textContent.slice(0, -1)).toBe('Sustainable Energy Solutions');
    await expect(secondHeading).toBeVisible();

    const third = canvasElement.querySelectorAll('.grid .article-grid__item:nth-child(3)')[0];
    const thirdHeading = third.querySelectorAll('.text-group__heading')[0];
    await expect(thirdHeading.textContent.slice(0, -1)).toBe('Modern Architecture Trends');
    await expect(thirdHeading).toBeVisible();
  
  },
};

export const Accordion = {
  render,
  args: {
    display_posts_method: "manual",
    style: "accordion",
    columns: 3,
    render_api: false,
    items: mockItems,
  },
  play: async ({ canvas, canvasElement, userEvent }) => {
    const first = canvasElement.querySelectorAll('.grid .article-grid__item:first-child')[0];
    const firstHeading = first.querySelectorAll('.text-group__heading')[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe('Future of Artificial Intelligence');
    await expect(firstHeading).toBeVisible();

    const grid = canvasElement.querySelector(".article-grid");
    const gridItems = canvasElement.querySelectorAll(".article-grid__item");

    setElementSize(grid, "clientWidth", 1200);
    gridItems.forEach((item) => {
      setElementSize(item, "offsetWidth", 300);
      setElementSize(item, "offsetHeight", 420);
    });

    window.dispatchEvent(new Event("resize"));

    const readMoreButtons = await canvas.findAllByText("Read More");
    await userEvent.click(readMoreButtons[0]);
    const aiSummary = await canvas.findAllByText(
      "AI is reshaping industries at an unprecedented pace.",
    );
    await expect(aiSummary.length).toBeGreaterThan(0);
    await expect(canvas.getAllByText("Read Story").length).toBeGreaterThan(0);

    await userEvent.click(readMoreButtons[1]);
    const solarSummary = await canvas.findAllByText(
      "Solar and wind energy are becoming more accessible than ever.",
    );
    await expect(solarSummary.length).toBeGreaterThan(0);

    setElementSize(grid, "clientWidth", 300);
    gridItems.forEach((item) => {
      setElementSize(item, "offsetWidth", 300);
      setElementSize(item, "offsetHeight", 380);
    });

    window.dispatchEvent(new Event("resize"));
    await userEvent.click(readMoreButtons[0]);

    const closeIcons = canvasElement.querySelectorAll(".material-icons-sharp");
    if (closeIcons.length > 0) {
      await userEvent.click(closeIcons[0].closest("button"));
    }
  },
};

const buildInternalPageOne = () => {
  const posts = createMockWpPosts(12);
  posts[0] = createMockWpPost({
    title: { rendered: "Internal Story With ACF Summary" },
    excerpt: { rendered: "" },
    acf_blocks: [
      {
        name: "acf/paragraph",
        fields: {
          paragraph_text:
            "<p>Fallback summary from ACF paragraph content for internal fetch coverage branch testing.</p>",
        },
      },
    ],
    link: "https://news.colby.edu/story/internal-acf/",
  });
  posts[1] = createMockWpPost({
    title: { rendered: "Internal Story With Empty Summary" },
    excerpt: { rendered: "" },
    acf_blocks: [],
    link: "https://news.colby.edu/story/internal-empty/",
  });
  return posts;
};

const buildInternalPageTwo = () =>
  createMockWpPosts(6).map((post, idx) => ({
    ...post,
    id: 100 + idx,
    title: { rendered: `Page Two Story ${idx + 1}` },
    link: `https://news.colby.edu/story/page-two-${idx + 1}/`,
  }));

export const InternalFetch = {
  render,
  args: {
    display_posts_method: "internal",
    render_posts_category: 1,
    columns: 3,
    post_limit: -1,
    cta: "Read Story",
    image_orientation: "rectangle",
  },
  beforeEach: () => {
    const pageOne = buildInternalPageOne();
    const pageTwo = buildInternalPageTwo();

    const spy = spyOn(axios, "get").mockImplementation((url) => {
      if (url.includes("page=2")) {
        return Promise.resolve({
          data: pageTwo,
          headers: { "x-wp-totalpages": "3" },
        });
      }

      return Promise.resolve({
        data: pageOne,
        headers: { "x-wp-totalpages": "3" },
      });
    });

    return () => spy.mockRestore();
  },
  play: async ({ canvas, canvasElement, userEvent }) => {
    const first = canvasElement.querySelectorAll('.grid .article-grid__item:first-child')[0];
    const firstHeading = first.querySelectorAll('.text-group__heading')[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe('Internal Story With ACF Summary');
    await expect(firstHeading).toBeVisible();

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
    });

    const seeMore = await canvas.findByRole("button", { name: "See More" });
    await userEvent.click(seeMore);

    await waitFor(() => {
      const forth = canvasElement.querySelectorAll('.grid .article-grid__item:nth-child(4)')[0];
      const forthHeading = forth.querySelectorAll('.text-group__heading')[0];
      expect(forthHeading).toBeInTheDocument();
    });
    // await waitFor(() => {
    //   expect(axios.get).toHaveBeenCalledTimes(2);
    // });
    // await expect(axios.get.mock.calls[1][0]).toContain("page=2");

    // const ctaButtons = canvas.getAllByText("Read Story");
    // await expect(ctaButtons.length).toBeGreaterThan(5);
  },
};

export const ApiFetch = {
  render,
  args: {
    display_posts_method: "api",
    api_source: "media_coverage",
    external_media_api: "all_media",
    columns: 3,
    range: 3,
    cta: "Read Story",
  },
  beforeEach: () => {
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: externalMediaPosts,
    });
    return () => spy.mockRestore();
  },
  play: async ({ canvas, canvasElement }) => {
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        "https://news.colby.edu/wp-json/custom/v1/external-posts",
      );
    });
    const first = canvasElement.querySelectorAll('.grid .article-grid__item:first-child')[0];
    const firstHeading = first.querySelectorAll('.text-group__heading')[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe('President Interview in National Press');
    await expect(firstHeading).toBeVisible();
    
    const second = canvasElement.querySelectorAll('.grid .article-grid__item:nth-child(2)')[0];
    const secondHeading = second.querySelectorAll('.text-group__heading')[0];
    await expect(secondHeading.textContent.slice(0, -1)).toBe('Editor Pick: Colby Climate Story');
    await expect(secondHeading).toBeVisible();
    
    const third = canvasElement.querySelectorAll('.grid .article-grid__item:nth-child(3)')[0];
    const thirdHeading = third.querySelectorAll('.text-group__heading')[0];
    await expect(thirdHeading.textContent.slice(0, -1)).toBe('General Media Mention');
    await expect(thirdHeading).toBeVisible();

  },
};

export const TwoColumnGrid = {
  render,
  args: {
    display_posts_method: "api",
    api_source: "media_coverage",
    external_media_api: "president",
    columns: 2,
    range: 4,
    cta: "Read Story",
  },
  beforeEach: () => {
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: externalMediaPosts,
    });
    return () => spy.mockRestore();
  },
  play: async ({ canvas, canvasElement }) => {
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        "https://news.colby.edu/wp-json/custom/v1/external-posts",
      );
    });
    const first = canvasElement.querySelectorAll('.grid .article-grid__item:first-child')[0];
    const firstHeading = first.querySelectorAll('.text-group__heading')[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe('President Interview in National Press');
    await expect(firstHeading).toBeVisible();

    await expect(
      canvas.queryByText("Editor Pick: Colby Climate Story"),
    ).not.toBeInTheDocument();
  },
};

export const FourColumnGrid = {
  render,
  args: {
    display_posts_method: "api",
    api_source: "media_coverage",
    external_media_api: "highlight",
    columns: 4,
    range: 4,
    cta: "Read Story",
  },
  beforeEach: () => {
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: externalMediaPosts,
    });
    return () => spy.mockRestore();
  },
  play: async ({ canvas, canvasElement }) => {
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        "https://news.colby.edu/wp-json/custom/v1/external-posts",
      );
    });
    const first = canvasElement.querySelectorAll('.grid .article-grid__item:first-child')[0];
    const firstHeading = first.querySelectorAll('.text-group__heading')[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe('Editor Pick: Colby Climate Story');
    await expect(firstHeading).toBeVisible();
    await expect(
      canvas.queryByText("President Interview in National Press"),
    ).not.toBeInTheDocument();
  },
};

export const WithBorder = {
  render,
  args: {
    display_posts_method: "api",
    api_source: "media_coverage",
    external_media_api: "unknown_source",
    columns: 3,
    range: 3,
    cta: "Read Story",
  },
  beforeEach: () => {
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: externalMediaPosts,
    });
    return () => spy.mockRestore();
  },
  play: async ({ canvasElement }) => {
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        "https://news.colby.edu/wp-json/custom/v1/external-posts",
      );
    });
    const articles = canvasElement.querySelectorAll(".article-grid__item");
    await expect(articles.length).toBe(0);
  },
};

export const AccordionNoButtons = {
  render,
  args: {
    display_posts_method: "manual",
    style: "accordion",
    columns: 3,
    render_api: false,
    items: mockItems.map(({ buttons, ...item }) => item),
  },
  play: async ({ canvas, canvasElement, userEvent }) => {
    const first = canvasElement.querySelectorAll('.grid .article-grid__item:first-child')[0];
    const firstHeading = first.querySelectorAll('.text-group__heading')[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe('Future of Artificial Intelligence');
    await expect(firstHeading).toBeVisible();

    const grid = canvasElement.querySelector(".article-grid");
    const gridItems = canvasElement.querySelectorAll(".article-grid__item");
    setElementSize(grid, "clientWidth", 960);
    gridItems.forEach((item) => {
      setElementSize(item, "offsetWidth", 320);
      setElementSize(item, "offsetHeight", 360);
    });

    window.dispatchEvent(new Event("resize"));

    const readMoreButtons = await canvas.findAllByText("Read More");
    await userEvent.click(readMoreButtons[0]);

    const flyout = canvasElement.querySelectorAll('.accordion__flyout')[0];
    const aiSummary = await within(flyout).findAllByText(
      "AI is reshaping industries at an unprecedented pace.",
    );
    await expect(aiSummary.length).toBeGreaterThan(0);

    await expect(canvas.queryByText("Learn More")).not.toBeInTheDocument();
  },
};
