import { expect } from "storybook/test";
import Pagination from "./Pagination.vue";

export default {
  title: "Core Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
};

const defaultPages = [
  { label: "1", url: "#", active: true },
  { label: "2", url: "#" },
  { label: "3", url: "#" },
  { label: "4", url: "#" },
  { label: "5", url: "#" },
  { label: "6", url: "#" },
  { label: "7", url: "#" },
  { label: "8", url: "#" },
];

export const Default = {
  name: "Default",
  args: {
    text: "Showing 24 of 2,568 results",
    pages: defaultPages,
    prevUrl: "#",
    nextUrl: "#",
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText("Showing 24 of 2,568 results"),
    ).toBeInTheDocument();
    await expect(canvas.getByText("1")).toBeInTheDocument();
    await expect(canvas.getByText("8")).toBeInTheDocument();
  },
};

export const NoPrevious = {
  name: "No Previous Navigation",
  args: {
    text: "Showing 24 of 2,568 results",
    pages: defaultPages,
    prevUrl: "",
    nextUrl: "#",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("1")).toBeInTheDocument();
  },
};

export const NoNext = {
  name: "No Next Navigation",
  args: {
    text: "Showing 24 of 2,568 results",
    pages: defaultPages,
    prevUrl: "#",
    nextUrl: "",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("1")).toBeInTheDocument();
  },
};

export const NoBothNavigation = {
  name: "No Navigation Arrows",
  args: {
    text: "Showing 10 of 10 results",
    pages: [{ label: "1", url: "#", active: true }],
    prevUrl: "",
    nextUrl: "",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Showing 10 of 10 results")).toBeInTheDocument();
    await expect(canvas.getByText("1")).toBeInTheDocument();
  },
};

export const MiddlePage = {
  name: "Middle Page Active",
  args: {
    text: "Showing 48 of 2,568 results",
    pages: [
      { label: "1", url: "#" },
      { label: "2", url: "#" },
      { label: "3", url: "#", active: true },
      { label: "4", url: "#" },
      { label: "5", url: "#" },
    ],
    prevUrl: "#",
    nextUrl: "#",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Showing 48 of 2,568 results")).toBeInTheDocument();
    await expect(canvas.getByText("3")).toBeInTheDocument();
  },
};
