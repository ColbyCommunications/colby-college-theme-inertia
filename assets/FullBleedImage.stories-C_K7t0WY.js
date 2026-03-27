import o from"./FullBleedImage-kuxWsIo0.js";import"./iframe-D3iFGQZk.js";import"./preload-helper-PPVm8Dsz.js";import"./Picture-hGQrZg1i.js";import"./ButtonGroup-ojbwMsyk.js";import"./Button-DMj_75Cf.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,m={title:"Core Components/Full Bleed Image",component:o,tags:["autodocs"]},e={name:"Default",args:{heading:"Areas of Distinction",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",buttons:[{url:"#",title:"Areas of Distinction"}],image:{srcset:"https://placehold.co/1280x700",src:"https://placehold.co/480x480",alt:"Placeholder image",sizes:{Hero:"https://placehold.co/1280x700",Square:"https://placehold.co/480x480"}}},play:async({canvas:t})=>{const n=t.getAllByText("Areas of Distinction");await a(n.length).toBeGreaterThanOrEqual(1),await a(t.getByAltText("Placeholder image")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default",
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
}`,...e.parameters?.docs?.source}}};const h=["Default"];export{e as Default,h as __namedExportsOrder,m as default};
