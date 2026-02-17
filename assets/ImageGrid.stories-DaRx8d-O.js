import{c as n,F as h,r as b,d as o,n as p,a as y,e as O,t as q,m as x,l as z}from"./iframe-smcTNgWJ.js";import{_ as S}from"./Picture-DxrAmS_6.js";import"./preload-helper-PPVm8Dsz.js";const C={class:"image-grid grid grid-cols-8 gap-10 max-w-screen-2xl w-full mx-auto"},I={key:0,class:"hero__caption font-body font-normal text-12 text-indigo-800 leading-140 mt-2"},d={__name:"ImageGrid",props:{images:{type:Array,default:()=>[]},imageOrientation:{type:String,default:"square"}},setup(r){const t=r,u=z(()=>{switch(t.imageOrientation){case"landscape":return"pb-[69.04761904761905%] md:pb-[48.86363636363636%]";case"rectangle":return"pb-[69.04761904761905%]";case"portrait":return"pb-[152.63157894736844%]";default:return"pb-[100%]"}}),g=s=>{const e=s.image?.sizes||s.sizes||{};switch(t.imageOrientation){case"landscape":return e.Landscape||"";case"portrait":return e.Portrait||"";default:return e.Square||""}},f=s=>{const e=s.image?.sizes||s.sizes||{};switch(t.imageOrientation){case"landscape":return e.Landscape_mobile||"";case"portrait":return e.Portrait_mobile||"";default:return e.Square_mobile||""}};return(s,e)=>(o(),n("div",C,[(o(!0),n(h,null,b(r.images,(a,_)=>(o(),n("div",{key:_,class:p(["image-grid__item col-span-8",{"md:col-span-4":r.imageOrientation!=="landscape"}])},[y("div",{class:p(["image-grid__image relative",u.value])},[O(S,{class:"absolute w-full h-full object-cover",src:a.src,srcset:a.srcset,"size-desktop":g(a),"size-mobile":f(a),alt:a.alt},null,8,["src","srcset","size-desktop","size-mobile","alt"])],2),a.caption?(o(),n("p",I,q(a.caption),1)):x("",!0)],2))),128))]))}};d.__docgenInfo={exportName:"default",displayName:"ImageGrid",description:"",tags:{},props:[{name:"images",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"imageOrientation",type:{name:"string"},defaultValue:{func:!1,value:'"square"'}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/ImageGrid/ImageGrid.vue"]};const w={title:"Core Components/Image Grid",component:d,tags:["autodocs"],argTypes:{imageOrientation:{control:"select",options:["square","rectangle","portrait","landscape"]}}},l=[{srcset:"https://placehold.co/600x600",src:"https://placehold.co/600x600",alt:"Placeholder 1",caption:"Caption lorem ipsum dolor sit amet."},{srcset:"https://placehold.co/600x600",src:"https://placehold.co/600x600",alt:"Placeholder 2",caption:"Caption lorem ipsum dolor sit amet."}],i={name:"Square",args:{images:l,imageOrientation:"square"}},c={name:"Landscape",args:{images:[l[0]],imageOrientation:"landscape"}},m={name:"No Captions",args:{images:l.map(({caption:r,...t})=>t),imageOrientation:"square"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Square",
  args: {
    images: sampleImages,
    imageOrientation: "square"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Landscape",
  args: {
    images: [sampleImages[0]],
    imageOrientation: "landscape"
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "No Captions",
  args: {
    images: sampleImages.map(({
      caption,
      ...img
    }) => img),
    imageOrientation: "square"
  }
}`,...m.parameters?.docs?.source}}};const L=["Square","Landscape","NoCaptions"];export{c as Landscape,m as NoCaptions,i as Square,L as __namedExportsOrder,w as default};
