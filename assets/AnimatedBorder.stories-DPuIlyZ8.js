import{_ as t}from"./AnimatedBorder-Bi9xxpjn.js";import"./iframe-Dk8X5kg9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D4-8ALNT.js";import"./noframework.waypoints-DVP5Ss7z.js";const{expect:d}=__STORYBOOK_MODULE_TEST__,m={title:"Core Components/Animated Border",component:t,argTypes:{color:{control:"select",options:["bg-azure","bg-indigo"]}}},e={args:{color:"bg-azure"},render:r=>({components:{AnimatedBorder:t},setup(){return{args:r}},template:`
      <div>
      <div style="height: 25vh;"></div>
       <AnimatedBorder/>
      </div>
    `}),play:async({canvasElement:r})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    color: "bg-azure"
  },
  render: args => ({
    components: {
      AnimatedBorder
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
      <div style="height: 25vh;"></div>
       <AnimatedBorder/>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const border = canvasElement.querySelector("[class*='col-span-12']");
    await expect(border).not.toBeNull();
  }
}`,...e.parameters?.docs?.source}}};const c=["Primary"];export{e as Primary,c as __namedExportsOrder,m as default};
