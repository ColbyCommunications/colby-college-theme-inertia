import{_ as i}from"./ArrowControls-CjN_dRVd.js";import"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";import"./ArrowButton-C6TXGDEx.js";const{expect:e,fn:c}=__STORYBOOK_MODULE_TEST__,B={title:"Core Components/Arrow Controls",component:i},t={name:"Primary",args:{onPrev:c(),onNext:c()},play:async({canvas:n,userEvent:o,args:a})=>{const r=n.getByRole("button",{name:"Previous"}),s=n.getByRole("button",{name:"Next"});await e(r).toBeInTheDocument(),await e(s).toBeInTheDocument(),await o.click(r),await e(a.onPrev).toHaveBeenCalled(),await o.click(s),await e(a.onNext).toHaveBeenCalled()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const v=["Primary"];export{t as Primary,v as __namedExportsOrder,B as default};
