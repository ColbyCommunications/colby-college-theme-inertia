import{_ as n}from"./Picture-z4cn1Zm5.js";import"./iframe-C6aVhbCK.js";import"./preload-helper-PPVm8Dsz.js";const{expect:o}=__STORYBOOK_MODULE_TEST__,i={title:"Core Components/Picture",component:n},e={args:{alt:"this is an alt",class:"w-full h-auto rounded",sizeMobile:"https://placehold.co/600x400/gray/white?text=Mobile+Size",sizeDesktop:"https://placehold.co/1200x600/gray/white?text=Desktop+Size"},render:t=>({components:{Picture:n},setup(){return{args:t}},template:`
        <Picture v-bind="args" />
      `}),play:async({canvas:t})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    alt: "this is an alt",
    class: "w-full h-auto rounded",
    sizeMobile: "https://placehold.co/600x400/gray/white?text=Mobile+Size",
    sizeDesktop: "https://placehold.co/1200x600/gray/white?text=Desktop+Size"
  },
  render: args => ({
    components: {
      Picture
    },
    setup() {
      return {
        args
      };
    },
    template: \`
        <Picture v-bind="args" />
      \`
  }),
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByAltText("this is an alt")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const c=["Primary"];export{e as Primary,c as __namedExportsOrder,i as default};
