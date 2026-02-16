import Logo from "./Logo.vue";

export default {
  title: "Core Components/Logo",
  component: Logo,
  tags: ["autodocs"],
};

export const Default = {
  name: "Default",
  args: {
    url: "/",
  },
};

export const White = {
  name: "White (Dark Background)",
  args: {
    url: "/",
    svgClass: "w-[120px] md:w-[100px] fill-white",
  },
  decorators: [
    () => ({
      template: '<div class="bg-indigo p-10"><story /></div>',
    }),
  ],
};
