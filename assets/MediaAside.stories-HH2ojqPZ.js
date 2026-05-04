import{_ as c}from"./MediaAside-XyTG8Nln.js";import"./iframe-o8pGYXWK.js";import"./preload-helper-PPVm8Dsz.js";import"./glide.esm-YJcNIzYu.js";import"./Picture-B-dnp4nI.js";import"./ButtonGroup-BbLweHth.js";import"./Button-DTHgAldo.js";import"./Icon-DpxLDECl.js";const{expect:v}=__STORYBOOK_MODULE_TEST__,S={title:"Core Components/Media Aside",component:c,tags:["autodocs"]},e={name:"Static",args:{image:{srcset:"https://placehold.co/900x430",src:"https://placehold.co/600x600",alt:"Placeholder image",caption:"Caption lorem ipsum dolor sit amet, consectetur adipiscing elit."},heading:"Lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit.",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus felis, interdum vel lorem vitae, imperdiet commodo nisi.",buttons:[{url:"#",title:"Read Story"}]},play:async({canvas:t})=>{}},a={name:"Carousel",args:{carousel:!0,items:[{image:{srcset:"https://placehold.co/900x430",src:"https://placehold.co/600x600",alt:"Slide 1",caption:"Caption for slide one."},heading:"Slide one heading",paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",buttons:[{url:"#",title:"Read Story"}]},{image:{srcset:"https://placehold.co/900x430",src:"https://placehold.co/600x600",alt:"Slide 2",caption:"Caption for slide two."},heading:"Slide two heading",paragraph:"Donec lectus felis, interdum vel lorem vitae, imperdiet commodo nisi.",buttons:[{url:"#",title:"Read Story"}]},{image:{srcset:"https://placehold.co/900x430",src:"https://placehold.co/600x600",alt:"Slide 3",caption:"Caption for slide three."},heading:"Slide three heading",paragraph:"Donec nec blandit enim.",buttons:[{url:"#",title:"Read Story"}]}]},play:async({canvas:t})=>{}},o={name:"Static No Caption",args:{image:{srcset:"https://placehold.co/900x430",src:"https://placehold.co/600x600",alt:"No caption image"},heading:"Static without caption",paragraph:"This variant has no image caption."},play:async({canvas:t})=>{}},s={name:"Carousel No Buttons",args:{carousel:!0,items:[{image:{srcset:"https://placehold.co/900x430",src:"https://placehold.co/600x600",alt:"Slide 1"},heading:"First slide without buttons",paragraph:"No buttons on this slide."},{image:{srcset:"https://placehold.co/900x430",src:"https://placehold.co/600x600",alt:"Slide 2"},heading:"Second slide without buttons",paragraph:"Also no buttons."}]},play:async({canvas:t})=>{}},i={name:"Carousel with Navigation",args:{carousel:!0,items:[{image:{srcset:"https://placehold.co/900x430",src:"https://placehold.co/600x600",alt:"Nav Slide 1",caption:"Caption for slide one."},heading:"Navigation slide one",paragraph:"First slide content.",buttons:[{url:"#",title:"Learn More"}]},{image:{srcset:"https://placehold.co/900x430",src:"https://placehold.co/600x600",alt:"Nav Slide 2"},heading:"Navigation slide two",paragraph:"Second slide content."}]},play:async({canvas:t,userEvent:n})=>{}},r={name:"Static No Paragraph",args:{image:{srcset:"https://placehold.co/900x430",src:"https://placehold.co/600x600",alt:"Static no paragraph"},heading:"Just a heading",buttons:[{url:"#",title:"Read More"}]},play:async({canvas:t})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Static",
  args: {
    image: {
      srcset: "https://placehold.co/900x430",
      src: "https://placehold.co/600x600",
      alt: "Placeholder image",
      caption: "Caption lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    heading: "Lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit.",
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus felis, interdum vel lorem vitae, imperdiet commodo nisi.",
    buttons: [{
      url: "#",
      title: "Read Story"
    }]
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByAltText("Placeholder image")).toBeInTheDocument();
    await expect(canvas.getByText("Read Story")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Carousel",
  args: {
    carousel: true,
    items: [{
      image: {
        srcset: "https://placehold.co/900x430",
        src: "https://placehold.co/600x600",
        alt: "Slide 1",
        caption: "Caption for slide one."
      },
      heading: "Slide one heading",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttons: [{
        url: "#",
        title: "Read Story"
      }]
    }, {
      image: {
        srcset: "https://placehold.co/900x430",
        src: "https://placehold.co/600x600",
        alt: "Slide 2",
        caption: "Caption for slide two."
      },
      heading: "Slide two heading",
      paragraph: "Donec lectus felis, interdum vel lorem vitae, imperdiet commodo nisi.",
      buttons: [{
        url: "#",
        title: "Read Story"
      }]
    }, {
      image: {
        srcset: "https://placehold.co/900x430",
        src: "https://placehold.co/600x600",
        alt: "Slide 3",
        caption: "Caption for slide three."
      },
      heading: "Slide three heading",
      paragraph: "Donec nec blandit enim.",
      buttons: [{
        url: "#",
        title: "Read Story"
      }]
    }]
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Slide one heading")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Static No Caption",
  args: {
    image: {
      srcset: "https://placehold.co/900x430",
      src: "https://placehold.co/600x600",
      alt: "No caption image"
    },
    heading: "Static without caption",
    paragraph: "This variant has no image caption."
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Static without caption")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Carousel No Buttons",
  args: {
    carousel: true,
    items: [{
      image: {
        srcset: "https://placehold.co/900x430",
        src: "https://placehold.co/600x600",
        alt: "Slide 1"
      },
      heading: "First slide without buttons",
      paragraph: "No buttons on this slide."
    }, {
      image: {
        srcset: "https://placehold.co/900x430",
        src: "https://placehold.co/600x600",
        alt: "Slide 2"
      },
      heading: "Second slide without buttons",
      paragraph: "Also no buttons."
    }]
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("First slide without buttons")).toBeInTheDocument();
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Carousel with Navigation",
  args: {
    carousel: true,
    items: [{
      image: {
        srcset: "https://placehold.co/900x430",
        src: "https://placehold.co/600x600",
        alt: "Nav Slide 1",
        caption: "Caption for slide one."
      },
      heading: "Navigation slide one",
      paragraph: "First slide content.",
      buttons: [{
        url: "#",
        title: "Learn More"
      }]
    }, {
      image: {
        srcset: "https://placehold.co/900x430",
        src: "https://placehold.co/600x600",
        alt: "Nav Slide 2"
      },
      heading: "Navigation slide two",
      paragraph: "Second slide content."
    }]
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Navigation slide one")).toBeInTheDocument();
    // Click next button
    const nextBtn = canvas.getByText("Next");
    await userEvent.click(nextBtn);
    // Click previous button
    const prevBtn = canvas.getByText("Previous");
    await userEvent.click(prevBtn);
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Static No Paragraph",
  args: {
    image: {
      srcset: "https://placehold.co/900x430",
      src: "https://placehold.co/600x600",
      alt: "Static no paragraph"
    },
    heading: "Just a heading",
    buttons: [{
      url: "#",
      title: "Read More"
    }]
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Just a heading")).toBeInTheDocument();
    await expect(canvas.getByText("Read More")).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};const y=["Static","Carousel","StaticNoCaption","CarouselNoButtons","CarouselWithNavigation","StaticNoParagraph"];export{a as Carousel,s as CarouselNoButtons,i as CarouselWithNavigation,e as Static,o as StaticNoCaption,r as StaticNoParagraph,y as __namedExportsOrder,S as default};
