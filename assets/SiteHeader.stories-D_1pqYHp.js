import{_ as s}from"./SiteHeader-zMcv2xdp.js";import{_ as o}from"./ColbyLogo-CJYs6vAS.js";import{_ as l}from"./Hamburger-Bw9ma5kH.js";import{_ as c}from"./UtilityMenu-DfuApQUw.js";import{a as m,_ as u}from"./MobileMenu-D2U6jL0i.js";import"./iframe-nsPjl7RS.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-D1I1fzKW.js";import"./Search-CiI9oQw8.js";import"./Button-OcSNVXGK.js";const{expect:n}=__STORYBOOK_MODULE_TEST__,b={title:"Core Components/Header",component:s,parameters:{layout:"fullscreen",backgrounds:{default:"light"}},argTypes:{url:{control:"text",description:"URL for the main Logo link"},menus:{control:"object",description:"Object containing 'main' and 'utility' arrays"}}},d=e=>({components:{Header:s,ColbyLogo:o,Hamburger:l,UtilityMenu:c,MainMenu:u,MobileMenu:m},setup(){return{args:e}},template:'<Header v-bind="args" />'}),p={utility:[{title:"Directory",url:"#"},{title:"News",url:"#"},{title:"Events",url:"#"},{title:"Offices",url:"#"},{title:"myColby",url:"#"}],main:[{title:"Admissions & Aid",url:"#"},{title:"Academics",url:"#"},{title:"Life at Colby",url:"#"},{title:"Athletics",url:"#"},{title:"Museum of Art",url:"#"}]},t={args:{url:"https://www.colby.edu",menus:p},render:d,play:async({canvas:e})=>{const a=e.getAllByText("Directory");await n(a.length).toBeGreaterThan(0);const i=e.getAllByText("Admissions & Aid");await n(i.length).toBeGreaterThan(0);const r=e.getAllByText("Academics");await n(r.length).toBeGreaterThan(0)}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,b as default};
