import o from"./TestimonialCarousel-CLVFB41E.js";import"./iframe-et_0dC0y.js";import"./preload-helper-CNn__nYE.js";import"./glide.esm-YJcNIzYu.js";import"./Context-B_C-TZJb.js";import"./TextGroup-BlhMCULi.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./ButtonGroup-Dj0PjP7s.js";import"./Button-eHYYr99x.js";import"./Picture-D9AQoHRm.js";import"./ArrowControls-C_TR25UF.js";import"./ArrowButton-Dn56lx2y.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,T={title:"Blocks/Testimonial Carousel",component:o,tags:["!autodocs"],argTypes:{subheading:{name:"Subheading",control:"text",table:{category:"Wordpress Fields"}},heading:{name:"Heading",control:"text",table:{category:"Wordpress Fields"}},paragraph:{name:"Paragraph",control:"text",table:{category:"Wordpress Fields"}},buttons:{name:"Buttons",control:"object",table:{category:"Wordpress Fields"}},items:{name:"Items",control:"object",table:{category:"Wordpress Fields"}}}},e={name:"Testimonial Carousel",args:{subheading:"What Our Community Says",heading:"Testimonials",paragraph:"Hear from our students and alumni about their experiences at Colby.",buttons:[{url:"#",title:"All Stories"}],items:[{image:{srcset:"https://placehold.co/860x400",src:"https://placehold.co/600x600",alt:"Student photo",sizes:{Landscape:"https://placehold.co/860x400",Square:"https://placehold.co/600x600"}},testimonial:{quote:'"Colby prepared me to think critically and act with purpose in everything I do."',name:"Jane Doe '22"}},{image:{srcset:"https://placehold.co/860x400",src:"https://placehold.co/600x600",alt:"Alumni photo",sizes:{Landscape:"https://placehold.co/860x400",Square:"https://placehold.co/600x600"}},testimonial:{quote:`"The community at Colby is unlike anything I've experienced. It's truly a special place."`,name:"John Smith '20"}}]},play:async({canvas:t})=>{await a(t.getByText("Testimonials")).toBeInTheDocument(),await a(t.getByText("All Stories")).toBeInTheDocument(),await a(t.getByText("Jane Doe '22")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Testimonial Carousel",
  args: {
    subheading: "What Our Community Says",
    heading: "Testimonials",
    paragraph: "Hear from our students and alumni about their experiences at Colby.",
    buttons: [{
      url: "#",
      title: "All Stories"
    }],
    items: [{
      image: {
        srcset: "https://placehold.co/860x400",
        src: "https://placehold.co/600x600",
        alt: "Student photo",
        sizes: {
          Landscape: "https://placehold.co/860x400",
          Square: "https://placehold.co/600x600"
        }
      },
      testimonial: {
        quote: '"Colby prepared me to think critically and act with purpose in everything I do."',
        name: "Jane Doe '22"
      }
    }, {
      image: {
        srcset: "https://placehold.co/860x400",
        src: "https://placehold.co/600x600",
        alt: "Alumni photo",
        sizes: {
          Landscape: "https://placehold.co/860x400",
          Square: "https://placehold.co/600x600"
        }
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
    await expect(canvas.getByText("Testimonials")).toBeInTheDocument();
    await expect(canvas.getByText("All Stories")).toBeInTheDocument();
    await expect(canvas.getByText("Jane Doe '22")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,T as default};
