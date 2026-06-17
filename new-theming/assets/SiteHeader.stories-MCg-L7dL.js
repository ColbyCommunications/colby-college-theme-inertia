import{_ as r}from"./SiteHeader-_fiBSG9p.js";import{_ as s}from"./ColbyLogo-y8hG0NwE.js";import{_ as a}from"./Hamburger-CRZsToqX.js";import{_ as i}from"./UtilityMenu-CEgvvses.js";import{M as o,_ as n}from"./MobileMenu-OQ8_lRAh.js";import"./iframe-tADWw1PH.js";import"./preload-helper-DmLEtdH0.js";import"./Modal-B8J8y4CN.js";import"./Search-Bquav4nN.js";import"./Icon-DImI-br7.js";import"./_commonjsHelpers-CE1G-McA.js";import"./Button-B0wLtkL_.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const{expect:L}=__STORYBOOK_MODULE_TEST__,T={title:"Core Components/Header",component:r,parameters:{layout:"fullscreen",backgrounds:{default:"light"}},argTypes:{url:{control:"text",description:"URL for the main Logo link"},menus:{control:"object",description:"Object containing 'main' and 'utility' arrays"}}},l=t=>({components:{Header:r,ColbyLogo:s,Hamburger:a,UtilityMenu:i,MainMenu:n,MobileMenu:o},setup(){return{args:t}},template:'<Header v-bind="args" />'}),c={utility:[{title:"Directory",url:"#"},{title:"News",url:"#"},{title:"Events",url:"#"},{title:"Offices",url:"#"},{title:"myColby",url:"#"}],main:[{title:"Admissions & Aid",url:"#"},{title:"Academics",url:"#"},{title:"Life at Colby",url:"#"},{title:"Athletics",url:"#"},{title:"Museum of Art",url:"#"}]},e={args:{url:"https://www.colby.edu",menus:c},render:l,play:async({canvas:t})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const w=["Default"];export{e as Default,w as __namedExportsOrder,T as default};
