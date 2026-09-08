import o from"./Accordion-CZs1Z_rz.js";import"./iframe-B_u7WNeO.js";import"./preload-helper-CNn__nYE.js";import"./Icon-D8vGAaNd.js";import"./TextGroup-DSFu88DG.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";const{expect:u,waitFor:g}=__STORYBOOK_MODULE_TEST__,f={title:"Blocks/Accordion",component:o,tags:["!autodocs"],argTypes:{single:{name:"Single Mode",control:"boolean",description:"If true, opening one panel automatically closes others.",table:{category:"Wordpress Fields"}},open_by_default:{name:"Open First Panel By Default",control:"boolean",description:"If true, the first panel will be open when the component mounts.",table:{category:"Wordpress Fields"}},panels:{table:{disable:!0}}},parameters:{backgrounds:{default:"light"}}},a=n=>({components:{Accordion:o},setup(){return{args:n}},template:`
    <div class="p-10">
      <Accordion v-bind="args" />
    </div>
  `}),t=[{heading:"Admissions & Aid",content:"<p>Learn about our application process, financial aid options, and deadlines for the upcoming academic year..</p>"},{heading:"Academics",content:"<p>Explore our diverse range of majors, minors, and research opportunities available to undergraduate students.</p>"},{heading:"Campus Life",content:"<p>Discover student organizations, housing options, and the vibrant community events happening on campus.</p>"}],e={name:"Accordion",args:{panels:t,single:!1,open_by_default:!1},render:a};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Accordion",
  args: {
    panels: basicPanels,
    single: false,
    open_by_default: false
  },
  render
}`,...e.parameters?.docs?.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,f as default};
