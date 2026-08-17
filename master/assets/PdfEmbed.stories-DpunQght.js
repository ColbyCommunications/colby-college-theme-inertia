import{_ as o}from"./PdfEmbed-DlGsHRci.js";import"./iframe-QQMV8ndi.js";import"./preload-helper-CNn__nYE.js";const p={title:"Core Components/Pdf Embed",component:o,tags:["autodocs"],argTypes:{blockData:{control:"object"}}},e={args:{blockData:{pdf_url:"https://museum-backend.colby.edu/wp-content/uploads/2025/04/2023–28-Colby-Museum_Strategic-Direction.pdf",page_spread:"single"}}},a={args:{blockData:{pdf_url:"https://museum-backend.colby.edu/wp-content/uploads/2025/04/2023–28-Colby-Museum_Strategic-Direction.pdf",page_spread:"two"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    blockData: {
      pdf_url: 'https://museum-backend.colby.edu/wp-content/uploads/2025/04/2023–28-Colby-Museum_Strategic-Direction.pdf',
      page_spread: 'single' // Anything other than 'two' maps to SpreadMode.None
    }
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    blockData: {
      pdf_url: 'https://museum-backend.colby.edu/wp-content/uploads/2025/04/2023–28-Colby-Museum_Strategic-Direction.pdf',
      page_spread: 'two' // Maps to SpreadMode.Odd
    }
  }
}`,...a.parameters?.docs?.source}}};const n=["SinglePageSpread","TwoPageSpread"];export{e as SinglePageSpread,a as TwoPageSpread,n as __namedExportsOrder,p as default};
