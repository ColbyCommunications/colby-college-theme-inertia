import{_ as a}from"./UtilityMenu-RPCOAkBp.js";import"./iframe-Bmd2UPGG.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-Bb0f54f8.js";import"./search-BpV_e8s7.js";const{expect:p}=__STORYBOOK_MODULE_TEST__,u={title:"Core Components/Menus/UtilityMenu",component:a,parameters:{layout:"fullscreen"}},n=[{title:"Colby Arts",url:"#directory"},{title:"Libraries",url:"#news"},{title:"Visit",url:"#events"},{title:"Resources",url:"#offices"},{title:"ColbyNow",url:"#offices"}],r=t=>({components:{UtilityMenu:a},setup(){return{args:t}},template:'<UtilityMenu v-bind="args" />'}),e={render:r,args:{menu:n},play:async({canvas:t})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const l=["Default"];export{e as Default,l as __namedExportsOrder,u as default};
