import{c as o,a as l,F as u,b as p,d as a,h as m}from"./iframe-BI_3ezP0.js";import{_ as h}from"./AdvancedAccordionPanel-B7tyrZmt.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-BNAEMfmJ.js";const g={class:"advanced-accordion max-w-screen-2xl w-full mx-auto"},f={class:"colby-advanced-accordion-block border-b border-gray-300"},t={__name:"AdvancedAccordion",props:{panels:{type:Array,default:()=>[]},single:{type:Boolean,default:!1}},setup(s){const i=(r,c)=>{};return(r,c)=>(a(),o("div",g,[l("div",f,[(a(!0),o(u,null,p(s.panels,(n,d)=>(a(),m(h,{key:d,heading:n.heading,content:n.content,onToggle:y=>i()},null,8,["heading","content","onToggle"]))),128))])]))}};t.__docgenInfo={exportName:"default",displayName:"AdvancedAccordion",description:"",tags:{},props:[{name:"panels",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"single",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/AdvancedAccordion/AdvancedAccordion.vue"]};const w={title:"Core Components/Advanced Accordion",component:t,tags:["autodocs"]},e={name:"Default",args:{panels:[{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},{heading:"What standardized tests are required?",content:"<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"},{heading:"How do I schedule a campus visit?",content:"<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    panels: [{
      heading: "What is the application deadline?",
      content: "<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"
    }, {
      heading: "What standardized tests are required?",
      content: "<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"
    }, {
      heading: "How do I schedule a campus visit?",
      content: "<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"
    }]
  }
}`,...e.parameters?.docs?.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,w as default};
