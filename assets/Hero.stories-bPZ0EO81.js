import c from"./Hero-DV0HaoMM.js";import"./iframe-ChoNu1wD.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-CVZiAaKv.js";import"./TextGroup-bCJO3rz8.js";import"./ButtonGroup-DmkXXZnL.js";import"./Button-gzcwp9hK.js";import"./Picture-uLfvtuIJ.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,T={title:"Core Components/Hero",component:c},o={name:"Primary",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/600x400",Square_mobile:"https://placehold.co/400x300"}},paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},play:async({canvas:e})=>{const a=e.getAllByText("Lorem ipsum");await t(a.length).toBeGreaterThanOrEqual(2),await t(e.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument()}},n={name:"Portrait Orientation",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",imageOrientation:"portrait",image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/400x600",Square_mobile:"https://placehold.co/300x400"}},paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},play:async({canvas:e})=>{const a=e.getAllByText("Lorem ipsum");await t(a.length).toBeGreaterThanOrEqual(2),await t(e.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument()}},s={name:"Center Align",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",imageOrientation:"portrait",image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/400x600",Square_mobile:"https://placehold.co/300x400"}},align:"center",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},play:async({canvas:e})=>{const a=e.getAllByText("Lorem ipsum");await t(a.length).toBeGreaterThanOrEqual(2)}},r={name:"No Image",args:{subheading:"Welcome",heading:"Text Only Hero",paragraph:"Content only, no side image."},play:async({canvas:e})=>{await t(e.getByText("Text Only Hero")).toBeInTheDocument()}},i={name:"Center With Secondary Images",args:{subheading:"Gallery",heading:"Four Column Layout",align:"center",columns:4,images:[{src:"https://placehold.co/300x450",srcset:"https://placehold.co/300x450",alt:"Image 1",caption:"Image one caption"},{src:"https://placehold.co/300x450",srcset:"https://placehold.co/300x450",alt:"Image 2"},{src:"https://placehold.co/300x450",srcset:"https://placehold.co/300x450",alt:"Image 3"},{src:"https://placehold.co/300x450",srcset:"https://placehold.co/300x450",alt:"Image 4"}]},play:async({canvas:e})=>{await t(e.getByText("Four Column Layout")).toBeInTheDocument(),await t(e.getByAltText("Image 1")).toBeInTheDocument(),await t(e.getByText("Image one caption")).toBeInTheDocument()}},d={name:"Image With Caption",args:{subheading:"Featured",heading:"Captioned Image",image:{src:"https://placehold.co/400x600",srcset:"https://placehold.co/400x600",alt:"Captioned photo",caption:"Photo by Colby College",sizes:{Square:"https://placehold.co/400x600",Square_mobile:"https://placehold.co/300x400"}}},play:async({canvas:e})=>{await t(e.getByText("Photo by Colby College")).toBeInTheDocument()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Primary",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
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
    // Both subheading (h1) and heading (h2) are "Lorem ipsum", so use getAllByText
    const loremElements = canvas.getAllByText("Lorem ipsum");
    await expect(loremElements.length).toBeGreaterThanOrEqual(2);
    await expect(canvas.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Portrait Orientation",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    imageOrientation: "portrait",
    image: {
      src: "https://placeholdit.com/400x600/dddddd/999999",
      srcset: "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Square: "https://placehold.co/400x600",
        Square_mobile: "https://placehold.co/300x400"
      }
    },
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  play: async ({
    canvas
  }) => {
    // Both subheading (h1) and heading (h2) are "Lorem ipsum", so use getAllByText
    const loremElements = canvas.getAllByText("Lorem ipsum");
    await expect(loremElements.length).toBeGreaterThanOrEqual(2);
    await expect(canvas.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Center Align",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    imageOrientation: "portrait",
    image: {
      src: "https://placeholdit.com/400x600/dddddd/999999",
      srcset: "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Square: "https://placehold.co/400x600",
        Square_mobile: "https://placehold.co/300x400"
      }
    },
    align: "center",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  play: async ({
    canvas
  }) => {
    const loremElements = canvas.getAllByText("Lorem ipsum");
    await expect(loremElements.length).toBeGreaterThanOrEqual(2);
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "No Image",
  args: {
    subheading: "Welcome",
    heading: "Text Only Hero",
    paragraph: "Content only, no side image."
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Text Only Hero")).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Center With Secondary Images",
  args: {
    subheading: "Gallery",
    heading: "Four Column Layout",
    align: "center",
    columns: 4,
    images: [{
      src: "https://placehold.co/300x450",
      srcset: "https://placehold.co/300x450",
      alt: "Image 1",
      caption: "Image one caption"
    }, {
      src: "https://placehold.co/300x450",
      srcset: "https://placehold.co/300x450",
      alt: "Image 2"
    }, {
      src: "https://placehold.co/300x450",
      srcset: "https://placehold.co/300x450",
      alt: "Image 3"
    }, {
      src: "https://placehold.co/300x450",
      srcset: "https://placehold.co/300x450",
      alt: "Image 4"
    }]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Four Column Layout")).toBeInTheDocument();
    await expect(canvas.getByAltText("Image 1")).toBeInTheDocument();
    await expect(canvas.getByText("Image one caption")).toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Image With Caption",
  args: {
    subheading: "Featured",
    heading: "Captioned Image",
    image: {
      src: "https://placehold.co/400x600",
      srcset: "https://placehold.co/400x600",
      alt: "Captioned photo",
      caption: "Photo by Colby College",
      sizes: {
        Square: "https://placehold.co/400x600",
        Square_mobile: "https://placehold.co/300x400"
      }
    }
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Photo by Colby College")).toBeInTheDocument();
  }
}`,...d.parameters?.docs?.source}}};const B=["Primary","Portrait","Center","NoImage","CenterWithSecondaryImages","ImageWithCaption"];export{s as Center,i as CenterWithSecondaryImages,d as ImageWithCaption,r as NoImage,n as Portrait,o as Primary,B as __namedExportsOrder,T as default};
