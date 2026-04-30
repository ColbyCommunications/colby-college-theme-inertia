import{a as i}from"./index-DZ_Kha3d.js";import p from"./ContextArticleGrid-GsQvRM74.js";import{c as n}from"./mock-data-Db_ZkuBv.js";import"./iframe-Bmd2UPGG.js";import"./preload-helper-PPVm8Dsz.js";import"./Context-BWJjFeeZ.js";import"./TextGroup-DijtnC4I.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-mkQ2kZah.js";import"./Button-BRb3G0IJ.js";import"./Article-CPKdcZ18.js";import"./Picture-DRoO9GLT.js";const{expect:B,spyOn:c,waitFor:k}=__STORYBOOK_MODULE_TEST__,R={title:"Core Components/Context Article Grid",component:p,argTypes:{heading:{control:"text"},subheading:{control:"text"},paragraph:{control:"text"},cta:{control:"text"},renderApi:{control:"boolean",description:"If true, fetches data from WP API. If false, uses 'items' prop."},api:{control:"select",options:["","Arts","Alumni"],description:"Changes the WP API endpoint filter",if:{arg:"renderApi",eq:!0}},perPage:{control:{type:"number",min:1,max:6}},items:{control:"object"}},parameters:{layout:"padded"}},o=e=>({components:{ContextArticleGrid:p},setup(){return{args:e}},template:'<ContextArticleGrid v-bind="args" />'}),d=[{image:{sizes:{desktop:"https://placehold.co/600x400/012169/ffffff?text=Desktop+Image+1",mobile:"https://placehold.co/300x300/012169/ffffff?text=Mobile+Image+1"},alt:"Abstract academic concept"},subheading:"Academics",heading:"Innovative Research in Biology",paragraph:"Students and faculty collaborate on groundbreaking research that reshapes our understanding of local ecosystems.",buttons:[{button:{url:"#",title:"Read Article"}}]},{image:{sizes:{desktop:"https://placehold.co/600x400/366bcf/ffffff?text=Desktop+Image+2"},alt:"Art gallery display"},subheading:"The Arts",heading:"New Gallery Exhibition Opens",paragraph:"The museum presents a collection of modern works that challenge perspective and form.",buttons:[{button:{url:"#",title:"View Gallery"}}]},{image:{sizes:{desktop:"https://placehold.co/600x400/gray/white?text=Desktop+Image+3"},alt:"Alumni event"},subheading:"Community",heading:"Alumni Weekend 2024",paragraph:"Join us for a weekend of celebration, networking, and reconnecting with old friends.",buttons:[]}],t={render:o,args:{renderApi:!1,subheading:"Latest Updates",heading:"News & Stories",paragraph:"Explore the latest happenings from around the campus and beyond.",cta:"Read Story",items:d},play:async({canvas:e})=>{}},a={render:o,args:{renderApi:!0,api:"",perPage:3,subheading:"From the Feed",heading:"Latest News",paragraph:"These items are fetched from a mocked API.",cta:"Read Full Story"},beforeEach:()=>{const e=c(i,"get").mockResolvedValue({data:n(3)});return()=>e.mockRestore()},play:async({canvas:e})=>{}},r={render:o,args:{renderApi:!0,api:"Arts",perPage:3,subheading:"From the Feed",heading:"Arts & Culture",paragraph:"Fetching posts with the Arts category tag.",cta:"Read Full Story"},beforeEach:()=>{const e=c(i,"get").mockResolvedValue({data:n(3)});return()=>e.mockRestore()},play:async({canvas:e})=>{}},s={render:o,args:{renderApi:!0,api:"Alumni",perPage:3,subheading:"From the Feed",heading:"Alumni News",paragraph:"Fetching posts with the Alumni category tag.",cta:"Read Full Story"},beforeEach:()=>{const e=c(i,"get").mockResolvedValue({data:n(3)});return()=>e.mockRestore()},play:async({canvas:e})=>{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
    // Assert the section heading renders
    const heading = await canvas.findByText("News & Stories");
    await expect(heading).toBeVisible();

    // Assert article content from mock data renders
    const articleHeading = await canvas.findByText("Innovative Research in Biology");
    await expect(articleHeading).toBeVisible();
    const articleHeading2 = await canvas.findByText("New Gallery Exhibition Opens");
    await expect(articleHeading2).toBeVisible();
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
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
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
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
}`,...s.parameters?.docs?.source}}};const F=["ManualData","ApiGeneral","ApiArts","ApiAlumni"];export{s as ApiAlumni,r as ApiArts,a as ApiGeneral,t as ManualData,F as __namedExportsOrder,R as default};
