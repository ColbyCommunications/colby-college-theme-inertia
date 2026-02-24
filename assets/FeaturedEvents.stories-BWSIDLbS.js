import{c as p,a,e as c,d as m}from"./iframe-BfBFAde5.js";import{_ as u}from"./Carousel-48i8j71U.js";import{_ as h}from"./EndpointFilter-Ckf89YTt.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C0Zqfgkc.js";import"./glide.esm-YJcNIzYu.js";import"./Context-Dp7yX81d.js";import"./TextGroup-T77HtXsG.js";import"./ButtonGroup-DeVPz35K.js";import"./Button-u50yI3p6.js";import"./ArrowControls-CjN_dRVd.js";import"./ArrowButton-C6TXGDEx.js";import"./Picture-CxKtrm5G.js";const g={class:"featured-events bg-bluemarble__pattern full-bleed relative space-y-28 bg-cover bg-center py-24"},f={class:"featured-events__inner mx-auto my-0 w-full max-w-screen-2xl gap-x-10 md:grid md:grid-cols-12"},y={class:"featured-events__carousel col-span-12 md:col-span-10 md:col-start-2"},v={class:"featured-events__inner mx-auto my-0 grid w-full max-w-screen-2xl gap-x-10 md:grid-cols-12"},x={class:"md:col-span-10 md:col-start-2"},r={__name:"FeaturedEvents",props:{heading:{type:String,default:""},paragraph:{type:String,default:""},items:{type:Array,default:()=>[]}},setup(e){return(t,_)=>(m(),p("div",g,[a("div",f,[a("div",y,[c(u,{type:"light",size:"medium","render-api":!1,heading:e.heading,paragraph:e.paragraph,items:e.items,buttons:[]},null,8,["heading","paragraph","items"])])]),a("div",v,[a("div",x,[c(h,{type:"dark",limit:3,filters:!1})])])]))}};r.__docgenInfo={exportName:"default",displayName:"FeaturedEvents",description:"",tags:{},props:[{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/FeaturedEvents/FeaturedEvents.vue"]};const{expect:d}=__STORYBOOK_MODULE_TEST__,i=[{title:"Keynote Speaker: Dr. Jane Goodall",date:"October 15, 2024",image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Rectangle:"https://placehold.co/600x400",Rectangle_mobile:"https://placehold.co/300x200"}},url:"#",buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},{title:"Colby Symphony Orchestra",date:"November 3, 2024",image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Rectangle:"https://placehold.co/600x400",Rectangle_mobile:"https://placehold.co/300x200"}},url:"#",buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},{title:"Museum Exhibition Opening",date:"December 10, 2024",image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Rectangle:"https://placehold.co/600x400",Rectangle_mobile:"https://placehold.co/300x200"}},url:"#",buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]}],R={title:"Core Components/Featured Events",component:r,parameters:{layout:"fullscreen"},argTypes:{heading:{control:"text"},paragraph:{control:"text"},items:{control:"object"}}},l=e=>({components:{FeaturedEvents:r},setup(){return{args:e}},template:'<FeaturedEvents v-bind="args" />'}),n={render:l,args:{heading:"Featured Events",paragraph:"Explore upcoming major events, lectures, and performances happening on Mayflower Hill.",items:i},play:async({canvas:e})=>{const t=await e.findByText("Featured Events");await d(t).toBeInTheDocument()}},s={render:l,args:{heading:"Upcoming Schedule",paragraph:"Check below for the full list of events from our live calendar.",items:[]},play:async({canvas:e})=>{const t=await e.findByText("Upcoming Schedule");await d(t).toBeInTheDocument()}},o={render:l,args:{heading:"Events",items:[i[0]]},play:async({canvas:e})=>{const t=await e.findByText("Events");await d(t).toBeInTheDocument()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    heading: "Featured Events",
    paragraph: "Explore upcoming major events, lectures, and performances happening on Mayflower Hill.",
    items: mockItems
  },
  play: async ({
    canvas
  }) => {
    const heading = await canvas.findByText("Featured Events");
    await expect(heading).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    heading: "Upcoming Schedule",
    paragraph: "Check below for the full list of events from our live calendar.",
    items: [] // Tests how the carousel behaves when empty
  },
  play: async ({
    canvas
  }) => {
    const heading = await canvas.findByText("Upcoming Schedule");
    await expect(heading).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    heading: "Events",
    items: [mockItems[0]] // Single item test
  },
  play: async ({
    canvas
  }) => {
    const heading = await canvas.findByText("Events");
    await expect(heading).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};const M=["Default","WithoutCarouselItems","Minimal"];export{n as Default,o as Minimal,s as WithoutCarouselItems,M as __namedExportsOrder,R as default};
