import{c as s,a as o,b as c,x as r,y as i,o as l}from"./iframe-DVLLp9lp.js";import{_ as m}from"./Table-DplzQMjg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-42ANG6Sg.js";import"./Modal-CmNNlFR4.js";const p={class:"table-section py-20 bg-indigo-100"},_={class:"table-section__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"},d={class:"md:col-start-3 md:col-span-8"},a={__name:"TableSection",props:{table:{type:Object,default:()=>({})}},setup(e){return(u,g)=>(l(),s("div",p,[o("div",_,[o("div",d,[c(m,r(i(e.table)),null,16)])])]))}};a.__docgenInfo=Object.assign({displayName:a.name??a.__name},{exportName:"default",displayName:"TableSection",description:"",tags:{},props:[{name:"table",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/TableSection/TableSection.vue"]});const{expect:n}=__STORYBOOK_MODULE_TEST__,B={title:"Core Components/Table Section",component:a,tags:["autodocs"]},t={name:"Default",args:{table:{renderApi:!1,api:"Departments",externalItems:[{post_title:"Biology",post_name:"biology"},{post_title:"Chemistry",post_name:"chemistry"},{post_title:"Computer Science",post_name:"computer-science"}]}},play:async({canvas:e})=>{await n(e.getByText("Departments and Programs")).toBeInTheDocument(),await n(e.getByText("Biology")).toBeInTheDocument()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
