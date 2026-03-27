import o from"./RelatedContent-QqKEc23q.js";import"./iframe-D3iFGQZk.js";import"./preload-helper-PPVm8Dsz.js";import"./ArticleGrid-BeH2QxFn.js";import"./index-42ANG6Sg.js";import"./TextGroup-C7hXvWol.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./Article-BYOIQ0nN.js";import"./ButtonGroup-ojbwMsyk.js";import"./Button-DMj_75Cf.js";import"./Picture-hGQrZg1i.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,y={title:"Core Components/Related Content",component:o,tags:["autodocs"]},n=[{heading:"Campus Life at Colby",subheading:"Student Life",paragraph:"Explore the vibrant campus life at Colby College.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Campus life"}},{heading:"Research Opportunities",subheading:"Academics",paragraph:"Discover research opportunities for undergraduates.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Research"}},{heading:"Athletic Programs",subheading:"Athletics",paragraph:"Join one of our many varsity and club sports teams.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Athletics"}},{heading:"Alumni Network",subheading:"Community",paragraph:"Stay connected with the Colby alumni community.",url:"#",image:{sizes:{desktop:"https://placehold.co/400x300",mobile:"https://placehold.co/400x300"},alt:"Alumni"}}],a={name:"Default",args:{heading:"Related Content",items:n},play:async({canvas:e})=>{await t(e.getByText("Related Content")).toBeInTheDocument(),await t(e.getByText("Campus Life at Colby")).toBeInTheDocument(),await t(e.getByText("Research Opportunities")).toBeInTheDocument(),await t(e.getByText("Athletic Programs")).toBeInTheDocument()}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Default",
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
}`,...a.parameters?.docs?.source}}};const C=["Default"];export{a as Default,C as __namedExportsOrder,y as default};
