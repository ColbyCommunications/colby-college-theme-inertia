import{r as w,o as x,c as p,a as n,F as B,b as D,d as u,e as L,t as k,n as C,w as E,f as H,v as M,T as S}from"./iframe-DbKCvkZk.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const j={class:"accordion mx-auto w-full max-w-screen-2xl"},V={class:"colby-accordion-block border-b border-gray-300"},z={class:"accordion__header"},I=["aria-expanded","onClick"],N={class:"font-body !text-18 leading-120 font-bold text-indigo"},P={class:"flex h-9 w-11 shrink-0 items-center justify-center rounded-sm border border-gray-300 bg-gray-100"},F={class:"accordion__window"},O={class:"accordion__content"},q=["innerHTML"],v={__name:"Accordion",props:{panels:{type:Array,required:!0,default:()=>[]},single:{type:Boolean,default:!1},openByDefault:{type:Boolean,default:!1}},setup(i){const d=i,o=w([]),c=e=>o.value.includes(e),y=e=>{c(e)?o.value=o.value.filter(l=>l!==e):d.single?o.value=[e]:o.value.push(e)},b=e=>{e.style.height="0",e.style.visibility="hidden",e.offsetHeight,e.style.height=e.scrollHeight+"px",e.style.visibility="visible"},_=e=>{e.style.height="auto"},A=e=>{e.style.height=e.scrollHeight+"px",e.style.visibility="visible",e.offsetHeight,e.style.height="0",e.style.visibility="hidden"};return x(()=>{d.openByDefault&&d.panels.length>0&&o.value.push(0)}),(e,l)=>(u(),p("div",j,[n("div",V,[(u(!0),p(B,null,D(i.panels,(f,t)=>(u(),p("div",{key:t,class:"accordion__panel border-t border-solid border-gray-300"},[n("div",z,[n("button",{class:"accordion__button flex items-center justify-between gap-x-3 !px-0 !py-6",type:"button","aria-expanded":c(t),onClick:$=>y(t)},[n("h3",N,k(f.heading),1),n("div",P,[n("div",{class:C(["-rotate-90 transition-all duration-200 ease-in-out",{"!rotate-90":c(t)}])},[...l[0]||(l[0]=[n("svg",{class:"w-1.5 fill-azure",viewBox:"0 0 10.5 6.4",xmlns:"http://www.w3.org/2000/svg"},[n("path",{d:"M5.2 6.4L0 1.1 1.1 0l4.2 4.2L9.4 0l1.1 1.1z"})],-1)])],2)])],8,I)]),L(S,{name:"accordion",onEnter:b,onAfterEnter:_,onLeave:A},{default:E(()=>[H(n("div",F,[n("div",O,[n("div",{innerHTML:f.content},null,8,q)])],512),[[M,c(t)]])]),_:2},1024)]))),128))])]))}},h=T(v,[["__scopeId","data-v-450bad30"]]);v.__docgenInfo={exportName:"default",displayName:"Accordion",description:"",tags:{},props:[{name:"panels",type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"single",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"openByDefault",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Accordion/Accordion.vue"]};const Q={title:"Core Components/Accordion",component:h,argTypes:{single:{control:"boolean",description:"If true, opening one panel automatically closes others."},openByDefault:{control:"boolean",description:"If true, the first panel will be open when the component mounts."},panels:{control:"object",description:"Array of content objects. Content accepts HTML strings."}},parameters:{backgrounds:{default:"light"}}},g=i=>({components:{Accordion:h},setup(){return{args:i}},template:`
    <div class="p-10">
      <Accordion v-bind="args" />
    </div>
  `}),m=[{heading:"Admissions & Aid",content:"<p>Learn about our application process, financial aid options, and deadlines for the upcoming academic year..</p>"},{heading:"Academics",content:"<p>Explore our diverse range of majors, minors, and research opportunities available to undergraduate students.</p>"},{heading:"Campus Life",content:"<p>Discover student organizations, housing options, and the vibrant community events happening on campus.</p>"}],s=g.bind({});s.args={panels:m,single:!1,openByDefault:!1};const a=g.bind({});a.args={panels:m,single:!0,openByDefault:!1};const r=g.bind({});r.args={panels:m,single:!0,openByDefault:!0};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => ({
  components: {
    Accordion
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div class="p-10">
      <Accordion v-bind="args" />
    </div>
  \`
})`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => ({
  components: {
    Accordion
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div class="p-10">
      <Accordion v-bind="args" />
    </div>
  \`
})`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => ({
  components: {
    Accordion
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div class="p-10">
      <Accordion v-bind="args" />
    </div>
  \`
})`,...r.parameters?.docs?.source}}};const R=["Default","SingleMode","PreOpened"];export{s as Default,r as PreOpened,a as SingleMode,R as __namedExportsOrder,Q as default};
