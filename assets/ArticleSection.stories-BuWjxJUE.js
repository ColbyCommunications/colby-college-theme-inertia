import s from"./ArticleSection-D3YBelLI.js";import"./iframe-u12Z2ejW.js";import"./preload-helper-PPVm8Dsz.js";import"./Carousel-4asAqeay.js";import"./index-C0Zqfgkc.js";import"./glide.esm-YJcNIzYu.js";import"./Context-C2u5KeLN.js";import"./TextGroup-fPNNtcqH.js";import"./ButtonGroup-CnEZ3a-f.js";import"./Button-Dd4eRc0N.js";import"./ArrowControls-B5WbIN1B.js";import"./ArrowButton-CaByfvl_.js";import"./Picture-CY3Hc20w.js";import"./ArticleGrid-CJR-N8kd.js";import"./Article-fQDRGpTz.js";const{expect:o}=__STORYBOOK_MODULE_TEST__,r=[{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag"},heading:"Future of Artificial Intelligence",subheading:"Technology",paragraph:"AI is reshaping industries at an unprecedented pace.",url:"#",sizes:{desktop:"https://placehold.co/600x400",mobile:"https://placehold.co/300x200"},buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag"},heading:"Sustainable Energy Solutions",subheading:"Environment",paragraph:"Solar and wind energy are becoming more accessible than ever.",url:"#",sizes:{desktop:"https://placehold.co/600x400",mobile:"https://placehold.co/300x200"},buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag"},heading:"Modern Architecture Trends",subheading:"Design",paragraph:"Exploring the intersection of function and aesthetics in 2024.",url:"#",sizes:{desktop:"https://placehold.co/600x400",mobile:"https://placehold.co/300x200"},buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]}],T={title:"Core Components/Article Section",component:s},t={name:"Carousel",args:{renderApi:!0,api:"Latest News",perView:1},play:async({canvasElement:e})=>{await o(e.querySelector(".article-section")).not.toBeNull()}},a={name:"Manual",args:{renderApi:!1,heading:"Article Section Title",subheading:"Article Section subheading",paragraph:"Discover recent updates from Colby College.",buttons:[{button:{url:"#",title:"View All"}}],gridProps:{items:r}},play:async({canvas:e})=>{await o(e.getByText("Article Section Title")).toBeInTheDocument(),await o(e.getByText("Article Section subheading")).toBeInTheDocument()}},n={name:"Manual With Arrow Controls",args:{renderApi:!1,heading:"Featured Stories",showCarouselControls:!0,gridProps:{items:r}},play:async({canvas:e})=>{await o(e.getByText("Featured Stories")).toBeInTheDocument()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const C=["Primary","Manual","ManualWithControls"];export{a as Manual,n as ManualWithControls,t as Primary,C as __namedExportsOrder,T as default};
