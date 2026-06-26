import o from"./RelatedContent-UMLXq4h4.js";import"./iframe-wmDQsgH0.js";import"./preload-helper-CNn__nYE.js";import"./ArticleGrid-CkLRnQXn.js";import"./glide.esm-YJcNIzYu.js";import"./TextGroup-Bp4ptozu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./Article-CePk3yxy.js";import"./ButtonGroup-4rJTUgyd.js";import"./Button-fRnKrT9M.js";import"./Picture-NKN3oFvS.js";import"./ArrowControls-CJxtwQ7r.js";import"./ArrowButton-B7rHC7ib.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,B={title:"Blocks/Related Content",component:o,tags:["!autodocs"],argTypes:{heading:{name:"Heading",control:"text",table:{category:"Wordpress Fields"}},items:{name:"Items",control:"object",table:{category:"Wordpress Fields"}}}},n=[{heading:"Campus Life at Colby",subheading:"Student Life",paragraph:"Explore the vibrant campus life at Colby College.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Campus life"}},{heading:"Research Opportunities",subheading:"Academics",paragraph:"Discover research opportunities for undergraduates.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Research"}},{heading:"Athletic Programs",subheading:"Athletics",paragraph:"Join one of our many varsity and club sports teams.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Athletics"}},{heading:"Alumni Network",subheading:"Community",paragraph:"Stay connected with the Colby alumni community.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Alumni"}}],a={name:"Related Content",args:{heading:"Related Content",items:n},play:async({canvas:e})=>{await t(e.getByText("Related Content")).toBeInTheDocument(),await t(e.getByText("Campus Life at Colby")).toBeInTheDocument(),await t(e.getByText("Research Opportunities")).toBeInTheDocument(),await t(e.getByText("Athletic Programs")).toBeInTheDocument()}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Related Content",
  args: {
    heading: "Related Content",
    items: sampleItems
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Related Content")).toBeInTheDocument();
    await expect(canvas.getByText("Campus Life at Colby")).toBeInTheDocument();
    await expect(canvas.getByText("Research Opportunities")).toBeInTheDocument();
    await expect(canvas.getByText("Athletic Programs")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};const C=["Default"];export{a as Default,C as __namedExportsOrder,B as default};
