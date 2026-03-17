import{c,a as n,b as l,F as m,j as h,i as y,o as r}from"./iframe-BwF8kxoK.js";import{_ as p}from"./Context-BeYuepMJ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-Dc-zETJ_.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-3HwiSt1F.js";import"./Button-BRr3CzHO.js";const f={class:"icon-section py-24 relative bg-blueslate__pattern bg-cover bg-center space-y-16"},x={class:"icon-section__inner grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"},b={class:"icon-section__context md:col-span-8 md:col-start-3"},w={class:"icon-section__inner grid grid-cols-12 gap-x-10 gap-y-16 max-w-screen-2xl w-full px-5 my-0 mx-auto"},_=["src","alt"],i={__name:"IconSection",props:{subheading:{type:String,default:""},heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]},items:{type:Array,default:()=>[]}},setup(e){const u=e,d=y(()=>u.buttons.map(t=>({button:{url:t.url,title:t.title,target:t.target||""}})));return(t,v)=>(r(),c("div",f,[n("div",x,[n("div",b,[l(p,{size:"large",type:"light",align:"center",subheading:e.subheading,heading:e.heading,paragraph:e.paragraph,buttons:{items:d.value}},null,8,["subheading","heading","paragraph","buttons"])])]),n("div",w,[(r(!0),c(m,null,h(e.items,(a,g)=>(r(),c("div",{key:g,class:"icon-section__item flex flex-col items-center col-span-6 md:col-span-3"},[n("img",{class:"icon-section__image w-40 mb-4",src:a.image?.sizes?.Square||a.image?.src,alt:a.image?.alt},null,8,_),l(p,{size:"medium",type:"light",align:"center",heading:a.heading,paragraph:a.paragraph},null,8,["heading","paragraph"])]))),128))])]))}};i.__docgenInfo=Object.assign({displayName:i.name??i.__name},{exportName:"default",displayName:"IconSection",description:"",tags:{},props:[{name:"subheading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/IconSection/IconSection.vue"]});const{expect:o}=__STORYBOOK_MODULE_TEST__,E={title:"Core Components/Icon Section",component:i,tags:["autodocs"]},s={name:"Default",args:{subheading:"Why Join",heading:"A global online community awaits.",paragraph:"Join an exclusive network of talented alumni to build and expand professional relationships.",buttons:[{url:"#",title:"Join Now"}],items:[{image:{src:"https://placehold.co/160x160",alt:"Connect"},heading:"Connect",paragraph:"Find and reminisce with fellow graduates, see what they have been up to and stay in touch."},{image:{src:"https://placehold.co/160x160",alt:"Give back"},heading:"Give back",paragraph:"Introduce, employ and offer to act as a mentor to our graduating students."},{image:{src:"https://placehold.co/160x160",alt:"Expand"},heading:"Expand",paragraph:"Leverage your professional network to get introduced to people you should know."},{image:{src:"https://placehold.co/160x160",alt:"Re-connect"},heading:"Re-connect with classmates",paragraph:"Colby Connect allows you to use the trusted Colby College environment to expand your professional network."}]},play:async({canvas:e})=>{await o(e.getByText("A global online community awaits.")).toBeInTheDocument(),await o(e.getByText("Connect")).toBeInTheDocument(),await o(e.getByText("Give back")).toBeInTheDocument(),await o(e.getByText("Join Now")).toBeInTheDocument()}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const J=["Default"];export{s as Default,J as __namedExportsOrder,E as default};
