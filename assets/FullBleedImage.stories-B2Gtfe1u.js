import{l as r,c as m,a,e as u,h as d,m as p,t as s,d as o}from"./iframe-BI_3ezP0.js";import{_ as g}from"./Picture-DioVXFI5.js";import{_ as h}from"./ButtonGroup-DeTJD12j.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-e0IECFmJ.js";const f={class:"full-bleed-image relative !max-w-full"},x={class:"relative full-bleed-image__image lg:h-[calc(100vh_-_100px)] overflow-hidden"},b={class:"full-bleed-image__context md:absolute right-0 bottom-0 md:w-[520px] md:max-w-[50%] py-8 px-10 bg-indigo-200 space-y-4"},y={class:"font-extended font-bold text-14 leading-130 text-azure tracking-8 uppercase"},v={class:"font-body font-normal text-16 leading-130 text-indigo-800 !mt-2"},n={__name:"FullBleedImage",props:{heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]},image:{type:Object,default:()=>({})}},setup(e){const i=e,c=r(()=>i.buttons.map(t=>({button:{url:t.url,title:t.title,target:t.target||""}})));return(t,_)=>(o(),m("div",f,[a("div",x,[u(g,{class:"w-full h-full object-cover",src:e.image.src,srcset:e.image.srcset,"size-desktop":e.image.sizes?.Hero,"size-mobile":e.image.sizes?.Square,alt:e.image.alt},null,8,["src","srcset","size-desktop","size-mobile","alt"])]),a("div",b,[a("h2",y,s(e.heading),1),a("p",v,s(e.paragraph),1),e.buttons&&e.buttons.length?(o(),d(h,{key:0,size:"medium",items:c.value},null,8,["items"])):p("",!0)])]))}};n.__docgenInfo={exportName:"default",displayName:"FullBleedImage",description:"",tags:{},props:[{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"image",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/FullBleedImage/FullBleedImage.vue"]};const F={title:"Core Components/Full Bleed Image",component:n,tags:["autodocs"]},l={name:"Default",args:{heading:"Areas of Distinction",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",buttons:[{url:"#",title:"Areas of Distinction"}],image:{srcset:"https://placehold.co/1280x700",src:"https://placehold.co/480x480",alt:"Placeholder image",sizes:{Hero:"https://placehold.co/1280x700",Square:"https://placehold.co/480x480"}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    heading: "Areas of Distinction",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",
    buttons: [{
      url: "#",
      title: "Areas of Distinction"
    }],
    image: {
      srcset: "https://placehold.co/1280x700",
      src: "https://placehold.co/480x480",
      alt: "Placeholder image",
      sizes: {
        Hero: "https://placehold.co/1280x700",
        Square: "https://placehold.co/480x480"
      }
    }
  }
}`,...l.parameters?.docs?.source}}};const N=["Default"];export{l as Default,N as __namedExportsOrder,F as default};
