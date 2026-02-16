import AdvancedAccordionPanel from "./AdvancedAccordionPanel.vue";

export default {
  title: "Core Components/Advanced Accordion Panel",
  component: AdvancedAccordionPanel,
  tags: ["autodocs"],
};

export const Default = {
  name: "Default",
  args: {
    heading: "What is the application deadline?",
    content:
      "<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>",
  },
};

export const Open = {
  name: "Open",
  args: {
    ...Default.args,
    open: true,
  },
};
