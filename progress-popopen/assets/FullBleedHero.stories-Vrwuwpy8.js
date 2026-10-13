import s from"./FullBleedHero-DJc65cYf.js";import"./iframe-DHFquFcq.js";import"./preload-helper-B-_ADY_8.js";import"./Context-BbEtaWPo.js";import"./TextGroup-o3sNFTrc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./ButtonGroup-bnX3L9r1.js";import"./Button-BBOumCWS.js";import"./Picture-DroALuPx.js";const{expect:v}=__STORYBOOK_MODULE_TEST__,B={title:"Core Components/Full Bleed Hero",component:s,tags:["autodocs"],argTypes:{type:{control:"select",options:["dark","light"]}}},e={name:"Dark",args:{type:"dark",subheading:"Lorem ipsum",heading:"Lorem ipsum dolor sit amet",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",image:{src:"https://placehold.co/480x480",srcset:"https://placehold.co/1280x700",alt:"Placeholder image",sizes:{Hero:"https://placehold.co/1280x700",Rectangle:"https://placehold.co/480x480"}}},play:async({canvas:a})=>{}},t={name:"Light",args:{...e.args,type:"light"},play:async({canvas:a})=>{}},n={name:"With Buttons",args:{...e.args,buttons:[{url:"#apply",title:"Apply Now",target:"_blank"},{url:"#info",title:"Learn More",target:""}]},play:async({canvas:a})=>{}},r={name:"With Image Caption",args:{...e.args,image:{...e.args.image,caption:"Colby College campus in winter"}},play:async({canvas:a})=>{}},o={name:"No Image",args:{type:"dark",heading:"Text Only",paragraph:"No image provided."},play:async({canvas:a})=>{}},T=["Dark","Light","WithButtons","WithCaption","NoImage"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};export{e as Dark,t as Light,o as NoImage,n as WithButtons,r as WithCaption,T as __namedExportsOrder,B as default};
