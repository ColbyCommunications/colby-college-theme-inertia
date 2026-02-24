import{o as d,c as l,a,t as u,F as g,r as y,b as _,d as o,h as x,m as h,g as f}from"./iframe-BfBFAde5.js";import{g as k}from"./index-DDlvirwQ.js";import{_ as T}from"./Icon-BG0snce_.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const v={class:"section-nav full-bleed py-6 bg-gray-100 overflow-x-auto !mt-0"},D={class:"section-nav__heading font-extended font-bold text-14 md:text-12 tracking-8 text-azure uppercase whitespace-nowrap"},I={class:"flex items-center space-x-7 pr-9 md:pr-0"},w=["href"],m={__name:"SectionNav",props:{title:{type:String,default:""},items:{type:Array,default:()=>[]}},setup(e){const r=_(null);return d(()=>{if(!r.value)return;const c=r.value.querySelectorAll("li");k.to(c,{delay:.6,duration:.4,stagger:.1,opacity:1,x:0,ease:"power3.easeIn"})}),(c,S)=>(o(),l("div",v,[a("div",{ref_key:"container",ref:r,class:"section-nav__inner flex px-5 space-x-10 lg:justify-center"},[a("h2",D,u(e.title),1),a("ul",I,[(o(!0),l(g,null,y(e.items,(n,p)=>(o(),l("li",{key:p,class:"section-nav__item font-body font-medium text-14 md:text-10 text-indigo-800 leading-130 whitespace-nowrap"},[a("a",{class:"text-indigo-800 hover:text-indigo hover:underline transition-all duration-200 ease-in-out",href:n.link.url},[n.icon_class?(o(),x(T,{key:0,name:n.icon_class,class:"inline-block text-14 align-bottom mr-1"},null,8,["name"])):h("",!0),f(" "+u(n.link.title),1)],8,w)]))),128))])],512)]))}},C=B(m,[["__scopeId","data-v-0041bec9"]]);m.__docgenInfo={exportName:"default",displayName:"SectionNav",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/SectionNav/SectionNav.vue"]};const{expect:t}=__STORYBOOK_MODULE_TEST__,F={title:"Core Components/Section Nav",component:C,tags:["autodocs"]},s={name:"Default",args:{title:"Academics",items:[{link:{title:"Majors & Minors",url:"#"}},{link:{title:"Departments & Programs",url:"#"}},{link:{title:"Areas of Distinction",url:"#"}},{link:{title:"Course Catalog",url:"#"}},{link:{title:"Research",url:"#"}},{link:{title:"Registrar",url:"#"}},{link:{title:"Academic Calendar",url:"#"}}]},play:async({canvas:e})=>{await t(e.getByText("Academics")).toBeInTheDocument(),await t(e.getByText("Majors & Minors")).toBeInTheDocument(),await t(e.getByText("Course Catalog")).toBeInTheDocument(),await t(e.getByText("Academic Calendar")).toBeInTheDocument()}},i={name:"With Icons",args:{title:"Resources",items:[{link:{title:"Library",url:"#"},icon_class:"book"},{link:{title:"IT Support",url:"#"},icon_class:"computer"},{link:{title:"Contact",url:"#"},icon_class:"phone"},{link:{title:"FAQ",url:"#"}}]},play:async({canvas:e})=>{await t(e.getByText("Resources")).toBeInTheDocument(),await t(e.getByText("Library")).toBeInTheDocument(),await t(e.getByText("FAQ")).toBeInTheDocument()}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
      }
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Resources")).toBeInTheDocument();
    await expect(canvas.getByText("Library")).toBeInTheDocument();
    await expect(canvas.getByText("FAQ")).toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};const j=["Default","WithIcons"];export{s as Default,i as WithIcons,j as __namedExportsOrder,F as default};
