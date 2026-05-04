import{u as l,j as e,M as r,C as d}from"./blocks-Bt0YL6RW.js";import{Static as t}from"./Table.stories-BobGl2dL.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-aFyCAL0S.js";import"./index-DZ_Kha3d.js";import"./Table-BD41uKhc.js";import"./Modal-D10HkjMb.js";import"./mock-data-Db_ZkuBv.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...l(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Blocks/Table/Documentation"}),`
`,e.jsx(n.h1,{id:"table",children:"Table"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Table"})," block is a flexible data display component used to present structured information in rows and columns."]}),`
`,e.jsx(n.p,{children:"It supports both manually entered content and API-driven data, along with filtering, searching, pagination, and modal-based content display."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"when-to-use-this-block",children:"When to Use This Block"}),`
`,e.jsx(n.p,{children:"Use the Table block when:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"You need to display structured datasets"}),`
`,e.jsx(n.li,{children:"You are working with directory-style content (people, offices, departments)"}),`
`,e.jsx(n.li,{children:"You want users to search or filter data"}),`
`,e.jsx(n.li,{children:"You need paginated or API-driven results"}),`
`]}),`
`,e.jsx(n.h3,{id:"example-uses",children:"Example uses:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Course catalogues"}),`
`,e.jsx(n.li,{children:"Staff or people directories"}),`
`,e.jsx(n.li,{children:"Department listings"}),`
`,e.jsx(n.li,{children:"Office listings"}),`
`,e.jsx(n.li,{children:"Academic or institutional datasets"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"preview",children:"Preview"}),`
`,e.jsx(d,{of:t}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"data-modes",children:"Data Modes"}),`
`,e.jsx(n.p,{children:"The Table block supports two primary modes:"}),`
`,e.jsx(n.h3,{id:"1-static-mode",children:"1. Static Mode"}),`
`,e.jsx(n.p,{children:"Used when:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Content is manually defined via ACF"}),`
`,e.jsx(n.li,{children:"No external API is required"}),`
`,e.jsx(n.li,{children:"You need full editorial control"}),`
`]}),`
`,e.jsx(n.p,{children:"In this mode, the table renders custom headings and items."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"2-api-mode",children:"2. API Mode"}),`
`,e.jsx(n.p,{children:"Enabled when:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Render API"})," is turned on"]}),`
`,e.jsx(n.li,{children:"Data is fetched dynamically from an external endpoint"}),`
`]}),`
`,e.jsx(n.p,{children:"Supported APIs include:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Majors and Minors"}),`
`,e.jsx(n.li,{children:"Department Courses"}),`
`,e.jsx(n.li,{children:"Course Catalogue"}),`
`,e.jsx(n.li,{children:"Departments"}),`
`,e.jsx(n.li,{children:"Offices"}),`
`]}),`
`,e.jsx(n.p,{children:"API mode enables advanced features such as:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Filtering"}),`
`,e.jsx(n.li,{children:"Search"}),`
`,e.jsx(n.li,{children:"Pagination"}),`
`,e.jsx(n.li,{children:"Dynamic headings"}),`
`,e.jsx(n.li,{children:"Department/term filtering"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"render-api",children:"Render API"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Render API"})," toggle determines whether the table loads data dynamically."]}),`
`,e.jsx(n.p,{children:"When enabled:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Data is fetched from external endpoints"}),`
`,e.jsx(n.li,{children:"Search, filters, and pagination become active"}),`
`,e.jsx(n.li,{children:"Table structure is generated automatically"}),`
`]}),`
`,e.jsx(n.p,{children:"When disabled:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The table uses manually defined content"}),`
`,e.jsx(n.li,{children:"API features are not available"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"api-selection",children:"API Selection"}),`
`,e.jsxs(n.p,{children:["When using API mode, the ",e.jsx(n.strong,{children:"API field"})," determines the dataset source."]}),`
`,e.jsx(n.p,{children:"Each option controls:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Data structure"}),`
`,e.jsx(n.li,{children:"Available filters"}),`
`,e.jsx(n.li,{children:"Column layout"}),`
`,e.jsx(n.li,{children:"Heading configuration"}),`
`]}),`
`,e.jsx(n.h3,{id:"common-api-types",children:"Common API types:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Course Catalogue"})," – full course listings"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Department Courses"})," – courses filtered by department"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Majors and Minors"})," – academic programs"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Departments"})," – department directory"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Offices"})," – administrative listings"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"department-code",children:"Department Code"}),`
`,e.jsxs(n.p,{children:["Used when the API is set to ",e.jsx(n.strong,{children:"Department Courses"}),"."]}),`
`,e.jsx(n.p,{children:"This field:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Filters courses by selected department"}),`
`,e.jsx(n.li,{children:"Limits results to a specific academic area"}),`
`,e.jsx(n.li,{children:"Is required in Department Courses mode"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"items-per-page",children:"Items Per Page"}),`
`,e.jsx(n.p,{children:"Controls pagination behavior in API mode."}),`
`,e.jsx(n.p,{children:"It defines:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"How many items appear per page"}),`
`,e.jsx(n.li,{children:"Default pagination size for results"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"headings-static-mode",children:"Headings (Static Mode)"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Headings"})," field defines table column headers when not using API mode."]}),`
`,e.jsx(n.p,{children:"Each heading:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Represents a column label"}),`
`,e.jsx(n.li,{children:"Is displayed in the table header row"}),`
`,e.jsx(n.li,{children:"Should match the structure of the item columns"}),`
`]}),`
`,e.jsx(n.p,{children:"Example:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Name"}),`
`,e.jsx(n.li,{children:"Course Number"}),`
`,e.jsx(n.li,{children:"Description"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"items-static-mode",children:"Items (Static Mode)"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Items"})," repeater defines table rows when not using API mode."]}),`
`,e.jsx(n.p,{children:"Each item can include:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Image (optional)"}),`
`,e.jsx(n.li,{children:"Title"}),`
`,e.jsx(n.li,{children:"Link"}),`
`,e.jsx(n.li,{children:"Columns (data cells)"}),`
`]}),`
`,e.jsx(n.p,{children:"Items are rendered as structured rows in the table."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"columns",children:"Columns"}),`
`,e.jsxs(n.p,{children:["Each item can contain multiple ",e.jsx(n.strong,{children:"columns"}),", which define:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Table cell content"}),`
`,e.jsx(n.li,{children:"Text or linked values (depending on configuration)"}),`
`,e.jsx(n.li,{children:"Row-based structured data"}),`
`]}),`
`,e.jsx(n.p,{children:"In API mode, columns are generated automatically based on dataset type."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"search-functionality",children:"Search Functionality"}),`
`,e.jsx(n.p,{children:"The Table block includes full-text search powered by Fuse.js."}),`
`,e.jsx(n.p,{children:"Search behavior:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Matches across title, description, and faculty fields"}),`
`,e.jsx(n.li,{children:"Updates results in real time"}),`
`,e.jsx(n.li,{children:"Resets pagination when active"}),`
`]}),`
`,e.jsx(n.p,{children:"Search is only available in API or external data modes."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"filtering",children:"Filtering"}),`
`,e.jsx(n.p,{children:"The Table block supports multiple filter types depending on dataset:"}),`
`,e.jsx(n.h3,{id:"term-filter",children:"Term Filter"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Filters by academic term (Fall, Spring, January)"}),`
`,e.jsx(n.li,{children:"Available in course-related APIs"}),`
`]}),`
`,e.jsx(n.h3,{id:"department-filter",children:"Department Filter"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Filters results by department code"}),`
`,e.jsx(n.li,{children:"Used in course catalogue and department views"}),`
`]}),`
`,e.jsx(n.h3,{id:"division-filter",children:"Division Filter"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Groups departments into broader academic divisions"}),`
`,e.jsx(n.li,{children:"Examples: Humanities, Natural Sciences, Social Sciences"}),`
`]}),`
`,e.jsx(n.p,{children:"Filters update results dynamically and reset pagination."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"pagination",children:"Pagination"}),`
`,e.jsx(n.p,{children:"Pagination is automatically enabled when using API or external data."}),`
`,e.jsx(n.p,{children:"It includes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Page navigation controls"}),`
`,e.jsx(n.li,{children:"Next / Previous buttons"}),`
`,e.jsx(n.li,{children:"Page number selection"}),`
`,e.jsx(n.li,{children:"Result count summary"}),`
`]}),`
`,e.jsx(n.p,{children:"Example behavior:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"“Showing 10 of 120 results”"}),`
`,e.jsx(n.li,{children:"Navigation between pages without reload"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"table-layout-behavior",children:"Table Layout Behavior"}),`
`,e.jsx(n.h3,{id:"responsive-design",children:"Responsive Design"}),`
`,e.jsx(n.p,{children:"The table adapts to screen size:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Desktop:"})," Full table layout"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tablet:"})," Horizontal scroll if needed"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Mobile:"})," Scrollable table container"]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h3,{id:"row-structure",children:"Row Structure"}),`
`,e.jsx(n.p,{children:"Each row includes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Primary content cell (title, image, or modal trigger)"}),`
`,e.jsx(n.li,{children:"Additional columns for structured data"}),`
`,e.jsx(n.li,{children:"Alternating row background for readability"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"images-and-people-display",children:"Images and People Display"}),`
`,e.jsx(n.p,{children:"When image data is present:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A circular avatar is shown"}),`
`,e.jsx(n.li,{children:"Name is displayed alongside the image"}),`
`,e.jsx(n.li,{children:"Clicking navigates to profile or detail page"}),`
`]}),`
`,e.jsx(n.p,{children:"Used primarily in:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"People directory"}),`
`,e.jsx(n.li,{children:"Staff listings"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"modal-content",children:"Modal Content"}),`
`,e.jsx(n.p,{children:"Some table items include expandable modal content."}),`
`,e.jsx(n.p,{children:"This is used for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Course descriptions"}),`
`,e.jsx(n.li,{children:"Detailed academic information"}),`
`]}),`
`,e.jsx(n.p,{children:"Behavior:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Clicking a link opens a modal"}),`
`,e.jsx(n.li,{children:"Modal displays structured content (title + description)"}),`
`,e.jsx(n.li,{children:"Content is formatted with HTML where needed"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"external-data-support",children:"External Data Support"}),`
`,e.jsx(n.p,{children:"The Table block can accept externally passed items for:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"People"}),`
`,e.jsx(n.li,{children:"Offices"}),`
`,e.jsx(n.li,{children:"Departments"}),`
`]}),`
`,e.jsx(n.p,{children:"Each type maps to a specific structure and URL format."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:"The Table block is built with accessibility in mind:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Semantic ",e.jsx(n.code,{children:"<table>"})," structure"]}),`
`,e.jsx(n.li,{children:"Keyboard navigable controls"}),`
`,e.jsx(n.li,{children:"Search and filters are form-label accessible"}),`
`,e.jsx(n.li,{children:"Pagination buttons are screen-reader friendly"}),`
`,e.jsx(n.li,{children:"Images include alt text where applicable"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"performance-notes",children:"Performance Notes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"API data is loaded asynchronously"}),`
`,e.jsx(n.li,{children:"Fuse.js search is initialized after data load"}),`
`,e.jsx(n.li,{children:"Pagination is computed client-side"}),`
`,e.jsx(n.li,{children:"URL parameters are used to preserve state"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tips-for-best-results",children:"Tips for Best Results"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use API mode for large or dynamic datasets"}),`
`,e.jsx(n.li,{children:"Keep static tables small and highly curated"}),`
`,e.jsx(n.li,{children:"Ensure column headings match content structure"}),`
`,e.jsx(n.li,{children:"Avoid overloading with too many filters"}),`
`,e.jsx(n.li,{children:"Use clear, consistent naming for items and columns"}),`
`]})]})}function g(i={}){const{wrapper:n}={...l(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{g as default};
