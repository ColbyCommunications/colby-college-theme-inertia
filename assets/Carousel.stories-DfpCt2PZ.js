import{_ as u}from"./Carousel-48i8j71U.js";import"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C0Zqfgkc.js";import"./glide.esm-YJcNIzYu.js";import"./Context-Dp7yX81d.js";import"./TextGroup-T77HtXsG.js";import"./ButtonGroup-DeVPz35K.js";import"./Button-u50yI3p6.js";import"./ArrowControls-CjN_dRVd.js";import"./ArrowButton-C6TXGDEx.js";import"./Picture-CxKtrm5G.js";const{expect:e,waitFor:a}=__STORYBOOK_MODULE_TEST__,A={title:"Core Components/Carousel",component:u},n=[{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Rectangle:"https://placehold.co/600x400",Rectangle_mobile:"https://placehold.co/300x200"}},heading:"Future of Artificial Intelligence",subheading:"Technology",paragraph:"AI is reshaping industries at an unprecedented pace.",url:"#",buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Rectangle:"https://placehold.co/600x400",Rectangle_mobile:"https://placehold.co/300x200"}},heading:"Sustainable Energy Solutions",subheading:"Environment",paragraph:"Solar and wind energy are becoming more accessible than ever.",url:"#",buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Rectangle:"https://placehold.co/600x400",Rectangle_mobile:"https://placehold.co/300x200"}},heading:"Modern Architecture Trends",subheading:"Design",paragraph:"Exploring the intersection of function and aesthetics in 2024.",url:"#",buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]}],s={name:"Primary",args:{render_api:!1,items:n,buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},play:async({canvas:t})=>{await a(()=>{e(t.getByText("Future of Artificial Intelligence")).toBeInTheDocument()})}},o={name:"Autoplay False",args:{render_api:!1,items:n,autoplay:!1,buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},play:async({canvas:t})=>{await a(()=>{e(t.getByText("Future of Artificial Intelligence")).toBeInTheDocument()})}},l={name:"With Heading and Paragraph",args:{render_api:!1,items:n,heading:"Latest Stories",subheading:"News",paragraph:"Stay up to date with the latest from Colby.",buttons:[{button:{size:"small",title:"All News",url:"https://www.colby.edu"}}]},play:async({canvas:t})=>{await a(()=>{e(t.getByText("Latest Stories")).toBeInTheDocument()})}},r={name:"Custom Interval",args:{render_api:!1,items:n,autoplay:!0,interval:3e3,buttons:[{button:{size:"small",title:"All News",url:"https://www.colby.edu"}}]},play:async({canvas:t})=>{await a(()=>{e(t.getByText("Future of Artificial Intelligence")).toBeInTheDocument()})}},i={name:"Single Slide (No Autoplay)",args:{render_api:!1,items:[n[0]],autoplay:!0,buttons:[{button:{size:"small",title:"Read More",url:"https://www.colby.edu"}}]},play:async({canvas:t})=>{await a(()=>{e(t.getByText("Future of Artificial Intelligence")).toBeInTheDocument()})}},c={name:"Light Type",args:{render_api:!1,items:n,type:"light",buttons:[{button:{size:"small",title:"All News",url:"https://www.colby.edu"}}]},play:async({canvas:t})=>{await a(()=>{e(t.getByText("Future of Artificial Intelligence")).toBeInTheDocument()})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Primary",
  args: {
    render_api: false,
    items: mockItems,
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
    await waitFor(() => {
      expect(canvas.getByText("Future of Artificial Intelligence")).toBeInTheDocument();
    });
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Autoplay False",
  args: {
    render_api: false,
    items: mockItems,
    autoplay: false,
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
    await waitFor(() => {
      expect(canvas.getByText("Future of Artificial Intelligence")).toBeInTheDocument();
    });
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "With Heading and Paragraph",
  args: {
    render_api: false,
    items: mockItems,
    heading: "Latest Stories",
    subheading: "News",
    paragraph: "Stay up to date with the latest from Colby.",
    buttons: [{
      button: {
        size: "small",
        title: "All News",
        url: "https://www.colby.edu"
      }
    }]
  },
  play: async ({
    canvas
  }) => {
    await waitFor(() => {
      expect(canvas.getByText("Latest Stories")).toBeInTheDocument();
    });
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Custom Interval",
  args: {
    render_api: false,
    items: mockItems,
    autoplay: true,
    interval: 3000,
    buttons: [{
      button: {
        size: "small",
        title: "All News",
        url: "https://www.colby.edu"
      }
    }]
  },
  play: async ({
    canvas
  }) => {
    await waitFor(() => {
      expect(canvas.getByText("Future of Artificial Intelligence")).toBeInTheDocument();
    });
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Single Slide (No Autoplay)",
  args: {
    render_api: false,
    items: [mockItems[0]],
    autoplay: true,
    buttons: [{
      button: {
        size: "small",
        title: "Read More",
        url: "https://www.colby.edu"
      }
    }]
  },
  play: async ({
    canvas
  }) => {
    await waitFor(() => {
      expect(canvas.getByText("Future of Artificial Intelligence")).toBeInTheDocument();
    });
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Light Type",
  args: {
    render_api: false,
    items: mockItems,
    type: "light",
    buttons: [{
      button: {
        size: "small",
        title: "All News",
        url: "https://www.colby.edu"
      }
    }]
  },
  play: async ({
    canvas
  }) => {
    await waitFor(() => {
      expect(canvas.getByText("Future of Artificial Intelligence")).toBeInTheDocument();
    });
  }
}`,...c.parameters?.docs?.source}}};const _=["Primary","AutoplayFalse","WithHeadingAndParagraph","CustomInterval","SingleSlide","LightType"];export{o as AutoplayFalse,r as CustomInterval,c as LightType,s as Primary,i as SingleSlide,l as WithHeadingAndParagraph,_ as __namedExportsOrder,A as default};
