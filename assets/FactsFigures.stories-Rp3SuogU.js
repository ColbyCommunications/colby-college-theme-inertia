import n from"./FactsFigures-CTUs6VeK.js";import"./iframe-DosZwoRT.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-JpgBQY_m.js";import"./TextGroup-BAhApt3T.js";import"./ButtonGroup-p2_Yj24O.js";import"./Button-DWxZbfQt.js";import"./AnimatedBorder-kDqQcpps.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./Picture-DuHiZfZ5.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,y={title:"Core Components/Facts and Figures",component:n},t={name:"Primary",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",facts:[{figure:"100%",paragraph:"consectetur adipiscing elit"},{figure:"100%",paragraph:"consectetur adipiscing elit"}],image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/600x400",Square_mobile:"https://placehold.co/400x300"}},paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},play:async({canvas:e})=>{await a(e.getByText("Lorem ipsum")).toBeInTheDocument(),await a(e.getAllByText("100%").length).toBeGreaterThan(0)}},r={name:"Without Image",args:{subheading:"By the Numbers",heading:"Colby at a Glance",facts:[{figure:"2,000",paragraph:"students enrolled"},{figure:"58",paragraph:"majors and minors"},{figure:"10:1",paragraph:"student-to-faculty ratio"}],paragraph:"Colby College is one of America's premier liberal arts colleges."},play:async({canvas:e})=>{await a(e.getByText("Colby at a Glance")).toBeInTheDocument(),await a(e.getByText("2,000")).toBeInTheDocument(),await a(e.getByText("10:1")).toBeInTheDocument()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    await expect(canvas.getByText("Lorem ipsum")).toBeInTheDocument();
    await expect(canvas.getAllByText("100%").length).toBeGreaterThan(0);
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Without Image",
  args: {
    subheading: "By the Numbers",
    heading: "Colby at a Glance",
    facts: [{
      figure: "2,000",
      paragraph: "students enrolled"
    }, {
      figure: "58",
      paragraph: "majors and minors"
    }, {
      figure: "10:1",
      paragraph: "student-to-faculty ratio"
    }],
    paragraph: "Colby College is one of America's premier liberal arts colleges."
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Colby at a Glance")).toBeInTheDocument();
    await expect(canvas.getByText("2,000")).toBeInTheDocument();
    await expect(canvas.getByText("10:1")).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};const x=["Primary","WithoutImage"];export{t as Primary,r as WithoutImage,x as __namedExportsOrder,y as default};
