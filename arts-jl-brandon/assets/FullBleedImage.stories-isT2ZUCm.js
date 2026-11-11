import t from"./FullBleedImage-BLPb3imT.js";import"./iframe-BQ2bmCqi.js";import"./preload-helper-C8FH-Zdq.js";import"./Picture-BY795Dxs.js";import"./ButtonGroup-CsiCWtCg.js";import"./Button-CzYD34l_.js";const{expect:n}=__STORYBOOK_MODULE_TEST__,p={title:"Core Components/Full Bleed Image",component:t,tags:["autodocs"]},e={name:"Default",args:{heading:"Areas of Distinction",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",buttons:[{url:"#",title:"Areas of Distinction"}],image:{srcset:"https://placehold.co/1280x700",src:"https://placehold.co/480x480",alt:"Placeholder image",sizes:{Hero:"https://placehold.co/1280x700",Square:"https://placehold.co/480x480"}}},play:async({canvas:a})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    // "Areas of Distinction" appears in both the heading and button, so use getAllByText
    const elements = canvas.getAllByText("Areas of Distinction");
    await expect(elements.length).toBeGreaterThanOrEqual(1);
    await expect(canvas.getByAltText("Placeholder image")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const m=["Default"];export{e as Default,m as __namedExportsOrder,p as default};
