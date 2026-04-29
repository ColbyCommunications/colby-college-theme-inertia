import{c as r,F as s,r as l,o,a as c,e as i,p as u,t as m}from"./iframe-0N6o4Hv8.js";import{_ as p}from"./Icon-DDD_w9eC.js";import"./preload-helper-PPVm8Dsz.js";const d={class:"mb-12 flex w-full justify-start md:col-span-4 md:mb-0 md:grid md:w-64 md:grid-cols-2",role:"list"},f=["href"],t={__name:"ActionMenu",props:{menu:{type:Array,default:()=>[]}},setup(a){return(y,x)=>(o(),r("ul",d,[(o(!0),r(s,null,l(a.menu,e=>(o(),r("li",{key:e.id||e.url||e.title,class:"w-48 font-body text-18 leading-140 font-bold text-[#eef4ff] md:col-span-1 md:px-4 md:text-10",role:"listitem"},[c("a",{href:e.url,class:"mr-10 flex text-[#eef4ff] transition-all duration-200 ease-in-out hover:text-white hover:underline md:items-center"},[i(p,{name:e.title,class:"mr-2 h-4 w-4 fill-canary md:mr-1 md:h-3 md:w-3"},null,8,["name"]),u(" "+m(e.title),1)],8,f)]))),128))]))}};t.__docgenInfo=Object.assign({displayName:t.name??t.__name},{exportName:"default",displayName:"ActionMenu",description:"",tags:{},props:[{name:"menu",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/ActionMenu/ActionMenu.vue"]});const{expect:A}=__STORYBOOK_MODULE_TEST__,B={title:"Core Components/Action Menu",component:t,tags:["autodocs"]},_=a=>({components:{ActionMenu:t},setup(){return{args:a}},template:'<div class="bg-indigo p-10"><ActionMenu v-bind="args" /></div>'}),n={name:"Default",args:{menu:[{title:"Apply",url:"#"},{title:"Visit",url:"#"},{title:"Give",url:"#"},{title:"Contact",url:"#"}]},render:_,play:async({canvas:a})=>{}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    menu: [{
      title: "Apply",
      url: "#"
    }, {
      title: "Visit",
      url: "#"
    }, {
      title: "Give",
      url: "#"
    }, {
      title: "Contact",
      url: "#"
    }]
  },
  render,
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Apply")).toBeInTheDocument();
    await expect(canvas.getByText("Visit")).toBeInTheDocument();
    await expect(canvas.getByText("Give")).toBeInTheDocument();
    await expect(canvas.getByText("Contact")).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};const T=["Default"];export{n as Default,T as __namedExportsOrder,B as default};
