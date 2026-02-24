import{c as u,a as n,n as s,e as m,h as g,m as p,l as h,d as l}from"./iframe-BfBFAde5.js";import{_ as f}from"./Context-Dp7yX81d.js";import{_ as y}from"./ButtonGroup-DeVPz35K.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-T77HtXsG.js";import"./Button-u50yI3p6.js";const x={class:"intro-context"},v={class:"intro-context__inner md:grid md:grid-cols-12 gap-10 max-w-screen-2xl w-full px-5 mx-auto"},b=["innerHTML"],i={__name:"IntroContext",props:{size:{type:String,default:"medium"},inset:{type:Boolean,default:!1},subheading:{type:String,default:""},heading:{type:String,default:""},text:{type:String,default:""},buttons:{type:Array,default:()=>[]}},setup(e){const c=e,d=h(()=>c.buttons.map(a=>({button:{url:a.url,title:a.title,target:a.target||""}})));return(a,w)=>(l(),u("div",x,[n("div",v,[n("div",{class:s(["intro-context__main pt-5 border-t border-azure",e.inset?"md:col-start-2 md:col-span-5":"md:col-span-6"])},[m(f,{size:e.size,subheading:e.subheading,heading:e.heading},null,8,["size","subheading","heading"])],2),n("div",{class:s(["intro-context__secondary mt-2 md:mt-0 grid gap-4",e.inset?"md:col-span-5":"md:col-span-6"])},[n("div",{class:"font-body font-normal text-18 leading-130 text-indigo-800",innerHTML:e.text},null,8,b),e.buttons&&e.buttons.length?(l(),g(y,{key:0,size:"large",items:d.value},null,8,["items"])):p("",!0)],2)])]))}};i.__docgenInfo={exportName:"default",displayName:"IntroContext",description:"",tags:{},props:[{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"medium"'}},{name:"inset",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"subheading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"text",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/IntroContext/IntroContext.vue"]};const{expect:o}=__STORYBOOK_MODULE_TEST__,N={title:"Core Components/Intro Context",component:i,tags:["autodocs"]},t={name:"Default",args:{size:"medium",subheading:"Dare Northward Overview",heading:"We are taking an integrated, values-led approach to this campaign to reflect the realities of the world we're trying to better.",text:"<p>In 1818, Colby's early faculty and students sailed up the Kennebec on the sloop Hero to start a college, far north of the established centers of higher learning. Many daring moves followed as Colby grew, struggled, and prospered.</p><p>Dare Northward leverages our existing strengths to enhance our student's experiences, improve their outcomes, and produce generations of leaders to tackle the world's greatest challenges.</p>",buttons:[{url:"#",title:"Colby Impact"}]},play:async({canvas:e})=>{await o(e.getByText("Dare Northward Overview")).toBeInTheDocument(),await o(e.getByText("Colby Impact")).toBeInTheDocument()}},r={name:"Inset",args:{...t.args,inset:!0,size:"large"},play:async({canvas:e})=>{await o(e.getByText("Dare Northward Overview")).toBeInTheDocument()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    size: "medium",
    subheading: "Dare Northward Overview",
    heading: "We are taking an integrated, values-led approach to this campaign to reflect the realities of the world we're trying to better.",
    text: "<p>In 1818, Colby's early faculty and students sailed up the Kennebec on the sloop Hero to start a college, far north of the established centers of higher learning. Many daring moves followed as Colby grew, struggled, and prospered.</p><p>Dare Northward leverages our existing strengths to enhance our student's experiences, improve their outcomes, and produce generations of leaders to tackle the world's greatest challenges.</p>",
    buttons: [{
      url: "#",
      title: "Colby Impact"
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Dare Northward Overview")).toBeInTheDocument();
    await expect(canvas.getByText("Colby Impact")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Inset",
  args: {
    ...Default.args,
    inset: true,
    size: "large"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Dare Northward Overview")).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};const z=["Default","Inset"];export{t as Default,r as Inset,z as __namedExportsOrder,N as default};
