import{a as l}from"./index-DZ_Kha3d.js";import{_ as o}from"./EndpointFilter-CqXofWUB.js";import{a as c}from"./mock-data-Db_ZkuBv.js";import"./iframe-aFyCAL0S.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-BfzbzKKf.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-CZf8hs7t.js";import"./Button-R6CNTj6a.js";const{expect:b,spyOn:p,waitFor:w,userEvent:E}=__STORYBOOK_MODULE_TEST__,A={title:"Core Components/Endpoint Filter",component:o,argTypes:{type:{control:"radio",options:["light","dark"],description:"Controls text colors for light or dark backgrounds"},limit:{control:{type:"number",min:1,max:12},description:"Limits the number of items displayed"},initialEndpoint:{control:"text",description:"The API URL to fetch on mount"},filters:{control:"object",description:"Array of filter objects or `false` to hide the menu"}},parameters:{layout:"fullscreen"},beforeEach:()=>{const e=p(l,"get").mockResolvedValue({data:c(6)});return()=>e.mockRestore()}},r=e=>({components:{EndpointFilter:o},setup(){return{args:e}},template:'<EndpointFilter v-bind="args" />'}),t={render:r,args:{type:"light",limit:6},play:async({canvas:e})=>{}},n={render:e=>({components:{EndpointFilter:o},setup(){return{args:e}},template:`
      <div class="bg-indigo-900 py-10">
        <EndpointFilter v-bind="args" />
      </div>
    `}),args:{type:"dark",limit:6},play:async({canvas:e})=>{}},s={render:r,args:{type:"light",limit:3,filters:!1,initialEndpoint:"https://events.colby.edu/live/json/events/group/Athletics"},play:async({canvas:e,canvasElement:d})=>{}},a={render:r,args:{type:"light",limit:6,filters:[{title:"All Events",url:"https://events.colby.edu/live/json/events"},{title:"Just Athletics",url:"https://events.colby.edu/live/json/events/group/Athletics"}],initialEndpoint:"https://events.colby.edu/live/json/events"},play:async({canvas:e})=>{}},i={render:r,args:{type:"light",limit:2,filters:!1,initialEndpoint:"https://events.colby.edu/live/json/events"},play:async({canvas:e})=>{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    type: "light",
    limit: 6
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
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
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
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
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    // Assert only 2 events render despite 6 being returned
    const event1 = await canvas.findByText("Spring Concert Series");
    await expect(event1).toBeVisible();
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith("https://events.colby.edu/live/json/events");
    });
    const learnMoreButtons = canvas.getAllByText("Learn More");
    await expect(learnMoreButtons.length).toBe(2);
  }
}`,...i.parameters?.docs?.source}}};const M=["Default","DarkMode","NoFilters","CustomFilterList","WithLimit"];export{a as CustomFilterList,n as DarkMode,t as Default,s as NoFilters,i as WithLimit,M as __namedExportsOrder,A as default};
