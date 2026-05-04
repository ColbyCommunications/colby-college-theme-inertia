import{F as s}from"./SiteFooter-BH2ENK06.js";import{_ as a}from"./ColbyLogo-DZJWWuBY.js";import{A as o}from"./AthleticsLogo-CosZKpW-.js";import{a as r,_ as i}from"./ActionMenu-CL0yNZq1.js";import{_ as n}from"./Button-DCjJTd33.js";import"./iframe-JoPPn0qi.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-13TYNSVs.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const{expect:A}=__STORYBOOK_MODULE_TEST__,B={title:"Core Components/Footer",component:s,parameters:{layout:"fullscreen",backgrounds:{default:"light"}}},l=t=>({components:{Footer:s,ColbyLogo:a,AthleticsLogo:o,ActionMenu:i,Button:n,SocialMenu:r},setup(){return{args:t}},template:'<Footer v-bind="args" />'}),c={footer:[{title:"Admissions",url:"#"},{title:"Academics",url:"#"},{title:"Campus Life",url:"#"},{title:"Athletics",url:"#"},{title:"Museum of Art",url:"#"},{title:"Libraries",url:"#"},{title:"Administration",url:"#"},{title:"Alumni",url:"#"}],action:[{title:"Contact Colby",url:"#"},{title:"Support Colby",url:"#"}],social:[{title:"Facebook",url:"#",icon:"facebook"},{title:"X",url:"#",icon:"x"},{title:"Instagram",url:"#",icon:"instagram"},{title:"LinkedIn",url:"#",icon:"linkedin"}]},m={text:"4000 Mayflower Hill<br>Waterville, ME 04901"},e={args:{url:"https://www.colby.edu",phone:"207-859-4000",address:m,menus:c},render:l,play:async({canvas:t})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    url: "https://www.colby.edu",
    phone: "207-859-4000",
    address: sampleAddress,
    menus: sampleMenus
  },
  render,
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    // Assert footer menu items render
    await expect(canvas.getByText("Admissions")).toBeVisible();
    await expect(canvas.getByText("Academics")).toBeVisible();
    await expect(canvas.getByText("Campus Life")).toBeVisible();
    await expect(canvas.getByText("Alumni")).toBeVisible();

    // Assert action menu items render
    await expect(canvas.getByText("Contact Colby")).toBeVisible();
    await expect(canvas.getByText("Support Colby")).toBeVisible();

    // Assert phone number renders
    await expect(canvas.getByText("207-859-4000")).toBeVisible();
  }
}`,...e.parameters?.docs?.source}}};const w=["Default"];export{e as Default,w as __namedExportsOrder,B as default};
