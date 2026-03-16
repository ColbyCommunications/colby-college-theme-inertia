import Context from "./Context.vue";

export default {
  title: "Blocks/Context",
  component: Context,
  tags: ["!autodocs"],
  argTypes: {
    subheading: { name: "Sub Heading", control: "text", table: { category: "Wordpress Fields" } },
    heading: { name: "Heading", control: "text", table: { category: "Wordpress Fields" } },
    paragraph: { name: "Paragraph", control: "text", table: { category: "Wordpress Fields" } },

    // disabled controls
    size: { table: { disable: true } },
    align: { table: { disable: true } },
    type: { table: { disable: true } },
    buttons: { table: { disable: true } },
    isStatic: { table: { disable: true } },
    hero: { table: { disable: true } },
    date: { table: { disable: true } },
    btnType: { table: { disable: true } },
    btnSize: { table: { disable: true } },
  },
  
};

const render = (args) => ({
  components: { Context },
  setup() {
    window.colby = window.colby || {};
    window.colby.DISABLE_ANIMATIONS = true;
    return { args };
  },
  template: `<div :class="args.type === 'light' ? 'bg-indigo p-10' : 'bg-white p-10'"><Context v-bind="args" /></div>`,
});

export const Default = {
  name: "Default",
  render,
  args: {
    size: "medium",
    align: "left",
    type: "dark",
    subheading: "Academics",
    heading: "Explore Our Programs",
    paragraph:
      "Colby offers more than 60 majors and minors across the liberal arts and sciences.",
    buttons: {
      items: [{ button: { url: "#", title: "Learn More", target: "" } }],
    },
  },
};
