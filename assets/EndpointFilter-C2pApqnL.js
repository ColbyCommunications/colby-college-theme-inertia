import{r as m,k as C,c as i,a as n,F as v,j as f,g as b,n as y,o as a,t as A,b as h}from"./iframe-BwF8kxoK.js";import{a as _}from"./index-42ANG6Sg.js";import{_ as x}from"./TextGroup-Dc-zETJ_.js";import{_ as M}from"./ButtonGroup-3HwiSt1F.js";const j={class:"endpoint-filter"},E={key:0,class:"section-nav full-bleed !mt-0 overflow-x-auto bg-gray-100 py-6"},S={class:"section-nav__inner flex space-x-10 px-5 lg:justify-center"},k={class:"flex items-center space-x-7 pr-9 md:pr-0"},w=["onClick"],D={class:"article space-y-4"},H={class:"context w-full space-y-5"},c={__name:"EndpointFilter",props:{type:{type:String,default:"light"},initialEndpoint:{type:String,default:"https://events.colby.edu/live/json/events/group/Colby%20Arts%20EMS/group/Museum%20of%20Art/group/Art/group/Center%20for%20Arts%20and%20Humanities/group/Creative%20Writing/group/Music/group/Cinema%20Studies/group/Performance%2C%20Theater%2C%20and%20Dance"},limit:{type:Number,default:null},filters:{type:[Array,Boolean],default:()=>[{title:"All",url:"https://events.colby.edu/live/json/events/group/Colby%20Arts%20EMS/group/Museum%20of%20Art/group/Art/group/Center%20for%20Arts%20and%20Humanities/group/Creative%20Writing/group/Music/group/Cinema%20Studies/group/Performance%2C%20Theater%2C%20and%20Dance"},{title:"Art",url:"https://events.colby.edu/live/json/events/group/Art"},{title:"Music",url:"https://events.colby.edu/live/json/events/group/Music"},{title:"Cinema Studies",url:"https://events.colby.edu/live/json/events/group/Cinema%20Studies"},{title:"Performance, Theater, and Dance",url:"https://events.colby.edu/live/json/events/group/Performance%2C%20Theater%2C%20and%20Dance"},{title:"Center for the Arts and Humanities",url:"https://events.colby.edu/live/json/events/group/Center%20for%20Arts%20and%20Humanities"},{title:"Creative Writing",url:"https://events.colby.edu/live/json/events/group/Creative%20Writing"},{title:"Museum of Art",url:"https://events.colby.edu/live/json/events/group/Museum%20of%20Art"}]}},setup(r){const l=r,d=m(l.initialEndpoint),u=m([]),p=s=>s?s.replace(/<\/?\s*[^>]+(>|$)/g,""):"",g=async s=>{d.value=s;try{const e=(await _.get(s)).data.map(t=>({date:t.date,title:t.title,time:t.date_time,url:t.url}));l.limit?u.value=e.slice(0,l.limit):u.value=e}catch(o){console.error("Error fetching endpoint data:",o)}};return C(()=>{g(l.initialEndpoint)}),(s,o)=>(a(),i("div",j,[r.filters?(a(),i("div",E,[n("div",S,[o[0]||(o[0]=n("h2",{class:"section-nav__heading text-14 font-bold tracking-8 whitespace-nowrap text-azure uppercase md:text-12"}," Event types: ",-1)),n("ul",k,[(a(!0),i(v,null,f(r.filters,(e,t)=>(a(),i("li",{key:t,class:"font-body text-14 leading-130 font-medium whitespace-nowrap text-indigo-800 md:text-10"},[n("button",{class:y(["text-indigo-800 transition-all duration-200 ease-in-out hover:text-indigo hover:underline",{"!text-indigo underline":d.value===e.url}]),onClick:T=>g(e.url)},A(e.title),11,w)]))),128))])])])):b("",!0),n("div",{class:y(["mx-auto my-0 grid w-full max-w-screen-2xl grid-cols-9 gap-10 px-5",{"mt-14":r.filters}])},[(a(!0),i(v,null,f(u.value,(e,t)=>(a(),i("div",{key:t,class:"article-grid__item col-span-9 md:col-span-3"},[n("article",D,[n("div",H,[h(x,{size:"xsmall",type:r.type==="dark"?"light":"dark",subheading:p(e.date),heading:p(e.title),paragraph:p(e.time)},null,8,["type","subheading","heading","paragraph"]),h(M,{type:r.type,size:"small",items:[{button:{url:e.url,title:"Learn More",target:"_blank"}}]},null,8,["type","items"])])])]))),128))],2)]))}};c.__docgenInfo=Object.assign({displayName:c.name??c.__name},{exportName:"default",displayName:"EndpointFilter",description:"",tags:{},props:[{name:"type",type:{name:"string"},defaultValue:{func:!1,value:'"light"'}},{name:"initialEndpoint",type:{name:"string"},defaultValue:{func:!1,value:'"https://events.colby.edu/live/json/events/group/Colby%20Arts%20EMS/group/Museum%20of%20Art/group/Art/group/Center%20for%20Arts%20and%20Humanities/group/Creative%20Writing/group/Music/group/Cinema%20Studies/group/Performance%2C%20Theater%2C%20and%20Dance"'}},{name:"limit",type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"filters",type:{name:"array|boolean"},defaultValue:{func:!0,value:`() => [
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
]`}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/EndpointFilter/EndpointFilter.vue"]});export{c as _};
