import { expect } from "storybook/test";
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
  play: async ({ canvas }) => {
    await expect(canvas.getByText("Admissions")).toBeInTheDocument();
    await expect(canvas.getByText("Museum")).toBeInTheDocument();
    await expect(canvas.getByText("myColby")).toBeInTheDocument();
    await expect(
      canvas.getByText("Office of Communications"),
    ).toBeInTheDocument();
  },
};
