import{l as g,c as s,a as n,m as i,e as c,n as l,t as p,d as o}from"./iframe-BI_3ezP0.js";import{_ as h}from"./Context-rCALFtqQ.js";import{_ as f}from"./Picture-DioVXFI5.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-8rV2ZAMN.js";import"./ButtonGroup-DeTJD12j.js";import"./Button-e0IECFmJ.js";const y={class:"full-bleed-hero__inner grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"},b={class:"full-bleed-hero__context md:col-span-8 md:col-start-3"},m={__name:"FullBleedHero",props:{type:{type:String,default:"dark"},hero:{type:Boolean,default:!1},subheading:{type:String,default:""},heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]},image:{type:Object,default:null}},setup(e){const u=e,d=g(()=>u.buttons.map(t=>({button:{url:t.url,title:t.title,target:t.target||""}})));return(t,x)=>(o(),s("div",{class:l(["full-bleed-hero py-24 relative bg-cover bg-center !max-w-full",e.type==="dark"?"bg-bluemarble__pattern":"bg-marble__pattern"])},[n("div",y,[n("div",b,[c(h,{hero:e.hero,size:"large",type:e.type==="dark"?"light":"dark",subheading:e.subheading,heading:e.heading,paragraph:e.paragraph,buttons:{items:d.value},align:"center"},null,8,["hero","type","subheading","heading","paragraph","buttons"])]),e.image?(o(),s("div",{key:0,class:l(["full-bleed-hero__main",e.type==="light"?"md:col-span-10 md:col-start-2":"md:col-span-8 md:col-start-3"])},[n("div",{class:l(["full-bleed-hero__image relative pb-[100%] mt-16",e.type==="dark"?"md:pb-[44.79166666666667%]":"md:pb-[56.578947368421055%]"])},[c(f,{class:"absolute w-full h-full object-cover",src:e.image.src,srcset:e.image.srcset,"size-desktop":e.image.sizes?.Hero,"size-mobile":e.image.sizes?.Rectangle,alt:e.image.alt},null,8,["src","srcset","size-desktop","size-mobile","alt"])],2),e.image.caption?(o(),s("p",{key:0,class:l(["hero__caption font-body font-normal text-12 leading-140 mt-2",e.type==="light"?"text-gray-800":"text-white"])},p(e.image.caption),3)):i("",!0)],2)):i("",!0)])],2))}};m.__docgenInfo={exportName:"default",displayName:"FullBleedHero",description:"",tags:{},props:[{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"dark"'}},{name:"hero",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"subheading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"image",type:{name:"object"},defaultValue:{func:!1,value:"null"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/FullBleedHero/FullBleedHero.vue"]};const F={title:"Core Components/Full Bleed Hero",component:m,tags:["autodocs"],argTypes:{type:{control:"select",options:["dark","light"]}}},a={name:"Dark",args:{type:"dark",subheading:"Lorem ipsum",heading:"Lorem ipsum dolor sit amet",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",image:{src:"https://placehold.co/480x480",srcset:"https://placehold.co/1280x700",alt:"Placeholder image",sizes:{Hero:"https://placehold.co/1280x700",Rectangle:"https://placehold.co/480x480"}}}},r={name:"Light",args:{...a.args,type:"light"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Light",
  args: {
    ...Dark.args,
    type: "light"
  }
}`,...r.parameters?.docs?.source}}};const N=["Dark","Light"];export{a as Dark,r as Light,N as __namedExportsOrder,F as default};
