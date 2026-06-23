import e from"./FactsFigures-604Kf9hu.js";import"./iframe-yXO7Iy6c.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-Cfxj6Cat.js";import"./TextGroup-C_6jqRCw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-tPqV3LYw.js";import"./Button-Cn9NGSOg.js";import"./AnimatedBorder-6fFrAqnL.js";import"./index-D4-8ALNT.js";import"./Picture-uhNxIA0m.js";const{expect:g}=__STORYBOOK_MODULE_TEST__,x={title:"Core Components/Facts and Figures",component:e},t={name:"Primary",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",facts:[{figure:"100%",paragraph:"consectetur adipiscing elit"},{figure:"100%",paragraph:"consectetur adipiscing elit"}],image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/600x400",Square_mobile:"https://placehold.co/400x300"}},paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},play:async({canvas:a})=>{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Primary",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    facts: [{
      figure: "100%",
      paragraph: "consectetur adipiscing elit"
    }, {
      figure: "100%",
      paragraph: "consectetur adipiscing elit"
    }],
    image: {
      src: "https://placeholdit.com/400x600/dddddd/999999",
      srcset: "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Square: "https://placehold.co/600x400",
        Square_mobile: "https://placehold.co/400x300"
      }
    },
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Lorem ipsum")).toBeInTheDocument();
    await expect(canvas.getAllByText("100%").length).toBeGreaterThan(0);
  }
}`,...t.parameters?.docs?.source}}};const _=["Primary"];export{t as Primary,_ as __namedExportsOrder,x as default};
