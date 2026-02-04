import{_ as o}from"./EndpointFilter-BPFFMz-K.js";import"./iframe-XFnRd_Ii.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B9ygI19o.js";const c={title:"Core Components/Endpoint Filter",component:o,argTypes:{type:{control:"radio",options:["light","dark"],description:"Controls text colors for light or dark backgrounds"},limit:{control:{type:"number",min:1,max:12},description:"Limits the number of items displayed"},initialEndpoint:{control:"text",description:"The API URL to fetch on mount"},filters:{control:"object",description:"Array of filter objects or `false` to hide the menu"}},parameters:{layout:"fullscreen"}},i=s=>({components:{EndpointFilter:o},setup(){return{args:s}},template:'<EndpointFilter v-bind="args" />'}),t=i.bind({});t.args={type:"light",limit:6};const e=s=>({components:{EndpointFilter:o},setup(){return{args:s}},template:`
    <div class="bg-indigo-900 py-10"> 
      <EndpointFilter v-bind="args" />
    </div>
  `});e.args={type:"dark",limit:6};const n=i.bind({});n.args={type:"light",limit:3,filters:!1,initialEndpoint:"https://events.colby.edu/live/json/events/group/Athletics"};const r=i.bind({});r.args={type:"light",limit:6,filters:[{title:"All Events",url:"https://events.colby.edu/live/json/events"},{title:"Just Athletics",url:"https://events.colby.edu/live/json/events/group/Athletics"}],initialEndpoint:"https://events.colby.edu/live/json/events"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    EndpointFilter
  },
  setup() {
    return {
      args
    };
  },
  template: '<EndpointFilter v-bind="args" />'
})`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    EndpointFilter
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div class="bg-indigo-900 py-10"> 
      <EndpointFilter v-bind="args" />
    </div>
  \`
})`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => ({
  components: {
    EndpointFilter
  },
  setup() {
    return {
      args
    };
  },
  template: '<EndpointFilter v-bind="args" />'
})`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => ({
  components: {
    EndpointFilter
  },
  setup() {
    return {
      args
    };
  },
  template: '<EndpointFilter v-bind="args" />'
})`,...r.parameters?.docs?.source}}};const m=["Default","DarkMode","NoFilters","CustomFilterList"];export{r as CustomFilterList,e as DarkMode,t as Default,n as NoFilters,m as __namedExportsOrder,c as default};
