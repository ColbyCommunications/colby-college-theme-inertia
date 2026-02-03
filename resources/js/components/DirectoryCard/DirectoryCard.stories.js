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

const Template = (args) => ({
  components: { DirectoryCard },
  setup() {
    return { args };
  },
  template: '<DirectoryCard v-bind="args" />',
});

// --- Story 1: Person (Full Data) ---
export const Person = Template.bind({});
Person.args = {
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
};

// --- Story 2: Office (Different Layout) ---
export const Office = Template.bind({});
Office.args = {
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
};

// --- Story 3: No Image ---
export const NoImage = Template.bind({});
NoImage.args = {
  type: "people",
  name: "John Doe",
  title: "Visiting Assistant Professor",
  department: "English",
  email: "jdoe@colby.edu",
  // No image object provided
  image: { src: "", alt: "" },
};

// --- Story 4: Hidden Fields ---
// Demonstrates the 'hide' props working
export const RestrictedView = Template.bind({});
RestrictedView.args = {
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
};
