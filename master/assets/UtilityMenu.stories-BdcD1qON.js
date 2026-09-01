import{_ as a}from"./UtilityMenu-DtULaPwU.js";import"./preload-helper-CNn__nYE.js";import"./iframe-DyQqV1OL.js";import"./Modal-DkpVJFWK.js";const{expect:m}=__STORYBOOK_MODULE_TEST__,p={title:"Core Components/Menus/UtilityMenu",component:a,parameters:{layout:"fullscreen"}},n=[{title:"Colby Arts",url:"#directory"},{title:"Libraries",url:"#news"},{title:"Visit",url:"#events"},{title:"Resources",url:"#offices"},{title:"ColbyNow",url:"#offices"}],r=t=>({components:{UtilityMenu:a},setup(){return{args:t}},template:'<UtilityMenu v-bind="args" />'}),e={render:r,args:{menu:n},play:async({canvas:t})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,p as default};
