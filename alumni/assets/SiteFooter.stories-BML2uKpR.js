import{_ as s}from"./SiteFooter-uT4Mqtxg.js";import{_ as o}from"./ColbyLogo-JzZn07Pn.js";import{A as r}from"./AthleticsLogo-BVzjOJEH.js";import{a,_ as i}from"./ActionMenu-jp4DqD4S.js";import{_ as n}from"./Button-BIkkSZrz.js";import"./iframe-DPsyH1j1.js";import"./preload-helper-DK9VPF6O.js";import"./index.esm-5CDMN8K_.js";import"./_commonjsHelpers-CE1G-McA.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon-D5RLcBmk.js";const{expect:w}=__STORYBOOK_MODULE_TEST__,v={title:"Core Components/Footer",component:s,parameters:{layout:"fullscreen",backgrounds:{default:"light"}}},l=t=>({components:{Footer:s,ColbyLogo:o,AthleticsLogo:r,ActionMenu:i,Button:n,SocialMenu:a},setup(){return{args:t}},template:'<Footer v-bind="args" />'}),c={footer:[{title:"Admissions",url:"#"},{title:"Academics",url:"#"},{title:"Campus Life",url:"#"},{title:"Athletics",url:"#"},{title:"Museum of Art",url:"#"},{title:"Libraries",url:"#"},{title:"Administration",url:"#"},{title:"Alumni",url:"#"}],action:[{title:"Contact Colby",url:"#"},{title:"Support Colby",url:"#"}],social:[{title:"Facebook",url:"#",icon:"facebook"},{title:"X",url:"#",icon:"x"},{title:"Instagram",url:"#",icon:"instagram"},{title:"LinkedIn",url:"#",icon:"linkedin"}]},m={text:"4000 Mayflower Hill<br>Waterville, ME 04901"},e={args:{url:"https://www.colby.edu",phone:"207-859-4000",address:m,menus:c},render:l,play:async({canvas:t})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const C=["Default"];export{e as Default,C as __namedExportsOrder,v as default};
