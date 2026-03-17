import{j as e,M as n,a as r}from"./blocks-D8OSX5KK.js";import{useMDXComponents as s}from"./index-CJ2Mw0h4.js";import"./CollageSection.stories-D7I5WJKw.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DQ2mjexo.js";import"./CollageSection-DYNDyzma.js";import"./Context-C5daJZBb.js";import"./TextGroup-C-6yQx1H.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-MivqfvFe.js";import"./Button-C_wnKOqa.js";import"./Picture-Tmjx1WH3.js";function i(o){const t={h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Blocks/Collage Section/Documentation"}),`
`,e.jsx(t.h1,{id:"collage-section",children:"Collage Section"}),`
`,e.jsx(t.p,{children:`The Collage Section is an editorial block that pairs a text-heavy intro (Context) with a masonry-style or overlapping image gallery. It is best used for "Our Story," "Impact Reports," or high-level landing pages where a single image isn't enough to capture the vibe.`}),`
`,e.jsx(t.h2,{id:"field-configuration",children:"Field Configuration"}),`
`,e.jsxs(t.p,{children:["The setup for this block is split into two main sections: ",e.jsx(t.strong,{children:"Text (Context)"})," and ",e.jsx(t.strong,{children:"Visuals (Images)"}),"."]}),`
`,e.jsx(r,{children:`
| Field Group | Content Type | Purpose |
| :--- | :--- | :--- |
| **Subheading** | Text | A small, often all-caps label that sits above the main title. Used for "Category" or "Series" titles. |
| **Heading** | Text | The main H2-level title for the section. |
| **Paragraph** | WYSIWYG | A brief description. The toolbar is limited to keep styles consistent (bold, italic, and links only). |
| **Buttons** | Repeater | A set of Call-to-Action buttons that appear at the bottom of the text block. |
| **Images** | Repeater | A collection of images that will form the collage layout. |
`}),`
`,e.jsx(t.h3,{id:"configuration-steps",children:"Configuration Steps:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Fill out the Context:"}),' This provides the "hook" for the section. It will typically appear to the left or top of the collage.']}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Add Images:"})," Click ",e.jsx(t.strong,{children:'"Add Row"'})," to upload images."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Layout Logic:"})," Depending on the design, the collage may change its appearance based on whether you upload 2, 3, or 4+ images."]}),`
`]}),`
`,e.jsx(t.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Image Variety:"}),' For a dynamic collage, try to mix "busy" images (people, action) with "calm" images (architecture, textures).']}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Focal Points:"})," Ensure the most important part of each image is centered, as the collage might crop images to fit the mosaic grid."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Quantity:"})," This block usually looks best with ",e.jsx(t.strong,{children:"3 to 5 images"}),". Adding too many rows in the repeater can make the section overly long."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Aspect Ratios:"}),` Don't worry about cropping your images perfectly; the block is designed to handle various sizes and fit them into the "collage" style automatically.`]}),`
`]}),`
`,e.jsx(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"The text is too long:"}),`
If your paragraph in the `,e.jsx(t.strong,{children:"Context"})," group is very long, it may push the images down or create excessive white space. Try to keep the text concise to let the images shine."]}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Images are blurry:"}),`
Ensure you are selecting high-resolution images from the Media Library. The block will serve the appropriate size, but the source file should be at least 1200px wide for the best results.`]})]})}function b(o={}){const{wrapper:t}={...s(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(i,{...o})}):i(o)}export{b as default};
