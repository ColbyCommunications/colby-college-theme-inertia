import{c,F as _,r as I,d as i,n as u,a as f,e as O,t as P,m as w,l as v}from"./iframe-BfBFAde5.js";import{_ as S}from"./Picture-CxKtrm5G.js";import"./preload-helper-PPVm8Dsz.js";const b={class:"image-grid grid grid-cols-8 gap-10 max-w-screen-2xl w-full mx-auto"},D={key:0,class:"hero__caption font-body font-normal text-12 text-indigo-800 leading-140 mt-2"},h={__name:"ImageGrid",props:{images:{type:Array,default:()=>[]},imageOrientation:{type:String,default:"square"}},setup(e){const r=e,y=v(()=>{switch(r.imageOrientation){case"landscape":return"pb-[69.04761904761905%] md:pb-[48.86363636363636%]";case"rectangle":return"pb-[69.04761904761905%]";case"portrait":return"pb-[152.63157894736844%]";default:return"pb-[100%]"}}),x=s=>{const a=s.image?.sizes||s.sizes||{};switch(r.imageOrientation){case"landscape":return a.Landscape||"";case"portrait":return a.Portrait||"";default:return a.Square||""}},B=s=>{const a=s.image?.sizes||s.sizes||{};switch(r.imageOrientation){case"landscape":return a.Landscape_mobile||"";case"portrait":return a.Portrait_mobile||"";default:return a.Square_mobile||""}};return(s,a)=>(i(),c("div",b,[(i(!0),c(_,null,I(e.images,(t,T)=>(i(),c("div",{key:T,class:u(["image-grid__item col-span-8",{"md:col-span-4":e.imageOrientation!=="landscape"}])},[f("div",{class:u(["image-grid__image relative",y.value])},[O(S,{class:"absolute w-full h-full object-cover",src:t.src,srcset:t.srcset,"size-desktop":x(t),"size-mobile":B(t),alt:t.alt},null,8,["src","srcset","size-desktop","size-mobile","alt"])],2),t.caption?(i(),c("p",D,P(t.caption),1)):w("",!0)],2))),128))]))}};h.__docgenInfo={exportName:"default",displayName:"ImageGrid",description:"",tags:{},props:[{name:"images",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"imageOrientation",type:{name:"string"},defaultValue:{func:!1,value:'"square"'}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/ImageGrid/ImageGrid.vue"]};const{expect:n}=__STORYBOOK_MODULE_TEST__,C={title:"Core Components/Image Grid",component:h,tags:["autodocs"],argTypes:{imageOrientation:{control:"select",options:["square","rectangle","portrait","landscape"]}}},o=[{srcset:"https://placehold.co/600x600",src:"https://placehold.co/600x600",alt:"Placeholder 1",caption:"Caption lorem ipsum dolor sit amet."},{srcset:"https://placehold.co/600x600",src:"https://placehold.co/600x600",alt:"Placeholder 2",caption:"Caption lorem ipsum dolor sit amet."}],l={name:"Square",args:{images:o,imageOrientation:"square"},play:async({canvas:e})=>{await n(e.getByAltText("Placeholder 1")).toBeInTheDocument(),await n(e.getByAltText("Placeholder 2")).toBeInTheDocument()}},m={name:"Landscape",args:{images:[o[0]],imageOrientation:"landscape"},play:async({canvas:e})=>{await n(e.getByAltText("Placeholder 1")).toBeInTheDocument()}},p={name:"No Captions",args:{images:o.map(({caption:e,...r})=>r),imageOrientation:"square"},play:async({canvas:e})=>{await n(e.getByAltText("Placeholder 1")).toBeInTheDocument(),await n(e.getByAltText("Placeholder 2")).toBeInTheDocument()}},g={name:"Rectangle",args:{images:o,imageOrientation:"rectangle"},play:async({canvas:e})=>{await n(e.getByAltText("Placeholder 1")).toBeInTheDocument()}},d={name:"Portrait",args:{images:o,imageOrientation:"portrait"},play:async({canvas:e})=>{await n(e.getByAltText("Placeholder 1")).toBeInTheDocument()}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Square",
  args: {
    images: sampleImages,
    imageOrientation: "square"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByAltText("Placeholder 1")).toBeInTheDocument();
    await expect(canvas.getByAltText("Placeholder 2")).toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Landscape",
  args: {
    images: [sampleImages[0]],
    imageOrientation: "landscape"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByAltText("Placeholder 1")).toBeInTheDocument();
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "No Captions",
  args: {
    images: sampleImages.map(({
      caption,
      ...img
    }) => img),
    imageOrientation: "square"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByAltText("Placeholder 1")).toBeInTheDocument();
    await expect(canvas.getByAltText("Placeholder 2")).toBeInTheDocument();
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Rectangle",
  args: {
    images: sampleImages,
    imageOrientation: "rectangle"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByAltText("Placeholder 1")).toBeInTheDocument();
  }
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Portrait",
  args: {
    images: sampleImages,
    imageOrientation: "portrait"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByAltText("Placeholder 1")).toBeInTheDocument();
  }
}`,...d.parameters?.docs?.source}}};const N=["Square","Landscape","NoCaptions","Rectangle","Portrait"];export{m as Landscape,p as NoCaptions,d as Portrait,g as Rectangle,l as Square,N as __namedExportsOrder,C as default};
