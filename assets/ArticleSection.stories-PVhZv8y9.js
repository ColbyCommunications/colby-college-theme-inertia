import s from"./ArticleSection-B4me1HMX.js";import"./iframe-BfrXP-2i.js";import"./preload-helper-PPVm8Dsz.js";import"./Carousel-CWuVFt_s.js";import"./index-C0Zqfgkc.js";import"./glide.esm-YJcNIzYu.js";import"./Context-DZphwgnX.js";import"./TextGroup-Das5GGq6.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-DUj3KDNe.js";import"./Button-ASD-Nliy.js";import"./ArrowControls-CsIlbMmP.js";import"./ArrowButton-2xniTltf.js";import"./Picture-CNWWr_dV.js";import"./ArticleGrid-DzZb1FOU.js";import"./Article-B5YP67wR.js";const{expect:o}=__STORYBOOK_MODULE_TEST__,r=[{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag"},heading:"Future of Artificial Intelligence",subheading:"Technology",paragraph:"AI is reshaping industries at an unprecedented pace.",url:"#",sizes:{desktop:"https://placehold.co/600x400",mobile:"https://placehold.co/300x200"},buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag"},heading:"Sustainable Energy Solutions",subheading:"Environment",paragraph:"Solar and wind energy are becoming more accessible than ever.",url:"#",sizes:{desktop:"https://placehold.co/600x400",mobile:"https://placehold.co/300x200"},buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag"},heading:"Modern Architecture Trends",subheading:"Design",paragraph:"Exploring the intersection of function and aesthetics in 2024.",url:"#",sizes:{desktop:"https://placehold.co/600x400",mobile:"https://placehold.co/300x200"},buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]}],B={title:"Core Components/Article Section",component:s},t={name:"Carousel",args:{renderApi:!0,api:"Latest News",perView:1},play:async({canvasElement:e})=>{await o(e.querySelector(".article-section")).not.toBeNull()}},a={name:"Manual",args:{renderApi:!1,heading:"Article Section Title",subheading:"Article Section subheading",paragraph:"Discover recent updates from Colby College.",buttons:[{button:{url:"#",title:"View All"}}],gridProps:{items:r}},play:async({canvas:e})=>{await o(e.getByText("Article Section Title")).toBeInTheDocument(),await o(e.getByText("Article Section subheading")).toBeInTheDocument()}},n={name:"Manual With Arrow Controls",args:{renderApi:!1,heading:"Featured Stories",showCarouselControls:!0,gridProps:{items:r}},play:async({canvas:e})=>{await o(e.getByText("Featured Stories")).toBeInTheDocument()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Carousel",
  args: {
    renderApi: true,
    api: "Latest News",
    perView: 1
  },
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector(".article-section")).not.toBeNull();
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Manual",
  args: {
    renderApi: false,
    heading: "Article Section Title",
    subheading: "Article Section subheading",
    paragraph: "Discover recent updates from Colby College.",
    buttons: [{
      button: {
        url: "#",
        title: "View All"
      }
    }],
    gridProps: {
      items: mockItems
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Article Section Title")).toBeInTheDocument();
    await expect(canvas.getByText("Article Section subheading")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Manual With Arrow Controls",
  args: {
    renderApi: false,
    heading: "Featured Stories",
    showCarouselControls: true,
    gridProps: {
      items: mockItems
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Featured Stories")).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};const f=["Primary","Manual","ManualWithControls"];export{a as Manual,n as ManualWithControls,t as Primary,f as __namedExportsOrder,B as default};
