import{r as s,e as i,f as d,a as c,o as l}from"./iframe-DyhgC3g7.js";import{g as m}from"./noframework.waypoints-DEzq0FwH.js";import"./preload-helper-PPVm8Dsz.js";const n={__name:"AnimatedBorder",setup(t){const o=s(null);let e=null;const a=()=>{o.value&&m.to(o.value,{width:"100%",duration:2.5,ease:"circ.inOut"})};return i(()=>{console.log(o),typeof window<"u"&&o.value&&(e=new window.Waypoint({element:o.value,handler:()=>{a(),e&&e.destroy&&(e.destroy(),e=null)},offset:"bottom-in-view"}))}),d(()=>{e&&e.destroy&&e.destroy()}),(p,u)=>(l(),c("div",{class:"border--animated",ref_key:"container",ref:o},null,512))}};n.__docgenInfo={exportName:"default",displayName:"AnimatedBorder",description:"",tags:{},sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/AnimatedBorder/AnimatedBorder.vue"]};const y={title:"Animated Border",component:n,argTypes:{color:{control:"select",options:["bg-azure","bg-indigo"]}}},r=t=>({components:{AnimatedBorder:n},setup(){return{args:t}},template:`
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
})`,...r.parameters?.docs?.source}}};const h=["Primary"];export{r as Primary,h as __namedExportsOrder,y as default};
