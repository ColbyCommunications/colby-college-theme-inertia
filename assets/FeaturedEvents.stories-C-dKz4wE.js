import{a as c}from"./index-42ANG6Sg.js";import{c as v,a as o,b as m,o as f}from"./iframe-DUhMLh8B.js";import w from"./Carousel-swjmBqbB.js";import{_ as x}from"./EndpointFilter-BuNBVApT.js";import{d as y}from"./mock-data-iuhpH0Ld.js";import"./preload-helper-PPVm8Dsz.js";import"./glide.esm-YJcNIzYu.js";import"./Context-B_YdcaCR.js";import"./TextGroup-CukHTkLL.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-ZRNuMhM7.js";import"./Button-Z4CuRNZo.js";import"./ArrowControls-D9mjs9X2.js";import"./ArrowButton-PHyU6eCz.js";import"./Picture-CApDF2On.js";const b={class:"featured-events bg-bluemarble__pattern full-bleed relative space-y-28 bg-cover bg-center py-24"},B={class:"featured-events__inner mx-auto my-0 w-full max-w-screen-2xl gap-x-10 md:grid md:grid-cols-12"},_={class:"featured-events__carousel col-span-12 md:col-span-10 md:col-start-2"},E={class:"featured-events__inner mx-auto my-0 grid w-full max-w-screen-2xl gap-x-10 md:grid-cols-12"},T={class:"md:col-span-10 md:col-start-2"},s={__name:"FeaturedEvents",props:{heading:{type:String,default:""},paragraph:{type:String,default:""},items:{type:Array,default:()=>[]}},setup(e){return(a,n)=>(f(),v("div",b,[o("div",B,[o("div",_,[m(w,{type:"light",size:"medium","render-api":!1,heading:e.heading,paragraph:e.paragraph,items:e.items,buttons:[]},null,8,["heading","paragraph","items"])])]),o("div",E,[o("div",T,[m(x,{type:"dark",limit:3,filters:!1})])])]))}};s.__docgenInfo=Object.assign({displayName:s.name??s.__name},{exportName:"default",displayName:"FeaturedEvents",description:"",tags:{},props:[{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/FeaturedEvents/FeaturedEvents.vue"]});const{expect:t,spyOn:S,waitFor:d}=__STORYBOOK_MODULE_TEST__,u=[{title:"Keynote Speaker: Dr. Jane Goodall",date:"October 15, 2024",image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Rectangle:"https://placehold.co/600x400",Rectangle_mobile:"https://placehold.co/300x200"}},url:"#",buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},{title:"Colby Symphony Orchestra",date:"November 3, 2024",image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Rectangle:"https://placehold.co/600x400",Rectangle_mobile:"https://placehold.co/300x200"}},url:"#",buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},{title:"Museum Exhibition Opening",date:"December 10, 2024",image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Rectangle:"https://placehold.co/600x400",Rectangle_mobile:"https://placehold.co/300x200"}},url:"#",buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]}],K={title:"Core Components/Featured Events",component:s,parameters:{layout:"fullscreen"},argTypes:{heading:{control:"text"},paragraph:{control:"text"},items:{control:"object"}},beforeEach:()=>{const e=S(c,"get").mockResolvedValue({data:y(3)});return()=>e.mockRestore()}},p=e=>({components:{FeaturedEvents:s},setup(){return{args:e}},template:'<FeaturedEvents v-bind="args" />'}),r={render:p,args:{heading:"Featured Events",paragraph:"Explore upcoming major events, lectures, and performances happening on Mayflower Hill.",items:u},play:async({canvas:e})=>{const a=await e.findByText("Featured Events");await t(a).toBeInTheDocument(),await d(()=>{t(c.get).toHaveBeenCalled()});const n=await e.findByText("Spring Concert Series");await t(n).toBeVisible();const h=await e.findByText("Faculty Lecture: Climate Change");await t(h).toBeVisible();const g=e.getAllByText("Learn More");await t(g.length).toBe(3)}},i={render:p,args:{heading:"Upcoming Schedule",paragraph:"Check below for the full list of events from our live calendar.",items:[]},play:async({canvas:e})=>{const a=await e.findByText("Upcoming Schedule");await t(a).toBeInTheDocument(),await d(()=>{t(c.get).toHaveBeenCalled()});const n=await e.findByText("Spring Concert Series");await t(n).toBeVisible()}},l={render:p,args:{heading:"Events",items:[u[0]]},play:async({canvas:e})=>{const a=await e.findByText("Events");await t(a).toBeInTheDocument(),await d(()=>{t(c.get).toHaveBeenCalled()});const n=await e.findByText("Spring Concert Series");await t(n).toBeVisible()}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render,
  args: {
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
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    heading: "Upcoming Schedule",
    paragraph: "Check below for the full list of events from our live calendar.",
    items: []
  },
  play: async ({
    canvas
  }) => {
    const heading = await canvas.findByText("Upcoming Schedule");
    await expect(heading).toBeInTheDocument();
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalled();
    });

    // Events from EndpointFilter should still render even with empty carousel
    const event1 = await canvas.findByText("Spring Concert Series");
    await expect(event1).toBeVisible();
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    heading: "Events",
    items: [mockItems[0]]
  },
  play: async ({
    canvas
  }) => {
    const heading = await canvas.findByText("Events");
    await expect(heading).toBeInTheDocument();
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalled();
    });

    // Assert events from EndpointFilter render
    const event1 = await canvas.findByText("Spring Concert Series");
    await expect(event1).toBeVisible();
  }
}`,...l.parameters?.docs?.source}}};const W=["Default","WithoutCarouselItems","Minimal"];export{r as Default,l as Minimal,i as WithoutCarouselItems,W as __namedExportsOrder,K as default};
