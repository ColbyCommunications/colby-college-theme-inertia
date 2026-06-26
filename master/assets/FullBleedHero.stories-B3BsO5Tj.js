import{_ as n}from"./FullBleedHero-B_FCI9kM.js";import"./iframe-Bv-Nm1Xr.js";import"./preload-helper-CNn__nYE.js";import"./Context-D9uZovwk.js";import"./TextGroup-x_l8l4_G.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-Bq3s0i_v.js";import"./Button-UGHxb6co.js";import"./Picture-CEhAdEuc.js";const{expect:x}=__STORYBOOK_MODULE_TEST__,v={title:"Core Components/Full Bleed Hero",component:n,tags:["autodocs"],argTypes:{type:{control:"select",options:["dark","light"]}}},e={name:"Dark",args:{type:"dark",subheading:"Lorem ipsum",heading:"Lorem ipsum dolor sit amet",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",image:{src:"https://placehold.co/480x480",srcset:"https://placehold.co/1280x700",alt:"Placeholder image",sizes:{Hero:"https://placehold.co/1280x700",Rectangle:"https://placehold.co/480x480"}}},play:async({canvas:a})=>{}},t={name:"Light",args:{...e.args,type:"light"},play:async({canvas:a})=>{}},r={name:"With Buttons",args:{...e.args,buttons:[{url:"#apply",title:"Apply Now",target:"_blank"},{url:"#info",title:"Learn More",target:""}]},play:async({canvas:a})=>{}},o={name:"With Image Caption",args:{...e.args,image:{...e.args.image,caption:"Colby College campus in winter"}},play:async({canvas:a})=>{}},s={name:"No Image",args:{type:"dark",heading:"Text Only",paragraph:"No image provided."},play:async({canvas:a})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Dark",
  args: {
    type: "dark",
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum dolor sit amet",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",
    image: {
      src: "https://placehold.co/480x480",
      srcset: "https://placehold.co/1280x700",
      alt: "Placeholder image",
      sizes: {
        Hero: "https://placehold.co/1280x700",
        Rectangle: "https://placehold.co/480x480"
      }
    }
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Lorem ipsum")).toBeInTheDocument();
    await expect(canvas.getByText("Lorem ipsum dolor sit amet")).toBeInTheDocument();
    await expect(canvas.getByAltText("Placeholder image")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Light",
  args: {
    ...Dark.args,
    type: "light"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Lorem ipsum dolor sit amet")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "With Buttons",
  args: {
    ...Dark.args,
    buttons: [{
      url: "#apply",
      title: "Apply Now",
      target: "_blank"
    }, {
      url: "#info",
      title: "Learn More",
      target: ""
    }]
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Apply Now")).toBeInTheDocument();
    await expect(canvas.getByText("Learn More")).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "With Image Caption",
  args: {
    ...Dark.args,
    image: {
      ...Dark.args.image,
      caption: "Colby College campus in winter"
    }
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Colby College campus in winter")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "No Image",
  args: {
    type: "dark",
    heading: "Text Only",
    paragraph: "No image provided."
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Text Only")).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};const B=["Dark","Light","WithButtons","WithCaption","NoImage"];export{e as Dark,t as Light,s as NoImage,r as WithButtons,o as WithCaption,B as __namedExportsOrder,v as default};
