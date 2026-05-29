import n from"./TestimonialCarousel-e6UvU1Pi.js";import"./iframe-Cp2yh0T9.js";import"./preload-helper-PPVm8Dsz.js";import"./glide.esm-YJcNIzYu.js";import"./Context-De46SMnl.js";import"./TextGroup-C3eCe4vK.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-DPJ62q3E.js";import"./Button-BTFkSBf6.js";import"./Picture-B0hRknc0.js";import"./ArrowControls-CWKlJ8dM.js";import"./ArrowButton-Cs0qfOGj.js";const{expect:x}=__STORYBOOK_MODULE_TEST__,S={title:"Core Components/Testimonial Carousel",component:n,tags:["autodocs"]},e={name:"Default",args:{heading:"Testimonials",paragraph:"Hear from our students and alumni about their experiences at Colby.",buttons:[{url:"#",title:"All Stories"}],items:[{image:{url:"https://placehold.co/600x600",alt:"Student photo"},testimonial:{quote:'"Colby prepared me to think critically and act with purpose in everything I do."',name:"Jane Doe '22"}},{image:{url:"https://placehold.co/600x600",alt:"Alumni photo"},testimonial:{quote:`"The community at Colby is unlike anything I've experienced. It's truly a special place."`,name:"John Smith '20"}}]},play:async({canvas:o})=>{}},t={name:"With Image Captions",args:{heading:"Student Stories",paragraph:"Hear directly from students about their Colby experience.",buttons:[{url:"#",title:"More Stories"}],items:[{image:{url:"https://placehold.co/600x600",alt:"Student in lab",caption:"A student conducting research in the biology lab."},testimonial:{quote:'"The research opportunities at Colby are unparalleled."',name:"Alex Johnson '23"}},{image:{url:"https://placehold.co/600x600",alt:"Campus event",caption:"Annual campus festival celebration."},testimonial:{quote:'"Every day brings something new and exciting."',name:"Maria Garcia '21"}}]},play:async({canvas:o})=>{}},a={name:"Single Item",args:{heading:"Featured Story",paragraph:"A single testimonial.",buttons:[{url:"#",title:"Read More"}],items:[{image:{url:"https://placehold.co/600x600",alt:"Solo student"},testimonial:{quote:'"My four years at Colby were transformative."',name:"Solo Person '24"}}]},play:async({canvas:o})=>{}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    heading: "Testimonials",
    paragraph: "Hear from our students and alumni about their experiences at Colby.",
    buttons: [{
      url: "#",
      title: "All Stories"
    }],
    items: [{
      image: {
        url: "https://placehold.co/600x600",
        alt: "Student photo"
      },
      testimonial: {
        quote: '"Colby prepared me to think critically and act with purpose in everything I do."',
        name: "Jane Doe '22"
      }
    }, {
      image: {
        url: "https://placehold.co/600x600",
        alt: "Alumni photo"
      },
      testimonial: {
        quote: "\\"The community at Colby is unlike anything I've experienced. It's truly a special place.\\"",
        name: "John Smith '20"
      }
    }]
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Testimonials")).toBeInTheDocument();
    await expect(canvas.getByText("All Stories")).toBeInTheDocument();
    await expect(canvas.getByText("Jane Doe '22")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "With Image Captions",
  args: {
    heading: "Student Stories",
    paragraph: "Hear directly from students about their Colby experience.",
    buttons: [{
      url: "#",
      title: "More Stories"
    }],
    items: [{
      image: {
        url: "https://placehold.co/600x600",
        alt: "Student in lab",
        caption: "A student conducting research in the biology lab."
      },
      testimonial: {
        quote: '"The research opportunities at Colby are unparalleled."',
        name: "Alex Johnson '23"
      }
    }, {
      image: {
        url: "https://placehold.co/600x600",
        alt: "Campus event",
        caption: "Annual campus festival celebration."
      },
      testimonial: {
        quote: '"Every day brings something new and exciting."',
        name: "Maria Garcia '21"
      }
    }]
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Student Stories")).toBeInTheDocument();
    await expect(canvas.getByText("Alex Johnson '23")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Single Item",
  args: {
    heading: "Featured Story",
    paragraph: "A single testimonial.",
    buttons: [{
      url: "#",
      title: "Read More"
    }],
    items: [{
      image: {
        url: "https://placehold.co/600x600",
        alt: "Solo student"
      },
      testimonial: {
        quote: '"My four years at Colby were transformative."',
        name: "Solo Person '24"
      }
    }]
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("Solo Person '24")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};const b=["Default","WithCaptions","SingleItem"];export{e as Default,a as SingleItem,t as WithCaptions,b as __namedExportsOrder,S as default};
