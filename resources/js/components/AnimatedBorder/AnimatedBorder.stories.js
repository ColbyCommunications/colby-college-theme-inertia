import AnimatedBorder from "./AnimatedBorder.vue";

export default {
  title: "Animated Border",
  component: AnimatedBorder,
  argTypes: {
    color: {
      control: "select",
      options: ["bg-azure", "bg-indigo"],
    },
  },
};

export const Primary = (args) => ({
  components: { AnimatedBorder },
  setup() {
    return { args };
  },
  template: `
    <div>
    <div style="height: 25vh;"></div>
     <AnimatedBorder 
        :class="['block col-span-12 w-0 h-px', args.color]"
      />
    </div>
  `,
});

Primary.args = {
  color: "bg-azure",
};
