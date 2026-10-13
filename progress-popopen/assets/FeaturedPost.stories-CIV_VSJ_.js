import a from"./FeaturedPost-BrGt_unN.js";import"./iframe-DHFquFcq.js";import"./preload-helper-B-_ADY_8.js";import"./Context-BbEtaWPo.js";import"./TextGroup-o3sNFTrc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./ButtonGroup-bnX3L9r1.js";import"./Button-BBOumCWS.js";import"./AnimatedBorder-D1LbWt0J.js";import"./Picture-DroALuPx.js";const{expect:x}=__STORYBOOK_MODULE_TEST__,v={title:"Core Components/Featured Post",component:a,tags:["autodocs"]},t={name:"Default",args:{heading:"Events",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",caption:"Allen & Benner",buttons:[{url:"#",title:"All Events"}],post:{date:"June 24, 2022",heading:"Lorem ipsum dolor sit amet, consectet.",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",buttons:[{url:"#",title:"All Events"}],image:{srcset:"https://placehold.co/760x430",src:"https://placehold.co/410x290",alt:"Featured post image",sizes:{Rectangle:"https://placehold.co/760x430"}}}},play:async({canvas:n})=>{}},e={name:"Without Post Buttons",args:{heading:"News",paragraph:"Stay up to date with the latest from Colby.",buttons:[{url:"#",title:"All News"}],post:{date:"March 15, 2024",heading:"Faculty Research Spotlight",paragraph:"Exploring new frontiers in environmental science.",buttons:[],image:{srcset:"https://placehold.co/760x430",src:"https://placehold.co/410x290",alt:"Research spotlight image",sizes:{Rectangle:"https://placehold.co/760x430"}}}},play:async({canvas:n})=>{}},y=["Default","WithoutPostButtons"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    heading: "Events",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",
    caption: "Allen & Benner",
    buttons: [{
      url: "#",
      title: "All Events"
    }],
    post: {
      date: "June 24, 2022",
      heading: "Lorem ipsum dolor sit amet, consectet.",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",
      buttons: [{
        url: "#",
        title: "All Events"
      }],
      image: {
        srcset: "https://placehold.co/760x430",
        src: "https://placehold.co/410x290",
        alt: "Featured post image",
        sizes: {
          Rectangle: "https://placehold.co/760x430"
        }
      }
    }
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Events")).toBeInTheDocument();
    await expect(canvas.getByText("June 24, 2022")).toBeInTheDocument();
    await expect(canvas.getByAltText("Featured post image")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Without Post Buttons",
  args: {
    heading: "News",
    paragraph: "Stay up to date with the latest from Colby.",
    buttons: [{
      url: "#",
      title: "All News"
    }],
    post: {
      date: "March 15, 2024",
      heading: "Faculty Research Spotlight",
      paragraph: "Exploring new frontiers in environmental science.",
      buttons: [],
      image: {
        srcset: "https://placehold.co/760x430",
        src: "https://placehold.co/410x290",
        alt: "Research spotlight image",
        sizes: {
          Rectangle: "https://placehold.co/760x430"
        }
      }
    }
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("News")).toBeInTheDocument();
    await expect(canvas.getByText("March 15, 2024")).toBeInTheDocument();
    await expect(canvas.getByText("All News")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};export{t as Default,e as WithoutPostButtons,y as __namedExportsOrder,v as default};
