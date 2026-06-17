import{_ as a}from"./IconSection-Bj9xE2bY.js";import"./iframe-C2qc3nex.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-DZZU3NIo.js";import"./TextGroup-DKIilHDl.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-CPZA7I38.js";import"./Button-CKn4oFjH.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,u={title:"Core Components/Icon Section",component:a,tags:["autodocs"]},e={name:"Default",args:{subheading:"Why Join",heading:"A global online community awaits.",paragraph:"Join an exclusive network of talented alumni to build and expand professional relationships.",buttons:[{url:"#",title:"Join Now"}],items:[{image:{src:"https://placehold.co/160x160",alt:"Connect"},heading:"Connect",paragraph:"Find and reminisce with fellow graduates, see what they have been up to and stay in touch."},{image:{src:"https://placehold.co/160x160",alt:"Give back"},heading:"Give back",paragraph:"Introduce, employ and offer to act as a mentor to our graduating students."},{image:{src:"https://placehold.co/160x160",alt:"Expand"},heading:"Expand",paragraph:"Leverage your professional network to get introduced to people you should know."},{image:{src:"https://placehold.co/160x160",alt:"Re-connect"},heading:"Re-connect with classmates",paragraph:"Colby Connect allows you to use the trusted Colby College environment to expand your professional network."}]},play:async({canvas:t})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    subheading: "Why Join",
    heading: "A global online community awaits.",
    paragraph: "Join an exclusive network of talented alumni to build and expand professional relationships.",
    buttons: [{
      url: "#",
      title: "Join Now"
    }],
    items: [{
      image: {
        src: "https://placehold.co/160x160",
        alt: "Connect"
      },
      heading: "Connect",
      paragraph: "Find and reminisce with fellow graduates, see what they have been up to and stay in touch."
    }, {
      image: {
        src: "https://placehold.co/160x160",
        alt: "Give back"
      },
      heading: "Give back",
      paragraph: "Introduce, employ and offer to act as a mentor to our graduating students."
    }, {
      image: {
        src: "https://placehold.co/160x160",
        alt: "Expand"
      },
      heading: "Expand",
      paragraph: "Leverage your professional network to get introduced to people you should know."
    }, {
      image: {
        src: "https://placehold.co/160x160",
        alt: "Re-connect"
      },
      heading: "Re-connect with classmates",
      paragraph: "Colby Connect allows you to use the trusted Colby College environment to expand your professional network."
    }]
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("A global online community awaits.")).toBeInTheDocument();
    await expect(canvas.getByText("Connect")).toBeInTheDocument();
    await expect(canvas.getByText("Give back")).toBeInTheDocument();
    await expect(canvas.getByText("Join Now")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const m=["Default"];export{e as Default,m as __namedExportsOrder,u as default};
