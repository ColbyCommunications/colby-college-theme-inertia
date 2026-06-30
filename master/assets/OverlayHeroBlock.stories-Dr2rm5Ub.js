import a from"./OverlayHero-ZXqyafSg.js";import"./iframe-Bq6OY017.js";import"./preload-helper-CNn__nYE.js";import"./Context-ClGLxUzp.js";import"./TextGroup-IBwim9oO.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./ButtonGroup-Dhdhbddy.js";import"./Button-CRkPS1UD.js";import"./Picture-Ddh5VcEv.js";import"./Video-CrRElwhz.js";import"./_commonjsHelpers-CE1G-McA.js";import"./Icon-DS54wYkp.js";import"./HlsBackground-ClUi-qDW.js";const{expect:o}=__STORYBOOK_MODULE_TEST__,v={title:"Blocks/Overlay Hero",component:a,tags:["!autodocs"],argTypes:{subheading:{name:"Subheading",control:"text",table:{category:"Wordpress Fields"}},heading:{name:"Heading",control:"text",table:{category:"Wordpress Fields"}},paragraph:{name:"Paragraph",control:"text",table:{category:"Wordpress Fields"}},buttons:{name:"Buttons",control:"object",table:{category:"Wordpress Fields"}},videoLoop:{name:"Video Loop",control:"object",table:{category:"Wordpress Fields"}},image:{name:"Image",control:"object",table:{category:"Wordpress Fields"}},video:{name:"Video",control:"object",table:{category:"Wordpress Fields"}},fromPage:{table:{disable:!0}},size:{table:{disable:!0}}}},e={name:"Overlay Hero",args:{subheading:"Welcome to",heading:"Colby College",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",buttons:[{button:{url:"#",title:"Learn More",target:""}}],videoLoop:{video:"ExampleVideo.mp4"},image:{src:"https://placehold.co/1280x720",srcset:"https://placehold.co/1280x720",alt:"Campus view",sizes:{Hero:"https://placehold.co/1280x720"}},video:null,fromPage:!0},play:async({canvas:t})=>{await o(t.getByText("Welcome to")).toBeInTheDocument(),await o(t.getByText("Colby College")).toBeInTheDocument(),await o(t.getByAltText("Campus view")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const B=["WithImage"];export{e as WithImage,B as __namedExportsOrder,v as default};
