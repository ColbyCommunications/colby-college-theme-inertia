import{c as m,a,e as u,t as o,h as d,q as g,s as p,d as i}from"./iframe-7hMrkyzV.js";import{_ as h}from"./Picture-CuW9RLEn.js";import{_ as f}from"./ButtonGroup-CsAcoAIN.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BdYe4hLK.js";const x={class:"full-bleed-image relative !max-w-full"},y={class:"relative full-bleed-image__image lg:h-[calc(100vh_-_100px)] overflow-hidden"},b={class:"full-bleed-image__context md:absolute right-0 bottom-0 md:w-[520px] md:max-w-[50%] py-8 px-10 bg-indigo-200 space-y-4"},_={class:"font-extended font-bold text-14 leading-130 text-azure tracking-8 uppercase"},B={class:"font-body font-normal text-16 leading-130 text-indigo-800 !mt-2"},l={__name:"FullBleedImage",props:{heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]},image:{type:Object,default:()=>({})}},setup(e){const n=e,r=p(()=>n.buttons.map(t=>({button:{url:t.url,title:t.title,target:t.target||""}})));return(t,v)=>(i(),m("div",x,[a("div",y,[u(h,{class:"w-full h-full object-cover",src:e.image.src,srcset:e.image.srcset,"size-desktop":e.image.sizes?.Hero,"size-mobile":e.image.sizes?.Square,alt:e.image.alt},null,8,["src","srcset","size-desktop","size-mobile","alt"])]),a("div",b,[a("h2",_,o(e.heading),1),a("p",B,o(e.paragraph),1),e.buttons&&e.buttons.length?(i(),d(f,{key:0,size:"medium",items:r.value},null,8,["items"])):g("",!0)])]))}};l.__docgenInfo=Object.assign({displayName:l.name??l.__name},{exportName:"default",displayName:"FullBleedImage",description:"",tags:{},props:[{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"image",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/FullBleedImage/FullBleedImage.vue"]});const{expect:c}=__STORYBOOK_MODULE_TEST__,I={title:"Core Components/Full Bleed Image",component:l,tags:["autodocs"]},s={name:"Default",args:{heading:"Areas of Distinction",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",buttons:[{url:"#",title:"Areas of Distinction"}],image:{srcset:"https://placehold.co/1280x700",src:"https://placehold.co/480x480",alt:"Placeholder image",sizes:{Hero:"https://placehold.co/1280x700",Square:"https://placehold.co/480x480"}}},play:async({canvas:e})=>{const n=e.getAllByText("Areas of Distinction");await c(n.length).toBeGreaterThanOrEqual(1),await c(e.getByAltText("Placeholder image")).toBeInTheDocument()}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const O=["Default"];export{s as Default,O as __namedExportsOrder,I as default};
