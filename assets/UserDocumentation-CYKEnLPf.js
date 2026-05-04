import{u as l,j as e,M as r,C as t}from"./blocks-C2Q3IB34.js";import{Default as o}from"./TestimonialCarousel.stories-CqnK7eW2.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-CQJlxVxo.js";import"./TestimonialCarousel-HxLQOxhp.js";import"./glide.esm-YJcNIzYu.js";import"./Context-Jqq4F14X.js";import"./TextGroup-BGCLWemL.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-Bii6xvXt.js";import"./Button-D33RBgaZ.js";import"./Picture-CSYUbZTZ.js";import"./ArrowControls-Cn0PWR2c.js";import"./ArrowButton-DAbFKPNq.js";function s(i){const n={h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Blocks/Testimonial Carousel/Documentation"}),`
`,e.jsx(n.h1,{id:"testimonial-carousel",children:"Testimonial Carousel"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Testimonial Carousel"})," block is used to showcase rotating testimonials alongside supporting imagery."]}),`
`,e.jsx(n.p,{children:"It combines a visual slideshow with synchronized quote content, allowing users to engage with stories, feedback, or endorsements in an interactive format."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"when-to-use-this-block",children:"When to Use This Block"}),`
`,e.jsx(n.p,{children:"Use the Testimonial Carousel block when:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"You want to highlight user or student testimonials"}),`
`,e.jsx(n.li,{children:"You need to present multiple quotes in a limited space"}),`
`,e.jsx(n.li,{children:"You want to combine imagery with narrative feedback"}),`
`,e.jsx(n.li,{children:"You want to add movement and engagement to a page"}),`
`]}),`
`,e.jsx(n.h3,{id:"example-uses",children:"Example uses:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Student or alumni testimonials"}),`
`,e.jsx(n.li,{children:"Customer or client feedback"}),`
`,e.jsx(n.li,{children:"Case study highlights"}),`
`,e.jsx(n.li,{children:"Brand or program endorsements"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"preview",children:"Preview"}),`
`,e.jsx(t,{of:o}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"context",children:"Context"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Context"})," section introduces the testimonial carousel."]}),`
`,e.jsx(n.p,{children:"It typically includes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Heading"}),`
`,e.jsx(n.li,{children:"Paragraph"}),`
`,e.jsx(n.li,{children:"Optional buttons"}),`
`]}),`
`,e.jsx(n.p,{children:"This area provides editorial framing for the testimonials and helps users understand the purpose of the carousel."}),`
`,e.jsx(n.h3,{id:"common-purposes",children:"Common purposes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Introduce a theme (e.g. “What our students say”)"}),`
`,e.jsx(n.li,{children:"Provide supporting narrative"}),`
`,e.jsx(n.li,{children:"Drive users to related content via CTA buttons"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"carousel-items",children:"Carousel Items"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Items"})," repeater defines each slide in the carousel."]}),`
`,e.jsx(n.p,{children:"Each item includes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Image"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Primary visual for the testimonial slide"}),`
`,e.jsx(n.li,{children:"Displayed in the carousel window"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Caption (optional)"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Short descriptive text below the image"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Testimonial"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Quote (required)"}),`
`,e.jsx(n.li,{children:"Name (required)"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Each slide pairs imagery with a corresponding quote for context."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"slide-structure",children:"Slide Structure"}),`
`,e.jsx(n.p,{children:"Each carousel slide contains two linked components:"}),`
`,e.jsx(n.h3,{id:"1-visual-slide-image",children:"1. Visual Slide (Image)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Displays a full-width responsive image"}),`
`,e.jsx(n.li,{children:"Maintains consistent aspect ratio across slides"}),`
`,e.jsx(n.li,{children:"Optional caption appears below the image"}),`
`]}),`
`,e.jsx(n.h3,{id:"2-quote-panel",children:"2. Quote Panel"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Displays the testimonial text"}),`
`,e.jsx(n.li,{children:"Shows the name of the person quoted"}),`
`,e.jsx(n.li,{children:"Updates in sync with the active slide"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"carousel-behavior",children:"Carousel Behavior"}),`
`,e.jsx(n.p,{children:"The Testimonial Carousel uses an auto-advancing slide system powered by Glide.js."}),`
`,e.jsx(n.h3,{id:"key-behaviors",children:"Key behaviors:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"One slide visible at a time"}),`
`,e.jsx(n.li,{children:"Smooth animated transitions between slides"}),`
`,e.jsx(n.li,{children:"Active slide controls which testimonial is shown"}),`
`,e.jsx(n.li,{children:"Manual navigation via arrow controls"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"autoplay-behavior",children:"Autoplay Behavior"}),`
`,e.jsx(n.p,{children:"The carousel includes automatic playback:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Slides advance every 5 seconds"}),`
`,e.jsxs(n.li,{children:["Autoplay pauses when:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"User hovers over the carousel"}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Autoplay resumes when:",`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Mouse leaves the carousel area"}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"This ensures both engagement and user control."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"navigation-controls",children:"Navigation Controls"}),`
`,e.jsx(n.p,{children:"The carousel includes arrow-based navigation:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Next"})," → advances to the next slide"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Previous"})," → returns to the previous slide"]}),`
`]}),`
`,e.jsx(n.p,{children:"Controls are:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Positioned in the top-right area of the carousel"}),`
`,e.jsx(n.li,{children:"Accessible via keyboard interaction"}),`
`,e.jsx(n.li,{children:"Independent of autoplay timing"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"synchronised-content",children:"Synchronised Content"}),`
`,e.jsxs(n.p,{children:["A key feature of this block is ",e.jsx(n.strong,{children:"synchronisation between image and quote"}),":"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Image slide changes trigger quote updates"}),`
`,e.jsx(n.li,{children:"Quote panel always reflects the active slide"}),`
`,e.jsx(n.li,{children:"Only one testimonial is visible at a time"}),`
`]}),`
`,e.jsx(n.p,{children:"This ensures a clear connection between visuals and narrative content."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"layout-behaviour",children:"Layout Behaviour"}),`
`,e.jsx(n.h3,{id:"desktop",children:"Desktop"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Context sits on the left"}),`
`,e.jsx(n.li,{children:"Carousel occupies the main right area"}),`
`,e.jsx(n.li,{children:"Quote panel is aligned alongside slides"}),`
`]}),`
`,e.jsx(n.h3,{id:"mobile",children:"Mobile"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Layout stacks vertically"}),`
`,e.jsx(n.li,{children:"Context appears above carousel"}),`
`,e.jsx(n.li,{children:"Quote content appears below or integrated"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"animation-behaviour",children:"Animation Behaviour"}),`
`,e.jsx(n.p,{children:"The carousel includes smooth motion effects:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Slide transitions are animated"}),`
`,e.jsx(n.li,{children:"Quote transitions fade in/out"}),`
`,e.jsx(n.li,{children:"Active state changes are visually reinforced"}),`
`]}),`
`,e.jsx(n.p,{children:"This creates a polished storytelling experience without overwhelming the user."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:"The Testimonial Carousel is designed with accessibility considerations:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Only one testimonial is shown at a time for clarity"}),`
`,e.jsx(n.li,{children:"Navigation controls are keyboard accessible"}),`
`,e.jsx(n.li,{children:"Images include alt text for screen readers"}),`
`,e.jsx(n.li,{children:"Content updates are visually and structurally synchronized"}),`
`,e.jsx(n.li,{children:"Hover pause prevents unintended motion"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"performance-notes",children:"Performance Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Glide instance is initialised after mount for DOM stability"}),`
`,e.jsx(n.li,{children:"Autoplay is handled via interval timer"}),`
`,e.jsx(n.li,{children:"Carousel is destroyed cleanly on component unmount"}),`
`,e.jsx(n.li,{children:"Animations are optimized for smooth transitions"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use high-quality, consistent imagery"}),`
`,e.jsx(n.li,{children:"Keep testimonial quotes concise and impactful"}),`
`,e.jsx(n.li,{children:"Limit the number of slides for better engagement"}),`
`,e.jsx(n.li,{children:"Ensure names are clearly attributed"}),`
`,e.jsx(n.li,{children:"Avoid overly long captions under images"}),`
`,e.jsx(n.li,{children:"Use testimonials that reflect authentic experiences"}),`
`]})]})}function C(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{C as default};
