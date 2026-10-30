import{_ as s}from"./SiteFooter-BRd6PoPd.js";import{_ as a}from"./ColbyLogo-D9gkcs7k.js";import{A as o}from"./AthleticsLogo-Dq8LtLYh.js";import{a as r,_ as i}from"./ActionMenu-BGmWBU9l.js";import{_ as n}from"./Button-DywH9UaL.js";import"./iframe-DiUsv2ty.js";import"./preload-helper-DK9VPF6O.js";import"./_commonjsHelpers-CE1G-McA.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon-BaAJTEed.js";const{expect:B}=__STORYBOOK_MODULE_TEST__,w={title:"Core Components/Footer",component:s,parameters:{layout:"fullscreen",backgrounds:{default:"light"}}},l=t=>({components:{Footer:s,ColbyLogo:a,AthleticsLogo:o,ActionMenu:i,Button:n,SocialMenu:r},setup(){return{args:t}},template:'<Footer v-bind="args" />'}),c={footer:[{title:"Admissions",url:"#"},{title:"Academics",url:"#"},{title:"Campus Life",url:"#"},{title:"Athletics",url:"#"},{title:"Museum of Art",url:"#"},{title:"Libraries",url:"#"},{title:"Administration",url:"#"},{title:"Alumni",url:"#"}],action:[{title:"Contact Colby",url:"#"},{title:"Support Colby",url:"#"}],social:[{title:"Facebook",url:"#",icon:"facebook"},{title:"X",url:"#",icon:"x"},{title:"Instagram",url:"#",icon:"instagram"},{title:"LinkedIn",url:"#",icon:"linkedin"}]},m={text:"4000 Mayflower Hill<br>Waterville, ME 04901"},e={args:{url:"https://www.colby.edu",phone:"207-859-4000",address:m,menus:c},render:l,play:async({canvas:t})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const v=["Default"];export{e as Default,v as __namedExportsOrder,w as default};
