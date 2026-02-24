import{_ as n}from"./Picture-CxKtrm5G.js";import"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,i={title:"Core Components/Picture",component:n},t={args:{alt:"this is an alt",class:"w-full h-auto rounded",sizeMobile:"https://placehold.co/600x400/gray/white?text=Mobile+Size",sizeDesktop:"https://placehold.co/1200x600/gray/white?text=Desktop+Size"},render:e=>({components:{Picture:n},setup(){return{args:e}},template:`
        <Picture v-bind="args" />
      `}),play:async({canvas:e})=>{await a(e.getByAltText("this is an alt")).toBeInTheDocument()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByAltText("this is an alt")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};const c=["Primary"];export{t as Primary,c as __namedExportsOrder,i as default};
