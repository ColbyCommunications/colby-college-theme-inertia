import t from"./RelatedContent-KpVMOop5.js";import"./iframe-DOryDeA1.js";import"./preload-helper-PPVm8Dsz.js";import"./ArticleGrid-BJl_Pkdi.js";import"./glide.esm-YJcNIzYu.js";import"./TextGroup-B-t4YA3v.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./Article-BqNpsG3z.js";import"./ButtonGroup-PK7aQfgP.js";import"./Button-Dtq2-5hO.js";import"./Picture-CC05gZ76.js";import"./ArrowControls-BuE1NJvY.js";import"./ArrowButton-CjcQHlqN.js";const{expect:y}=__STORYBOOK_MODULE_TEST__,C={title:"Core Components/Related Content",component:t,tags:["autodocs"]},a=[{heading:"Campus Life at Colby",subheading:"Student Life",paragraph:"Explore the vibrant campus life at Colby College.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Campus life"}},{heading:"Research Opportunities",subheading:"Academics",paragraph:"Discover research opportunities for undergraduates.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Research"}},{heading:"Athletic Programs",subheading:"Athletics",paragraph:"Join one of our many varsity and club sports teams.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Athletics"}},{heading:"Alumni Network",subheading:"Community",paragraph:"Stay connected with the Colby alumni community.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Alumni"}}],e={name:"Default",args:{heading:"Related Content",items:a},play:async({canvas:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const f=["Default"];export{e as Default,f as __namedExportsOrder,C as default};
