import{_ as n}from"./AnimatedBorder-D1LbWt0J.js";import"./iframe-DHFquFcq.js";import"./preload-helper-B-_ADY_8.js";import"./index-xgxdCp6f.js";import"./noframework.waypoints-DVP5Ss7z.js";const{expect:d}=__STORYBOOK_MODULE_TEST__,m={title:"Core Components/Animated Border",component:n,argTypes:{color:{control:"select",options:["bg-azure","bg-indigo"]}}},e={args:{color:"bg-azure"},render:r=>({components:{AnimatedBorder:n},setup(){return{args:r}},template:`
      <div>
      <div style="height: 25vh;"></div>
       <AnimatedBorder/>
      </div>
    `}),play:async({canvasElement:r})=>{}},c=["Primary"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};export{e as Primary,c as __namedExportsOrder,m as default};
