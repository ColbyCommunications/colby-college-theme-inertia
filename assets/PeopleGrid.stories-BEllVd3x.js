import a from"./PeopleGrid-T_f7p-RY.js";import"./iframe-SviAckVx.js";import"./preload-helper-PPVm8Dsz.js";import"./ArticleGrid-Dgd9dMNG.js";import"./glide.esm-YJcNIzYu.js";import"./TextGroup-BFmHYEmd.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./Article-CXedu71q.js";import"./ButtonGroup-BtV2HlWm.js";import"./Button-BEMEoVLz.js";import"./Picture-D8uJVbYe.js";import"./ArrowControls-CkMB1psT.js";import"./ArrowButton-Dvnr3--H.js";const{expect:f}=__STORYBOOK_MODULE_TEST__,x={title:"Core Components/People Grid",component:a,tags:["autodocs"]},t=[{heading:"Dr. Jane Smith",subheading:"Professor of Biology",paragraph:"Department Chair, Environmental Studies Program",url:"#",image:{sizes:{desktop:"https://placehold.co/300x400",mobile:"https://placehold.co/300x400"},alt:"Dr. Jane Smith"}},{heading:"Dr. John Doe",subheading:"Associate Professor of Chemistry",paragraph:"Research focus on organic chemistry and catalysis",url:"#",image:{sizes:{desktop:"https://placehold.co/300x400",mobile:"https://placehold.co/300x400"},alt:"Dr. John Doe"}},{heading:"Dr. Emily Chen",subheading:"Assistant Professor of Physics",paragraph:"Quantum computing and theoretical physics",url:"#",image:{sizes:{desktop:"https://placehold.co/300x400",mobile:"https://placehold.co/300x400"},alt:"Dr. Emily Chen"}},{heading:"Prof. Michael Brown",subheading:"Professor of Mathematics",paragraph:"Applied mathematics and data science",url:"#",image:{sizes:{desktop:"https://placehold.co/300x400",mobile:"https://placehold.co/300x400"},alt:"Prof. Michael Brown"}}],e={name:"Default",args:{people:t},play:async({canvas:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const y=["Default"];export{e as Default,y as __namedExportsOrder,x as default};
