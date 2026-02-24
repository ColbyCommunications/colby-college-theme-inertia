import { expect, waitFor } from "storybook/test";
import Table from "./Table.vue";

export default {
  title: "Core Components/Table",
  component: Table,
  tags: ["autodocs"],
};

export const Static = {
  name: "Static (External Items)",
  args: {
    renderApi: false,
    api: "Departments",
    externalItems: [
      { post_title: "Biology", post_name: "biology" },
      { post_title: "Chemistry", post_name: "chemistry" },
      { post_title: "Computer Science", post_name: "computer-science" },
      { post_title: "Economics", post_name: "economics" },
      { post_title: "English", post_name: "english" },
    ],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Biology")).toBeInTheDocument();
    await expect(canvas.getByText("Chemistry")).toBeInTheDocument();
    await expect(canvas.getByText("Computer Science")).toBeInTheDocument();
  },
};

export const People = {
  name: "People Directory",
  args: {
    renderApi: false,
    api: "People",
    externalItems: [
      { post_title: "Jane Smith", post_name: "jane-smith", thumbnail: "https://placehold.co/100x100", business_title: "Professor of Biology", department: "Biology" },
      { post_title: "John Doe", post_name: "john-doe", thumbnail: "https://placehold.co/100x100", business_title: "Associate Professor", department: "Chemistry" },
      { post_title: "Alice Johnson", post_name: "alice-johnson", thumbnail: "https://placehold.co/100x100", business_title: "Lecturer", department: "" },
    ],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Jane Smith")).toBeInTheDocument();
    await expect(canvas.getByText("Professor of Biology")).toBeInTheDocument();
    await expect(canvas.getByText("John Doe")).toBeInTheDocument();
  },
};

export const Offices = {
  name: "Offices Directory",
  args: {
    renderApi: false,
    api: "Offices",
    externalItems: [
      { post_title: "Office of Admissions", post_name: "admissions" },
      { post_title: "Financial Aid Office", post_name: "financial-aid" },
      { post_title: "Registrar's Office", post_name: "registrar" },
      { post_title: "Dean of Students", post_name: "dean-of-students" },
    ],
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Office of Admissions")).toBeInTheDocument();
    await expect(canvas.getByText("Financial Aid Office")).toBeInTheDocument();
  },
};

const manyItems = Array.from({ length: 25 }, (_, i) => ({
  post_title: `Department ${i + 1}`,
  post_name: `department-${i + 1}`,
}));

export const WithPagination = {
  name: "With Pagination",
  args: {
    renderApi: false,
    api: "Departments",
    itemsPerPage: 10,
    externalItems: manyItems,
  },
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByText("Department 1")).toBeInTheDocument();
    await expect(canvas.getByText("Showing 10 of 25")).toBeInTheDocument();
    // Click page 2
    const page2 = canvas.getByText("2");
    await userEvent.click(page2);
    await expect(canvas.getByText("Department 11")).toBeInTheDocument();
  },
};

export const WithSearch = {
  name: "With Search",
  args: {
    renderApi: false,
    api: "Departments",
    externalItems: [
      { post_title: "Biology", post_name: "biology" },
      { post_title: "Chemistry", post_name: "chemistry" },
      { post_title: "Computer Science", post_name: "computer-science" },
      { post_title: "Economics", post_name: "economics" },
      { post_title: "English", post_name: "english" },
    ],
  },
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByText("Departments and Programs")).toBeInTheDocument();
    const searchInput = canvas.getByPlaceholderText("Search");
    await userEvent.type(searchInput, "Bio");
  },
};

