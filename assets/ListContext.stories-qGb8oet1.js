import{c as t,a as i,e as p,F as f,r as y,l as h,d as a,n as x,t as u}from"./iframe-BfBFAde5.js";import{_}from"./Context-Dp7yX81d.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-T77HtXsG.js";import"./ButtonGroup-DeVPz35K.js";import"./Button-u50yI3p6.js";const B={class:"list-context"},T={class:"list-context__inner md:grid grid-cols-8 gap-10 max-w-screen-2xl w-full space-y-8 md:space-y-0"},M={class:"list-context__context md:col-span-5"},k={class:"list-context__main md:col-span-3"},v={class:"list-context__list space-y-2 ml-4"},b=["href"],D={key:1,class:"text-indigo"},c={__name:"ListContext",props:{size:{type:String,default:"medium"},subheading:{type:String,default:""},heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]},items:{type:Array,default:()=>[]}},setup(e){const m=e,d=h(()=>m.buttons.map(r=>({button:{url:r.url,title:r.title,target:r.target||""}})));return(r,w)=>(a(),t("div",B,[i("div",T,[i("div",M,[p(_,{size:"small","is-static":e.size==="small",subheading:e.subheading,heading:e.heading,paragraph:e.paragraph,buttons:{items:d.value}},null,8,["is-static","subheading","heading","paragraph","buttons"])]),i("div",k,[i("ul",v,[(a(!0),t(f,null,y(e.items,(o,g)=>(a(),t("li",{key:g,class:x(["font-body text-indigo-600 list-disc",e.size==="small"?"font-semibold text-14 leading-130":"font-bold text-20 leading-120"])},[o.link?.url?(a(),t("a",{key:0,class:"text-indigo hover:text-indigo-600 no-underline hover:underline transition-all duration-200 ease-in-out",href:o.link.url},u(o.link.title),9,b)):(a(),t("span",D,u(o.title),1))],2))),128))])])])]))}};c.__docgenInfo={exportName:"default",displayName:"ListContext",description:"",tags:{},props:[{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'}},{name:"subheading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/ListContext/ListContext.vue"]};const{expect:s}=__STORYBOOK_MODULE_TEST__,V={title:"Core Components/List Context",component:c,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium"]}}},n={name:"Default",args:{heading:"More from [Program]",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",buttons:[{url:"#",title:"Read More"}],items:[{link:{url:"#",title:"Majors and Minors"}},{link:{url:"#",title:"Current Courses"}},{link:{url:"#",title:"Research"}},{link:{url:"#",title:"Facilities"}},{link:{url:"#",title:"Honors & Programs"}},{title:"Career Pathways"},{link:{url:"#",title:"Faculty & Staff"}}]},play:async({canvas:e})=>{await s(e.getByText("More from [Program]")).toBeInTheDocument(),await s(e.getByText("Majors and Minors")).toBeInTheDocument(),await s(e.getByText("Read More")).toBeInTheDocument()}},l={name:"Small",args:{...n.args,size:"small",buttons:[]},play:async({canvas:e})=>{await s(e.getByText("More from [Program]")).toBeInTheDocument(),await s(e.getByText("Majors and Minors")).toBeInTheDocument()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("More from [Program]")).toBeInTheDocument();
    await expect(canvas.getByText("Majors and Minors")).toBeInTheDocument();
    await expect(canvas.getByText("Read More")).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Small",
  args: {
    ...Default.args,
    size: "small",
    buttons: []
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("More from [Program]")).toBeInTheDocument();
    await expect(canvas.getByText("Majors and Minors")).toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source}}};const j=["Default","Small"];export{n as Default,l as Small,j as __namedExportsOrder,V as default};
