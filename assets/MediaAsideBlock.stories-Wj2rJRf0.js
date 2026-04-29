import{_ as a}from"./MediaAside-DoJKE2IR.js";import"./iframe-YkMtoKZp.js";import"./preload-helper-PPVm8Dsz.js";import"./glide.esm-YJcNIzYu.js";import"./Picture-CK7QN2qL.js";import"./ButtonGroup-rvuowk51.js";import"./Button-DU7Jn5r0.js";import"./Icon-c0bLvYw7.js";const{expect:o}=__STORYBOOK_MODULE_TEST__,p={title:"Blocks/Media Aside",component:a,tags:["!autodocs"],argTypes:{carousel:{name:"Carousel",control:"boolean",table:{category:"Wordpress Fields"}},image:{name:"Image",control:"object",table:{category:"Wordpress Fields"}},heading:{name:"Heading",control:"text",table:{category:"Wordpress Fields"}},paragraph:{name:"Paragraph",control:"text",table:{category:"Wordpress Fields"}},buttons:{name:"Buttons",control:"object",table:{category:"Wordpress Fields"}},items:{table:{disable:!0}}}},e={name:"Media Aside",args:{carousel:!1,image:{srcset:"https://placehold.co/900x430",src:"https://placehold.co/600x600",alt:"Placeholder image",caption:"Caption lorem ipsum dolor sit amet, consectetur adipiscing elit."},heading:"Lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit.",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus felis, interdum vel lorem vitae, imperdiet commodo nisi.",buttons:[{url:"#",title:"Read Story"}]},play:async({canvas:t})=>{await o(t.getByAltText("Placeholder image")).toBeInTheDocument(),await o(t.getByText("Read Story")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
