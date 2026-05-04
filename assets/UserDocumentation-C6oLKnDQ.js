import{u as l,j as i,M as r,C as t}from"./blocks-DoC8fooP.js";import{Default as c}from"./ListSection.stories-DJvHEib0.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-lCgBM3L3.js";import"./ListSection-CRbGU_4A.js";function s(e){const n={h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...e.components};return i.jsxs(i.Fragment,{children:[i.jsx(r,{title:"Blocks/List Section/Documentation"}),`
`,i.jsx(n.h1,{id:"list-section",children:"List Section"}),`
`,i.jsxs(n.p,{children:["The ",i.jsx(n.strong,{children:"List Section"})," block displays multiple grouped lists of linked items in a structured, responsive layout."]}),`
`,i.jsx(n.p,{children:"Each list can include an optional heading and a collection of linked items, making this block ideal for navigation hubs, resource directories, and grouped content link lists."}),`
`,i.jsx(n.hr,{}),`
`,i.jsx(n.h2,{id:"when-to-use-this-block",children:"When to Use This Block"}),`
`,i.jsx(n.p,{children:"Use the List Section when:"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"You need to display grouped navigation links"}),`
`,i.jsx(n.li,{children:"You want to organize related resources into categories"}),`
`,i.jsx(n.li,{children:"You are building directory-style content sections"}),`
`,i.jsx(n.li,{children:"You want to present structured link collections in columns"}),`
`]}),`
`,i.jsx(n.h3,{id:"example-uses",children:"Example uses:"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"Resource or documentation hubs"}),`
`,i.jsx(n.li,{children:"Footer or sitemap-style link groups"}),`
`,i.jsx(n.li,{children:"Program or service listings"}),`
`,i.jsx(n.li,{children:"Category-based navigation sections"}),`
`]}),`
`,i.jsx(n.hr,{}),`
`,i.jsx(n.h2,{id:"preview",children:"Preview"}),`
`,i.jsx(t,{of:c}),`
`,i.jsx(n.hr,{}),`
`,i.jsx(n.h2,{id:"lists",children:"Lists"}),`
`,i.jsxs(n.p,{children:["The ",i.jsx(n.strong,{children:"Lists"})," field is a repeater that allows editors to create multiple grouped lists."]}),`
`,i.jsx(n.p,{children:"Each list contains:"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:[i.jsx(n.strong,{children:"Heading (optional)"})," – A title displayed above the list"]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.strong,{children:"Items"})," – A required repeater of linked items"]}),`
`]}),`
`,i.jsx(n.p,{children:"You can add as many lists as needed, allowing flexible multi-column layouts."}),`
`,i.jsx(n.hr,{}),`
`,i.jsx(n.h2,{id:"list-items",children:"List Items"}),`
`,i.jsx(n.p,{children:"Each list contains one or more items."}),`
`,i.jsx(n.p,{children:"Each item includes:"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:[i.jsx(n.strong,{children:"Link"})," – A link field containing:",`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"URL"}),`
`,i.jsx(n.li,{children:"Link title"}),`
`,i.jsx(n.li,{children:"Optional target (same tab or new tab)"}),`
`]}),`
`]}),`
`]}),`
`,i.jsx(n.p,{children:"The link title is displayed as the clickable text in the list."}),`
`,i.jsx(n.hr,{}),`
`,i.jsx(n.h2,{id:"layout-behavior",children:"Layout Behavior"}),`
`,i.jsx(n.h3,{id:"responsive-grid",children:"Responsive Grid"}),`
`,i.jsx(n.p,{children:"The List Section automatically adapts to screen size:"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsxs(n.li,{children:[i.jsx(n.strong,{children:"Desktop:"})," Lists are displayed in a multi-column horizontal layout"]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.strong,{children:"Tablet:"})," Columns wrap based on available width"]}),`
`,i.jsxs(n.li,{children:[i.jsx(n.strong,{children:"Mobile:"})," Lists stack vertically for easy scrolling"]}),`
`]}),`
`,i.jsx(n.hr,{}),`
`,i.jsx(n.h3,{id:"column-structure",children:"Column Structure"}),`
`,i.jsx(n.p,{children:"Each list is rendered as an independent column:"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"Lists are evenly spaced across the container"}),`
`,i.jsx(n.li,{children:"Column widths adjust dynamically based on screen size"}),`
`,i.jsx(n.li,{children:"Spacing ensures readability between groups"}),`
`]}),`
`,i.jsx(n.hr,{}),`
`,i.jsx(n.h2,{id:"headings",children:"Headings"}),`
`,i.jsx(n.p,{children:"If a heading is provided, it appears above the list items."}),`
`,i.jsx(n.p,{children:"Headings are useful for:"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"Categorizing link groups"}),`
`,i.jsx(n.li,{children:"Improving scanability"}),`
`,i.jsx(n.li,{children:"Providing context for grouped navigation"}),`
`]}),`
`,i.jsx(n.p,{children:"If no heading is set, the list will display items only."}),`
`,i.jsx(n.hr,{}),`
`,i.jsx(n.h2,{id:"links",children:"Links"}),`
`,i.jsx(n.p,{children:"Each item in the list is a clickable link."}),`
`,i.jsx(n.p,{children:"Links support:"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"Internal pages"}),`
`,i.jsx(n.li,{children:"External URLs"}),`
`,i.jsx(n.li,{children:"Optional new tab behavior"}),`
`]}),`
`,i.jsx(n.p,{children:"Link text is derived from the link’s title field."}),`
`,i.jsx(n.hr,{}),`
`,i.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,i.jsx(n.p,{children:"The List Section is structured for accessibility:"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"Headings provide semantic grouping for screen readers"}),`
`,i.jsx(n.li,{children:"Links are keyboard navigable"}),`
`,i.jsx(n.li,{children:"Lists use proper HTML list structure for clarity"}),`
`]}),`
`,i.jsx(n.hr,{}),`
`,i.jsx(n.h2,{id:"tips-for-best-results",children:"Tips for Best Results"}),`
`,i.jsxs(n.ul,{children:[`
`,i.jsx(n.li,{children:"Group related links under clear, descriptive headings"}),`
`,i.jsx(n.li,{children:"Keep link titles short and meaningful"}),`
`,i.jsx(n.li,{children:"Avoid overcrowding lists with too many items"}),`
`,i.jsx(n.li,{children:"Use consistent naming patterns across multiple lists"}),`
`,i.jsx(n.li,{children:"Limit each list to a focused topic or category for better usability"}),`
`]})]})}function u(e={}){const{wrapper:n}={...l(),...e.components};return n?i.jsx(n,{...e,children:i.jsx(s,{...e})}):s(e)}export{u as default};
