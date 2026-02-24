import{_ as o}from"./UtilityMenu-CTsvfeED.js";import"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-DGXlUgKX.js";import"./Search-B50fQZ1k.js";import"./Button-u50yI3p6.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,y={title:"Core Components/Menus/UtilityMenu",component:o,parameters:{layout:"fullscreen"}},a=[{title:"Directory",url:"#directory"},{title:"News",url:"#news"},{title:"Events",url:"#events"},{title:"Offices",url:"#offices"}],r=e=>({components:{UtilityMenu:o},setup(){return{args:e}},template:'<UtilityMenu v-bind="args" />'}),n={render:r,args:{menu:a},play:async({canvas:e})=>{await t(e.getByText("myColby")).toBeInTheDocument(),await t(e.getByText("Search")).toBeInTheDocument(),await t(e.getByText("Directory")).toBeInTheDocument(),await t(e.getByText("News")).toBeInTheDocument(),await t(e.getByText("Events")).toBeInTheDocument(),await t(e.getByText("Offices")).toBeInTheDocument()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const T=["Default"];export{n as Default,T as __namedExportsOrder,y as default};
