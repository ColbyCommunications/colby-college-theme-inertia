import f from"./Carousel-4asAqeay.js";import{a as s}from"./index-C0Zqfgkc.js";import{a as b}from"./mock-data-iuhpH0Ld.js";import"./iframe-u12Z2ejW.js";import"./preload-helper-PPVm8Dsz.js";import"./glide.esm-YJcNIzYu.js";import"./Context-C2u5KeLN.js";import"./TextGroup-fPNNtcqH.js";import"./ButtonGroup-CnEZ3a-f.js";import"./Button-Dd4eRc0N.js";import"./ArrowControls-B5WbIN1B.js";import"./ArrowButton-CaByfvl_.js";import"./Picture-CY3Hc20w.js";const{expect:t,spyOn:B,waitFor:r}=__STORYBOOK_MODULE_TEST__,H={title:"Core Components/Carousel",component:f},T="https://news.colby.edu/wp-json/wp/v2/posts?per_page=5&tags=561&_embed=1",N="https://news.colby.edu/wp-json/wp/v2/posts?per_page=5&categories=8,12,14,15&_embed=1",I="https://news.colby.edu/wp-json/wp/v2/external_post?story_type_slug=faculty-accomplishments&per_page=5&_embed=1",v=[{url:"https://www.colby.edu",title:"All News"}],l=[{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Rectangle:"https://placehold.co/600x400",Rectangle_mobile:"https://placehold.co/300x200"}},heading:"Future of Artificial Intelligence",subheading:"Technology",paragraph:"AI is reshaping industries at an unprecedented pace.",url:"#",buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Rectangle:"https://placehold.co/600x400",Rectangle_mobile:"https://placehold.co/300x200"}},heading:"Sustainable Energy Solutions",subheading:"Environment",paragraph:"Solar and wind energy are becoming more accessible than ever.",url:"#",buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Rectangle:"https://placehold.co/600x400",Rectangle_mobile:"https://placehold.co/300x200"}},heading:"Modern Architecture Trends",subheading:"Design",paragraph:"Exploring the intersection of function and aesthetics in 2024.",url:"#",buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]}],x=async({canvas:e,canvasElement:a,userEvent:n})=>{await r(()=>{t(e.getByText("Future of Artificial Intelligence")).toBeInTheDocument()});const o=a.querySelector(".carousel__main");await t(o).not.toBeNull(),await n.hover(o),await n.unhover(o);const c=e.getAllByRole("button",{name:"Next"}),A=e.getAllByRole("button",{name:"Previous"});await t(c.length).toBeGreaterThan(0),await t(A.length).toBeGreaterThan(0),await n.click(c[0]),await n.click(A[0]),await t(e.getByText("Future of Artificial Intelligence")).toBeInTheDocument()},i={name:"Primary",args:{render_api:!1,items:l,buttons:v},play:x},u={name:"Autoplay False",args:{render_api:!1,items:l,autoplay:!1,buttons:v},play:x},p={name:"With Heading and Paragraph",args:{render_api:!1,items:l,heading:"Latest Stories",subheading:"News",paragraph:"Stay up to date with the latest from Colby.",buttons:[{url:"https://www.colby.edu",title:"All News"}]},play:async e=>{await x(e);const{canvas:a}=e;await t(a.getByText("Latest Stories")).toBeInTheDocument()}},d={name:"Custom Interval",args:{render_api:!1,items:l,autoplay:!0,interval:300,buttons:[{url:"https://www.colby.edu",title:"All News"}]},play:x},m={name:"Single Slide (No Autoplay)",args:{render_api:!1,items:[l[0]],autoplay:!0,buttons:[{url:"https://www.colby.edu",title:"Read More"}]},play:async({canvas:e,canvasElement:a,userEvent:n})=>{await r(()=>{t(e.getByText("Future of Artificial Intelligence")).toBeInTheDocument()});const o=a.querySelector(".carousel__main");await t(o).not.toBeNull(),await n.hover(o),await n.unhover(o);const c=e.getAllByRole("button",{name:"Next"});await t(c.length).toBeGreaterThan(0),await n.click(c[0]),await t(e.getByText("Future of Artificial Intelligence")).toBeInTheDocument()}},h={name:"Light Type",args:{render_api:!0,api:"Unexpected Feed",heading:"Unexpected",paragraph:"Fallback mode check.",cta:"Read Story",autoplay:!1,buttons:[{url:"https://news.colby.edu/",title:"All News"}]},beforeEach:()=>{const e=B(s,"get").mockResolvedValue({data:b(5)});return()=>e.mockRestore()},play:async({canvas:e,userEvent:a})=>{await r(()=>{t(e.getByText("Unexpected")).toBeInTheDocument()}),await t(s.get).toHaveBeenCalledWith(T),await t(e.getByText("Innovative Research in Marine Biology")).toBeInTheDocument();const n=e.getAllByRole("button",{name:"Next"});await a.click(n[0])}},g={name:"Latest News (API Mocked)",args:{render_api:!0,api:"Latest News",heading:"News",paragraph:"Latest from Colby.",cta:"Read Story",autoplay:!1,buttons:[{url:"https://news.colby.edu/",title:"All News"}]},beforeEach:()=>{const e=B(s,"get").mockResolvedValue({data:b(5)});return()=>e.mockRestore()},play:async({canvas:e,userEvent:a})=>{await r(()=>{t(e.getByText("Innovative Research in Marine Biology")).toBeInTheDocument()}),await t(s.get).toHaveBeenCalledWith(T),await t(e.getByText("News")).toBeInTheDocument();const n=e.getAllByText("Read Story");await t(n.length).toBeGreaterThanOrEqual(1);const o=e.getAllByRole("button",{name:"Next"}),c=e.getAllByRole("button",{name:"Previous"});await a.click(o[0]),await a.click(c[0])}},y={name:"Academic News (API Mocked)",args:{render_api:!0,api:"Academic News",heading:"Academic Highlights",paragraph:"Research and scholarship from Colby faculty and students.",cta:"Read Story",autoplay:!1,buttons:[{url:"https://news.colby.edu/",title:"All Academic News"}]},beforeEach:()=>{const e=B(s,"get").mockResolvedValue({data:b(5)});return()=>e.mockRestore()},play:async({canvas:e,userEvent:a})=>{await r(()=>{t(e.getByText("Academic Highlights")).toBeInTheDocument()}),await t(s.get).toHaveBeenCalledWith(N),await t(e.getByText("Academic News")).toBeInTheDocument(),await t(e.getByText("Innovative Research in Marine Biology")).toBeInTheDocument();const n=e.getAllByRole("button",{name:"Next"}),o=e.getAllByRole("button",{name:"Previous"});await a.click(n[0]),await a.click(o[0])}},w={name:"Faculty Accomplishments (API Mocked)",args:{render_api:!0,api:"Faculty Accomplishments",heading:"Faculty News",paragraph:"Recent faculty accomplishments.",cta:"Read Story",autoplay:!1,FAbuttons:[{url:"https://news.colby.edu/external/faculty-accomplishments/",title:"All Faculty News"}]},beforeEach:()=>{const e=[{title:{rendered:"Faculty Achievement in Quantum Computing"},content:{rendered:"<p>Professor Smith published a groundbreaking paper on quantum computing that challenges existing theoretical frameworks.</p>"},external_url:"https://example.com/faculty-1"},{title:{rendered:"National Teaching Award Recipient"},content:{rendered:"<p>Professor Jones has been recognized with a national teaching award for excellence in undergraduate education.</p>"},external_url:"https://example.com/faculty-2"},{title:{rendered:"Climate Research Breakthrough"},content:{rendered:"<p>A Colby research team has made a significant discovery in understanding local climate patterns and their global implications.</p>"},external_url:"https://example.com/faculty-3"}],a=B(s,"get").mockResolvedValue({data:e});return()=>a.mockRestore()},play:async({canvas:e,userEvent:a})=>{await r(()=>{t(e.getByText("Faculty News")).toBeInTheDocument()}),await t(s.get).toHaveBeenCalledWith(I),await t(e.getByText("Faculty Achievement in Quantum Computing")).toBeInTheDocument(),await t(e.getByText("Faculty Accomplishments")).toBeInTheDocument();const n=e.getAllByRole("button",{name:"Next"}),o=e.getAllByRole("button",{name:"Previous"});await a.click(n[0]),await a.click(o[0])}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Primary",
  args: {
    render_api: false,
    items: mockItems,
    buttons: sharedButtons
  },
  play: runBasicInteractions
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Autoplay False",
  args: {
    render_api: false,
    items: mockItems,
    autoplay: false,
    buttons: sharedButtons
  },
  play: runBasicInteractions
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "With Heading and Paragraph",
  args: {
    render_api: false,
    items: mockItems,
    heading: "Latest Stories",
    subheading: "News",
    paragraph: "Stay up to date with the latest from Colby.",
    buttons: [{
      url: "https://www.colby.edu",
      title: "All News"
    }]
  },
  play: async ctx => {
    await runBasicInteractions(ctx);
    const {
      canvas
    } = ctx;
    await expect(canvas.getByText("Latest Stories")).toBeInTheDocument();
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Custom Interval",
  args: {
    render_api: false,
    items: mockItems,
    autoplay: true,
    interval: 300,
    buttons: [{
      url: "https://www.colby.edu",
      title: "All News"
    }]
  },
  play: runBasicInteractions
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Single Slide (No Autoplay)",
  args: {
    render_api: false,
    items: [mockItems[0]],
    autoplay: true,
    buttons: [{
      url: "https://www.colby.edu",
      title: "Read More"
    }]
  },
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    await waitFor(() => {
      expect(canvas.getByText("Future of Artificial Intelligence")).toBeInTheDocument();
    });
    const main = canvasElement.querySelector(".carousel__main");
    await expect(main).not.toBeNull();
    await userEvent.hover(main);
    await userEvent.unhover(main);
    const nextButtons = canvas.getAllByRole("button", {
      name: "Next"
    });
    await expect(nextButtons.length).toBeGreaterThan(0);
    await userEvent.click(nextButtons[0]);
    await expect(canvas.getByText("Future of Artificial Intelligence")).toBeInTheDocument();
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Light Type",
  args: {
    render_api: true,
    api: "Unexpected Feed",
    heading: "Unexpected",
    paragraph: "Fallback mode check.",
    cta: "Read Story",
    autoplay: false,
    buttons: [{
      url: "https://news.colby.edu/",
      title: "All News"
    }]
  },
  beforeEach: () => {
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: createMockWpPosts(5)
    });
    return () => spy.mockRestore();
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await waitFor(() => {
      expect(canvas.getByText("Unexpected")).toBeInTheDocument();
    });
    await expect(axios.get).toHaveBeenCalledWith(LATEST_NEWS_ENDPOINT);
    await expect(canvas.getByText("Innovative Research in Marine Biology")).toBeInTheDocument();
    const nextButtons = canvas.getAllByRole("button", {
      name: "Next"
    });
    await userEvent.click(nextButtons[0]);
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Latest News (API Mocked)",
  args: {
    render_api: true,
    api: "Latest News",
    heading: "News",
    paragraph: "Latest from Colby.",
    cta: "Read Story",
    autoplay: false,
    buttons: [{
      url: "https://news.colby.edu/",
      title: "All News"
    }]
  },
  beforeEach: () => {
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: createMockWpPosts(5)
    });
    return () => spy.mockRestore();
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await waitFor(() => {
      expect(canvas.getByText("Innovative Research in Marine Biology")).toBeInTheDocument();
    });
    await expect(axios.get).toHaveBeenCalledWith(LATEST_NEWS_ENDPOINT);
    await expect(canvas.getByText("News")).toBeInTheDocument();
    const ctaButtons = canvas.getAllByText("Read Story");
    await expect(ctaButtons.length).toBeGreaterThanOrEqual(1);
    const nextButtons = canvas.getAllByRole("button", {
      name: "Next"
    });
    const prevButtons = canvas.getAllByRole("button", {
      name: "Previous"
    });
    await userEvent.click(nextButtons[0]);
    await userEvent.click(prevButtons[0]);
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Academic News (API Mocked)",
  args: {
    render_api: true,
    api: "Academic News",
    heading: "Academic Highlights",
    paragraph: "Research and scholarship from Colby faculty and students.",
    cta: "Read Story",
    autoplay: false,
    buttons: [{
      url: "https://news.colby.edu/",
      title: "All Academic News"
    }]
  },
  beforeEach: () => {
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: createMockWpPosts(5)
    });
    return () => spy.mockRestore();
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await waitFor(() => {
      expect(canvas.getByText("Academic Highlights")).toBeInTheDocument();
    });
    await expect(axios.get).toHaveBeenCalledWith(ACADEMIC_NEWS_ENDPOINT);
    await expect(canvas.getByText("Academic News")).toBeInTheDocument();
    await expect(canvas.getByText("Innovative Research in Marine Biology")).toBeInTheDocument();
    const nextButtons = canvas.getAllByRole("button", {
      name: "Next"
    });
    const prevButtons = canvas.getAllByRole("button", {
      name: "Previous"
    });
    await userEvent.click(nextButtons[0]);
    await userEvent.click(prevButtons[0]);
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Faculty Accomplishments (API Mocked)",
  args: {
    render_api: true,
    api: "Faculty Accomplishments",
    heading: "Faculty News",
    paragraph: "Recent faculty accomplishments.",
    cta: "Read Story",
    autoplay: false,
    FAbuttons: [{
      url: "https://news.colby.edu/external/faculty-accomplishments/",
      title: "All Faculty News"
    }]
  },
  beforeEach: () => {
    const mockFacultyPosts = [{
      title: {
        rendered: "Faculty Achievement in Quantum Computing"
      },
      content: {
        rendered: "<p>Professor Smith published a groundbreaking paper on quantum computing that challenges existing theoretical frameworks.</p>"
      },
      external_url: "https://example.com/faculty-1"
    }, {
      title: {
        rendered: "National Teaching Award Recipient"
      },
      content: {
        rendered: "<p>Professor Jones has been recognized with a national teaching award for excellence in undergraduate education.</p>"
      },
      external_url: "https://example.com/faculty-2"
    }, {
      title: {
        rendered: "Climate Research Breakthrough"
      },
      content: {
        rendered: "<p>A Colby research team has made a significant discovery in understanding local climate patterns and their global implications.</p>"
      },
      external_url: "https://example.com/faculty-3"
    }];
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: mockFacultyPosts
    });
    return () => spy.mockRestore();
  },
  play: async ({
    canvas,
    userEvent
  }) => {
    await waitFor(() => {
      expect(canvas.getByText("Faculty News")).toBeInTheDocument();
    });
    await expect(axios.get).toHaveBeenCalledWith(FACULTY_ENDPOINT);
    await expect(canvas.getByText("Faculty Achievement in Quantum Computing")).toBeInTheDocument();
    await expect(canvas.getByText("Faculty Accomplishments")).toBeInTheDocument();
    const nextButtons = canvas.getAllByRole("button", {
      name: "Next"
    });
    const prevButtons = canvas.getAllByRole("button", {
      name: "Previous"
    });
    await userEvent.click(nextButtons[0]);
    await userEvent.click(prevButtons[0]);
  }
}`,...w.parameters?.docs?.source}}};const U=["Primary","AutoplayFalse","WithHeadingAndParagraph","CustomInterval","SingleSlide","LightType","LatestNewsApi","AcademicNewsApi","FacultyAccomplishmentsApi"];export{y as AcademicNewsApi,u as AutoplayFalse,d as CustomInterval,w as FacultyAccomplishmentsApi,g as LatestNewsApi,h as LightType,i as Primary,m as SingleSlide,p as WithHeadingAndParagraph,U as __namedExportsOrder,H as default};
