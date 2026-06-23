import t from"./RelatedContent-BZNnPx97.js";import"./iframe-C5-7ho3a.js";import"./preload-helper-CNn__nYE.js";import"./ArticleGrid-sGPolNPp.js";import"./glide.esm-YJcNIzYu.js";import"./TextGroup-DxUOkk_i.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./Article-dkc4182T.js";import"./ButtonGroup-D7D1YQ38.js";import"./Button-D6s2caal.js";import"./Picture-DpgShaX_.js";import"./ArrowControls-DyMKtPak.js";import"./ArrowButton-D5qedMPJ.js";const{expect:C}=__STORYBOOK_MODULE_TEST__,f={title:"Core Components/Related Content",component:t,tags:["autodocs"]},a=[{heading:"Campus Life at Colby",subheading:"Student Life",paragraph:"Explore the vibrant campus life at Colby College.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Campus life"}},{heading:"Research Opportunities",subheading:"Academics",paragraph:"Discover research opportunities for undergraduates.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Research"}},{heading:"Athletic Programs",subheading:"Athletics",paragraph:"Join one of our many varsity and club sports teams.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Athletics"}},{heading:"Alumni Network",subheading:"Community",paragraph:"Stay connected with the Colby alumni community.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Alumni"}}],e={name:"Default",args:{heading:"Related Content",items:a},play:async({canvas:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    heading: "Related Content",
    items: sampleItems
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Related Content")).toBeInTheDocument();
    await expect(canvas.getByText("Campus Life at Colby")).toBeInTheDocument();
    await expect(canvas.getByText("Research Opportunities")).toBeInTheDocument();
    await expect(canvas.getByText("Athletic Programs")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,f as default};
