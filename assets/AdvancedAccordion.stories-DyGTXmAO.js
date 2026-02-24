import{c,a as u,F as p,r as h,d as o,h as m}from"./iframe-BfBFAde5.js";import{_ as g}from"./AdvancedAccordionPanel-Ca7uBYRq.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-BG0snce_.js";const y={class:"advanced-accordion max-w-screen-2xl w-full mx-auto"},v={class:"colby-advanced-accordion-block border-b border-gray-300"},r={__name:"AdvancedAccordion",props:{panels:{type:Array,default:()=>[]},single:{type:Boolean,default:!1}},setup(e){const a=(n,d)=>{};return(n,d)=>(o(),c("div",y,[u("div",v,[(o(!0),c(p,null,h(e.panels,(i,l)=>(o(),m(g,{key:l,heading:i.heading,content:i.content,onToggle:f=>a()},null,8,["heading","content","onToggle"]))),128))])]))}};r.__docgenInfo={exportName:"default",displayName:"AdvancedAccordion",description:"",tags:{},props:[{name:"panels",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"single",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/AdvancedAccordion/AdvancedAccordion.vue"]};const{expect:s}=__STORYBOOK_MODULE_TEST__,w={title:"Core Components/Advanced Accordion",component:r,tags:["autodocs"]},t={name:"Default",args:{panels:[{heading:"What is the application deadline?",content:"<p>The regular decision deadline is January 1. Early Decision I is November 15 and Early Decision II is January 1.</p>"},{heading:"What standardized tests are required?",content:"<p>Colby is test-optional. Students may choose whether or not to submit standardized test scores.</p>"},{heading:"How do I schedule a campus visit?",content:"<p>You can schedule a campus visit through the admissions website. We offer both in-person and virtual visit options.</p>"}]},play:async({canvas:e,userEvent:a})=>{await s(e.getByText("What is the application deadline?")).toBeInTheDocument(),await s(e.getByText("What standardized tests are required?")).toBeInTheDocument(),await s(e.getByText("How do I schedule a campus visit?")).toBeInTheDocument();const n=e.getAllByRole("button");await a.click(n[0])}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await expect(canvas.getByText("What is the application deadline?")).toBeInTheDocument();
    await expect(canvas.getByText("What standardized tests are required?")).toBeInTheDocument();
    await expect(canvas.getByText("How do I schedule a campus visit?")).toBeInTheDocument();

    // Click first panel to trigger onPanelToggle
    const buttons = canvas.getAllByRole("button");
    await userEvent.click(buttons[0]);
  }
}`,...t.parameters?.docs?.source}}};const x=["Default"];export{t as Default,x as __namedExportsOrder,w as default};
