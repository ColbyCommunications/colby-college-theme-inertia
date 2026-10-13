import s from"./OverlayHero-CEOKOfEF.js";import"./iframe-DHFquFcq.js";import"./preload-helper-B-_ADY_8.js";import"./Context-BbEtaWPo.js";import"./TextGroup-o3sNFTrc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./ButtonGroup-bnX3L9r1.js";import"./Button-BBOumCWS.js";import"./Picture-DroALuPx.js";import"./Video-B5_Yduz1.js";import"./_commonjsHelpers-CE1G-McA.js";import"./Icon-Reaz2zb1.js";import"./HlsBackground-EK-DvTuS.js";const{expect:w}=__STORYBOOK_MODULE_TEST__,B={title:"Core Components/Overlay Hero",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["large","medium"]}}},e={name:"With Image",args:{subheading:"Welcome to",heading:"Colby College",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",buttons:[{button:{url:"#",title:"Learn More",target:""}}],image:{src:"https://placehold.co/1280x720",srcset:"https://placehold.co/1280x720",alt:"Campus view",sizes:{Hero:"https://placehold.co/1280x720"}},fromPage:!0},play:async({canvas:a})=>{}},t={name:"Medium Size",args:{...e.args,size:"medium"},play:async({canvas:a})=>{}},n={name:"With YouTube Video",args:{subheading:"Watch our",heading:"Campus Tour",paragraph:"Explore Colby College campus.",buttons:[{button:{url:"#",title:"Explore"}}],video:{id:"dQw4w9WgXcQ"},image:{src:"https://placehold.co/1280x720",srcset:"https://placehold.co/1280x720",alt:"Campus view",sizes:{Hero:"https://placehold.co/1280x720"}}},play:async({canvas:a,userEvent:c})=>{}},o={name:"With Video Loop",args:{subheading:"Experience",heading:"Colby in Motion",paragraph:"A looping background video.",buttons:[],videoLoop:"https://example.com/campus-loop.mp4",image:{src:"https://placehold.co/1280x720",srcset:"https://placehold.co/1280x720",alt:"Fallback image",sizes:{Hero:"https://placehold.co/1280x720"}}},play:async({canvas:a})=>{}},r={name:"No Image or Video",args:{heading:"Text Only Hero",paragraph:"No media provided.",fromPage:!0},play:async({canvas:a})=>{}},E=["WithImage","Medium","WithVideo","WithVideoLoop","NoMedia"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "With Image",
  args: {
    subheading: "Welcome to",
    heading: "Colby College",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buttons: [{
      button: {
        url: "#",
        title: "Learn More",
        target: ""
      }
    }],
    image: {
      src: "https://placehold.co/1280x720",
      srcset: "https://placehold.co/1280x720",
      alt: "Campus view",
      sizes: {
        Hero: "https://placehold.co/1280x720"
      }
    },
    fromPage: true
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Welcome to")).toBeInTheDocument();
    await expect(canvas.getByText("Colby College")).toBeInTheDocument();
    await expect(canvas.getByAltText("Campus view")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Medium Size",
  args: {
    ...WithImage.args,
    size: "medium"
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Colby College")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "With YouTube Video",
  args: {
    subheading: "Watch our",
    heading: "Campus Tour",
    paragraph: "Explore Colby College campus.",
    buttons: [{
      button: {
        url: "#",
        title: "Explore"
      }
    }],
    video: {
      id: "dQw4w9WgXcQ"
    },
    image: {
      src: "https://placehold.co/1280x720",
      srcset: "https://placehold.co/1280x720",
      alt: "Campus view",
      sizes: {
        Hero: "https://placehold.co/1280x720"
      }
    }
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Watch")).toBeInTheDocument();
    await expect(canvas.getByText("Campus Tour")).toBeInTheDocument();
    const watchBtn = canvas.getByText("Watch").closest("button");
    await userEvent.click(watchBtn);
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "With Video Loop",
  args: {
    subheading: "Experience",
    heading: "Colby in Motion",
    paragraph: "A looping background video.",
    buttons: [],
    videoLoop: "https://example.com/campus-loop.mp4",
    image: {
      src: "https://placehold.co/1280x720",
      srcset: "https://placehold.co/1280x720",
      alt: "Fallback image",
      sizes: {
        Hero: "https://placehold.co/1280x720"
      }
    }
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Colby in Motion")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "No Image or Video",
  args: {
    heading: "Text Only Hero",
    paragraph: "No media provided.",
    fromPage: true
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Text Only Hero")).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};export{t as Medium,r as NoMedia,e as WithImage,n as WithVideo,o as WithVideoLoop,E as __namedExportsOrder,B as default};
