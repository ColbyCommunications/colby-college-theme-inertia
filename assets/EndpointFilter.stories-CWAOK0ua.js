import{_ as c}from"./EndpointFilter-Ckf89YTt.js";import"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C0Zqfgkc.js";import"./TextGroup-T77HtXsG.js";import"./ButtonGroup-DeVPz35K.js";import"./Button-u50yI3p6.js";const{expect:n}=__STORYBOOK_MODULE_TEST__,g={title:"Core Components/Endpoint Filter",component:c,argTypes:{type:{control:"radio",options:["light","dark"],description:"Controls text colors for light or dark backgrounds"},limit:{control:{type:"number",min:1,max:12},description:"Limits the number of items displayed"},initialEndpoint:{control:"text",description:"The API URL to fetch on mount"},filters:{control:"object",description:"Array of filter objects or `false` to hide the menu"}},parameters:{layout:"fullscreen"}},p=t=>({components:{EndpointFilter:c},setup(){return{args:t}},template:'<EndpointFilter v-bind="args" />'}),i={render:p,args:{type:"light",limit:6},play:async({canvas:t})=>{const e=await t.findByText("Event types:");await n(e).toBeVisible()}},a={render:t=>({components:{EndpointFilter:c},setup(){return{args:t}},template:`
      <div class="bg-indigo-900 py-10">
        <EndpointFilter v-bind="args" />
      </div>
    `}),args:{type:"dark",limit:6},play:async({canvas:t})=>{const e=await t.findByText("Event types:");await n(e).toBeVisible()}},o={render:p,args:{type:"light",limit:3,filters:!1,initialEndpoint:"https://events.colby.edu/live/json/events/group/Athletics"},play:async({canvas:t,canvasElement:e})=>{const l=t.queryAllByText("Event types:");await n(l.length).toBe(0);const s=e.querySelector(".endpoint-filter");await n(s).not.toBeNull()}},r={render:p,args:{type:"light",limit:6,filters:[{title:"All Events",url:"https://events.colby.edu/live/json/events"},{title:"Just Athletics",url:"https://events.colby.edu/live/json/events/group/Athletics"}],initialEndpoint:"https://events.colby.edu/live/json/events"},play:async({canvas:t,userEvent:e})=>{const l=await t.findByText("All Events");await n(l).toBeVisible();const s=await t.findByText("Just Athletics");await n(s).toBeVisible(),await e.click(s)}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    type: "light",
    limit: 6
    // Rely on default props for filters and endpoint
  },
  play: async ({
    canvas
  }) => {
    // This story uses a live API on mount; just assert the container renders
    const container = await canvas.findByText("Event types:");
    await expect(container).toBeVisible();
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => ({
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
  }),
  args: {
    type: "dark",
    limit: 6
  },
  play: async ({
    canvas
  }) => {
    // This story uses a live API on mount; just assert the container renders
    const container = await canvas.findByText("Event types:");
    await expect(container).toBeVisible();
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    type: "light",
    limit: 3,
    filters: false,
    // Hides the navigation bar
    initialEndpoint: "https://events.colby.edu/live/json/events/group/Athletics" // Specific feed
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    // The filter bar is hidden (filters=false); verify no "Event types:" heading appears
    const headings = canvas.queryAllByText("Event types:");
    await expect(headings.length).toBe(0);
    // Verify the endpoint-filter container rendered
    const container = canvasElement.querySelector(".endpoint-filter");
    await expect(container).not.toBeNull();
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    type: "light",
    limit: 6,
    filters: [{
      title: "All Events",
      url: "https://events.colby.edu/live/json/events"
    }, {
      title: "Just Athletics",
      url: "https://events.colby.edu/live/json/events/group/Athletics"
    }],
    initialEndpoint: "https://events.colby.edu/live/json/events"
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    // Assert the custom filter buttons render
    const allEventsButton = await canvas.findByText("All Events");
    await expect(allEventsButton).toBeVisible();
    const athleticsButton = await canvas.findByText("Just Athletics");
    await expect(athleticsButton).toBeVisible();

    // Click a filter button
    await userEvent.click(athleticsButton);
  }
}`,...r.parameters?.docs?.source}}};const E=["Default","DarkMode","NoFilters","CustomFilterList"];export{r as CustomFilterList,a as DarkMode,i as Default,o as NoFilters,E as __namedExportsOrder,g as default};
