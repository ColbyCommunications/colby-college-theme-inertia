import{l as u,c as d,a as s,n as m,e as c,h as g,m as p,d as r}from"./iframe-BI_3ezP0.js";import{_ as f}from"./Context-rCALFtqQ.js";import{_ as h}from"./ButtonGroup-DeTJD12j.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-8rV2ZAMN.js";import"./Button-e0IECFmJ.js";const y={class:"inset-widget"},b={class:"inset-widget__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full my-0 mx-auto"},v={class:"inset-widget__widget md:flex justify-between items-center p-10 bg-gray-100 border border-solid border-azure rounded-lg space-y-5 md:space-y-0"},o={__name:"InsetWidget",props:{inset:{type:Boolean,default:!1},size:{type:String,default:"medium"},subheading:{type:String,default:""},heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]}},setup(e){const i=e,l=u(()=>i.buttons.map(a=>({button:{url:a.url,title:a.title,target:a.target||""}})));return(a,I)=>(r(),d("div",y,[s("div",b,[s("div",{class:m(["inset-widget__main",e.inset?"md:col-span-10 md:col-start-2":"md:col-span-12"])},[s("div",v,[c(f,{size:e.size||"medium",subheading:e.subheading,heading:e.heading,paragraph:e.paragraph},null,8,["size","subheading","heading","paragraph"]),e.buttons&&e.buttons.length?(r(),g(h,{key:0,size:"large",items:l.value},null,8,["items"])):p("",!0)])],2)])]))}};o.__docgenInfo={exportName:"default",displayName:"InsetWidget",description:"",tags:{},props:[{name:"inset",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'}},{name:"subheading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/InsetWidget/InsetWidget.vue"]};const S={title:"Core Components/Inset Widget",component:o,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"]}}},t={name:"Default",args:{subheading:"Get Involved",heading:"Ready to Learn More?",paragraph:"Connect with our admissions team to learn more about Colby College.",buttons:[{url:"#",title:"Request Information"},{url:"#",title:"Schedule a Visit"}]}},n={name:"Inset",args:{...t.args,inset:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    subheading: "Get Involved",
    heading: "Ready to Learn More?",
    paragraph: "Connect with our admissions team to learn more about Colby College.",
    buttons: [{
      url: "#",
      title: "Request Information"
    }, {
      url: "#",
      title: "Schedule a Visit"
    }]
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Inset",
  args: {
    ...Default.args,
    inset: true
  }
}`,...n.parameters?.docs?.source}}};const W=["Default","Inset"];export{t as Default,n as Inset,W as __namedExportsOrder,S as default};
