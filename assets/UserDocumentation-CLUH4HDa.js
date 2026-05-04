import{u as s,j as e,M as l,C as r}from"./blocks-OAXSs2rl.js";import{Default as o}from"./EndpointFilter.stories-BzrWeglS.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BgQXPfKC.js";import"./index-DZ_Kha3d.js";import"./EndpointFilter-YcOB5wLA.js";import"./TextGroup-CHD4iHm7.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-CCu1xz8V.js";import"./Button-C-lFUJoe.js";import"./mock-data-Db_ZkuBv.js";function t(i){const n={h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Blocks/Endpoint Filter/Documentation"}),`
`,e.jsx(n.h1,{id:"endpoint-filter",children:"Endpoint Filter"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Endpoint Filter"})," block displays a list of items pulled from an external data source and optionally allows visitors to filter the results."]}),`
`,e.jsxs(n.p,{children:["It is commonly used to display ",e.jsx(n.strong,{children:"event listings"})," that are loaded dynamically from an events feed."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"when-to-use-this-block",children:"When to Use This Block"}),`
`,e.jsx(n.p,{children:"Use the Endpoint Filter block when:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"You want to display a list of content from an external feed"}),`
`,e.jsx(n.li,{children:"The content updates automatically outside of WordPress"}),`
`,e.jsx(n.li,{children:"You want visitors to filter the displayed results by category or type"}),`
`]}),`
`,e.jsx(n.h3,{id:"example-uses",children:"Example uses:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Event listings"}),`
`,e.jsx(n.li,{children:"Program schedules"}),`
`,e.jsx(n.li,{children:"External calendars"}),`
`,e.jsx(n.li,{children:"Filterable lists of feed-based content"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"preview",children:"Preview"}),`
`,e.jsx(r,{of:o}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"endpoint",children:"Endpoint"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Endpoint"})," field defines the external data source the block will load."]}),`
`,e.jsxs(n.p,{children:["This should be the ",e.jsx(n.strong,{children:"URL of a JSON feed"})," that returns a list of items to display."]}),`
`,e.jsx(n.p,{children:"Each item typically includes information such as:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Date"}),`
`,e.jsx(n.li,{children:"Title"}),`
`,e.jsx(n.li,{children:"Time"}),`
`,e.jsx(n.li,{children:"Link to more details"}),`
`]}),`
`,e.jsx(n.p,{children:"When the page loads, the block retrieves data from this endpoint and displays the results automatically."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"filters",children:"Filters"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Filters"})," option controls whether a filter navigation menu appears above the content."]}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(n.p,{children:"Only the default endpoint results are displayed."}),`
`,e.jsx(n.p,{children:"Use this when:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"You only want to show a single list of items"}),`
`,e.jsx(n.li,{children:"Filtering is not necessary"}),`
`]}),`
`,e.jsx(n.h3,{id:"enabled",children:"Enabled"}),`
`,e.jsx(n.p,{children:"A filter navigation menu appears above the list, allowing visitors to switch between different endpoints."}),`
`,e.jsx(n.p,{children:"Use this when:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Content can be grouped by categories"}),`
`,e.jsx(n.li,{children:"Visitors may want to browse different types of events"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"layout-behavior",children:"Layout Behavior"}),`
`,e.jsx(n.h3,{id:"filter-navigation",children:"Filter Navigation"}),`
`,e.jsx(n.p,{children:"When enabled, the filter menu appears above the content and displays selectable filter options."}),`
`,e.jsx(n.p,{children:"Selecting a filter loads new results without leaving the page."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"content-grid",children:"Content Grid"}),`
`,e.jsx(n.p,{children:"Items are displayed in a responsive grid layout."}),`
`,e.jsx(n.p,{children:"Each item typically shows:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Date"}),`
`,e.jsx(n.li,{children:"Event title"}),`
`,e.jsx(n.li,{children:"Time"}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.strong,{children:"Learn More"})," button linking to the full event details"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tips-for-best-results",children:"Tips for Best Results"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use a ",e.jsx(n.strong,{children:"reliable endpoint URL"})," that returns properly formatted data"]}),`
`,e.jsxs(n.li,{children:["Enable filters only when there are ",e.jsx(n.strong,{children:"multiple meaningful categories"})]}),`
`,e.jsx(n.li,{children:"Keep event titles concise for better readability"}),`
`,e.jsx(n.li,{children:"Verify that event links open the correct external pages"}),`
`,e.jsxs(n.li,{children:["Use this block for ",e.jsx(n.strong,{children:"dynamic content that updates frequently"})]}),`
`]})]})}function b(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{b as default};
