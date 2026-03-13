import{c as a,a as o,t as p,e as d,q as x,F as h,r as v,d as n,n as w}from"./iframe-nsPjl7RS.js";import{_ as f}from"./Icon-gx2QKnru.js";import"./preload-helper-PPVm8Dsz.js";const B={class:"pagination flex items-center justify-between"},T={class:"pagination__text font-body font-normal text-12 leading-140 text-indigo-800"},b={class:"inline-flex items-center h-8 px-5 py-0.5 bg-gray-100 rounded-md space-x-1"},_=["href"],N={class:"pagination__container inline-flex space-x-1"},U=["href"],S=["href"],u={__name:"Pagination",props:{text:{type:String,default:""},pages:{type:Array,default:()=>[]},prevUrl:{type:String,default:""},nextUrl:{type:String,default:""}},setup(e){return(D,I)=>(n(),a("div",B,[o("span",T,p(e.text),1),o("div",b,[e.prevUrl?(n(),a("a",{key:0,href:e.prevUrl,class:"block p-2 font-body font-normal text-14 md:text-10 leading-140 text-indigo-800 hover:text-indigo hover:underline hover:bg-indigo-200 transition-all duration-200 ease-in-out"},[d(f,{name:"small-arrow",class:"w-1 fill-indigo-800"})],8,_)):x("",!0),o("ul",N,[(n(!0),a(h,null,v(e.pages,(g,y)=>(n(),a("li",{key:y,class:"pagination__item"},[o("a",{class:w(["block p-2 py-1 font-body font-normal text-14 md:text-10 leading-140 text-indigo-800 hover:text-indigo hover:underline hover:bg-indigo-200 transition-all duration-200 ease-in-out",{"bg-indigo-200 text-indigo font-medium":g.active}]),href:g.url},p(g.label),11,U)]))),128))]),e.nextUrl?(n(),a("a",{key:1,href:e.nextUrl,class:"block p-2 font-body font-normal text-14 md:text-10 leading-140 text-indigo-800 hover:text-indigo hover:underline hover:bg-indigo-200 transition-all duration-200 ease-in-out"},[d(f,{name:"small-arrow",class:"w-1 fill-indigo-800 rotate-180"})],8,S)):x("",!0)])]))}};u.__docgenInfo=Object.assign({displayName:u.name??u.__name},{exportName:"default",displayName:"Pagination",description:"",tags:{},props:[{name:"text",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"pages",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"prevUrl",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"nextUrl",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Pagination/Pagination.vue"]});const{expect:t}=__STORYBOOK_MODULE_TEST__,O={title:"Core Components/Pagination",component:u,tags:["autodocs"]},m=[{label:"1",url:"#",active:!0},{label:"2",url:"#"},{label:"3",url:"#"},{label:"4",url:"#"},{label:"5",url:"#"},{label:"6",url:"#"},{label:"7",url:"#"},{label:"8",url:"#"}],r={name:"Default",args:{text:"Showing 24 of 2,568 results",pages:m,prevUrl:"#",nextUrl:"#"},play:async({canvas:e})=>{await t(e.getByText("Showing 24 of 2,568 results")).toBeInTheDocument(),await t(e.getByText("1")).toBeInTheDocument(),await t(e.getByText("8")).toBeInTheDocument()}},s={name:"No Previous Navigation",args:{text:"Showing 24 of 2,568 results",pages:m,prevUrl:"",nextUrl:"#"},play:async({canvas:e})=>{await t(e.getByText("1")).toBeInTheDocument()}},l={name:"No Next Navigation",args:{text:"Showing 24 of 2,568 results",pages:m,prevUrl:"#",nextUrl:""},play:async({canvas:e})=>{await t(e.getByText("1")).toBeInTheDocument()}},i={name:"No Navigation Arrows",args:{text:"Showing 10 of 10 results",pages:[{label:"1",url:"#",active:!0}],prevUrl:"",nextUrl:""},play:async({canvas:e})=>{await t(e.getByText("Showing 10 of 10 results")).toBeInTheDocument(),await t(e.getByText("1")).toBeInTheDocument()}},c={name:"Middle Page Active",args:{text:"Showing 48 of 2,568 results",pages:[{label:"1",url:"#"},{label:"2",url:"#"},{label:"3",url:"#",active:!0},{label:"4",url:"#"},{label:"5",url:"#"}],prevUrl:"#",nextUrl:"#"},play:async({canvas:e})=>{await t(e.getByText("Showing 48 of 2,568 results")).toBeInTheDocument(),await t(e.getByText("3")).toBeInTheDocument()}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    text: "Showing 24 of 2,568 results",
    pages: defaultPages,
    prevUrl: "#",
    nextUrl: "#"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Showing 24 of 2,568 results")).toBeInTheDocument();
    await expect(canvas.getByText("1")).toBeInTheDocument();
    await expect(canvas.getByText("8")).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "No Previous Navigation",
  args: {
    text: "Showing 24 of 2,568 results",
    pages: defaultPages,
    prevUrl: "",
    nextUrl: "#"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("1")).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "No Next Navigation",
  args: {
    text: "Showing 24 of 2,568 results",
    pages: defaultPages,
    prevUrl: "#",
    nextUrl: ""
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("1")).toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "No Navigation Arrows",
  args: {
    text: "Showing 10 of 10 results",
    pages: [{
      label: "1",
      url: "#",
      active: true
    }],
    prevUrl: "",
    nextUrl: ""
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Showing 10 of 10 results")).toBeInTheDocument();
    await expect(canvas.getByText("1")).toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Middle Page Active",
  args: {
    text: "Showing 48 of 2,568 results",
    pages: [{
      label: "1",
      url: "#"
    }, {
      label: "2",
      url: "#"
    }, {
      label: "3",
      url: "#",
      active: true
    }, {
      label: "4",
      url: "#"
    }, {
      label: "5",
      url: "#"
    }],
    prevUrl: "#",
    nextUrl: "#"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Showing 48 of 2,568 results")).toBeInTheDocument();
    await expect(canvas.getByText("3")).toBeInTheDocument();
  }
}`,...c.parameters?.docs?.source}}};const A=["Default","NoPrevious","NoNext","NoBothNavigation","MiddlePage"];export{r as Default,c as MiddlePage,i as NoBothNavigation,l as NoNext,s as NoPrevious,A as __namedExportsOrder,O as default};
