import{j as e,M as i,a as r}from"./blocks-D8OSX5KK.js";import{useMDXComponents as s}from"./index-CJ2Mw0h4.js";import"./BlockQuote.stories-CtD_3zDQ.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DQ2mjexo.js";import"./BlockQuote-DvHRQoR8.js";function o(n){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Blocks/Block Quote/Documentation"}),`
`,e.jsx(t.h1,{id:"block-quote",children:"Block Quote"}),`
`,e.jsx(t.p,{children:`The Block Quote is a typographic tool used to highlight key statements, testimonials, or significant excerpts from an article. It acts as a visual "break" in long-form content to draw the reader's eye.`}),`
`,e.jsx(t.h2,{id:"field-configuration",children:"Field Configuration"}),`
`,e.jsx(t.p,{children:"In the WordPress editor, the Block Quote is intentionally streamlined to keep the focus on the content."}),`
`,e.jsx(r,{children:`
| Field | Type | Description |
| :--- | :--- | :--- |
| **Quote** | Textarea | The primary text of the quote. Supports multiple lines. |
`}),`
`,e.jsx(t.h3,{id:"how-to-use-it",children:"How to use it:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:["Add a new block and search for ",e.jsx(t.strong,{children:'"Block Quote"'}),"."]}),`
`,e.jsxs(t.li,{children:["Type or paste your text into the ",e.jsx(t.strong,{children:"Quote"})," field."]}),`
`,e.jsx(t.li,{children:"The block will automatically handle the quotation marks and styling based on our design system."}),`
`]}),`
`,e.jsx(t.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsx(t.p,{children:"To ensure the best reading experience, keep these guidelines in mind:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Length:"})," Aim for 1–3 sentences. Very long quotes can become difficult to read in this stylized format."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Placement:"})," Use a Block Quote every 4–5 paragraphs to maintain a good visual rhythm on the page."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"No Manual Quotes:"})," Do not add your own quotation marks (",e.jsx(t.code,{children:'"'}),") inside the field. The design system adds these automatically to ensure consistent styling."]}),`
`]}),`
`,e.jsx(t.h2,{id:"troubleshooting",children:"Troubleshooting"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"The quote looks too small/large:"}),`
The Block Quote is designed to scale based on the amount of text. If you find the text is wrapping awkwardly, try breaking the quote into two paragraphs or slightly shortening the excerpt.`]})]})}function x(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{x as default};
