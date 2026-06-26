import t from"./PeopleGrid-DQkT2zAr.js";import"./iframe-BGY82xpI.js";import"./preload-helper-CNn__nYE.js";import"./ArticleGrid-aY8cHfr7.js";import"./glide.esm-YJcNIzYu.js";import"./TextGroup-BvBDAz91.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./Article-D3p_V_Hg.js";import"./ButtonGroup-BObZw2Xs.js";import"./Button-BeR63pib.js";import"./Picture-zkJWrd5Z.js";import"./ArrowControls-jcq-QytY.js";import"./ArrowButton-DNCzn3rW.js";const{expect:x}=__STORYBOOK_MODULE_TEST__,y={title:"Core Components/People Grid",component:t,tags:["autodocs"]},a=[{heading:"Dr. Jane Smith",subheading:"Professor of Biology",paragraph:"Department Chair, Environmental Studies Program",url:"#",image:{sizes:{desktop:"https://placehold.co/300x400",mobile:"https://placehold.co/300x400"},alt:"Dr. Jane Smith"}},{heading:"Dr. John Doe",subheading:"Associate Professor of Chemistry",paragraph:"Research focus on organic chemistry and catalysis",url:"#",image:{sizes:{desktop:"https://placehold.co/300x400",mobile:"https://placehold.co/300x400"},alt:"Dr. John Doe"}},{heading:"Dr. Emily Chen",subheading:"Assistant Professor of Physics",paragraph:"Quantum computing and theoretical physics",url:"#",image:{sizes:{desktop:"https://placehold.co/300x400",mobile:"https://placehold.co/300x400"},alt:"Dr. Emily Chen"}},{heading:"Prof. Michael Brown",subheading:"Professor of Mathematics",paragraph:"Applied mathematics and data science",url:"#",image:{sizes:{desktop:"https://placehold.co/300x400",mobile:"https://placehold.co/300x400"},alt:"Prof. Michael Brown"}}],e={name:"Default",args:{people:a},play:async({canvas:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
