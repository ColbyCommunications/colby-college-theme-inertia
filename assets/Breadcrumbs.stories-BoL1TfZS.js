import{c as n,a as e,e as m,F as u,r as d,d as a,t as p}from"./iframe-BfBFAde5.js";import{_ as y}from"./Icon-BG0snce_.js";import"./preload-helper-PPVm8Dsz.js";const w={"aria-label":"Breadcrumbs",class:"breadcrumbs flex h-9 items-center overflow-x-auto bg-gray-100"},f={class:"breadcrumbs__inner mx-auto w-full max-w-screen-2xl px-5"},h={class:"flex items-center [&>li+li]:ml-5"},_={class:"font-body text-10 leading-140 font-bold whitespace-nowrap text-indigo-800"},x={class:"text-indigo-800 transition-all duration-200 ease-in-out hover:text-indigo",href:"/"},b={class:"size-[10px] fill-indigo"},g=["href"],c={__name:"Breadcrumbs",props:{items:{type:Array,default:()=>[]}},setup(t){return(B,i)=>(a(),n("nav",w,[e("div",f,[e("ul",h,[e("li",_,[e("a",x,[i[0]||(i[0]=e("span",{class:"sr-only"},"Homepage",-1)),e("div",b,[m(y,{name:"home"})])])]),(a(!0),n(u,null,d(t.items,(r,l)=>(a(),n("li",{key:l,class:"font-body text-10 leading-140 font-bold whitespace-nowrap text-indigo-800"},[e("a",{class:"text-indigo-800 transition-all duration-200 ease-in-out hover:text-indigo",href:r.url},p(r.title),9,g)]))),128))])])]))}};c.__docgenInfo={exportName:"default",displayName:"Breadcrumbs",description:"",tags:{},props:[{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Breadcrumbs/Breadcrumbs.vue"]};const{expect:o}=__STORYBOOK_MODULE_TEST__,C={title:"Core Components/Breadcrumbs",component:c},s={name:"Default",args:{items:[{title:"Admissions",url:"https://www.colby.edu"},{title:"Museum",url:"https://www.colby.edu"},{title:"myColby",url:"https://www.colby.edu"},{title:"Office of Communications",url:"https://www.colby.edu"}]},play:async({canvas:t})=>{await o(t.getByText("Admissions")).toBeInTheDocument(),await o(t.getByText("Museum")).toBeInTheDocument(),await o(t.getByText("myColby")).toBeInTheDocument(),await o(t.getByText("Office of Communications")).toBeInTheDocument()}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    items: [{
      title: "Admissions",
      url: "https://www.colby.edu"
    }, {
      title: "Museum",
      url: "https://www.colby.edu"
    }, {
      title: "myColby",
      url: "https://www.colby.edu"
    }, {
      title: "Office of Communications",
      url: "https://www.colby.edu"
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Admissions")).toBeInTheDocument();
    await expect(canvas.getByText("Museum")).toBeInTheDocument();
    await expect(canvas.getByText("myColby")).toBeInTheDocument();
    await expect(canvas.getByText("Office of Communications")).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};const I=["Primary"];export{s as Primary,I as __namedExportsOrder,C as default};
