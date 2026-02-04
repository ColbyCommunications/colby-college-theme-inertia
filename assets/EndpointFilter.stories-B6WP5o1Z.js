import{r as A,o as M,c as i,i as b,a as e,F as _,b as E,n as l,d as s,t as y,u as k}from"./iframe-BZjHv4dp.js";import{a as j}from"./index-B9ygI19o.js";import"./preload-helper-PPVm8Dsz.js";const F={class:"endpoint-filter"},w={key:0,class:"section-nav full-bleed !mt-0 overflow-x-auto bg-gray-100 py-6"},S={class:"section-nav__inner flex space-x-10 px-5 lg:justify-center"},T={class:"flex items-center space-x-7 pr-9 md:pr-0"},D=["onClick"],H={class:"article space-y-4"},L={class:"context w-full space-y-5"},P={class:"text-group--animated text-group"},N=["innerHTML"],W={class:"button-group--animated button-group flex shrink-0 flex-wrap gap-4"},V=["href"],B=["href"],m={__name:"EndpointFilter",props:{type:{type:String,default:"light"},initialEndpoint:{type:String,default:"https://events.colby.edu/live/json/events/group/Colby%20Arts%20EMS/group/Museum%20of%20Art/group/Art/group/Center%20for%20Arts%20and%20Humanities/group/Creative%20Writing/group/Music/group/Cinema%20Studies/group/Performance%2C%20Theater%2C%20and%20Dance"},limit:{type:Number,default:null},filters:{type:[Array,Boolean],default:()=>[{title:"All",url:"https://events.colby.edu/live/json/events/group/Colby%20Arts%20EMS/group/Museum%20of%20Art/group/Art/group/Center%20for%20Arts%20and%20Humanities/group/Creative%20Writing/group/Music/group/Cinema%20Studies/group/Performance%2C%20Theater%2C%20and%20Dance"},{title:"Art",url:"https://events.colby.edu/live/json/events/group/Art"},{title:"Music",url:"https://events.colby.edu/live/json/events/group/Music"},{title:"Cinema Studies",url:"https://events.colby.edu/live/json/events/group/Cinema%20Studies"},{title:"Performance, Theater, and Dance",url:"https://events.colby.edu/live/json/events/group/Performance%2C%20Theater%2C%20and%20Dance"},{title:"Center for the Arts and Humanities",url:"https://events.colby.edu/live/json/events/group/Center%20for%20Arts%20and%20Humanities"},{title:"Creative Writing",url:"https://events.colby.edu/live/json/events/group/Creative%20Writing"},{title:"Museum of Art",url:"https://events.colby.edu/live/json/events/group/Museum%20of%20Art"}]}},setup(t){const g=t,x=A(g.initialEndpoint),v=A([]),f=a=>a?a.replace(/<\/?\s*[^>]+(>|$)/g,""):"",C=async a=>{x.value=a;try{const n=(await j.get(a)).data.map(o=>({date:o.date,title:o.title,time:o.date_time,url:o.url}));g.limit?v.value=n.slice(0,g.limit):v.value=n}catch(r){console.error("Error fetching endpoint data:",r)}};return M(()=>{C(g.initialEndpoint)}),(a,r)=>(s(),i("div",F,[t.filters?(s(),i("div",w,[e("div",S,[r[0]||(r[0]=e("h2",{class:"section-nav__heading text-14 font-bold tracking-8 whitespace-nowrap text-azure uppercase md:text-12"}," Event types: ",-1)),e("ul",T,[(s(!0),i(_,null,E(t.filters,(n,o)=>(s(),i("li",{key:o,class:"font-body text-14 leading-130 font-medium whitespace-nowrap text-indigo-800 md:text-10"},[e("button",{class:l(["text-indigo-800 transition-all duration-200 ease-in-out hover:text-indigo hover:underline",{"!text-indigo underline":x.value===n.url}]),onClick:z=>C(n.url)},y(n.title),11,D)]))),128))])])])):b("",!0),e("div",{class:l(["mx-auto my-0 grid w-full max-w-screen-2xl grid-cols-9 gap-10 px-5",{"mt-14":t.filters}])},[(s(!0),i(_,null,E(v.value,(n,o)=>(s(),i("div",{key:o,class:"article-grid__item col-span-9 md:col-span-3"},[e("article",H,[e("div",L,[e("div",P,[e("div",{class:l(["text-group__subheading text-left text-12 leading-130 font-bold tracking-8 uppercase",[t.type==="dark"?"text-canary":"text-azure"]])},y(f(n.date)),3),e("h2",{class:l(["text-group__heading -tracking-3 mt-2 text-left text-24 leading-110 font-bold md:text-18",[t.type==="dark"?"text-white":"text-indigo"]]),innerHTML:f(n.title)},null,10,N),e("p",{class:l(["text-group__p mt-2 text-left font-body text-12 leading-130 font-normal !opacity-100 md:text-12",[t.type==="dark"?"text-white":"text-indigo-800"]])},y(f(n.time)),3)]),e("div",W,[t.type==="light"?(s(),i("a",{key:0,class:"btn group inline-flex !translate-x-0 flex-row items-center space-x-1.5 rounded border border-solid border-indigo-300 bg-indigo-100 px-3 py-1 font-body text-10 leading-130 font-normal text-indigo !no-underline !opacity-100 outline-offset-[-1px] transition-all duration-200 ease-in-out hover:border-indigo-500 hover:bg-indigo-200 focus:bg-indigo-200 focus:outline focus:outline-2 focus:outline-canary",href:n.url,target:"_blank"},[...r[1]||(r[1]=[e("span",{class:"btn__text"},[k(" Learn More "),e("div",{class:"btn__border block h-px w-0 bg-indigo transition-all duration-200 ease-in-out group-hover:w-full"})],-1)])],8,V)):b("",!0),t.type==="dark"?(s(),i("a",{key:1,class:"btn group inline-flex !translate-x-0 flex-row items-center space-x-1.5 rounded border border-solid border-indigo-800 bg-indigo/20 px-3 py-1 font-body text-10 leading-130 font-normal text-white !no-underline !opacity-100 outline-offset-[-1px] transition-all duration-200 ease-in-out hover:border-indigo-800 focus:outline focus:outline-2 focus:outline-canary",href:n.url,target:"_blank"},[...r[2]||(r[2]=[e("span",{class:"btn__text"},[k(" Learn More "),e("div",{class:"btn__border block h-px w-0 bg-white transition-all duration-200 ease-in-out group-hover:w-full"})],-1)])],8,B)):b("",!0)])])])]))),128))],2)]))}};m.__docgenInfo={exportName:"default",displayName:"EndpointFilter",description:"",tags:{},props:[{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"light"'}},{name:"initialEndpoint",type:{name:"string"},defaultValue:{func:!1,value:'"https://events.colby.edu/live/json/events/group/Colby%20Arts%20EMS/group/Museum%20of%20Art/group/Art/group/Center%20for%20Arts%20and%20Humanities/group/Creative%20Writing/group/Music/group/Cinema%20Studies/group/Performance%2C%20Theater%2C%20and%20Dance"'}},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"filters",type:{name:"array|boolean"},defaultValue:{func:!0,value:`() => [
  {
    title: "All",
    url: "https://events.colby.edu/live/json/events/group/Colby%20Arts%20EMS/group/Museum%20of%20Art/group/Art/group/Center%20for%20Arts%20and%20Humanities/group/Creative%20Writing/group/Music/group/Cinema%20Studies/group/Performance%2C%20Theater%2C%20and%20Dance",
  },
  {
    title: "Art",
    url: "https://events.colby.edu/live/json/events/group/Art",
  },
  {
    title: "Music",
    url: "https://events.colby.edu/live/json/events/group/Music",
  },
  {
    title: "Cinema Studies",
    url: "https://events.colby.edu/live/json/events/group/Cinema%20Studies",
  },
  {
    title: "Performance, Theater, and Dance",
    url: "https://events.colby.edu/live/json/events/group/Performance%2C%20Theater%2C%20and%20Dance",
  },
  {
    title: "Center for the Arts and Humanities",
    url: "https://events.colby.edu/live/json/events/group/Center%20for%20Arts%20and%20Humanities",
  },
  {
    title: "Creative Writing",
    url: "https://events.colby.edu/live/json/events/group/Creative%20Writing",
  },
  {
    title: "Museum of Art",
    url: "https://events.colby.edu/live/json/events/group/Museum%20of%20Art",
  },
]`}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/EndpointFilter/EndpointFilter.vue"]};const J={title:"Core Components/Endpoint Filter",component:m,argTypes:{type:{control:"radio",options:["light","dark"],description:"Controls text colors for light or dark backgrounds"},limit:{control:{type:"number",min:1,max:12},description:"Limits the number of items displayed"},initialEndpoint:{control:"text",description:"The API URL to fetch on mount"},filters:{control:"object",description:"Array of filter objects or `false` to hide the menu"}},parameters:{layout:"fullscreen"}},h=t=>({components:{EndpointFilter:m},setup(){return{args:t}},template:'<EndpointFilter v-bind="args" />'}),u=h.bind({});u.args={type:"light",limit:6};const d=t=>({components:{EndpointFilter:m},setup(){return{args:t}},template:`
    <div class="bg-indigo-900 py-10"> 
      <EndpointFilter v-bind="args" />
    </div>
  `});d.args={type:"dark",limit:6};const p=h.bind({});p.args={type:"light",limit:3,filters:!1,initialEndpoint:"https://events.colby.edu/live/json/events/group/Athletics"};const c=h.bind({});c.args={type:"light",limit:6,filters:[{title:"All Events",url:"https://events.colby.edu/live/json/events"},{title:"Just Athletics",url:"https://events.colby.edu/live/json/events/group/Athletics"}],initialEndpoint:"https://events.colby.edu/live/json/events"};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => ({
  components: {
    EndpointFilter
  },
  setup() {
    return {
      args
    };
  },
  template: '<EndpointFilter v-bind="args" />'
})`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`args => ({
  components: {
    EndpointFilter
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div class="bg-indigo-900 py-10"> 
      <EndpointFilter v-bind="args" />
    </div>
  \`
})`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`args => ({
  components: {
    EndpointFilter
  },
  setup() {
    return {
      args
    };
  },
  template: '<EndpointFilter v-bind="args" />'
})`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => ({
  components: {
    EndpointFilter
  },
  setup() {
    return {
      args
    };
  },
  template: '<EndpointFilter v-bind="args" />'
})`,...c.parameters?.docs?.source}}};const O=["Default","DarkMode","NoFilters","CustomFilterList"];export{c as CustomFilterList,d as DarkMode,u as Default,p as NoFilters,O as __namedExportsOrder,J as default};
