import r from"./HwImageSection-BrxiPANe.js";import"./iframe-DHFquFcq.js";import"./preload-helper-B-_ADY_8.js";import"./Context-BbEtaWPo.js";import"./TextGroup-o3sNFTrc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./ButtonGroup-bnX3L9r1.js";import"./Button-BBOumCWS.js";import"./Picture-DroALuPx.js";const{expect:y}=__STORYBOOK_MODULE_TEST__,v={title:"Core Components/Half Width Image Section",component:r,tags:["autodocs"],argTypes:{type:{control:"select",options:["dark","light"]}}},e={name:"Default",args:{heading:"Majors and Minors",paragraph:"Choose from 56 majors and 35 minors, or design your own independent major. You'll have extensive flexibility and valuable guidance when it comes to preparing for your future.",buttons:[{url:"#",title:"Majors and Minor at Colby"}],image:{srcset:"https://placehold.co/760x430",src:"https://placehold.co/480x480",alt:"Placeholder image",sizes:{Hero:"https://placehold.co/760x430",Square:"https://placehold.co/480x480"}}},play:async({canvas:t})=>{}},a={name:"Reverse",args:{...e.args,reverse:!0},play:async({canvas:t})=>{}},n={name:"Light (Dark Background)",args:{...e.args,type:"light"},play:async({canvas:t})=>{}},x=["Default","Reverse","Light"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};export{e as Default,n as Light,a as Reverse,x as __namedExportsOrder,v as default};
