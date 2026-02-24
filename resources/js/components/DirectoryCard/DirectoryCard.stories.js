import { expect } from "storybook/test";
import DirectoryCard from "./DirectoryCard.vue";

// --- Mock Data ---
const mockImage = {
  src: "https://placehold.co/400x400/012169/ffffff?text=Prof.+Doe",
  srcset: "https://placehold.co/400x400/012169/ffffff?text=Prof.+Doe 1x",
  alt: "Professor John Doe",
};

export default {
  title: "Core Components/Directory Card",
  component: DirectoryCard,
  // Define controls for all the props
  argTypes: {
    // Mode
    type: {
      control: "radio",
      options: ["people", "offices"],
      description: "Switches between Person layout and Office layout",
    },

    // Content
    name: { control: "text" },
    pronouns: { control: "text" },
    title: { control: "text" },
    department: { control: "text" },
    address: { control: "text" },
    location: { control: "text" },

    // Contact Info
    phone: { control: "text" },
    email: { control: "text" },
    fax: { control: "text" },
    curriculumVitae: { control: "text" },
    officeHours: { control: "text" },

    // Visibility Flags (Grouped)
    hidePhoto: { control: "boolean" },
    hidePronouns: { control: "boolean" },
    hideDepartment: { control: "boolean" },
    hidePhoneNumber: { control: "boolean" },
    hideCv: { control: "boolean" },
    hideEmail: { control: "boolean" },
    hideFax: { control: "boolean" },
    hideLocation: { control: "boolean" },
    hideOfficeHours: { control: "boolean" },

    // Objects
    image: { control: "object" },
    post: { control: "object" },
  },
  args: {
    // Default args shared across stories
    inComponentLibrary: true,
  },
};

const render = (args) => ({
  components: { DirectoryCard },
  setup() {
    return { args };
  },
  template: '<DirectoryCard v-bind="args" />',
});

// --- Story 1: Person (Full Data) ---
export const Person = {
  args: {
    type: "people",
    name: "Dr. Jane Smith",
    pronouns: "she/her/hers",
    title: "Associate Professor of Biology",
    department: "Department of Biological Sciences",
    phone: "555-0123",
    email: "jane.smith@colby.edu",
    location: "Arey Life Sciences 204",
    officeHours: "Mon/Wed 2:00pm - 4:00pm",
    curriculumVitae: "https://example.com/cv",
    image: mockImage,
  },
  render,
  play: async ({ canvas }) => {
    // Assert name is visible
    await expect(canvas.getByText("Dr. Jane Smith")).toBeVisible();

    // Assert phone link has tel: href
    const phoneLink = canvas.getByRole("link", { name: /555-0123/ });
    await expect(phoneLink).toHaveAttribute("href", "tel:555-0123");

    // Assert email link has mailto: href
    const emailLink = canvas.getByRole("link", { name: /jane\.smith@colby\.edu/ });
    await expect(emailLink).toHaveAttribute("href", "mailto:jane.smith@colby.edu");
  },
};

// --- Story 2: Office (Different Layout) ---
export const Office = {
  args: {
    type: "offices",
    name: "Office of the Registrar",
    address: "4000 Mayflower Hill, Waterville, ME 04901",
    phone: "207-859-4000",
    email: "registrar@colby.edu",
    fax: "207-859-4002",
    location: "Eustis 102",
    image: {
      src: "https://placehold.co/400x400/666666/ffffff?text=Office",
      alt: "Registrar Office",
    },
  },
  render,
  play: async ({ canvas }) => {
    // Assert office name is visible
    await expect(canvas.getByText("Office of the Registrar")).toBeVisible();

    // Assert phone link has tel: href
    const phoneLink = canvas.getByRole("link", { name: /207-859-4000/ });
    await expect(phoneLink).toHaveAttribute("href", "tel:207-859-4000");

    // Assert email link has mailto: href
    const emailLink = canvas.getByRole("link", { name: /registrar@colby\.edu/ });
    await expect(emailLink).toHaveAttribute("href", "mailto:registrar@colby.edu");

    // Assert location is visible
    await expect(canvas.getByText("Eustis 102")).toBeVisible();
  },
};

// --- Story 3: No Image ---
export const NoImage = {
  args: {
    type: "people",
    name: "John Doe",
    title: "Visiting Assistant Professor",
    department: "English",
    email: "jdoe@colby.edu",
    // No image object provided
    image: { src: "", alt: "" },
  },
  render,
  play: async ({ canvas }) => {
    // Assert name is visible
    await expect(canvas.getByText("John Doe")).toBeVisible();

    // Assert title is visible
    await expect(canvas.getByText("Visiting Assistant Professor")).toBeVisible();

    // Assert email link has mailto: href
    const emailLink = canvas.getByRole("link", { name: /jdoe@colby\.edu/ });
    await expect(emailLink).toHaveAttribute("href", "mailto:jdoe@colby.edu");
  },
};

// --- Story 4: Hidden Fields ---
// Demonstrates the 'hide' props working
export const RestrictedView = {
  args: {
    type: "people",
    name: "Private Contact",
    title: "Adjunct Instructor",
    department: "Physics",
    email: "hidden@colby.edu",
    phone: "555-9999",
    image: mockImage,

    // Hiding specific fields via props
    hidePhoneNumber: true,
    hideEmail: true,
    hidePhoto: true,
  },
  render,
  play: async ({ canvas }) => {
    // Assert name is visible even in restricted view
    await expect(canvas.getByText("Private Contact")).toBeVisible();

    // Assert title is visible
    await expect(canvas.getByText("Adjunct Instructor")).toBeVisible();

    // Phone and email should not be visible due to hide flags
    const phoneLinks = canvas.queryAllByRole("link", { name: /555-9999/ });
    expect(phoneLinks).toHaveLength(0);

    const emailLinks = canvas.queryAllByRole("link", { name: /hidden@colby\.edu/ });
    expect(emailLinks).toHaveLength(0);
  },
};
