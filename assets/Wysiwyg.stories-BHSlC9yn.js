import t from"./Wysiwyg-D4PPQO_t.js";import"./iframe-JoPPn0qi.js";import"./preload-helper-PPVm8Dsz.js";const{expect:r}=__STORYBOOK_MODULE_TEST__,o={title:"Core Components/Wysiwyg",component:t,tags:["autodocs"]},e={name:"Default",args:{content:'<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2><p>Lorem ipsum dolor sit amet, <a href="/">consectetur</a> adipiscing elit. Sed leo odio, ultrices quis auctor eu, fermentum at dolor. Vivamus cursus lorem ut ultrices iaculis. Phasellus et ante nec urna facilisis fringilla.</p><h3>Spring 2023</h3><p>Fusce tincidunt, magna sit amet varius porttitor, orci metus lacinia mi, vel vulputate nisl diam lacinia augue. In lacinia nisl a nisl condimentum laoreet.</p>'},play:async({canvas:i})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    content: '<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2><p>Lorem ipsum dolor sit amet, <a href="/">consectetur</a> adipiscing elit. Sed leo odio, ultrices quis auctor eu, fermentum at dolor. Vivamus cursus lorem ut ultrices iaculis. Phasellus et ante nec urna facilisis fringilla.</p><h3>Spring 2023</h3><p>Fusce tincidunt, magna sit amet varius porttitor, orci metus lacinia mi, vel vulputate nisl diam lacinia augue. In lacinia nisl a nisl condimentum laoreet.</p>'
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")).toBeInTheDocument();
    await expect(canvas.getByText("Spring 2023")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const c=["Default"];export{e as Default,c as __namedExportsOrder,o as default};
