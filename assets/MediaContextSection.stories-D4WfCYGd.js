import{c,a as s,n as i,F as p,j as u,o,h as g,m as y}from"./iframe-CXmBaLtA.js";import{_ as h}from"./MediaContext-b7C9OgHm.js";import"./preload-helper-PPVm8Dsz.js";import"./Video-SHTSErou.js";import"./Icon-DWDteFoz.js";import"./Picture-Da4rEXst.js";import"./Context-DsMCwePN.js";import"./TextGroup-Ddf7x0YB.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-BDAY4i8V.js";import"./Button-B9FVeO1S.js";const x={class:"media-context-section relative py-24"},_={class:"media-context-section__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"},r={__name:"MediaContextSection",props:{type:{type:String,default:"wide"},items:{type:Array,default:()=>[]}},setup(e){return(w,f)=>(o(),c("div",x,[s("div",_,[s("div",{class:i(["media-context-section__main space-y-16",e.type==="narrow"?"md:col-span-10 md:col-start-2":"md:col-span-12"])},[(o(!0),c(p,null,u(e.items,(d,l)=>(o(),g(h,y({key:l},{ref_for:!0},d),null,16))),128))],2)]),s("div",{class:i(["media-context-section__bg absolute -z-10 top-0 right-0 bg-mediacontextsection___pattern bg-cover",e.type==="narrow"?"w-[100%] h-[100%]":"w-[60%] md:w-[75%] h-[60%]"])},null,2)]))}};r.__docgenInfo=Object.assign({displayName:r.name??r.__name},{exportName:"default",displayName:"MediaContextSection",description:"",tags:{},props:[{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"wide"'}},{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/MediaContextSection/MediaContextSection.vue"]});const{expect:n}=__STORYBOOK_MODULE_TEST__,N={title:"Core Components/Media Context Section",component:r,tags:["autodocs"],argTypes:{type:{control:"select",options:["wide","narrow"]}}},m=[{image:{src:"https://placehold.co/600x400",srcset:"",alt:"Campus view"},subheading:"Academics",heading:"A World-Class Education",paragraph:"Colby offers a rigorous liberal arts curriculum that prepares students for success.",buttons:[{button:{url:"#",title:"Learn More",target:""}}]},{image:{src:"https://placehold.co/600x400",srcset:"",alt:"Research lab"},reverse:!0,subheading:"Research",heading:"Undergraduate Research",paragraph:"Students work alongside faculty on groundbreaking research projects.",buttons:[{button:{url:"#",title:"Explore Research",target:""}}]}],t={name:"Wide",args:{type:"wide",items:m},play:async({canvas:e})=>{await n(e.getByText("A World-Class Education")).toBeInTheDocument(),await n(e.getByText("Undergraduate Research")).toBeInTheDocument()}},a={name:"Narrow",args:{type:"narrow",items:m},play:async({canvas:e})=>{await n(e.getByText("A World-Class Education")).toBeInTheDocument(),await n(e.getByText("Undergraduate Research")).toBeInTheDocument()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const k=["Wide","Narrow"];export{a as Narrow,t as Wide,k as __namedExportsOrder,N as default};
