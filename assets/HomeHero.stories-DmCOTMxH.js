import{c as a,a as n,e as p,t as m,m as c,d as o}from"./iframe-BfBFAde5.js";import{_ as u}from"./Context-Dp7yX81d.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-T77HtXsG.js";import"./ButtonGroup-DeVPz35K.js";import"./Button-u50yI3p6.js";const w={class:"home-hero relative h-[calc(100vh_-_145px)] md:h-[calc(100vh_-_100px)] overflow-hidden md:[&+.carousel]:mt-[-30px]"},h={class:"home-hero__bottom absolute bottom-0 left-0 w-full pt-24 pb-[30px] space-y-12 md:space-y-20",style:{background:"linear-gradient(180deg, rgba(1, 33, 105, 0) 0%, rgba(14, 20, 34, 0.4) 25%)"}},g={class:"home-hero__inner grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"},y={class:"home-hero__main md:col-start-6 md:col-span-7"},b={key:0,class:"home-hero__inner max-w-screen-2xl w-full px-5 my-0 mx-auto"},x={class:"font-extended font-bold text-12 tracking-8 text-canary uppercase text-right md:text-left"},f=["poster"],v=["src"],T={key:1,class:"z-[-10] absolute top-0 left-0 w-full h-full"},B=["srcset"],C=["srcset"],L=["src","alt"],r={__name:"HomeHero",props:{heading:{type:String,default:""},buttons:{type:Array,default:()=>[]},caption:{type:String,default:""},video:{type:String,default:""},poster:{type:String,default:""},inComponentLibrary:{type:Boolean,default:!1},image:{type:Object,default:()=>({src:"",srcset:"",sizeDesktop:"",sizeMobile:"",alt:""})}},setup(e){return(_,j)=>(o(),a("div",w,[n("div",h,[n("div",g,[n("div",y,[p(u,{size:"xlarge",type:"light",arrow:!0,reverse:!0,date:!0,heading:e.heading,buttons:{items:e.buttons}},null,8,["heading","buttons"])])]),e.caption?(o(),a("div",b,[n("div",x,m(e.caption),1)])):c("",!0)]),e.video?(o(),a("video",{key:0,class:"z-[-10] absolute min-w-full min-h-full w-auto h-auto bg-repeat bg-cover top-0 right-0 bottom-0 left-0 object-cover",playsinline:"",autoplay:"",muted:"",loop:"",poster:e.poster||void 0},[n("source",{src:e.video,type:"video/mp4"},null,8,v)],8,f)):(o(),a("picture",T,[e.inComponentLibrary&&e.image?.srcset?(o(),a("source",{key:0,media:"(min-width:768px)",srcset:e.image.srcset},null,8,B)):!e.inComponentLibrary&&e.image?.sizeDesktop?(o(),a("source",{key:1,media:"(min-width:768px)",srcset:e.image.sizeDesktop},null,8,C)):c("",!0),n("img",{class:"w-full h-full object-cover",src:e.inComponentLibrary?e.image?.src:e.image?.sizeMobile||e.image?.src,alt:e.image?.alt||"",loading:"eager",decoding:"async"},null,8,L)]))]))}};r.__docgenInfo={exportName:"default",displayName:"HomeHero",description:"",tags:{},props:[{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"caption",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"video",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"poster",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"inComponentLibrary",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"image",type:{name:"object"},defaultValue:{func:!1,value:`{
    src: '',
    srcset: '',
    sizeDesktop: '',
    sizeMobile: '',
    alt: ''
}`}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/HomeHero/HomeHero.vue"]};const{expect:t}=__STORYBOOK_MODULE_TEST__,k={title:"Core Components/Home Hero",component:r},s={name:"Primary",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",caption:"waterville maine",image:{src:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",Square_mobile:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg"}},paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},play:async({canvas:e})=>{await t(e.getByText("Lorem ipsum")).toBeInTheDocument(),await t(e.getByText("waterville maine")).toBeInTheDocument()}},i={name:"With Video",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",caption:"waterville maine",image:{src:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",Square_mobile:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg"}},video:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled.mp4",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},play:async({canvas:e})=>{await t(e.getByText("Lorem ipsum")).toBeInTheDocument(),await t(e.getByText("waterville maine")).toBeInTheDocument()}},l={name:"Without Caption",args:{subheading:"Welcome to",heading:"Colby College",caption:"",image:{src:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"campus view",sizes:{Square:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",Square_mobile:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg"}},paragraph:"A top liberal arts college in Waterville, Maine."},play:async({canvas:e})=>{await t(e.getByText("Colby College")).toBeInTheDocument()}},d={name:"In Component Library",args:{subheading:"Discover",heading:"Campus Life",caption:"waterville maine",inComponentLibrary:!0,image:{src:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"campus life",sizes:{Square:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",Square_mobile:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg"}},paragraph:"Experience everything Colby has to offer."},play:async({canvas:e})=>{await t(e.getByText("Campus Life")).toBeInTheDocument(),await t(e.getByText("waterville maine")).toBeInTheDocument()}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Lorem ipsum")).toBeInTheDocument();
    await expect(canvas.getByText("waterville maine")).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Lorem ipsum")).toBeInTheDocument();
    await expect(canvas.getByText("waterville maine")).toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Without Caption",
  args: {
    subheading: "Welcome to",
    heading: "Colby College",
    caption: "",
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
      srcset: "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "campus view",
      sizes: {
        Square: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
        Square_mobile: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg"
      }
    },
    paragraph: "A top liberal arts college in Waterville, Maine."
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Colby College")).toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "In Component Library",
  args: {
    subheading: "Discover",
    heading: "Campus Life",
    caption: "waterville maine",
    inComponentLibrary: true,
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
      srcset: "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "campus life",
      sizes: {
        Square: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
        Square_mobile: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg"
      }
    },
    paragraph: "Experience everything Colby has to offer."
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Campus Life")).toBeInTheDocument();
    await expect(canvas.getByText("waterville maine")).toBeInTheDocument();
  }
}`,...d.parameters?.docs?.source}}};const V=["Primary","Video","WithoutCaption","InComponentLibrary"];export{d as InComponentLibrary,s as Primary,i as Video,l as WithoutCaption,V as __namedExportsOrder,k as default};
