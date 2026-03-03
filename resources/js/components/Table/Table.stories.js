import { expect, spyOn, waitFor } from "storybook/test";
import axios from "axios";
import Table from "./Table.vue";
import {
  createMockMajorsMinorsPrograms,
  createMockTableCourses,
} from "../__test-utils__/mock-data";

const COURSES_ENDPOINT = "https://www.colby.edu/endpoints/v1/courses/";
const MAJORS_MINORS_ENDPOINT = "https://www.colby.edu/endpoints/v1/majorsminors/";

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
      label === optionLabel || textContent?.trim() === optionLabel || value === optionLabel,
  );

  expect(option).toBeDefined();

  selectElement.value = option.value;
  selectElement.dispatchEvent(new Event("input", { bubbles: true }));
  selectElement.dispatchEvent(new Event("change", { bubbles: true }));
};

export default {
  title: "Core Components/Table",
  component: Table,
  tags: ["autodocs"],
};

export const Static = {
  name: "Static (Department Courses API)",
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

export const People = {
  name: "People Directory",
  args: {
    renderApi: false,
    api: "People",
    externalItems: [
      {
        post_title: "Jane Smith",
        post_name: "jane-smith",
        thumbnail: "https://placehold.co/100x100",
        business_title: "Professor of Biology",
        department: "Biology",
      },
      {
        post_title: "John Doe",
        post_name: "john-doe",
        thumbnail: "https://placehold.co/100x100",
        business_title: "Associate Professor",
        department: "Chemistry",
      },
      {
        post_title: "Alice Johnson",
        post_name: "alice-johnson",
        thumbnail: "",
        business_title: "Lecturer",
        department: "",
      },
    ],
  },
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByText("Jane Smith")).toBeInTheDocument();
    await expect(canvas.getByText("Professor of Biology")).toBeInTheDocument();

    const searchInput = canvas.getByPlaceholderText("Search");
    await userEvent.type(searchInput, "Alice");
    await expect(canvas.getByText("Alice Johnson")).toBeInTheDocument();
    await userEvent.clear(searchInput);
    await expect(canvas.getByText("Jane Smith")).toBeInTheDocument();

    const fallbackImage = canvas.getByAltText("Alice Johnson");
    await expect(fallbackImage.getAttribute("src")).toContain(
      "profile_placeholder",
    );
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
  play: async ({ canvas, userEvent }) => {
    await expect(canvas.getByText("Office of Admissions")).toBeInTheDocument();
    await expect(canvas.getByText("Financial Aid Office")).toBeInTheDocument();

    const searchInput = canvas.getByPlaceholderText("Search");
    await userEvent.type(searchInput, "Registrar");
    await expect(canvas.getByText("Registrar's Office")).toBeInTheDocument();
  },
};

export const WithPagination = {
  name: "With Pagination (Course Catalogue API)",
  args: {
    renderApi: true,
    api: "Course Catalogue",
    itemsPerPage: 6,
  },
  beforeEach: () => {
    window.history.pushState(
      {},
      "",
      "/?department=BIOL&division=Natural%20Sciences&term=Spring&pag=2",
    );

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
      expect(canvas.getByText("Course Catalogue")).toBeInTheDocument();
    });
    await expect(axios.get).toHaveBeenCalledWith(COURSES_ENDPOINT);

    await waitFor(() => {
      expect(window.location.search).toContain("term=Spring");
    });

    const departmentSelect = canvas.getByLabelText("Select a department");
    const divisionSelect = canvas.getByLabelText("Select a division");

    await setNativeSelectOption(departmentSelect, "CHEM");
    await waitFor(() => {
      expect(window.location.search).toContain("department=CHEM");
    });

    await setNativeSelectOption(departmentSelect, "All Departments");
    await setNativeSelectOption(divisionSelect, "Humanities");
    await setNativeSelectOption(divisionSelect, "Interdisciplinary Studies");
    await setNativeSelectOption(divisionSelect, "Natural Sciences");
    await setNativeSelectOption(divisionSelect, "Social Sciences");
    await setNativeSelectOption(divisionSelect, "All Divisions");

    await userEvent.click(canvas.getByRole("button", { name: "Fall" }));
    await userEvent.click(canvas.getByRole("button", { name: "January" }));
    await userEvent.click(canvas.getByRole("button", { name: "All" }));

    const searchInput = canvas.getByPlaceholderText("Search");
    await userEvent.type(searchInput, "Marine");
    await expect(canvas.getAllByText("Marine Ecology Seminar").length).toBeGreaterThan(0);
    await userEvent.clear(searchInput);

    await userEvent.click(canvas.getAllByText("Marine Ecology Seminar")[0]);
    await waitFor(() => {
      expect(canvas.getAllByText("Prerequisite:").length).toBeGreaterThan(0);
    });

    await userEvent.click(canvas.getByRole("button", { name: "3" }));
    await waitFor(() => {
      expect(window.location.search).toContain("pag=3");
    });
  },
};

export const WithSearch = {
  name: "With Search (Majors and Minors API)",
  args: {
    renderApi: true,
    api: "Majors and Minors",
    itemsPerPage: 12,
  },
  beforeEach: () => {
    window.history.pushState(
      {},
      "",
      "/?division=Interdisciplinary%20Studies&term=Majors&pag=2",
    );

    const spy = spyOn(axios, "get").mockResolvedValue({
      data: majorsAndMinors,
    });

    return () => {
      spy.mockRestore();
      resetStoryUrl();
    };
  },
  play: async ({ canvas, userEvent }) => {
    await waitFor(() => {
      expect(canvas.getByText("Majors and Minors")).toBeInTheDocument();
    });
    await expect(axios.get).toHaveBeenCalledWith(MAJORS_MINORS_ENDPOINT);

    const divisionSelect = canvas.getByLabelText("Select a division");
    await setNativeSelectOption(divisionSelect, "Humanities");
    await setNativeSelectOption(divisionSelect, "Interdisciplinary Studies");
    await setNativeSelectOption(divisionSelect, "Natural Sciences");
    await setNativeSelectOption(divisionSelect, "Social Sciences");
    await setNativeSelectOption(divisionSelect, "All Divisions");

    await userEvent.click(canvas.getByRole("button", { name: "Minors" }));
    await userEvent.click(canvas.getByRole("button", { name: "Majors" }));
    await userEvent.click(canvas.getByRole("button", { name: "All" }));

    const searchInput = canvas.getByPlaceholderText("Search");
    await userEvent.type(searchInput, "Jewish");
    await expect(canvas.getByText("Jewish Studies")).toBeInTheDocument();

    await userEvent.clear(searchInput);
    await userEvent.type(searchInput, "Cinema");
    await expect(canvas.getByText("Cinema Studies")).toBeInTheDocument();
    await userEvent.clear(searchInput);
    await expect(canvas.getByText("African American Studies")).toBeInTheDocument();

    await userEvent.click(canvas.getByRole("button", { name: "2" }));
    await waitFor(() => {
      expect(window.location.search).toContain("pag=2");
    });

    await expect(canvas.getByText(/Showing 12 of/)).toBeInTheDocument();
  },
};
