import{_ as a,a as o}from"./MobileMenu-DqEnkn7I.js";import{_ as m,a as l}from"./ActionMenu-DDpYaFG9.js";import"./iframe-smcTNgWJ.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-oXJCOZbF.js";const A={title:"Core Components/Menus",tags:["autodocs"]},u=[{id:1,title:"Academics",url:"#",target:""},{id:2,title:"Admissions",url:"#",target:""},{id:3,title:"Campus Life",url:"#",target:""},{id:4,title:"Research",url:"#",target:""},{id:5,title:"About",url:"#",target:""}],c=[{id:1,title:"Alumni",url:"#"},{id:2,title:"Parents",url:"#"},{id:3,title:"Giving",url:"#"},{id:4,title:"Athletics",url:"#"},{id:5,title:"News",url:"#"}],d=[{id:1,title:"Facebook",url:"#"},{id:2,title:"Twitter",url:"#"},{id:3,title:"Instagram",url:"#"},{id:4,title:"YouTube",url:"#"}],p=[{id:1,title:"Facebook",url:"#"},{id:2,title:"Twitter",url:"#"},{id:3,title:"Instagram",url:"#"}],e={name:"Main Menu",render:()=>({components:{MainMenu:a},setup(){return{menu:u,isCurrent:r=>r.title==="Academics"}},template:'<MainMenu :menu="menu" :isCurrent="isCurrent" />'})},n={name:"Mobile Menu",render:()=>({components:{MobileMenu:o},setup(){return{menus:{main:u,utility:c},isCurrent:r=>r.title==="Academics"}},template:'<div class="w-[375px] bg-white"><MobileMenu :menus="menus" :isCurrent="isCurrent" /></div>'}),parameters:{viewport:{defaultViewport:"mobile1"}}},t={name:"Social Menu",render:()=>({components:{SocialMenu:l},setup(){return{menu:d}},template:'<div class="bg-indigo p-4"><SocialMenu :menu="menu" /></div>'})},i={name:"Action Menu",render:()=>({components:{ActionMenu:m},setup(){return{menu:p}},template:'<div class="bg-indigo p-4"><ActionMenu :menu="menu" /></div>'})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Main Menu",
  render: () => ({
    components: {
      MainMenu
    },
    setup() {
      const isCurrent = item => item.title === "Academics";
      return {
        menu: mainMenuItems,
        isCurrent
      };
    },
    template: '<MainMenu :menu="menu" :isCurrent="isCurrent" />'
  })
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Mobile Menu",
  render: () => ({
    components: {
      MobileMenu
    },
    setup() {
      const isCurrent = item => item.title === "Academics";
      return {
        menus: {
          main: mainMenuItems,
          utility: utilityMenuItems
        },
        isCurrent
      };
    },
    template: '<div class="w-[375px] bg-white"><MobileMenu :menus="menus" :isCurrent="isCurrent" /></div>'
  }),
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Social Menu",
  render: () => ({
    components: {
      SocialMenu
    },
    setup() {
      return {
        menu: socialMenuItems
      };
    },
    template: '<div class="bg-indigo p-4"><SocialMenu :menu="menu" /></div>'
  })
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Action Menu",
  render: () => ({
    components: {
      ActionMenu
    },
    setup() {
      return {
        menu: actionMenuItems
      };
    },
    template: '<div class="bg-indigo p-4"><ActionMenu :menu="menu" /></div>'
  })
}`,...i.parameters?.docs?.source}}};const v=["MainMenuDefault","MobileMenuDefault","SocialMenuDefault","ActionMenuDefault"];export{i as ActionMenuDefault,e as MainMenuDefault,n as MobileMenuDefault,t as SocialMenuDefault,v as __namedExportsOrder,A as default};
