import Icon from "./Icon.vue";

// The default export metadata for your component
export default {
  title: "Core Components/Icons",
  component: Icon,
};

export const Primary = (args) => ({
  components: { Icon },
  setup() {
    return { args };
  },
  template: `
      <div style="display: flex;">
          <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'fax'" /></div>
          <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'phone'" /></div>
          <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'instagram'" /></div>
          <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'email'" /></div>
          <div style="width: 48px; height: 48px; margin-right: 10px;"><Icon :name="'chevron'" /></div>
      </div>
    `,
});

Primary.args = { name: "fax" };
