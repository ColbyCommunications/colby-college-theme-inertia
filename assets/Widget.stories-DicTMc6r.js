import{c as u,t as m,m as l,a as g,h as y,l as h,d as r}from"./iframe-BfBFAde5.js";import{_ as x}from"./ButtonGroup-DeVPz35K.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-u50yI3p6.js";const B={class:"widget p-5 bg-gray-100 space-y-3"},T={key:0,class:"font-extended font-bold text-14 md:text-12 leading-130 text-azure tracking-8 uppercase"},f=["innerHTML"],c={__name:"Widget",props:{heading:{type:String,default:""},text:{type:String,default:""},buttons:{type:Array,default:()=>[]}},setup(t){const d=t,p=h(()=>d.buttons.map(n=>({button:{url:n.url,title:n.title,target:n.target||""}})));return(n,w)=>(r(),u("div",B,[t.heading?(r(),u("h2",T,m(t.heading),1)):l("",!0),g("div",{class:"widget__context [&>p]:font-body [&>p]:font-medium [&>p]:text-10 [&>p]:leading-140 [&>p>a]:no-underline hover:[&>p>a]:underline [&>p]:text-indigo-800 hover:[&>p>a]:text-indigo [&>ul>li]:font-body [&>ul>li]:font-medium [&>ul>li]:text-10 [&>ul>li]:leading-140 [&>ul>li>a]:no-underline hover:[&>ul>li>a]:underline [&>ul>li]:text-indigo-800 hover:[&>ul>li>a]:text-indigo [&>ul>li]:list-disc [&>ul>li]:ml-3 [&>ul>li+li]:mt-2 space-y-2",innerHTML:t.text},null,8,f),t.buttons&&t.buttons.length?(r(),y(x,{key:1,size:"small",align:"column",items:p.value},null,8,["items"])):l("",!0)]))}};c.__docgenInfo={exportName:"default",displayName:"Widget",description:"",tags:{},props:[{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"text",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Widget/Widget.vue"]};const{expect:e}=__STORYBOOK_MODULE_TEST__,I={title:"Core Components/Widget",component:c,tags:["autodocs"]},a={name:"Default",args:{heading:"Contact",text:'<p><a href="/">4000 Mayflower Hill<br>Waterville, Maine 04901</a></p><p>207-859-4000</p>',buttons:[{url:"https://www.colby.edu",title:"Download now"}]},play:async({canvas:t})=>{await e(t.getByText("Contact")).toBeInTheDocument(),await e(t.getByText("207-859-4000")).toBeInTheDocument(),await e(t.getByText("Download now")).toBeInTheDocument()}},o={name:"Without Buttons",args:{heading:"Hours",text:"<p>Monday - Friday: 8am - 5pm</p><p>Saturday - Sunday: Closed</p>"},play:async({canvas:t})=>{await e(t.getByText("Hours")).toBeInTheDocument(),await e(t.getByText("Monday - Friday: 8am - 5pm")).toBeInTheDocument()}},s={name:"Without Heading",args:{heading:"",text:"<p>Quick links and resources for current students.</p>",buttons:[{url:"#",title:"Student Portal"}]},play:async({canvas:t})=>{await e(t.getByText("Student Portal")).toBeInTheDocument()}},i={name:"Without Button Target",args:{heading:"Links",text:"<p>Important resources.</p>",buttons:[{url:"#",title:"Visit Site"}]},play:async({canvas:t})=>{await e(t.getByText("Links")).toBeInTheDocument(),await e(t.getByText("Visit Site")).toBeInTheDocument()}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    heading: "Contact",
    text: '<p><a href="/">4000 Mayflower Hill<br>Waterville, Maine 04901</a></p><p>207-859-4000</p>',
    buttons: [{
      url: "https://www.colby.edu",
      title: "Download now"
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Contact")).toBeInTheDocument();
    await expect(canvas.getByText("207-859-4000")).toBeInTheDocument();
    await expect(canvas.getByText("Download now")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Without Buttons",
  args: {
    heading: "Hours",
    text: "<p>Monday - Friday: 8am - 5pm</p><p>Saturday - Sunday: Closed</p>"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Hours")).toBeInTheDocument();
    await expect(canvas.getByText("Monday - Friday: 8am - 5pm")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Without Heading",
  args: {
    heading: "",
    text: "<p>Quick links and resources for current students.</p>",
    buttons: [{
      url: "#",
      title: "Student Portal"
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Student Portal")).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Without Button Target",
  args: {
    heading: "Links",
    text: "<p>Important resources.</p>",
    buttons: [{
      url: "#",
      title: "Visit Site"
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Links")).toBeInTheDocument();
    await expect(canvas.getByText("Visit Site")).toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};const W=["Default","WithoutButtons","WithoutHeading","WithoutButtonTarget"];export{a as Default,i as WithoutButtonTarget,o as WithoutButtons,s as WithoutHeading,W as __namedExportsOrder,I as default};
