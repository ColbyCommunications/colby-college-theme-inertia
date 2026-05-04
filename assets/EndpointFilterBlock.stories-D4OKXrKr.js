import{a as o}from"./index-DZ_Kha3d.js";import{_ as r}from"./EndpointFilter-C42KbRo7.js";import{a as c}from"./mock-data-Db_ZkuBv.js";import"./iframe-DTQvshqa.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-BOYR6eDq.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-COr3JDjA.js";import"./Button-q0sjokTk.js";const{expect:t,spyOn:p,waitFor:d,userEvent:b}=__STORYBOOK_MODULE_TEST__,E={title:"Blocks/Endpoint Filter",component:r,tags:["!autodocs"],argTypes:{type:{control:"radio",options:["light","dark"],description:"Controls text colors for light or dark backgrounds"},limit:{control:{type:"number",min:1,max:12},description:"Limits the number of items displayed"},initialEndpoint:{control:"text",description:"The API URL to fetch on mount"},filters:{control:"object",description:"Array of filter objects or `false` to hide the menu"}},parameters:{layout:"fullscreen"},beforeEach:()=>{const e=p(o,"get").mockResolvedValue({data:c(6)});return()=>e.mockRestore()}},m=e=>({components:{EndpointFilter:r},setup(){return{args:e}},template:'<EndpointFilter v-bind="args" />'}),n={name:"Endpoint Filter",render:m,args:{type:"light",limit:6},play:async({canvas:e})=>{const a=await e.findByText("Event types:");await t(a).toBeVisible(),await d(()=>{t(o.get).toHaveBeenCalled()});const i=await e.findByText("Spring Concert Series");await t(i).toBeVisible();const s=await e.findByText("Faculty Lecture: Climate Change");await t(s).toBeVisible();const l=e.getAllByText("Learn More");await t(l.length).toBe(6)}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Endpoint Filter",
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
}`,...n.parameters?.docs?.source}}};const T=["Default"];export{n as Default,T as __namedExportsOrder,E as default};
