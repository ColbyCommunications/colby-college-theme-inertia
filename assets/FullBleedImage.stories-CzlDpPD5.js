import{c as m,a,e as u,t as n,h as d,m as g,l as p,d as o}from"./iframe-BfBFAde5.js";import{_ as h}from"./Picture-CxKtrm5G.js";import{_ as f}from"./ButtonGroup-DeVPz35K.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-u50yI3p6.js";const x={class:"full-bleed-image relative !max-w-full"},y={class:"relative full-bleed-image__image lg:h-[calc(100vh_-_100px)] overflow-hidden"},b={class:"full-bleed-image__context md:absolute right-0 bottom-0 md:w-[520px] md:max-w-[50%] py-8 px-10 bg-indigo-200 space-y-4"},_={class:"font-extended font-bold text-14 leading-130 text-azure tracking-8 uppercase"},B={class:"font-body font-normal text-16 leading-130 text-indigo-800 !mt-2"},c={__name:"FullBleedImage",props:{heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]},image:{type:Object,default:()=>({})}},setup(e){const s=e,r=p(()=>s.buttons.map(t=>({button:{url:t.url,title:t.title,target:t.target||""}})));return(t,v)=>(o(),m("div",x,[a("div",y,[u(h,{class:"w-full h-full object-cover",src:e.image.src,srcset:e.image.srcset,"size-desktop":e.image.sizes?.Hero,"size-mobile":e.image.sizes?.Square,alt:e.image.alt},null,8,["src","srcset","size-desktop","size-mobile","alt"])]),a("div",b,[a("h2",_,n(e.heading),1),a("p",B,n(e.paragraph),1),e.buttons&&e.buttons.length?(o(),d(f,{key:0,size:"medium",items:r.value},null,8,["items"])):g("",!0)])]))}};c.__docgenInfo={exportName:"default",displayName:"FullBleedImage",description:"",tags:{},props:[{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"image",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/FullBleedImage/FullBleedImage.vue"]};const{expect:i}=__STORYBOOK_MODULE_TEST__,I={title:"Core Components/Full Bleed Image",component:c,tags:["autodocs"]},l={name:"Default",args:{heading:"Areas of Distinction",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",buttons:[{url:"#",title:"Areas of Distinction"}],image:{srcset:"https://placehold.co/1280x700",src:"https://placehold.co/480x480",alt:"Placeholder image",sizes:{Hero:"https://placehold.co/1280x700",Square:"https://placehold.co/480x480"}}},play:async({canvas:e})=>{const s=e.getAllByText("Areas of Distinction");await i(s.length).toBeGreaterThanOrEqual(1),await i(e.getByAltText("Placeholder image")).toBeInTheDocument()}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvas
  }) => {
    // "Areas of Distinction" appears in both the heading and button, so use getAllByText
    const elements = canvas.getAllByText("Areas of Distinction");
    await expect(elements.length).toBeGreaterThanOrEqual(1);
    await expect(canvas.getByAltText("Placeholder image")).toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source}}};const S=["Default"];export{l as Default,S as __namedExportsOrder,I as default};
