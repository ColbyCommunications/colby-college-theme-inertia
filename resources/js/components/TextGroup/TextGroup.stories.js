import TextGroup from "./TextGroup.vue";

export default {
  title: "Core Components/Text Group",
  component: TextGroup,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xlarge", "large", "medium", "small", "xsmall"],
    },
    align: {
      control: "select",
      options: ["left", "center"],
    },
    type: {
      control: "select",
      options: ["dark", "light"],
    },
  },
};

export const Medium = {
  name: "Medium (Default)",
  args: {
    size: "medium",
    align: "left",
    type: "dark",
    subheading: "Academics",
    heading: "Explore Our Programs",
    paragraph: "Colby offers more than 60 majors and minors across the liberal arts and sciences.",
  },
};

export const XLarge = {
  name: "Extra Large",
  args: {
    size: "xlarge",
    align: "left",
    type: "dark",
    subheading: "Welcome",
    heading: "Colby College",
    paragraph: "A leading liberal arts college in Waterville, Maine.",
  },
};

export const Large = {
  name: "Large",
  args: {
    size: "large",
    align: "left",
    type: "dark",
    subheading: "Featured",
    heading: "Student Research",
    paragraph: "Undergraduate research is a hallmark of the Colby experience.",
  },
};

export const Small = {
  name: "Small",
  args: {
    size: "small",
    align: "left",
    type: "dark",
    subheading: "News",
    heading: "Campus Update",
    paragraph: "The latest news and events from around campus.",
  },
};

export const XSmall = {
  name: "Extra Small",
  args: {
    size: "xsmall",
    align: "left",
    type: "dark",
    subheading: "Category",
    heading: "Article Title",
    paragraph: "A brief description of the article content.",
  },
};

export const Centered = {
  name: "Centered",
  args: {
    size: "large",
    align: "center",
    type: "dark",
    subheading: "Mission",
    heading: "Our Purpose",
    paragraph: "Colby is dedicated to the education of thoughtful, capable citizens of the world.",
  },
};

export const LightType = {
  name: "Light Type",
  args: {
    size: "large",
    align: "left",
    type: "light",
    subheading: "Spotlight",
    heading: "Faculty Achievements",
    paragraph: "Celebrating the accomplishments of our distinguished faculty.",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
  decorators: [
    () => ({
      template: '<div class="bg-indigo p-10"><story /></div>',
    }),
  ],
};
