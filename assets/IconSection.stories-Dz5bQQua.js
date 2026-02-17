import{c as s,a as t,e as i,F as g,r as h,l as m,d as r}from"./iframe-smcTNgWJ.js";import{_ as l}from"./Context-DqAioVFh.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-WtWkjzc1.js";import"./ButtonGroup-0OSwBJFl.js";import"./Button-BaqycuYP.js";const f={class:"icon-section py-24 relative bg-blueslate__pattern bg-cover bg-center space-y-16"},y={class:"icon-section__inner grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"},b={class:"icon-section__context md:col-span-8 md:col-start-3"},x={class:"icon-section__inner grid grid-cols-12 gap-x-10 gap-y-16 max-w-screen-2xl w-full px-5 my-0 mx-auto"},w=["src","alt"],c={__name:"IconSection",props:{subheading:{type:String,default:""},heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]},items:{type:Array,default:()=>[]}},setup(e){const p=e,d=m(()=>p.buttons.map(n=>({button:{url:n.url,title:n.title,target:n.target||""}})));return(n,_)=>(r(),s("div",f,[t("div",y,[t("div",b,[i(l,{size:"large",type:"light",align:"center",subheading:e.subheading,heading:e.heading,paragraph:e.paragraph,buttons:{items:d.value}},null,8,["subheading","heading","paragraph","buttons"])])]),t("div",x,[(r(!0),s(g,null,h(e.items,(a,u)=>(r(),s("div",{key:u,class:"icon-section__item flex flex-col items-center col-span-6 md:col-span-3"},[t("img",{class:"icon-section__image w-40 mb-4",src:a.image?.sizes?.Square||a.image?.src,alt:a.image?.alt},null,8,w),i(l,{size:"medium",type:"light",align:"center",heading:a.heading,paragraph:a.paragraph},null,8,["heading","paragraph"])]))),128))])]))}};c.__docgenInfo={exportName:"default",displayName:"IconSection",description:"",tags:{},props:[{name:"subheading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/IconSection/IconSection.vue"]};const E={title:"Core Components/Icon Section",component:c,tags:["autodocs"]},o={name:"Default",args:{subheading:"Why Join",heading:"A global online community awaits.",paragraph:"Join an exclusive network of talented alumni to build and expand professional relationships.",buttons:[{url:"#",title:"Join Now"}],items:[{image:{src:"https://placehold.co/160x160",alt:"Connect"},heading:"Connect",paragraph:"Find and reminisce with fellow graduates, see what they have been up to and stay in touch."},{image:{src:"https://placehold.co/160x160",alt:"Give back"},heading:"Give back",paragraph:"Introduce, employ and offer to act as a mentor to our graduating students."},{image:{src:"https://placehold.co/160x160",alt:"Expand"},heading:"Expand",paragraph:"Leverage your professional network to get introduced to people you should know."},{image:{src:"https://placehold.co/160x160",alt:"Re-connect"},heading:"Re-connect with classmates",paragraph:"Colby Connect allows you to use the trusted Colby College environment to expand your professional network."}]}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    subheading: "Why Join",
    heading: "A global online community awaits.",
    paragraph: "Join an exclusive network of talented alumni to build and expand professional relationships.",
    buttons: [{
      url: "#",
      title: "Join Now"
    }],
    items: [{
      image: {
        src: "https://placehold.co/160x160",
        alt: "Connect"
      },
      heading: "Connect",
      paragraph: "Find and reminisce with fellow graduates, see what they have been up to and stay in touch."
    }, {
      image: {
        src: "https://placehold.co/160x160",
        alt: "Give back"
      },
      heading: "Give back",
      paragraph: "Introduce, employ and offer to act as a mentor to our graduating students."
    }, {
      image: {
        src: "https://placehold.co/160x160",
        alt: "Expand"
      },
      heading: "Expand",
      paragraph: "Leverage your professional network to get introduced to people you should know."
    }, {
      image: {
        src: "https://placehold.co/160x160",
        alt: "Re-connect"
      },
      heading: "Re-connect with classmates",
      paragraph: "Colby Connect allows you to use the trusted Colby College environment to expand your professional network."
    }]
  }
}`,...o.parameters?.docs?.source}}};const J=["Default"];export{o as Default,J as __namedExportsOrder,E as default};
