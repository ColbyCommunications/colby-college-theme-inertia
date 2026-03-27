import p from"./OverlayHero-BtiBYgal.js";import"./iframe-CXCUApFV.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-Z2uqZJp8.js";import"./TextGroup-C6Nlx1Og.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-CXFncZMH.js";import"./Button-vnDSfKD0.js";import"./Picture-BVaTxbic.js";import"./Video-D5ryl30k.js";import"./Icon-6AIxaukY.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,w={title:"Core Components/Overlay Hero",component:p,tags:["autodocs"],argTypes:{size:{control:"select",options:["large","medium"]}}},o={name:"With Image",args:{subheading:"Welcome to",heading:"Colby College",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",buttons:[{button:{url:"#",title:"Learn More",target:""}}],image:{src:"https://placehold.co/1280x720",srcset:"https://placehold.co/1280x720",alt:"Campus view",sizes:{Hero:"https://placehold.co/1280x720"}},fromPage:!0},play:async({canvas:e})=>{await t(e.getByText("Welcome to")).toBeInTheDocument(),await t(e.getByText("Colby College")).toBeInTheDocument(),await t(e.getByAltText("Campus view")).toBeInTheDocument()}},a={name:"Medium Size",args:{...o.args,size:"medium"},play:async({canvas:e})=>{await t(e.getByText("Colby College")).toBeInTheDocument()}},n={name:"With YouTube Video",args:{subheading:"Watch our",heading:"Campus Tour",paragraph:"Explore Colby College campus.",buttons:[{button:{url:"#",title:"Explore"}}],video:{id:"dQw4w9WgXcQ"},image:{src:"https://placehold.co/1280x720",srcset:"https://placehold.co/1280x720",alt:"Campus view",sizes:{Hero:"https://placehold.co/1280x720"}}},play:async({canvas:e,userEvent:c})=>{await t(e.getByText("Watch")).toBeInTheDocument(),await t(e.getByText("Campus Tour")).toBeInTheDocument();const i=e.getByText("Watch").closest("button");await c.click(i)}},s={name:"With Video Loop",args:{subheading:"Experience",heading:"Colby in Motion",paragraph:"A looping background video.",buttons:[],videoLoop:"https://example.com/campus-loop.mp4",image:{src:"https://placehold.co/1280x720",srcset:"https://placehold.co/1280x720",alt:"Fallback image",sizes:{Hero:"https://placehold.co/1280x720"}}},play:async({canvas:e})=>{await t(e.getByText("Colby in Motion")).toBeInTheDocument()}},r={name:"No Image or Video",args:{heading:"Text Only Hero",paragraph:"No media provided.",fromPage:!0},play:async({canvas:e})=>{await t(e.getByText("Text Only Hero")).toBeInTheDocument()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("Welcome to")).toBeInTheDocument();
    await expect(canvas.getByText("Colby College")).toBeInTheDocument();
    await expect(canvas.getByAltText("Campus view")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Medium Size",
  args: {
    ...WithImage.args,
    size: "medium"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Colby College")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("Watch")).toBeInTheDocument();
    await expect(canvas.getByText("Campus Tour")).toBeInTheDocument();
    const watchBtn = canvas.getByText("Watch").closest("button");
    await userEvent.click(watchBtn);
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("Colby in Motion")).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "No Image or Video",
  args: {
    heading: "Text Only Hero",
    paragraph: "No media provided.",
    fromPage: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Text Only Hero")).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};const v=["WithImage","Medium","WithVideo","WithVideoLoop","NoMedia"];export{a as Medium,r as NoMedia,o as WithImage,n as WithVideo,s as WithVideoLoop,v as __namedExportsOrder,w as default};
