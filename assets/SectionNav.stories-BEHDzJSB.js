import{k as _,c,a as n,t as u,F as y,j as x,n as f,r as d,o as m,f as h}from"./iframe-DQ2mjexo.js";import{g as k}from"./index-DDlvirwQ.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const B={class:"section-nav__heading font-extended font-bold text-14 md:text-12 tracking-8 text-azure uppercase whitespace-nowrap"},v={class:"flex items-center space-x-7 pr-9 md:pr-0"},I=["href"],D={class:"material-icons-sharp !text-14 align-bottom mr-1"},s={__name:"SectionNav",props:{title:{type:String,default:""},items:{type:Array,default:()=>[]}},setup(e){const i=d(null),r=d(!1);return _(()=>{if(r.value=window?.colby?.DISABLE_ANIMATIONS===!0,!!i.value&&!r.value){const p=i.value.querySelectorAll("li");k.to(p,{delay:.6,duration:.4,stagger:.1,opacity:1,x:0,ease:"power3.easeIn"})}}),(p,S)=>(m(),c("div",{class:f(["section-nav full-bleed py-6 bg-gray-100 overflow-x-auto !mt-0",{"is-bot-visitor":r.value}])},[n("div",{ref_key:"container",ref:i,class:"section-nav__inner flex px-5 space-x-10 lg:justify-center"},[n("h2",B,u(e.title),1),n("ul",v,[(m(!0),c(y,null,x(e.items,(l,g)=>(m(),c("li",{key:g,class:"section-nav__item font-body font-medium text-14 md:text-10 text-indigo-800 leading-130 whitespace-nowrap"},[n("a",{class:"text-indigo-800 hover:text-indigo hover:underline transition-all duration-200 ease-in-out",href:l.link.url},[n("span",D,u(l.icon_class),1),h(" "+u(l.link.title),1)],8,I)]))),128))])],512)],2))}},w=T(s,[["__scopeId","data-v-a9d3de7b"]]);s.__docgenInfo=Object.assign({displayName:s.name??s.__name},{exportName:"default",displayName:"SectionNav",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/SectionNav/SectionNav.vue"]});const{expect:t}=__STORYBOOK_MODULE_TEST__,M={title:"Core Components/Section Nav",component:w,tags:["autodocs"]},a={name:"Default",args:{title:"Academics",items:[{link:{title:"Majors & Minors",url:"#"}},{link:{title:"Departments & Programs",url:"#"}},{link:{title:"Areas of Distinction",url:"#"}},{link:{title:"Course Catalog",url:"#"}},{link:{title:"Research",url:"#"}},{link:{title:"Registrar",url:"#"}},{link:{title:"Academic Calendar",url:"#"}}]},play:async({canvas:e})=>{await t(e.getByText("Academics")).toBeInTheDocument(),await t(e.getByText("Majors & Minors")).toBeInTheDocument(),await t(e.getByText("Course Catalog")).toBeInTheDocument(),await t(e.getByText("Academic Calendar")).toBeInTheDocument()}},o={name:"With Icons",args:{title:"Resources",items:[{link:{title:"Library",url:"#"},icon_class:"book"},{link:{title:"IT Support",url:"#"},icon_class:"computer"},{link:{title:"Contact",url:"#"},icon_class:"phone"},{link:{title:"FAQ",url:"#"},icon_class:"question_mark"}]},play:async({canvas:e})=>{await t(e.getByText("Resources")).toBeInTheDocument(),await t(e.getByText("Library")).toBeInTheDocument(),await t(e.getByText("FAQ")).toBeInTheDocument()}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Academics")).toBeInTheDocument();
    await expect(canvas.getByText("Majors & Minors")).toBeInTheDocument();
    await expect(canvas.getByText("Course Catalog")).toBeInTheDocument();
    await expect(canvas.getByText("Academic Calendar")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "With Icons",
  args: {
    title: "Resources",
    items: [{
      link: {
        title: "Library",
        url: "#"
      },
      icon_class: "book"
    }, {
      link: {
        title: "IT Support",
        url: "#"
      },
      icon_class: "computer"
    }, {
      link: {
        title: "Contact",
        url: "#"
      },
      icon_class: "phone"
    }, {
      link: {
        title: "FAQ",
        url: "#"
      },
      icon_class: "question_mark"
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Resources")).toBeInTheDocument();
    await expect(canvas.getByText("Library")).toBeInTheDocument();
    await expect(canvas.getByText("FAQ")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};const R=["Default","WithIcons"];export{a as Default,o as WithIcons,R as __namedExportsOrder,M as default};
