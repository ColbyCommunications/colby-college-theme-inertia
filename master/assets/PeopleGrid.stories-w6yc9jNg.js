import t from"./PeopleGrid-Dlafd12f.js";import"./iframe-DTL4LCWd.js";import"./preload-helper-CNn__nYE.js";import"./ArticleGrid-C8LqmYuJ.js";import"./glide.esm-YJcNIzYu.js";import"./TextGroup-DdC10FMg.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./Article-Cdagreja.js";import"./ButtonGroup-D5CFiUsv.js";import"./Button-D7gjFSN8.js";import"./Picture-DaNxw0P8.js";import"./ArrowControls-qfe3VVvI.js";import"./ArrowButton-Ke4vUGSv.js";const{expect:x}=__STORYBOOK_MODULE_TEST__,y={title:"Core Components/People Grid",component:t,tags:["autodocs"]},a=[{heading:"Dr. Jane Smith",subheading:"Professor of Biology",paragraph:"Department Chair, Environmental Studies Program",url:"#",image:{sizes:{desktop:"https://placehold.co/300x400",mobile:"https://placehold.co/300x400"},alt:"Dr. Jane Smith"}},{heading:"Dr. John Doe",subheading:"Associate Professor of Chemistry",paragraph:"Research focus on organic chemistry and catalysis",url:"#",image:{sizes:{desktop:"https://placehold.co/300x400",mobile:"https://placehold.co/300x400"},alt:"Dr. John Doe"}},{heading:"Dr. Emily Chen",subheading:"Assistant Professor of Physics",paragraph:"Quantum computing and theoretical physics",url:"#",image:{sizes:{desktop:"https://placehold.co/300x400",mobile:"https://placehold.co/300x400"},alt:"Dr. Emily Chen"}},{heading:"Prof. Michael Brown",subheading:"Professor of Mathematics",paragraph:"Applied mathematics and data science",url:"#",image:{sizes:{desktop:"https://placehold.co/300x400",mobile:"https://placehold.co/300x400"},alt:"Prof. Michael Brown"}}],e={name:"Default",args:{people:a},play:async({canvas:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    people: samplePeople
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Dr. Jane Smith")).toBeInTheDocument();
    await expect(canvas.getByText("Dr. John Doe")).toBeInTheDocument();
    await expect(canvas.getByText("Dr. Emily Chen")).toBeInTheDocument();
    await expect(canvas.getByText("Prof. Michael Brown")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const B=["Default"];export{e as Default,B as __namedExportsOrder,y as default};
