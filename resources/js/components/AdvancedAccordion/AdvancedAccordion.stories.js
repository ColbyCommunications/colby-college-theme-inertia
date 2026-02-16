import AdvancedAccordion from "./AdvancedAccordion.vue";

export default {
  title: "Core Components/Advanced Accordion",
  component: AdvancedAccordion,
  tags: ["autodocs"],
};

export const Default = {
  name: "Default",
  args: {
    panels: [
      {
        heading: "What is the application deadline?",
        content:
          "<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>",
      },
      {
        heading: "What standardized tests are required?",
        content:
          "<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>",
      },
      {
        heading: "How do I schedule a campus visit?",
        content:
          "<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>",
      },
    ],
  },
};
