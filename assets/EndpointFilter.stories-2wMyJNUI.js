import{a}from"./index-42ANG6Sg.js";import{_ as y}from"./EndpointFilter-y4wC_7jy.js";import{d as g}from"./mock-data-iuhpH0Ld.js";import"./iframe-Dz40sb8V.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-DUTsutTE.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-D8q5Vq2y.js";import"./Button-BpmqNtNK.js";const{expect:t,spyOn:B,waitFor:o,userEvent:h}=__STORYBOOK_MODULE_TEST__,M={title:"Core Components/Endpoint Filter",component:y,argTypes:{type:{control:"radio",options:["light","dark"],description:"Controls text colors for light or dark backgrounds"},limit:{control:{type:"number",min:1,max:12},description:"Limits the number of items displayed"},initialEndpoint:{control:"text",description:"The API URL to fetch on mount"},filters:{control:"object",description:"Array of filter objects or `false` to hide the menu"}},parameters:{layout:"fullscreen"},beforeEach:()=>{const e=B(a,"get").mockResolvedValue({data:g(6)});return()=>e.mockRestore()}},v=e=>({components:{EndpointFilter:y},setup(){return{args:e}},template:'<EndpointFilter v-bind="args" />'}),r={render:v,args:{type:"light",limit:6},play:async({canvas:e})=>{const i=await e.findByText("Event types:");await t(i).toBeVisible(),await o(()=>{t(a.get).toHaveBeenCalled()});const n=await e.findByText("Spring Concert Series");await t(n).toBeVisible();const s=await e.findByText("Faculty Lecture: Climate Change");await t(s).toBeVisible();const u=e.getAllByText("Learn More");await t(u.length).toBe(6)}},l={render:e=>({components:{EndpointFilter:y},setup(){return{args:e}},template:`
      <div class="bg-indigo-900 py-10">
        <EndpointFilter v-bind="args" />
      </div>
    `}),args:{type:"dark",limit:6},play:async({canvas:e})=>{const i=await e.findByText("Event types:");await t(i).toBeVisible(),await o(()=>{t(a.get).toHaveBeenCalled()});const n=await e.findByText("Spring Concert Series");await t(n).toBeVisible();const s=e.getAllByText("Learn More");await t(s.length).toBe(6)}},c={render:v,args:{type:"light",limit:3,filters:!1,initialEndpoint:"https://events.colby.edu/live/json/events/group/Athletics"},play:async({canvas:e,canvasElement:i})=>{const n=e.queryAllByText("Event types:");await t(n.length).toBe(0),await o(()=>{t(a.get).toHaveBeenCalledWith("https://events.colby.edu/live/json/events/group/Athletics")});const s=await e.findByText("Spring Concert Series");await t(s).toBeVisible();const u=e.getAllByText("Learn More");await t(u.length).toBe(3)}},p={render:v,args:{type:"light",limit:6,filters:[{title:"All Events",url:"https://events.colby.edu/live/json/events"},{title:"Just Athletics",url:"https://events.colby.edu/live/json/events/group/Athletics"}],initialEndpoint:"https://events.colby.edu/live/json/events"},play:async({canvas:e})=>{const i=await e.findByText("All Events");await t(i).toBeVisible();const n=await e.findByText("Just Athletics");await t(n).toBeVisible();const s=await e.findByText("Spring Concert Series");await t(s).toBeVisible(),await o(()=>{t(a.get).toHaveBeenCalledWith("https://events.colby.edu/live/json/events")}),await h.click(n),await t(a.get).toHaveBeenCalledWith("https://events.colby.edu/live/json/events/group/Athletics")}},d={render:v,args:{type:"light",limit:2,filters:!1,initialEndpoint:"https://events.colby.edu/live/json/events"},play:async({canvas:e})=>{const i=await e.findByText("Spring Concert Series");await t(i).toBeVisible(),await o(()=>{t(a.get).toHaveBeenCalledWith("https://events.colby.edu/live/json/events")});const n=e.getAllByText("Learn More");await t(n.length).toBe(2)}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    type: "light",
    limit: 6
  },
  play: async ({
    canvas
  }) => {
    // Assert the filter bar renders
    const filterHeading = await canvas.findByText("Event types:");
    await expect(filterHeading).toBeVisible();
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalled();
    });

    // Assert mock event titles render
    const event1 = await canvas.findByText("Spring Concert Series");
    await expect(event1).toBeVisible();
    const event2 = await canvas.findByText("Faculty Lecture: Climate Change");
    await expect(event2).toBeVisible();

    // Assert "Learn More" buttons render for each event
    const learnMoreButtons = canvas.getAllByText("Learn More");
    await expect(learnMoreButtons.length).toBe(6);
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
    const filterHeading = await canvas.findByText("Event types:");
    await expect(filterHeading).toBeVisible();
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalled();
    });

    // Assert mock events render in dark mode
    const event1 = await canvas.findByText("Spring Concert Series");
    await expect(event1).toBeVisible();
    const learnMoreButtons = canvas.getAllByText("Learn More");
    await expect(learnMoreButtons.length).toBe(6);
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    type: "light",
    limit: 3,
    filters: false,
    initialEndpoint: "https://events.colby.edu/live/json/events/group/Athletics"
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    // The filter bar is hidden (filters=false)
    const headings = canvas.queryAllByText("Event types:");
    await expect(headings.length).toBe(0);
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith("https://events.colby.edu/live/json/events/group/Athletics");
    });

    // Verify mock events still render
    const event1 = await canvas.findByText("Spring Concert Series");
    await expect(event1).toBeVisible();

    // Assert limit=3 is respected
    const learnMoreButtons = canvas.getAllByText("Learn More");
    await expect(learnMoreButtons.length).toBe(3);
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
    canvas
  }) => {
    // Assert the custom filter buttons render
    const allEventsButton = await canvas.findByText("All Events");
    await expect(allEventsButton).toBeVisible();
    const athleticsButton = await canvas.findByText("Just Athletics");
    await expect(athleticsButton).toBeVisible();

    // Assert events rendered from initial load
    const event1 = await canvas.findByText("Spring Concert Series");
    await expect(event1).toBeVisible();
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith("https://events.colby.edu/live/json/events");
    });

    // Click a filter button and verify axios is called with the new URL
    await userEvent.click(athleticsButton);
    await expect(axios.get).toHaveBeenCalledWith("https://events.colby.edu/live/json/events/group/Athletics");
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    type: "light",
    limit: 2,
    filters: false,
    initialEndpoint: "https://events.colby.edu/live/json/events"
  },
  play: async ({
    canvas
  }) => {
    // Assert only 2 events render despite 6 being returned
    const event1 = await canvas.findByText("Spring Concert Series");
    await expect(event1).toBeVisible();
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith("https://events.colby.edu/live/json/events");
    });
    const learnMoreButtons = canvas.getAllByText("Learn More");
    await expect(learnMoreButtons.length).toBe(2);
  }
}`,...d.parameters?.docs?.source}}};const V=["Default","DarkMode","NoFilters","CustomFilterList","WithLimit"];export{p as CustomFilterList,l as DarkMode,r as Default,c as NoFilters,d as WithLimit,V as __namedExportsOrder,M as default};
