import{c as t,a,t as o,e as i,m as s,F as g,r as m,d as n,n as f}from"./iframe-smcTNgWJ.js";import{_ as u}from"./Icon-oXJCOZbF.js";import"./preload-helper-PPVm8Dsz.js";const p={class:"pagination flex items-center justify-between"},x={class:"pagination__text font-body font-normal text-12 leading-140 text-indigo-800"},b={class:"inline-flex items-center h-8 px-5 py-0.5 bg-gray-100 rounded-md space-x-1"},h=["href"],v={class:"pagination__container inline-flex space-x-1"},y=["href"],_=["href"],d={__name:"Pagination",props:{text:{type:String,default:""},pages:{type:Array,default:()=>[]},prevUrl:{type:String,default:""},nextUrl:{type:String,default:""}},setup(e){return(U,k)=>(n(),t("div",p,[a("span",x,o(e.text),1),a("div",b,[e.prevUrl?(n(),t("a",{key:0,href:e.prevUrl,class:"block p-2 font-body font-normal text-14 md:text-10 leading-140 text-indigo-800 hover:text-indigo hover:underline hover:bg-indigo-200 transition-all duration-200 ease-in-out"},[i(u,{name:"small-arrow",class:"w-1 fill-indigo-800"})],8,h)):s("",!0),a("ul",v,[(n(!0),t(g,null,m(e.pages,(r,c)=>(n(),t("li",{key:c,class:"pagination__item"},[a("a",{class:f(["block p-2 py-1 font-body font-normal text-14 md:text-10 leading-140 text-indigo-800 hover:text-indigo hover:underline hover:bg-indigo-200 transition-all duration-200 ease-in-out",{"bg-indigo-200 text-indigo font-medium":r.active}]),href:r.url},o(r.label),11,y)]))),128))]),e.nextUrl?(n(),t("a",{key:1,href:e.nextUrl,class:"block p-2 font-body font-normal text-14 md:text-10 leading-140 text-indigo-800 hover:text-indigo hover:underline hover:bg-indigo-200 transition-all duration-200 ease-in-out"},[i(u,{name:"small-arrow",class:"w-1 fill-indigo-800 rotate-180"})],8,_)):s("",!0)])]))}};d.__docgenInfo={exportName:"default",displayName:"Pagination",description:"",tags:{},props:[{name:"text",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"pages",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"prevUrl",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"nextUrl",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Pagination/Pagination.vue"]};const P={title:"Core Components/Pagination",component:d,tags:["autodocs"]},l={name:"Default",args:{text:"Showing 24 of 2,568 results",pages:[{label:"1",url:"#",active:!0},{label:"2",url:"#"},{label:"3",url:"#"},{label:"4",url:"#"},{label:"5",url:"#"},{label:"6",url:"#"},{label:"7",url:"#"},{label:"8",url:"#"}],prevUrl:"#",nextUrl:"#"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    text: "Showing 24 of 2,568 results",
    pages: [{
      label: "1",
      url: "#",
      active: true
    }, {
      label: "2",
      url: "#"
    }, {
      label: "3",
      url: "#"
    }, {
      label: "4",
      url: "#"
    }, {
      label: "5",
      url: "#"
    }, {
      label: "6",
      url: "#"
    }, {
      label: "7",
      url: "#"
    }, {
      label: "8",
      url: "#"
    }],
    prevUrl: "#",
    nextUrl: "#"
  }
}`,...l.parameters?.docs?.source}}};const D=["Default"];export{l as Default,D as __namedExportsOrder,P as default};
