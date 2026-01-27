import Breadcrumbs from "./Breadcrumbs.vue";

// The default export metadata for your component
export default {
  title: "Core Components/Breadcrumbs",
  component: Breadcrumbs,
};

export const Primary = {
  name: "Default",
  args: {
    items: [
      { title: "Admissions", url: "https://www.colby.edu" },
      { title: "Museum", url: "https://www.colby.edu" },
      { title: "myColby", url: "https://www.colby.edu" },
      { title: "Office of Communications", url: "https://www.colby.edu" },
    ],
  },
};
