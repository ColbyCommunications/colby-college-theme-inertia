import{c as o,F as i,r as c,d as r,a as l,e as u,g as m,t as d}from"./iframe-BfBFAde5.js";import{_ as p}from"./Icon-BG0snce_.js";import"./preload-helper-PPVm8Dsz.js";const y={class:"mb-12 flex w-full justify-start md:col-span-4 md:mb-0 md:grid md:w-64 md:grid-cols-2"},g=["href"],s={__name:"ActionMenu",props:{menu:{type:Array,default:()=>[]}},setup(e){return(f,_)=>(r(),o("ul",y,[(r(!0),o(i,null,c(e.menu,t=>(r(),o("li",{key:t.id||t.url||t.title,class:"w-48 font-body text-18 leading-140 font-bold text-indigo-200 md:col-span-1 md:px-4 md:text-10"},[l("a",{href:t.url,class:"mr-10 flex text-indigo-200 transition-all duration-200 ease-in-out hover:text-white hover:underline md:items-center"},[u(p,{name:t.title,class:"mr-2 h-4 w-4 fill-canary md:mr-1 md:h-3 md:w-3"},null,8,["name"]),m(" "+d(t.title),1)],8,g)]))),128))]))}};s.__docgenInfo={exportName:"default",displayName:"ActionMenu",description:"",tags:{},props:[{name:"menu",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/ActionMenu/ActionMenu.vue"]};const{expect:n}=__STORYBOOK_MODULE_TEST__,w={title:"Core Components/Action Menu",component:s,tags:["autodocs"]},x=e=>({components:{ActionMenu:s},setup(){return{args:e}},template:'<div class="bg-indigo p-10"><ActionMenu v-bind="args" /></div>'}),a={name:"Default",args:{menu:[{title:"Apply",url:"#"},{title:"Visit",url:"#"},{title:"Give",url:"#"},{title:"Contact",url:"#"}]},render:x,play:async({canvas:e})=>{await n(e.getByText("Apply")).toBeInTheDocument(),await n(e.getByText("Visit")).toBeInTheDocument(),await n(e.getByText("Give")).toBeInTheDocument(),await n(e.getByText("Contact")).toBeInTheDocument()}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("Apply")).toBeInTheDocument();
    await expect(canvas.getByText("Visit")).toBeInTheDocument();
    await expect(canvas.getByText("Give")).toBeInTheDocument();
    await expect(canvas.getByText("Contact")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};const D=["Default"];export{a as Default,D as __namedExportsOrder,w as default};
