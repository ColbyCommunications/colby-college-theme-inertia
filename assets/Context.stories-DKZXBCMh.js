import{_ as s}from"./Context-DqAioVFh.js";import"./iframe-smcTNgWJ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-WtWkjzc1.js";import"./ButtonGroup-0OSwBJFl.js";import"./Button-BaqycuYP.js";const p={title:"Core Components/Context",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["xlarge","large","medium","small","xsmall"]},align:{control:"select",options:["left","center"]},type:{control:"select",options:["dark","light"]}}},e={name:"Default",args:{size:"medium",align:"left",type:"dark",subheading:"Academics",heading:"Explore Our Programs",paragraph:"Colby offers more than 60 majors and minors across the liberal arts and sciences.",buttons:{items:[{button:{url:"#",title:"Learn More",target:""}}]}}},t={name:"Multiple Buttons",args:{size:"medium",align:"left",type:"dark",subheading:"Admissions",heading:"Apply to Colby",paragraph:"Begin your journey at one of America's top liberal arts colleges.",buttons:{items:[{button:{url:"#",title:"Apply Now",target:""}},{button:{url:"#",title:"Request Info",target:""}}]}}},n={name:"Centered",args:{size:"large",align:"center",type:"dark",subheading:"Mission",heading:"Our Purpose",paragraph:"Colby is dedicated to the education of thoughtful, capable citizens of the world.",buttons:{items:[{button:{url:"#",title:"Read More",target:""}}]}}},a={name:"Light Type",args:{size:"large",align:"left",type:"light",subheading:"Spotlight",heading:"Faculty Achievements",paragraph:"Celebrating the accomplishments of our distinguished faculty.",buttons:{items:[{button:{url:"#",title:"View All",target:""}}]}},decorators:[()=>({template:'<div class="bg-indigo p-10"><story /></div>'})]},r={name:"No Buttons",args:{size:"medium",align:"left",type:"dark",subheading:"Research",heading:"Student-Faculty Collaboration",paragraph:"Every year, hundreds of students collaborate with faculty on original research projects.",buttons:{items:[]}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default",
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
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Multiple Buttons",
  args: {
    size: "medium",
    align: "left",
    type: "dark",
    subheading: "Admissions",
    heading: "Apply to Colby",
    paragraph: "Begin your journey at one of America's top liberal arts colleges.",
    buttons: {
      items: [{
        button: {
          url: "#",
          title: "Apply Now",
          target: ""
        }
      }, {
        button: {
          url: "#",
          title: "Request Info",
          target: ""
        }
      }]
    }
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Centered",
  args: {
    size: "large",
    align: "center",
    type: "dark",
    subheading: "Mission",
    heading: "Our Purpose",
    paragraph: "Colby is dedicated to the education of thoughtful, capable citizens of the world.",
    buttons: {
      items: [{
        button: {
          url: "#",
          title: "Read More",
          target: ""
        }
      }]
    }
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Light Type",
  args: {
    size: "large",
    align: "left",
    type: "light",
    subheading: "Spotlight",
    heading: "Faculty Achievements",
    paragraph: "Celebrating the accomplishments of our distinguished faculty.",
    buttons: {
      items: [{
        button: {
          url: "#",
          title: "View All",
          target: ""
        }
      }]
    }
  },
  decorators: [() => ({
    template: '<div class="bg-indigo p-10"><story /></div>'
  })]
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "No Buttons",
  args: {
    size: "medium",
    align: "left",
    type: "dark",
    subheading: "Research",
    heading: "Student-Faculty Collaboration",
    paragraph: "Every year, hundreds of students collaborate with faculty on original research projects.",
    buttons: {
      items: []
    }
  }
}`,...r.parameters?.docs?.source}}};const c=["Default","WithMultipleButtons","Centered","LightType","NoButtons"];export{n as Centered,e as Default,a as LightType,r as NoButtons,t as WithMultipleButtons,c as __namedExportsOrder,p as default};
