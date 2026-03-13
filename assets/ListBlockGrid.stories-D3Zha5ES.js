import{c as l,F as d,r as g,d as c,n as h,e as y,s as _}from"./iframe-nsPjl7RS.js";import{_ as B}from"./ListBlock-CB-5L463.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-C6lbHfdn.js";import"./TextGroup-BIdUVYRQ.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-BolsfJNS.js";import"./Button-OcSNVXGK.js";const T={class:"list-block-grid grid grid-cols-12 gap-10 max-w-screen-2xl w-full my-0 mx-auto"},m={__name:"ListBlockGrid",props:{items:{type:Array,default:()=>[]},columns:{type:[Number,String],default:2}},setup(s){const a=s,p=_(()=>{switch(Number(a.columns)){case 4:return"md:col-span-3";case 3:return"md:col-span-4";default:return"md:col-span-6"}});return(f,x)=>(c(),l("div",T,[(c(!0),l(d,null,g(s.items,(t,u)=>(c(),l("div",{key:u,class:h(["list-block-grid__item col-span-12",p.value])},[y(B,{type:t.type,subheading:t.subheading,heading:t.heading,paragraph:t.paragraph,buttons:t.buttons},null,8,["type","subheading","heading","paragraph","buttons"])],2))),128))]))}};m.__docgenInfo=Object.assign({displayName:m.name??m.__name},{exportName:"default",displayName:"ListBlockGrid",description:"",tags:{},props:[{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"columns",type:{name:"number|string"},defaultValue:{func:!1,value:"2"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/ListBlockGrid/ListBlockGrid.vue"]});const{expect:i}=__STORYBOOK_MODULE_TEST__,G={title:"Core Components/List Block Grid",component:m,tags:["autodocs"],argTypes:{columns:{control:"select",options:[2,3,4]}}},e={subheading:"Bylaws",heading:"Lorem ipsum dolor sit amet",paragraph:"Lorem ipsum dolor sit amet, consectetur adipi elit.",buttons:[{url:"#",title:"Read More"}]},n={name:"Two Columns",args:{columns:2,items:[e,e,e,e]},play:async({canvas:s})=>{const a=s.getAllByText("Lorem ipsum dolor sit amet");await i(a.length).toBe(4)}},o={name:"Three Columns",args:{columns:3,items:[e,e,e]},play:async({canvas:s})=>{const a=s.getAllByText("Lorem ipsum dolor sit amet");await i(a.length).toBe(3)}},r={name:"Four Columns",args:{columns:4,items:[e,e,e,e]},play:async({canvas:s})=>{const a=s.getAllByText("Lorem ipsum dolor sit amet");await i(a.length).toBe(4)}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Two Columns",
  args: {
    columns: 2,
    items: [sampleItem, sampleItem, sampleItem, sampleItem]
  },
  play: async ({
    canvas
  }) => {
    const headings = canvas.getAllByText("Lorem ipsum dolor sit amet");
    await expect(headings.length).toBe(4);
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Three Columns",
  args: {
    columns: 3,
    items: [sampleItem, sampleItem, sampleItem]
  },
  play: async ({
    canvas
  }) => {
    const headings = canvas.getAllByText("Lorem ipsum dolor sit amet");
    await expect(headings.length).toBe(3);
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Four Columns",
  args: {
    columns: 4,
    items: [sampleItem, sampleItem, sampleItem, sampleItem]
  },
  play: async ({
    canvas
  }) => {
    const headings = canvas.getAllByText("Lorem ipsum dolor sit amet");
    await expect(headings.length).toBe(4);
  }
}`,...r.parameters?.docs?.source}}};const N=["TwoColumns","ThreeColumns","FourColumns"];export{r as FourColumns,o as ThreeColumns,n as TwoColumns,N as __namedExportsOrder,G as default};
