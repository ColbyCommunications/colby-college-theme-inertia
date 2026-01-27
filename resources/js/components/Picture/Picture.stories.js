import Picture from "./Picture.vue"; // Adjust the import path if necessary

export default {
  title: "Core Components/Picture",
  component: Picture,
};

export const Primary = (args) => ({
  components: { Picture },
  setup() {
    return { args };
  },
  template: `
      <Picture v-bind="args" />
    `,
});

Primary.args = {
  alt: "this is an alt",
  class: "w-full h-auto rounded", // Red border to identify this mode
  sizeMobile: "https://placehold.co/600x400/gray/white?text=Mobile+Size",
  sizeDesktop: "https://placehold.co/1200x600/gray/white?text=Desktop+Size",
};
