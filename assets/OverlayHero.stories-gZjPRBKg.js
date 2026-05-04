import c from"./OverlayHero-BVsZ8kva.js";import"./iframe-DTQvshqa.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-4HtdI-UF.js";import"./TextGroup-BOYR6eDq.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-COr3JDjA.js";import"./Button-q0sjokTk.js";import"./Picture-Cmoj2WFy.js";import"./Video-PlB8gDdk.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Icon-wl6YJJL-.js";const{expect:T}=__STORYBOOK_MODULE_TEST__,C={title:"Core Components/Overlay Hero",component:c,tags:["autodocs"],argTypes:{size:{control:"select",options:["large","medium"]}}},e={name:"With Image",args:{subheading:"Welcome to",heading:"Colby College",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",buttons:[{button:{url:"#",title:"Learn More",target:""}}],image:{src:"https://placehold.co/1280x720",srcset:"https://placehold.co/1280x720",alt:"Campus view",sizes:{Hero:"https://placehold.co/1280x720"}},fromPage:!0},play:async({canvas:a})=>{}},t={name:"Medium Size",args:{...e.args,size:"medium"},play:async({canvas:a})=>{}},o={name:"With YouTube Video",args:{subheading:"Watch our",heading:"Campus Tour",paragraph:"Explore Colby College campus.",buttons:[{button:{url:"#",title:"Explore"}}],video:{id:"dQw4w9WgXcQ"},image:{src:"https://placehold.co/1280x720",srcset:"https://placehold.co/1280x720",alt:"Campus view",sizes:{Hero:"https://placehold.co/1280x720"}}},play:async({canvas:a,userEvent:i})=>{}},r={name:"With Video Loop",args:{subheading:"Experience",heading:"Colby in Motion",paragraph:"A looping background video.",buttons:[],videoLoop:"https://example.com/campus-loop.mp4",image:{src:"https://placehold.co/1280x720",srcset:"https://placehold.co/1280x720",alt:"Fallback image",sizes:{Hero:"https://placehold.co/1280x720"}}},play:async({canvas:a})=>{}},s={name:"No Image or Video",args:{heading:"Text Only Hero",paragraph:"No media provided.",fromPage:!0},play:async({canvas:a})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const W=["WithImage","Medium","WithVideo","WithVideoLoop","NoMedia"];export{t as Medium,s as NoMedia,e as WithImage,o as WithVideo,r as WithVideoLoop,W as __namedExportsOrder,C as default};
