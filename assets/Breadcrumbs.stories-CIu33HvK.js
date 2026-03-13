import{c as a,a as e,e as m,F as u,r as d,d as i,t as p}from"./iframe-DMklC8cl.js";import{_ as y}from"./Icon-DvqevXY7.js";import"./preload-helper-PPVm8Dsz.js";const w={"aria-label":"Breadcrumbs",class:"breadcrumbs flex h-9 items-center overflow-x-auto bg-gray-100"},f={class:"breadcrumbs__inner mx-auto w-full max-w-screen-2xl px-5"},_={class:"flex items-center [&>li+li]:ml-5"},h={class:"font-body text-10 leading-140 font-bold whitespace-nowrap text-indigo-800"},x={class:"text-indigo-800 transition-all duration-200 ease-in-out hover:text-indigo",href:"/"},b={class:"size-[10px] fill-indigo"},g=["href"],n={__name:"Breadcrumbs",props:{items:{type:Array,default:()=>[]}},setup(t){return(B,r)=>(i(),a("nav",w,[e("div",f,[e("ul",_,[e("li",h,[e("a",x,[r[0]||(r[0]=e("span",{class:"sr-only"},"Homepage",-1)),e("div",b,[m(y,{name:"home"})])])]),(i(!0),a(u,null,d(t.items,(c,l)=>(i(),a("li",{key:l,class:"font-body text-10 leading-140 font-bold whitespace-nowrap text-indigo-800"},[e("a",{class:"text-indigo-800 transition-all duration-200 ease-in-out hover:text-indigo",href:c.url},p(c.title),9,g)]))),128))])])]))}};n.__docgenInfo=Object.assign({displayName:n.name??n.__name},{exportName:"default",displayName:"Breadcrumbs",description:"",tags:{},props:[{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Breadcrumbs/Breadcrumbs.vue"]});const{expect:s}=__STORYBOOK_MODULE_TEST__,C={title:"Core Components/Breadcrumbs",component:n},o={name:"Default",args:{items:[{title:"Admissions",url:"https://www.colby.edu"},{title:"Museum",url:"https://www.colby.edu"},{title:"myColby",url:"https://www.colby.edu"},{title:"Office of Communications",url:"https://www.colby.edu"}]},play:async({canvas:t})=>{await s(t.getByText("Admissions")).toBeInTheDocument(),await s(t.getByText("Museum")).toBeInTheDocument(),await s(t.getByText("myColby")).toBeInTheDocument(),await s(t.getByText("Office of Communications")).toBeInTheDocument()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const O=["Primary"];export{o as Primary,O as __namedExportsOrder,C as default};
