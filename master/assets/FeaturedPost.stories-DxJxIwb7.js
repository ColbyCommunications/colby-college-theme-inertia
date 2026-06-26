import s from"./FeaturedPost-HsmjekBE.js";import"./iframe-DtdOvT36.js";import"./preload-helper-CNn__nYE.js";import"./Context-CP3uYYVV.js";import"./TextGroup-CahuLM-Z.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-OuEucSgK.js";import"./Button-DdJx5MrJ.js";import"./AnimatedBorder-CTGTuSlE.js";import"./index-D4-8ALNT.js";import"./Picture-q8fLLjK7.js";const{expect:x}=__STORYBOOK_MODULE_TEST__,v={title:"Core Components/Featured Post",component:s,tags:["autodocs"]},t={name:"Default",args:{heading:"Events",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",caption:"Allen & Benner",buttons:[{url:"#",title:"All Events"}],post:{date:"June 24, 2022",heading:"Lorem ipsum dolor sit amet, consectet.",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",buttons:[{url:"#",title:"All Events"}],image:{srcset:"https://placehold.co/760x430",src:"https://placehold.co/410x290",alt:"Featured post image",sizes:{Rectangle:"https://placehold.co/760x430"}}}},play:async({canvas:a})=>{}},e={name:"Without Post Buttons",args:{heading:"News",paragraph:"Stay up to date with the latest from Colby.",buttons:[{url:"#",title:"All News"}],post:{date:"March 15, 2024",heading:"Faculty Research Spotlight",paragraph:"Exploring new frontiers in environmental science.",buttons:[],image:{srcset:"https://placehold.co/760x430",src:"https://placehold.co/410x290",alt:"Research spotlight image",sizes:{Rectangle:"https://placehold.co/760x430"}}}},play:async({canvas:a})=>{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const y=["Default","WithoutPostButtons"];export{t as Default,e as WithoutPostButtons,y as __namedExportsOrder,v as default};
