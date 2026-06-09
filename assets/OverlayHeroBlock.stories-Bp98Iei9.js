import a from"./OverlayHero-B2hb-7ox.js";import"./iframe-C58aFFNj.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-sL6xWdi4.js";import"./TextGroup-BdFHwG5y.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-DKauVGOZ.js";import"./Button-B2EqhwkR.js";import"./Picture-CIfcjqAs.js";import"./Video-T153_Y_g.js";import"./_commonjsHelpers-CE1G-McA.js";import"./Icon-DpNmnzva.js";import"./HlsBackground-DJnb-3LC.js";const{expect:o}=__STORYBOOK_MODULE_TEST__,y={title:"Blocks/Overlay Hero",component:a,tags:["!autodocs"],argTypes:{subheading:{name:"Subheading",control:"text",table:{category:"Wordpress Fields"}},heading:{name:"Heading",control:"text",table:{category:"Wordpress Fields"}},paragraph:{name:"Paragraph",control:"text",table:{category:"Wordpress Fields"}},buttons:{name:"Buttons",control:"object",table:{category:"Wordpress Fields"}},videoLoop:{name:"Video Loop",control:"object",table:{category:"Wordpress Fields"}},image:{name:"Image",control:"object",table:{category:"Wordpress Fields"}},video:{name:"Video",control:"object",table:{category:"Wordpress Fields"}},fromPage:{table:{disable:!0}},size:{table:{disable:!0}}}},e={name:"Overlay Hero",args:{subheading:"Welcome to",heading:"Colby College",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",buttons:[{button:{url:"#",title:"Learn More",target:""}}],videoLoop:{video:"ExampleVideo.mp4"},image:{src:"https://placehold.co/1280x720",srcset:"https://placehold.co/1280x720",alt:"Campus view",sizes:{Hero:"https://placehold.co/1280x720"}},video:null,fromPage:!0},play:async({canvas:t})=>{await o(t.getByText("Welcome to")).toBeInTheDocument(),await o(t.getByText("Colby College")).toBeInTheDocument(),await o(t.getByAltText("Campus view")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const x=["WithImage"];export{e as WithImage,x as __namedExportsOrder,y as default};
