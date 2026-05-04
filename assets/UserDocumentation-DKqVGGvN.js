import{u as t,j as e,M as r,C as d}from"./blocks-SW8ogdK5.js";import{VideoEmbed as l}from"./Embed.stories-FxRZK7J8.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-JoPPn0qi.js";import"./Embed-BJM6LcEk.js";function i(s){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Blocks/Embed/Documentation"}),`
`,e.jsx(n.h1,{id:"embed",children:"Embed"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Embed"})," block allows editors to insert third-party embedded content directly into a page.",e.jsx(n.br,{}),`
`,"This includes media and interactive widgets such as videos, social media posts, maps, and external tools."]}),`
`,e.jsxs(n.p,{children:["Content is added by pasting the ",e.jsx(n.strong,{children:"embed code provided by the service"})," you want to display."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"when-to-use-this-block",children:"When to Use This Block"}),`
`,e.jsx(n.p,{children:"Use the Embed block when:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"You need to display content hosted on another platform"}),`
`,e.jsxs(n.li,{children:["The platform provides ",e.jsx(n.strong,{children:"embed code (usually an iframe or script)"})]}),`
`,e.jsx(n.li,{children:"The content cannot be recreated using standard blocks"}),`
`]}),`
`,e.jsx(n.h3,{id:"example-uses",children:"Example uses"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"YouTube or Vimeo videos"}),`
`,e.jsx(n.li,{children:"Google Maps"}),`
`,e.jsx(n.li,{children:"Social media posts (X/Twitter, Instagram)"}),`
`,e.jsx(n.li,{children:"Weather widgets"}),`
`,e.jsx(n.li,{children:"Event widgets"}),`
`,e.jsx(n.li,{children:"External tools or calculators"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"preview",children:"Preview"}),`
`,e.jsx(d,{of:l}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"adding-an-embed",children:"Adding an Embed"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Find the ",e.jsx(n.strong,{children:"Embed"})," or ",e.jsx(n.strong,{children:"Share"})," option on the platform you want to embed."]}),`
`,e.jsxs(n.li,{children:["Copy the ",e.jsx(n.strong,{children:"embed code"})," provided."]}),`
`,e.jsxs(n.li,{children:["Paste the full code snippet into the ",e.jsx(n.strong,{children:"Embed field"}),"."]}),`
`]}),`
`,e.jsx(n.p,{children:"The block will render the embedded content automatically when the page is viewed."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"supported-content",children:"Supported Content"}),`
`,e.jsx(n.p,{children:"Most services that provide embed code will work correctly. Common examples include:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Video platforms"})," – YouTube, Vimeo"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Social media"})," – X (Twitter), Instagram"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Maps"})," – Google Maps"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Widgets"})," – Weather, event listings, booking tools"]}),`
`]}),`
`,e.jsxs(n.p,{children:["If the platform provides an ",e.jsx(n.strong,{children:"iframe or script-based embed"}),", it will usually work."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"content-field",children:"Content Field"}),`
`,e.jsx(n.p,{children:"The Embed block contains a single field:"}),`
`,e.jsx(n.h3,{id:"embed-1",children:"Embed"}),`
`,e.jsxs(n.p,{children:["Paste the ",e.jsx(n.strong,{children:"full embed code"})," from the external service."]}),`
`,e.jsx(n.p,{children:"This may include:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<iframe>"})," embeds"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<script>"})," widgets"]}),`
`,e.jsx(n.li,{children:"HTML snippets provided by the platform"}),`
`]}),`
`,e.jsxs(n.p,{children:["Do ",e.jsx(n.strong,{children:"not"})," paste just a URL unless the platform explicitly supports it."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"layout-behavior",children:"Layout Behavior"}),`
`,e.jsx(n.h3,{id:"full-content-width",children:"Full Content Width"}),`
`,e.jsx(n.p,{children:"Embedded content fills the available content width of the page section."}),`
`,e.jsx(n.p,{children:"The exact appearance depends on the external service and its embed settings."}),`
`,e.jsx(n.h3,{id:"responsive-behavior",children:"Responsive Behavior"}),`
`,e.jsx(n.p,{children:"Most modern embeds automatically adjust to different screen sizes. However, behavior ultimately depends on how the third-party widget is built."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"tips-for-best-results",children:"Tips for Best Results"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Always paste the ",e.jsx(n.strong,{children:"entire embed snippet"}),", not just part of it."]}),`
`,e.jsxs(n.li,{children:["Use the ",e.jsx(n.strong,{children:"preview"})," to confirm the embed displays correctly."]}),`
`,e.jsxs(n.li,{children:["Avoid embedding ",e.jsx(n.strong,{children:"multiple heavy widgets"})," in the same section to maintain page performance."]}),`
`,e.jsx(n.li,{children:"If an embed looks too large or too small, check the settings on the source platform before copying the embed code."}),`
`,e.jsxs(n.li,{children:["When embedding social posts, ensure the content is ",e.jsx(n.strong,{children:"publicly accessible"}),"."]}),`
`]})]})}function p(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{p as default};
