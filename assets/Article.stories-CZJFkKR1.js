import{_ as o}from"./Article-Ce-skJeB.js";import"./iframe-DyfYeOfn.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-BOHg6kHh.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-CqtPGH2T.js";import"./Button-0bGt-wYu.js";import"./Picture-DL_AsCYM.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,w={title:"Core Components/Article",component:o},e={name:"Primary",args:{heading:"Lorem Ipsum",subheading:"adipisci amet",paragraph:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag"},buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},play:async({canvas:a,canvasElement:i})=>{const n=i.querySelectorAll(".article")[0].querySelectorAll(".text-group__heading")[0];await t(n.textContent.slice(0,-1)).toBe("Lorem Ipsum"),await t(n).toBeVisible();const s=i.querySelectorAll(".article .text-group__subheading")[0];await t(s.textContent.slice(0,-1)).toBe("adipisci amet"),await t(s).toBeVisible(),await t(a.getByText("button1")).toBeInTheDocument(),await t(a.getByAltText("this is an alt tag")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
    canvas,
    canvasElement
  }) => {
    // await expect(canvas.getByText("Lorem Ipsum")).toBeInTheDocument();
    const first = canvasElement.querySelectorAll('.article')[0];
    const firstHeading = first.querySelectorAll('.text-group__heading')[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe('Lorem Ipsum');
    await expect(firstHeading).toBeVisible();
    const firstSubHeading = canvasElement.querySelectorAll('.article .text-group__subheading')[0];
    await expect(firstSubHeading.textContent.slice(0, -1)).toBe('adipisci amet');
    await expect(firstSubHeading).toBeVisible();
    await expect(canvas.getByText("button1")).toBeInTheDocument();
    await expect(canvas.getByAltText("this is an alt tag")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const b=["Primary"];export{e as Primary,b as __namedExportsOrder,w as default};
