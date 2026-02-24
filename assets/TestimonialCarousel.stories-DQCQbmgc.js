import{o as I,k as q,u as D,c as s,a as t,e as h,F as v,r as S,b as T,l as k,d as l,t as g,m as z,n as A}from"./iframe-BfBFAde5.js";import{G as L}from"./glide.esm-YJcNIzYu.js";import{_ as M}from"./Context-Dp7yX81d.js";import{_ as J}from"./Picture-CxKtrm5G.js";import{_ as E}from"./ArrowControls-CjN_dRVd.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-T77HtXsG.js";import"./ButtonGroup-DeVPz35K.js";import"./Button-u50yI3p6.js";import"./ArrowButton-C6TXGDEx.js";const V={class:"testimonial-carousel space-y-11"},N={class:"testimonial-carousel__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"},F={class:"testimonial-carousel__context md:col-span-5"},O={class:"testimonial-carousel__window w-full","data-glide-window":""},P={class:"glide__track","data-glide-el":"track"},G={class:"glide__slides"},H={class:"testimonial-carousel__image relative md:pb-[46.51162790697675%]"},W={key:0,class:"font-body font-normal text-10 leading-140 text-indigo-800 mt-2"},j={class:"testimonial-carousel__quotes md:col-span-3 md:order-[-1] self-end mt-12 md:mt-0"},R={class:"testimonial-carousel__quotes-wrap relative h-[150px]"},$={class:"font-extended font-normal text-20 leading-110 -tracking-[0.01em] text-indigo"},U={class:"font-body font-normal text-14 leading-130 text-indigo-800"},K={class:"testimonial-carousel__controls md:absolute top-[-40px] right-[20px] flex justify-end mt-4 md:mt-0 md:translate-y-[-100%]"},w={__name:"TestimonialCarousel",props:{heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]},items:{type:Array,default:()=>[]}},setup(e){const x=e,C=k(()=>x.buttons.map(o=>({button:{url:o.url,title:o.title,target:o.target||""}}))),y=T(null),_=T(0);let n=null,r=null;const f=()=>n?.go(">"),B=()=>n?.go("<"),m=()=>{r&&(clearInterval(r),r=null)},b=()=>{m(),x.items.length>1&&(r=setInterval(f,5e3))};return I(async()=>{await q(),setTimeout(()=>{const o=y.value?.querySelector("[data-glide-window]");o&&(n=new L(o,{type:"carousel",gap:0,animationDuration:600,autoplay:!1,perView:1}),n.on("run",()=>{_.value=n.index}),n.mount(),b())},80)}),D(()=>{m(),n&&n.destroy()}),(o,Y)=>(l(),s("div",V,[t("div",N,[t("div",F,[h(M,{size:"large",type:"dark",arrow:!0,reverse:!0,heading:e.heading,paragraph:e.paragraph,buttons:{items:C.value}},null,8,["heading","paragraph","buttons"])])]),t("div",{class:"testimonial-carousel__inner relative md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto",onMouseenter:m,onMouseleave:b},[t("div",{class:"testimonial-carousel__main md:col-span-9",ref_key:"rootEl",ref:y},[t("div",O,[t("div",P,[t("div",G,[(l(!0),s(v,null,S(e.items,(a,c)=>(l(),s("div",{key:c,class:"testimonial-carousel__slide glide__slide"},[t("div",H,[h(J,{class:"md:absolute w-full h-full object-cover",src:a.image?.src,srcset:a.image?.srcset,"size-desktop":a.image?.sizes?.Landscape,"size-mobile":a.image?.sizes?.Square,alt:a.image?.alt},null,8,["src","srcset","size-desktop","size-mobile","alt"])]),a.caption?(l(),s("p",W,g(a.caption),1)):z("",!0)]))),128))])])])],512),t("div",j,[t("div",R,[(l(!0),s(v,null,S(e.items,(a,c)=>(l(),s("div",{key:c,class:A(["testimonial-carousel__quote absolute top-0 md:top-auto md:bottom-0 left-0 w-full pt-2 invisible opacity-0 space-y-2 border-t border-solid border-canary transition-all duration-300 ease-in-out",{"!visible opacity-100 !translate-y-0":_.value===c}])},[t("p",$,g(a.testimonial?.quote),1),t("div",U,g(a.testimonial?.name),1)],2))),128))])]),t("div",K,[h(E,{size:"large",type:"light",onPrev:B,onNext:f})])],32)]))}};w.__docgenInfo={exportName:"default",displayName:"TestimonialCarousel",description:"",tags:{},props:[{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/TestimonialCarousel/TestimonialCarousel.vue"]};const{expect:i}=__STORYBOOK_MODULE_TEST__,ie={title:"Core Components/Testimonial Carousel",component:w,tags:["autodocs"]},p={name:"Default",args:{heading:"Testimonials",paragraph:"Hear from our students and alumni about their experiences at Colby.",buttons:[{url:"#",title:"All Stories"}],items:[{image:{srcset:"https://placehold.co/860x400",src:"https://placehold.co/600x600",alt:"Student photo",sizes:{Landscape:"https://placehold.co/860x400",Square:"https://placehold.co/600x600"}},testimonial:{quote:'"Colby prepared me to think critically and act with purpose in everything I do."',name:"Jane Doe '22"}},{image:{srcset:"https://placehold.co/860x400",src:"https://placehold.co/600x600",alt:"Alumni photo",sizes:{Landscape:"https://placehold.co/860x400",Square:"https://placehold.co/600x600"}},testimonial:{quote:`"The community at Colby is unlike anything I've experienced. It's truly a special place."`,name:"John Smith '20"}}]},play:async({canvas:e})=>{await i(e.getByText("Testimonials")).toBeInTheDocument(),await i(e.getByText("All Stories")).toBeInTheDocument(),await i(e.getByText("Jane Doe '22")).toBeInTheDocument()}},d={name:"With Image Captions",args:{heading:"Student Stories",paragraph:"Hear directly from students about their Colby experience.",buttons:[{url:"#",title:"More Stories"}],items:[{image:{srcset:"https://placehold.co/860x400",src:"https://placehold.co/600x600",alt:"Student in lab",sizes:{Landscape:"https://placehold.co/860x400",Square:"https://placehold.co/600x600"},caption:"A student conducting research in the biology lab."},testimonial:{quote:'"The research opportunities at Colby are unparalleled."',name:"Alex Johnson '23"}},{image:{srcset:"https://placehold.co/860x400",src:"https://placehold.co/600x600",alt:"Campus event",sizes:{Landscape:"https://placehold.co/860x400",Square:"https://placehold.co/600x600"},caption:"Annual campus festival celebration."},testimonial:{quote:'"Every day brings something new and exciting."',name:"Maria Garcia '21"}}]},play:async({canvas:e})=>{await i(e.getByText("Student Stories")).toBeInTheDocument(),await i(e.getByText("Alex Johnson '23")).toBeInTheDocument()}},u={name:"Single Item",args:{heading:"Featured Story",paragraph:"A single testimonial.",buttons:[{url:"#",title:"Read More"}],items:[{image:{srcset:"https://placehold.co/860x400",src:"https://placehold.co/600x600",alt:"Solo student",sizes:{Landscape:"https://placehold.co/860x400",Square:"https://placehold.co/600x600"}},testimonial:{quote:'"My four years at Colby were transformative."',name:"Solo Person '24"}}]},play:async({canvas:e})=>{await i(e.getByText("Solo Person '24")).toBeInTheDocument()}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    heading: "Testimonials",
    paragraph: "Hear from our students and alumni about their experiences at Colby.",
    buttons: [{
      url: "#",
      title: "All Stories"
    }],
    items: [{
      image: {
        srcset: "https://placehold.co/860x400",
        src: "https://placehold.co/600x600",
        alt: "Student photo",
        sizes: {
          Landscape: "https://placehold.co/860x400",
          Square: "https://placehold.co/600x600"
        }
      },
      testimonial: {
        quote: '"Colby prepared me to think critically and act with purpose in everything I do."',
        name: "Jane Doe '22"
      }
    }, {
      image: {
        srcset: "https://placehold.co/860x400",
        src: "https://placehold.co/600x600",
        alt: "Alumni photo",
        sizes: {
          Landscape: "https://placehold.co/860x400",
          Square: "https://placehold.co/600x600"
        }
      },
      testimonial: {
        quote: '"The community at Colby is unlike anything I\\'ve experienced. It\\'s truly a special place."',
        name: "John Smith '20"
      }
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Testimonials")).toBeInTheDocument();
    await expect(canvas.getByText("All Stories")).toBeInTheDocument();
    await expect(canvas.getByText("Jane Doe '22")).toBeInTheDocument();
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "With Image Captions",
  args: {
    heading: "Student Stories",
    paragraph: "Hear directly from students about their Colby experience.",
    buttons: [{
      url: "#",
      title: "More Stories"
    }],
    items: [{
      image: {
        srcset: "https://placehold.co/860x400",
        src: "https://placehold.co/600x600",
        alt: "Student in lab",
        sizes: {
          Landscape: "https://placehold.co/860x400",
          Square: "https://placehold.co/600x600"
        },
        caption: "A student conducting research in the biology lab."
      },
      testimonial: {
        quote: '"The research opportunities at Colby are unparalleled."',
        name: "Alex Johnson '23"
      }
    }, {
      image: {
        srcset: "https://placehold.co/860x400",
        src: "https://placehold.co/600x600",
        alt: "Campus event",
        sizes: {
          Landscape: "https://placehold.co/860x400",
          Square: "https://placehold.co/600x600"
        },
        caption: "Annual campus festival celebration."
      },
      testimonial: {
        quote: '"Every day brings something new and exciting."',
        name: "Maria Garcia '21"
      }
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Student Stories")).toBeInTheDocument();
    await expect(canvas.getByText("Alex Johnson '23")).toBeInTheDocument();
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Single Item",
  args: {
    heading: "Featured Story",
    paragraph: "A single testimonial.",
    buttons: [{
      url: "#",
      title: "Read More"
    }],
    items: [{
      image: {
        srcset: "https://placehold.co/860x400",
        src: "https://placehold.co/600x600",
        alt: "Solo student",
        sizes: {
          Landscape: "https://placehold.co/860x400",
          Square: "https://placehold.co/600x600"
        }
      },
      testimonial: {
        quote: '"My four years at Colby were transformative."',
        name: "Solo Person '24"
      }
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Solo Person '24")).toBeInTheDocument();
  }
}`,...u.parameters?.docs?.source}}};const re=["Default","WithCaptions","SingleItem"];export{p as Default,u as SingleItem,d as WithCaptions,re as __namedExportsOrder,ie as default};
