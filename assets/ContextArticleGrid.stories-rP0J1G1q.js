import{_ as o}from"./ContextArticleGrid-CIVJ0o9j.js";import"./iframe-BI_3ezP0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B9ygI19o.js";import"./Context-rCALFtqQ.js";import"./TextGroup-8rV2ZAMN.js";import"./ButtonGroup-DeTJD12j.js";import"./Button-e0IECFmJ.js";import"./Article-CX5YCELc.js";import"./Picture-DioVXFI5.js";const b={title:"Core Components/Context Article Grid",component:o,argTypes:{heading:{control:"text"},subheading:{control:"text"},paragraph:{control:"text"},cta:{control:"text"},renderApi:{control:"boolean",description:"If true, fetches data from WP API. If false, uses 'items' prop."},api:{control:"select",options:["","Arts","Alumni"],description:"Changes the WP API endpoint filter",if:{arg:"renderApi",eq:!0}},perPage:{control:{type:"number",min:1,max:6}},items:{control:"object"}},parameters:{layout:"padded"}},n=s=>({components:{ContextArticleGrid:o},setup(){return{args:s}},template:'<ContextArticleGrid v-bind="args" />'}),i=[{image:{sizes:{desktop:"https://placehold.co/600x400/012169/ffffff?text=Desktop+Image+1",mobile:"https://placehold.co/300x300/012169/ffffff?text=Mobile+Image+1"},alt:"Abstract academic concept"},subheading:"Academics",heading:"Innovative Research in Biology",paragraph:"Students and faculty collaborate on groundbreaking research that reshapes our understanding of local ecosystems.",buttons:[{button:{url:"#",title:"Read Article"}}]},{image:{sizes:{desktop:"https://placehold.co/600x400/366bcf/ffffff?text=Desktop+Image+2"},alt:"Art gallery display"},subheading:"The Arts",heading:"New Gallery Exhibition Opens",paragraph:"The museum presents a collection of modern works that challenge perspective and form.",buttons:[{button:{url:"#",title:"View Gallery"}}]},{image:{sizes:{desktop:"https://placehold.co/600x400/gray/white?text=Desktop+Image+3"},alt:"Alumni event"},subheading:"Community",heading:"Alumni Weekend 2024",paragraph:"Join us for a weekend of celebration, networking, and reconnecting with old friends.",buttons:[]}],t=n.bind({});t.args={renderApi:!1,subheading:"Latest Updates",heading:"News & Stories",paragraph:"Explore the latest happenings from around the campus and beyond.",cta:"Read Story",items:i};const e=n.bind({});e.args={renderApi:!0,api:"",perPage:3,subheading:"From the Feed",heading:"Latest News (Live API)",paragraph:"These items are fetched directly from news.colby.edu.",cta:"Read Full Story"};const r=n.bind({});r.args={...e.args,api:"Arts",heading:"Arts & Culture (Live API)",paragraph:"Fetching posts with the Arts category tag."};const a=n.bind({});a.args={...e.args,api:"Alumni",heading:"Alumni News (Live API)",paragraph:"Fetching posts with the Alumni category tag."};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    ContextArticleGrid
  },
  setup() {
    return {
      args
    };
  },
  template: '<ContextArticleGrid v-bind="args" />'
})`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    ContextArticleGrid
  },
  setup() {
    return {
      args
    };
  },
  template: '<ContextArticleGrid v-bind="args" />'
})`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => ({
  components: {
    ContextArticleGrid
  },
  setup() {
    return {
      args
    };
  },
  template: '<ContextArticleGrid v-bind="args" />'
})`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => ({
  components: {
    ContextArticleGrid
  },
  setup() {
    return {
      args
    };
  },
  template: '<ContextArticleGrid v-bind="args" />'
})`,...a.parameters?.docs?.source}}};const x=["ManualData","ApiGeneral","ApiArts","ApiAlumni"];export{a as ApiAlumni,r as ApiArts,e as ApiGeneral,t as ManualData,x as __namedExportsOrder,b as default};
