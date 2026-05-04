import{_ as s}from"./SiteHeader-BsM4mKby.js";import{_ as r}from"./ColbyLogo-DZJWWuBY.js";import{_ as a}from"./Hamburger-CkTQwjA7.js";import{_ as i}from"./UtilityMenu-DUENWa-R.js";import{M as n,_ as o}from"./MobileMenu-B8n61buQ.js";import"./iframe-JoPPn0qi.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-IRg80EPj.js";import"./search-DNG0lUkU.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const{expect:A}=__STORYBOOK_MODULE_TEST__,M={title:"Core Components/Header",component:s,parameters:{layout:"fullscreen",backgrounds:{default:"light"}},argTypes:{url:{control:"text",description:"URL for the main Logo link"},menus:{control:"object",description:"Object containing 'main' and 'utility' arrays"}}},l=t=>({components:{Header:s,ColbyLogo:r,Hamburger:a,UtilityMenu:i,MainMenu:o,MobileMenu:n},setup(){return{args:t}},template:'<Header v-bind="args" />'}),c={utility:[{title:"Directory",url:"#"},{title:"News",url:"#"},{title:"Events",url:"#"},{title:"Offices",url:"#"},{title:"myColby",url:"#"}],main:[{title:"Admissions & Aid",url:"#"},{title:"Academics",url:"#"},{title:"Life at Colby",url:"#"},{title:"Athletics",url:"#"},{title:"Museum of Art",url:"#"}]},e={args:{url:"https://www.colby.edu",menus:c},render:l,play:async({canvas:t})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    url: "https://www.colby.edu",
    menus: sampleMenus
  },
  render,
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    // Menu items appear in both desktop and mobile menus, so use getAllByText
    const directoryLinks = canvas.getAllByText("Directory");
    await expect(directoryLinks.length).toBeGreaterThan(0);
    const admissionsLinks = canvas.getAllByText("Admissions & Aid");
    await expect(admissionsLinks.length).toBeGreaterThan(0);
    const academicsLinks = canvas.getAllByText("Academics");
    await expect(academicsLinks.length).toBeGreaterThan(0);
  }
}`,...e.parameters?.docs?.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,M as default};
