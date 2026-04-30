import a from"./PeopleGrid-I3YOF9T_.js";import"./iframe-C6aVhbCK.js";import"./preload-helper-PPVm8Dsz.js";import"./ArticleGrid-DwHf8G4q.js";import"./TextGroup-jmqXIUoI.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./Article-Dp_OjAOM.js";import"./ButtonGroup-CPdn2L11.js";import"./Button-Cwfv8ZIL.js";import"./Picture-z4cn1Zm5.js";const{expect:o}=__STORYBOOK_MODULE_TEST__,u={title:"Blocks/People Grid",component:a,tags:["!autodocs"],argTypes:{auto_populate:{name:"Auto Populate by Department Name (Academic Dept Homepages Only)",control:"boolean",table:{category:"Wordpress Fields"}},items:{name:"Add Additional People",control:"object",table:{category:"Wordpress Fields"}},exclude_from_listings:{name:"Exclude People from Appearing",control:"object",table:{category:"Wordpress Fields"}},people:{table:{disable:!0}}}},r=[{heading:"Dr. Jane Smith",subheading:"Professor of Biology",paragraph:"Department Chair, Environmental Studies Program",url:"#",image:{sizes:{desktop:"https://placehold.co/300x400",mobile:"https://placehold.co/300x400"},alt:"Dr. Jane Smith"}},{heading:"Dr. John Doe",subheading:"Associate Professor of Chemistry",paragraph:"Research focus on organic chemistry and catalysis",url:"#",image:{sizes:{desktop:"https://placehold.co/300x400",mobile:"https://placehold.co/300x400"},alt:"Dr. John Doe"}},{heading:"Dr. Emily Chen",subheading:"Assistant Professor of Physics",paragraph:"Quantum computing and theoretical physics",url:"#",image:{sizes:{desktop:"https://placehold.co/300x400",mobile:"https://placehold.co/300x400"},alt:"Dr. Emily Chen"}},{heading:"Prof. Michael Brown",subheading:"Professor of Mathematics",paragraph:"Applied mathematics and data science",url:"#",image:{sizes:{desktop:"https://placehold.co/300x400",mobile:"https://placehold.co/300x400"},alt:"Prof. Michael Brown"}}],t={name:"People Grid",args:{people:r},play:async({canvas:e})=>{await o(e.getByText("Dr. Jane Smith")).toBeInTheDocument(),await o(e.getByText("Dr. John Doe")).toBeInTheDocument(),await o(e.getByText("Dr. Emily Chen")).toBeInTheDocument(),await o(e.getByText("Prof. Michael Brown")).toBeInTheDocument()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "People Grid",
  args: {
    people: samplePeople
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Dr. Jane Smith")).toBeInTheDocument();
    await expect(canvas.getByText("Dr. John Doe")).toBeInTheDocument();
    await expect(canvas.getByText("Dr. Emily Chen")).toBeInTheDocument();
    await expect(canvas.getByText("Prof. Michael Brown")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};const D=["Default"];export{t as Default,D as __namedExportsOrder,u as default};
