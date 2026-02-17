import{o as C,k as S,u as q,c as o,a as e,e as u,F as y,r as x,b as v,l as z,d as n,t as m,m as T,n as I}from"./iframe-smcTNgWJ.js";import{G as D}from"./glide.esm-YJcNIzYu.js";import{_ as V}from"./Context-DqAioVFh.js";import{_ as A}from"./Picture-DxrAmS_6.js";import{_ as L}from"./ArrowControls-d0Y99m71.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-WtWkjzc1.js";import"./ButtonGroup-0OSwBJFl.js";import"./Button-BaqycuYP.js";import"./ArrowButton-Dkb1ab2M.js";const N={class:"testimonial-carousel space-y-11"},B={class:"testimonial-carousel__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"},E={class:"testimonial-carousel__context md:col-span-5"},J={class:"testimonial-carousel__window w-full","data-glide-window":""},j={class:"glide__track","data-glide-el":"track"},F={class:"glide__slides"},M={class:"testimonial-carousel__image relative md:pb-[46.51162790697675%]"},$={key:0,class:"font-body font-normal text-10 leading-140 text-indigo-800 mt-2"},G={class:"testimonial-carousel__quotes md:col-span-3 md:order-[-1] self-end mt-12 md:mt-0"},H={class:"testimonial-carousel__quotes-wrap relative h-[150px]"},O={class:"font-extended font-normal text-20 leading-110 -tracking-[0.01em] text-indigo"},P={class:"font-body font-normal text-14 leading-130 text-indigo-800"},U={class:"testimonial-carousel__controls md:absolute top-[-40px] right-[20px] flex justify-end mt-4 md:mt-0 md:translate-y-[-100%]"},b={__name:"TestimonialCarousel",props:{heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]},items:{type:Array,default:()=>[]}},setup(l){const p=l,w=z(()=>p.buttons.map(s=>({button:{url:s.url,title:s.title,target:s.target||""}}))),h=v(null),g=v(0);let a=null,i=null;const _=()=>a?.go(">"),k=()=>a?.go("<"),d=()=>{i&&(clearInterval(i),i=null)},f=()=>{d(),p.items.length>1&&(i=setInterval(_,5e3))};return C(async()=>{await S(),setTimeout(()=>{const s=h.value?.querySelector("[data-glide-window]");s&&(a=new D(s,{type:"carousel",gap:0,animationDuration:600,autoplay:!1,perView:1}),a.on("run",()=>{g.value=a.index}),a.mount(),f())},80)}),q(()=>{d(),a&&a.destroy()}),(s,K)=>(n(),o("div",N,[e("div",B,[e("div",E,[u(V,{size:"large",type:"dark",arrow:!0,reverse:!0,heading:l.heading,paragraph:l.paragraph,buttons:{items:w.value}},null,8,["heading","paragraph","buttons"])])]),e("div",{class:"testimonial-carousel__inner relative md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto",onMouseenter:d,onMouseleave:f},[e("div",{class:"testimonial-carousel__main md:col-span-9",ref_key:"rootEl",ref:h},[e("div",J,[e("div",j,[e("div",F,[(n(!0),o(y,null,x(l.items,(t,r)=>(n(),o("div",{key:r,class:"testimonial-carousel__slide glide__slide"},[e("div",M,[u(A,{class:"md:absolute w-full h-full object-cover",src:t.image?.src,srcset:t.image?.srcset,"size-desktop":t.image?.sizes?.Landscape,"size-mobile":t.image?.sizes?.Square,alt:t.image?.alt},null,8,["src","srcset","size-desktop","size-mobile","alt"])]),t.caption?(n(),o("p",$,m(t.caption),1)):T("",!0)]))),128))])])])],512),e("div",G,[e("div",H,[(n(!0),o(y,null,x(l.items,(t,r)=>(n(),o("div",{key:r,class:I(["testimonial-carousel__quote absolute top-0 md:top-auto md:bottom-0 left-0 w-full pt-2 invisible opacity-0 space-y-2 border-t border-solid border-canary transition-all duration-300 ease-in-out",{"!visible opacity-100 !translate-y-0":g.value===r}])},[e("p",O,m(t.testimonial?.quote),1),e("div",P,m(t.testimonial?.name),1)],2))),128))])]),e("div",U,[u(L,{size:"large",type:"light",onPrev:k,onNext:_})])],32)]))}};b.__docgenInfo={exportName:"default",displayName:"TestimonialCarousel",description:"",tags:{},props:[{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/TestimonialCarousel/TestimonialCarousel.vue"]};const oe={title:"Core Components/Testimonial Carousel",component:b,tags:["autodocs"]},c={name:"Default",args:{heading:"Testimonials",paragraph:"Hear from our students and alumni about their experiences at Colby.",buttons:[{url:"#",title:"All Stories"}],items:[{image:{srcset:"https://placehold.co/860x400",src:"https://placehold.co/600x600",alt:"Student photo",sizes:{Landscape:"https://placehold.co/860x400",Square:"https://placehold.co/600x600"}},testimonial:{quote:'"Colby prepared me to think critically and act with purpose in everything I do."',name:"Jane Doe '22"}},{image:{srcset:"https://placehold.co/860x400",src:"https://placehold.co/600x600",alt:"Alumni photo",sizes:{Landscape:"https://placehold.co/860x400",Square:"https://placehold.co/600x600"}},testimonial:{quote:`"The community at Colby is unlike anything I've experienced. It's truly a special place."`,name:"John Smith '20"}}]}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
  }
}`,...c.parameters?.docs?.source}}};const ne=["Default"];export{c as Default,ne as __namedExportsOrder,oe as default};
