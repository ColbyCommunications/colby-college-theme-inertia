import{c,a as r,e as d,d as i}from"./iframe-DbKCvkZk.js";import{_ as p}from"./Carousel-BdnRocgl.js";import{_ as m}from"./EndpointFilter-wIWLk90t.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B9ygI19o.js";import"./Context-BPl-zxIc.js";import"./TextGroup-DVoGG-Ae.js";import"./ButtonGroup-KUtFoJNm.js";import"./Button-B05Sk62R.js";import"./ArrowControls-Cus-mTuY.js";import"./ArrowButton-7i69bZow.js";const u={class:"featured-events bg-bluemarble__pattern full-bleed relative space-y-28 bg-cover bg-center py-24"},h={class:"featured-events__inner mx-auto my-0 w-full max-w-screen-2xl gap-x-10 md:grid md:grid-cols-12"},g={class:"featured-events__carousel col-span-12 md:col-span-10 md:col-start-2"},f={class:"featured-events__inner mx-auto my-0 grid w-full max-w-screen-2xl gap-x-10 md:grid-cols-12"},v={class:"md:col-span-10 md:col-start-2"},n={__name:"FeaturedEvents",props:{heading:{type:String,default:""},paragraph:{type:String,default:""},items:{type:Array,default:()=>[]}},setup(e){return(b,_)=>(i(),c("div",u,[r("div",h,[r("div",g,[d(p,{type:"light",size:"medium","render-api":!1,heading:e.heading,paragraph:e.paragraph,items:e.items},null,8,["heading","paragraph","items"])])]),r("div",f,[r("div",v,[d(m,{type:"dark",limit:3,filters:!1})])])]))}};n.__docgenInfo={exportName:"default",displayName:"FeaturedEvents",description:"",tags:{},props:[{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"items",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/FeaturedEvents/FeaturedEvents.vue"]};const l=[{title:"Keynote Speaker: Dr. Jane Goodall",date:"October 15, 2024",image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Rectangle:"https://placehold.co/600x400",Rectangle_mobile:"https://placehold.co/300x200"}},url:"#",buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},{title:"Colby Symphony Orchestra",date:"November 3, 2024",image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Rectangle:"https://placehold.co/600x400",Rectangle_mobile:"https://placehold.co/300x200"}},url:"#",buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},{title:"Museum Exhibition Opening",date:"December 10, 2024",image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Rectangle:"https://placehold.co/600x400",Rectangle_mobile:"https://placehold.co/300x200"}},url:"#",buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]}],V={title:"Core Components/Featured Events",component:n,parameters:{layout:"fullscreen"},argTypes:{heading:{control:"text"},paragraph:{control:"text"},items:{control:"object"}}},o=e=>({components:{FeaturedEvents:n},setup(){return{args:e}},template:'<FeaturedEvents v-bind="args" />'}),t=o.bind({});t.args={heading:"Featured Events",paragraph:"Explore upcoming major events, lectures, and performances happening on Mayflower Hill.",items:l};const a=o.bind({});a.args={heading:"Upcoming Schedule",paragraph:"Check below for the full list of events from our live calendar.",items:[]};const s=o.bind({});s.args={heading:"Events",items:[l[0]]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    FeaturedEvents
  },
  setup() {
    return {
      args
    };
  },
  template: '<FeaturedEvents v-bind="args" />'
})`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => ({
  components: {
    FeaturedEvents
  },
  setup() {
    return {
      args
    };
  },
  template: '<FeaturedEvents v-bind="args" />'
})`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => ({
  components: {
    FeaturedEvents
  },
  setup() {
    return {
      args
    };
  },
  template: '<FeaturedEvents v-bind="args" />'
})`,...s.parameters?.docs?.source}}};const D=["Default","WithoutCarouselItems","Minimal"];export{t as Default,s as Minimal,a as WithoutCarouselItems,D as __namedExportsOrder,V as default};
