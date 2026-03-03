import{_ as n}from"./OverlayWideImage-K-fhTLDA.js";import"./iframe-DosZwoRT.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-JpgBQY_m.js";import"./TextGroup-BAhApt3T.js";import"./ButtonGroup-p2_Yj24O.js";import"./Button-DWxZbfQt.js";import"./Picture-DuHiZfZ5.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,d={title:"Core Components/Overlay Wide Image",component:n,tags:["autodocs"]},e={name:"Default",args:{subheading:"Green Colby",heading:"Sustainability and Stewardship",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",buttons:[{url:"#",title:"Go Green at Colby"}],image:{srcset:"https://placehold.co/880x400",src:"https://placehold.co/400x400",alt:"Placeholder image",sizes:{Landscape:"https://placehold.co/880x400"}}},play:async({canvas:t})=>{await a(t.getByText("Green Colby")).toBeInTheDocument(),await a(t.getByText("Sustainability and Stewardship")).toBeInTheDocument(),await a(t.getByText("Go Green at Colby")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("Green Colby")).toBeInTheDocument();
    await expect(canvas.getByText("Sustainability and Stewardship")).toBeInTheDocument();
    await expect(canvas.getByText("Go Green at Colby")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,d as default};
