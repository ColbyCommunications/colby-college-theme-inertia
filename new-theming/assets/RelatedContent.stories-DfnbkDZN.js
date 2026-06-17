import t from"./RelatedContent-D258kkW8.js";import"./iframe-DFyA5U2M.js";import"./preload-helper-DmLEtdH0.js";import"./ArticleGrid-CrFTY5LP.js";import"./glide.esm-YJcNIzYu.js";import"./TextGroup-D7AQzRPJ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./Article-BJCRRlbU.js";import"./ButtonGroup-D4v6exr0.js";import"./Button-BKrGXej8.js";import"./Picture-DY102DHN.js";import"./ArrowControls-vNd9ZoQz.js";import"./ArrowButton-Dy4mkkqV.js";const{expect:C}=__STORYBOOK_MODULE_TEST__,f={title:"Core Components/Related Content",component:t,tags:["autodocs"]},a=[{heading:"Campus Life at Colby",subheading:"Student Life",paragraph:"Explore the vibrant campus life at Colby College.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Campus life"}},{heading:"Research Opportunities",subheading:"Academics",paragraph:"Discover research opportunities for undergraduates.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Research"}},{heading:"Athletic Programs",subheading:"Athletics",paragraph:"Join one of our many varsity and club sports teams.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Athletics"}},{heading:"Alumni Network",subheading:"Community",paragraph:"Stay connected with the Colby alumni community.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Alumni"}}],e={name:"Default",args:{heading:"Related Content",items:a},play:async({canvas:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
