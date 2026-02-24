import{c as m,a,e as s,g,t as h,l as i,d as f}from"./iframe-BfBFAde5.js";import{_ as c}from"./Context-Dp7yX81d.js";import{_ as x}from"./AnimatedBorder-CQpfkfOi.js";import{_ as y}from"./Picture-CxKtrm5G.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-T77HtXsG.js";import"./ButtonGroup-DeVPz35K.js";import"./Button-u50yI3p6.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";const b={class:"featured-post"},v={class:"featured-post__inner relative md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"},B={class:"featured-post__context md:col-start-9 lg:col-start-10 md:col-span-4 lg:col-span-3 md:flex md:order-2 items-center"},_={class:"featured-post__caption md:z-[-1] md:absolute top-0 right-[20px] md:w-1/2 pb-3.5 md:pb-0 font-extended font-bold text-12 tracking-8 text-azure uppercase text-right border-b md:border-b-0 border-azure border-solid mt-14 md:mt-0"},w={class:"featured-post__main md:col-span-8"},T={class:"featured-post__image"},D={class:"featured-post__post relative mt-6"},p={__name:"FeaturedPost",props:{heading:{type:String,default:""},paragraph:{type:String,default:""},caption:{type:String,default:""},buttons:{type:Array,default:()=>[]},post:{type:Object,default:()=>({})}},setup(e){const l=e,u=i(()=>l.buttons.map(t=>({button:{url:t.url,title:t.title,target:t.target||""}}))),d=i(()=>(l.post.buttons||[]).map(t=>({button:{url:t.url,title:t.title,target:t.target||""}})));return(t,N)=>(f(),m("div",b,[a("div",v,[a("div",B,[s(c,{size:"large",type:"dark",arrow:!0,reverse:!0,heading:e.heading,paragraph:e.paragraph,buttons:{items:u.value},"btn-type":"light"},null,8,["heading","paragraph","buttons"])]),a("div",_,[s(x,{class:"featured-post__border hidden md:block w-0 h-px md:mb-3.5 bg-azure transition-all duration-200 ease-in-out"}),g(" "+h(e.caption),1)]),a("div",w,[a("div",T,[s(y,{class:"w-full h-full object-cover","size-desktop":e.post.image?.sizes?.Rectangle||e.post.image?.srcset,"size-mobile":e.post.image?.sizes?.Rectangle||e.post.image?.src,alt:e.post.image?.alt||""},null,8,["size-desktop","size-mobile","alt"])]),a("div",D,[s(c,{size:"small",type:"dark",subheading:e.post.date,heading:e.post.heading,paragraph:e.post.paragraph,buttons:{items:d.value}},null,8,["subheading","heading","paragraph","buttons"])])])])]))}};p.__docgenInfo={exportName:"default",displayName:"FeaturedPost",description:"",tags:{},props:[{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"caption",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"post",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/FeaturedPost/FeaturedPost.vue"]};const{expect:n}=__STORYBOOK_MODULE_TEST__,L={title:"Core Components/Featured Post",component:p,tags:["autodocs"]},o={name:"Default",args:{heading:"Events",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",caption:"Allen & Benner",buttons:[{url:"#",title:"All Events"}],post:{date:"June 24, 2022",heading:"Lorem ipsum dolor sit amet, consectet.",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",buttons:[{url:"#",title:"All Events"}],image:{srcset:"https://placehold.co/760x430",src:"https://placehold.co/410x290",alt:"Featured post image",sizes:{Rectangle:"https://placehold.co/760x430"}}}},play:async({canvas:e})=>{await n(e.getByText("Events")).toBeInTheDocument(),await n(e.getByText("June 24, 2022")).toBeInTheDocument(),await n(e.getByAltText("Featured post image")).toBeInTheDocument()}},r={name:"Without Post Buttons",args:{heading:"News",paragraph:"Stay up to date with the latest from Colby.",buttons:[{url:"#",title:"All News"}],post:{date:"March 15, 2024",heading:"Faculty Research Spotlight",paragraph:"Exploring new frontiers in environmental science.",buttons:[],image:{srcset:"https://placehold.co/760x430",src:"https://placehold.co/410x290",alt:"Research spotlight image",sizes:{Rectangle:"https://placehold.co/760x430"}}}},play:async({canvas:e})=>{await n(e.getByText("News")).toBeInTheDocument(),await n(e.getByText("March 15, 2024")).toBeInTheDocument(),await n(e.getByText("All News")).toBeInTheDocument()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    heading: "Events",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",
    caption: "Allen & Benner",
    buttons: [{
      url: "#",
      title: "All Events"
    }],
    post: {
      date: "June 24, 2022",
      heading: "Lorem ipsum dolor sit amet, consectet.",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",
      buttons: [{
        url: "#",
        title: "All Events"
      }],
      image: {
        srcset: "https://placehold.co/760x430",
        src: "https://placehold.co/410x290",
        alt: "Featured post image",
        sizes: {
          Rectangle: "https://placehold.co/760x430"
        }
      }
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Events")).toBeInTheDocument();
    await expect(canvas.getByText("June 24, 2022")).toBeInTheDocument();
    await expect(canvas.getByAltText("Featured post image")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Without Post Buttons",
  args: {
    heading: "News",
    paragraph: "Stay up to date with the latest from Colby.",
    buttons: [{
      url: "#",
      title: "All News"
    }],
    post: {
      date: "March 15, 2024",
      heading: "Faculty Research Spotlight",
      paragraph: "Exploring new frontiers in environmental science.",
      buttons: [],
      image: {
        srcset: "https://placehold.co/760x430",
        src: "https://placehold.co/410x290",
        alt: "Research spotlight image",
        sizes: {
          Rectangle: "https://placehold.co/760x430"
        }
      }
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("News")).toBeInTheDocument();
    await expect(canvas.getByText("March 15, 2024")).toBeInTheDocument();
    await expect(canvas.getByText("All News")).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};const O=["Default","WithoutPostButtons"];export{o as Default,r as WithoutPostButtons,O as __namedExportsOrder,L as default};
