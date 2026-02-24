import{c as i,a as n,e as r,F as m,r as h,l as y,d as c}from"./iframe-BfBFAde5.js";import{_ as l}from"./Context-Dp7yX81d.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-T77HtXsG.js";import"./ButtonGroup-DeVPz35K.js";import"./Button-u50yI3p6.js";const f={class:"icon-section py-24 relative bg-blueslate__pattern bg-cover bg-center space-y-16"},x={class:"icon-section__inner grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"},w={class:"icon-section__context md:col-span-8 md:col-start-3"},b={class:"icon-section__inner grid grid-cols-12 gap-x-10 gap-y-16 max-w-screen-2xl w-full px-5 my-0 mx-auto"},_=["src","alt"],p={__name:"IconSection",props:{subheading:{type:String,default:""},heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]},items:{type:Array,default:()=>[]}},setup(e){const u=e,d=y(()=>u.buttons.map(t=>({button:{url:t.url,title:t.title,target:t.target||""}})));return(t,v)=>(c(),i("div",f,[n("div",x,[n("div",w,[r(l,{size:"large",type:"light",align:"center",subheading:e.subheading,heading:e.heading,paragraph:e.paragraph,buttons:{items:d.value}},null,8,["subheading","heading","paragraph","buttons"])])]),n("div",b,[(c(!0),i(m,null,h(e.items,(a,g)=>(c(),i("div",{key:g,class:"icon-section__item flex flex-col items-center col-span-6 md:col-span-3"},[n("img",{class:"icon-section__image w-40 mb-4",src:a.image?.sizes?.Square||a.image?.src,alt:a.image?.alt},null,8,_),r(l,{size:"medium",type:"light",align:"center",heading:a.heading,paragraph:a.paragraph},null,8,["heading","paragraph"])]))),128))])]))}};p.__docgenInfo={exportName:"default",displayName:"IconSection",description:"",tags:{},props:[{name:"subheading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/IconSection/IconSection.vue"]};const{expect:o}=__STORYBOOK_MODULE_TEST__,S={title:"Core Components/Icon Section",component:p,tags:["autodocs"]},s={name:"Default",args:{subheading:"Why Join",heading:"A global online community awaits.",paragraph:"Join an exclusive network of talented alumni to build and expand professional relationships.",buttons:[{url:"#",title:"Join Now"}],items:[{image:{src:"https://placehold.co/160x160",alt:"Connect"},heading:"Connect",paragraph:"Find and reminisce with fellow graduates, see what they have been up to and stay in touch."},{image:{src:"https://placehold.co/160x160",alt:"Give back"},heading:"Give back",paragraph:"Introduce, employ and offer to act as a mentor to our graduating students."},{image:{src:"https://placehold.co/160x160",alt:"Expand"},heading:"Expand",paragraph:"Leverage your professional network to get introduced to people you should know."},{image:{src:"https://placehold.co/160x160",alt:"Re-connect"},heading:"Re-connect with classmates",paragraph:"Colby Connect allows you to use the trusted Colby College environment to expand your professional network."}]},play:async({canvas:e})=>{await o(e.getByText("A global online community awaits.")).toBeInTheDocument(),await o(e.getByText("Connect")).toBeInTheDocument(),await o(e.getByText("Give back")).toBeInTheDocument(),await o(e.getByText("Join Now")).toBeInTheDocument()}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("A global online community awaits.")).toBeInTheDocument();
    await expect(canvas.getByText("Connect")).toBeInTheDocument();
    await expect(canvas.getByText("Give back")).toBeInTheDocument();
    await expect(canvas.getByText("Join Now")).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};const E=["Default"];export{s as Default,E as __namedExportsOrder,S as default};
