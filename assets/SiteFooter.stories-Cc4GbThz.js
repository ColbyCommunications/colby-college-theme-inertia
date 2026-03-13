import{_ as s}from"./SiteFooter-DF1t9toQ.js";import{_ as o}from"./ColbyLogo-Cwrqpe1M.js";import{A as a}from"./AthleticsLogo-C-KF7qWv.js";import{a as r,_ as n}from"./ActionMenu-CzBeaAoB.js";import{_ as l}from"./Button-c_Wd58ef.js";import"./iframe-DMklC8cl.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon-DvqevXY7.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,_={title:"Core Components/Footer",component:s,parameters:{layout:"fullscreen",backgrounds:{default:"light"}}},c=e=>({components:{Footer:s,ColbyLogo:o,AthleticsLogo:a,ActionMenu:n,Button:l,SocialMenu:r},setup(){return{args:e}},template:'<Footer v-bind="args" />'}),m={footer:[{title:"Admissions",url:"#"},{title:"Academics",url:"#"},{title:"Campus Life",url:"#"},{title:"Athletics",url:"#"},{title:"Museum of Art",url:"#"},{title:"Libraries",url:"#"},{title:"Administration",url:"#"},{title:"Alumni",url:"#"}],action:[{title:"Contact Colby",url:"#"},{title:"Support Colby",url:"#"}],social:[{title:"Facebook",url:"#",icon:"facebook"},{title:"Twitter",url:"#",icon:"twitter"},{title:"Instagram",url:"#",icon:"instagram"}]},u={text:"4000 Mayflower Hill<br>Waterville, ME 04901"},i={args:{url:"https://www.colby.edu",phone:"207-859-4000",address:u,menus:m},render:c,play:async({canvas:e})=>{await t(e.getByText("Admissions")).toBeVisible(),await t(e.getByText("Academics")).toBeVisible(),await t(e.getByText("Campus Life")).toBeVisible(),await t(e.getByText("Alumni")).toBeVisible(),await t(e.getByText("Contact Colby")).toBeVisible(),await t(e.getByText("Support Colby")).toBeVisible(),await t(e.getByText("207-859-4000")).toBeVisible()}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const A=["Default"];export{i as Default,A as __namedExportsOrder,_ as default};
