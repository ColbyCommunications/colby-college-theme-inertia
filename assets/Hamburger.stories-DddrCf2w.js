import{r as p,a as m,b as t,q as c,n as o,o as d}from"./iframe-QAlX38Te.js";import"./preload-helper-PPVm8Dsz.js";const g={class:"flex items-center space-x-4 md:hidden"},b=["aria-expanded"],r={__name:"Hamburger",props:{menus:{type:Object,default:()=>({main:[],utility:[]})}},emits:["update:active"],setup(s,{emit:i}){const l=i,e=p(!1),u=()=>{e.value=!e.value,l("update:active",e.value)};return(v,n)=>(d(),m("div",g,[n[1]||(n[1]=t("label",{class:"font-body text-20 font-normal text-indigo-800"},"Menu",-1)),t("button",{class:"flex h-[52px] w-[56px] cursor-pointer items-center justify-center rounded-sm border border-solid border-indigo-300 bg-indigo-100 text-[0px]",onClick:u,"aria-label":"Toggle menu","aria-expanded":e.value?"true":"false","aria-controls":"header-menus"},[t("span",{class:o(["relative block h-0.5 w-6 bg-indigo transition-all duration-200 ease-in-out",{"bg-transparent":e.value}])},[t("span",{class:o(["absolute top-[-6px] left-0 h-full w-full origin-center bg-indigo transition-all duration-200 ease-in-out",{"!top-0 rotate-45":e.value}])},null,2),t("span",{class:o(["absolute top-[6px] left-0 h-full w-full origin-center bg-indigo transition-all duration-200 ease-in-out",{"!top-0 rotate-[-45deg]":e.value}])},null,2)],2),n[0]||(n[0]=c(" Menu Button ",-1))],8,b)]))}};r.__docgenInfo={exportName:"default",displayName:"Hamburger",description:"",tags:{},props:[{name:"menus",type:{name:"object"},defaultValue:{func:!1,value:`{
  main: [],
  utility: []
}`}}],events:[{name:"update:active"}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Hamburger/Hamburger.vue"]};const h={title:"Core Components/Hamburger",component:r},a=s=>({components:{Hamburger:r},setup(){return{args:s}},template:`
    <div>
        <p>Use the change viewport button above to demo this component</p>
        <Hamburger />
    </div>
  `});a.args={};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => ({
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
})`,...a.parameters?.docs?.source}}};const _=["Primary"];export{a as Primary,_ as __namedExportsOrder,h as default};
