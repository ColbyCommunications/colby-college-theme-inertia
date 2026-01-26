import Hamburger from "./Hamburger.vue";

export default {
  title: "Core Components/Hamburger",
  component: Hamburger,
};

export const Primary = (args) => ({
  components: { Hamburger },
  setup() {
    return { args };
  },
  template: `
    <div>
        <p>Use the change viewport button above to demo this component</p>
        <Hamburger />
    </div>
  `,
});

Primary.args = {};
