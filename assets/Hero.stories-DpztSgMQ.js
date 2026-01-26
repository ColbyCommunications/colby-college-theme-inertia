import{a as t,o as a,F as u,b as s,n,c as f,f as r,d as m,t as b,j as v}from"./iframe-BhW3MJ0c.js";import{_ as z}from"./Context-B_bqilEO.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-DqdSnj46.js";import"./ButtonGroup-5FNfHK2F.js";import"./Button-BC0zimT6.js";const w=["srcset"],q=["src","alt"],L=["srcset"],k=["src","alt"],p={__name:"Picture",props:{class:{type:String,default:""},srcset:{type:String,default:""},src:{type:String,default:""},sizeDesktop:{type:String,default:""},sizeMobile:{type:String,default:""},alt:{type:String,default:""},inComponentLibrary:{type:Boolean,default:!1}},setup(e){return(c,g)=>(a(),t("picture",null,[e.inComponentLibrary?(a(),t(u,{key:0},[s("source",{media:"(min-width:768px)",srcset:e.srcset},null,8,w),s("img",{class:n(e.class),src:e.src,alt:e.alt},null,10,q)],64)):(a(),t(u,{key:1},[s("source",{media:"(min-width:768px)",srcset:e.sizeDesktop},null,8,L),s("img",{class:n(e.class),src:e.sizeMobile,alt:e.alt},null,10,k)],64))]))}};p.__docgenInfo={exportName:"default",displayName:"Picture",description:"",tags:{},props:[{name:"class",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"srcset",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"src",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"sizeDesktop",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"sizeMobile",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"alt",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"inComponentLibrary",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Picture/Picture.vue"]};const V={class:"hero full-bleed relative space-y-16 py-20"},C={class:"hero__inner mx-auto my-0 grid w-full max-w-screen-2xl space-y-16 gap-x-10 px-5 md:grid-cols-12 md:items-center md:space-y-0"},P={key:0,class:"hero__secondary md:col-span-4"},O={key:0,class:"hero__caption mt-2 font-body text-12 leading-140 font-normal text-indigo-800"},_={key:0,class:"hero__inner mx-auto my-0 grid w-full max-w-screen-2xl gap-x-10 px-5 md:grid-cols-12 md:items-center"},N={key:0,class:"hero__caption mt-2 font-body text-12 leading-140 font-normal text-indigo-800"},y={__name:"Hero",props:{align:{type:String,default:"left"},date:String,subheading:String,heading:String,paragraph:String,buttons:{type:Array,default:()=>[]},image:Object,imageOrientation:{type:String,default:"landscape"},images:{type:Array,default:()=>[]},columns:{type:Number,default:3}},setup(e){const c=e,g=f(()=>c.imageOrientation==="portrait"?"md:pb-[119.44444444444444%]":"md:pb-[80.55555555555556%]"),x=f(()=>c.columns===4?"pb-[165.3846153846154%]":"md:pb-[80.55555555555556%]");return(j,h)=>(a(),t("div",V,[s("div",C,[s("div",{class:n(["hero__main",{"md:col-start-3":e.align==="center"},"md:col-span-8"])},[m(z,{size:"medium",hero:!0,date:e.date,subheading:e.subheading,heading:e.heading,paragraph:e.paragraph,buttons:{items:e.buttons},align:e.align},null,8,["date","subheading","heading","paragraph","buttons","align"])],2),e.image?(a(),t("div",P,[s("div",{class:n(["hero__image relative",g.value,"pb-[70.73170731707317%]"])},[m(p,{class:"absolute top-0 left-0 h-full w-full object-cover",srcset:e.image.srcset,src:e.image.src,"size-desktop":e.image.sizes.Square,"size-mobile":e.image.sizes.Square,alt:e.image.alt},null,8,["srcset","src","size-desktop","size-mobile","alt"])],2),e.image.caption?(a(),t("p",O,b(e.image.caption),1)):r("",!0)])):r("",!0)]),e.images&&e.align==="center"?(a(),t("div",_,[(a(!0),t(u,null,v(e.images,(i,S)=>(a(),t("div",{key:S,class:n(["mb-10",{"md:col-span-3":e.columns===4},{"md:col-span-4":e.columns!==4}])},[s("div",{class:n(["hero__image relative pb-[70.73170731707317%]",x.value])},[m(p,{class:"absolute top-0 left-0 h-full w-full object-cover",srcset:i.srcset,src:i.src,"size-desktop":i.image?.sizes?.Square,"size-mobile":i.image?.sizes?.Square,alt:i.alt},null,8,["srcset","src","size-desktop","size-mobile","alt"])],2),i.caption?(a(),t("p",N,b(i.caption),1)):r("",!0)],2))),128))])):r("",!0),h[0]||(h[0]=s("div",{class:"hero__pattern bg-hero__pattern absolute top-0 left-0 z-[-1] !mt-0 h-full w-full opacity-50"},null,-1))]))}};y.__docgenInfo={exportName:"default",displayName:"Hero",description:"",tags:{},props:[{name:"align",type:{name:"string"},defaultValue:{func:!1,value:'"left"'}},{name:"date",type:{name:"string"}},{name:"subheading",type:{name:"string"}},{name:"heading",type:{name:"string"}},{name:"paragraph",type:{name:"string"}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"image",type:{name:"object"}},{name:"imageOrientation",type:{name:"string"},defaultValue:{func:!1,value:'"landscape"'}},{name:"images",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"columns",type:{name:"number"},defaultValue:{func:!1,value:"3"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Hero/Hero.vue"]};const M={title:"Core Components/Hero",component:y},l={name:"Primary",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/600x400",Square_mobile:"https://placehold.co/400x300"}},paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}},o={name:"Portrait Orientation",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",imageOrientation:"portrait",image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/400x600",Square_mobile:"https://placehold.co/300x400"}},paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}},d={name:"Center Align",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",imageOrientation:"portrait",image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/400x600",Square_mobile:"https://placehold.co/300x400"}},align:"center",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const E=["Primary","Portrait","Center"];export{d as Center,o as Portrait,l as Primary,E as __namedExportsOrder,M as default};
