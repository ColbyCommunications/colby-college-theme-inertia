import{u as l,j as e,M as r,C as t}from"./blocks-MQzI2jie.js";import{Default as d}from"./PeopleGrid.stories-BdJ3H-yr.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-Dk8X5kg9.js";import"./PeopleGrid-B6WG9S7k.js";import"./ArticleGrid-Bs1hYuQG.js";import"./TextGroup-zhl_ARTF.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./Article-Blu6zVXg.js";import"./ButtonGroup-BM8qokrS.js";import"./Button-B99iu2cV.js";import"./Picture-Y-vsZVhD.js";function s(i){const n={h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Blocks/People Grid/Documentation"}),`
`,e.jsx(n.h1,{id:"people-grid",children:"People Grid"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"People Grid"})," block is used to display staff and faculty in a structured grid layout."]}),`
`,e.jsx(n.p,{children:"It is primarily designed for academic department and office pages, with support for both automated population and manual selection of individuals."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"when-to-use-this-block",children:"When to Use This Block"}),`
`,e.jsx(n.p,{children:"Use the People Grid when:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"You need to display faculty or staff listings"}),`
`,e.jsx(n.li,{children:"You are building academic department pages"}),`
`,e.jsx(n.li,{children:"You want a structured directory of people profiles"}),`
`,e.jsx(n.li,{children:"You need a mix of automated and manually curated listings"}),`
`]}),`
`,e.jsx(n.h3,{id:"example-uses",children:"Example uses:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Academic department faculty listings"}),`
`,e.jsx(n.li,{children:"Office or administrative staff directories"}),`
`,e.jsx(n.li,{children:"Research group member listings"}),`
`,e.jsx(n.li,{children:"Institutional team pages"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"preview",children:"Preview"}),`
`,e.jsx(t,{of:d}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"auto-populate",children:"Auto Populate"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Auto Populate"})," option allows the grid to automatically pull people based on department data."]}),`
`,e.jsx(n.p,{children:"When enabled:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"People are automatically retrieved by department name"}),`
`,e.jsx(n.li,{children:"Data is sourced from the site’s People directory"}),`
`,e.jsx(n.li,{children:"Listings update dynamically based on department matching"}),`
`]}),`
`,e.jsx(n.h3,{id:"important-notes",children:"Important Notes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Auto population is intended for academic department homepages only"}),`
`,e.jsx(n.li,{children:"Some people may not appear automatically if their Workday department does not match the website department URL"}),`
`,e.jsx(n.li,{children:"Missing individuals may need to be added manually"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"manual-people-selection",children:"Manual People Selection"}),`
`,e.jsx(n.p,{children:"The People Grid also supports manual additions."}),`
`,e.jsx(n.p,{children:"Editors can:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Select individual people from the People post type"}),`
`,e.jsx(n.li,{children:"Add multiple people via a repeater field"}),`
`,e.jsx(n.li,{children:"Combine manual entries with auto-populated results"}),`
`]}),`
`,e.jsx(n.p,{children:"This is useful when:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A person does not appear in automatic results"}),`
`,e.jsx(n.li,{children:"You need to highlight specific individuals"}),`
`,e.jsx(n.li,{children:"You want curated ordering or grouping"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"excluding-people",children:"Excluding People"}),`
`,e.jsx(n.p,{children:"The block includes an option to exclude specific people from appearing."}),`
`,e.jsx(n.p,{children:"This allows editors to:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Remove individuals from auto-populated results"}),`
`,e.jsx(n.li,{children:"Override unwanted or outdated listings"}),`
`,e.jsx(n.li,{children:"Fine-tune department-based outputs"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"grid-layout",children:"Grid Layout"}),`
`,e.jsx(n.p,{children:"The People Grid uses a responsive article grid system:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Displays people in a multi-column layout"}),`
`,e.jsx(n.li,{children:"Adjusts number of columns based on configuration"}),`
`,e.jsx(n.li,{children:"Optimized for portrait-style profile images"}),`
`]}),`
`,e.jsx(n.p,{children:"Each person is rendered as a card within the grid."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"underlying-system",children:"Underlying System"}),`
`,e.jsxs(n.p,{children:["The People Grid is powered by the ",e.jsx(n.strong,{children:"Article Grid"})," component."]}),`
`,e.jsx(n.p,{children:"It inherits key layout and display behaviors such as:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Column configuration"}),`
`,e.jsx(n.li,{children:"Image orientation (portrait)"}),`
`,e.jsx(n.li,{children:"Manual vs automated content handling"}),`
`,e.jsx(n.li,{children:"Responsive grid structure"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"content-behavior",children:"Content Behavior"}),`
`,e.jsx(n.p,{children:"Each person typically includes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Profile image"}),`
`,e.jsx(n.li,{children:"Name and title"}),`
`,e.jsx(n.li,{children:"Supporting contextual information (depending on template)"}),`
`]}),`
`,e.jsxs(n.p,{children:["Content is sourced from the ",e.jsx(n.strong,{children:"People post type"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"layout-behavior",children:"Layout Behavior"}),`
`,e.jsx(n.h3,{id:"columns",children:"Columns"}),`
`,e.jsx(n.p,{children:"The grid supports configurable column layouts:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Multi-column display on desktop"}),`
`,e.jsx(n.li,{children:"Responsive reduction on tablet and mobile"}),`
`,e.jsx(n.li,{children:"Consistent spacing between profile cards"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"image-orientation",children:"Image Orientation"}),`
`,e.jsxs(n.p,{children:["Profile images are displayed in a ",e.jsx(n.strong,{children:"portrait orientation"})," to ensure consistency across listings."]}),`
`,e.jsx(n.p,{children:"This helps:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Maintain uniform card heights"}),`
`,e.jsx(n.li,{children:"Improve scanability in large directories"}),`
`,e.jsx(n.li,{children:"Emphasize portrait-style profile photography"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"data-sources",children:"Data Sources"}),`
`,e.jsx(n.p,{children:"The People Grid can source content from:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Auto-populated department data"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Manually selected People posts"})}),`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Excluded People overrides"})}),`
`]}),`
`,e.jsx(n.p,{children:"This allows flexible combinations of automated and curated content."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:"The People Grid is designed with accessibility in mind:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Each person card includes semantic structure"}),`
`,e.jsx(n.li,{children:"Images include alt text where available"}),`
`,e.jsx(n.li,{children:"Grid layout supports keyboard navigation"}),`
`,e.jsx(n.li,{children:"Content order remains logical for screen readers"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tips-for-best-results",children:"Tips for Best Results"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use auto-populate for department-wide listings where possible"}),`
`,e.jsx(n.li,{children:"Manually curate when highlighting key individuals"}),`
`,e.jsx(n.li,{children:"Ensure profile images are consistent and high quality"}),`
`,e.jsx(n.li,{children:"Avoid mixing unrelated roles within the same grid"}),`
`,e.jsx(n.li,{children:"Use exclusions carefully to maintain accurate listings"}),`
`]})]})}function v(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{v as default};
