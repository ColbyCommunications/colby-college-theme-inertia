import t from"./OverlayWideImage-xiBQ98ue.js";import"./iframe-CHjb1VcR.js";import"./preload-helper-DboIHg2a.js";import"./Context-C79DdWd0.js";import"./TextGroup-BC5WldCn.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./ButtonGroup-BZQFxnHe.js";import"./Button-DEOqJXCE.js";import"./Picture-D4jK6zKE.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,g={title:"Core Components/Overlay Wide Image",component:t,tags:["autodocs"]},e={name:"Default",args:{subheading:"Green Colby",heading:"Sustainability and Stewardship",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",buttons:[{url:"#",title:"Go Green at Colby"}],image:{srcset:"https://placehold.co/880x400",src:"https://placehold.co/400x400",alt:"Placeholder image",sizes:{Landscape:"https://placehold.co/880x400"}}},play:async({canvas:a})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const y=["Default"];export{e as Default,y as __namedExportsOrder,g as default};
