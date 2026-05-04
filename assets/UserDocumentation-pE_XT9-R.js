import{u as l,j as n,M as r,C as t}from"./blocks-CBNW1dJD.js";import{Default as o}from"./SectionNav.stories-ARHvHnEm.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-o8pGYXWK.js";import"./SectionNav-DYjerGzy.js";import"./index-D4-8ALNT.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";function s(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...l(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Blocks/Section Navigation/Documentation"}),`
`,n.jsx(i.h1,{id:"section-navigation",children:"Section Navigation"}),`
`,n.jsxs(i.p,{children:["The ",n.jsx(i.strong,{children:"Section Navigation"})," block provides a horizontal, scrollable navigation bar that helps users quickly jump to key sections within a page."]}),`
`,n.jsx(i.p,{children:"It is typically placed near the top of long-form content to improve usability and reduce scrolling friction."}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h2,{id:"when-to-use-this-block",children:"When to Use This Block"}),`
`,n.jsx(i.p,{children:"Use the Section Navigation block when:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"A page contains multiple distinct sections"}),`
`,n.jsx(i.li,{children:"You want to improve in-page navigation"}),`
`,n.jsx(i.li,{children:"Users need quick access to key anchors or content areas"}),`
`,n.jsx(i.li,{children:"You want to reduce scrolling on long pages"}),`
`]}),`
`,n.jsx(i.h3,{id:"example-uses",children:"Example uses:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Long editorial articles with multiple chapters"}),`
`,n.jsx(i.li,{children:"Service or product pages with anchored sections"}),`
`,n.jsx(i.li,{children:"Guides, resources, or documentation pages"}),`
`,n.jsx(i.li,{children:"Landing pages with structured content blocks"}),`
`]}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h2,{id:"preview",children:"Preview"}),`
`,n.jsx(t,{of:o}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h2,{id:"title",children:"Title"}),`
`,n.jsxs(i.p,{children:["The ",n.jsx(i.strong,{children:"Title"})," field defines the label shown at the start of the navigation row."]}),`
`,n.jsx(i.p,{children:"It:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Appears on the left side of the navigation bar"}),`
`,n.jsx(i.li,{children:"Acts as a contextual label for the links"}),`
`,n.jsx(i.li,{children:"Is typically short and descriptive"}),`
`]}),`
`,n.jsx(i.h3,{id:"default-value",children:"Default value:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:n.jsx(i.code,{children:"In this section:"})}),`
`]}),`
`,n.jsx(i.p,{children:"You may update this to match page tone or structure, for example:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"“On this page:”"}),`
`,n.jsx(i.li,{children:"“Jump to:”"}),`
`,n.jsx(i.li,{children:"“Explore:”"}),`
`]}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h2,{id:"items",children:"Items"}),`
`,n.jsxs(i.p,{children:["The ",n.jsx(i.strong,{children:"Items"})," field is a repeater used to define navigation links."]}),`
`,n.jsx(i.p,{children:"Each item includes:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Link"})," – URL and display text for navigation"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Icon Class"})," – Material icon name displayed next to the label"]}),`
`]}),`
`,n.jsx(i.p,{children:"These items are rendered as clickable navigation links in a horizontal list."}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h2,{id:"link-behavior",children:"Link Behavior"}),`
`,n.jsx(i.p,{children:"Each navigation item:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Navigates to a section anchor or URL"}),`
`,n.jsx(i.li,{children:"Supports internal and external links"}),`
`,n.jsx(i.li,{children:"Is keyboard accessible and screen-reader friendly"}),`
`,n.jsx(i.li,{children:"Displays an optional icon before the label"}),`
`]}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h2,{id:"layout-behavior",children:"Layout Behavior"}),`
`,n.jsx(i.h3,{id:"horizontal-scroll-navigation",children:"Horizontal Scroll Navigation"}),`
`,n.jsx(i.p,{children:"The Section Navigation block is displayed as a horizontal row:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Desktop:"})," Inline centered navigation"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Tablet:"})," Condensed spacing with possible overflow scroll"]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Mobile:"})," Horizontal scroll enabled for accessibility"]}),`
`]}),`
`,n.jsx(i.p,{children:"If items exceed the viewport width, users can scroll horizontally."}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h2,{id:"animation-behavior",children:"Animation Behavior"}),`
`,n.jsx(i.p,{children:"The block includes a subtle entrance animation:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Items fade in and slide into place"}),`
`,n.jsx(i.li,{children:"Staggered animation creates sequential reveal"}),`
`,n.jsx(i.li,{children:"Improves perceived performance and visual polish"}),`
`]}),`
`,n.jsx(i.h3,{id:"bot-handling",children:"Bot Handling"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Animations are disabled for bot visitors"}),`
`,n.jsx(i.li,{children:"Items render instantly when motion is disabled"}),`
`]}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h2,{id:"content-structure",children:"Content Structure"}),`
`,n.jsx(i.p,{children:"Each navigation item consists of:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Optional icon"}),`
`,n.jsx(i.li,{children:"Link text"}),`
`,n.jsx(i.li,{children:"URL or anchor destination"}),`
`]}),`
`,n.jsx(i.p,{children:"The title acts as a contextual label for the group."}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h2,{id:"visual-hierarchy",children:"Visual Hierarchy"}),`
`,n.jsx(i.p,{children:"The structure follows a simple hierarchy:"}),`
`,n.jsxs(i.ol,{children:[`
`,n.jsx(i.li,{children:"Title label (left)"}),`
`,n.jsx(i.li,{children:"Navigation items (horizontal row)"}),`
`]}),`
`,n.jsx(i.p,{children:"This keeps the interface compact and scannable."}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h2,{id:"accessibility",children:"Accessibility"}),`
`,n.jsx(i.p,{children:"The Section Navigation block is accessible by design:"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:["Semantic heading (",n.jsx(i.code,{children:"h2"}),") for the title"]}),`
`,n.jsx(i.li,{children:"Keyboard-navigable links"}),`
`,n.jsx(i.li,{children:"Visible focus states"}),`
`,n.jsx(i.li,{children:"Icons are decorative and do not replace text"}),`
`,n.jsx(i.li,{children:"Maintains logical tab order even with horizontal scrolling"}),`
`]}),`
`,n.jsx(i.hr,{}),`
`,n.jsx(i.h2,{id:"tips-for-best-results",children:"Tips for Best Results"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsx(i.li,{children:"Keep item labels short and meaningful"}),`
`,n.jsx(i.li,{children:"Avoid too many navigation items"}),`
`,n.jsx(i.li,{children:"Ensure links point to valid sections or pages"}),`
`,n.jsx(i.li,{children:"Use icons consistently and sparingly"}),`
`,n.jsx(i.li,{children:"Place near the top of the page for best usability"}),`
`]})]})}function g(e={}){const{wrapper:i}={...l(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(s,{...e})}):s(e)}export{g as default};
