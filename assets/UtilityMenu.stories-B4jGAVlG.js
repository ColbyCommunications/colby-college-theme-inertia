import{_ as r}from"./UtilityMenu-CHznhR14.js";import"./iframe-Ca0X0qHO.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-Bjr0Qnto.js";import"./Search-C5-4PztG.js";import"./Icon-R5lcYNrO.js";import"./_commonjsHelpers-DsqdWQfm.js";import"./Button-BXe4YyPd.js";const{expect:y}=__STORYBOOK_MODULE_TEST__,T={title:"Core Components/Menus/UtilityMenu",component:r,parameters:{layout:"fullscreen"}},a=[{title:"Colby Arts",url:"#directory"},{title:"Libraries",url:"#news"},{title:"Visit",url:"#events"},{title:"Resources",url:"#offices"},{title:"ColbyNow",url:"#offices"}],n=t=>({components:{UtilityMenu:r},setup(){return{args:t}},template:'<UtilityMenu v-bind="args" />'}),e={render:n,args:{menu:a},play:async({canvas:t})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,T as default};
