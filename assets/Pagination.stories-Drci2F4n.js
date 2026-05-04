import{c as t,a as r,t as p,e as m,j as d,F as v,r as y,o as a,n as h}from"./iframe-DTQvshqa.js";import{_ as f}from"./Icon-wl6YJJL-.js";import"./preload-helper-PPVm8Dsz.js";const b={class:"pagination flex items-center justify-between"},_={class:"pagination__text font-body font-normal text-12 leading-140 text-indigo-800"},w={class:"inline-flex items-center h-8 px-5 py-0.5 bg-gray-100 rounded-md space-x-1"},N=["href"],U={class:"pagination__container inline-flex space-x-1"},B=["href"],S=["href"],c={__name:"Pagination",props:{text:{type:String,default:""},pages:{type:Array,default:()=>[]},prevUrl:{type:String,default:""},nextUrl:{type:String,default:""}},setup(e){return(T,D)=>(a(),t("div",b,[r("span",_,p(e.text),1),r("div",w,[e.prevUrl?(a(),t("a",{key:0,href:e.prevUrl,class:"block p-2 font-body font-normal text-14 md:text-10 leading-140 text-indigo-800 hover:text-indigo hover:underline hover:bg-[#eef4ff] transition-all duration-200 ease-in-out"},[m(f,{name:"small-arrow",class:"w-1 fill-indigo-800"})],8,N)):d("",!0),r("ul",U,[(a(!0),t(v,null,y(e.pages,(u,x)=>(a(),t("li",{key:x,class:"pagination__item"},[r("a",{class:h(["block p-2 py-1 font-body font-normal text-14 md:text-10 leading-140 text-indigo-800 hover:text-indigo hover:underline hover:bg-[#eef4ff] transition-all duration-200 ease-in-out",{"bg-[#eef4ff] text-indigo font-medium":u.active}]),href:u.url},p(u.label),11,B)]))),128))]),e.nextUrl?(a(),t("a",{key:1,href:e.nextUrl,class:"block p-2 font-body font-normal text-14 md:text-10 leading-140 text-indigo-800 hover:text-indigo hover:underline hover:bg-[#eef4ff] transition-all duration-200 ease-in-out"},[m(f,{name:"small-arrow",class:"w-1 fill-indigo-800 rotate-180"})],8,S)):d("",!0)])]))}};c.__docgenInfo=Object.assign({displayName:c.name??c.__name},{exportName:"default",displayName:"Pagination",description:"",tags:{},props:[{name:"text",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"pages",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"prevUrl",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"nextUrl",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Pagination/Pagination.vue"]});const{expect:M}=__STORYBOOK_MODULE_TEST__,k={title:"Core Components/Pagination",component:c,tags:["autodocs"]},g=[{label:"1",url:"#",active:!0},{label:"2",url:"#"},{label:"3",url:"#"},{label:"4",url:"#"},{label:"5",url:"#"},{label:"6",url:"#"},{label:"7",url:"#"},{label:"8",url:"#"}],n={name:"Default",args:{text:"Showing 24 of 2,568 results",pages:g,prevUrl:"#",nextUrl:"#"},play:async({canvas:e})=>{}},s={name:"No Previous Navigation",args:{text:"Showing 24 of 2,568 results",pages:g,prevUrl:"",nextUrl:"#"},play:async({canvas:e})=>{}},o={name:"No Next Navigation",args:{text:"Showing 24 of 2,568 results",pages:g,prevUrl:"#",nextUrl:""},play:async({canvas:e})=>{}},l={name:"No Navigation Arrows",args:{text:"Showing 10 of 10 results",pages:[{label:"1",url:"#",active:!0}],prevUrl:"",nextUrl:""},play:async({canvas:e})=>{}},i={name:"Middle Page Active",args:{text:"Showing 48 of 2,568 results",pages:[{label:"1",url:"#"},{label:"2",url:"#"},{label:"3",url:"#",active:!0},{label:"4",url:"#"},{label:"5",url:"#"}],prevUrl:"#",nextUrl:"#"},play:async({canvas:e})=>{}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Showing 24 of 2,568 results")).toBeInTheDocument();
    await expect(canvas.getByText("1")).toBeInTheDocument();
    await expect(canvas.getByText("8")).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("1")).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("1")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Showing 10 of 10 results")).toBeInTheDocument();
    await expect(canvas.getByText("1")).toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Showing 48 of 2,568 results")).toBeInTheDocument();
    await expect(canvas.getByText("3")).toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};const E=["Default","NoPrevious","NoNext","NoBothNavigation","MiddlePage"];export{n as Default,i as MiddlePage,l as NoBothNavigation,o as NoNext,s as NoPrevious,E as __namedExportsOrder,k as default};
