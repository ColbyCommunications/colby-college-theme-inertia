import{c as s,a,e as h,g as C,m as y,n as c,F as f,h as b,b as x,l as k,d as t}from"./iframe-BfBFAde5.js";import{_ as W}from"./Context-Dp7yX81d.js";import{_ as w}from"./Picture-CxKtrm5G.js";import{_ as H}from"./Video-bD-NLK8l.js";import{_ as I}from"./Icon-BG0snce_.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-T77HtXsG.js";import"./ButtonGroup-DeVPz35K.js";import"./Button-u50yI3p6.js";const V={class:"overlay-hero__inner mx-auto my-0 grid w-full max-w-screen-2xl gap-x-10 px-5 md:grid-cols-12"},D={class:"overlay-hero__main col-span-12 lg:col-span-5"},O={class:"video relative w-full overflow-hidden pb-[56.25%]"},L={class:"video__overlay group absolute z-10 flex h-full w-full cursor-pointer items-center justify-center transition-all duration-200 ease-in-out"},S=["poster"],E=["src"],T={__name:"OverlayHero",props:{size:{type:String,default:"large"},subheading:{type:String,default:""},heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]},image:{type:Object,default:null},video:{type:Object,default:null},videoLoop:{type:String,default:""},fromPage:{type:Boolean,default:!1}},setup(e){const n=e,l=x(null),r=x(!1),B=k(()=>n.image&&n.image.sizes&&n.image.sizes.Hero?n.image.sizes.Hero:"");function z(){if(r.value=!0,l.value){const p=l.value.querySelector(".video");p&&p.click()}}return(p,v)=>(t(),s("div",{ref_key:"overlayHeroRef",ref:l,class:c(["overlay-hero relative overflow-hidden",[e.video?"h-[calc(100vh_-_100px)] md:h-auto":["h-[calc(100vh_-_100px)]",e.size==="medium"?"md:h-[400px]":""]]])},[a("div",{class:c(["overlay-hero__bottom absolute bottom-0 left-0 z-[11] w-full space-y-12 pt-40 pb-16 transition-all duration-200 ease-in-out md:space-y-20",{"invisible opacity-0":r.value}]),style:{background:"linear-gradient(180deg, rgba(1, 33, 105, 0) 0%, rgba(14, 20, 34, 0.4) 25%)"}},[a("div",V,[a("div",D,[h(W,{hero:!0,size:e.size||"large",type:"light",subheading:e.subheading,heading:e.heading,paragraph:e.paragraph,buttons:{items:e.buttons}},null,8,["size","subheading","heading","paragraph","buttons"]),e.video&&e.video.id?(t(),s("button",{key:0,class:"btn group mt-4 inline-flex flex-row items-center space-x-1.5 rounded border border-solid border-indigo-800 bg-indigo/20 px-3.5 py-1 font-body text-12 leading-130 font-normal text-white outline-offset-[-1px] transition-all duration-200 ease-in-out focus:outline focus:outline-2 focus:outline-canary",onClick:z},[h(I,{name:"play",class:"w-3 fill-canary transition-all duration-400 ease-in-out group-hover:fill-white"}),v[0]||(v[0]=a("span",{class:"btn__text"},[C(" Watch "),a("div",{class:"btn__border block h-px w-0 bg-white transition-all duration-200 ease-in-out group-hover:w-full"})],-1))])):y("",!0)])])],2),e.video&&e.video.id?(t(),s(f,{key:0},[a("div",{class:c(["overlay-hero__screen absolute top-0 left-0 h-full w-full",{"invisible opacity-0":r.value}])},null,2),h(H,{id:e.video.id,"play-icon":!1,image:e.image||{}},null,8,["id","image"])],64)):e.fromPage||!e.video&&!e.videoLoop?(t(),s(f,{key:1},[e.image?(t(),b(w,{key:0,class:"absolute top-0 left-0 z-[-10] h-full w-full object-cover",srcset:e.image.srcset,src:e.image.src,"size-desktop":e.image.sizes?e.image.sizes.Hero:"","size-mobile":e.image.sizes?e.image.sizes.Hero:"",alt:e.image.alt||""},null,8,["srcset","src","size-desktop","size-mobile","alt"])):y("",!0)],64)):(t(),s(f,{key:2},[a("div",{class:c(["overlay-hero__screen absolute top-0 left-0 h-full w-full",{"invisible opacity-0":r.value}])},null,2),a("div",O,[a("div",L,[e.videoLoop?(t(),s("video",{key:0,class:"absolute top-0 right-0 bottom-0 left-0 z-[-10] h-auto min-h-full w-auto min-w-full bg-cover bg-repeat object-cover",playsinline:"",autoplay:"",muted:"",loop:"",poster:B.value||void 0},[a("source",{src:e.videoLoop,type:"video/mp4"},null,8,E)],8,S)):e.image?(t(),b(w,{key:1,class:"absolute top-0 left-0 z-[-10] h-full w-full object-cover",srcset:e.image.srcset,src:e.image.src,"size-desktop":e.image.sizes?e.image.sizes.Hero:"","size-mobile":e.image.sizes?e.image.sizes.Hero:"",alt:e.image.alt||""},null,8,["srcset","src","size-desktop","size-mobile","alt"])):y("",!0)])])],64))],2))}};T.__docgenInfo={exportName:"default",displayName:"OverlayHero",description:"",tags:{},props:[{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"large"'}},{name:"subheading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"image",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"video",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"videoLoop",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"fromPage",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/OverlayHero/OverlayHero.vue"]};const{expect:o}=__STORYBOOK_MODULE_TEST__,Y={title:"Core Components/Overlay Hero",component:T,tags:["autodocs"],argTypes:{size:{control:"select",options:["large","medium"]}}},i={name:"With Image",args:{subheading:"Welcome to",heading:"Colby College",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",buttons:[{button:{url:"#",title:"Learn More",target:""}}],image:{src:"https://placehold.co/1280x720",srcset:"https://placehold.co/1280x720",alt:"Campus view",sizes:{Hero:"https://placehold.co/1280x720"}},fromPage:!0},play:async({canvas:e})=>{await o(e.getByText("Welcome to")).toBeInTheDocument(),await o(e.getByText("Colby College")).toBeInTheDocument(),await o(e.getByAltText("Campus view")).toBeInTheDocument()}},u={name:"Medium Size",args:{...i.args,size:"medium"},play:async({canvas:e})=>{await o(e.getByText("Colby College")).toBeInTheDocument()}},m={name:"With YouTube Video",args:{subheading:"Watch our",heading:"Campus Tour",paragraph:"Explore Colby College campus.",buttons:[{button:{url:"#",title:"Explore"}}],video:{id:"dQw4w9WgXcQ"},image:{src:"https://placehold.co/1280x720",srcset:"https://placehold.co/1280x720",alt:"Campus view",sizes:{Hero:"https://placehold.co/1280x720"}}},play:async({canvas:e,userEvent:n})=>{await o(e.getByText("Watch")).toBeInTheDocument(),await o(e.getByText("Campus Tour")).toBeInTheDocument();const l=e.getByText("Watch").closest("button");await n.click(l)}},d={name:"With Video Loop",args:{subheading:"Experience",heading:"Colby in Motion",paragraph:"A looping background video.",buttons:[],videoLoop:"https://example.com/campus-loop.mp4",image:{src:"https://placehold.co/1280x720",srcset:"https://placehold.co/1280x720",alt:"Fallback image",sizes:{Hero:"https://placehold.co/1280x720"}}},play:async({canvas:e})=>{await o(e.getByText("Colby in Motion")).toBeInTheDocument()}},g={name:"No Image or Video",args:{heading:"Text Only Hero",paragraph:"No media provided.",fromPage:!0},play:async({canvas:e})=>{await o(e.getByText("Text Only Hero")).toBeInTheDocument()}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "With Image",
  args: {
    subheading: "Welcome to",
    heading: "Colby College",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buttons: [{
      button: {
        url: "#",
        title: "Learn More",
        target: ""
      }
    }],
    image: {
      src: "https://placehold.co/1280x720",
      srcset: "https://placehold.co/1280x720",
      alt: "Campus view",
      sizes: {
        Hero: "https://placehold.co/1280x720"
      }
    },
    fromPage: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Welcome to")).toBeInTheDocument();
    await expect(canvas.getByText("Colby College")).toBeInTheDocument();
    await expect(canvas.getByAltText("Campus view")).toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Medium Size",
  args: {
    ...WithImage.args,
    size: "medium"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Colby College")).toBeInTheDocument();
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "With YouTube Video",
  args: {
    subheading: "Watch our",
    heading: "Campus Tour",
    paragraph: "Explore Colby College campus.",
    buttons: [{
      button: {
        url: "#",
        title: "Explore"
      }
    }],
    video: {
      id: "dQw4w9WgXcQ"
    },
    image: {
      src: "https://placehold.co/1280x720",
      srcset: "https://placehold.co/1280x720",
      alt: "Campus view",
      sizes: {
        Hero: "https://placehold.co/1280x720"
      }
    }
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await expect(canvas.getByText("Watch")).toBeInTheDocument();
    await expect(canvas.getByText("Campus Tour")).toBeInTheDocument();
    const watchBtn = canvas.getByText("Watch").closest("button");
    await userEvent.click(watchBtn);
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "With Video Loop",
  args: {
    subheading: "Experience",
    heading: "Colby in Motion",
    paragraph: "A looping background video.",
    buttons: [],
    videoLoop: "https://example.com/campus-loop.mp4",
    image: {
      src: "https://placehold.co/1280x720",
      srcset: "https://placehold.co/1280x720",
      alt: "Fallback image",
      sizes: {
        Hero: "https://placehold.co/1280x720"
      }
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Colby in Motion")).toBeInTheDocument();
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "No Image or Video",
  args: {
    heading: "Text Only Hero",
    paragraph: "No media provided.",
    fromPage: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Text Only Hero")).toBeInTheDocument();
  }
}`,...g.parameters?.docs?.source}}};const U=["WithImage","Medium","WithVideo","WithVideoLoop","NoMedia"];export{u as Medium,g as NoMedia,i as WithImage,m as WithVideo,d as WithVideoLoop,U as __namedExportsOrder,Y as default};
