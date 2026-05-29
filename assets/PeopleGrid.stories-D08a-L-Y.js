import a from"./PeopleGrid-BQs7T6z_.js";import"./iframe-Cp2yh0T9.js";import"./preload-helper-PPVm8Dsz.js";import"./ArticleGrid-B2H1vtGj.js";import"./glide.esm-YJcNIzYu.js";import"./TextGroup-C3eCe4vK.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./Article-Dk8uYTLB.js";import"./ButtonGroup-DPJ62q3E.js";import"./Button-BTFkSBf6.js";import"./Picture-B0hRknc0.js";import"./ArrowControls-CWKlJ8dM.js";import"./ArrowButton-Cs0qfOGj.js";const{expect:f}=__STORYBOOK_MODULE_TEST__,x={title:"Core Components/People Grid",component:a,tags:["autodocs"]},t=[{heading:"Dr. Jane Smith",subheading:"Professor of Biology",paragraph:"Department Chair, Environmental Studies Program",url:"#",image:{sizes:{desktop:"https://placehold.co/300x400",mobile:"https://placehold.co/300x400"},alt:"Dr. Jane Smith"}},{heading:"Dr. John Doe",subheading:"Associate Professor of Chemistry",paragraph:"Research focus on organic chemistry and catalysis",url:"#",image:{sizes:{desktop:"https://placehold.co/300x400",mobile:"https://placehold.co/300x400"},alt:"Dr. John Doe"}},{heading:"Dr. Emily Chen",subheading:"Assistant Professor of Physics",paragraph:"Quantum computing and theoretical physics",url:"#",image:{sizes:{desktop:"https://placehold.co/300x400",mobile:"https://placehold.co/300x400"},alt:"Dr. Emily Chen"}},{heading:"Prof. Michael Brown",subheading:"Professor of Mathematics",paragraph:"Applied mathematics and data science",url:"#",image:{sizes:{desktop:"https://placehold.co/300x400",mobile:"https://placehold.co/300x400"},alt:"Prof. Michael Brown"}}],e={name:"Default",args:{people:t},play:async({canvas:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
