import{c as r,F as u,r as p,d as t,n as d,e as g,l as h}from"./iframe-smcTNgWJ.js";import{_ as f}from"./ListBlock-CNnzuqtO.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-DqAioVFh.js";import"./TextGroup-WtWkjzc1.js";import"./ButtonGroup-0OSwBJFl.js";import"./Button-BaqycuYP.js";const y={class:"list-block-grid grid grid-cols-12 gap-10 max-w-screen-2xl w-full my-0 mx-auto"},m={__name:"ListBlockGrid",props:{items:{type:Array,default:()=>[]},columns:{type:[Number,String],default:2}},setup(n){const l=n,c=h(()=>{switch(Number(l.columns)){case 4:return"md:col-span-3";case 3:return"md:col-span-4";default:return"md:col-span-6"}});return(_,b)=>(t(),r("div",y,[(t(!0),r(u,null,p(n.items,(s,i)=>(t(),r("div",{key:i,class:d(["list-block-grid__item col-span-12",c.value])},[g(f,{type:s.type,subheading:s.subheading,heading:s.heading,paragraph:s.paragraph,buttons:s.buttons},null,8,["type","subheading","heading","paragraph","buttons"])],2))),128))]))}};m.__docgenInfo={exportName:"default",displayName:"ListBlockGrid",description:"",tags:{},props:[{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"columns",type:{name:"number|string"},defaultValue:{func:!1,value:"2"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/ListBlockGrid/ListBlockGrid.vue"]};const x={title:"Core Components/List Block Grid",component:m,tags:["autodocs"],argTypes:{columns:{control:"select",options:[2,3,4]}}},e={subheading:"Bylaws",heading:"Lorem ipsum dolor sit amet",paragraph:"Lorem ipsum dolor sit amet, consectetur adipi elit.",buttons:[{url:"#",title:"Read More"}]},a={name:"Two Columns",args:{columns:2,items:[e,e,e,e]}},o={name:"Three Columns",args:{columns:3,items:[e,e,e]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Two Columns",
  args: {
    columns: 2,
    items: [sampleItem, sampleItem, sampleItem, sampleItem]
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Three Columns",
  args: {
    columns: 3,
    items: [sampleItem, sampleItem, sampleItem]
  }
}`,...o.parameters?.docs?.source}}};const v=["TwoColumns","ThreeColumns"];export{o as ThreeColumns,a as TwoColumns,v as __namedExportsOrder,x as default};
