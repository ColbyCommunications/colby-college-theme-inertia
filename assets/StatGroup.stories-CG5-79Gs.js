import{c as s,a,e as m,F as h,r as y,l as f,d as i,t as u}from"./iframe-BfBFAde5.js";import{_ as B}from"./Context-Dp7yX81d.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-T77HtXsG.js";import"./ButtonGroup-DeVPz35K.js";import"./Button-u50yI3p6.js";const x={class:"stat-group"},T={class:"stat-group__inner md:grid grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 space-y-24 my-0 mx-auto"},_={class:"stat-group__intro md:col-start-2 lg:col-start-3 md:col-span-10 lg:col-span-8"},b={class:"stat-group__main col-span-12 lg:col-start-2 lg:col-span-10"},S={class:"grid grid-cols-8 gap-10"},v={class:"font-extended font-normal text-36 leading-100 -tracking-3 text-indigo"},w={class:"font-body font-normal text-14 leading-130 text-indigo-900"},l={__name:"StatGroup",props:{subheading:{type:String,default:""},heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]},items:{type:Array,default:()=>[]}},setup(t){const g=t,p=f(()=>g.buttons.map(n=>({button:{url:n.url,title:n.title,target:n.target||""}})));return(n,D)=>(i(),s("div",x,[a("div",T,[a("div",_,[m(B,{size:"xlarge",align:"center",subheading:t.subheading,heading:t.heading,paragraph:t.paragraph,buttons:{items:p.value}},null,8,["subheading","heading","paragraph","buttons"])]),a("div",b,[a("div",S,[(i(!0),s(h,null,y(t.items,(c,d)=>(i(),s("div",{key:d,class:"col-span-4 md:col-span-2 space-y-3"},[a("h3",v,u(c.heading),1),a("p",w,u(c.paragraph),1)]))),128))])])])]))}};l.__docgenInfo={exportName:"default",displayName:"StatGroup",description:"",tags:{},props:[{name:"subheading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/StatGroup/StatGroup.vue"]};const{expect:e}=__STORYBOOK_MODULE_TEST__,N={title:"Core Components/Stat Group",component:l,tags:["autodocs"]},r={name:"Default",args:{subheading:"By the Numbers",heading:"Colby at a Glance",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",buttons:[{url:"#",title:"Full Statistics",target:"_blank"}],items:[{heading:"2,000",paragraph:"Students from around the world"},{heading:"56",paragraph:"Majors across the arts and sciences"},{heading:"35",paragraph:"Minors to complement any major"},{heading:"9:1",paragraph:"Student-to-faculty ratio"}]},play:async({canvas:t})=>{await e(t.getByText("Colby at a Glance")).toBeInTheDocument(),await e(t.getByText("2,000")).toBeInTheDocument(),await e(t.getByText("56")).toBeInTheDocument(),await e(t.getByText("9:1")).toBeInTheDocument(),await e(t.getByText("Full Statistics")).toBeInTheDocument()}},o={name:"Without Button Target",args:{subheading:"Overview",heading:"Quick Facts",paragraph:"Key statistics about the college.",buttons:[{url:"#",title:"Learn More"}],items:[{heading:"1,800",paragraph:"Undergraduate students"},{heading:"12:1",paragraph:"Student-to-faculty ratio"}]},play:async({canvas:t})=>{await e(t.getByText("Quick Facts")).toBeInTheDocument(),await e(t.getByText("1,800")).toBeInTheDocument(),await e(t.getByText("Learn More")).toBeInTheDocument()}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    subheading: "By the Numbers",
    heading: "Colby at a Glance",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",
    buttons: [{
      url: "#",
      title: "Full Statistics",
      target: "_blank"
    }],
    items: [{
      heading: "2,000",
      paragraph: "Students from around the world"
    }, {
      heading: "56",
      paragraph: "Majors across the arts and sciences"
    }, {
      heading: "35",
      paragraph: "Minors to complement any major"
    }, {
      heading: "9:1",
      paragraph: "Student-to-faculty ratio"
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Colby at a Glance")).toBeInTheDocument();
    await expect(canvas.getByText("2,000")).toBeInTheDocument();
    await expect(canvas.getByText("56")).toBeInTheDocument();
    await expect(canvas.getByText("9:1")).toBeInTheDocument();
    await expect(canvas.getByText("Full Statistics")).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Without Button Target",
  args: {
    subheading: "Overview",
    heading: "Quick Facts",
    paragraph: "Key statistics about the college.",
    buttons: [{
      url: "#",
      title: "Learn More"
    }],
    items: [{
      heading: "1,800",
      paragraph: "Undergraduate students"
    }, {
      heading: "12:1",
      paragraph: "Student-to-faculty ratio"
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Quick Facts")).toBeInTheDocument();
    await expect(canvas.getByText("1,800")).toBeInTheDocument();
    await expect(canvas.getByText("Learn More")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};const O=["Default","WithoutButtonTarget"];export{r as Default,o as WithoutButtonTarget,O as __namedExportsOrder,N as default};
