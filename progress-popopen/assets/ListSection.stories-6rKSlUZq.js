import i from"./ListSection-ByiwKc_V.js";import"./iframe-DHFquFcq.js";import"./preload-helper-B-_ADY_8.js";const{expect:r}=__STORYBOOK_MODULE_TEST__,c={title:"Core Components/List Section",component:i,tags:["autodocs"]},n={name:"Default",args:{lists:[{heading:"Sciences",items:[{link:{title:"Biology",url:"#"}},{link:{title:"Chemistry",url:"#"}},{link:{title:"Computer Science",url:"#"}},{link:{title:"Physics",url:"#"}}]},{heading:"Humanities",items:[{link:{title:"English",url:"#"}},{link:{title:"History",url:"#"}},{link:{title:"Philosophy",url:"#"}},{link:{title:"Art",url:"#"}}]},{heading:"Social Sciences",items:[{link:{title:"Economics",url:"#"}},{link:{title:"Government",url:"#"}},{link:{title:"Psychology",url:"#"}},{link:{title:"Sociology",url:"#"}}]}]},play:async({canvas:t})=>{}},e={name:"With URL Fallback",args:{lists:[{heading:"Resources",items:[{link:{title:"Library",url:"#"}},{url:"#",link:{title:"IT Help Desk"}},{link:{title:"Campus Map",url:"#"}}]}]},play:async({canvas:t})=>{}},o=["Default","WithUrlFallback"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    lists: [{
      heading: "Sciences",
      items: [{
        link: {
          title: "Biology",
          url: "#"
        }
      }, {
        link: {
          title: "Chemistry",
          url: "#"
        }
      }, {
        link: {
          title: "Computer Science",
          url: "#"
        }
      }, {
        link: {
          title: "Physics",
          url: "#"
        }
      }]
    }, {
      heading: "Humanities",
      items: [{
        link: {
          title: "English",
          url: "#"
        }
      }, {
        link: {
          title: "History",
          url: "#"
        }
      }, {
        link: {
          title: "Philosophy",
          url: "#"
        }
      }, {
        link: {
          title: "Art",
          url: "#"
        }
      }]
    }, {
      heading: "Social Sciences",
      items: [{
        link: {
          title: "Economics",
          url: "#"
        }
      }, {
        link: {
          title: "Government",
          url: "#"
        }
      }, {
        link: {
          title: "Psychology",
          url: "#"
        }
      }, {
        link: {
          title: "Sociology",
          url: "#"
        }
      }]
    }]
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Sciences")).toBeInTheDocument();
    await expect(canvas.getByText("Humanities")).toBeInTheDocument();
    await expect(canvas.getByText("Social Sciences")).toBeInTheDocument();
    await expect(canvas.getByText("Biology")).toBeInTheDocument();
    await expect(canvas.getByText("Economics")).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "With URL Fallback",
  args: {
    lists: [{
      heading: "Resources",
      items: [{
        link: {
          title: "Library",
          url: "#"
        }
      }, {
        url: "#",
        link: {
          title: "IT Help Desk"
        }
      }, {
        link: {
          title: "Campus Map",
          url: "#"
        }
      }]
    }]
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Resources")).toBeInTheDocument();
    await expect(canvas.getByText("Library")).toBeInTheDocument();
    await expect(canvas.getByText("IT Help Desk")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};export{n as Default,e as WithUrlFallback,o as __namedExportsOrder,c as default};
