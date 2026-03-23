import{c as p,a as l,n as y,b as h,h as B,g as f,i as T,o as m}from"./iframe-DUhMLh8B.js";import{_ as I}from"./Context-B_YdcaCR.js";import{_ as x}from"./ButtonGroup-ZRNuMhM7.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-CukHTkLL.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./Button-Z4CuRNZo.js";const b={class:"inset-widget"},v={class:"inset-widget__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full my-0 mx-auto"},w={class:"inset-widget__widget md:flex justify-between items-center p-10 bg-gray-100 border border-solid border-azure rounded-lg space-y-5 md:space-y-0"},u={__name:"InsetWidget",props:{inset:{type:Boolean,default:!1},size:{type:String,default:"medium"},subheading:{type:String,default:""},heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]}},setup(e){const g=e,d=T(()=>g.buttons.map(n=>({button:{url:n.url,title:n.title,target:n.target||""}})));return(n,D)=>(m(),p("div",b,[l("div",v,[l("div",{class:y(["inset-widget__main",e.inset?"md:col-span-10 md:col-start-2":"md:col-span-12"])},[l("div",w,[h(I,{size:e.size||"medium",subheading:e.subheading,heading:e.heading,paragraph:e.paragraph},null,8,["size","subheading","heading","paragraph"]),e.buttons&&e.buttons.length?(m(),B(x,{key:0,size:"large",items:d.value},null,8,["items"])):f("",!0)])],2)])]))}};u.__docgenInfo=Object.assign({displayName:u.name??u.__name},{exportName:"default",displayName:"InsetWidget",description:"",tags:{},props:[{name:"inset",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'}},{name:"subheading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/InsetWidget/InsetWidget.vue"]});const{expect:t}=__STORYBOOK_MODULE_TEST__,V={title:"Core Components/Inset Widget",component:u,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"]}}},a={name:"Default",args:{subheading:"Get Involved",heading:"Ready to Learn More?",paragraph:"Connect with our admissions team to learn more about Colby College.",buttons:[{url:"#",title:"Request Information"},{url:"#",title:"Schedule a Visit"}]},play:async({canvas:e})=>{await t(e.getByText("Get Involved")).toBeInTheDocument(),await t(e.getByText("Ready to Learn More?")).toBeInTheDocument(),await t(e.getByText("Request Information")).toBeInTheDocument(),await t(e.getByText("Schedule a Visit")).toBeInTheDocument()}},o={name:"Inset",args:{...a.args,inset:!0},play:async({canvas:e})=>{await t(e.getByText("Ready to Learn More?")).toBeInTheDocument()}},s={name:"Small",args:{...a.args,size:"small"},play:async({canvas:e})=>{await t(e.getByText("Ready to Learn More?")).toBeInTheDocument()}},r={name:"Large",args:{...a.args,size:"large"},play:async({canvas:e})=>{await t(e.getByText("Ready to Learn More?")).toBeInTheDocument()}},i={name:"Without Buttons",args:{subheading:"Notice",heading:"Information Only",paragraph:"No action buttons in this variant."},play:async({canvas:e})=>{await t(e.getByText("Information Only")).toBeInTheDocument()}},c={name:"Without Button Target",args:{subheading:"Action",heading:"Take Action",paragraph:"Buttons without target attribute.",buttons:[{url:"#",title:"Click Here"}]},play:async({canvas:e})=>{await t(e.getByText("Take Action")).toBeInTheDocument(),await t(e.getByText("Click Here")).toBeInTheDocument()}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Get Involved")).toBeInTheDocument();
    await expect(canvas.getByText("Ready to Learn More?")).toBeInTheDocument();
    await expect(canvas.getByText("Request Information")).toBeInTheDocument();
    await expect(canvas.getByText("Schedule a Visit")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Inset",
  args: {
    ...Default.args,
    inset: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Ready to Learn More?")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Small",
  args: {
    ...Default.args,
    size: "small"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Ready to Learn More?")).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Large",
  args: {
    ...Default.args,
    size: "large"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Ready to Learn More?")).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Without Buttons",
  args: {
    subheading: "Notice",
    heading: "Information Only",
    paragraph: "No action buttons in this variant."
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Information Only")).toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Without Button Target",
  args: {
    subheading: "Action",
    heading: "Take Action",
    paragraph: "Buttons without target attribute.",
    buttons: [{
      url: "#",
      title: "Click Here"
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Take Action")).toBeInTheDocument();
    await expect(canvas.getByText("Click Here")).toBeInTheDocument();
  }
}`,...c.parameters?.docs?.source}}};const M=["Default","Inset","Small","Large","WithoutButtons","WithoutButtonTarget"];export{a as Default,o as Inset,r as Large,s as Small,c as WithoutButtonTarget,i as WithoutButtons,M as __namedExportsOrder,V as default};
