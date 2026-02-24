import{o as M,k as A,u as L,c as n,a as o,F as p,r as N,e as y,t as d,m as l,n as k,h as _,b as C,d as a}from"./iframe-BfBFAde5.js";import{G as P}from"./glide.esm-YJcNIzYu.js";import{_ as D}from"./Picture-CxKtrm5G.js";import{_ as z}from"./ButtonGroup-DeVPz35K.js";import{_ as I}from"./Icon-BG0snce_.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-u50yI3p6.js";const V={class:"media-aside max-w-screen-2xl w-full my-0 mx-auto"},F={class:"media-aside__inner md:grid md:grid-cols-12 gap-10"},E={class:"media-aside__main md:col-span-9"},j={class:"media-aside__window","data-glide-window":""},O={class:"glide__track","data-glide-el":"track"},$={class:"glide__slides"},J={key:0,class:"media-aside__caption font-body font-normal text-12 text-indigo-800 leading-140 mt-2"},q={class:"media-aside__image"},G={key:0,class:"media-aside__caption font-body font-normal text-12 text-indigo-800 leading-140 mt-2"},U={class:"relative h-44 md:h-auto"},W={key:0,class:"font-body font-bold text-16 leading-130 text-indigo"},K={key:1,class:"font-body font-normal text-12 leading-140 text-indigo"},Y={class:"inline-flex self-end gap-4 md:pb-6"},H={key:0,class:"font-body font-bold text-16 leading-130 text-indigo"},Q={key:1,class:"font-body font-normal text-12 leading-140 text-indigo"},R={__name:"MediaAside",props:{carousel:{type:Boolean,default:!1},image:{type:Object,default:null},heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]},items:{type:Array,default:()=>[]}},setup(e){const u=e,m=C(0),g=C(null);let i=null;const B=c=>c.map(s=>({button:{url:s.url,title:s.title,target:s.target||""}})),T=c=>{i&&i.go(c==="next"?">":"<")};return M(async()=>{if(!u.carousel)return;await A();const c=g.value?.querySelector("[data-glide-window]");c&&(i=new P(c,{type:"carousel",gap:0,animationDuration:600,autoplay:!1,perView:1}),i.on("run",()=>{m.value=i.index}),i.mount())}),L(()=>{i&&i.destroy()}),(c,s)=>(a(),n("div",V,[o("div",F,[o("div",E,[e.carousel?(a(),n("div",{key:0,ref_key:"glideEl",ref:g},[o("div",j,[o("div",O,[o("div",$,[(a(!0),n(p,null,N(e.items,(t,h)=>(a(),n("div",{key:h,class:"media-aside__slide glide__slide"},[y(D,{class:"w-full object-cover",src:t.image?.src,srcset:t.image?.srcset,"size-desktop":t.image?.sizes?.Landscape,"size-mobile":t.image?.sizes?.Square,alt:t.image?.alt},null,8,["src","srcset","size-desktop","size-mobile","alt"]),t.image?.caption?(a(),n("p",J,d(t.image.caption),1)):l("",!0)]))),128))])])])],512)):(a(),n(p,{key:1},[o("div",q,[y(D,{class:"w-full object-cover",src:e.image?.src,srcset:e.image?.srcset,"size-desktop":e.image?.sizes?.Landscape,"size-mobile":e.image?.sizes?.Square,alt:e.image?.alt},null,8,["src","srcset","size-desktop","size-mobile","alt"])]),e.image?.caption?(a(),n("p",G,d(e.image.caption),1)):l("",!0)],64))]),o("div",{class:k(["media-aside__aside md:col-span-3 space-y-2 mt-8 md:mt-0",{grid:e.carousel}])},[e.carousel?(a(),n(p,{key:0},[o("div",U,[(a(!0),n(p,null,N(e.items,(t,h)=>(a(),n("div",{key:h,class:k(["media-aside__context-wrap absolute top-0 left-0 w-full invisible opacity-0 translate-y-[60px] grid space-y-2 transition-all duration-300 ease-in-out",{"!visible !opacity-100 !translate-y-0":m.value===h}])},[t.heading?(a(),n("h2",W,d(t.heading),1)):l("",!0),t.paragraph?(a(),n("p",K,d(t.paragraph),1)):l("",!0),t.buttons&&t.buttons.length?(a(),_(z,{key:2,size:"large",items:B(t.buttons)},null,8,["items"])):l("",!0)],2))),128))]),o("div",Y,[o("button",{class:"inline-flex items-center justify-center w-10 h-8 bg-indigo-100 hover:bg-indigo-200 focus:bg-indigo-200 rounded border border-solid border-indigo-300 transition-all duration-200 ease-in-out",onClick:s[0]||(s[0]=t=>T("prev"))},[s[2]||(s[2]=o("span",{class:"sr-only"},"Previous",-1)),y(I,{name:"chevron",class:"fill-azure w-1.5"})]),o("button",{class:"inline-flex items-center justify-center w-10 h-8 bg-indigo-100 hover:bg-indigo-200 focus:bg-indigo-200 rounded border border-solid border-indigo-300 transition-all duration-200 ease-in-out",onClick:s[1]||(s[1]=t=>T("next"))},[s[3]||(s[3]=o("span",{class:"sr-only"},"Next",-1)),y(I,{name:"chevron",class:"rotate-180 fill-azure w-1.5"})])])],64)):(a(),n(p,{key:1},[e.heading?(a(),n("h2",H,d(e.heading),1)):l("",!0),e.paragraph?(a(),n("p",Q,d(e.paragraph),1)):l("",!0),e.buttons&&e.buttons.length?(a(),_(z,{key:2,size:"large",items:B(e.buttons)},null,8,["items"])):l("",!0)],64))],2)])]))}};R.__docgenInfo={exportName:"default",displayName:"MediaAside",description:"",tags:{},props:[{name:"carousel",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"image",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/MediaAside/MediaAside.vue"]};const{expect:r}=__STORYBOOK_MODULE_TEST__,se={title:"Core Components/Media Aside",component:R,tags:["autodocs"]},x={name:"Static",args:{image:{srcset:"https://placehold.co/900x430",src:"https://placehold.co/600x600",alt:"Placeholder image",caption:"Caption lorem ipsum dolor sit amet, consectetur adipiscing elit."},heading:"Lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit.",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus felis, interdum vel lorem vitae, imperdiet commodo nisi.",buttons:[{url:"#",title:"Read Story"}]},play:async({canvas:e})=>{await r(e.getByAltText("Placeholder image")).toBeInTheDocument(),await r(e.getByText("Read Story")).toBeInTheDocument()}},f={name:"Carousel",args:{carousel:!0,items:[{image:{srcset:"https://placehold.co/900x430",src:"https://placehold.co/600x600",alt:"Slide 1",caption:"Caption for slide one."},heading:"Slide one heading",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",buttons:[{url:"#",title:"Read Story"}]},{image:{srcset:"https://placehold.co/900x430",src:"https://placehold.co/600x600",alt:"Slide 2",caption:"Caption for slide two."},heading:"Slide two heading",paragraph:"Donec lectus felis, interdum vel lorem vitae, imperdiet commodo nisi.",buttons:[{url:"#",title:"Read Story"}]},{image:{srcset:"https://placehold.co/900x430",src:"https://placehold.co/600x600",alt:"Slide 3",caption:"Caption for slide three."},heading:"Slide three heading",paragraph:"Donec nec blandit enim.",buttons:[{url:"#",title:"Read Story"}]}]},play:async({canvas:e})=>{await r(e.getByText("Slide one heading")).toBeInTheDocument()}},v={name:"Static No Caption",args:{image:{srcset:"https://placehold.co/900x430",src:"https://placehold.co/600x600",alt:"No caption image"},heading:"Static without caption",paragraph:"This variant has no image caption."},play:async({canvas:e})=>{await r(e.getByText("Static without caption")).toBeInTheDocument()}},b={name:"Carousel No Buttons",args:{carousel:!0,items:[{image:{srcset:"https://placehold.co/900x430",src:"https://placehold.co/600x600",alt:"Slide 1"},heading:"First slide without buttons",paragraph:"No buttons on this slide."},{image:{srcset:"https://placehold.co/900x430",src:"https://placehold.co/600x600",alt:"Slide 2"},heading:"Second slide without buttons",paragraph:"Also no buttons."}]},play:async({canvas:e})=>{await r(e.getByText("First slide without buttons")).toBeInTheDocument()}},S={name:"Carousel with Navigation",args:{carousel:!0,items:[{image:{srcset:"https://placehold.co/900x430",src:"https://placehold.co/600x600",alt:"Nav Slide 1",caption:"Caption for slide one."},heading:"Navigation slide one",paragraph:"First slide content.",buttons:[{url:"#",title:"Learn More"}]},{image:{srcset:"https://placehold.co/900x430",src:"https://placehold.co/600x600",alt:"Nav Slide 2"},heading:"Navigation slide two",paragraph:"Second slide content."}]},play:async({canvas:e,userEvent:u})=>{await r(e.getByText("Navigation slide one")).toBeInTheDocument();const m=e.getByText("Next");await u.click(m);const g=e.getByText("Previous");await u.click(g)}},w={name:"Static No Paragraph",args:{image:{srcset:"https://placehold.co/900x430",src:"https://placehold.co/600x600",alt:"Static no paragraph"},heading:"Just a heading",buttons:[{url:"#",title:"Read More"}]},play:async({canvas:e})=>{await r(e.getByText("Just a heading")).toBeInTheDocument(),await r(e.getByText("Read More")).toBeInTheDocument()}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Static",
  args: {
    image: {
      srcset: "https://placehold.co/900x430",
      src: "https://placehold.co/600x600",
      alt: "Placeholder image",
      caption: "Caption lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    heading: "Lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit.",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus felis, interdum vel lorem vitae, imperdiet commodo nisi.",
    buttons: [{
      url: "#",
      title: "Read Story"
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByAltText("Placeholder image")).toBeInTheDocument();
    await expect(canvas.getByText("Read Story")).toBeInTheDocument();
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Carousel",
  args: {
    carousel: true,
    items: [{
      image: {
        srcset: "https://placehold.co/900x430",
        src: "https://placehold.co/600x600",
        alt: "Slide 1",
        caption: "Caption for slide one."
      },
      heading: "Slide one heading",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttons: [{
        url: "#",
        title: "Read Story"
      }]
    }, {
      image: {
        srcset: "https://placehold.co/900x430",
        src: "https://placehold.co/600x600",
        alt: "Slide 2",
        caption: "Caption for slide two."
      },
      heading: "Slide two heading",
      paragraph: "Donec lectus felis, interdum vel lorem vitae, imperdiet commodo nisi.",
      buttons: [{
        url: "#",
        title: "Read Story"
      }]
    }, {
      image: {
        srcset: "https://placehold.co/900x430",
        src: "https://placehold.co/600x600",
        alt: "Slide 3",
        caption: "Caption for slide three."
      },
      heading: "Slide three heading",
      paragraph: "Donec nec blandit enim.",
      buttons: [{
        url: "#",
        title: "Read Story"
      }]
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Slide one heading")).toBeInTheDocument();
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Static No Caption",
  args: {
    image: {
      srcset: "https://placehold.co/900x430",
      src: "https://placehold.co/600x600",
      alt: "No caption image"
    },
    heading: "Static without caption",
    paragraph: "This variant has no image caption."
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Static without caption")).toBeInTheDocument();
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Carousel No Buttons",
  args: {
    carousel: true,
    items: [{
      image: {
        srcset: "https://placehold.co/900x430",
        src: "https://placehold.co/600x600",
        alt: "Slide 1"
      },
      heading: "First slide without buttons",
      paragraph: "No buttons on this slide."
    }, {
      image: {
        srcset: "https://placehold.co/900x430",
        src: "https://placehold.co/600x600",
        alt: "Slide 2"
      },
      heading: "Second slide without buttons",
      paragraph: "Also no buttons."
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("First slide without buttons")).toBeInTheDocument();
  }
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Carousel with Navigation",
  args: {
    carousel: true,
    items: [{
      image: {
        srcset: "https://placehold.co/900x430",
        src: "https://placehold.co/600x600",
        alt: "Nav Slide 1",
        caption: "Caption for slide one."
      },
      heading: "Navigation slide one",
      paragraph: "First slide content.",
      buttons: [{
        url: "#",
        title: "Learn More"
      }]
    }, {
      image: {
        srcset: "https://placehold.co/900x430",
        src: "https://placehold.co/600x600",
        alt: "Nav Slide 2"
      },
      heading: "Navigation slide two",
      paragraph: "Second slide content."
    }]
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await expect(canvas.getByText("Navigation slide one")).toBeInTheDocument();
    // Click next button
    const nextBtn = canvas.getByText("Next");
    await userEvent.click(nextBtn);
    // Click previous button
    const prevBtn = canvas.getByText("Previous");
    await userEvent.click(prevBtn);
  }
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Static No Paragraph",
  args: {
    image: {
      srcset: "https://placehold.co/900x430",
      src: "https://placehold.co/600x600",
      alt: "Static no paragraph"
    },
    heading: "Just a heading",
    buttons: [{
      url: "#",
      title: "Read More"
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Just a heading")).toBeInTheDocument();
    await expect(canvas.getByText("Read More")).toBeInTheDocument();
  }
}`,...w.parameters?.docs?.source}}};const ie=["Static","Carousel","StaticNoCaption","CarouselNoButtons","CarouselWithNavigation","StaticNoParagraph"];export{f as Carousel,b as CarouselNoButtons,S as CarouselWithNavigation,x as Static,v as StaticNoCaption,w as StaticNoParagraph,ie as __namedExportsOrder,se as default};
