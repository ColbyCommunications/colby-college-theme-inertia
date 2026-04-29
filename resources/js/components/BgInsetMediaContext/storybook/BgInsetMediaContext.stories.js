import BgInsetMediaContext from "../BgInsetMediaContext.vue";
import { expect } from "storybook/test";

// The default export metadata for your component
export default {
  title: "Core Components/BG Inset Media Context",
  component: BgInsetMediaContext,
};

const globalArgs = {
  heading: "Lorem Ipsum",
  subheading: "Veritatis sit voluptatem",
  image: {
    src: "https://placeholdit.com/600x400/dddddd/999999",
    alt: "this is an alt tag",
  },
  paragraph:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

const assertHeadingVisible = async ({ canvas, canvasElement }) => {
  if (import.meta.env.MODE !== 'test' ) return;
  const first = canvasElement.querySelectorAll(".media-context__context")[0];
  const firstHeading = first.querySelectorAll(".text-group__heading")[0];
  const firstSubHeading = first.querySelectorAll(".text-group__subheading")[0];
  await expect(firstHeading.textContent.slice(0, -1)).toBe("Lorem Ipsum");
  await expect(firstHeading).toBeVisible();

  await expect(firstSubHeading.textContent.slice(0, -1)).toBe(
    "Veritatis sit voluptatem",
  );
  await expect(firstSubHeading).toBeVisible();
};

export const Primary = {
  // 👇 Rename this story
  name: "Default",
  args: {
    ...globalArgs,
  },
  play: assertHeadingVisible,
};

export const Inset = {
  // 👇 Rename this story
  name: "Inset",
  args: {
    ...globalArgs,
    inset: true,
  },
  play: assertHeadingVisible,
};

export const Reverse = {
  // 👇 Rename this story
  name: "Reverse",
  args: {
    ...globalArgs,
    reverse: true,
  },
  play: assertHeadingVisible,
};

export const Large = {
  // 👇 Rename this story
  name: "Large",
  args: {
    ...globalArgs,
    size: "large",
  },
  play: assertHeadingVisible,
};
export const Video = {
  // 👇 Rename this story
  name: "Video",
  args: {
    ...globalArgs,
    video: {
      id: "jQixf1UCKac",
    },
  },
  play: assertHeadingVisible,
};
