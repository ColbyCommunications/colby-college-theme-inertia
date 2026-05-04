import o from"./Accordion-CY2rKgIy.js";import"./iframe-lCgBM3L3.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-ZS6riMzK.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const{expect:l,waitFor:d}=__STORYBOOK_MODULE_TEST__,u={title:"Blocks/Accordion",component:o,tags:["!autodocs"],argTypes:{single:{control:"boolean",description:"If true, opening one panel automatically closes others.",table:{category:"Wordpress Fields"}},openByDefault:{control:"boolean",description:"If true, the first panel will be open when the component mounts.",table:{category:"Wordpress Fields"}},panels:{control:"object",description:"Array of content objects. Content accepts HTML strings.",table:{category:"Wordpress Fields"}}},parameters:{backgrounds:{default:"light"}}},t=n=>({components:{Accordion:o},setup(){return{args:n}},template:`
    <div class="p-10">
      <Accordion v-bind="args" />
    </div>
  `}),a=[{heading:"Admissions & Aid",content:"<p>Learn about our application process, financial aid options, and deadlines for the upcoming academic year..</p>"},{heading:"Academics",content:"<p>Explore our diverse range of majors, minors, and research opportunities available to undergraduate students.</p>"},{heading:"Campus Life",content:"<p>Discover student organizations, housing options, and the vibrant community events happening on campus.</p>"}],e={name:"Accordion",args:{panels:a,single:!1,openByDefault:!1},render:t};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Accordion",
  args: {
    panels: basicPanels,
    single: false,
    openByDefault: false
  },
  render
}`,...e.parameters?.docs?.source}}};const m=["Default"];export{e as Default,m as __namedExportsOrder,u as default};
