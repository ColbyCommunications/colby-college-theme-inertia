import{l as d,c as l,m as i,a as c,h as p,t as m,d as o}from"./iframe-BI_3ezP0.js";import{_ as g}from"./ButtonGroup-DeTJD12j.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-e0IECFmJ.js";const f={class:"widget p-5 bg-gray-100 space-y-3"},y={key:0,class:"font-extended font-bold text-14 md:text-12 leading-130 text-azure tracking-8 uppercase"},h=["innerHTML"],r={__name:"Widget",props:{heading:{type:String,default:""},text:{type:String,default:""},buttons:{type:Array,default:()=>[]}},setup(e){const s=e,u=d(()=>s.buttons.map(t=>({button:{url:t.url,title:t.title,target:t.target||""}})));return(t,x)=>(o(),l("div",f,[e.heading?(o(),l("h2",y,m(e.heading),1)):i("",!0),c("div",{class:"widget__context [&>p]:font-body [&>p]:font-medium [&>p]:text-10 [&>p]:leading-140 [&>p>a]:no-underline hover:[&>p>a]:underline [&>p]:text-indigo-800 hover:[&>p>a]:text-indigo [&>ul>li]:font-body [&>ul>li]:font-medium [&>ul>li]:text-10 [&>ul>li]:leading-140 [&>ul>li>a]:no-underline hover:[&>ul>li>a]:underline [&>ul>li]:text-indigo-800 hover:[&>ul>li>a]:text-indigo [&>ul>li]:list-disc [&>ul>li]:ml-3 [&>ul>li+li]:mt-2 space-y-2",innerHTML:e.text},null,8,h),e.buttons&&e.buttons.length?(o(),p(g,{key:1,size:"small",align:"column",items:u.value},null,8,["items"])):i("",!0)]))}};r.__docgenInfo={exportName:"default",displayName:"Widget",description:"",tags:{},props:[{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"text",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Widget/Widget.vue"]};const _={title:"Core Components/Widget",component:r,tags:["autodocs"]},a={name:"Default",args:{heading:"Contact",text:'<p><a href="/">4000 Mayflower Hill<br>Waterville, Maine 04901</a></p><p>207-859-4000</p>',buttons:[{url:"https://www.colby.edu",title:"Download now"}]}},n={name:"Without Buttons",args:{heading:"Hours",text:"<p>Monday - Friday: 8am - 5pm</p><p>Saturday - Sunday: Closed</p>"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    heading: "Contact",
    text: '<p><a href="/">4000 Mayflower Hill<br>Waterville, Maine 04901</a></p><p>207-859-4000</p>',
    buttons: [{
      url: "https://www.colby.edu",
      title: "Download now"
    }]
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Without Buttons",
  args: {
    heading: "Hours",
    text: "<p>Monday - Friday: 8am - 5pm</p><p>Saturday - Sunday: Closed</p>"
  }
}`,...n.parameters?.docs?.source}}};const S=["Default","WithoutButtons"];export{a as Default,n as WithoutButtons,S as __namedExportsOrder,_ as default};
