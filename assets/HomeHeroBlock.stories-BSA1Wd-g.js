import a from"./HomeHero-II84q8P8.js";import"./iframe-lCgBM3L3.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-ABrT5yy0.js";import"./TextGroup-BMK6ZOe6.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-CtXH7SIf.js";import"./Button-wOxxjB09.js";import"./Picture-C4P_JM5O.js";const{expect:o}=__STORYBOOK_MODULE_TEST__,w={title:"Blocks/Home Hero",component:a,tags:["!autodocs"],argTypes:{heading:{name:"Heading",control:"text",table:{category:"Wordpress Fields"}},caption:{name:"Caption",control:"text",table:{category:"Wordpress Fields"}},video:{name:"Video",control:"object",table:{category:"Wordpress Fields"}},image:{name:"Image",control:"object",table:{category:"Wordpress Fields"}},buttons:{name:"Buttons",control:"object",table:{category:"Wordpress Fields"}},subheading:{table:{disable:!0}},paragraph:{table:{disable:!0}},poster:{table:{disable:!0}}}},e={name:"Home Hero",args:{heading:"Lorem ipsum",caption:"waterville maine",image:{src:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",Square_mobile:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg"}}},play:async({canvas:t})=>{await o(t.getByText("Lorem ipsum")).toBeInTheDocument(),await o(t.getByText("waterville maine")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Home Hero",
  args: {
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
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Lorem ipsum")).toBeInTheDocument();
    await expect(canvas.getByText("waterville maine")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const u=["Primary"];export{e as Primary,u as __namedExportsOrder,w as default};
