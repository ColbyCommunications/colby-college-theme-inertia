import a from"./OverlayHero-ChKQN3LB.js";import"./iframe-B2cAcd0o.js";import"./preload-helper-CNn__nYE.js";import"./Context-Dfm1yyHK.js";import"./TextGroup-Bu-KSpAj.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-CnGB8P_l.js";import"./Button-WPpnT9Cv.js";import"./Picture-BzaQSWmB.js";import"./Video-D9HQsa7j.js";import"./_commonjsHelpers-CE1G-McA.js";import"./Icon-BKw0G_wm.js";import"./HlsBackground-DhxI77-W.js";const{expect:o}=__STORYBOOK_MODULE_TEST__,x={title:"Blocks/Overlay Hero",component:a,tags:["!autodocs"],argTypes:{subheading:{name:"Subheading",control:"text",table:{category:"Wordpress Fields"}},heading:{name:"Heading",control:"text",table:{category:"Wordpress Fields"}},paragraph:{name:"Paragraph",control:"text",table:{category:"Wordpress Fields"}},buttons:{name:"Buttons",control:"object",table:{category:"Wordpress Fields"}},videoLoop:{name:"Video Loop",control:"object",table:{category:"Wordpress Fields"}},image:{name:"Image",control:"object",table:{category:"Wordpress Fields"}},video:{name:"Video",control:"object",table:{category:"Wordpress Fields"}},fromPage:{table:{disable:!0}},size:{table:{disable:!0}}}},e={name:"Overlay Hero",args:{subheading:"Welcome to",heading:"Colby College",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",buttons:[{button:{url:"#",title:"Learn More",target:""}}],videoLoop:{video:"ExampleVideo.mp4"},image:{src:"https://placehold.co/1280x720",srcset:"https://placehold.co/1280x720",alt:"Campus view",sizes:{Hero:"https://placehold.co/1280x720"}},video:null,fromPage:!0},play:async({canvas:t})=>{await o(t.getByText("Welcome to")).toBeInTheDocument(),await o(t.getByText("Colby College")).toBeInTheDocument(),await o(t.getByAltText("Campus view")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Overlay Hero",
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
    videoLoop: {
      video: "ExampleVideo.mp4"
    },
    image: {
      src: "https://placehold.co/1280x720",
      srcset: "https://placehold.co/1280x720",
      alt: "Campus view",
      sizes: {
        Hero: "https://placehold.co/1280x720"
      }
    },
    video: null,
    fromPage: true
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Welcome to")).toBeInTheDocument();
    await expect(canvas.getByText("Colby College")).toBeInTheDocument();
    await expect(canvas.getByAltText("Campus view")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const v=["WithImage"];export{e as WithImage,v as __namedExportsOrder,x as default};
