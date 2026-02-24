import{c as d,a as r,e as i,n as l,l as g,d as p}from"./iframe-BfBFAde5.js";import{_ as h}from"./Context-Dp7yX81d.js";import{_ as f}from"./Picture-CxKtrm5G.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-T77HtXsG.js";import"./ButtonGroup-DeVPz35K.js";import"./Button-u50yI3p6.js";const y={class:"hw-image-section__image relative md:w-1/2"},c={__name:"HwImageSection",props:{type:{type:String,default:"dark"},size:{type:String,default:"medium"},hero:{type:Boolean,default:!1},reverse:{type:Boolean,default:!1},imageOrientation:{type:String,default:"Square"},subheading:{type:String,default:""},heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]},image:{type:Object,default:()=>({})}},setup(e){const u=e,m=g(()=>u.buttons.map(n=>({button:{url:n.url,title:n.title,target:n.target||""}})));return(n,v)=>(p(),d("div",{class:l(["hw-image-section full-bleed md:flex [&+.hw-image-section]:mt-0",e.type==="light"?"bg-indigo":"bg-indigo-100"])},[r("div",y,[i(f,{class:"w-full min-h-full object-cover",src:e.image.src,srcset:e.image.srcset,"size-desktop":e.imageOrientation==="Rectangle"?e.image.sizes?.Hero:e.image.sizes?.Square,"size-mobile":e.image.sizes?.Square,alt:e.image.alt},null,8,["src","srcset","size-desktop","size-mobile","alt"])]),r("div",{class:l(["hw-image-section__context flex justify-center items-center md:w-1/2 py-9 md:py-12 px-9 md:px-12 lg:px-24",{"md:-order-1":e.reverse}])},[i(h,{hero:e.hero,type:e.type,size:e.size||"medium",subheading:e.subheading,heading:e.heading,paragraph:e.paragraph,buttons:{items:m.value}},null,8,["hero","type","size","subheading","heading","paragraph","buttons"])],2)],2))}};c.__docgenInfo={exportName:"default",displayName:"HwImageSection",description:"",tags:{},props:[{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"dark"'}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'}},{name:"hero",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"reverse",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"imageOrientation",type:{name:"string"},defaultValue:{func:!1,value:'"Square"'}},{name:"subheading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"image",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/HwImageSection/HwImageSection.vue"]};const{expect:t}=__STORYBOOK_MODULE_TEST__,j={title:"Core Components/Half Width Image Section",component:c,tags:["autodocs"],argTypes:{type:{control:"select",options:["dark","light"]}}},a={name:"Default",args:{heading:"Majors and Minors",paragraph:"Choose from 56 majors and 35 minors, or design your own independent major. You'll have extensive flexibility and valuable guidance when it comes to preparing for your future.",buttons:[{url:"#",title:"Majors and Minor at Colby"}],image:{srcset:"https://placehold.co/760x430",src:"https://placehold.co/480x480",alt:"Placeholder image",sizes:{Hero:"https://placehold.co/760x430",Square:"https://placehold.co/480x480"}}},play:async({canvas:e})=>{await t(e.getByText("Majors and Minors")).toBeInTheDocument(),await t(e.getByText("Majors and Minor at Colby")).toBeInTheDocument(),await t(e.getByAltText("Placeholder image")).toBeInTheDocument()}},s={name:"Reverse",args:{...a.args,reverse:!0},play:async({canvas:e})=>{await t(e.getByText("Majors and Minors")).toBeInTheDocument()}},o={name:"Light (Dark Background)",args:{...a.args,type:"light"},play:async({canvas:e})=>{await t(e.getByText("Majors and Minors")).toBeInTheDocument()}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Majors and Minors")).toBeInTheDocument();
    await expect(canvas.getByText("Majors and Minor at Colby")).toBeInTheDocument();
    await expect(canvas.getByAltText("Placeholder image")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Reverse",
  args: {
    ...Default.args,
    reverse: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Majors and Minors")).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Light (Dark Background)",
  args: {
    ...Default.args,
    type: "light"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Majors and Minors")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};const D=["Default","Reverse","Light"];export{a as Default,o as Light,s as Reverse,D as __namedExportsOrder,j as default};
