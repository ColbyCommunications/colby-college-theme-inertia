import d from"./ArticleSection-Ci-jVYWp.js";import"./iframe-D3iFGQZk.js";import"./preload-helper-PPVm8Dsz.js";import"./Carousel-CbBSUT6D.js";import"./index-42ANG6Sg.js";import"./glide.esm-YJcNIzYu.js";import"./Context-BdALv82u.js";import"./TextGroup-C7hXvWol.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-ojbwMsyk.js";import"./Button-DMj_75Cf.js";import"./ArrowControls-DvCaZoRO.js";import"./ArrowButton-SfEsBXF1.js";import"./Picture-hGQrZg1i.js";import"./ArticleGrid-BeH2QxFn.js";import"./Article-BYOIQ0nN.js";const{expect:e}=__STORYBOOK_MODULE_TEST__,c=[{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag"},heading:"Future of Artificial Intelligence",subheading:"Technology",paragraph:"AI is reshaping industries at an unprecedented pace.",url:"#",sizes:{desktop:"https://placehold.co/600x400",mobile:"https://placehold.co/300x200"},buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag"},heading:"Sustainable Energy Solutions",subheading:"Environment",paragraph:"Solar and wind energy are becoming more accessible than ever.",url:"#",sizes:{desktop:"https://placehold.co/600x400",mobile:"https://placehold.co/300x200"},buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag"},heading:"Modern Architecture Trends",subheading:"Design",paragraph:"Exploring the intersection of function and aesthetics in 2024.",url:"#",sizes:{desktop:"https://placehold.co/600x400",mobile:"https://placehold.co/300x200"},buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]}],E={title:"Core Components/Article Section",component:d},n={name:"Carousel",args:{renderApi:!0,api:"Latest News",perView:1},play:async({canvasElement:r})=>{await e(r.querySelector(".article-section")).not.toBeNull()}},a={name:"Manual",args:{renderApi:!1,heading:"Article Section Title",subheading:"Article Section subheading",paragraph:"Discover recent updates from Colby College.",buttons:[{button:{url:"#",title:"View All"}}],gridProps:{items:c}},play:async({canvas:r,canvasElement:o})=>{const s=o.querySelectorAll(".article-section__intro")[0],t=s.querySelectorAll(".text-group__heading")[0],l=s.querySelectorAll(".text-group__subheading")[0];await e(t.textContent.slice(0,-1)).toBe("Article Section Title"),await e(t).toBeVisible(),await e(l.textContent.slice(0,-1)).toBe("Article Section subheading"),await e(l).toBeVisible()}},i={name:"Manual With Arrow Controls",args:{renderApi:!1,heading:"Featured Stories",showCarouselControls:!0,gridProps:{items:c}},play:async({canvas:r,canvasElement:o})=>{const t=o.querySelectorAll(".article-section__intro")[0].querySelectorAll(".text-group__heading")[0];await e(t.textContent.slice(0,-1)).toBe("Featured Stories"),await e(t).toBeVisible()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    canvas,
    canvasElement
  }) => {
    const first = canvasElement.querySelectorAll('.article-section__intro')[0];
    const firstHeading = first.querySelectorAll('.text-group__heading')[0];
    const firstSubHeading = first.querySelectorAll('.text-group__subheading')[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe('Article Section Title');
    await expect(firstHeading).toBeVisible();
    await expect(firstSubHeading.textContent.slice(0, -1)).toBe('Article Section subheading');
    await expect(firstSubHeading).toBeVisible();
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
    canvas,
    canvasElement
  }) => {
    const first = canvasElement.querySelectorAll('.article-section__intro')[0];
    const firstHeading = first.querySelectorAll('.text-group__heading')[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe('Featured Stories');
    await expect(firstHeading).toBeVisible();
  }
}`,...i.parameters?.docs?.source}}};const H=["Primary","Manual","ManualWithControls"];export{a as Manual,i as ManualWithControls,n as Primary,H as __namedExportsOrder,E as default};
