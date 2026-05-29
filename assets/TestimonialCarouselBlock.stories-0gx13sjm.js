import o from"./TestimonialCarousel-oWA3A6e6.js";import"./iframe-BeFdV9vL.js";import"./preload-helper-PPVm8Dsz.js";import"./glide.esm-YJcNIzYu.js";import"./Context-BwyKCd7H.js";import"./TextGroup-lkErle6S.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-FYF5r83H.js";import"./Button-DKS7ljQH.js";import"./Picture-E7nEjJJp.js";import"./ArrowControls-D16f3qQK.js";import"./ArrowButton-C9uPMcY3.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,y={title:"Blocks/Testimonial Carousel",component:o,tags:["!autodocs"],argTypes:{subheading:{name:"Subheading",control:"text",table:{category:"Wordpress Fields"}},heading:{name:"Heading",control:"text",table:{category:"Wordpress Fields"}},paragraph:{name:"Paragraph",control:"text",table:{category:"Wordpress Fields"}},buttons:{name:"Buttons",control:"object",table:{category:"Wordpress Fields"}},items:{name:"Items",control:"object",table:{category:"Wordpress Fields"}}}},e={name:"Testimonial Carousel",args:{subheading:"What Our Community Says",heading:"Testimonials",paragraph:"Hear from our students and alumni about their experiences at Colby.",buttons:[{url:"#",title:"All Stories"}],items:[{image:{srcset:"https://placehold.co/860x400",src:"https://placehold.co/600x600",alt:"Student photo",sizes:{Landscape:"https://placehold.co/860x400",Square:"https://placehold.co/600x600"}},testimonial:{quote:'"Colby prepared me to think critically and act with purpose in everything I do."',name:"Jane Doe '22"}},{image:{srcset:"https://placehold.co/860x400",src:"https://placehold.co/600x600",alt:"Alumni photo",sizes:{Landscape:"https://placehold.co/860x400",Square:"https://placehold.co/600x600"}},testimonial:{quote:`"The community at Colby is unlike anything I've experienced. It's truly a special place."`,name:"John Smith '20"}}]},play:async({canvas:t})=>{await a(t.getByText("Testimonials")).toBeInTheDocument(),await a(t.getByText("All Stories")).toBeInTheDocument(),await a(t.getByText("Jane Doe '22")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,y as default};
