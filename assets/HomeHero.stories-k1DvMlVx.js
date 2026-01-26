import{a as t,b as a,f as i,d as l,t as r,o}from"./iframe-BhW3MJ0c.js";import{_ as c}from"./Context-B_bqilEO.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-DqdSnj46.js";import"./ButtonGroup-5FNfHK2F.js";import"./Button-BC0zimT6.js";const m={class:"home-hero relative h-[calc(100vh_-_145px)] md:h-[calc(100vh_-_100px)] overflow-hidden md:[&+.carousel]:mt-[-30px]"},u={class:"home-hero__bottom absolute bottom-0 left-0 w-full pt-24 pb-[30px] space-y-12 md:space-y-20",style:{background:"linear-gradient(180deg, rgba(1, 33, 105, 0) 0%, rgba(14, 20, 34, 0.4) 25%)"}},p={class:"home-hero__inner grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"},g={class:"home-hero__main md:col-start-6 md:col-span-7"},h={key:0,class:"home-hero__inner max-w-screen-2xl w-full px-5 my-0 mx-auto"},w={class:"font-extended font-bold text-12 tracking-8 text-canary uppercase text-right md:text-left"},b=["poster"],y=["src"],f={key:1,class:"z-[-10] absolute top-0 left-0 w-full h-full"},x=["srcset"],v=["srcset"],_=["src","alt"],d={__name:"HomeHero",props:{heading:{type:String,default:""},buttons:{type:Array,default:()=>[]},caption:{type:String,default:""},video:{type:String,default:""},poster:{type:String,default:""},inComponentLibrary:{type:Boolean,default:!1},image:{type:Object,default:()=>({src:"",srcset:"",sizeDesktop:"",sizeMobile:"",alt:""})}},setup(e){return(j,L)=>(o(),t("div",m,[a("div",u,[a("div",p,[a("div",g,[l(c,{size:"xlarge",type:"light",arrow:!0,reverse:!0,date:!0,heading:e.heading,buttons:{items:e.buttons}},null,8,["heading","buttons"])])]),e.caption?(o(),t("div",h,[a("div",w,r(e.caption),1)])):i("",!0)]),e.video?(o(),t("video",{key:0,class:"z-[-10] absolute min-w-full min-h-full w-auto h-auto bg-repeat bg-cover top-0 right-0 bottom-0 left-0 object-cover",playsinline:"",autoplay:"",muted:"",loop:"",poster:e.poster||void 0},[a("source",{src:e.video,type:"video/mp4"},null,8,y)],8,b)):(o(),t("picture",f,[e.inComponentLibrary&&e.image?.srcset?(o(),t("source",{key:0,media:"(min-width:768px)",srcset:e.image.srcset},null,8,x)):!e.inComponentLibrary&&e.image?.sizeDesktop?(o(),t("source",{key:1,media:"(min-width:768px)",srcset:e.image.sizeDesktop},null,8,v)):i("",!0),a("img",{class:"w-full h-full object-cover",src:e.inComponentLibrary?e.image?.src:e.image?.sizeMobile||e.image?.src,alt:e.image?.alt||"",loading:"eager",decoding:"async"},null,8,_)]))]))}};d.__docgenInfo={exportName:"default",displayName:"HomeHero",description:"",tags:{},props:[{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"caption",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"video",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"poster",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"inComponentLibrary",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"image",type:{name:"object"},defaultValue:{func:!1,value:`{
    src: '',
    srcset: '',
    sizeDesktop: '',
    sizeMobile: '',
    alt: ''
}`}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/HomeHero/HomeHero.vue"]};const H={title:"Core Components/Home Hero",component:d},n={name:"Primary",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",caption:"waterville maine",image:{src:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",Square_mobile:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg"}},paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}},s={name:"With Video",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",caption:"waterville maine",image:{src:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",Square_mobile:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg"}},video:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled.mp4",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Primary",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    caption: "waterville maine",
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
      srcset: "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Square: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
        Square_mobile: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg"
      }
    },
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "With Video",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    caption: "waterville maine",
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
      srcset: "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Square: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
        Square_mobile: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg"
      }
    },
    video: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled.mp4",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
}`,...s.parameters?.docs?.source}}};const T=["Primary","Video"];export{n as Primary,s as Video,T as __namedExportsOrder,H as default};
