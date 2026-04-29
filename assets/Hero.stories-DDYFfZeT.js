import r from"./Hero-8PsxB1TB.js";import"./iframe-YkMtoKZp.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-DtOziuwH.js";import"./TextGroup-Bfp8j3tn.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-rvuowk51.js";import"./Button-DU7Jn5r0.js";import"./Picture-CK7QN2qL.js";const{expect:y}=__STORYBOOK_MODULE_TEST__,b={title:"Core Components/Hero",component:r},t={name:"Primary",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/600x400",Square_mobile:"https://placehold.co/400x300"}},paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},play:async({canvas:e})=>{}},a={name:"Portrait Orientation",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",imageOrientation:"portrait",image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/400x600",Square_mobile:"https://placehold.co/300x400"}},paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},play:async({canvas:e})=>{}},d={name:"Center Align",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",imageOrientation:"portrait",image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/400x600",Square_mobile:"https://placehold.co/300x400"}},align:"center",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},play:async({canvas:e})=>{}},o={name:"No Image",args:{subheading:"Welcome",heading:"Text Only Hero",paragraph:"Content only, no side image."},play:async({canvas:e})=>{}},s={name:"Center With Secondary Images",args:{subheading:"Gallery",heading:"Four Column Layout",align:"center",columns:4,images:[{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/400x600",Square_mobile:"https://placehold.co/300x400"}},{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/400x600",Square_mobile:"https://placehold.co/300x400"}},{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/400x600",Square_mobile:"https://placehold.co/300x400"}},{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/400x600",Square_mobile:"https://placehold.co/300x400"}}]}},i={name:"Image With Caption",args:{subheading:"Featured",heading:"Captioned Image",image:{src:"https://placehold.co/400x600",srcset:"https://placehold.co/400x600",alt:"Captioned photo",caption:"Photo by Colby College",sizes:{Square:"https://placehold.co/400x600",Square_mobile:"https://placehold.co/300x400"}}},play:async({canvas:e})=>{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    // Both subheading (h1) and heading (h2) are "Lorem ipsum", so use getAllByText
    const loremElements = canvas.getAllByText("Lorem ipsum");
    await expect(loremElements.length).toBeGreaterThanOrEqual(2);
    await expect(canvas.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    // Both subheading (h1) and heading (h2) are "Lorem ipsum", so use getAllByText
    const loremElements = canvas.getAllByText("Lorem ipsum");
    await expect(loremElements.length).toBeGreaterThanOrEqual(2);
    await expect(canvas.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    const loremElements = canvas.getAllByText("Lorem ipsum");
    await expect(loremElements.length).toBeGreaterThanOrEqual(2);
  }
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "No Image",
  args: {
    subheading: "Welcome",
    heading: "Text Only Hero",
    paragraph: "Content only, no side image."
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Text Only Hero")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Center With Secondary Images",
  args: {
    subheading: "Gallery",
    heading: "Four Column Layout",
    align: "center",
    columns: 4,
    images: [{
      src: "https://placeholdit.com/400x600/dddddd/999999",
      srcset: "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Square: "https://placehold.co/400x600",
        Square_mobile: "https://placehold.co/300x400"
      }
    }, {
      src: "https://placeholdit.com/400x600/dddddd/999999",
      srcset: "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Square: "https://placehold.co/400x600",
        Square_mobile: "https://placehold.co/300x400"
      }
    }, {
      src: "https://placeholdit.com/400x600/dddddd/999999",
      srcset: "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Square: "https://placehold.co/400x600",
        Square_mobile: "https://placehold.co/300x400"
      }
    }, {
      src: "https://placeholdit.com/400x600/dddddd/999999",
      srcset: "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Square: "https://placehold.co/400x600",
        Square_mobile: "https://placehold.co/300x400"
      }
    }]
  }
  // play: async ({ canvas }) => {
  //   if (import.meta.env.MODE !== 'test' ) return;
  //   await expect(canvas.getByText("Four Column Layout")).toBeInTheDocument();
  //   await expect(canvas.getByAltText("Image 1")).toBeInTheDocument();
  //   await expect(canvas.getByText("Image one caption")).toBeInTheDocument();
  // },
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Photo by Colby College")).toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};const S=["Primary","Portrait","Center","NoImage","CenterWithSecondaryImages","ImageWithCaption"];export{d as Center,s as CenterWithSecondaryImages,i as ImageWithCaption,o as NoImage,a as Portrait,t as Primary,S as __namedExportsOrder,b as default};
