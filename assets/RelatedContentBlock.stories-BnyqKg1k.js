import o from"./RelatedContent-BVAiYz7P.js";import"./iframe-C_TCIMzD.js";import"./preload-helper-PPVm8Dsz.js";import"./ArticleGrid-ltw14MGP.js";import"./glide.esm-YJcNIzYu.js";import"./TextGroup-DC2naARp.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./Article-D8JqdcP3.js";import"./ButtonGroup-DILhTYQr.js";import"./Button-C3er0bmR.js";import"./Picture-Bf60KfaG.js";import"./ArrowControls-Cv672Jaq.js";import"./ArrowButton-C_wNYncJ.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,T={title:"Blocks/Related Content",component:o,tags:["!autodocs"],argTypes:{heading:{name:"Heading",control:"text",table:{category:"Wordpress Fields"}},items:{name:"Items",control:"object",table:{category:"Wordpress Fields"}}}},n=[{heading:"Campus Life at Colby",subheading:"Student Life",paragraph:"Explore the vibrant campus life at Colby College.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Campus life"}},{heading:"Research Opportunities",subheading:"Academics",paragraph:"Discover research opportunities for undergraduates.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Research"}},{heading:"Athletic Programs",subheading:"Athletics",paragraph:"Join one of our many varsity and club sports teams.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Athletics"}},{heading:"Alumni Network",subheading:"Community",paragraph:"Stay connected with the Colby alumni community.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Alumni"}}],a={name:"Related Content",args:{heading:"Related Content",items:n},play:async({canvas:e})=>{await t(e.getByText("Related Content")).toBeInTheDocument(),await t(e.getByText("Campus Life at Colby")).toBeInTheDocument(),await t(e.getByText("Research Opportunities")).toBeInTheDocument(),await t(e.getByText("Athletic Programs")).toBeInTheDocument()}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const B=["Default"];export{a as Default,B as __namedExportsOrder,T as default};
