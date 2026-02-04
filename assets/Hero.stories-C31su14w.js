import{g as u,c as t,a as s,i as o,n as d,e as m,t as g,F as S,b as q,d as i}from"./iframe-CbKlnwd0.js";import{_ as v}from"./Context-Dth8feKv.js";import{_ as h}from"./Picture-CgDD9Sfe.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-DIYzKvUW.js";import"./ButtonGroup-EJ7XitIs.js";import"./Button-V7S-XXYc.js";const z={class:"hero full-bleed relative space-y-16 py-20"},w={class:"hero__inner mx-auto my-0 grid w-full max-w-screen-2xl space-y-16 gap-x-10 px-5 md:grid-cols-12 md:items-center md:space-y-0"},L={key:0,class:"hero__secondary md:col-span-4"},_={key:0,class:"hero__caption mt-2 font-body text-12 leading-140 font-normal text-indigo-800"},k={key:0,class:"hero__inner mx-auto my-0 grid w-full max-w-screen-2xl gap-x-10 px-5 md:grid-cols-12 md:items-center"},O={key:0,class:"hero__caption mt-2 font-body text-12 leading-140 font-normal text-indigo-800"},b={__name:"Hero",props:{align:{type:String,default:"left"},date:String,subheading:String,heading:String,paragraph:String,buttons:{type:Array,default:()=>[]},image:Object,imageOrientation:{type:String,default:"landscape"},images:{type:Array,default:()=>[]},columns:{type:Number,default:3}},setup(e){const c=e,x=u(()=>c.imageOrientation==="portrait"?"md:pb-[119.44444444444444%]":"md:pb-[80.55555555555556%]"),f=u(()=>c.columns===4?"pb-[165.3846153846154%]":"md:pb-[80.55555555555556%]");return(C,p)=>(i(),t("div",z,[s("div",w,[s("div",{class:d(["hero__main",{"md:col-start-3":e.align==="center"},"md:col-span-8"])},[m(v,{size:"medium",hero:!0,date:e.date,subheading:e.subheading,heading:e.heading,paragraph:e.paragraph,buttons:{items:e.buttons},align:e.align},null,8,["date","subheading","heading","paragraph","buttons","align"])],2),e.image?(i(),t("div",L,[s("div",{class:d(["hero__image relative",x.value,"pb-[70.73170731707317%]"])},[m(h,{class:"absolute top-0 left-0 h-full w-full object-cover",srcset:e.image.srcset,src:e.image.src,"size-desktop":e.image.sizes.Square,"size-mobile":e.image.sizes.Square,alt:e.image.alt},null,8,["srcset","src","size-desktop","size-mobile","alt"])],2),e.image.caption?(i(),t("p",_,g(e.image.caption),1)):o("",!0)])):o("",!0)]),e.images&&e.align==="center"?(i(),t("div",k,[(i(!0),t(S,null,q(e.images,(a,y)=>(i(),t("div",{key:y,class:d(["mb-10",{"md:col-span-3":e.columns===4},{"md:col-span-4":e.columns!==4}])},[s("div",{class:d(["hero__image relative pb-[70.73170731707317%]",f.value])},[m(h,{class:"absolute top-0 left-0 h-full w-full object-cover",srcset:a.srcset,src:a.src,"size-desktop":a.image?.sizes?.Square,"size-mobile":a.image?.sizes?.Square,alt:a.alt},null,8,["srcset","src","size-desktop","size-mobile","alt"])],2),a.caption?(i(),t("p",O,g(a.caption),1)):o("",!0)],2))),128))])):o("",!0),p[0]||(p[0]=s("div",{class:"hero__pattern bg-hero__pattern absolute top-0 left-0 z-[-1] !mt-0 h-full w-full opacity-50"},null,-1))]))}};b.__docgenInfo={exportName:"default",displayName:"Hero",description:"",tags:{},props:[{name:"align",type:{name:"string"},defaultValue:{func:!1,value:'"left"'}},{name:"date",type:{name:"string"}},{name:"subheading",type:{name:"string"}},{name:"heading",type:{name:"string"}},{name:"paragraph",type:{name:"string"}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"image",type:{name:"object"}},{name:"imageOrientation",type:{name:"string"},defaultValue:{func:!1,value:'"landscape"'}},{name:"images",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"columns",type:{name:"number"},defaultValue:{func:!1,value:"3"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Hero/Hero.vue"]};const F={title:"Core Components/Hero",component:b},r={name:"Primary",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/600x400",Square_mobile:"https://placehold.co/400x300"}},paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}},n={name:"Portrait Orientation",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",imageOrientation:"portrait",image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/400x600",Square_mobile:"https://placehold.co/300x400"}},paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}},l={name:"Center Align",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",imageOrientation:"portrait",image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/400x600",Square_mobile:"https://placehold.co/300x400"}},align:"center",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Primary",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    image: {
      src: "https://placeholdit.com/400x600/dddddd/999999",
      srcset: "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Square: "https://placehold.co/600x400",
        Square_mobile: "https://placehold.co/400x300"
      }
    },
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Portrait Orientation",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    imageOrientation: "portrait",
    image: {
      src: "https://placeholdit.com/400x600/dddddd/999999",
      srcset: "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Square: "https://placehold.co/400x600",
        Square_mobile: "https://placehold.co/300x400"
      }
    },
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Center Align",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    imageOrientation: "portrait",
    image: {
      src: "https://placeholdit.com/400x600/dddddd/999999",
      srcset: "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Square: "https://placehold.co/400x600",
        Square_mobile: "https://placehold.co/300x400"
      }
    },
    align: "center",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
}`,...l.parameters?.docs?.source}}};const E=["Primary","Portrait","Center"];export{l as Center,n as Portrait,r as Primary,E as __namedExportsOrder,F as default};
