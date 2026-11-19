import t from"./FullBleedImage-DaGpzLDv.js";import"./iframe-DPsyH1j1.js";import"./preload-helper-DK9VPF6O.js";import"./Picture-C6BHc3Ht.js";import"./ButtonGroup-BgMFGHhx.js";import"./Button-BIkkSZrz.js";const{expect:n}=__STORYBOOK_MODULE_TEST__,p={title:"Core Components/Full Bleed Image",component:t,tags:["autodocs"]},e={name:"Default",args:{heading:"Areas of Distinction",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",buttons:[{url:"#",title:"Areas of Distinction"}],image:{srcset:"https://placehold.co/1280x700",src:"https://placehold.co/480x480",alt:"Placeholder image",sizes:{Hero:"https://placehold.co/1280x700",Square:"https://placehold.co/480x480"}}},play:async({canvas:a})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
