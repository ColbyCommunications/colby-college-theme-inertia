import{c as o,a as t,e as a,t as r,q as c,s as l,d as m}from"./iframe-BfBFAde5.js";import{S as d}from"./SubpageNav-BA35LU5t.js";import{_ as p}from"./Table-B9JuArba.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DDlvirwQ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-C0Zqfgkc.js";import"./Modal-DGXlUgKX.js";const u={class:"index-section"},g={class:"index-section__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-9 md:px-5 my-0 mx-auto"},_={class:"index-section__secondary md:col-span-3"},f={class:"index-section__main md:col-span-9"},y={class:"index-section__top mb-12"},x={class:"index-section__heading font-extended font-normal text-36 md:text-24 leading-100 -tracking-3 text-left text-indigo"},s={__name:"IndexSection",props:{heading:{type:String,default:""},nav:{type:Object,default:()=>({heading:"",items:[],parentPermalink:""})},table:{type:Object,default:()=>({})}},setup(e){return(h,v)=>(m(),o("div",u,[t("div",g,[t("div",_,[a(d,{heading:e.nav.heading,items:e.nav.items,"parent-permalink":e.nav.parentPermalink},null,8,["heading","items","parent-permalink"])]),t("div",f,[t("div",y,[t("h2",x,r(e.heading),1)]),a(p,c(l(e.table)),null,16)])])]))}};s.__docgenInfo={exportName:"default",displayName:"IndexSection",description:"",tags:{},props:[{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"nav",type:{name:"object"},defaultValue:{func:!1,value:`{
  heading: "",
  items: [],
  parentPermalink: ""
}`}},{name:"table",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/IndexSection/IndexSection.vue"]};const{expect:i}=__STORYBOOK_MODULE_TEST__,T={title:"Core Components/Index Section",component:s,tags:["autodocs"]},n={name:"Default",args:{heading:"Faculty & Staff Directory",nav:{heading:"Academics",parentPermalink:"#",items:[{title:"Departments & Programs",url:"#",active:!0},{title:"Faculty Directory",url:"#",active:!1},{title:"Course Catalog",url:"#",active:!1},{title:"Academic Calendar",url:"#",active:!1}]},table:{renderApi:!1,api:"Departments",externalItems:[{post_title:"Biology",post_name:"biology"},{post_title:"Chemistry",post_name:"chemistry"},{post_title:"Computer Science",post_name:"computer-science"}]}},play:async({canvas:e})=>{await i(e.getByText("Faculty & Staff Directory")).toBeInTheDocument(),await i(e.getByText("Departments & Programs")).toBeInTheDocument()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("Faculty & Staff Directory")).toBeInTheDocument();
    await expect(canvas.getByText("Departments & Programs")).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};const w=["Default"];export{n as Default,w as __namedExportsOrder,T as default};
