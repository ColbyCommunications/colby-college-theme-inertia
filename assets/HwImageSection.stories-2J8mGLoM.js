import o from"./HwImageSection-fOb1uL9p.js";import"./iframe-DTQvshqa.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-4HtdI-UF.js";import"./TextGroup-BOYR6eDq.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-COr3JDjA.js";import"./Button-q0sjokTk.js";import"./Picture-Cmoj2WFy.js";const{expect:g}=__STORYBOOK_MODULE_TEST__,h={title:"Core Components/Half Width Image Section",component:o,tags:["autodocs"],argTypes:{type:{control:"select",options:["dark","light"]}}},e={name:"Default",args:{heading:"Majors and Minors",paragraph:"Choose from 56 majors and 35 minors, or design your own independent major. You'll have extensive flexibility and valuable guidance when it comes to preparing for your future.",buttons:[{url:"#",title:"Majors and Minor at Colby"}],image:{srcset:"https://placehold.co/760x430",src:"https://placehold.co/480x480",alt:"Placeholder image",sizes:{Hero:"https://placehold.co/760x430",Square:"https://placehold.co/480x480"}}},play:async({canvas:r})=>{}},a={name:"Reverse",args:{...e.args,reverse:!0},play:async({canvas:r})=>{}},t={name:"Light (Dark Background)",args:{...e.args,type:"light"},play:async({canvas:r})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Majors and Minors")).toBeInTheDocument();
    await expect(canvas.getByText("Majors and Minor at Colby")).toBeInTheDocument();
    await expect(canvas.getByAltText("Placeholder image")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Reverse",
  args: {
    ...Default.args,
    reverse: true
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Majors and Minors")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Light (Dark Background)",
  args: {
    ...Default.args,
    type: "light"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Majors and Minors")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};const y=["Default","Reverse","Light"];export{e as Default,t as Light,a as Reverse,y as __namedExportsOrder,h as default};
