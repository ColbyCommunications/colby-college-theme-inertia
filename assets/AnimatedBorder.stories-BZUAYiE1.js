import{_ as n}from"./AnimatedBorder-CQpfkfOi.js";import"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,d={title:"Core Components/Animated Border",component:n,argTypes:{color:{control:"select",options:["bg-azure","bg-indigo"]}}},e={args:{color:"bg-azure"},render:r=>({components:{AnimatedBorder:n},setup(){return{args:r}},template:`
      <div>
      <div style="height: 25vh;"></div>
       <AnimatedBorder
          :class="['block col-span-12 w-0 h-px', args.color]"
        />
      </div>
    `}),play:async({canvasElement:r})=>{const o=r.querySelector("[class*='col-span-12']");await t(o).not.toBeNull()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
       <AnimatedBorder
          :class="['block col-span-12 w-0 h-px', args.color]"
        />
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const border = canvasElement.querySelector("[class*='col-span-12']");
    await expect(border).not.toBeNull();
  }
}`,...e.parameters?.docs?.source}}};const p=["Primary"];export{e as Primary,p as __namedExportsOrder,d as default};
