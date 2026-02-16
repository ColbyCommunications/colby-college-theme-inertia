import{r as m,o as d,c as s,a as t,t as l,F as p,b as f,d as n,h as g,m as _,g as k}from"./iframe-BI_3ezP0.js";import{g as x}from"./index-DDlvirwQ.js";import{_ as v}from"./Icon-BNAEMfmJ.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const y={class:"section-nav full-bleed py-6 bg-gray-100 overflow-x-auto !mt-0"},S={class:"section-nav__heading font-extended font-bold text-14 md:text-12 tracking-8 text-azure uppercase whitespace-nowrap"},N={class:"flex items-center space-x-7 pr-9 md:pr-0"},b=["href"],c={__name:"SectionNav",props:{title:{type:String,default:""},items:{type:Array,default:()=>[]}},setup(i){const r=m(null);return d(()=>{if(!r.value)return;const o=r.value.querySelectorAll("li");x.to(o,{delay:.6,duration:.4,stagger:.1,opacity:1,x:0,ease:"power3.easeIn"})}),(o,D)=>(n(),s("div",y,[t("div",{ref_key:"container",ref:r,class:"section-nav__inner flex px-5 space-x-10 lg:justify-center"},[t("h2",S,l(i.title),1),t("ul",N,[(n(!0),s(p,null,f(i.items,(e,u)=>(n(),s("li",{key:u,class:"section-nav__item font-body font-medium text-14 md:text-10 text-indigo-800 leading-130 whitespace-nowrap"},[t("a",{class:"text-indigo-800 hover:text-indigo hover:underline transition-all duration-200 ease-in-out",href:e.link.url},[e.icon_class?(n(),g(v,{key:0,name:e.icon_class,class:"inline-block text-14 align-bottom mr-1"},null,8,["name"])):_("",!0),k(" "+l(e.link.title),1)],8,b)]))),128))])],512)]))}},C=h(c,[["__scopeId","data-v-0041bec9"]]);c.__docgenInfo={exportName:"default",displayName:"SectionNav",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/SectionNav/SectionNav.vue"]};const B={title:"Core Components/Section Nav",component:C,tags:["autodocs"]},a={name:"Default",args:{title:"Academics",items:[{link:{title:"Majors & Minors",url:"#"}},{link:{title:"Departments & Programs",url:"#"}},{link:{title:"Areas of Distinction",url:"#"}},{link:{title:"Course Catalog",url:"#"}},{link:{title:"Research",url:"#"}},{link:{title:"Registrar",url:"#"}},{link:{title:"Academic Calendar",url:"#"}}]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    title: "Academics",
    items: [{
      link: {
        title: "Majors & Minors",
        url: "#"
      }
    }, {
      link: {
        title: "Departments & Programs",
        url: "#"
      }
    }, {
      link: {
        title: "Areas of Distinction",
        url: "#"
      }
    }, {
      link: {
        title: "Course Catalog",
        url: "#"
      }
    }, {
      link: {
        title: "Research",
        url: "#"
      }
    }, {
      link: {
        title: "Registrar",
        url: "#"
      }
    }, {
      link: {
        title: "Academic Calendar",
        url: "#"
      }
    }]
  }
}`,...a.parameters?.docs?.source}}};const R=["Default"];export{a as Default,R as __namedExportsOrder,B as default};
