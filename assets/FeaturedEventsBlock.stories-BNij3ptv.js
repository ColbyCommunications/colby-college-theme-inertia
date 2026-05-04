import{a as o}from"./index-DZ_Kha3d.js";import{_ as s}from"./FeaturedEvents-OXI52Mhp.js";import{a as i}from"./mock-data-Db_ZkuBv.js";import"./iframe-DTQvshqa.js";import"./preload-helper-PPVm8Dsz.js";import"./Carousel-BRtiZV-m.js";import"./glide.esm-YJcNIzYu.js";import"./Context-4HtdI-UF.js";import"./TextGroup-BOYR6eDq.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-COr3JDjA.js";import"./Button-q0sjokTk.js";import"./ArrowControls-CffdOIrm.js";import"./ArrowButton-oEUtBM6n.js";import"./Picture-Cmoj2WFy.js";import"./EndpointFilter-C42KbRo7.js";const{expect:t,spyOn:p,waitFor:c}=__STORYBOOK_MODULE_TEST__,m=[{title:"Keynote Speaker: Dr. Jane Goodall",date:"October 15, 2024",image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Rectangle:"https://placehold.co/600x400",Rectangle_mobile:"https://placehold.co/300x200"}},url:"#",buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},{title:"Colby Symphony Orchestra",date:"November 3, 2024",image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Rectangle:"https://placehold.co/600x400",Rectangle_mobile:"https://placehold.co/300x200"}},url:"#",buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},{title:"Museum Exhibition Opening",date:"December 10, 2024",image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Rectangle:"https://placehold.co/600x400",Rectangle_mobile:"https://placehold.co/300x200"}},url:"#",buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]}],A={title:"Blocks/Featured Events",component:s,tags:["!autodocs"],parameters:{layout:"fullscreen"},argTypes:{display_posts_method:{name:"Display Posts Method",control:{type:"select",labels:{api:"External API",manual:"Add Posts Manually"}},options:["api","manual"],table:{category:"Wordpress Fields"}},render_api:{name:"Render API",control:{type:"boolean"},if:{arg:"display_posts_method",eq:"api"},table:{category:"Wordpress Fields"}},api:{name:"API",control:"inline-radio",options:["Latest News"],if:{arg:"display_posts_method",eq:"api"},table:{category:"Wordpress Fields"}},heading:{name:"Heading",control:"text",table:{category:"Wordpress Fields"}},paragraph:{name:"Paragraph",control:"text",table:{category:"Wordpress Fields"}},items:{name:"Items",control:"object",if:{arg:"display_posts_method",eq:"manual"},table:{category:"Wordpress Fields"}}},beforeEach:()=>{const e=p(o,"get").mockResolvedValue({data:i(3)});return()=>e.mockRestore()}},h=e=>({components:{FeaturedEvents:s},setup(){return{args:e}},template:"<FeaturedEvents v-bind='args' />"}),a={name:"Featured Events",render:h,args:{display_posts_method:"api",render_api:!0,api:"Latest News",heading:"Featured Events",paragraph:"Explore upcoming major events, lectures, and performances happening on Mayflower Hill.",items:m},play:async({canvas:e})=>{const n=await e.findByText("Featured Events");await t(n).toBeInTheDocument(),await c(()=>{t(o.get).toHaveBeenCalled()});const r=await e.findByText("Spring Concert Series");await t(r).toBeVisible();const l=await e.findByText("Faculty Lecture: Climate Change");await t(l).toBeVisible();const d=e.getAllByText("Learn More");await t(d.length).toBe(3)}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Featured Events",
  render,
  args: {
    display_posts_method: "api",
    render_api: true,
    api: "Latest News",
    heading: "Featured Events",
    paragraph: "Explore upcoming major events, lectures, and performances happening on Mayflower Hill.",
    items: mockItems
  },
  play: async ({
    canvas
  }) => {
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
}`,...a.parameters?.docs?.source}}};const C=["Default"];export{a as Default,C as __namedExportsOrder,A as default};
