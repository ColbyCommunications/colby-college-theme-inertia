import{c as d,a,e as s,g as p,t as m,l as r,d as g}from"./iframe-smcTNgWJ.js";import{_ as l}from"./Context-DqAioVFh.js";import{_ as h}from"./AnimatedBorder-CXfGb79h.js";import{_ as f}from"./Picture-DxrAmS_6.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-WtWkjzc1.js";import"./ButtonGroup-0OSwBJFl.js";import"./Button-BaqycuYP.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";const b={class:"featured-post"},v={class:"featured-post__inner relative md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"},_={class:"featured-post__context md:col-start-9 lg:col-start-10 md:col-span-4 lg:col-span-3 md:flex md:order-2 items-center"},x={class:"featured-post__caption md:z-[-1] md:absolute top-0 right-[20px] md:w-1/2 pb-3.5 md:pb-0 font-extended font-bold text-12 tracking-8 text-azure uppercase text-right border-b md:border-b-0 border-azure border-solid mt-14 md:mt-0"},y={class:"featured-post__main md:col-span-8"},z={class:"featured-post__image"},k={class:"featured-post__post relative mt-6"},i={__name:"FeaturedPost",props:{heading:{type:String,default:""},paragraph:{type:String,default:""},caption:{type:String,default:""},buttons:{type:Array,default:()=>[]},post:{type:Object,default:()=>({})}},setup(e){const n=e,c=r(()=>n.buttons.map(t=>({button:{url:t.url,title:t.title,target:t.target||""}}))),u=r(()=>(n.post.buttons||[]).map(t=>({button:{url:t.url,title:t.title,target:t.target||""}})));return(t,F)=>(g(),d("div",b,[a("div",v,[a("div",_,[s(l,{size:"large",type:"dark",arrow:!0,reverse:!0,heading:e.heading,paragraph:e.paragraph,buttons:{items:c.value},"btn-type":"light"},null,8,["heading","paragraph","buttons"])]),a("div",x,[s(h,{class:"featured-post__border hidden md:block w-0 h-px md:mb-3.5 bg-azure transition-all duration-200 ease-in-out"}),p(" "+m(e.caption),1)]),a("div",y,[a("div",z,[s(f,{class:"w-full h-full object-cover","size-desktop":e.post.image?.sizes?.Rectangle||e.post.image?.srcset,"size-mobile":e.post.image?.sizes?.Rectangle||e.post.image?.src,alt:e.post.image?.alt||""},null,8,["size-desktop","size-mobile","alt"])]),a("div",k,[s(l,{size:"small",type:"dark",subheading:e.post.date,heading:e.post.heading,paragraph:e.post.paragraph,buttons:{items:u.value}},null,8,["subheading","heading","paragraph","buttons"])])])])]))}};i.__docgenInfo={exportName:"default",displayName:"FeaturedPost",description:"",tags:{},props:[{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"caption",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"post",type:{name:"object"},defaultValue:{func:!1,value:"{}"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/FeaturedPost/FeaturedPost.vue"]};const j={title:"Core Components/Featured Post",component:i,tags:["autodocs"]},o={name:"Default",args:{heading:"Events",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",caption:"Allen & Benner",buttons:[{url:"#",title:"All Events"}],post:{date:"June 24, 2022",heading:"Lorem ipsum dolor sit amet, consectet.",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",buttons:[{url:"#",title:"All Events"}],image:{srcset:"https://placehold.co/760x430",src:"https://placehold.co/410x290",alt:"Featured post image",sizes:{Rectangle:"https://placehold.co/760x430"}}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
  }
}`,...o.parameters?.docs?.source}}};const R=["Default"];export{o as Default,R as __namedExportsOrder,j as default};
