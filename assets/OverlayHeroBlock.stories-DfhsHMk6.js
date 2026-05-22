import a from"./OverlayHero-DHks74g-.js";import"./iframe-DB-IlEva.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-DBEJmZLR.js";import"./TextGroup-DdPHF-Hr.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-D8Nnlgfk.js";import"./Button-Cgl1rc3T.js";import"./Picture-DvBJtMT_.js";import"./Video-CYv7rAnM.js";import"./_commonjsHelpers-DsqdWQfm.js";import"./Icon-lZwiDlMZ.js";import"./HlsBackground-BMKy5dWv.js";const{expect:o}=__STORYBOOK_MODULE_TEST__,y={title:"Blocks/Overlay Hero",component:a,tags:["!autodocs"],argTypes:{subheading:{name:"Subheading",control:"text",table:{category:"Wordpress Fields"}},heading:{name:"Heading",control:"text",table:{category:"Wordpress Fields"}},paragraph:{name:"Paragraph",control:"text",table:{category:"Wordpress Fields"}},buttons:{name:"Buttons",control:"object",table:{category:"Wordpress Fields"}},videoLoop:{name:"Video Loop",control:"object",table:{category:"Wordpress Fields"}},image:{name:"Image",control:"object",table:{category:"Wordpress Fields"}},video:{name:"Video",control:"object",table:{category:"Wordpress Fields"}},fromPage:{table:{disable:!0}},size:{table:{disable:!0}}}},e={name:"Overlay Hero",args:{subheading:"Welcome to",heading:"Colby College",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",buttons:[{button:{url:"#",title:"Learn More",target:""}}],videoLoop:{video:"ExampleVideo.mp4"},image:{src:"https://placehold.co/1280x720",srcset:"https://placehold.co/1280x720",alt:"Campus view",sizes:{Hero:"https://placehold.co/1280x720"}},video:null,fromPage:!0},play:async({canvas:t})=>{await o(t.getByText("Welcome to")).toBeInTheDocument(),await o(t.getByText("Colby College")).toBeInTheDocument(),await o(t.getByAltText("Campus view")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
