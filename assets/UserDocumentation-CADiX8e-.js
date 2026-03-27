import{j as e,M as o,a as r}from"./blocks-BAR4imBn.js";import{useMDXComponents as i}from"./index-ClGqw8ri.js";import"./Carousel.stories-C3bnVa3_.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-D3iFGQZk.js";import"./Carousel-CbBSUT6D.js";import"./index-42ANG6Sg.js";import"./glide.esm-YJcNIzYu.js";import"./Context-BdALv82u.js";import"./TextGroup-C7hXvWol.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-ojbwMsyk.js";import"./Button-DMj_75Cf.js";import"./ArrowControls-DvCaZoRO.js";import"./ArrowButton-SfEsBXF1.js";import"./Picture-hGQrZg1i.js";import"./mock-data-iuhpH0Ld.js";function n(s){const t={blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Blocks/Carousel/Documentation"}),`
`,e.jsx(t.h1,{id:"carousel",children:"Carousel"}),`
`,e.jsx(t.p,{children:"The Carousel block is a high-visibility component used to showcase featured stories or news. It provides a horizontal sliding interface that allows users to browse through multiple items while keeping the page layout compact."}),`
`,e.jsx(t.h2,{id:"choosing-your-content-source",children:"Choosing Your Content Source"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Display Posts Method"})," determines how the slides are populated."]}),`
`,e.jsx(r,{children:`
| Method | Best Used For... |
| :--- | :--- |
| **External API** | Pulling the latest automated feed from the site's "Latest News" source. |
| **Add Posts Manually** | Hand-picking specific stories with custom imagery for a curated marketing message. |
`}),`
`,e.jsx(t.h2,{id:"configuration-modes",children:"Configuration Modes"}),`
`,e.jsx(t.h3,{id:"external-api-automated",children:"External API (Automated)"}),`
`,e.jsx(t.p,{children:"When selected, the block will automatically fetch the most recent content from an external website."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"API Choice:"}),' Currently defaults to "Latest News," which feeds in data from news.colby.edu']}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Global Content:"})," You still need to provide a ",e.jsx(t.strong,{children:"Heading"})," and ",e.jsx(t.strong,{children:"Paragraph"})," which will appear alongside the carousel as the introductory text."]}),`
`]}),`
`,e.jsx(t.h3,{id:"manual-mode-curated",children:"Manual Mode (Curated)"}),`
`,e.jsx(t.p,{children:"Use this when you want full control over the specific order and content of the slides."}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Items:"})," Add individual manual slides here."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Context fields:"})," Allows you to add the title, subheading, and link for each slide."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Image:"})," Upload a high-resolution image.",`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"})," For the best visual experience, ensure all images in a single carousel share the same aspect ratio (Recommended: ",e.jsx(t.strong,{children:"Rectangle"}),")."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(t.h2,{id:"global-content-settings",children:"Global Content Settings"}),`
`,e.jsx(t.p,{children:"These fields appear regardless of which data source you choose:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Heading:"})," The main title for the carousel section."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Paragraph:"})," A short description or lead-in text for the slides."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Buttons:"})," Add one or more Call-to-Action (CTA) buttons that appear below the introductory text."]}),`
`]}),`
`,e.jsx(t.h2,{id:"editorial-best-practices",children:"Editorial Best Practices"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Slide Count:"})," Aim for ",e.jsx(t.strong,{children:"3 to 5 slides"}),". Research shows that users rarely click past the 5th slide, and too many items can slow down page performance."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Image Clarity:"})," Avoid using images with text embedded in them, as the carousel overlay might obscure it or make it unreadable on mobile devices."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"CTA Strategy:"})," Use the ",e.jsx(t.strong,{children:"Buttons"})," section to provide a primary link to the full News or Archive page, while using individual slide links for specific stories."]}),`
`]})]})}function M(s={}){const{wrapper:t}={...i(),...s.components};return t?e.jsx(t,{...s,children:e.jsx(n,{...s})}):n(s)}export{M as default};
