import{o as I,k as q,y as D,c as s,a as t,e as g,F as S,r as T,b as w,s as k,d as l,t as y,q as z,n as A}from"./iframe-DMklC8cl.js";import{G as L}from"./glide.esm-YJcNIzYu.js";import{_ as M}from"./Context-yk3Njoen.js";import{_ as J}from"./Picture-CD-gIuCw.js";import{_ as E}from"./ArrowControls-Y9XTEx0L.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-khIptu3O.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-D9uDztKu.js";import"./Button-c_Wd58ef.js";import"./ArrowButton-CKWIkvA-.js";const V={class:"testimonial-carousel space-y-11"},N={class:"testimonial-carousel__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"},O={class:"testimonial-carousel__context md:col-span-5"},F={class:"testimonial-carousel__window w-full","data-glide-window":""},P={class:"glide__track","data-glide-el":"track"},j={class:"glide__slides"},G={class:"testimonial-carousel__image relative md:pb-[46.51162790697675%]"},H={key:0,class:"font-body font-normal text-10 leading-140 text-indigo-800 mt-2"},W={class:"testimonial-carousel__quotes md:col-span-3 md:order-[-1] self-end mt-12 md:mt-0"},R={class:"testimonial-carousel__quotes-wrap relative h-[150px]"},$={class:"font-extended font-normal text-20 leading-110 -tracking-[0.01em] text-indigo"},U={class:"font-body font-normal text-14 leading-130 text-indigo-800"},K={class:"testimonial-carousel__controls md:absolute top-[-40px] right-[20px] flex justify-end mt-4 md:mt-0 md:translate-y-[-100%]"},m={__name:"TestimonialCarousel",props:{heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]},items:{type:Array,default:()=>[]}},setup(e){const x=e,C=k(()=>x.buttons.map(o=>({button:{url:o.url,title:o.title,target:o.target||""}}))),_=w(null),f=w(0);let n=null,r=null;const b=()=>n?.go(">"),B=()=>n?.go("<"),h=()=>{r&&(clearInterval(r),r=null)},v=()=>{h(),x.items.length>1&&(r=setInterval(b,5e3))};return I(async()=>{await q(),setTimeout(()=>{const o=_.value?.querySelector("[data-glide-window]");o&&(n=new L(o,{type:"carousel",gap:0,animationDuration:600,autoplay:!1,perView:1}),n.on("run",()=>{f.value=n.index}),n.mount(),v())},80)}),D(()=>{h(),n&&n.destroy()}),(o,Y)=>(l(),s("div",V,[t("div",N,[t("div",O,[g(M,{size:"large",type:"dark",arrow:!0,reverse:!0,heading:e.heading,paragraph:e.paragraph,buttons:{items:C.value}},null,8,["heading","paragraph","buttons"])])]),t("div",{class:"testimonial-carousel__inner relative md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto",onMouseenter:h,onMouseleave:v},[t("div",{class:"testimonial-carousel__main md:col-span-9",ref_key:"rootEl",ref:_},[t("div",F,[t("div",P,[t("div",j,[(l(!0),s(S,null,T(e.items,(a,c)=>(l(),s("div",{key:c,class:"testimonial-carousel__slide glide__slide"},[t("div",G,[g(J,{class:"md:absolute w-full h-full object-cover",src:a.image?.src,srcset:a.image?.srcset,"size-desktop":a.image?.sizes?.Landscape,"size-mobile":a.image?.sizes?.Square,alt:a.image?.alt},null,8,["src","srcset","size-desktop","size-mobile","alt"])]),a.caption?(l(),s("p",H,y(a.caption),1)):z("",!0)]))),128))])])])],512),t("div",W,[t("div",R,[(l(!0),s(S,null,T(e.items,(a,c)=>(l(),s("div",{key:c,class:A(["testimonial-carousel__quote absolute top-0 md:top-auto md:bottom-0 left-0 w-full pt-2 invisible opacity-0 space-y-2 border-t border-solid border-canary transition-all duration-300 ease-in-out",{"!visible opacity-100 !translate-y-0":f.value===c}])},[t("p",$,y(a.testimonial?.quote),1),t("div",U,y(a.testimonial?.name),1)],2))),128))])]),t("div",K,[g(E,{size:"large",type:"light",onPrev:B,onNext:b})])],32)]))}};m.__docgenInfo=Object.assign({displayName:m.name??m.__name},{exportName:"default",displayName:"TestimonialCarousel",description:"",tags:{},props:[{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/TestimonialCarousel/TestimonialCarousel.vue"]});const{expect:i}=__STORYBOOK_MODULE_TEST__,ce={title:"Core Components/Testimonial Carousel",component:m,tags:["autodocs"]},p={name:"Default",args:{heading:"Testimonials",paragraph:"Hear from our students and alumni about their experiences at Colby.",buttons:[{url:"#",title:"All Stories"}],items:[{image:{srcset:"https://placehold.co/860x400",src:"https://placehold.co/600x600",alt:"Student photo",sizes:{Landscape:"https://placehold.co/860x400",Square:"https://placehold.co/600x600"}},testimonial:{quote:'"Colby prepared me to think critically and act with purpose in everything I do."',name:"Jane Doe '22"}},{image:{srcset:"https://placehold.co/860x400",src:"https://placehold.co/600x600",alt:"Alumni photo",sizes:{Landscape:"https://placehold.co/860x400",Square:"https://placehold.co/600x600"}},testimonial:{quote:`"The community at Colby is unlike anything I've experienced. It's truly a special place."`,name:"John Smith '20"}}]},play:async({canvas:e})=>{await i(e.getByText("Testimonials")).toBeInTheDocument(),await i(e.getByText("All Stories")).toBeInTheDocument(),await i(e.getByText("Jane Doe '22")).toBeInTheDocument()}},d={name:"With Image Captions",args:{heading:"Student Stories",paragraph:"Hear directly from students about their Colby experience.",buttons:[{url:"#",title:"More Stories"}],items:[{image:{srcset:"https://placehold.co/860x400",src:"https://placehold.co/600x600",alt:"Student in lab",sizes:{Landscape:"https://placehold.co/860x400",Square:"https://placehold.co/600x600"},caption:"A student conducting research in the biology lab."},testimonial:{quote:'"The research opportunities at Colby are unparalleled."',name:"Alex Johnson '23"}},{image:{srcset:"https://placehold.co/860x400",src:"https://placehold.co/600x600",alt:"Campus event",sizes:{Landscape:"https://placehold.co/860x400",Square:"https://placehold.co/600x600"},caption:"Annual campus festival celebration."},testimonial:{quote:'"Every day brings something new and exciting."',name:"Maria Garcia '21"}}]},play:async({canvas:e})=>{await i(e.getByText("Student Stories")).toBeInTheDocument(),await i(e.getByText("Alex Johnson '23")).toBeInTheDocument()}},u={name:"Single Item",args:{heading:"Featured Story",paragraph:"A single testimonial.",buttons:[{url:"#",title:"Read More"}],items:[{image:{srcset:"https://placehold.co/860x400",src:"https://placehold.co/600x600",alt:"Solo student",sizes:{Landscape:"https://placehold.co/860x400",Square:"https://placehold.co/600x600"}},testimonial:{quote:'"My four years at Colby were transformative."',name:"Solo Person '24"}}]},play:async({canvas:e})=>{await i(e.getByText("Solo Person '24")).toBeInTheDocument()}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const pe=["Default","WithCaptions","SingleItem"];export{p as Default,u as SingleItem,d as WithCaptions,pe as __namedExportsOrder,ce as default};
