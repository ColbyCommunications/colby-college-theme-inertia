import{c as l,a as s,n as o,e as u,d as g}from"./iframe-CbKlnwd0.js";import{_ as c}from"./Context-Dth8feKv.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-DIYzKvUW.js";import"./ButtonGroup-EJ7XitIs.js";import"./Button-V7S-XXYc.js";const d={class:"context-section"},i={__name:"ContextSection",props:{hero:{type:Boolean,default:!1},align:{type:String,default:"left"},size:{type:String,default:"medium"},subheading:{type:String,default:""},heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]}},setup(e){return(m,p)=>(g(),l("div",d,[s("div",{class:o(["context-section__inner mx-auto my-0 w-full max-w-screen-2xl gap-x-10 px-5 md:grid md:grid-cols-12",{"my-24":e.hero}])},[s("div",{class:o(["md:col-span-8",{"md:col-start-3":e.align==="center"}])},[u(c,{hero:e.hero,align:e.align,size:e.size,subheading:e.subheading,heading:e.heading,paragraph:e.paragraph,buttons:{items:e.buttons}},null,8,["hero","align","size","subheading","heading","paragraph","buttons"])],2)],2)]))}};i.__docgenInfo={exportName:"default",displayName:"ContextSection",description:"",tags:{},props:[{name:"hero",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"align",type:{name:"string"},defaultValue:{func:!1,value:'"left"'}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'}},{name:"subheading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/ContextSection/ContextSection.vue"]};const A={title:"Core Components/Context Section",component:i},a={name:"Default",args:{align:"left",heading:"Lorem Ipsum",subheading:"Anthropology",paragraph:"As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian."}},n={name:"Center Align",args:{align:"center",heading:"Lorem Ipsum",subheading:"Anthropology",paragraph:"As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian."}},t={name:"Large",args:{size:"large",align:"center",heading:"Lorem Ipsum",subheading:"Anthropology",paragraph:"As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian."}},r={name:"With Buttons",args:{buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}},{button:{size:"small",title:"button2",url:"https://www.colby.edu"}}],align:"center",heading:"Lorem Ipsum",subheading:"Anthropology",paragraph:"As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian."}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Default",
  args: {
    align: "left",
    heading: "Lorem Ipsum",
    subheading: "Anthropology",
    paragraph: "As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian."
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Center Align",
  args: {
    align: "center",
    heading: "Lorem Ipsum",
    subheading: "Anthropology",
    paragraph: "As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian."
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Large",
  args: {
    size: "large",
    align: "center",
    heading: "Lorem Ipsum",
    subheading: "Anthropology",
    paragraph: "As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian."
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "With Buttons",
  args: {
    buttons: [{
      button: {
        size: "small",
        title: "button1",
        url: "https://www.colby.edu"
      }
    }, {
      button: {
        size: "small",
        title: "button2",
        url: "https://www.colby.edu"
      }
    }],
    align: "center",
    heading: "Lorem Ipsum",
    subheading: "Anthropology",
    paragraph: "As a semester-long project, students will create their own imaginary countries and give regular reports on their geography, folklore, education and political systems. Conducted in Russian."
  }
}`,...r.parameters?.docs?.source}}};const v=["Default","RightAlign","Large","WithButtons"];export{a as Default,t as Large,n as RightAlign,r as WithButtons,v as __namedExportsOrder,A as default};
