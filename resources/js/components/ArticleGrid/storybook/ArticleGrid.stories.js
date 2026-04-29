import { expect, spyOn, waitFor, within } from "storybook/test";
import axios from "../../../plugins/axios";
import ArticleGrid from "../ArticleGrid.vue";
import {
  createMockExternalPosts,
  createMockWpPost,
  createMockWpPosts,
} from "../../__test-utils__/mock-data";

const mockItemsSquare = [
  {
    image: {
      src: "https://placeholdit.com/600x600/dddddd/999999",
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
      src: "https://placeholdit.com/600x600/dddddd/999999",
      alt: "this is an alt tag",
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
      src: "https://placeholdit.com/600x600/dddddd/999999",
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
  {
    image: {
      src: "https://placeholdit.com/600x600/dddddd/999999",
      alt: "this is an alt tag",
    },
    heading: "The Theory of Everything",
    subheading: "Knowledge Base",
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

const mockItems = [
  {
    image: {
      src: "https://placeholdit.com/600x400/dddddd/999999",
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
      src: "https://placeholdit.com/600x400/dddddd/999999",
      alt: "this is an alt tag",
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
      src: "https://placeholdit.com/600x400/dddddd/999999",
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
  {
    image: {
      src: "https://placeholdit.com/600x400/dddddd/999999",
      alt: "this is an alt tag",
    },
    heading: "The Theory of Everything",
    subheading: "Knowledge Base",
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
    if (import.meta.env.MODE !== 'test' ) return;
    const first = canvasElement.querySelectorAll(
      ".grid .article-grid__item:first-child",
    )[0];
    const firstHeading = first.querySelectorAll(".text-group__heading")[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe(
      "Future of Artificial Intelligence",
    );
    await expect(firstHeading).toBeVisible();

    const second = canvasElement.querySelectorAll(
      ".grid .article-grid__item:nth-child(2)",
    )[0];
    const secondHeading = second.querySelectorAll(".text-group__heading")[0];
    await expect(secondHeading.textContent.slice(0, -1)).toBe(
      "Sustainable Energy Solutions",
    );
    await expect(secondHeading).toBeVisible();

    const third = canvasElement.querySelectorAll(
      ".grid .article-grid__item:nth-child(3)",
    )[0];
    const thirdHeading = third.querySelectorAll(".text-group__heading")[0];
    await expect(thirdHeading.textContent.slice(0, -1)).toBe(
      "Modern Architecture Trends",
    );
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
    if (import.meta.env.MODE !== 'test' ) return;
    const first = canvasElement.querySelectorAll(
      ".grid .article-grid__item:first-child",
    )[0];
    const firstHeading = first.querySelectorAll(".text-group__heading")[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe(
      "Future of Artificial Intelligence",
    );
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

    const closeIcons = canvasElement.querySelectorAll(
      ".material-symbols-sharp",
    );
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

export const InternalCategoryFetch = {
  render,
  args: {
    display_posts_method: "internal",

    columns: 3,
    post_limit: -1,
    cta: "Read Story",
    image_orientation: "rectangle",

    hydrated_from_server: true,
    should_client_refresh: false,
    initial_items: [
      {
          "ID": 68994,
          "post_title": "S26 Colloquium",
          "post_type": "post",
          "heading": "S26 Colloquium",
          "subheading": "Feb 17, 2026",
          "paragraph": "When looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
      },
      {
          "ID": 67018,
          "post_title": "Transforming the Smithsonian's Archives of American Art Journal",
          "post_type": "post",
          "heading": "Transforming the Smithsonian's Archives of American Art Journal",
          "subheading": "Nov 04, 2025",
          "paragraph": "As executive editor, art scholar Tanya Sheehan oversaw a dramatic increase in the venerable journal’s readership and quality"
      },
      {
          "ID": 66817,
          "post_title": "Student-Scholars Shine at International Art Conference",
          "post_type": "post",
          "heading": "Student-Scholars Shine at International Art Conference",
          "subheading": "Oct 23, 2025",
          "paragraph": "Art history course and Colby Museum prepare students to dialogue with experts on Edvard Munch"
      },
      {
          "ID": 65511,
          "post_title": "Harkett's Animal Modernities Published, Discussed in Blog Interview",
          "post_type": "post",
          "heading": "Harkett's Animal Modernities Published, Discussed in Blog Interview",
          "subheading": "Sep 04, 2025",
          "paragraph": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
      },
    ],
  },
  
  play: async ({ canvas, canvasElement, userEvent }) => {
    if (import.meta.env.MODE !== 'test' ) return;
    const first = canvasElement.querySelectorAll(
      ".grid .article-grid__item:first-child",
    )[0];
    const firstHeading = first.querySelectorAll(".text-group__heading")[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe(
      "Internal Story With ACF Summary",
    );
    await expect(firstHeading).toBeVisible();

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
    });

    const seeMore = await canvas.findByRole("button", { name: "See More" });
    await userEvent.click(seeMore);

    await waitFor(() => {
      const forth = canvasElement.querySelectorAll(
        ".grid .article-grid__item:nth-child(4)",
      )[0];
      const forthHeading = forth.querySelectorAll(".text-group__heading")[0];
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

export const MediaCoverage = {
  render,
  args: {
    display_posts_method: "api",
    api_source: "media_coverage",
    external_media_api: "all_media",
    columns: 3,
    range: 3,
    cta: "Read Story",

    hydrated_from_server: true,
    should_client_refresh: false,
    initial_items: [
      {
          "title": {
              "rendered": "$150 Million Gift for the Sciences"
          },
          "summary": "The <em>Boston Globe</em> published a feature story on Colby's science initiative and the major gift that the College re...",
          "url": "https://urldefense.com/v3/__https:/colby.us17.list-manage.com/track/click?u=535f666e042ba48f12906d776&id=cbf3c8f4cd&e=f080de3004__;!!P_zEGVH0kSMiWA!AtxqWuwhBPvg6htSW7Rpdk0M15OVX_R06OdL0Ifr87QnIsJuFamlWO2D24eFRJxJW9Np--r7TxhKcun9$",
          "image": {
              "src": "https://news.colby.edu/wp-content/uploads/2021/09/boston-globe-200x200-1-100x100.png",
              "alt": "Boston Globe"
          }
      },
      {
          "title": {
              "rendered": "Groundbreaking Financial Aid Initiative Gets National Attention"
          },
          "summary": "Colby's Fair Shot Fund program was featured in a story by NPR about making a college education more affordable for middl...",
          "url": "https://www.npr.org/2024/10/22/nx-s1-5155173/colleges-financial-aid-middle-class-families",
          "image": {
              "src": "https://news.colby.edu/wp-content/uploads/2021/09/NPR_logo_200x200-100x100.png",
              "alt": "NPR"
          }
      },
      {
          "title": {
              "rendered": "Colby's AI Leadership"
          },
          "summary": "<em>Marketplace Tech</em> on NPR featured Michael Donihue, Colby's interim director of the Davis Institute for Artificia...",
          "url": "https://www.marketplace.org/shows/marketplace-tech/how-one-college-is-leveraging-ai-for-educators-and-students/",
          "image": {
              "src": "https://news.colby.edu/wp-content/uploads/2021/09/MarketplaceTech_logo_200x200-100x100.png",
              "alt": "Marketplace Tech"
          }
      }
  ]
  },
  beforeEach: () => {
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: externalMediaPosts,
    });
    return () => spy.mockRestore();
  },
  play: async ({ canvas, canvasElement }) => {
    if (import.meta.env.MODE !== 'test' ) return;
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        "https://news.colby.edu/wp-json/custom/v1/external-posts",
      );
    });
    const first = canvasElement.querySelectorAll(
      ".grid .article-grid__item:first-child",
    )[0];
    const firstHeading = first.querySelectorAll(".text-group__heading")[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe(
      "President Interview in National Press",
    );
    await expect(firstHeading).toBeVisible();

    const second = canvasElement.querySelectorAll(
      ".grid .article-grid__item:nth-child(2)",
    )[0];
    const secondHeading = second.querySelectorAll(".text-group__heading")[0];
    await expect(secondHeading.textContent.slice(0, -1)).toBe(
      "Editor Pick: Colby Climate Story",
    );
    await expect(secondHeading).toBeVisible();

    const third = canvasElement.querySelectorAll(
      ".grid .article-grid__item:nth-child(3)",
    )[0];
    const thirdHeading = third.querySelectorAll(".text-group__heading")[0];
    await expect(thirdHeading.textContent.slice(0, -1)).toBe(
      "General Media Mention",
    );
    await expect(thirdHeading).toBeVisible();
  },
};

export const TwoColumnGrid = {
  render,
  args: {
    display_posts_method: "manual",
    columns: 2,
    cta: "Read Story",
    items: mockItems,
  },
  beforeEach: () => {
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: externalMediaPosts,
    });
    return () => spy.mockRestore();
  },
  play: async ({ canvas, canvasElement }) => {
    if (import.meta.env.MODE !== 'test' ) return;
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        "https://news.colby.edu/wp-json/custom/v1/external-posts",
      );
    });
    const first = canvasElement.querySelectorAll(
      ".grid .article-grid__item:first-child",
    )[0];
    const firstHeading = first.querySelectorAll(".text-group__heading")[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe(
      "President Interview in National Press",
    );
    await expect(firstHeading).toBeVisible();

    await expect(
      canvas.queryByText("Editor Pick: Colby Climate Story"),
    ).not.toBeInTheDocument();
  },
};

export const FourColumnGrid = {
  render,
  args: {
    display_posts_method: "manual",
    columns: 4,
    items: mockItems,
    cta: "Read Story",
  },
  beforeEach: () => {
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: externalMediaPosts,
    });
    return () => spy.mockRestore();
  },
  play: async ({ canvas, canvasElement }) => {
    if (import.meta.env.MODE !== 'test' ) return;
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        "https://news.colby.edu/wp-json/custom/v1/external-posts",
      );
    });
    const first = canvasElement.querySelectorAll(
      ".grid .article-grid__item:first-child",
    )[0];
    const firstHeading = first.querySelectorAll(".text-group__heading")[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe(
      "Editor Pick: Colby Climate Story",
    );
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
    border: true,
    columns: 3,
    range: 3,
    cta: "Read Story",

    hydrated_from_server: true,
    should_client_refresh: false,
    initial_items: [
      {
          "title": {
              "rendered": "$150 Million Gift for the Sciences"
          },
          "summary": "The <em>Boston Globe</em> published a feature story on Colby's science initiative and the major gift that the College re...",
          "url": "https://urldefense.com/v3/__https:/colby.us17.list-manage.com/track/click?u=535f666e042ba48f12906d776&id=cbf3c8f4cd&e=f080de3004__;!!P_zEGVH0kSMiWA!AtxqWuwhBPvg6htSW7Rpdk0M15OVX_R06OdL0Ifr87QnIsJuFamlWO2D24eFRJxJW9Np--r7TxhKcun9$",
          "image": {
              "src": "https://news.colby.edu/wp-content/uploads/2021/09/boston-globe-200x200-1-100x100.png",
              "alt": "Boston Globe"
          }
      },
      {
          "title": {
              "rendered": "Groundbreaking Financial Aid Initiative Gets National Attention"
          },
          "summary": "Colby's Fair Shot Fund program was featured in a story by NPR about making a college education more affordable for middl...",
          "url": "https://www.npr.org/2024/10/22/nx-s1-5155173/colleges-financial-aid-middle-class-families",
          "image": {
              "src": "https://news.colby.edu/wp-content/uploads/2021/09/NPR_logo_200x200-100x100.png",
              "alt": "NPR"
          }
      },
      {
          "title": {
              "rendered": "Colby's AI Leadership"
          },
          "summary": "<em>Marketplace Tech</em> on NPR featured Michael Donihue, Colby's interim director of the Davis Institute for Artificia...",
          "url": "https://www.marketplace.org/shows/marketplace-tech/how-one-college-is-leveraging-ai-for-educators-and-students/",
          "image": {
              "src": "https://news.colby.edu/wp-content/uploads/2021/09/MarketplaceTech_logo_200x200-100x100.png",
              "alt": "Marketplace Tech"
          }
      }
  ]
  },
  beforeEach: () => {
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: externalMediaPosts,
    });
    return () => spy.mockRestore();
  },
  play: async ({ canvasElement }) => {
    if (import.meta.env.MODE !== 'test' ) return;
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        "https://news.colby.edu/wp-json/custom/v1/external-posts",
      );
    });
    const articles = canvasElement.querySelectorAll(".article-grid__item");
    await expect(articles.length).toBe(0);
  },
};


export const SquareImages = {
  render,
  args: {
    display_posts_method: "manual",
    columns: 3,
    cta: "Read Story",
    items: mockItemsSquare,
    border: false,
  },
  play: async ({ canvasElement }) => {
    if (import.meta.env.MODE !== 'test' ) return;
    const first = canvasElement.querySelectorAll(
      ".grid .article-grid__item:first-child",
    )[0];
    const firstHeading = first.querySelectorAll(".text-group__heading")[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe(
      "Future of Artificial Intelligence",
    );
    await expect(firstHeading).toBeVisible();

    const second = canvasElement.querySelectorAll(
      ".grid .article-grid__item:nth-child(2)",
    )[0];
    const secondHeading = second.querySelectorAll(".text-group__heading")[0];
    await expect(secondHeading.textContent.slice(0, -1)).toBe(
      "Sustainable Energy Solutions",
    );
    await expect(secondHeading).toBeVisible();

    const third = canvasElement.querySelectorAll(
      ".grid .article-grid__item:nth-child(3)",
    )[0];
    const thirdHeading = third.querySelectorAll(".text-group__heading")[0];
    await expect(thirdHeading.textContent.slice(0, -1)).toBe(
      "Modern Architecture Trends",
    );
    await expect(thirdHeading).toBeVisible();
  },
};