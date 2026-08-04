import a from"./MediaAside-Cgcu8CJk.js";import"./iframe-BOqS61cP.js";import"./preload-helper-DboIHg2a.js";import"./glide.esm-YJcNIzYu.js";import"./Picture-BY9CXU4d.js";import"./ButtonGroup-1I4DEbGW.js";import"./Button-DpP91_mx.js";import"./Icon-BOV5dhdZ.js";const{expect:o}=__STORYBOOK_MODULE_TEST__,p={title:"Blocks/Media Aside",component:a,tags:["!autodocs"],argTypes:{carousel:{name:"Carousel",control:"boolean",table:{category:"Wordpress Fields"}},image:{name:"Image",control:"object",table:{category:"Wordpress Fields"}},heading:{name:"Heading",control:"text",table:{category:"Wordpress Fields"}},paragraph:{name:"Paragraph",control:"text",table:{category:"Wordpress Fields"}},buttons:{name:"Buttons",control:"object",table:{category:"Wordpress Fields"}},items:{table:{disable:!0}}}},e={name:"Media Aside",args:{carousel:!1,image:{srcset:"https://placehold.co/900x430",src:"https://placehold.co/600x600",alt:"Placeholder image",caption:"Caption lorem ipsum dolor sit amet, consectetur adipiscing elit."},heading:"Lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit.",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus felis, interdum vel lorem vitae, imperdiet commodo nisi.",buttons:[{url:"#",title:"Read Story"}]},play:async({canvas:t})=>{await o(t.getByAltText("Placeholder image")).toBeInTheDocument(),await o(t.getByText("Read Story")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Media Aside",
  args: {
    carousel: false,
    image: {
      srcset: "https://placehold.co/900x430",
      src: "https://placehold.co/600x600",
      alt: "Placeholder image",
      caption: "Caption lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    heading: "Lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit.",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus felis, interdum vel lorem vitae, imperdiet commodo nisi.",
    buttons: [{
      url: "#",
      title: "Read Story"
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByAltText("Placeholder image")).toBeInTheDocument();
    await expect(canvas.getByText("Read Story")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const u=["Static"];export{e as Static,u as __namedExportsOrder,p as default};
