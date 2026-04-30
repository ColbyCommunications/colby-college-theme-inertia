import n from"./FullBleedImage-CDclzJre.js";import"./iframe-Bmd2UPGG.js";import"./preload-helper-PPVm8Dsz.js";import"./Picture-DRoO9GLT.js";import"./ButtonGroup-mkQ2kZah.js";import"./Button-BRb3G0IJ.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,m={title:"Blocks/Full Bleed Image",component:n,tags:["!autodocs"],argTypes:{heading:{name:"Heading",control:"text",table:{category:"Wordpress Fields"}},paragraph:{name:"Paragraph",control:"text",table:{category:"Wordpress Fields"}},buttons:{name:"Buttons",control:"object",table:{category:"Wordpress Fields"}},image:{name:"Image",control:"object",table:{category:"Wordpress Fields"}}}},e={name:"Full Bleed Image",args:{heading:"Areas of Distinction",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",buttons:[{url:"#",title:"Areas of Distinction"}],image:{srcset:"https://placehold.co/1280x700",src:"https://placehold.co/480x480",alt:"Placeholder image",sizes:{Hero:"https://placehold.co/1280x700",Square:"https://placehold.co/480x480"}}},play:async({canvas:t})=>{const o=t.getAllByText("Areas of Distinction");await a(o.length).toBeGreaterThanOrEqual(1),await a(t.getByAltText("Placeholder image")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Full Bleed Image",
  args: {
    heading: "Areas of Distinction",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",
    buttons: [{
      url: "#",
      title: "Areas of Distinction"
    }],
    image: {
      srcset: "https://placehold.co/1280x700",
      src: "https://placehold.co/480x480",
      alt: "Placeholder image",
      sizes: {
        Hero: "https://placehold.co/1280x700",
        Square: "https://placehold.co/480x480"
      }
    }
  },
  play: async ({
    canvas
  }) => {
    // "Areas of Distinction" appears in both the heading and button, so use getAllByText
    const elements = canvas.getAllByText("Areas of Distinction");
    await expect(elements.length).toBeGreaterThanOrEqual(1);
    await expect(canvas.getByAltText("Placeholder image")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,m as default};
