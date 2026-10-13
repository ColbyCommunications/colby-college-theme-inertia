import{a as i}from"./index-BCn5QfZZ.js";import r from"./FeaturedEvents-BTL6trM_.js";import{a as c}from"./mock-data-Db_ZkuBv.js";import"./iframe-DHFquFcq.js";import"./preload-helper-B-_ADY_8.js";import"./Carousel-CXEex_P4.js";import"./glide.esm-YJcNIzYu.js";import"./Context-BbEtaWPo.js";import"./TextGroup-o3sNFTrc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./ButtonGroup-bnX3L9r1.js";import"./Button-BBOumCWS.js";import"./ArrowControls-DyLhg0Ir.js";import"./ArrowButton-BPUSWXd6.js";import"./Picture-DroALuPx.js";import"./EndpointFilter-B4Dk4SiF.js";const{expect:M,spyOn:l,waitFor:_}=__STORYBOOK_MODULE_TEST__,s=[{title:"Keynote Speaker: Dr. Jane Goodall",date:"October 15, 2024",image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Rectangle:"https://placehold.co/600x400",Rectangle_mobile:"https://placehold.co/300x200"}},url:"#",buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},{title:"Colby Symphony Orchestra",date:"November 3, 2024",image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Rectangle:"https://placehold.co/600x400",Rectangle_mobile:"https://placehold.co/300x200"}},url:"#",buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},{title:"Museum Exhibition Opening",date:"December 10, 2024",image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Rectangle:"https://placehold.co/600x400",Rectangle_mobile:"https://placehold.co/300x200"}},url:"#",buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]}],O={title:"Core Components/Featured Events",component:r,parameters:{layout:"fullscreen"},argTypes:{heading:{control:"text"},paragraph:{control:"text"},items:{control:"object"}},beforeEach:()=>{const e=l(i,"get").mockResolvedValue({data:c(3)});return()=>e.mockRestore()}},o=e=>({components:{FeaturedEvents:r},setup(){return{args:e}},template:'<FeaturedEvents v-bind="args" />'}),t={render:o,args:{heading:"Featured Events",paragraph:"Explore upcoming major events, lectures, and performances happening on Mayflower Hill.",items:s},play:async({canvas:e})=>{}},n={render:o,args:{heading:"Upcoming Schedule",paragraph:"Check below for the full list of events from our live calendar.",items:[]},play:async({canvas:e})=>{}},a={render:o,args:{heading:"Events",items:[s[0]]},play:async({canvas:e})=>{}},D=["Default","WithoutCarouselItems","Minimal"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};export{t as Default,a as Minimal,n as WithoutCarouselItems,D as __namedExportsOrder,O as default};
