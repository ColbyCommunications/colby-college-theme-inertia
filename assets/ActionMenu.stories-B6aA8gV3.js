import{c as r,F as l,j as i,o as s,a as c,b as u,f as m,t as p}from"./iframe-CXCUApFV.js";import{_ as d}from"./Icon-6AIxaukY.js";import"./preload-helper-PPVm8Dsz.js";const f={class:"mb-12 flex w-full justify-start md:col-span-4 md:mb-0 md:grid md:w-64 md:grid-cols-2",role:"list"},y=["href"],n={__name:"ActionMenu",props:{menu:{type:Array,default:()=>[]}},setup(e){return(_,g)=>(s(),r("ul",f,[(s(!0),r(l,null,i(e.menu,t=>(s(),r("li",{key:t.id||t.url||t.title,class:"w-48 font-body text-18 leading-140 font-bold text-[#eef4ff] md:col-span-1 md:px-4 md:text-10",role:"listitem"},[c("a",{href:t.url,class:"mr-10 flex text-[#eef4ff] transition-all duration-200 ease-in-out hover:text-white hover:underline md:items-center"},[u(d,{name:t.title,class:"mr-2 h-4 w-4 fill-canary md:mr-1 md:h-3 md:w-3"},null,8,["name"]),m(" "+p(t.title),1)],8,y)]))),128))]))}};n.__docgenInfo=Object.assign({displayName:n.name??n.__name},{exportName:"default",displayName:"ActionMenu",description:"",tags:{},props:[{name:"menu",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/ActionMenu/ActionMenu.vue"]});const{expect:a}=__STORYBOOK_MODULE_TEST__,w={title:"Core Components/Action Menu",component:n,tags:["autodocs"]},x=e=>({components:{ActionMenu:n},setup(){return{args:e}},template:'<div class="bg-indigo p-10"><ActionMenu v-bind="args" /></div>'}),o={name:"Default",args:{menu:[{title:"Apply",url:"#"},{title:"Visit",url:"#"},{title:"Give",url:"#"},{title:"Contact",url:"#"}]},render:x,play:async({canvas:e})=>{await a(e.getByText("Apply")).toBeInTheDocument(),await a(e.getByText("Visit")).toBeInTheDocument(),await a(e.getByText("Give")).toBeInTheDocument(),await a(e.getByText("Contact")).toBeInTheDocument()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const D=["Default"];export{o as Default,D as __namedExportsOrder,w as default};
