import{c as o,a as n,n as c,F as p,r as u,d as s,h as g,p as y}from"./iframe-BfBFAde5.js";import{_ as h}from"./MediaContext-BIXMJq0N.js";import"./preload-helper-PPVm8Dsz.js";import"./Video-bD-NLK8l.js";import"./Icon-BG0snce_.js";import"./Picture-CxKtrm5G.js";import"./Context-Dp7yX81d.js";import"./TextGroup-T77HtXsG.js";import"./ButtonGroup-DeVPz35K.js";import"./Button-u50yI3p6.js";const x={class:"media-context-section relative py-24"},w={class:"media-context-section__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"},i={__name:"MediaContextSection",props:{type:{type:String,default:"wide"},items:{type:Array,default:()=>[]}},setup(e){return(_,f)=>(s(),o("div",x,[n("div",w,[n("div",{class:c(["media-context-section__main space-y-16",e.type==="narrow"?"md:col-span-10 md:col-start-2":"md:col-span-12"])},[(s(!0),o(p,null,u(e.items,(l,m)=>(s(),g(h,y({key:m},{ref_for:!0},l),null,16))),128))],2)]),n("div",{class:c(["media-context-section__bg absolute -z-10 top-0 right-0 bg-mediacontextsection___pattern bg-cover",e.type==="narrow"?"w-[100%] h-[100%]":"w-[60%] md:w-[75%] h-[60%]"])},null,2)]))}};i.__docgenInfo={exportName:"default",displayName:"MediaContextSection",description:"",tags:{},props:[{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"wide"'}},{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/MediaContextSection/MediaContextSection.vue"]};const{expect:r}=__STORYBOOK_MODULE_TEST__,W={title:"Core Components/Media Context Section",component:i,tags:["autodocs"],argTypes:{type:{control:"select",options:["wide","narrow"]}}},d=[{image:{src:"https://placehold.co/600x400",srcset:"",alt:"Campus view"},subheading:"Academics",heading:"A World-Class Education",paragraph:"Colby offers a rigorous liberal arts curriculum that prepares students for success.",buttons:[{button:{url:"#",title:"Learn More",target:""}}]},{image:{src:"https://placehold.co/600x400",srcset:"",alt:"Research lab"},reverse:!0,subheading:"Research",heading:"Undergraduate Research",paragraph:"Students work alongside faculty on groundbreaking research projects.",buttons:[{button:{url:"#",title:"Explore Research",target:""}}]}],t={name:"Wide",args:{type:"wide",items:d},play:async({canvas:e})=>{await r(e.getByText("A World-Class Education")).toBeInTheDocument(),await r(e.getByText("Undergraduate Research")).toBeInTheDocument()}},a={name:"Narrow",args:{type:"narrow",items:d},play:async({canvas:e})=>{await r(e.getByText("A World-Class Education")).toBeInTheDocument(),await r(e.getByText("Undergraduate Research")).toBeInTheDocument()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Wide",
  args: {
    type: "wide",
    items: sampleItems
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("A World-Class Education")).toBeInTheDocument();
    await expect(canvas.getByText("Undergraduate Research")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Narrow",
  args: {
    type: "narrow",
    items: sampleItems
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("A World-Class Education")).toBeInTheDocument();
    await expect(canvas.getByText("Undergraduate Research")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};const M=["Wide","Narrow"];export{a as Narrow,t as Wide,M as __namedExportsOrder,W as default};
