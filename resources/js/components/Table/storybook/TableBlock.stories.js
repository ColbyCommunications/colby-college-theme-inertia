import { expect, spyOn, waitFor } from "storybook/test";
import axios from "axios";
import Table from "../Table.vue";
import {
  createMockMajorsMinorsPrograms,
  createMockTableCourses,
} from "../../__test-utils__/mock-data";

const COURSES_ENDPOINT = "https://www.colby.edu/endpoints/v1/courses/";
const MAJORS_MINORS_ENDPOINT =
  "https://www.colby.edu/endpoints/v1/majorsminors/";

const resetStoryUrl = () => {
  window.history.pushState({}, "", "/");
};

const baseCourses = createMockTableCourses(40);
const tableCourses = [
  ...baseCourses,
  ...Array.from({ length: 12 }, (_, i) => ({
    dept: "BIOL",
    longTitle: `Biology Field Study ${i + 1}`,
    secTitle: i % 2 === 0 ? `Biology Field Study ${i + 1}` : "",
    sessOffered: i % 3 === 0 ? "FA" : i % 3 === 1 ? "SP" : "JP",
    crsno: `BI3${String(i + 1).padStart(2, "0")}`,
    abstr: `<p>Hands-on biology practicum ${i + 1}.</p>`,
    prereq: i % 2 === 0 ? "BI101" : "",
    area: i % 2 === 0 ? "S" : "",
    labsci: i % 4 === 0 ? "L" : "",
    writing: i % 5 === 0 ? "W2" : "",
    diversity: i % 3 === 0 ? "US" : "",
    minhrs: 1,
    maxhrs: i % 6 === 0 ? 2 : 1,
    sections: [
      {
        faculty: [{ faculty_name: `Faculty${i + 1}, Biology` }],
      },
    ],
  })),
];

const majorsAndMinors = createMockMajorsMinorsPrograms();

const setNativeSelectOption = async (selectElement, optionLabel) => {
  const option = Array.from(selectElement.options).find(
    ({ label, textContent, value }) =>
      label === optionLabel ||
      textContent?.trim() === optionLabel ||
      value === optionLabel,
  );

  expect(option).toBeDefined();

  selectElement.value = option.value;
  selectElement.dispatchEvent(new Event("input", { bubbles: true }));
  selectElement.dispatchEvent(new Event("change", { bubbles: true }));
};

export default {
  title: "Blocks/Table",
  component: Table,
  tags: ["!autodocs"],
};

export const Static = {
  name: "Static",
  args: {
    renderApi: true,
    api: "Department Courses",
    departmentCode: "BIOL",
    itemsPerPage: 5,
  },
  beforeEach: () => {
    resetStoryUrl();
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: { courses: tableCourses },
    });

    return () => {
      spy.mockRestore();
      resetStoryUrl();
    };
  },
  play: async ({ canvas, userEvent }) => {
    await waitFor(() => {
      expect(canvas.getByText("Department Courses")).toBeInTheDocument();
    });
    await expect(axios.get).toHaveBeenCalledWith(COURSES_ENDPOINT);
    await expect(canvas.getByText("Cell Biology")).toBeInTheDocument();

    const searchInput = canvas.getByPlaceholderText("Search");
    await userEvent.type(searchInput, "Field Study");
    await expect(canvas.getByText("Biology Field Study 1")).toBeInTheDocument();

    await userEvent.click(canvas.getByRole("button", { name: "Spring" }));
    await waitFor(() => {
      expect(window.location.search).toContain("term=Spring");
    });

    await userEvent.click(canvas.getByRole("button", { name: "All" }));

    const page2 = canvas.getByRole("button", { name: "2" });
    await userEvent.click(page2);
    await waitFor(() => {
      expect(window.location.search).toContain("pag=2");
    });
  },
};
