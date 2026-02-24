import{c as m,F as d,r as g,d as l,n as h,e as y,l as B}from"./iframe-BfBFAde5.js";import{_}from"./ListBlock-BzLlKYQi.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-Dp7yX81d.js";import"./TextGroup-T77HtXsG.js";import"./ButtonGroup-DeVPz35K.js";import"./Button-u50yI3p6.js";const T={class:"list-block-grid grid grid-cols-12 gap-10 max-w-screen-2xl w-full my-0 mx-auto"},i={__name:"ListBlockGrid",props:{items:{type:Array,default:()=>[]},columns:{type:[Number,String],default:2}},setup(s){const a=s,u=B(()=>{switch(Number(a.columns)){case 4:return"md:col-span-3";case 3:return"md:col-span-4";default:return"md:col-span-6"}});return(f,x)=>(l(),m("div",T,[(l(!0),m(d,null,g(s.items,(t,p)=>(l(),m("div",{key:p,class:h(["list-block-grid__item col-span-12",u.value])},[y(_,{type:t.type,subheading:t.subheading,heading:t.heading,paragraph:t.paragraph,buttons:t.buttons},null,8,["type","subheading","heading","paragraph","buttons"])],2))),128))]))}};i.__docgenInfo={exportName:"default",displayName:"ListBlockGrid",description:"",tags:{},props:[{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"columns",type:{name:"number|string"},defaultValue:{func:!1,value:"2"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/ListBlockGrid/ListBlockGrid.vue"]};const{expect:c}=__STORYBOOK_MODULE_TEST__,A={title:"Core Components/List Block Grid",component:i,tags:["autodocs"],argTypes:{columns:{control:"select",options:[2,3,4]}}},e={subheading:"Bylaws",heading:"Lorem ipsum dolor sit amet",paragraph:"Lorem ipsum dolor sit amet, consectetur adipi elit.",buttons:[{url:"#",title:"Read More"}]},n={name:"Two Columns",args:{columns:2,items:[e,e,e,e]},play:async({canvas:s})=>{const a=s.getAllByText("Lorem ipsum dolor sit amet");await c(a.length).toBe(4)}},o={name:"Three Columns",args:{columns:3,items:[e,e,e]},play:async({canvas:s})=>{const a=s.getAllByText("Lorem ipsum dolor sit amet");await c(a.length).toBe(3)}},r={name:"Four Columns",args:{columns:4,items:[e,e,e,e]},play:async({canvas:s})=>{const a=s.getAllByText("Lorem ipsum dolor sit amet");await c(a.length).toBe(4)}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const F=["TwoColumns","ThreeColumns","FourColumns"];export{r as FourColumns,o as ThreeColumns,n as TwoColumns,F as __namedExportsOrder,A as default};
