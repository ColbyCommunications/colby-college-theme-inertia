import{_ as e}from"./Article-DSWiakjW.js";import"./iframe-94QLLG1o.js";import"./preload-helper-CNn__nYE.js";import"./TextGroup-9WrZdL2t.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-BHynWNm1.js";import"./Button-C7vufNzJ.js";import"./Picture-CfNtldaL.js";const{expect:d}=__STORYBOOK_MODULE_TEST__,g={title:"Core Components/Article",component:e},t={name:"Primary",args:{heading:"Lorem Ipsum",subheading:"adipisci amet",paragraph:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",image:{src:"https://placeholdit.com/600x400/dddddd/999999",alt:"this is an alt tag"},buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},play:async({canvas:a,canvasElement:i})=>{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Primary",
  args: {
    heading: "Lorem Ipsum",
    subheading: "adipisci amet",
    paragraph: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    image: {
      src: "https://placeholdit.com/600x400/dddddd/999999",
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
    if (import.meta.env.MODE !== 'test') return;
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
}`,...t.parameters?.docs?.source}}};const h=["Primary"];export{t as Primary,h as __namedExportsOrder,g as default};
