import{_ as n}from"./UtilityMenu-BXuOwY5d.js";import"./preload-helper-B-_ADY_8.js";import"./iframe-DHFquFcq.js";import"./Modal-CAjYEWA5.js";const{expect:m}=__STORYBOOK_MODULE_TEST__,p={title:"Core Components/Menus/UtilityMenu",component:n,parameters:{layout:"fullscreen"}},a=[{title:"Colby Arts",url:"#directory"},{title:"Libraries",url:"#news"},{title:"Visit",url:"#events"},{title:"Resources",url:"#offices"},{title:"ColbyNow",url:"#offices"}],r=t=>({components:{UtilityMenu:n},setup(){return{args:t}},template:'<UtilityMenu v-bind="args" />'}),e={render:r,args:{menu:a},play:async({canvas:t})=>{}},u=["Default"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    menu: sampleMenu
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    // These are hardcoded in the component template (not prop-driven)
    await expect(canvas.getByText("myColby")).toBeInTheDocument();
    await expect(canvas.getByText("Search")).toBeInTheDocument();

    // These come from the menu prop
    await expect(canvas.getByText("Directory")).toBeInTheDocument();
    await expect(canvas.getByText("News")).toBeInTheDocument();
    await expect(canvas.getByText("Events")).toBeInTheDocument();
    await expect(canvas.getByText("Offices")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};export{e as Default,u as __namedExportsOrder,p as default};
