import r from"./FactsFigures-D3lT2Kg4.js";import"./iframe-BPAAY7Vj.js";import"./preload-helper-CNn__nYE.js";import"./Context-CF8Ioyw_.js";import"./TextGroup-Br3WWBew.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./ButtonGroup-kqIpYgj5.js";import"./Button-DXWB6i37.js";import"./AnimatedBorder-BpE55D3p.js";import"./Picture-CQwrG58Z.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,b={title:"Blocks/Facts and Figures",component:r,tags:["!autodocs"],argTypes:{subheading:{name:"Subheading",control:"text",table:{category:"Wordpress Fields"}},heading:{name:"Heading",control:"text",table:{category:"Wordpress Fields"}},buttons:{table:{disable:!0}},facts:{table:{disable:!0}},image:{table:{disable:!0}},paragraph:{name:"Paragraph",control:"text",table:{category:"Wordpress Fields"}}}},e={name:"Facts and Figures",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",buttons:[{button:{title:"Learn More",url:"#"}}],facts:[{figure:"100%",paragraph:"consectetur adipiscing elit"},{figure:"71%",paragraph:"consectetur adipiscing elit"},{figure:"10:1",paragraph:"consectetur adipiscing elit"},{figure:"500",paragraph:"consectetur adipiscing elit"}],image:{src:"https://www.colby.edu/wp-content/uploads/2024/12/20231017_gordoncenteraerial_0030-800x800.jpg",alt:"this is an alt tag",sizes:{Square:"https://www.colby.edu/wp-content/uploads/2024/12/20231017_gordoncenteraerial_0030-800x800.jpg",Square_mobile:"https://www.colby.edu/wp-content/uploads/2024/12/20231017_gordoncenteraerial_0030-800x800.jpg"}}},play:async({canvas:t})=>{await a(t.getByText("Lorem ipsum")).toBeInTheDocument(),await a(t.getAllByText("100%").length).toBeGreaterThan(0)}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Facts and Figures",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttons: [{
      button: {
        title: "Learn More",
        url: "#"
      }
    }],
    facts: [{
      figure: "100%",
      paragraph: "consectetur adipiscing elit"
    }, {
      figure: "71%",
      paragraph: "consectetur adipiscing elit"
    }, {
      figure: "10:1",
      paragraph: "consectetur adipiscing elit"
    }, {
      figure: "500",
      paragraph: "consectetur adipiscing elit"
    }],
    image: {
      src: "https://www.colby.edu/wp-content/uploads/2024/12/20231017_gordoncenteraerial_0030-800x800.jpg",
      alt: "this is an alt tag",
      sizes: {
        Square: "https://www.colby.edu/wp-content/uploads/2024/12/20231017_gordoncenteraerial_0030-800x800.jpg",
        Square_mobile: "https://www.colby.edu/wp-content/uploads/2024/12/20231017_gordoncenteraerial_0030-800x800.jpg"
      }
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Lorem ipsum")).toBeInTheDocument();
    await expect(canvas.getAllByText("100%").length).toBeGreaterThan(0);
  }
}`,...e.parameters?.docs?.source}}};const w=["Primary"];export{e as Primary,w as __namedExportsOrder,b as default};
