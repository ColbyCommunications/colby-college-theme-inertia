import{o as L,k as A,u as D,c as i,a as s,F as c,r as v,e as m,t as d,m as l,n as x,h as S,b as k,d as a}from"./iframe-smcTNgWJ.js";import{G as R}from"./glide.esm-YJcNIzYu.js";import{_}from"./Picture-DxrAmS_6.js";import{_ as w}from"./ButtonGroup-0OSwBJFl.js";import{_ as C}from"./Icon-oXJCOZbF.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BaqycuYP.js";const j={class:"media-aside max-w-screen-2xl w-full my-0 mx-auto"},B={class:"media-aside__inner md:grid md:grid-cols-12 gap-10"},M={class:"media-aside__main md:col-span-9"},N={class:"media-aside__window","data-glide-window":""},$={class:"glide__track","data-glide-el":"track"},E={class:"glide__slides"},q={key:0,class:"media-aside__caption font-body font-normal text-12 text-indigo-800 leading-140 mt-2"},F={class:"media-aside__image"},P={key:0,class:"media-aside__caption font-body font-normal text-12 text-indigo-800 leading-140 mt-2"},G={class:"relative h-44 md:h-auto"},O={key:0,class:"font-body font-bold text-16 leading-130 text-indigo"},I={key:1,class:"font-body font-normal text-12 leading-140 text-indigo"},T={class:"inline-flex self-end gap-4 md:pb-6"},U={key:0,class:"font-body font-bold text-16 leading-130 text-indigo"},H={key:1,class:"font-body font-normal text-12 leading-140 text-indigo"},z={__name:"MediaAside",props:{carousel:{type:Boolean,default:!1},image:{type:Object,default:null},heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]},items:{type:Array,default:()=>[]}},setup(e){const V=e,h=k(0),f=k(null);let n=null;const y=r=>r.map(o=>({button:{url:o.url,title:o.title,target:o.target||""}})),b=r=>{n&&n.go(r==="next"?">":"<")};return L(async()=>{if(!V.carousel)return;await A();const r=f.value?.querySelector("[data-glide-window]");r&&(n=new R(r,{type:"carousel",gap:0,animationDuration:600,autoplay:!1,perView:1}),n.on("run",()=>{h.value=n.index}),n.mount())}),D(()=>{n&&n.destroy()}),(r,o)=>(a(),i("div",j,[s("div",B,[s("div",M,[e.carousel?(a(),i("div",{key:0,ref_key:"glideEl",ref:f},[s("div",N,[s("div",$,[s("div",E,[(a(!0),i(c,null,v(e.items,(t,u)=>(a(),i("div",{key:u,class:"media-aside__slide glide__slide"},[m(_,{class:"w-full object-cover",src:t.image?.src,srcset:t.image?.srcset,"size-desktop":t.image?.sizes?.Landscape,"size-mobile":t.image?.sizes?.Square,alt:t.image?.alt},null,8,["src","srcset","size-desktop","size-mobile","alt"]),t.image?.caption?(a(),i("p",q,d(t.image.caption),1)):l("",!0)]))),128))])])])],512)):(a(),i(c,{key:1},[s("div",F,[m(_,{class:"w-full object-cover",src:e.image?.src,srcset:e.image?.srcset,"size-desktop":e.image?.sizes?.Landscape,"size-mobile":e.image?.sizes?.Square,alt:e.image?.alt},null,8,["src","srcset","size-desktop","size-mobile","alt"])]),e.image?.caption?(a(),i("p",P,d(e.image.caption),1)):l("",!0)],64))]),s("div",{class:x(["media-aside__aside md:col-span-3 space-y-2 mt-8 md:mt-0",{grid:e.carousel}])},[e.carousel?(a(),i(c,{key:0},[s("div",G,[(a(!0),i(c,null,v(e.items,(t,u)=>(a(),i("div",{key:u,class:x(["media-aside__context-wrap absolute top-0 left-0 w-full invisible opacity-0 translate-y-[60px] grid space-y-2 transition-all duration-300 ease-in-out",{"!visible !opacity-100 !translate-y-0":h.value===u}])},[t.heading?(a(),i("h2",O,d(t.heading),1)):l("",!0),t.paragraph?(a(),i("p",I,d(t.paragraph),1)):l("",!0),t.buttons&&t.buttons.length?(a(),S(w,{key:2,size:"large",items:y(t.buttons)},null,8,["items"])):l("",!0)],2))),128))]),s("div",T,[s("button",{class:"inline-flex items-center justify-center w-10 h-8 bg-indigo-100 hover:bg-indigo-200 focus:bg-indigo-200 rounded border border-solid border-indigo-300 transition-all duration-200 ease-in-out",onClick:o[0]||(o[0]=t=>b("prev"))},[o[2]||(o[2]=s("span",{class:"sr-only"},"Previous",-1)),m(C,{name:"chevron",class:"fill-azure w-1.5"})]),s("button",{class:"inline-flex items-center justify-center w-10 h-8 bg-indigo-100 hover:bg-indigo-200 focus:bg-indigo-200 rounded border border-solid border-indigo-300 transition-all duration-200 ease-in-out",onClick:o[1]||(o[1]=t=>b("next"))},[o[3]||(o[3]=s("span",{class:"sr-only"},"Next",-1)),m(C,{name:"chevron",class:"rotate-180 fill-azure w-1.5"})])])],64)):(a(),i(c,{key:1},[e.heading?(a(),i("h2",U,d(e.heading),1)):l("",!0),e.paragraph?(a(),i("p",H,d(e.paragraph),1)):l("",!0),e.buttons&&e.buttons.length?(a(),S(w,{key:2,size:"large",items:y(e.buttons)},null,8,["items"])):l("",!0)],64))],2)])]))}};z.__docgenInfo={exportName:"default",displayName:"MediaAside",description:"",tags:{},props:[{name:"carousel",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"image",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/MediaAside/MediaAside.vue"]};const ee={title:"Core Components/Media Aside",component:z,tags:["autodocs"]},p={name:"Static",args:{image:{srcset:"https://placehold.co/900x430",src:"https://placehold.co/600x600",alt:"Placeholder image",caption:"Caption lorem ipsum dolor sit amet, consectetur adipiscing elit."},heading:"Lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit.",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus felis, interdum vel lorem vitae, imperdiet commodo nisi.",buttons:[{url:"#",title:"Read Story"}]}},g={name:"Carousel",args:{carousel:!0,items:[{image:{srcset:"https://placehold.co/900x430",src:"https://placehold.co/600x600",alt:"Slide 1",caption:"Caption for slide one."},heading:"Slide one heading",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",buttons:[{url:"#",title:"Read Story"}]},{image:{srcset:"https://placehold.co/900x430",src:"https://placehold.co/600x600",alt:"Slide 2",caption:"Caption for slide two."},heading:"Slide two heading",paragraph:"Donec lectus felis, interdum vel lorem vitae, imperdiet commodo nisi.",buttons:[{url:"#",title:"Read Story"}]},{image:{srcset:"https://placehold.co/900x430",src:"https://placehold.co/600x600",alt:"Slide 3",caption:"Caption for slide three."},heading:"Slide three heading",paragraph:"Donec nec blandit enim.",buttons:[{url:"#",title:"Read Story"}]}]}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
  }
}`,...g.parameters?.docs?.source}}};const te=["Static","Carousel"];export{g as Carousel,p as Static,te as __namedExportsOrder,ee as default};
