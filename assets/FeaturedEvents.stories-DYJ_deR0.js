import{a as i}from"./index-DZ_Kha3d.js";import{_ as s}from"./FeaturedEvents-B0refqJ-.js";import{a as c}from"./mock-data-Db_ZkuBv.js";import"./iframe-YkMtoKZp.js";import"./preload-helper-PPVm8Dsz.js";import"./Carousel-CKtMzHX-.js";import"./glide.esm-YJcNIzYu.js";import"./Context-DtOziuwH.js";import"./TextGroup-Bfp8j3tn.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-rvuowk51.js";import"./Button-DU7Jn5r0.js";import"./ArrowControls-BYyHCVrb.js";import"./ArrowButton-BNSTrn-E.js";import"./Picture-CK7QN2qL.js";import"./EndpointFilter-B-74LPSS.js";const{expect:C,spyOn:l,waitFor:T}=__STORYBOOK_MODULE_TEST__,n=[{title:"Keynote Speaker: Dr. Jane Goodall",date:"October 15, 2024",image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Rectangle:"https://placehold.co/600x400",Rectangle_mobile:"https://placehold.co/300x200"}},url:"#",buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},{title:"Colby Symphony Orchestra",date:"November 3, 2024",image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Rectangle:"https://placehold.co/600x400",Rectangle_mobile:"https://placehold.co/300x200"}},url:"#",buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},{title:"Museum Exhibition Opening",date:"December 10, 2024",image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Rectangle:"https://placehold.co/600x400",Rectangle_mobile:"https://placehold.co/300x200"}},url:"#",buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]}],_={title:"Core Components/Featured Events",component:s,parameters:{layout:"fullscreen"},argTypes:{heading:{control:"text"},paragraph:{control:"text"},items:{control:"object"}},beforeEach:()=>{const e=l(i,"get").mockResolvedValue({data:c(3)});return()=>e.mockRestore()}},r=e=>({components:{FeaturedEvents:s},setup(){return{args:e}},template:'<FeaturedEvents v-bind="args" />'}),t={render:r,args:{heading:"Featured Events",paragraph:"Explore upcoming major events, lectures, and performances happening on Mayflower Hill.",items:n},play:async({canvas:e})=>{}},a={render:r,args:{heading:"Upcoming Schedule",paragraph:"Check below for the full list of events from our live calendar.",items:[]},play:async({canvas:e})=>{}},o={render:r,args:{heading:"Events",items:[n[0]]},play:async({canvas:e})=>{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    heading: "Featured Events",
    paragraph: "Explore upcoming major events, lectures, and performances happening on Mayflower Hill.",
    items: mockItems
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    // Assert carousel heading renders
    const heading = await canvas.findByText("Featured Events");
    await expect(heading).toBeInTheDocument();
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalled();
    });

    // Assert mock events from EndpointFilter render
    const event1 = await canvas.findByText("Spring Concert Series");
    await expect(event1).toBeVisible();
    const event2 = await canvas.findByText("Faculty Lecture: Climate Change");
    await expect(event2).toBeVisible();

    // Assert "Learn More" buttons from EndpointFilter render
    const learnMoreButtons = canvas.getAllByText("Learn More");
    await expect(learnMoreButtons.length).toBe(3);
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    heading: "Upcoming Schedule",
    paragraph: "Check below for the full list of events from our live calendar.",
    items: []
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const heading = await canvas.findByText("Upcoming Schedule");
    await expect(heading).toBeInTheDocument();
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalled();
    });

    // Events from EndpointFilter should still render even with empty carousel
    const event1 = await canvas.findByText("Spring Concert Series");
    await expect(event1).toBeVisible();
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    heading: "Events",
    items: [mockItems[0]]
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const heading = await canvas.findByText("Events");
    await expect(heading).toBeInTheDocument();
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalled();
    });

    // Assert events from EndpointFilter render
    const event1 = await canvas.findByText("Spring Concert Series");
    await expect(event1).toBeVisible();
  }
}`,...o.parameters?.docs?.source}}};const M=["Default","WithoutCarouselItems","Minimal"];export{t as Default,o as Minimal,a as WithoutCarouselItems,M as __namedExportsOrder,_ as default};
