import d from"./HomeHero-Ba6t_rqx.js";import"./iframe-D3iFGQZk.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-BdALv82u.js";import"./TextGroup-C7hXvWol.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-ojbwMsyk.js";import"./Button-DMj_75Cf.js";import"./Picture-hGQrZg1i.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,y={title:"Core Components/Home Hero",component:d},a={name:"Primary",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",caption:"waterville maine",image:{src:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",Square_mobile:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg"}},paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},play:async({canvas:e})=>{await t(e.getByText("Lorem ipsum")).toBeInTheDocument(),await t(e.getByText("waterville maine")).toBeInTheDocument()}},n={name:"With Video",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",caption:"waterville maine",image:{src:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",Square_mobile:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg"}},video:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled.mp4",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},play:async({canvas:e})=>{await t(e.getByText("Lorem ipsum")).toBeInTheDocument(),await t(e.getByText("waterville maine")).toBeInTheDocument()}},o={name:"Without Caption",args:{subheading:"Welcome to",heading:"Colby College",caption:"",image:{src:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"campus view",sizes:{Square:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",Square_mobile:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg"}},paragraph:"A top liberal arts college in Waterville, Maine."},play:async({canvas:e})=>{await t(e.getByText("Colby College")).toBeInTheDocument()}},i={name:"In Component Library",args:{subheading:"Discover",heading:"Campus Life",caption:"waterville maine",inComponentLibrary:!0,image:{src:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"campus life",sizes:{Square:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",Square_mobile:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg"}},paragraph:"Experience everything Colby has to offer."},play:async({canvas:e})=>{await t(e.getByText("Campus Life")).toBeInTheDocument(),await t(e.getByText("waterville maine")).toBeInTheDocument()}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Primary",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    caption: "waterville maine",
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
      srcset: "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Square: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
        Square_mobile: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg"
      }
    },
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Lorem ipsum")).toBeInTheDocument();
    await expect(canvas.getByText("waterville maine")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "With Video",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    caption: "waterville maine",
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
      srcset: "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Square: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
        Square_mobile: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg"
      }
    },
    video: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled.mp4",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Lorem ipsum")).toBeInTheDocument();
    await expect(canvas.getByText("waterville maine")).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Without Caption",
  args: {
    subheading: "Welcome to",
    heading: "Colby College",
    caption: "",
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
      srcset: "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "campus view",
      sizes: {
        Square: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
        Square_mobile: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg"
      }
    },
    paragraph: "A top liberal arts college in Waterville, Maine."
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Colby College")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "In Component Library",
  args: {
    subheading: "Discover",
    heading: "Campus Life",
    caption: "waterville maine",
    inComponentLibrary: true,
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
      srcset: "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "campus life",
      sizes: {
        Square: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",
        Square_mobile: "https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg"
      }
    },
    paragraph: "Experience everything Colby has to offer."
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Campus Life")).toBeInTheDocument();
    await expect(canvas.getByText("waterville maine")).toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};const x=["Primary","Video","WithoutCaption","InComponentLibrary"];export{i as InComponentLibrary,a as Primary,n as Video,o as WithoutCaption,x as __namedExportsOrder,y as default};
