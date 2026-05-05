import{_ as t}from"./RelatedSection-Ck7UJ6XK.js";import"./iframe-CHQ7Z_bq.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-LbuBVS-d.js";import"./TextGroup-D5t4lGek.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-CsuHJvv7.js";import"./Button-Emnb7RcT.js";import"./Picture-BXLOigy3.js";const{expect:u}=__STORYBOOK_MODULE_TEST__,g={title:"Core Components/Related Section",component:t,tags:["autodocs"]},e={name:"Default",args:{subheading:"Explore",heading:"Related Programs",paragraph:"Discover more about our academic offerings and campus life.",buttons:[{url:"#",title:"View All Programs"}],items:[{link:{url:"#",title:"Environmental Studies"},image:{src:"https://placehold.co/600x400",srcset:"",alt:"Environmental Studies",sizes:{Rectangle:"600w"}}},{link:{url:"#",title:"Biology Department"},image:{src:"https://placehold.co/600x400",srcset:"",alt:"Biology Department",sizes:{Rectangle:"600w"}}}]},play:async({canvas:a})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default",
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Related Programs")).toBeInTheDocument();
    await expect(canvas.getByText("View All Programs")).toBeInTheDocument();
    await expect(canvas.getByText("Environmental Studies")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,g as default};
