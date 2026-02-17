import{c as a,a as p,m,t as d,j as h,n as f,l as S,d as t}from"./iframe-smcTNgWJ.js";import"./preload-helper-PPVm8Dsz.js";const y=["src","alt"],x=["src"],P={key:2,class:"text-center text-indigo text-12 pt-2"},i={__name:"Image",props:{image:{type:Object,default:null},imagePath:{type:String,default:""},imageScale:{type:String,default:"100"},caption:{type:String,default:""},alignCenter:{type:Boolean,default:!1}},setup(e){const g=e,u=S(()=>{const s=parseInt(g.imageScale)||100;return s<100?{width:`${s}%`}:{}});return(s,I)=>(t(),a("div",{class:f(["colby-image-block",{"flex justify-center":e.alignCenter}])},[p("figure",{class:"inline-block",style:h(u.value)},[e.image?(t(),a("img",{key:0,src:e.image.url,alt:e.image.alt,class:"w-full"},null,8,y)):e.imagePath?(t(),a("img",{key:1,src:e.imagePath,class:"w-full"},null,8,x)):m("",!0),e.caption?(t(),a("figcaption",P,d(e.caption),1)):m("",!0)],4)],2))}};i.__docgenInfo={exportName:"default",displayName:"Image",description:"",tags:{},props:[{name:"image",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"imagePath",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"imageScale",type:{name:"string"},defaultValue:{func:!1,value:'"100"'}},{name:"caption",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"alignCenter",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Image/Image.vue"]};const b={title:"Core Components/Image",component:i,tags:["autodocs"],argTypes:{imageScale:{control:"select",options:["100","75","50","25"]}}},l={name:"Default",args:{image:{url:"https://placehold.co/800x500",alt:"Placeholder image"},caption:"An example image caption"}},n={name:"75% Scale",args:{image:{url:"https://placehold.co/800x500",alt:"Placeholder image"},imageScale:"75",caption:"Image at 75% scale"}},c={name:"50% Scale",args:{image:{url:"https://placehold.co/800x500",alt:"Placeholder image"},imageScale:"50",caption:"Image at 50% scale"}},r={name:"Centered",args:{image:{url:"https://placehold.co/800x500",alt:"Placeholder image"},imageScale:"50",alignCenter:!0,caption:"Centered image at 50% scale"}},o={name:"With Image Path",args:{imagePath:"https://placehold.co/800x500",caption:"Image loaded via path"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    image: {
      url: "https://placehold.co/800x500",
      alt: "Placeholder image"
    },
    caption: "An example image caption"
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "75% Scale",
  args: {
    image: {
      url: "https://placehold.co/800x500",
      alt: "Placeholder image"
    },
    imageScale: "75",
    caption: "Image at 75% scale"
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "50% Scale",
  args: {
    image: {
      url: "https://placehold.co/800x500",
      alt: "Placeholder image"
    },
    imageScale: "50",
    caption: "Image at 50% scale"
  }
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Centered",
  args: {
    image: {
      url: "https://placehold.co/800x500",
      alt: "Placeholder image"
    },
    imageScale: "50",
    alignCenter: true,
    caption: "Centered image at 50% scale"
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "With Image Path",
  args: {
    imagePath: "https://placehold.co/800x500",
    caption: "Image loaded via path"
  }
}`,...o.parameters?.docs?.source}}};const k=["Default","Scaled75","Scaled50","Centered","WithPath"];export{r as Centered,l as Default,c as Scaled50,n as Scaled75,o as WithPath,k as __namedExportsOrder,b as default};
