import{c as s,a as t,e as i,t as o,s as r,v as c,o as l}from"./iframe-JoPPn0qi.js";import m from"./SubpageNav-D9PlLOec.js";import d from"./Table-BUgRwiBe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D4-8ALNT.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-IRg80EPj.js";const p={class:"index-section"},u={class:"index-section__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-9 md:px-5 my-0 mx-auto"},_={class:"index-section__secondary md:col-span-3"},g={class:"index-section__main md:col-span-9"},f={class:"index-section__top mb-12"},y={class:"index-section__heading font-extended font-normal text-36 md:text-24 leading-100 -tracking-3 text-left text-indigo"},n={__name:"IndexSection",props:{heading:{type:String,default:""},nav:{type:Object,default:()=>({heading:"",items:[],parentPermalink:""})},table:{type:Object,default:()=>({})}},setup(e){return(x,v)=>(l(),s("div",p,[t("div",u,[t("div",_,[i(m,{heading:e.nav.heading,items:e.nav.items,"parent-permalink":e.nav.parentPermalink},null,8,["heading","items","parent-permalink"])]),t("div",g,[t("div",f,[t("h2",y,o(e.heading),1)]),i(d,r(c(e.table)),null,16)])])]))}};n.__docgenInfo=Object.assign({displayName:n.name??n.__name},{exportName:"default",displayName:"IndexSection",description:"",tags:{},props:[{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"nav",type:{name:"object"},defaultValue:{func:!1,value:`{
  heading: "",
  items: [],
  parentPermalink: ""
}`}},{name:"table",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/IndexSection/IndexSection.vue"]});const{expect:B}=__STORYBOOK_MODULE_TEST__,P={title:"Core Components/Index Section",component:n,tags:["autodocs"]},a={name:"Default",args:{heading:"Faculty & Staff Directory",nav:{heading:"Academics",parentPermalink:"#",items:[{title:"Departments & Programs",url:"#",active:!0},{title:"Faculty Directory",url:"#",active:!1},{title:"Course Catalog",url:"#",active:!1},{title:"Academic Calendar",url:"#",active:!1}]},table:{renderApi:!1,api:"Departments",externalItems:[{post_title:"Biology",post_name:"biology"},{post_title:"Chemistry",post_name:"chemistry"},{post_title:"Computer Science",post_name:"computer-science"}]}},play:async({canvas:e})=>{}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Faculty & Staff Directory")).toBeInTheDocument();
    await expect(canvas.getByText("Departments & Programs")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};const O=["Default"];export{a as Default,O as __namedExportsOrder,P as default};
