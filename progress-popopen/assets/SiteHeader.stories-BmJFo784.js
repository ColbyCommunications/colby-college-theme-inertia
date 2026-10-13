import{_ as n}from"./SiteHeader-DKznc665.js";import{_ as s}from"./ColbyLogo-DYgzEsBm.js";import{_ as r}from"./Hamburger-CeDYN-0S.js";import{_ as a}from"./UtilityMenu-BXuOwY5d.js";import{M as i,_ as o}from"./MobileMenu-ChdozTiP.js";import"./iframe-DHFquFcq.js";import"./preload-helper-B-_ADY_8.js";import"./Modal-CAjYEWA5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,A={title:"Core Components/Header",component:n,parameters:{layout:"fullscreen",backgrounds:{default:"light"}},argTypes:{url:{control:"text",description:"URL for the main Logo link"},menus:{control:"object",description:"Object containing 'main' and 'utility' arrays"}}},l=t=>({components:{Header:n,ColbyLogo:s,Hamburger:r,UtilityMenu:a,MainMenu:o,MobileMenu:i},setup(){return{args:t}},template:'<Header v-bind="args" />'}),c={utility:[{title:"Directory",url:"#"},{title:"News",url:"#"},{title:"Events",url:"#"},{title:"Offices",url:"#"},{title:"myColby",url:"#"}],main:[{title:"Admissions & Aid",url:"#"},{title:"Academics",url:"#"},{title:"Life at Colby",url:"#"},{title:"Athletics",url:"#"},{title:"Museum of Art",url:"#"}]},e={args:{url:"https://www.colby.edu",menus:c},render:l,play:async({canvas:t})=>{}},M=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};export{e as Default,M as __namedExportsOrder,A as default};
