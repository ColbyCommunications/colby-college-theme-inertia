import{_ as o}from"./ArrowButton-BdQp7kdN.js";import"./iframe-Dk8X5kg9.js";import"./preload-helper-PPVm8Dsz.js";const{expect:i,fn:r}=__STORYBOOK_MODULE_TEST__,p={title:"Core Components/ArrowButton",component:o},e={name:"Primary",args:{onPrev:r()},play:async({canvas:a,userEvent:s,args:n})=>{}},t={name:"Reverse",args:{reverse:!0,onNext:r()},play:async({canvas:a,userEvent:s,args:n})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Primary",
  args: {
    onPrev: fn()
  },
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const button = canvas.getByRole("button", {
      name: "Previous"
    });
    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
    await expect(args.onPrev).toHaveBeenCalled();
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Reverse",
  args: {
    reverse: true,
    onNext: fn()
  },
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const button = canvas.getByRole("button", {
      name: "Next"
    });
    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
    await expect(args.onNext).toHaveBeenCalled();
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary","Reverse"];export{e as Primary,t as Reverse,v as __namedExportsOrder,p as default};
