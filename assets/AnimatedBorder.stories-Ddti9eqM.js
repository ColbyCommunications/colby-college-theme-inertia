import{_ as r}from"./AnimatedBorder-DMxLP91H.js";import"./iframe-u12Z2ejW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";const{expect:s}=__STORYBOOK_MODULE_TEST__,m={title:"Core Components/Animated Border",component:r,argTypes:{color:{control:"select",options:["bg-azure","bg-indigo"]}}},o={args:{color:"bg-azure"},render:e=>({components:{AnimatedBorder:r},setup(){return{args:e}},template:`
      <div>
      <div style="height: 25vh;"></div>
       <AnimatedBorder/>
      </div>
    `}),play:async({canvasElement:e})=>{const t=e.querySelector("[class*='col-span-12']");await s(t).not.toBeNull()},decorators:[()=>({setup(){window.colby=window.colby||{},window.colby.DISABLE_ANIMATIONS=!1},template:"<story />"})]},n={args:{color:"bg-azure"},render:e=>({components:{AnimatedBorder:r},setup(){return{args:e}},template:`
      <div>
        <div style="height: 25vh;"></div>
        <AnimatedBorder />
      </div>
    `}),decorators:[()=>({setup(){window.colby=window.colby||{},window.colby.DISABLE_ANIMATIONS=!0},template:"<story />"})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    const border = canvasElement.querySelector("[class*='col-span-12']");
    await expect(border).not.toBeNull();
  },
  decorators: [() => ({
    setup() {
      // Set the global mock before the story renders
      window.colby = window.colby || {};
      window.colby.DISABLE_ANIMATIONS = false;
    },
    // Use the 'story' component provided by Storybook
    template: '<story />'
  })]
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        <AnimatedBorder />
      </div>
    \`
  }),
  decorators: [() => ({
    setup() {
      // Set the global mock before the story renders
      window.colby = window.colby || {};
      window.colby.DISABLE_ANIMATIONS = true;
    },
    // Use the 'story' component provided by Storybook
    template: '<story />'
  })]
}`,...n.parameters?.docs?.source}}};const p=["Primary","NoAnimation"];export{n as NoAnimation,o as Primary,p as __namedExportsOrder,m as default};
