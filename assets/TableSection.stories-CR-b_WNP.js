import{c as s,a,e as c,q as r,s as i,d as l}from"./iframe-BfBFAde5.js";import{_ as m}from"./Table-B9JuArba.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C0Zqfgkc.js";import"./Modal-DGXlUgKX.js";const p={class:"table-section py-20 bg-indigo-100"},_={class:"table-section__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"},d={class:"md:col-start-3 md:col-span-8"},n={__name:"TableSection",props:{table:{type:Object,default:()=>({})}},setup(e){return(u,g)=>(l(),s("div",p,[a("div",_,[a("div",d,[c(m,r(i(e.table)),null,16)])])]))}};n.__docgenInfo={exportName:"default",displayName:"TableSection",description:"",tags:{},props:[{name:"table",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/TableSection/TableSection.vue"]};const{expect:o}=__STORYBOOK_MODULE_TEST__,B={title:"Core Components/Table Section",component:n,tags:["autodocs"]},t={name:"Default",args:{table:{renderApi:!1,api:"Departments",externalItems:[{post_title:"Biology",post_name:"biology"},{post_title:"Chemistry",post_name:"chemistry"},{post_title:"Computer Science",post_name:"computer-science"}]}},play:async({canvas:e})=>{await o(e.getByText("Departments and Programs")).toBeInTheDocument(),await o(e.getByText("Biology")).toBeInTheDocument()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    table: {
      renderApi: false,
      api: "Departments",
      externalItems: [{
        post_title: "Biology",
        post_name: "biology"
      }, {
        post_title: "Chemistry",
        post_name: "chemistry"
      }, {
        post_title: "Computer Science",
        post_name: "computer-science"
      }]
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Departments and Programs")).toBeInTheDocument();
    await expect(canvas.getByText("Biology")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};const h=["Default"];export{t as Default,h as __namedExportsOrder,B as default};
