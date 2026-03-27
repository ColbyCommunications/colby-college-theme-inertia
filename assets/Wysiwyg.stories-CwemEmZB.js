import{_ as a}from"./Wysiwyg-BYXNflKM.js";import"./iframe-D3iFGQZk.js";import"./preload-helper-PPVm8Dsz.js";const{expect:i}=__STORYBOOK_MODULE_TEST__,r={title:"Core Components/Wysiwyg",component:a,tags:["autodocs"]},e={name:"Default",args:{content:'<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2><p>Lorem ipsum dolor sit amet, <a href="/">consectetur</a> adipiscing elit. Sed leo odio, ultrices quis auctor eu, fermentum at dolor. Vivamus cursus lorem ut ultrices iaculis. Phasellus et ante nec urna facilisis fringilla.</p><h3>Spring 2023</h3><p>Fusce tincidunt, magna sit amet varius porttitor, orci metus lacinia mi, vel vulputate nisl diam lacinia augue. In lacinia nisl a nisl condimentum laoreet.</p>'},play:async({canvas:t})=>{await i(t.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")).toBeInTheDocument(),await i(t.getByText("Spring 2023")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    content: '<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2><p>Lorem ipsum dolor sit amet, <a href="/">consectetur</a> adipiscing elit. Sed leo odio, ultrices quis auctor eu, fermentum at dolor. Vivamus cursus lorem ut ultrices iaculis. Phasellus et ante nec urna facilisis fringilla.</p><h3>Spring 2023</h3><p>Fusce tincidunt, magna sit amet varius porttitor, orci metus lacinia mi, vel vulputate nisl diam lacinia augue. In lacinia nisl a nisl condimentum laoreet.</p>'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")).toBeInTheDocument();
    await expect(canvas.getByText("Spring 2023")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const c=["Default"];export{e as Default,c as __namedExportsOrder,r as default};
