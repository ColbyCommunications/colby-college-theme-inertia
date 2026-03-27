import r from"./HwImageSection-CZTQocQm.js";import"./iframe-D3iFGQZk.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-BdALv82u.js";import"./TextGroup-C7hXvWol.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-ojbwMsyk.js";import"./Button-DMj_75Cf.js";import"./Picture-hGQrZg1i.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,y={title:"Core Components/Half Width Image Section",component:r,tags:["autodocs"],argTypes:{type:{control:"select",options:["dark","light"]}}},a={name:"Default",args:{heading:"Majors and Minors",paragraph:"Choose from 56 majors and 35 minors, or design your own independent major. You'll have extensive flexibility and valuable guidance when it comes to preparing for your future.",buttons:[{url:"#",title:"Majors and Minor at Colby"}],image:{srcset:"https://placehold.co/760x430",src:"https://placehold.co/480x480",alt:"Placeholder image",sizes:{Hero:"https://placehold.co/760x430",Square:"https://placehold.co/480x480"}}},play:async({canvas:e})=>{await t(e.getByText("Majors and Minors")).toBeInTheDocument(),await t(e.getByText("Majors and Minor at Colby")).toBeInTheDocument(),await t(e.getByAltText("Placeholder image")).toBeInTheDocument()}},n={name:"Reverse",args:{...a.args,reverse:!0},play:async({canvas:e})=>{await t(e.getByText("Majors and Minors")).toBeInTheDocument()}},o={name:"Light (Dark Background)",args:{...a.args,type:"light"},play:async({canvas:e})=>{await t(e.getByText("Majors and Minors")).toBeInTheDocument()}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    heading: "Majors and Minors",
    paragraph: "Choose from 56 majors and 35 minors, or design your own independent major. You'll have extensive flexibility and valuable guidance when it comes to preparing for your future.",
    buttons: [{
      url: "#",
      title: "Majors and Minor at Colby"
    }],
    image: {
      srcset: "https://placehold.co/760x430",
      src: "https://placehold.co/480x480",
      alt: "Placeholder image",
      sizes: {
        Hero: "https://placehold.co/760x430",
        Square: "https://placehold.co/480x480"
      }
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Majors and Minors")).toBeInTheDocument();
    await expect(canvas.getByText("Majors and Minor at Colby")).toBeInTheDocument();
    await expect(canvas.getByAltText("Placeholder image")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Reverse",
  args: {
    ...Default.args,
    reverse: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Majors and Minors")).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Light (Dark Background)",
  args: {
    ...Default.args,
    type: "light"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Majors and Minors")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};const x=["Default","Reverse","Light"];export{a as Default,o as Light,n as Reverse,x as __namedExportsOrder,y as default};
