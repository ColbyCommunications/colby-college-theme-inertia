import{a as s}from"./index-42ANG6Sg.js";import{_ as m}from"./ContextArticleGrid-CtU3qQfR.js";import{a as p}from"./mock-data-iuhpH0Ld.js";import"./iframe-CvNZnjYP.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-BS20kXIO.js";import"./TextGroup-CjPuY8dA.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-D1Vp_gOm.js";import"./Button-9GO_4rSf.js";import"./Article-BBJsjAwj.js";import"./Picture-DxAwEOEM.js";const{expect:t,spyOn:g,waitFor:h}=__STORYBOOK_MODULE_TEST__,y="https://news.colby.edu/wp-json/wp/v2/posts?per_page=6&tags=569&_embed=1",w="https://news.colby.edu/wp-json/wp/v2/posts?per_page=3&categories=8&_embed=1",f="https://news.colby.edu/wp-json/wp/v2/posts?per_page=3&categories=6&_embed=1",_={title:"Core Components/Context Article Grid",component:m,argTypes:{heading:{control:"text"},subheading:{control:"text"},paragraph:{control:"text"},cta:{control:"text"},renderApi:{control:"boolean",description:"If true, fetches data from WP API. If false, uses 'items' prop."},api:{control:"select",options:["","Arts","Alumni"],description:"Changes the WP API endpoint filter",if:{arg:"renderApi",eq:!0}},perPage:{control:{type:"number",min:1,max:6}},items:{control:"object"}},parameters:{layout:"padded"}},d=e=>({components:{ContextArticleGrid:m},setup(){return{args:e}},template:'<ContextArticleGrid v-bind="args" />'}),x=[{image:{sizes:{desktop:"https://placehold.co/600x400/012169/ffffff?text=Desktop+Image+1",mobile:"https://placehold.co/300x300/012169/ffffff?text=Mobile+Image+1"},alt:"Abstract academic concept"},subheading:"Academics",heading:"Innovative Research in Biology",paragraph:"Students and faculty collaborate on groundbreaking research that reshapes our understanding of local ecosystems.",buttons:[{button:{url:"#",title:"Read Article"}}]},{image:{sizes:{desktop:"https://placehold.co/600x400/366bcf/ffffff?text=Desktop+Image+2"},alt:"Art gallery display"},subheading:"The Arts",heading:"New Gallery Exhibition Opens",paragraph:"The museum presents a collection of modern works that challenge perspective and form.",buttons:[{button:{url:"#",title:"View Gallery"}}]},{image:{sizes:{desktop:"https://placehold.co/600x400/gray/white?text=Desktop+Image+3"},alt:"Alumni event"},subheading:"Community",heading:"Alumni Weekend 2024",paragraph:"Join us for a weekend of celebration, networking, and reconnecting with old friends.",buttons:[]}],o={render:d,args:{renderApi:!1,subheading:"Latest Updates",heading:"News & Stories",paragraph:"Explore the latest happenings from around the campus and beyond.",cta:"Read Story",items:x},play:async({canvas:e})=>{const a=await e.findByText("News & Stories");await t(a).toBeVisible();const n=await e.findByText("Innovative Research in Biology");await t(n).toBeVisible();const i=await e.findByText("New Gallery Exhibition Opens");await t(i).toBeVisible()}},r={render:d,args:{renderApi:!0,api:"",perPage:3,subheading:"From the Feed",heading:"Latest News",paragraph:"These items are fetched from a mocked API.",cta:"Read Full Story"},beforeEach:()=>{const e=g(s,"get").mockResolvedValue({data:p(3)});return()=>e.mockRestore()},play:async({canvas:e})=>{const a=await e.findByText("Latest News");await t(a).toBeVisible();const n=await e.findByText("Innovative Research in Marine Biology");await t(n).toBeVisible(),await h(()=>{t(s.get).toHaveBeenCalledWith(y)});const i=await e.findByText("New Gallery Exhibition Opens This Fall");await t(i).toBeVisible();const u=e.getAllByText("Read Full Story");await t(u.length).toBe(3)}},c={render:d,args:{renderApi:!0,api:"Arts",perPage:3,subheading:"From the Feed",heading:"Arts & Culture",paragraph:"Fetching posts with the Arts category tag.",cta:"Read Full Story"},beforeEach:()=>{const e=g(s,"get").mockResolvedValue({data:p(3)});return()=>e.mockRestore()},play:async({canvas:e})=>{const a=await e.findByText("Arts & Culture");await t(a).toBeVisible(),await h(()=>{t(s.get).toHaveBeenCalledWith(w)});const n=await e.findByText("Innovative Research in Marine Biology");await t(n).toBeVisible();const i=await e.findByText("Academics");await t(i).toBeVisible()}},l={render:d,args:{renderApi:!0,api:"Alumni",perPage:3,subheading:"From the Feed",heading:"Alumni News",paragraph:"Fetching posts with the Alumni category tag.",cta:"Read Full Story"},beforeEach:()=>{const e=g(s,"get").mockResolvedValue({data:p(3)});return()=>e.mockRestore()},play:async({canvas:e})=>{const a=await e.findByText("Alumni News");await t(a).toBeVisible(),await h(()=>{t(s.get).toHaveBeenCalledWith(f)});const n=await e.findByText("Innovative Research in Marine Biology");await t(n).toBeVisible();const i=e.getAllByText("Read Full Story");await t(i.length).toBe(3)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    renderApi: true,
    api: "",
    perPage: 3,
    subheading: "From the Feed",
    heading: "Latest News",
    paragraph: "These items are fetched from a mocked API.",
    cta: "Read Full Story"
  },
  beforeEach: () => {
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: createMockWpPosts(3)
    });
    return () => spy.mockRestore();
  },
  play: async ({
    canvas
  }) => {
    // Assert section heading renders
    const heading = await canvas.findByText("Latest News");
    await expect(heading).toBeVisible();

    // Assert mocked article content renders (from normalizedApiItems computed)
    const article1 = await canvas.findByText("Innovative Research in Marine Biology");
    await expect(article1).toBeVisible();
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(GENERAL_ENDPOINT);
    });
    const article2 = await canvas.findByText("New Gallery Exhibition Opens This Fall");
    await expect(article2).toBeVisible();

    // Assert CTA buttons render
    const ctaButtons = canvas.getAllByText("Read Full Story");
    await expect(ctaButtons.length).toBe(3);
  }
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    renderApi: true,
    api: "Arts",
    perPage: 3,
    subheading: "From the Feed",
    heading: "Arts & Culture",
    paragraph: "Fetching posts with the Arts category tag.",
    cta: "Read Full Story"
  },
  beforeEach: () => {
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: createMockWpPosts(3)
    });
    return () => spy.mockRestore();
  },
  play: async ({
    canvas
  }) => {
    const heading = await canvas.findByText("Arts & Culture");
    await expect(heading).toBeVisible();
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(ARTS_ENDPOINT);
    });

    // Assert article from mock data renders
    const article = await canvas.findByText("Innovative Research in Marine Biology");
    await expect(article).toBeVisible();

    // Assert category subheading from post-meta-fields renders
    const category = await canvas.findByText("Academics");
    await expect(category).toBeVisible();
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    renderApi: true,
    api: "Alumni",
    perPage: 3,
    subheading: "From the Feed",
    heading: "Alumni News",
    paragraph: "Fetching posts with the Alumni category tag.",
    cta: "Read Full Story"
  },
  beforeEach: () => {
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: createMockWpPosts(3)
    });
    return () => spy.mockRestore();
  },
  play: async ({
    canvas
  }) => {
    const heading = await canvas.findByText("Alumni News");
    await expect(heading).toBeVisible();
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(ALUMNI_ENDPOINT);
    });

    // Assert article content renders from mock
    const article = await canvas.findByText("Innovative Research in Marine Biology");
    await expect(article).toBeVisible();
    const ctaButtons = canvas.getAllByText("Read Full Story");
    await expect(ctaButtons.length).toBe(3);
  }
}`,...l.parameters?.docs?.source}}};const P=["ManualData","ApiGeneral","ApiArts","ApiAlumni"];export{l as ApiAlumni,c as ApiArts,r as ApiGeneral,o as ManualData,P as __namedExportsOrder,_ as default};
