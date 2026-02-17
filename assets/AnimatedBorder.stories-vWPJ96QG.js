import{_ as e}from"./AnimatedBorder-CXfGb79h.js";import"./iframe-smcTNgWJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";const d={title:"Core Components/Animated Border",component:e,argTypes:{color:{control:"select",options:["bg-azure","bg-indigo"]}}},r=o=>({components:{AnimatedBorder:e},setup(){return{args:o}},template:`
    <div>
    <div style="height: 25vh;"></div>
     <AnimatedBorder 
        :class="['block col-span-12 w-0 h-px', args.color]"
      />
    </div>
  `});r.args={color:"bg-azure"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => ({
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
})`,...r.parameters?.docs?.source}}};const m=["Primary"];export{r as Primary,m as __namedExportsOrder,d as default};
