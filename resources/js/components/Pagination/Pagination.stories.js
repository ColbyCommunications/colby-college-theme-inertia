import Pagination from "./Pagination.vue";

export default {
  title: "Core Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
};

export const Default = {
  name: "Default",
  args: {
    text: "Showing 24 of 2,568 results",
    pages: [
      { label: "1", url: "#", active: true },
      { label: "2", url: "#" },
      { label: "3", url: "#" },
      { label: "4", url: "#" },
      { label: "5", url: "#" },
      { label: "6", url: "#" },
      { label: "7", url: "#" },
      { label: "8", url: "#" },
    ],
    prevUrl: "#",
    nextUrl: "#",
  },
};
