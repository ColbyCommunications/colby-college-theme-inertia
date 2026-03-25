import{j as e,M as r,a as o}from"./blocks-TCrarDgN.js";import{useMDXComponents as i}from"./index-DzAqy5zT.js";import"./ArticleGrid.stories-Rk6p8BSO.js";import"./preload-helper-PPVm8Dsz.js";import"./iframe-DVLLp9lp.js";import"./ArticleGrid-B3PSDmun.js";import"./index-42ANG6Sg.js";import"./TextGroup-CLjecCQE.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./Article-9knOJWFa.js";import"./ButtonGroup-BpT_2sLv.js";import"./Button-DjOoUmoS.js";import"./Picture-Cizz_D7H.js";import"./mock-data-iuhpH0Ld.js";function t(s){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Blocks/Article Grid/Documentation"}),`
`,e.jsx(n.h1,{id:"article-grid",children:"Article Grid"}),`
`,e.jsx(n.p,{children:'The Article Grid is a versatile block used to display collections of news, blog posts, or custom highlights. It supports automatic syncing with WordPress categories or manual "hand-picked" article selections.'}),`
`,e.jsx(n.h2,{id:"choosing-your-data-source",children:"Choosing Your Data Source"}),`
`,e.jsxs(n.p,{children:["The first setting, ",e.jsx(n.strong,{children:"Display Posts Method"}),", determines where the content comes from."]}),`
`,e.jsx(o,{children:`
| Method | Best Used For... |
| :--- | :--- |
| **Internal Posts** | Automatically showing the latest news from a specific category. |
| **External API** | Pulling in "Media Coverage" or news from external university sources. |
| **Add Posts Manually** | Hand-picking specific stories for a landing page (highly curated). |
`}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"configuration-modes",children:"Configuration Modes"}),`
`,e.jsx(n.h3,{id:"internal-posts-automatic",children:"Internal Posts (Automatic)"}),`
`,e.jsx(n.p,{children:"Use this to keep a page updated without manual intervention."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Render Posts Category:"})," Select the WordPress category you want to pull from."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Post Limit:"})," Control how many items appear (set to ",e.jsx(n.code,{children:"-1"})," to show all)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Exclude Posts:"}),' If a specific "Sticky" post is already on the page, use this to prevent it from appearing twice in the grid.']}),`
`]}),`
`,e.jsx(n.h3,{id:"external-api",children:"External API"}),`
`,e.jsx(n.p,{children:"This pulls content from the central Media Coverage feed."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Media Coverage Type:"}),` Filter the feed by "Highlights," "President's Office," or "All."`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Number of Posts:"})," Drag the slider to set a limit between 3 and 25 items."]}),`
`]}),`
`,e.jsx(n.h3,{id:"manual-hand-picked-articles",children:"Manual (Hand-Picked Articles)"}),`
`,e.jsx(n.p,{children:"The most flexible option for custom layouts."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Items:"})," Add individual rows for each card."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Post:"})," Search for an existing site post to auto-fill the title and link."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Custom Override:"})," You can upload a unique ",e.jsx(n.strong,{children:"Image"})," or change the ",e.jsx(n.strong,{children:"Context"})," (subheading) to differ from the original post's data."]}),`
`]}),`
`,e.jsx(n.h2,{id:"visual-styling",children:"Visual Styling"}),`
`,e.jsx(n.p,{children:'Regardless of the data source, you can control the look of the grid using these "Global" settings found at the bottom of the block:'}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Columns:"})," Choose between ",e.jsx(n.strong,{children:"2, 3, or 4"})," columns.",`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Tip:"})," Use 3 columns for standard blog feeds and 4 for small resource links."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Image Orientation:"})," * ",e.jsx(n.strong,{children:"Rectangle (3:2):"})," Standard photography.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Square (1:1):"})," Great for a modern, clean look."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Portrait (2:3):"})," Best for book covers or vertical posters."]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Border:"})," Toggle this on to add a subtle card outline to each item."]}),`
`]}),`
`,e.jsx(n.h3,{id:"editorial-best-practices",children:"Editorial Best Practices"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Consistency is Key:"}),' Do not mix "Square" and "Rectangle" orientations in the same row; the grid works best when all images match.']}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Character Counts:"}),' Try to keep headings across a single row to a similar length to ensure the "Read More" buttons align horizontally.']}),`
`]})]})}function w(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{w as default};
