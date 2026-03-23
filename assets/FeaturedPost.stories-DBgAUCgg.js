import o from"./FeaturedPost-aAFipiK6.js";import"./iframe-qn9ebuhk.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-zu6BnEJv.js";import"./TextGroup-Jc2jy6rj.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-CoN_pgMt.js";import"./Button-zNl_wLY1.js";import"./AnimatedBorder-DQ5d9stq.js";import"./Picture-BukFCmKj.js";const{expect:e}=__STORYBOOK_MODULE_TEST__,x={title:"Core Components/Featured Post",component:o,tags:["autodocs"]},n={name:"Default",args:{heading:"Events",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",caption:"Allen & Benner",buttons:[{url:"#",title:"All Events"}],post:{date:"June 24, 2022",heading:"Lorem ipsum dolor sit amet, consectet.",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue pulvinar lectus.",buttons:[{url:"#",title:"All Events"}],image:{srcset:"https://placehold.co/760x430",src:"https://placehold.co/410x290",alt:"Featured post image",sizes:{Rectangle:"https://placehold.co/760x430"}}}},play:async({canvas:t})=>{await e(t.getByText("Events")).toBeInTheDocument(),await e(t.getByText("June 24, 2022")).toBeInTheDocument(),await e(t.getByAltText("Featured post image")).toBeInTheDocument()}},a={name:"Without Post Buttons",args:{heading:"News",paragraph:"Stay up to date with the latest from Colby.",buttons:[{url:"#",title:"All News"}],post:{date:"March 15, 2024",heading:"Faculty Research Spotlight",paragraph:"Exploring new frontiers in environmental science.",buttons:[],image:{srcset:"https://placehold.co/760x430",src:"https://placehold.co/410x290",alt:"Research spotlight image",sizes:{Rectangle:"https://placehold.co/760x430"}}}},play:async({canvas:t})=>{await e(t.getByText("News")).toBeInTheDocument(),await e(t.getByText("March 15, 2024")).toBeInTheDocument(),await e(t.getByText("All News")).toBeInTheDocument()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("Events")).toBeInTheDocument();
    await expect(canvas.getByText("June 24, 2022")).toBeInTheDocument();
    await expect(canvas.getByAltText("Featured post image")).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("News")).toBeInTheDocument();
    await expect(canvas.getByText("March 15, 2024")).toBeInTheDocument();
    await expect(canvas.getByText("All News")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};const B=["Default","WithoutPostButtons"];export{n as Default,a as WithoutPostButtons,B as __namedExportsOrder,x as default};
