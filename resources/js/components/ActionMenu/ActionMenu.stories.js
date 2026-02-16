import ActionMenu from "./ActionMenu.vue";

export default {
  title: "Core Components/Action Menu",
  component: ActionMenu,
  tags: ["autodocs"],
};

export const Default = {
  name: "Default",
  args: {
    menu: [
      { title: "Apply", url: "#" },
      { title: "Visit", url: "#" },
      { title: "Give", url: "#" },
      { title: "Contact", url: "#" },
    ],
  },
  decorators: [
    () => ({
      template: '<div class="bg-indigo p-10"><story /></div>',
    }),
  ],
};
