import{_ as u}from"./ArticleGrid-KXy-Onmo.js";import"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C0Zqfgkc.js";import"./TextGroup-T77HtXsG.js";import"./Article-D1DehH2s.js";import"./ButtonGroup-DeVPz35K.js";import"./Button-u50yI3p6.js";import"./Picture-CxKtrm5G.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,i=[{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag"},heading:"Future of Artificial Intelligence",subheading:"Technology",paragraph:"AI is reshaping industries at an unprecedented pace.",url:"#",sizes:{desktop:"https://placehold.co/600x400",mobile:"https://placehold.co/300x200"}},{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag"},heading:"Sustainable Energy Solutions",subheading:"Environment",paragraph:"Solar and wind energy are becoming more accessible than ever.",url:"#",sizes:{desktop:"https://placehold.co/600x400",mobile:"https://placehold.co/300x200"}},{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag"},heading:"Modern Architecture Trends",subheading:"Design",paragraph:"Exploring the intersection of function and aesthetics in 2024.",url:"#",sizes:{desktop:"https://placehold.co/600x400",mobile:"https://placehold.co/300x200"}}],S={title:"Core Components/Article Grid",component:u},n=e=>({components:{ArticleGrid:u},setup(){return{args:e}},template:'<ArticleGrid v-bind="args" />'}),o={render:n,args:{display_posts_method:"manual",columns:3,cta:"Read Story",items:i,border:0},play:async({canvas:e})=>{const a=await e.findByText("Future of Artificial Intelligence");await t(a).toBeVisible();const s=await e.findByText("Sustainable Energy Solutions");await t(s).toBeVisible();const h=await e.findByText("Modern Architecture Trends");await t(h).toBeVisible()}},r={render:n,args:{display_posts_method:"manual",style:"accordion",columns:3,render_api:!1,items:i},play:async({canvas:e,userEvent:a})=>{const s=await e.findByText("Future of Artificial Intelligence");await t(s).toBeVisible();const h=await e.findAllByText("Read More");await a.click(h[0]);const g=await e.findAllByText("AI is reshaping industries at an unprecedented pace.");await t(g.length).toBeGreaterThanOrEqual(1)}},d={render:n,args:{display_posts_method:"internal",render_posts_category:1,post_limit:3},play:async({canvasElement:e})=>{await t(e.querySelector(".grid")).not.toBeNull()}},c={render:n,args:{display_posts_method:"manual",columns:2,cta:"Read Story",items:i.slice(0,2),border:0},play:async({canvas:e})=>{const a=await e.findByText("Future of Artificial Intelligence");await t(a).toBeVisible();const s=await e.findByText("Sustainable Energy Solutions");await t(s).toBeVisible()}},l={render:n,args:{display_posts_method:"manual",columns:4,cta:"Read Story",items:[...i,{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w",alt:"alt tag"},heading:"Global Health Initiatives",subheading:"Health",paragraph:"New programs in global health studies.",url:"#",sizes:{desktop:"https://placehold.co/600x400",mobile:"https://placehold.co/300x200"}}],border:0},play:async({canvas:e})=>{const a=await e.findByText("Global Health Initiatives");await t(a).toBeVisible()}},p={render:n,args:{display_posts_method:"manual",columns:3,cta:"Read Story",items:i,border:1},play:async({canvas:e})=>{const a=await e.findByText("Future of Artificial Intelligence");await t(a).toBeVisible()}},m={render:n,args:{display_posts_method:"manual",style:"accordion",columns:3,render_api:!1,items:i.map(({buttons:e,...a})=>a)},play:async({canvas:e})=>{const a=await e.findByText("Future of Artificial Intelligence");await t(a).toBeVisible()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    display_posts_method: "manual",
    columns: 3,
    cta: "Read Story",
    items: mockItems,
    border: 0
  },
  play: async ({
    canvas
  }) => {
    const heading1 = await canvas.findByText("Future of Artificial Intelligence");
    await expect(heading1).toBeVisible();
    const heading2 = await canvas.findByText("Sustainable Energy Solutions");
    await expect(heading2).toBeVisible();
    const heading3 = await canvas.findByText("Modern Architecture Trends");
    await expect(heading3).toBeVisible();
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    display_posts_method: "manual",
    // Use manual to feed data to the accordion
    style: "accordion",
    columns: 3,
    render_api: false,
    // Ensure we don't accidentally hide the accordion div
    items: mockItems
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    // Assert headings render in accordion mode
    const heading1 = await canvas.findByText("Future of Artificial Intelligence");
    await expect(heading1).toBeVisible();

    // Click the first "Read More" button to expand
    const readMoreButtons = await canvas.findAllByText("Read More");
    await userEvent.click(readMoreButtons[0]);

    // After clicking, the paragraph text may appear in multiple places
    // (article summary and expanded accordion panel), so use findAllByText
    const expandedContents = await canvas.findAllByText("AI is reshaping industries at an unprecedented pace.");
    await expect(expandedContents.length).toBeGreaterThanOrEqual(1);
  }
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    display_posts_method: "internal",
    render_posts_category: 1,
    post_limit: 3
  },
  play: async ({
    canvasElement
  }) => {
    // Internal fetch mode renders the grid shell even without a live API
    await expect(canvasElement.querySelector(".grid")).not.toBeNull();
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    display_posts_method: "manual",
    columns: 2,
    cta: "Read Story",
    items: mockItems.slice(0, 2),
    border: 0
  },
  play: async ({
    canvas
  }) => {
    const heading1 = await canvas.findByText("Future of Artificial Intelligence");
    await expect(heading1).toBeVisible();
    const heading2 = await canvas.findByText("Sustainable Energy Solutions");
    await expect(heading2).toBeVisible();
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    display_posts_method: "manual",
    columns: 4,
    cta: "Read Story",
    items: [...mockItems, {
      image: {
        src: "https://placeholdit.com/600x400/dddddd/999999",
        srcset: "https://placeholdit.com/300x200/dddddd/999999 300w",
        alt: "alt tag"
      },
      heading: "Global Health Initiatives",
      subheading: "Health",
      paragraph: "New programs in global health studies.",
      url: "#",
      sizes: {
        desktop: "https://placehold.co/600x400",
        mobile: "https://placehold.co/300x200"
      }
    }],
    border: 0
  },
  play: async ({
    canvas
  }) => {
    const heading = await canvas.findByText("Global Health Initiatives");
    await expect(heading).toBeVisible();
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    display_posts_method: "manual",
    columns: 3,
    cta: "Read Story",
    items: mockItems,
    border: 1
  },
  play: async ({
    canvas
  }) => {
    const heading = await canvas.findByText("Future of Artificial Intelligence");
    await expect(heading).toBeVisible();
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    display_posts_method: "manual",
    style: "accordion",
    columns: 3,
    render_api: false,
    items: mockItems.map(({
      buttons,
      ...item
    }) => item)
  },
  play: async ({
    canvas
  }) => {
    const heading = await canvas.findByText("Future of Artificial Intelligence");
    await expect(heading).toBeVisible();
  }
}`,...m.parameters?.docs?.source}}};const I=["ManualGrid","Accordion","InternalFetch","TwoColumnGrid","FourColumnGrid","WithBorder","AccordionNoButtons"];export{r as Accordion,m as AccordionNoButtons,l as FourColumnGrid,d as InternalFetch,o as ManualGrid,c as TwoColumnGrid,p as WithBorder,I as __namedExportsOrder,S as default};
