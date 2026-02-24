import{c as _,a as s,e as t,f as g,v as w,b as x,d as b}from"./iframe-BfBFAde5.js";import{_ as u}from"./ColbyLogo-CQg9vJtx.js";import{_ as d}from"./Hamburger-BF6utZ0b.js";import{_ as f}from"./UtilityMenu-CTsvfeED.js";import{_ as p,a as y}from"./MobileMenu-BBUcIQhl.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-DGXlUgKX.js";import"./Search-B50fQZ1k.js";import"./Button-u50yI3p6.js";const v={class:"flex justify-center"},A={class:"header__inner flex w-full max-w-screen-2xl flex-col items-end justify-between gap-y-10 px-5 md:flex-row"},B={class:"header__left hidden h-full md:flex md:items-center md:justify-center"},T={class:"flex flex-col"},k={class:"header__right flex flex-col items-end"},L={class:"flex w-full justify-between md:hidden"},m={__name:"SiteHeader",props:{menus:{type:Object,default:()=>({main:[],utility:[]})},url:{type:String,default:""}},setup(e){const a=x(!1),i=r=>{try{const n=new URL(r.url,window.location.origin);if(n.origin!==window.location.origin)return!1;const o=window.location.pathname.replace(/\/+$/,"")||"/",h=n.pathname.replace(/\/+$/,"")||"/";return o===h}catch{return!1}};return(r,n)=>(b(),_("header",v,[s("div",A,[s("div",B,[s("div",T,[t(u,{url:e.url,fillColor:"--color-indigo"},null,8,["url"])])]),s("div",k,[t(f,{menu:e.menus.utility},null,8,["menu"]),t(p,{menu:e.menus.main,isCurrent:i},null,8,["menu"])]),s("div",L,[t(u,{url:e.url,fillColor:"--color-indigo"},null,8,["url"]),t(d,{"onUpdate:active":n[0]||(n[0]=o=>a.value=o)})]),g(t(y,{menus:e.menus,isCurrent:i},null,8,["menus"]),[[w,a.value]])])]))}};m.__docgenInfo={exportName:"default",displayName:"SiteHeader",description:"",tags:{},props:[{name:"menus",type:{name:"object"},defaultValue:{func:!1,value:`{
  main: [],
  utility: []
}`}},{name:"url",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/SiteHeader/SiteHeader.vue"]};const{expect:c}=__STORYBOOK_MODULE_TEST__,U={title:"Core Components/Header",component:m,parameters:{layout:"fullscreen",backgrounds:{default:"light"}},argTypes:{url:{control:"text",description:"URL for the main Logo link"},menus:{control:"object",description:"Object containing 'main' and 'utility' arrays"}}},C=e=>({components:{Header:m,ColbyLogo:u,Hamburger:d,UtilityMenu:f,MainMenu:p,MobileMenu:y},setup(){return{args:e}},template:'<Header v-bind="args" />'}),M={utility:[{title:"Directory",url:"#"},{title:"News",url:"#"},{title:"Events",url:"#"},{title:"Offices",url:"#"},{title:"myColby",url:"#"}],main:[{title:"Admissions & Aid",url:"#"},{title:"Academics",url:"#"},{title:"Life at Colby",url:"#"},{title:"Athletics",url:"#"},{title:"Museum of Art",url:"#"}]},l={args:{url:"https://www.colby.edu",menus:M},render:C,play:async({canvas:e})=>{const a=e.getAllByText("Directory");await c(a.length).toBeGreaterThan(0);const i=e.getAllByText("Admissions & Aid");await c(i.length).toBeGreaterThan(0);const r=e.getAllByText("Academics");await c(r.length).toBeGreaterThan(0)}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    url: "https://www.colby.edu",
    menus: sampleMenus
  },
  render,
  play: async ({
    canvas
  }) => {
    // Menu items appear in both desktop and mobile menus, so use getAllByText
    const directoryLinks = canvas.getAllByText("Directory");
    await expect(directoryLinks.length).toBeGreaterThan(0);
    const admissionsLinks = canvas.getAllByText("Admissions & Aid");
    await expect(admissionsLinks.length).toBeGreaterThan(0);
    const academicsLinks = canvas.getAllByText("Academics");
    await expect(academicsLinks.length).toBeGreaterThan(0);
  }
}`,...l.parameters?.docs?.source}}};const V=["Default"];export{l as Default,V as __namedExportsOrder,U as default};
