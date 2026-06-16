import t from"./RelatedContent-CGg2FkhP.js";import"./iframe-3sEi0eTh.js";import"./preload-helper-PPVm8Dsz.js";import"./ArticleGrid-7ky5spO0.js";import"./glide.esm-YJcNIzYu.js";import"./TextGroup-Bz1jVrJj.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./Article-L7FbEj-p.js";import"./ButtonGroup-DyPH3ZN2.js";import"./Button-DwMN5f-Z.js";import"./Picture-CgVeth7Z.js";import"./ArrowControls-CUL65jg4.js";import"./ArrowButton-BnhWIklL.js";const{expect:C}=__STORYBOOK_MODULE_TEST__,f={title:"Core Components/Related Content",component:t,tags:["autodocs"]},a=[{heading:"Campus Life at Colby",subheading:"Student Life",paragraph:"Explore the vibrant campus life at Colby College.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Campus life"}},{heading:"Research Opportunities",subheading:"Academics",paragraph:"Discover research opportunities for undergraduates.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Research"}},{heading:"Athletic Programs",subheading:"Athletics",paragraph:"Join one of our many varsity and club sports teams.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Athletics"}},{heading:"Alumni Network",subheading:"Community",paragraph:"Stay connected with the Colby alumni community.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Alumni"}}],e={name:"Default",args:{heading:"Related Content",items:a},play:async({canvas:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
