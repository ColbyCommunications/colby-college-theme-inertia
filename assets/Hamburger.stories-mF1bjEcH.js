import{_ as o}from"./Hamburger-BF6utZ0b.js";import"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,p={title:"Core Components/Hamburger",component:o},a={args:{},render:n=>({components:{Hamburger:o},setup(){return{args:n}},template:`
      <div>
          <p>Use the change viewport button above to demo this component</p>
          <Hamburger />
      </div>
    `}),play:async({canvas:n,userEvent:r})=>{const e=n.getByLabelText("Toggle menu");await t(e).toBeInTheDocument(),await t(e).toHaveAttribute("aria-expanded","false"),await r.click(e),await t(e).toHaveAttribute("aria-expanded","true"),await r.click(e),await t(e).toHaveAttribute("aria-expanded","false")}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    const button = canvas.getByLabelText("Toggle menu");
    await expect(button).toBeInTheDocument();
    await expect(button).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(button);
    await expect(button).toHaveAttribute("aria-expanded", "true");
    await userEvent.click(button);
    await expect(button).toHaveAttribute("aria-expanded", "false");
  }
}`,...a.parameters?.docs?.source}}};const u=["Primary"];export{a as Primary,u as __namedExportsOrder,p as default};
