import{c as t,a as r,e as g,F as p,r as f,l as h,d as a,n as y,t as o}from"./iframe-smcTNgWJ.js";import{_ as x}from"./Context-DqAioVFh.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-WtWkjzc1.js";import"./ButtonGroup-0OSwBJFl.js";import"./Button-BaqycuYP.js";const _={class:"list-context"},k={class:"list-context__inner md:grid grid-cols-8 gap-10 max-w-screen-2xl w-full space-y-8 md:space-y-0"},b={class:"list-context__context md:col-span-5"},v={class:"list-context__main md:col-span-3"},C={class:"list-context__list space-y-2 ml-4"},S=["href"],z={key:1,class:"text-indigo"},u={__name:"ListContext",props:{size:{type:String,default:"medium"},subheading:{type:String,default:""},heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]},items:{type:Array,default:()=>[]}},setup(e){const c=e,m=h(()=>c.buttons.map(s=>({button:{url:s.url,title:s.title,target:s.target||""}})));return(s,L)=>(a(),t("div",_,[r("div",k,[r("div",b,[g(x,{size:"small","is-static":e.size==="small",subheading:e.subheading,heading:e.heading,paragraph:e.paragraph,buttons:{items:m.value}},null,8,["is-static","subheading","heading","paragraph","buttons"])]),r("div",v,[r("ul",C,[(a(!0),t(p,null,f(e.items,(l,d)=>(a(),t("li",{key:d,class:y(["font-body text-indigo-600 list-disc",e.size==="small"?"font-semibold text-14 leading-130":"font-bold text-20 leading-120"])},[l.link?.url?(a(),t("a",{key:0,class:"text-indigo hover:text-indigo-600 no-underline hover:underline transition-all duration-200 ease-in-out",href:l.link.url},o(l.link.title),9,S)):(a(),t("span",z,o(l.title),1))],2))),128))])])])]))}};u.__docgenInfo={exportName:"default",displayName:"ListContext",description:"",tags:{},props:[{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'}},{name:"subheading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/ListContext/ListContext.vue"]};const w={title:"Core Components/List Context",component:u,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium"]}}},n={name:"Default",args:{heading:"More from [Program]",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",buttons:[{url:"#",title:"Read More"}],items:[{link:{url:"#",title:"Majors and Minors"}},{link:{url:"#",title:"Current Courses"}},{link:{url:"#",title:"Research"}},{link:{url:"#",title:"Facilities"}},{link:{url:"#",title:"Honors & Programs"}},{title:"Career Pathways"},{link:{url:"#",title:"Faculty & Staff"}}]}},i={name:"Small",args:{...n.args,size:"small",buttons:[]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    heading: "More from [Program]",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",
    buttons: [{
      url: "#",
      title: "Read More"
    }],
    items: [{
      link: {
        url: "#",
        title: "Majors and Minors"
      }
    }, {
      link: {
        url: "#",
        title: "Current Courses"
      }
    }, {
      link: {
        url: "#",
        title: "Research"
      }
    }, {
      link: {
        url: "#",
        title: "Facilities"
      }
    }, {
      link: {
        url: "#",
        title: "Honors & Programs"
      }
    }, {
      title: "Career Pathways"
    }, {
      link: {
        url: "#",
        title: "Faculty & Staff"
      }
    }]
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Small",
  args: {
    ...Default.args,
    size: "small",
    buttons: []
  }
}`,...i.parameters?.docs?.source}}};const R=["Default","Small"];export{n as Default,i as Small,R as __namedExportsOrder,w as default};
