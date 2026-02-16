import{l as c,c as d,a as s,e as o,n as l,d as g}from"./iframe-BI_3ezP0.js";import{_ as p}from"./Context-rCALFtqQ.js";import{_ as f}from"./Picture-DioVXFI5.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-8rV2ZAMN.js";import"./ButtonGroup-DeTJD12j.js";import"./Button-e0IECFmJ.js";const h={class:"hw-image-section__image relative md:w-1/2"},i={__name:"HwImageSection",props:{type:{type:String,default:"dark"},size:{type:String,default:"medium"},hero:{type:Boolean,default:!1},reverse:{type:Boolean,default:!1},imageOrientation:{type:String,default:"Square"},subheading:{type:String,default:""},heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]},image:{type:Object,default:()=>({})}},setup(e){const u=e,m=c(()=>u.buttons.map(t=>({button:{url:t.url,title:t.title,target:t.target||""}})));return(t,y)=>(g(),d("div",{class:l(["hw-image-section full-bleed md:flex [&+.hw-image-section]:mt-0",e.type==="light"?"bg-indigo":"bg-indigo-100"])},[s("div",h,[o(f,{class:"w-full min-h-full object-cover",src:e.image.src,srcset:e.image.srcset,"size-desktop":e.imageOrientation==="Rectangle"?e.image.sizes?.Hero:e.image.sizes?.Square,"size-mobile":e.image.sizes?.Square,alt:e.image.alt},null,8,["src","srcset","size-desktop","size-mobile","alt"])]),s("div",{class:l(["hw-image-section__context flex justify-center items-center md:w-1/2 py-9 md:py-12 px-9 md:px-12 lg:px-24",{"md:-order-1":e.reverse}])},[o(p,{hero:e.hero,type:e.type,size:e.size||"medium",subheading:e.subheading,heading:e.heading,paragraph:e.paragraph,buttons:{items:m.value}},null,8,["hero","type","size","subheading","heading","paragraph","buttons"])],2)],2))}};i.__docgenInfo={exportName:"default",displayName:"HwImageSection",description:"",tags:{},props:[{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"dark"'}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'}},{name:"hero",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"reverse",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"imageOrientation",type:{name:"string"},defaultValue:{func:!1,value:'"Square"'}},{name:"subheading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"image",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/HwImageSection/HwImageSection.vue"]};const k={title:"Core Components/Half Width Image Section",component:i,tags:["autodocs"],argTypes:{type:{control:"select",options:["dark","light"]}}},a={name:"Default",args:{heading:"Majors and Minors",paragraph:"Choose from 56 majors and 35 minors, or design your own independent major. You'll have extensive flexibility and valuable guidance when it comes to preparing for your future.",buttons:[{url:"#",title:"Majors and Minor at Colby"}],image:{srcset:"https://placehold.co/760x430",src:"https://placehold.co/480x480",alt:"Placeholder image",sizes:{Hero:"https://placehold.co/760x430",Square:"https://placehold.co/480x480"}}}},n={name:"Reverse",args:{...a.args,reverse:!0}},r={name:"Light (Dark Background)",args:{...a.args,type:"light"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    heading: "Majors and Minors",
    paragraph: "Choose from 56 majors and 35 minors, or design your own independent major. You'll have extensive flexibility and valuable guidance when it comes to preparing for your future.",
    buttons: [{
      url: "#",
      title: "Majors and Minor at Colby"
    }],
    image: {
      srcset: "https://placehold.co/760x430",
      src: "https://placehold.co/480x480",
      alt: "Placeholder image",
      sizes: {
        Hero: "https://placehold.co/760x430",
        Square: "https://placehold.co/480x480"
      }
    }
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Reverse",
  args: {
    ...Default.args,
    reverse: true
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Light (Dark Background)",
  args: {
    ...Default.args,
    type: "light"
  }
}`,...r.parameters?.docs?.source}}};const V=["Default","Reverse","Light"];export{a as Default,r as Light,n as Reverse,V as __namedExportsOrder,k as default};
