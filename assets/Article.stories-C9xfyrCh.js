import{_ as o}from"./Article-D1DehH2s.js";import"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-T77HtXsG.js";import"./ButtonGroup-DeVPz35K.js";import"./Button-u50yI3p6.js";import"./Picture-CxKtrm5G.js";const{expect:e}=__STORYBOOK_MODULE_TEST__,p={title:"Core Components/Article",component:o},a={name:"Primary",args:{heading:"Lorem Ipsum",subheading:"adipisci amet",paragraph:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag"},buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},play:async({canvas:t})=>{await e(t.getByText("Lorem Ipsum")).toBeInTheDocument(),await e(t.getByText("adipisci amet")).toBeInTheDocument(),await e(t.getByText("button1")).toBeInTheDocument(),await e(t.getByAltText("this is an alt tag")).toBeInTheDocument()}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Primary",
  args: {
    heading: "Lorem Ipsum",
    subheading: "adipisci amet",
    paragraph: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    image: {
      src: "https://placeholdit.com/600x400/dddddd/999999",
      srcset: "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag"
    },
    buttons: [{
      button: {
        size: "small",
        title: "button1",
        url: "https://www.colby.edu"
      }
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Lorem Ipsum")).toBeInTheDocument();
    await expect(canvas.getByText("adipisci amet")).toBeInTheDocument();
    await expect(canvas.getByText("button1")).toBeInTheDocument();
    await expect(canvas.getByAltText("this is an alt tag")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};const u=["Primary"];export{a as Primary,u as __namedExportsOrder,p as default};
