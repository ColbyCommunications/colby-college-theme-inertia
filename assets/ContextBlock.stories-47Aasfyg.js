import{_ as t}from"./Context-BS20kXIO.js";import"./iframe-CvNZnjYP.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-CjPuY8dA.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-D1Vp_gOm.js";import"./Button-9GO_4rSf.js";const p={title:"Blocks/Context",component:t,tags:["!autodocs"],argTypes:{subheading:{name:"Sub Heading",control:"text",table:{category:"Wordpress Fields"}},heading:{name:"Heading",control:"text",table:{category:"Wordpress Fields"}},paragraph:{name:"Paragraph",control:"text",table:{category:"Wordpress Fields"}},size:{table:{disable:!0}},align:{table:{disable:!0}},type:{table:{disable:!0}},buttons:{table:{disable:!0}},isStatic:{table:{disable:!0}},hero:{table:{disable:!0}},date:{table:{disable:!0}},btnType:{table:{disable:!0}},btnSize:{table:{disable:!0}}}},r=a=>({components:{Context:t},setup(){return window.colby=window.colby||{},window.colby.DISABLE_ANIMATIONS=!0,{args:a}},template:`<div :class="args.type === 'light' ? 'bg-indigo p-10' : 'bg-white p-10'"><Context v-bind="args" /></div>`}),e={name:"Default",render:r,args:{size:"medium",align:"left",type:"dark",subheading:"Academics",heading:"Explore Our Programs",paragraph:"Colby offers more than 60 majors and minors across the liberal arts and sciences.",buttons:{items:[{button:{url:"#",title:"Learn More",target:""}}]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default",
  render,
  args: {
    size: "medium",
    align: "left",
    type: "dark",
    subheading: "Academics",
    heading: "Explore Our Programs",
    paragraph: "Colby offers more than 60 majors and minors across the liberal arts and sciences.",
    buttons: {
      items: [{
        button: {
          url: "#",
          title: "Learn More",
          target: ""
        }
      }]
    }
  }
}`,...e.parameters?.docs?.source}}};const c=["Default"];export{e as Default,c as __namedExportsOrder,p as default};
