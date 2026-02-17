import{c as r,a as t,e as n,t as s,q as l,s as o,d as c}from"./iframe-smcTNgWJ.js";import{S as d}from"./SubpageNav-B3i6JvY9.js";import{_ as m}from"./Table-CXqrrOjJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DDlvirwQ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-C0Zqfgkc.js";import"./Modal-D-qEan5l.js";const u={class:"index-section"},p={class:"index-section__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-9 md:px-5 my-0 mx-auto"},f={class:"index-section__secondary md:col-span-3"},g={class:"index-section__main md:col-span-9"},x={class:"index-section__top mb-12"},_={class:"index-section__heading font-extended font-normal text-36 md:text-24 leading-100 -tracking-3 text-left text-indigo"},i={__name:"IndexSection",props:{heading:{type:String,default:""},nav:{type:Object,default:()=>({heading:"",items:[],parentPermalink:""})},table:{type:Object,default:()=>({})}},setup(e){return(h,v)=>(c(),r("div",u,[t("div",p,[t("div",f,[n(d,{heading:e.nav.heading,items:e.nav.items,"parent-permalink":e.nav.parentPermalink},null,8,["heading","items","parent-permalink"])]),t("div",g,[t("div",x,[t("h2",_,s(e.heading),1)]),n(m,l(o(e.table)),null,16)])])]))}};i.__docgenInfo={exportName:"default",displayName:"IndexSection",description:"",tags:{},props:[{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"nav",type:{name:"object"},defaultValue:{func:!1,value:`{
  heading: "",
  items: [],
  parentPermalink: ""
}`}},{name:"table",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/IndexSection/IndexSection.vue"]};const A={title:"Core Components/Index Section",component:i,tags:["autodocs"]},a={name:"Default",args:{heading:"Faculty & Staff Directory",nav:{heading:"Academics",parentPermalink:"#",items:[{title:"Departments & Programs",url:"#",active:!0},{title:"Faculty Directory",url:"#",active:!1},{title:"Course Catalog",url:"#",active:!1},{title:"Academic Calendar",url:"#",active:!1}]},table:{heading:"Directory",renderApi:!0,externalItems:!1}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    heading: "Faculty & Staff Directory",
    nav: {
      heading: "Academics",
      parentPermalink: "#",
      items: [{
        title: "Departments & Programs",
        url: "#",
        active: true
      }, {
        title: "Faculty Directory",
        url: "#",
        active: false
      }, {
        title: "Course Catalog",
        url: "#",
        active: false
      }, {
        title: "Academic Calendar",
        url: "#",
        active: false
      }]
    },
    table: {
      heading: "Directory",
      renderApi: true,
      externalItems: false
    }
  }
}`,...a.parameters?.docs?.source}}};const j=["Default"];export{a as Default,j as __namedExportsOrder,A as default};
