import{c as t,a as y,m as p,t as x,j as I,n as f,l as S,d as n}from"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";const B=["src","alt"],T=["src"],v={key:2,class:"text-center text-indigo text-12 pt-2"},u={__name:"Image",props:{image:{type:Object,default:null},imagePath:{type:String,default:""},imageScale:{type:String,default:"100"},caption:{type:String,default:""},alignCenter:{type:Boolean,default:!1}},setup(e){const d=e,h=S(()=>{const g=parseInt(d.imageScale)||100;return g<100?{width:`${g}%`}:{}});return(g,C)=>(n(),t("div",{class:f(["colby-image-block",{"flex justify-center":e.alignCenter}])},[y("figure",{class:"inline-block",style:I(h.value)},[e.image?(n(),t("img",{key:0,src:e.image.url,alt:e.image.alt,class:"w-full"},null,8,B)):e.imagePath?(n(),t("img",{key:1,src:e.imagePath,class:"w-full"},null,8,T)):p("",!0),e.caption?(n(),t("figcaption",v,x(e.caption),1)):p("",!0)],4)],2))}};u.__docgenInfo={exportName:"default",displayName:"Image",description:"",tags:{},props:[{name:"image",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"imagePath",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"imageScale",type:{name:"string"},defaultValue:{func:!1,value:'"100"'}},{name:"caption",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"alignCenter",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Image/Image.vue"]};const{expect:a}=__STORYBOOK_MODULE_TEST__,w={title:"Core Components/Image",component:u,tags:["autodocs"],argTypes:{imageScale:{control:"select",options:["100","75","50","25"]}}},c={name:"Default",args:{image:{url:"https://placehold.co/800x500",alt:"Placeholder image"},caption:"An example image caption"},play:async({canvas:e})=>{await a(e.getByText("An example image caption")).toBeInTheDocument()}},l={name:"75% Scale",args:{image:{url:"https://placehold.co/800x500",alt:"Placeholder image"},imageScale:"75",caption:"Image at 75% scale"},play:async({canvas:e})=>{await a(e.getByText("Image at 75% scale")).toBeInTheDocument()}},o={name:"50% Scale",args:{image:{url:"https://placehold.co/800x500",alt:"Placeholder image"},imageScale:"50",caption:"Image at 50% scale"},play:async({canvas:e})=>{await a(e.getByText("Image at 50% scale")).toBeInTheDocument()}},s={name:"Centered",args:{image:{url:"https://placehold.co/800x500",alt:"Placeholder image"},imageScale:"50",alignCenter:!0,caption:"Centered image at 50% scale"},play:async({canvas:e})=>{await a(e.getByText("Centered image at 50% scale")).toBeInTheDocument()}},r={name:"With Image Path",args:{imagePath:"https://placehold.co/800x500",caption:"Image loaded via path"},play:async({canvas:e})=>{await a(e.getByText("Image loaded via path")).toBeInTheDocument()}},m={name:"25% Scale",args:{image:{url:"https://placehold.co/800x500",alt:"Placeholder image"},imageScale:"25",caption:"Image at 25% scale"},play:async({canvas:e})=>{await a(e.getByText("Image at 25% scale")).toBeInTheDocument()}},i={name:"No Caption",args:{image:{url:"https://placehold.co/800x500",alt:"No caption image"}},play:async({canvas:e})=>{await a(e.getByAltText("No caption image")).toBeInTheDocument()}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    image: {
      url: "https://placehold.co/800x500",
      alt: "Placeholder image"
    },
    caption: "An example image caption"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("An example image caption")).toBeInTheDocument();
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "75% Scale",
  args: {
    image: {
      url: "https://placehold.co/800x500",
      alt: "Placeholder image"
    },
    imageScale: "75",
    caption: "Image at 75% scale"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Image at 75% scale")).toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "50% Scale",
  args: {
    image: {
      url: "https://placehold.co/800x500",
      alt: "Placeholder image"
    },
    imageScale: "50",
    caption: "Image at 50% scale"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Image at 50% scale")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Centered",
  args: {
    image: {
      url: "https://placehold.co/800x500",
      alt: "Placeholder image"
    },
    imageScale: "50",
    alignCenter: true,
    caption: "Centered image at 50% scale"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Centered image at 50% scale")).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "With Image Path",
  args: {
    imagePath: "https://placehold.co/800x500",
    caption: "Image loaded via path"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Image loaded via path")).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "25% Scale",
  args: {
    image: {
      url: "https://placehold.co/800x500",
      alt: "Placeholder image"
    },
    imageScale: "25",
    caption: "Image at 25% scale"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Image at 25% scale")).toBeInTheDocument();
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "No Caption",
  args: {
    image: {
      url: "https://placehold.co/800x500",
      alt: "No caption image"
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByAltText("No caption image")).toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};const N=["Default","Scaled75","Scaled50","Centered","WithPath","Scaled25","NoCaption"];export{s as Centered,c as Default,i as NoCaption,m as Scaled25,o as Scaled50,l as Scaled75,r as WithPath,N as __namedExportsOrder,w as default};
