import{_ as o}from"./ArrowButton-BPUSWXd6.js";import"./iframe-DHFquFcq.js";import"./preload-helper-B-_ADY_8.js";const{expect:i,fn:t}=__STORYBOOK_MODULE_TEST__,p={title:"Core Components/ArrowButton",component:o},e={name:"Primary",args:{onPrev:t()},play:async({canvas:r,userEvent:a,args:s})=>{}},n={name:"Reverse",args:{reverse:!0,onNext:t()},play:async({canvas:r,userEvent:a,args:s})=>{}},v=["Primary","Reverse"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};export{e as Primary,n as Reverse,v as __namedExportsOrder,p as default};
