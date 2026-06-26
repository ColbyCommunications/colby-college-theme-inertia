import t from"./OverlayWideImage-BfQqe-Ih.js";import"./iframe-CzkLqcAP.js";import"./preload-helper-CNn__nYE.js";import"./Context-J3u6rANg.js";import"./TextGroup-Cy0g9lg-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-B4IAn1VG.js";import"./Button-DjYWSn68.js";import"./Picture-2NqO_ADn.js";const{expect:u}=__STORYBOOK_MODULE_TEST__,h={title:"Core Components/Overlay Wide Image",component:t,tags:["autodocs"]},e={name:"Default",args:{subheading:"Green Colby",heading:"Sustainability and Stewardship",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",buttons:[{url:"#",title:"Go Green at Colby"}],image:{srcset:"https://placehold.co/880x400",src:"https://placehold.co/400x400",alt:"Placeholder image",sizes:{Landscape:"https://placehold.co/880x400"}}},play:async({canvas:a})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    subheading: "Green Colby",
    heading: "Sustainability and Stewardship",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",
    buttons: [{
      url: "#",
      title: "Go Green at Colby"
    }],
    image: {
      srcset: "https://placehold.co/880x400",
      src: "https://placehold.co/400x400",
      alt: "Placeholder image",
      sizes: {
        Landscape: "https://placehold.co/880x400"
      }
    }
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Green Colby")).toBeInTheDocument();
    await expect(canvas.getByText("Sustainability and Stewardship")).toBeInTheDocument();
    await expect(canvas.getByText("Go Green at Colby")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,h as default};
