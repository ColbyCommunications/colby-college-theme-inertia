import{_ as s}from"./SiteFooter-jgEaoPm3.js";import{_ as o}from"./ColbyLogo-C5qM0uzC.js";import{A as r}from"./AthleticsLogo-D3u39qX6.js";import{a,_ as i}from"./ActionMenu-CZaCgJlo.js";import{_ as n}from"./Button-8eEz6DBZ.js";import"./iframe-Br66vmlA.js";import"./preload-helper-Nb-6AGzV.js";import"./index.esm-HfJNXr62.js";import"./_commonjsHelpers-CE1G-McA.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon-A5v5IAQR.js";const{expect:w}=__STORYBOOK_MODULE_TEST__,v={title:"Core Components/Footer",component:s,parameters:{layout:"fullscreen",backgrounds:{default:"light"}}},l=t=>({components:{Footer:s,ColbyLogo:o,AthleticsLogo:r,ActionMenu:i,Button:n,SocialMenu:a},setup(){return{args:t}},template:'<Footer v-bind="args" />'}),c={footer:[{title:"Admissions",url:"#"},{title:"Academics",url:"#"},{title:"Campus Life",url:"#"},{title:"Athletics",url:"#"},{title:"Museum of Art",url:"#"},{title:"Libraries",url:"#"},{title:"Administration",url:"#"},{title:"Alumni",url:"#"}],action:[{title:"Contact Colby",url:"#"},{title:"Support Colby",url:"#"}],social:[{title:"Facebook",url:"#",icon:"facebook"},{title:"X",url:"#",icon:"x"},{title:"Instagram",url:"#",icon:"instagram"},{title:"LinkedIn",url:"#",icon:"linkedin"}]},m={text:"4000 Mayflower Hill<br>Waterville, ME 04901"},e={args:{url:"https://www.colby.edu",phone:"207-859-4000",address:m,menus:c},render:l,play:async({canvas:t})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
