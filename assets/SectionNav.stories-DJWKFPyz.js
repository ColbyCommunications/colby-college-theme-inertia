import{o as w,c,a as n,t as u,F as h,r as x,n as T,b as p,d as m,g as B}from"./iframe-BfrXP-2i.js";import{g as k}from"./index-DDlvirwQ.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const I={class:"section-nav__heading font-extended font-bold text-14 md:text-12 tracking-8 text-azure uppercase whitespace-nowrap"},A={class:"flex items-center space-x-7 pr-9 md:pr-0"},f=["href"],b={class:"material-icons-sharp !text-14 align-bottom mr-1"},y={__name:"SectionNav",props:{title:{type:String,default:""},items:{type:Array,default:()=>[]}},setup(e){const r=p(null),s=p(!1);return w(()=>{if(s.value=window?.colby?.DISABLE_ANIMATIONS===!0,!!r.value&&!s.value){const d=r.value.querySelectorAll("li");k.to(d,{delay:.6,duration:.4,stagger:.1,opacity:1,x:0,ease:"power3.easeIn"})}}),(d,S)=>(m(),c("div",{class:T(["section-nav full-bleed py-6 bg-gray-100 overflow-x-auto !mt-0",{"is-bot-visitor":s.value}])},[n("div",{ref_key:"container",ref:r,class:"section-nav__inner flex px-5 space-x-10 lg:justify-center"},[n("h2",I,u(e.title),1),n("ul",A,[(m(!0),c(h,null,x(e.items,(l,g)=>(m(),c("li",{key:g,class:"section-nav__item font-body font-medium text-14 md:text-10 text-indigo-800 leading-130 whitespace-nowrap"},[n("a",{class:"text-indigo-800 hover:text-indigo hover:underline transition-all duration-200 ease-in-out",href:l.link.url},[n("span",b,u(l.icon_class),1),B(" "+u(l.link.title),1)],8,f)]))),128))])],512)],2))}},D=_(y,[["__scopeId","data-v-a9d3de7b"]]);y.__docgenInfo={exportName:"default",displayName:"SectionNav",description:"",tags:{},props:[{name:"title",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/SectionNav/SectionNav.vue"]};const{expect:t}=__STORYBOOK_MODULE_TEST__,L={title:"Core Components/Section Nav",component:D,tags:["autodocs"]},o={name:"Default",args:{title:"Academics",items:[{link:{title:"Majors & Minors",url:"#"}},{link:{title:"Departments & Programs",url:"#"}},{link:{title:"Areas of Distinction",url:"#"}},{link:{title:"Course Catalog",url:"#"}},{link:{title:"Research",url:"#"}},{link:{title:"Registrar",url:"#"}},{link:{title:"Academic Calendar",url:"#"}}]},play:async({canvas:e})=>{await t(e.getByText("Academics")).toBeInTheDocument(),await t(e.getByText("Majors & Minors")).toBeInTheDocument(),await t(e.getByText("Course Catalog")).toBeInTheDocument(),await t(e.getByText("Academic Calendar")).toBeInTheDocument()},decorators:[()=>({setup(){window.colby=window.colby||{},window.colby.DISABLE_ANIMATIONS=!1},template:"<story />"})]},a={name:"With Icons",args:{title:"Resources",items:[{link:{title:"Library",url:"#"},icon_class:"book"},{link:{title:"IT Support",url:"#"},icon_class:"computer"},{link:{title:"Contact",url:"#"},icon_class:"phone"},{link:{title:"FAQ",url:"#"},icon_class:"question_mark"}]},play:async({canvas:e})=>{await t(e.getByText("Resources")).toBeInTheDocument(),await t(e.getByText("Library")).toBeInTheDocument(),await t(e.getByText("FAQ")).toBeInTheDocument()},decorators:[()=>({setup(){window.colby=window.colby||{},window.colby.DISABLE_ANIMATIONS=!1},template:"<story />"})]},i={name:"No Animation",args:{title:"Academics",items:[{link:{title:"Majors & Minors",url:"#"}},{link:{title:"Departments & Programs",url:"#"}},{link:{title:"Areas of Distinction",url:"#"}},{link:{title:"Course Catalog",url:"#"}},{link:{title:"Research",url:"#"}},{link:{title:"Registrar",url:"#"}},{link:{title:"Academic Calendar",url:"#"}}]},play:async({canvas:e})=>{await t(e.getByText("Academics")).toBeInTheDocument(),await t(e.getByText("Majors & Minors")).toBeInTheDocument(),await t(e.getByText("Course Catalog")).toBeInTheDocument(),await t(e.getByText("Academic Calendar")).toBeInTheDocument()},decorators:[()=>({setup(){window.colby=window.colby||{},window.colby.DISABLE_ANIMATIONS=!0},template:"<story />"})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
  },
  decorators: [() => ({
    setup() {
      // Set the global mock before the story renders
      window.colby = window.colby || {};
      window.colby.DISABLE_ANIMATIONS = false;
    },
    // Use the 'story' component provided by Storybook
    template: '<story />'
  })]
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
  },
  decorators: [() => ({
    setup() {
      // Set the global mock before the story renders
      window.colby = window.colby || {};
      window.colby.DISABLE_ANIMATIONS = false;
    },
    // Use the 'story' component provided by Storybook
    template: '<story />'
  })]
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "No Animation",
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
  },
  decorators: [() => ({
    setup() {
      // Set the global mock before the story renders
      window.colby = window.colby || {};
      window.colby.DISABLE_ANIMATIONS = true;
    },
    // Use the 'story' component provided by Storybook
    template: '<story />'
  })]
}`,...i.parameters?.docs?.source}}};const R=["Default","WithIcons","NoAnimation"];export{o as Default,i as NoAnimation,a as WithIcons,R as __namedExportsOrder,L as default};
