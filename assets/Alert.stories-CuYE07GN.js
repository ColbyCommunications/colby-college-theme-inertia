import{c as p,a as t,n as i,t as s,e as g,l,d as y}from"./iframe-BfBFAde5.js";import{_ as h}from"./ButtonGroup-DeVPz35K.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-u50yI3p6.js";const b={class:"alert__inner grid md:items-center gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"},f={class:"md:flex md:items-start"},x={class:"alert__content md:flex md:mt-0.5 md:mr-4 mb-4 md:mb-0"},T={class:"alert__p font-normal text-14 md:text-16 leading-130 text-white"},m={__name:"Alert",props:{type:{type:String,default:"info"},heading:{type:String,required:!0},paragraph:{type:String,required:!0},buttons:{type:Array,default:()=>[]},buttonType:{type:String,default:"dark"},buttonSize:{type:String,default:"medium"}},setup(e){const r=e,u=l(()=>r.type==="emergency"?"bg-notification-red":"bg-indigo"),d=l(()=>r.type==="emergency"?"text-black underline":"text-canary");return(_,B)=>(y(),p("div",{class:i(["alert py-7",u.value])},[t("div",b,[t("div",f,[t("div",x,[t("div",{class:i(["alert__heading font-extended font-bold text-14 md:text-12 tracking-8 uppercase mr-4 whitespace-nowrap mb-2 md:mb-0",d.value])},s(e.heading)+": ",3),t("p",T,s(e.paragraph),1)]),g(h,{type:e.buttonType,size:e.buttonSize,items:e.buttons,class:"shrink-0"},null,8,["type","size","items"])])])],2))}};m.__docgenInfo={exportName:"default",displayName:"Alert",description:"",tags:{},props:[{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'info'"}},{name:"heading",type:{name:"string"},required:!0},{name:"paragraph",type:{name:"string"},required:!0},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"buttonType",type:{name:"string"},defaultValue:{func:!1,value:"'dark'"}},{name:"buttonSize",type:{name:"string"},defaultValue:{func:!1,value:"'medium'"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Alert/Alert.vue"]};const{expect:a}=__STORYBOOK_MODULE_TEST__,v={title:"Core Components/Alert",component:m,argTypes:{type:{control:"select",options:["info","emergency"]},buttonType:{control:"select",options:["dark","light"]},buttonSize:{control:"select",options:["small","medium","large"]}}},c={label:"Alert",primary:!0,heading:"Alert",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}],buttonType:"dark",buttonSize:"small"},n={name:"Info",args:{...c,type:"info"},play:async({canvas:e})=>{await a(e.getByText("Alert:")).toBeInTheDocument(),await a(e.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument(),await a(e.getByText("button1")).toBeInTheDocument()}},o={name:"Emergency",args:{...c,type:"emergency"},play:async({canvas:e})=>{await a(e.getByText("Alert:")).toBeInTheDocument(),await a(e.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Info",
  args: {
    ...globalArgs,
    type: "info"
  },
  play: async ({
    canvas
  }) => {
    // The Alert component renders heading with a trailing colon: "Alert:"
    await expect(canvas.getByText("Alert:")).toBeInTheDocument();
    await expect(canvas.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument();
    await expect(canvas.getByText("button1")).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Emergency",
  args: {
    ...globalArgs,
    type: "emergency"
  },
  play: async ({
    canvas
  }) => {
    // The Alert component renders heading with a trailing colon: "Alert:"
    await expect(canvas.getByText("Alert:")).toBeInTheDocument();
    await expect(canvas.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};const I=["Primary","Secondary"];export{n as Primary,o as Secondary,I as __namedExportsOrder,v as default};
