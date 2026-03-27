import{_ as o}from"./UtilityMenu-DrOWurFw.js";import"./iframe-CXCUApFV.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-Do2xxAVQ.js";import"./Search-BxBc4UIS.js";import"./Button-vnDSfKD0.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,l={title:"Core Components/Menus/UtilityMenu",component:o,parameters:{layout:"fullscreen"}},a=[{title:"Colby Arts",url:"#directory"},{title:"Libraries",url:"#news"},{title:"Visit",url:"#events"},{title:"Resources",url:"#offices"},{title:"ColbyNow",url:"#offices"}],r=e=>({components:{UtilityMenu:o},setup(){return{args:e}},template:'<UtilityMenu v-bind="args" />'}),n={render:r,args:{menu:a},play:async({canvas:e})=>{await t(e.getByText("myColby")).toBeInTheDocument(),await t(e.getByText("Search")).toBeInTheDocument(),await t(e.getByText("Directory")).toBeInTheDocument(),await t(e.getByText("News")).toBeInTheDocument(),await t(e.getByText("Events")).toBeInTheDocument(),await t(e.getByText("Offices")).toBeInTheDocument()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    menu: sampleMenu
  },
  play: async ({
    canvas
  }) => {
    // These are hardcoded in the component template (not prop-driven)
    await expect(canvas.getByText("myColby")).toBeInTheDocument();
    await expect(canvas.getByText("Search")).toBeInTheDocument();

    // These come from the menu prop
    await expect(canvas.getByText("Directory")).toBeInTheDocument();
    await expect(canvas.getByText("News")).toBeInTheDocument();
    await expect(canvas.getByText("Events")).toBeInTheDocument();
    await expect(canvas.getByText("Offices")).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};const y=["Default"];export{n as Default,y as __namedExportsOrder,l as default};
