import{l as d,c as r,a,e as g,F as m,b as h,d as s,t as i}from"./iframe-BI_3ezP0.js";import{_ as f}from"./Context-rCALFtqQ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-8rV2ZAMN.js";import"./ButtonGroup-DeTJD12j.js";import"./Button-e0IECFmJ.js";const y={class:"stat-group"},_={class:"stat-group__inner md:grid grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 space-y-24 my-0 mx-auto"},b={class:"stat-group__intro md:col-start-2 lg:col-start-3 md:col-span-10 lg:col-span-8"},v={class:"stat-group__main col-span-12 lg:col-start-2 lg:col-span-10"},x={class:"grid grid-cols-8 gap-10"},S={class:"font-extended font-normal text-36 leading-100 -tracking-3 text-indigo"},G={class:"font-body font-normal text-14 leading-130 text-indigo-900"},l={__name:"StatGroup",props:{subheading:{type:String,default:""},heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]},items:{type:Array,default:()=>[]}},setup(e){const u=e,c=d(()=>u.buttons.map(t=>({button:{url:t.url,title:t.title,target:t.target||""}})));return(t,N)=>(s(),r("div",y,[a("div",_,[a("div",b,[g(f,{size:"xlarge",align:"center",subheading:e.subheading,heading:e.heading,paragraph:e.paragraph,buttons:{items:c.value}},null,8,["subheading","heading","paragraph","buttons"])]),a("div",v,[a("div",x,[(s(!0),r(m,null,h(e.items,(o,p)=>(s(),r("div",{key:p,class:"col-span-4 md:col-span-2 space-y-3"},[a("h3",S,i(o.heading),1),a("p",G,i(o.paragraph),1)]))),128))])])])]))}};l.__docgenInfo={exportName:"default",displayName:"StatGroup",description:"",tags:{},props:[{name:"subheading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/StatGroup/StatGroup.vue"]};const C={title:"Core Components/Stat Group",component:l,tags:["autodocs"]},n={name:"Default",args:{subheading:"By the Numbers",heading:"Colby at a Glance",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",items:[{heading:"2,000",paragraph:"Students from around the world"},{heading:"56",paragraph:"Majors across the arts and sciences"},{heading:"35",paragraph:"Minors to complement any major"},{heading:"9:1",paragraph:"Student-to-faculty ratio"}]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    subheading: "By the Numbers",
    heading: "Colby at a Glance",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",
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
  }
}`,...n.parameters?.docs?.source}}};const M=["Default"];export{n as Default,M as __namedExportsOrder,C as default};
