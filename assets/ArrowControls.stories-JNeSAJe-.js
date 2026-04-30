import{_ as r}from"./ArrowControls-UsNxnfrT.js";import"./iframe-C6aVhbCK.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowButton-BRutgYn7.js";const{expect:p,fn:t}=__STORYBOOK_MODULE_TEST__,u={title:"Core Components/Arrow Controls",component:r},e={name:"Primary",args:{onPrev:t(),onNext:t()},play:async({canvas:n,userEvent:a,args:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Primary",
  args: {
    onPrev: fn(),
    onNext: fn()
  },
  play: async ({
    canvas,
    userEvent,
    args
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const prevButton = canvas.getByRole("button", {
      name: "Previous"
    });
    const nextButton = canvas.getByRole("button", {
      name: "Next"
    });
    await expect(prevButton).toBeInTheDocument();
    await expect(nextButton).toBeInTheDocument();
    await userEvent.click(prevButton);
    await expect(args.onPrev).toHaveBeenCalled();
    await userEvent.click(nextButton);
    await expect(args.onNext).toHaveBeenCalled();
  }
}`,...e.parameters?.docs?.source}}};const v=["Primary"];export{e as Primary,v as __namedExportsOrder,u as default};
