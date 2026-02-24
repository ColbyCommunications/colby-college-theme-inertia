import{_ as u}from"./ArrowButton-C6TXGDEx.js";import"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";const{expect:a,fn:c}=__STORYBOOK_MODULE_TEST__,p={title:"Core Components/ArrowButton",component:u},n={name:"Primary",args:{onPrev:c()},play:async({canvas:o,userEvent:r,args:s})=>{const e=o.getByRole("button",{name:"Previous"});await a(e).toBeInTheDocument(),await r.click(e),await a(s.onPrev).toHaveBeenCalled()}},t={name:"Reverse",args:{reverse:!0,onNext:c()},play:async({canvas:o,userEvent:r,args:s})=>{const e=o.getByRole("button",{name:"Next"});await a(e).toBeInTheDocument(),await r.click(e),await a(s.onNext).toHaveBeenCalled()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    const button = canvas.getByRole("button", {
      name: "Previous"
    });
    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
    await expect(args.onPrev).toHaveBeenCalled();
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    const button = canvas.getByRole("button", {
      name: "Next"
    });
    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
    await expect(args.onNext).toHaveBeenCalled();
  }
}`,...t.parameters?.docs?.source}}};const v=["Primary","Reverse"];export{n as Primary,t as Reverse,v as __namedExportsOrder,p as default};
