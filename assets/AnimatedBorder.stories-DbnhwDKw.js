import{_ as e}from"./AnimatedBorder-Cjhk7t16.js";import"./iframe-BzNJ8ej3.js";import"./preload-helper-PPVm8Dsz.js";import"./noframework.waypoints-DEzq0FwH.js";const i={title:"Core Components/Animated Border",component:e,argTypes:{color:{control:"select",options:["bg-azure","bg-indigo"]}}},r=o=>({components:{AnimatedBorder:e},setup(){return{args:o}},template:`
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
})`,...r.parameters?.docs?.source}}};const d=["Primary"];export{r as Primary,d as __namedExportsOrder,i as default};
