import{_ as n}from"./Hamburger-N2qHqcFX.js";import"./iframe-DTQvshqa.js";import"./preload-helper-PPVm8Dsz.js";const{expect:p}=__STORYBOOK_MODULE_TEST__,u={title:"Core Components/Hamburger",component:n},e={args:{},render:t=>({components:{Hamburger:n},setup(){return{args:t}},template:`
      <div>
          <p>Use the change viewport button above to demo this component</p>
          <Hamburger />
      </div>
    `}),play:async({canvas:t,userEvent:a})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => ({
    components: {
      Hamburger
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
          <p>Use the change viewport button above to demo this component</p>
          <Hamburger />
      </div>
    \`
  }),
  play: async ({
    canvas,
    userEvent
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const button = canvas.getByLabelText("Toggle menu");
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(button);
    await expect(button).toHaveAttribute("aria-expanded", "true");
    await userEvent.click(button);
    await expect(button).toHaveAttribute("aria-expanded", "false");
  }
}`,...e.parameters?.docs?.source}}};const c=["Primary"];export{e as Primary,c as __namedExportsOrder,u as default};
