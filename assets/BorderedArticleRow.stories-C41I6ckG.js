import{_ as t}from"./BorderedArticleRow-kgXXpVMy.js";import"./iframe-UIbP18SM.js";import"./preload-helper-PPVm8Dsz.js";import"./Article-B32aJEg4.js";import"./TextGroup-Dp3a0PpY.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-Bi6fM2Qp.js";import"./Button-uB1sN1l-.js";import"./Picture-DwnzuAws.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,u={title:"Core Components/Bordered Article Row",component:t},r=[{image:{src:"https://placeholdit.com/600x400/dddddd/999999",alt:"this is an alt tag"},heading:"Future of Artificial Intelligence",subheading:"Technology",paragraph:"AI is reshaping industries at an unprecedented pace.",url:"#"},{image:{src:"https://placeholdit.com/600x400/dddddd/999999",alt:"this is an alt tag"},heading:"Sustainable Energy Solutions",subheading:"Environment",paragraph:"Solar and wind energy are becoming more accessible than ever.",url:"#"},{image:{src:"https://placeholdit.com/600x400/dddddd/999999",alt:"this is an alt tag"},heading:"Modern Architecture Trends",subheading:"Design",paragraph:"Exploring the intersection of function and aesthetics in 2024.",url:"#"}],e={name:"Default",args:{items:r},play:async({canvas:i,canvasElement:a})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    items: mockItems
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const first = canvasElement.querySelectorAll(".bordered-article-row  .article-grid__item:first-child")[0];
    const firstHeading = first.querySelectorAll(".text-group__heading")[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe("Future of Artificial Intelligence");
    await expect(firstHeading).toBeVisible();
    const second = canvasElement.querySelectorAll(".bordered-article-row .article-grid__item:nth-child(2)")[0];
    const secondHeading = second.querySelectorAll(".text-group__heading")[0];
    await expect(secondHeading.textContent.slice(0, -1)).toBe("Sustainable Energy Solutions");
    await expect(secondHeading).toBeVisible();
    const third = canvasElement.querySelectorAll(".bordered-article-row .article-grid__item:nth-child(3)")[0];
    const thirdHeading = third.querySelectorAll(".text-group__heading")[0];
    await expect(thirdHeading.textContent.slice(0, -1)).toBe("Modern Architecture Trends");
    await expect(thirdHeading).toBeVisible();
  }
}`,...e.parameters?.docs?.source}}};const _=["Primary"];export{e as Primary,_ as __namedExportsOrder,u as default};
