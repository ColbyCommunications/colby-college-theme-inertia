import{_ as a}from"./RelatedSection-BDFbFy7o.js";import"./iframe-Bmd2UPGG.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-BWJjFeeZ.js";import"./TextGroup-DijtnC4I.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-mkQ2kZah.js";import"./Button-BRb3G0IJ.js";import"./Picture-DRoO9GLT.js";const{expect:n}=__STORYBOOK_MODULE_TEST__,d={title:"Blocks/Related Section",component:a,tags:["!autodocs"],argTypes:{subheading:{name:"Subheading",control:"text",table:{category:"Wordpress Fields"}},heading:{name:"Heading",control:"text",table:{category:"Wordpress Fields"}},paragraph:{name:"Paragraph",control:"text",table:{category:"Wordpress Fields"}},buttons:{name:"Buttons",control:"object",table:{category:"Wordpress Fields"}},items:{name:"Items",control:"object",table:{category:"Wordpress Fields"}}}},e={name:"Related Section",args:{subheading:"Explore",heading:"Related Programs",paragraph:"Discover more about our academic offerings and campus life.",buttons:[{url:"#",title:"View All Programs"}],items:[{link:{url:"#",title:"Environmental Studies"},image:{src:"https://placehold.co/600x400",srcset:"",alt:"Environmental Studies",sizes:{Rectangle:"600w"}}},{link:{url:"#",title:"Biology Department"},image:{src:"https://placehold.co/600x400",srcset:"",alt:"Biology Department",sizes:{Rectangle:"600w"}}}]},play:async({canvas:t})=>{await n(t.getByText("Related Programs")).toBeInTheDocument(),await n(t.getByText("View All Programs")).toBeInTheDocument(),await n(t.getByText("Environmental Studies")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Related Section",
  args: {
    subheading: "Explore",
    heading: "Related Programs",
    paragraph: "Discover more about our academic offerings and campus life.",
    buttons: [{
      url: "#",
      title: "View All Programs"
    }],
    items: [{
      link: {
        url: "#",
        title: "Environmental Studies"
      },
      image: {
        src: "https://placehold.co/600x400",
        srcset: "",
        alt: "Environmental Studies",
        sizes: {
          Rectangle: "600w"
        }
      }
    }, {
      link: {
        url: "#",
        title: "Biology Department"
      },
      image: {
        src: "https://placehold.co/600x400",
        srcset: "",
        alt: "Biology Department",
        sizes: {
          Rectangle: "600w"
        }
      }
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Related Programs")).toBeInTheDocument();
    await expect(canvas.getByText("View All Programs")).toBeInTheDocument();
    await expect(canvas.getByText("Environmental Studies")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,d as default};
