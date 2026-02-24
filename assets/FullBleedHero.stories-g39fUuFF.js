import{c,a as m,e as u,n as o,t as f,m as g,l as x,d as p}from"./iframe-BfBFAde5.js";import{_ as B}from"./Context-Dp7yX81d.js";import{_ as b}from"./Picture-CxKtrm5G.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-T77HtXsG.js";import"./ButtonGroup-DeVPz35K.js";import"./Button-u50yI3p6.js";const T={class:"full-bleed-hero__inner grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"},v={class:"full-bleed-hero__context md:col-span-8 md:col-start-3"},d={__name:"FullBleedHero",props:{type:{type:String,default:"dark"},hero:{type:Boolean,default:!1},subheading:{type:String,default:""},heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]},image:{type:Object,default:null}},setup(e){const h=e,y=x(()=>h.buttons.map(n=>({button:{url:n.url,title:n.title,target:n.target||""}})));return(n,w)=>(p(),c("div",{class:o(["full-bleed-hero py-24 relative bg-cover bg-center !max-w-full",e.type==="dark"?"bg-bluemarble__pattern":"bg-marble__pattern"])},[m("div",T,[m("div",v,[u(B,{hero:e.hero,size:"large",type:e.type==="dark"?"light":"dark",subheading:e.subheading,heading:e.heading,paragraph:e.paragraph,buttons:{items:y.value},align:"center"},null,8,["hero","type","subheading","heading","paragraph","buttons"])]),e.image?(p(),c("div",{key:0,class:o(["full-bleed-hero__main",e.type==="light"?"md:col-span-10 md:col-start-2":"md:col-span-8 md:col-start-3"])},[m("div",{class:o(["full-bleed-hero__image relative pb-[100%] mt-16",e.type==="dark"?"md:pb-[44.79166666666667%]":"md:pb-[56.578947368421055%]"])},[u(b,{class:"absolute w-full h-full object-cover",src:e.image.src,srcset:e.image.srcset,"size-desktop":e.image.sizes?.Hero,"size-mobile":e.image.sizes?.Rectangle,alt:e.image.alt},null,8,["src","srcset","size-desktop","size-mobile","alt"])],2),e.image.caption?(p(),c("p",{key:0,class:o(["hero__caption font-body font-normal text-12 leading-140 mt-2",e.type==="light"?"text-gray-800":"text-white"])},f(e.image.caption),3)):g("",!0)],2)):g("",!0)])],2))}};d.__docgenInfo={exportName:"default",displayName:"FullBleedHero",description:"",tags:{},props:[{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"dark"'}},{name:"hero",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"subheading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"image",type:{name:"object"},defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/FullBleedHero/FullBleedHero.vue"]};const{expect:t}=__STORYBOOK_MODULE_TEST__,z={title:"Core Components/Full Bleed Hero",component:d,tags:["autodocs"],argTypes:{type:{control:"select",options:["dark","light"]}}},a={name:"Dark",args:{type:"dark",subheading:"Lorem ipsum",heading:"Lorem ipsum dolor sit amet",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",image:{src:"https://placehold.co/480x480",srcset:"https://placehold.co/1280x700",alt:"Placeholder image",sizes:{Hero:"https://placehold.co/1280x700",Rectangle:"https://placehold.co/480x480"}}},play:async({canvas:e})=>{await t(e.getByText("Lorem ipsum")).toBeInTheDocument(),await t(e.getByText("Lorem ipsum dolor sit amet")).toBeInTheDocument(),await t(e.getByAltText("Placeholder image")).toBeInTheDocument()}},r={name:"Light",args:{...a.args,type:"light"},play:async({canvas:e})=>{await t(e.getByText("Lorem ipsum dolor sit amet")).toBeInTheDocument()}},s={name:"With Buttons",args:{...a.args,buttons:[{url:"#apply",title:"Apply Now",target:"_blank"},{url:"#info",title:"Learn More",target:""}]},play:async({canvas:e})=>{await t(e.getByText("Apply Now")).toBeInTheDocument(),await t(e.getByText("Learn More")).toBeInTheDocument()}},l={name:"With Image Caption",args:{...a.args,image:{...a.args.image,caption:"Colby College campus in winter"}},play:async({canvas:e})=>{await t(e.getByText("Colby College campus in winter")).toBeInTheDocument()}},i={name:"No Image",args:{type:"dark",heading:"Text Only",paragraph:"No image provided."},play:async({canvas:e})=>{await t(e.getByText("Text Only")).toBeInTheDocument()}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Dark",
  args: {
    type: "dark",
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum dolor sit amet",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",
    image: {
      src: "https://placehold.co/480x480",
      srcset: "https://placehold.co/1280x700",
      alt: "Placeholder image",
      sizes: {
        Hero: "https://placehold.co/1280x700",
        Rectangle: "https://placehold.co/480x480"
      }
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Lorem ipsum")).toBeInTheDocument();
    await expect(canvas.getByText("Lorem ipsum dolor sit amet")).toBeInTheDocument();
    await expect(canvas.getByAltText("Placeholder image")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Light",
  args: {
    ...Dark.args,
    type: "light"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Lorem ipsum dolor sit amet")).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "With Buttons",
  args: {
    ...Dark.args,
    buttons: [{
      url: "#apply",
      title: "Apply Now",
      target: "_blank"
    }, {
      url: "#info",
      title: "Learn More",
      target: ""
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Apply Now")).toBeInTheDocument();
    await expect(canvas.getByText("Learn More")).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "With Image Caption",
  args: {
    ...Dark.args,
    image: {
      ...Dark.args.image,
      caption: "Colby College campus in winter"
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Colby College campus in winter")).toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "No Image",
  args: {
    type: "dark",
    heading: "Text Only",
    paragraph: "No image provided."
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Text Only")).toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};const O=["Dark","Light","WithButtons","WithCaption","NoImage"];export{a as Dark,r as Light,i as NoImage,s as WithButtons,l as WithCaption,O as __namedExportsOrder,z as default};
