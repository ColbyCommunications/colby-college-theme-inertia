import{u as i,j as e,M as s,a as o}from"./blocks-CuQEYbed.js";import"./ContextArticleGrid.stories-esOK8gAD.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-UIbP18SM.js";import"./index-DZ_Kha3d.js";import"./ContextArticleGrid-BSlnNeKd.js";import"./Context-BXocAWt7.js";import"./TextGroup-Dp3a0PpY.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-Bi6fM2Qp.js";import"./Button-uB1sN1l-.js";import"./Article-B32aJEg4.js";import"./Picture-DwnzuAws.js";import"./mock-data-Db_ZkuBv.js";function r(n){const t={h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Blocks/Context Article Grid/Documentation"}),`
`,e.jsx(t.h1,{id:"context-article-grid",children:"Context Article Grid"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.strong,{children:"Context Article Grid"})," is a comprehensive section block. It is designed to provide narrative context (via the Context pattern) followed by a structured grid of articles or people."]}),`
`,e.jsx(t.p,{children:'This block is ideal for "Department News," "Meet the Faculty," or "Alumni Spotlights" where an introductory paragraph is needed before the data grid.'}),`
`,e.jsx(t.h2,{id:"data-sourcing-api-vs-manual",children:"Data Sourcing (API vs. Manual)"}),`
`,e.jsx(t.p,{children:"You can choose to let the block pull data automatically or hand-select the items."}),`
`,e.jsx(o,{children:`
| Field | Type | Description |
| :--- | :--- | :--- |
| **Render API** | Toggle | If enabled (True), the block pulls from an automated source. If disabled (False), you must add items manually. |
| **API** | Radio | Choose the data source: **Manual**, **People**, or **Alumni**. (Only visible if Render API is True). |
| **Per Page** | Number | Determines how many items load initially. Defaults to 6. |
`}),`
`,e.jsx(t.h2,{id:"component-composition",children:"Component Composition"}),`
`,e.jsx(t.p,{children:'This block is built by "cloning" two other major patterns. Changes made to those patterns will reflect here.'}),`
`,e.jsx(t.h3,{id:"a-context-intro-text",children:"A. Context (Intro Text)"}),`
`,e.jsxs(t.p,{children:["Allows you to set the ",e.jsx(t.strong,{children:"Subheading"}),", ",e.jsx(t.strong,{children:"Heading"}),", ",e.jsx(t.strong,{children:"Paragraph"}),", and ",e.jsx(t.strong,{children:"Buttons"})," that introduce the grid."]}),`
`,e.jsx(t.h3,{id:"b-grid-layout--items",children:"B. Grid (Layout & Items)"}),`
`,e.jsx(t.p,{children:"Allows you to configure the grid's visual style:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Columns:"})," 2, 3, or 4 columns."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Image Orientation:"})," Square, Rectangle, or Portrait."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Manual Items:"}),' If "Render API" is off, you add your stories/images here.']}),`
`]}),`
`,e.jsx(t.h2,{id:"best-practices",children:"Best Practices"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Intro vs. Grid Balance:"})," Ensure the ",e.jsx(t.strong,{children:"Context"})," paragraph isn't so long that the reader has to scroll multiple times just to reach the first row of the grid."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"API Selection:"})," Use the ",e.jsx(t.strong,{children:"People"})," or ",e.jsx(t.strong,{children:"Alumni"})," API for directory-style pages. Use ",e.jsx(t.strong,{children:"Manual"})," mode for highly curated landing pages where the order of stories is critical."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Grid Consistency:"})," When using the manual grid, try to ensure all images use the same ",e.jsx(t.strong,{children:"Image Orientation"})," for a clean, aligned look."]}),`
`]}),`
`,e.jsx(t.h2,{id:"5-troubleshooting",children:"5. Troubleshooting"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"The Grid is empty:"}),`
If "Render API" is on, ensure the selected API (e.g., Alumni) actually has published content. If "Render API" is off, ensure you have added rows to the "Items" repeater inside the Grid section.`]})]})}function b(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(r,{...n})}):r(n)}export{b as default};
