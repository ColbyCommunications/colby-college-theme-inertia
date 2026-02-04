import{_ as d}from"./ArticleGrid-HZtA5tCy.js";import"./iframe-XFnRd_Ii.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B9ygI19o.js";import"./TextGroup-BddefmrZ.js";import"./Article-GsNB17EL.js";import"./ButtonGroup-B-QNw8AH.js";import"./Button-DmXOPi3K.js";const a=[{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag"},heading:"Future of Artificial Intelligence",subheading:"Technology",paragraph:"AI is reshaping industries at an unprecedented pace.",url:"#",sizes:{desktop:"https://placehold.co/600x400",mobile:"https://placehold.co/300x200"}},{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag"},heading:"Sustainable Energy Solutions",subheading:"Environment",paragraph:"Solar and wind energy are becoming more accessible than ever.",url:"#",sizes:{desktop:"https://placehold.co/600x400",mobile:"https://placehold.co/300x200"}},{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag"},heading:"Modern Architecture Trends",subheading:"Design",paragraph:"Exploring the intersection of function and aesthetics in 2024.",url:"#",sizes:{desktop:"https://placehold.co/600x400",mobile:"https://placehold.co/300x200"}}],u={title:"Core Components/Article Grid",component:d},s=o=>({components:{ArticleGrid:d},setup(){return{args:o}},template:'<ArticleGrid v-bind="args" />'}),e=s.bind({});e.args={display_posts_method:"manual",columns:3,cta:"Read Story",items:a,border:0};const t=s.bind({});t.args={display_posts_method:"manual",style:"accordion",columns:3,render_api:!1,items:a};const r=s.bind({});r.args={display_posts_method:"internal",render_posts_category:1,post_limit:3};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    ArticleGrid
  },
  setup() {
    return {
      args
    };
  },
  template: '<ArticleGrid v-bind="args" />'
})`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    ArticleGrid
  },
  setup() {
    return {
      args
    };
  },
  template: '<ArticleGrid v-bind="args" />'
})`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => ({
  components: {
    ArticleGrid
  },
  setup() {
    return {
      args
    };
  },
  template: '<ArticleGrid v-bind="args" />'
})`,...r.parameters?.docs?.source}}};const x=["ManualGrid","Accordion","InternalFetch"];export{t as Accordion,r as InternalFetch,e as ManualGrid,x as __namedExportsOrder,u as default};
