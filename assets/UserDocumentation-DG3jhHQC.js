import{j as e,M as s,a as r}from"./blocks-TCrarDgN.js";import{useMDXComponents as i}from"./index-DzAqy5zT.js";import"./Context.stories-DPCoh-kd.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DVLLp9lp.js";import"./Context-Bzqkq7pO.js";import"./TextGroup-CLjecCQE.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-BpT_2sLv.js";import"./Button-DjOoUmoS.js";function o(n){const t={h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Blocks/Context/Documentation"}),`
`,e.jsx(t.h1,{id:"context",children:"Context"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Context"})," pattern is the standard text header used across the majority of our component library. It provides a consistent hierarchy for introducing a new section of a page."]}),`
`,e.jsxs(t.p,{children:["Because this is a ",e.jsx(t.strong,{children:"cloned field group"}),", you will see these exact same fields inside the Article Grid, Carousel, and Collage blocks."]}),`
`,e.jsx(t.h2,{id:"field-breakdown",children:"Field Breakdown"}),`
`,e.jsx(t.p,{children:"The Context group is designed to be flexible—you can use all fields for a full introduction or just a Heading for a minimal look."}),`
`,e.jsx(r,{children:`
| Field | Type | Description |
| :--- | :--- | :--- |
| **Subheading** | Text | A small, often all-caps label that sits above the main title. Used for "Category" or "Series" titles. |
| **Heading** | Text | The main H2-level title for the section. |
| **Paragraph** | WYSIWYG | A brief description. The toolbar is limited to keep styles consistent (bold, italic, and links only). |
| **Buttons** | Clone | A set of Call-to-Action buttons that appear at the bottom of the text block. |
`}),`
`,e.jsx(t.hr,{}),`
`,e.jsx(t.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Hierarchy:"})," Always use a ",e.jsx(t.strong,{children:"Heading"})," if you are using a ",e.jsx(t.strong,{children:"Subheading"}),". A subheading floating alone can look like lost text."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Paragraph Length:"})," Keep the WYSIWYG content under 300 characters. If the text is too long, it may distract from the visual elements (like images or grids) that follow."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Button Count:"}),' While the "Buttons" field allows multiple, we recommend a maximum of ',e.jsx(t.strong,{children:"two"}),' (one primary, one secondary) to avoid "choice paralysis" for the user.']}),`
`]}),`
`,e.jsx(t.h2,{id:"technical-note-for-editors",children:"Technical Note for Editors"}),`
`,e.jsxs(t.p,{children:["In some blocks (like the ",e.jsx(t.strong,{children:"Article Grid"}),'), the "Context" fields might be nested inside a sidebar tab. Despite the location, they function exactly the same way as shown here.']})]})}function j(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{j as default};
