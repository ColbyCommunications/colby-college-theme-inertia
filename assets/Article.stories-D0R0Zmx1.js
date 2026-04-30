import{_ as e}from"./Article-Dp_OjAOM.js";import"./iframe-C6aVhbCK.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-jmqXIUoI.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-CPdn2L11.js";import"./Button-Cwfv8ZIL.js";import"./Picture-z4cn1Zm5.js";const{expect:u}=__STORYBOOK_MODULE_TEST__,d={title:"Core Components/Article",component:e},t={name:"Primary",args:{heading:"Lorem Ipsum",subheading:"adipisci amet",paragraph:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",image:{src:"https://placeholdit.com/600x400/dddddd/999999",alt:"this is an alt tag"},buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},play:async({canvas:a,canvasElement:i})=>{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const g=["Primary"];export{t as Primary,g as __namedExportsOrder,d as default};
