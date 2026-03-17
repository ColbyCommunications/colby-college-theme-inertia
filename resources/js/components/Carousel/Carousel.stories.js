import Carousel from "./Carousel.vue";
import { expect, spyOn, waitFor } from "storybook/test";
import axios from "axios";
import { createMockWpPosts } from "../__test-utils__/mock-data";

export default {
  title: "Core Components/Carousel",
  component: Carousel,
};

const LATEST_NEWS_ENDPOINT =
  "https://news.colby.edu/wp-json/wp/v2/posts?per_page=5&tags=561&_embed=1";
const ACADEMIC_NEWS_ENDPOINT =
  "https://news.colby.edu/wp-json/wp/v2/posts?per_page=5&categories=8,12,14,15&_embed=1";
const FACULTY_ENDPOINT =
  "https://news.colby.edu/wp-json/wp/v2/external_post?story_type_slug=faculty-accomplishments&per_page=5&_embed=1";

const sharedButtons = [{ url: "https://www.colby.edu", title: "All News" }];

const mockItems = [
  {
    image: {
      src: "https://placeholdit.com/600x400/dddddd/999999",
      srcset:
        "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Rectangle: "https://placehold.co/600x400",
        Rectangle_mobile: "https://placehold.co/300x200",
      },
    },
    heading: "Future of Artificial Intelligence",
    subheading: "Technology",
    paragraph: "AI is reshaping industries at an unprecedented pace.",
    url: "#",
    buttons: [
      {
        button: {
          size: "small",
          title: "button1",
          url: "https://www.colby.edu",
        },
      },
    ],
  },
  {
    image: {
      src: "https://placeholdit.com/600x400/dddddd/999999",
      srcset:
        "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Rectangle: "https://placehold.co/600x400",
        Rectangle_mobile: "https://placehold.co/300x200",
      },
    },
    heading: "Sustainable Energy Solutions",
    subheading: "Environment",
    paragraph: "Solar and wind energy are becoming more accessible than ever.",
    url: "#",
    buttons: [
      {
        button: {
          size: "small",
          title: "button1",
          url: "https://www.colby.edu",
        },
      },
    ],
  },
  {
    image: {
      src: "https://placeholdit.com/600x400/dddddd/999999",
      srcset:
        "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Rectangle: "https://placehold.co/600x400",
        Rectangle_mobile: "https://placehold.co/300x200",
      },
    },
    heading: "Modern Architecture Trends",
    subheading: "Design",
    paragraph: "Exploring the intersection of function and aesthetics in 2024.",
    url: "#",
    buttons: [
      {
        button: {
          size: "small",
          title: "button1",
          url: "https://www.colby.edu",
        },
      },
    ],
  },
];

const runBasicInteractions = async ({ canvas, canvasElement, userEvent }) => {
  await waitFor(() => {
    const first = canvasElement.querySelectorAll('.carousel__main .carousel__slides-context .carousel__slides-context-wrap:first-child')[0];
    const firstHeading = first.querySelectorAll('.text-group__heading')[0];
    expect(firstHeading.textContent.slice(0, -1)).toBe('Future of Artificial Intelligence');
    expect(firstHeading).toBeVisible();
  });

  const main = canvasElement.querySelector(".carousel__main");
  await expect(main).not.toBeNull();
  await userEvent.hover(main);
  await userEvent.unhover(main);

  const nextButtons = canvas.getAllByRole("button", { name: "Next" });
  const prevButtons = canvas.getAllByRole("button", { name: "Previous" });
  await expect(nextButtons.length).toBeGreaterThan(0);
  await expect(prevButtons.length).toBeGreaterThan(0);

  await userEvent.click(nextButtons[0]);
  await userEvent.click(prevButtons[0]);

};

export const Primary = {
  name: "Primary",
  args: {
    render_api: false,
    items: mockItems,
    buttons: sharedButtons,
  },
  play: runBasicInteractions,
};

export const AutoplayFalse = {
  name: "Autoplay False",
  args: {
    render_api: false,
    items: mockItems,
    autoplay: false,
    buttons: sharedButtons,
  },
  play: runBasicInteractions,
};

export const WithHeadingAndParagraph = {
  name: "With Heading and Paragraph",
  args: {
    render_api: false,
    items: mockItems,
    heading: "Latest Stories",
    subheading: "News",
    paragraph: "Stay up to date with the latest from Colby.",
    buttons: [{ url: "https://www.colby.edu", title: "All News" }],
  },
  play: async (ctx) => {
    await runBasicInteractions(ctx);
    const { canvas, canvasElement } = ctx;

    const first = canvasElement.querySelectorAll('.carousel__context')[0];
    const firstHeading = first.querySelectorAll('.text-group__heading')[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe('Latest Stories');
    await expect(firstHeading).toBeVisible();
  },
};

export const CustomInterval = {
  name: "Custom Interval",
  args: {
    render_api: false,
    items: mockItems,
    autoplay: true,
    interval: 300,
    buttons: [{ url: "https://www.colby.edu", title: "All News" }],
  },
  play: runBasicInteractions,
};

export const SingleSlide = {
  name: "Single Slide (No Autoplay)",
  args: {
    render_api: false,
    items: [mockItems[0]],
    autoplay: true,
    buttons: [{ url: "https://www.colby.edu", title: "Read More" }],
  },
  play: async ({ canvas, canvasElement, userEvent }) => {
    await waitFor(() => {
      const first = canvasElement.querySelectorAll('.carousel__main .carousel__slides-context .carousel__slides-context-wrap:first-child')[0];
      const firstHeading = first.querySelectorAll('.text-group__heading')[0];
      expect(firstHeading.textContent.slice(0, -1)).toBe('Future of Artificial Intelligence');
      expect(firstHeading).toBeVisible();
    });

    const main = canvasElement.querySelector(".carousel__main");
    await expect(main).not.toBeNull();
    await userEvent.hover(main);
    await userEvent.unhover(main);

    const nextButtons = canvas.getAllByRole("button", { name: "Next" });
    await expect(nextButtons.length).toBeGreaterThan(0);
    await userEvent.click(nextButtons[0]);

    // await expect(
    //   canvas.getByText("Future of Artificial Intelligence"),
    // ).toBeInTheDocument();
  },
};

export const LightType = {
  name: "Light Type",
  args: {
    render_api: true,
    api: "Unexpected Feed",
    heading: "Unexpected",
    paragraph: "Fallback mode check.",
    cta: "Read Story",
    autoplay: false,
    buttons: [{ url: "https://news.colby.edu/", title: "All News" }],
  },
  beforeEach: () => {
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: createMockWpPosts(5),
    });
    return () => spy.mockRestore();
  },
  play: async ({ canvas, userEvent, canvasElement }) => {
    await waitFor(() => {
      expect(canvas.getByText("Unexpected")).toBeInTheDocument();
    });
    await expect(axios.get).toHaveBeenCalledWith(LATEST_NEWS_ENDPOINT);

    const first = canvasElement.querySelectorAll('.carousel__main .carousel__slides-context .carousel__slides-context-wrap:first-child')[0];
    const firstHeading = first.querySelectorAll('.text-group__heading')[0];
    expect(firstHeading.textContent.slice(0, -1)).toBe('Innovative Research in Marine Biology');
    expect(firstHeading).toBeVisible();

    const nextButtons = canvas.getAllByRole("button", { name: "Next" });
    await userEvent.click(nextButtons[0]);
  },
};

export const LatestNewsApi = {
  name: "Latest News (API Mocked)",
  args: {
    render_api: true,
    api: "Latest News",
    heading: "News",
    paragraph: "Latest from Colby.",
    cta: "Read Story",
    autoplay: false,
    buttons: [{ url: "https://news.colby.edu/", title: "All News" }],
  },
  beforeEach: () => {
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: createMockWpPosts(5),
    });
    return () => spy.mockRestore();
  },
  play: async ({ canvas, userEvent, canvasElement }) => {
    await waitFor(() => {
      const first = canvasElement.querySelectorAll('.carousel__main .carousel__slides-context .carousel__slides-context-wrap:first-child')[0];
      const firstHeading = first.querySelectorAll('.text-group__heading')[0];
      expect(firstHeading.textContent.slice(0, -1)).toBe('Innovative Research in Marine Biology');
      expect(firstHeading).toBeVisible();
    });
    await expect(axios.get).toHaveBeenCalledWith(LATEST_NEWS_ENDPOINT);

    await expect(canvas.getByText("News")).toBeInTheDocument();

    const ctaButtons = canvas.getAllByText("Read Story");
    await expect(ctaButtons.length).toBeGreaterThanOrEqual(1);

    const nextButtons = canvas.getAllByRole("button", { name: "Next" });
    const prevButtons = canvas.getAllByRole("button", { name: "Previous" });
    await userEvent.click(nextButtons[0]);
    await userEvent.click(prevButtons[0]);
  },
};

export const AcademicNewsApi = {
  name: "Academic News (API Mocked)",
  args: {
    render_api: true,
    api: "Academic News",
    heading: "Academic Highlights",
    paragraph: "Research and scholarship from Colby faculty and students.",
    cta: "Read Story",
    autoplay: false,
    buttons: [{ url: "https://news.colby.edu/", title: "All Academic News" }],
  },
  beforeEach: () => {
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: createMockWpPosts(5),
    });
    return () => spy.mockRestore();
  },
  play: async ({ canvas, userEvent, canvasElement }) => {
    await waitFor(() => {
      const first = canvasElement.querySelectorAll('.carousel__context')[0];
      const firstHeading = first.querySelectorAll('.text-group__heading')[0];
      expect(firstHeading.textContent.slice(0, -1)).toBe('Academic Highlights');
      expect(firstHeading).toBeVisible();
    });

    const first = canvasElement.querySelectorAll('.carousel__context')[0];
    const firstSubHeading = first.querySelectorAll('.text-group__subheading')[0];

    await expect(axios.get).toHaveBeenCalledWith(ACADEMIC_NEWS_ENDPOINT);

    expect(firstSubHeading.textContent.slice(0, -1)).toBe('Academic News');
    expect(firstSubHeading).toBeVisible();

    const firstSlide = canvasElement.querySelectorAll('.carousel__main .carousel__slides-context .carousel__slides-context-wrap:first-child')[0];
    const firstSlideHeading = firstSlide.querySelectorAll('.text-group__heading')[0];
    expect(firstSlideHeading.textContent.slice(0, -1)).toBe('Innovative Research in Marine Biology');
    expect(firstSlideHeading).toBeVisible();

    const nextButtons = canvas.getAllByRole("button", { name: "Next" });
    const prevButtons = canvas.getAllByRole("button", { name: "Previous" });
    await userEvent.click(nextButtons[0]);
    await userEvent.click(prevButtons[0]);
  },
};

export const FacultyAccomplishmentsApi = {
  name: "Faculty Accomplishments (API Mocked)",
  args: {
    render_api: true,
    api: "Faculty Accomplishments",
    heading: "Faculty News",
    paragraph: "Recent faculty accomplishments.",
    cta: "Read Story",
    autoplay: false,
    FAbuttons: [
      {
        url: "https://news.colby.edu/external/faculty-accomplishments/",
        title: "All Faculty News",
      },
    ],
  },
  beforeEach: () => {
    const mockFacultyPosts = [
      {
        title: { rendered: "Faculty Achievement in Quantum Computing" },
        content: {
          rendered:
            "<p>Professor Smith published a groundbreaking paper on quantum computing that challenges existing theoretical frameworks.</p>",
        },
        external_url: "https://example.com/faculty-1",
      },
      {
        title: { rendered: "National Teaching Award Recipient" },
        content: {
          rendered:
            "<p>Professor Jones has been recognized with a national teaching award for excellence in undergraduate education.</p>",
        },
        external_url: "https://example.com/faculty-2",
      },
      {
        title: { rendered: "Climate Research Breakthrough" },
        content: {
          rendered:
            "<p>A Colby research team has made a significant discovery in understanding local climate patterns and their global implications.</p>",
        },
        external_url: "https://example.com/faculty-3",
      },
    ];
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: mockFacultyPosts,
    });
    return () => spy.mockRestore();
  },
  play: async ({ canvas, userEvent, canvasElement }) => {
    await waitFor(() => {
      const first = canvasElement.querySelectorAll('.carousel__context')[0];
      const firstHeading = first.querySelectorAll('.text-group__heading')[0];
      expect(firstHeading.textContent.slice(0, -1)).toBe('Faculty News');
      expect(firstHeading).toBeVisible();
    });
    await expect(axios.get).toHaveBeenCalledWith(FACULTY_ENDPOINT);
    
    const first = canvasElement.querySelectorAll('.carousel__context')[0];
    const firstSubHeading = first.querySelectorAll('.text-group__subheading')[0];

    expect(firstSubHeading.textContent.slice(0, -1)).toBe('Faculty Accomplishments');
    expect(firstSubHeading).toBeVisible();

    const firstSlide = canvasElement.querySelectorAll('.carousel__main .carousel__slides-context .carousel__slides-context-wrap:first-child')[0];
    const firstSlideHeading = firstSlide.querySelectorAll('.text-group__heading')[0];
    expect(firstSlideHeading.textContent.slice(0, -1)).toBe('Faculty Achievement in Quantum Computing');
    expect(firstSlideHeading).toBeVisible();

    const nextButtons = canvas.getAllByRole("button", { name: "Next" });
    const prevButtons = canvas.getAllByRole("button", { name: "Previous" });
    await userEvent.click(nextButtons[0]);
    await userEvent.click(prevButtons[0]);
  },
};
