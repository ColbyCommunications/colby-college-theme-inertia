import l from"./ListSection-FfjrpIm7.js";import"./iframe-CXCUApFV.js";import"./preload-helper-PPVm8Dsz.js";const{expect:e}=__STORYBOOK_MODULE_TEST__,c={title:"Core Components/List Section",component:l,tags:["autodocs"]},t={name:"Default",args:{lists:[{heading:"Sciences",items:[{link:{title:"Biology",url:"#"}},{link:{title:"Chemistry",url:"#"}},{link:{title:"Computer Science",url:"#"}},{link:{title:"Physics",url:"#"}}]},{heading:"Humanities",items:[{link:{title:"English",url:"#"}},{link:{title:"History",url:"#"}},{link:{title:"Philosophy",url:"#"}},{link:{title:"Art",url:"#"}}]},{heading:"Social Sciences",items:[{link:{title:"Economics",url:"#"}},{link:{title:"Government",url:"#"}},{link:{title:"Psychology",url:"#"}},{link:{title:"Sociology",url:"#"}}]}]},play:async({canvas:n})=>{await e(n.getByText("Sciences")).toBeInTheDocument(),await e(n.getByText("Humanities")).toBeInTheDocument(),await e(n.getByText("Social Sciences")).toBeInTheDocument(),await e(n.getByText("Biology")).toBeInTheDocument(),await e(n.getByText("Economics")).toBeInTheDocument()}},i={name:"With URL Fallback",args:{lists:[{heading:"Resources",items:[{link:{title:"Library",url:"#"}},{url:"#",link:{title:"IT Help Desk"}},{link:{title:"Campus Map",url:"#"}}]}]},play:async({canvas:n})=>{await e(n.getByText("Resources")).toBeInTheDocument(),await e(n.getByText("Library")).toBeInTheDocument(),await e(n.getByText("IT Help Desk")).toBeInTheDocument()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("Sciences")).toBeInTheDocument();
    await expect(canvas.getByText("Humanities")).toBeInTheDocument();
    await expect(canvas.getByText("Social Sciences")).toBeInTheDocument();
    await expect(canvas.getByText("Biology")).toBeInTheDocument();
    await expect(canvas.getByText("Economics")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("Resources")).toBeInTheDocument();
    await expect(canvas.getByText("Library")).toBeInTheDocument();
    await expect(canvas.getByText("IT Help Desk")).toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};const r=["Default","WithUrlFallback"];export{t as Default,i as WithUrlFallback,r as __namedExportsOrder,c as default};
