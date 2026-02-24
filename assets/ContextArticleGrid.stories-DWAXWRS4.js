import{_ as c}from"./ContextArticleGrid-D_Nge27g.js";import"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C0Zqfgkc.js";import"./Context-Dp7yX81d.js";import"./TextGroup-T77HtXsG.js";import"./ButtonGroup-DeVPz35K.js";import"./Button-u50yI3p6.js";import"./Article-D1DehH2s.js";import"./Picture-CxKtrm5G.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,v={title:"Core Components/Context Article Grid",component:c,argTypes:{heading:{control:"text"},subheading:{control:"text"},paragraph:{control:"text"},cta:{control:"text"},renderApi:{control:"boolean",description:"If true, fetches data from WP API. If false, uses 'items' prop."},api:{control:"select",options:["","Arts","Alumni"],description:"Changes the WP API endpoint filter",if:{arg:"renderApi",eq:!0}},perPage:{control:{type:"number",min:1,max:6}},items:{control:"object"}},parameters:{layout:"padded"}},o=e=>({components:{ContextArticleGrid:c},setup(){return{args:e}},template:'<ContextArticleGrid v-bind="args" />'}),l=[{image:{sizes:{desktop:"https://placehold.co/600x400/012169/ffffff?text=Desktop+Image+1",mobile:"https://placehold.co/300x300/012169/ffffff?text=Mobile+Image+1"},alt:"Abstract academic concept"},subheading:"Academics",heading:"Innovative Research in Biology",paragraph:"Students and faculty collaborate on groundbreaking research that reshapes our understanding of local ecosystems.",buttons:[{button:{url:"#",title:"Read Article"}}]},{image:{sizes:{desktop:"https://placehold.co/600x400/366bcf/ffffff?text=Desktop+Image+2"},alt:"Art gallery display"},subheading:"The Arts",heading:"New Gallery Exhibition Opens",paragraph:"The museum presents a collection of modern works that challenge perspective and form.",buttons:[{button:{url:"#",title:"View Gallery"}}]},{image:{sizes:{desktop:"https://placehold.co/600x400/gray/white?text=Desktop+Image+3"},alt:"Alumni event"},subheading:"Community",heading:"Alumni Weekend 2024",paragraph:"Join us for a weekend of celebration, networking, and reconnecting with old friends.",buttons:[]}],n={render:o,args:{renderApi:!1,subheading:"Latest Updates",heading:"News & Stories",paragraph:"Explore the latest happenings from around the campus and beyond.",cta:"Read Story",items:l},play:async({canvas:e})=>{const t=await e.findByText("News & Stories");await a(t).toBeVisible();const d=await e.findByText("Innovative Research in Biology");await a(d).toBeVisible();const p=await e.findByText("New Gallery Exhibition Opens");await a(p).toBeVisible()}},r={render:o,args:{renderApi:!0,api:"",perPage:3,subheading:"From the Feed",heading:"Latest News (Live API)",paragraph:"These items are fetched directly from news.colby.edu.",cta:"Read Full Story"},play:async({canvas:e})=>{const t=await e.findByText("Latest News (Live API)");await a(t).toBeVisible()}},i={render:o,args:{renderApi:!0,api:"Arts",perPage:3,subheading:"From the Feed",heading:"Arts & Culture (Live API)",paragraph:"Fetching posts with the Arts category tag.",cta:"Read Full Story"},play:async({canvas:e})=>{const t=await e.findByText("Arts & Culture (Live API)");await a(t).toBeVisible()}},s={render:o,args:{renderApi:!0,api:"Alumni",perPage:3,subheading:"From the Feed",heading:"Alumni News (Live API)",paragraph:"Fetching posts with the Alumni category tag.",cta:"Read Full Story"},play:async({canvas:e})=>{const t=await e.findByText("Alumni News (Live API)");await a(t).toBeVisible()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    renderApi: false,
    subheading: "Latest Updates",
    heading: "News & Stories",
    paragraph: "Explore the latest happenings from around the campus and beyond.",
    cta: "Read Story",
    items: mockItems
  },
  play: async ({
    canvas
  }) => {
    // Assert the section heading renders
    const heading = await canvas.findByText("News & Stories");
    await expect(heading).toBeVisible();

    // Assert article content from mock data renders
    const articleHeading = await canvas.findByText("Innovative Research in Biology");
    await expect(articleHeading).toBeVisible();
    const articleHeading2 = await canvas.findByText("New Gallery Exhibition Opens");
    await expect(articleHeading2).toBeVisible();
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    renderApi: true,
    api: "",
    // Default endpoint
    perPage: 3,
    subheading: "From the Feed",
    heading: "Latest News (Live API)",
    paragraph: "These items are fetched directly from news.colby.edu.",
    cta: "Read Full Story"
  },
  play: async ({
    canvas
  }) => {
    // API variant: just assert the heading renders (skip API interaction)
    const heading = await canvas.findByText("Latest News (Live API)");
    await expect(heading).toBeVisible();
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    renderApi: true,
    api: "Arts",
    perPage: 3,
    subheading: "From the Feed",
    heading: "Arts & Culture (Live API)",
    paragraph: "Fetching posts with the Arts category tag.",
    cta: "Read Full Story"
  },
  play: async ({
    canvas
  }) => {
    // API variant: just assert the heading renders (skip API interaction)
    const heading = await canvas.findByText("Arts & Culture (Live API)");
    await expect(heading).toBeVisible();
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    renderApi: true,
    api: "Alumni",
    perPage: 3,
    subheading: "From the Feed",
    heading: "Alumni News (Live API)",
    paragraph: "Fetching posts with the Alumni category tag.",
    cta: "Read Full Story"
  },
  play: async ({
    canvas
  }) => {
    // API variant: just assert the heading renders (skip API interaction)
    const heading = await canvas.findByText("Alumni News (Live API)");
    await expect(heading).toBeVisible();
  }
}`,...s.parameters?.docs?.source}}};const I=["ManualData","ApiGeneral","ApiArts","ApiAlumni"];export{s as ApiAlumni,i as ApiArts,r as ApiGeneral,n as ManualData,I as __namedExportsOrder,v as default};
