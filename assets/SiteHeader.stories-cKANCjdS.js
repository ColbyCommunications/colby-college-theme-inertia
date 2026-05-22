import{_ as r}from"./SiteHeader-CocCkaYA.js";import{_ as s}from"./ColbyLogo-C0dKL9Xq.js";import{_ as a}from"./Hamburger-DurfEOjJ.js";import{_ as i}from"./UtilityMenu-BGx5-3kY.js";import{M as o,_ as n}from"./MobileMenu-CgwXxIXi.js";import"./iframe-DIN3921Q.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-DwMDmSmO.js";import"./Search-B4Mlg8As.js";import"./Icon-BZ3D5eWD.js";import"./_commonjsHelpers-DsqdWQfm.js";import"./Button-D9tmgkZX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const{expect:L}=__STORYBOOK_MODULE_TEST__,T={title:"Core Components/Header",component:r,parameters:{layout:"fullscreen",backgrounds:{default:"light"}},argTypes:{url:{control:"text",description:"URL for the main Logo link"},menus:{control:"object",description:"Object containing 'main' and 'utility' arrays"}}},l=t=>({components:{Header:r,ColbyLogo:s,Hamburger:a,UtilityMenu:i,MainMenu:n,MobileMenu:o},setup(){return{args:t}},template:'<Header v-bind="args" />'}),c={utility:[{title:"Directory",url:"#"},{title:"News",url:"#"},{title:"Events",url:"#"},{title:"Offices",url:"#"},{title:"myColby",url:"#"}],main:[{title:"Admissions & Aid",url:"#"},{title:"Academics",url:"#"},{title:"Life at Colby",url:"#"},{title:"Athletics",url:"#"},{title:"Museum of Art",url:"#"}]},e={args:{url:"https://www.colby.edu",menus:c},render:l,play:async({canvas:t})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
