import{_ as t}from"./ArrowControls-DyLhg0Ir.js";import"./iframe-DHFquFcq.js";import"./preload-helper-B-_ADY_8.js";import"./ArrowButton-BPUSWXd6.js";const{expect:p,fn:e}=__STORYBOOK_MODULE_TEST__,u={title:"Core Components/Arrow Controls",component:t},n={name:"Primary",args:{onPrev:e(),onNext:e()},play:async({canvas:r,userEvent:a,args:o})=>{}},v=["Primary"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};export{n as Primary,v as __namedExportsOrder,u as default};
