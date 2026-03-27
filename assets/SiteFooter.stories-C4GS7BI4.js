import{F as o}from"./SiteFooter-qT71VjbL.js";import{_ as s}from"./ColbyLogo-hNszjQK7.js";import{A as a}from"./AthleticsLogo-efVzh_j0.js";import{a as n,_ as r}from"./ActionMenu-Dw1F0Pv3.js";import{_ as l}from"./Button-vnDSfKD0.js";import"./iframe-CXCUApFV.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon-6AIxaukY.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,A={title:"Core Components/Footer",component:o,parameters:{layout:"fullscreen",backgrounds:{default:"light"}}},c=e=>({components:{Footer:o,ColbyLogo:s,AthleticsLogo:a,ActionMenu:r,Button:l,SocialMenu:n},setup(){return{args:e}},template:'<Footer v-bind="args" />'}),m={footer:[{title:"Admissions",url:"#"},{title:"Academics",url:"#"},{title:"Campus Life",url:"#"},{title:"Athletics",url:"#"},{title:"Museum of Art",url:"#"},{title:"Libraries",url:"#"},{title:"Administration",url:"#"},{title:"Alumni",url:"#"}],action:[{title:"Contact Colby",url:"#"},{title:"Support Colby",url:"#"}],social:[{title:"Facebook",url:"#",icon:"facebook"},{title:"X",url:"#",icon:"x"},{title:"Instagram",url:"#",icon:"instagram"},{title:"LinkedIn",url:"#",icon:"linkedin"}]},u={text:"4000 Mayflower Hill<br>Waterville, ME 04901"},i={args:{url:"https://www.colby.edu",phone:"207-859-4000",address:u,menus:m},render:c,play:async({canvas:e})=>{await t(e.getByText("Admissions")).toBeVisible(),await t(e.getByText("Academics")).toBeVisible(),await t(e.getByText("Campus Life")).toBeVisible(),await t(e.getByText("Alumni")).toBeVisible(),await t(e.getByText("Contact Colby")).toBeVisible(),await t(e.getByText("Support Colby")).toBeVisible(),await t(e.getByText("207-859-4000")).toBeVisible()}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const _=["Default"];export{i as Default,_ as __namedExportsOrder,A as default};
