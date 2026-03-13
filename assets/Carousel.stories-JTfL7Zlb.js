import k from"./Carousel-DbU7XTRb.js";import{a as l}from"./index-42ANG6Sg.js";import{a as b}from"./mock-data-iuhpH0Ld.js";import"./iframe-B6ZAXbo8.js";import"./preload-helper-PPVm8Dsz.js";import"./glide.esm-YJcNIzYu.js";import"./Context-C_1on05M.js";import"./TextGroup-J623lyxw.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./ButtonGroup-pSVp0Pu7.js";import"./Button-BpT5iMmR.js";import"./ArrowControls-BmhKEe61.js";import"./ArrowButton-CyQR5mka.js";import"./Picture-BrpWGNuJ.js";const{expect:t,spyOn:B,waitFor:u}=__STORYBOOK_MODULE_TEST__,j={title:"Core Components/Carousel",component:k},S="https://news.colby.edu/wp-json/wp/v2/posts?per_page=5&tags=561&_embed=1",T="https://news.colby.edu/wp-json/wp/v2/posts?per_page=5&categories=8,12,14,15&_embed=1",I="https://news.colby.edu/wp-json/wp/v2/external_post?story_type_slug=faculty-accomplishments&per_page=5&_embed=1",N=[{url:"https://www.colby.edu",title:"All News"}],d=[{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Rectangle:"https://placehold.co/600x400",Rectangle_mobile:"https://placehold.co/300x200"}},heading:"Future of Artificial Intelligence",subheading:"Technology",paragraph:"AI is reshaping industries at an unprecedented pace.",url:"#",buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Rectangle:"https://placehold.co/600x400",Rectangle_mobile:"https://placehold.co/300x200"}},heading:"Sustainable Energy Solutions",subheading:"Environment",paragraph:"Solar and wind energy are becoming more accessible than ever.",url:"#",buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]},{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Rectangle:"https://placehold.co/600x400",Rectangle_mobile:"https://placehold.co/300x200"}},heading:"Modern Architecture Trends",subheading:"Design",paragraph:"Exploring the intersection of function and aesthetics in 2024.",url:"#",buttons:[{button:{size:"small",title:"button1",url:"https://www.colby.edu"}}]}],A=async({canvas:e,canvasElement:a,userEvent:n})=>{await u(()=>{const i=a.querySelectorAll(".carousel__main .carousel__slides-context .carousel__slides-context-wrap:first-child")[0].querySelectorAll(".text-group__heading")[0];t(i.textContent.slice(0,-1)).toBe("Future of Artificial Intelligence"),t(i).toBeVisible()});const o=a.querySelector(".carousel__main");await t(o).not.toBeNull(),await n.hover(o),await n.unhover(o);const s=e.getAllByRole("button",{name:"Next"}),r=e.getAllByRole("button",{name:"Previous"});await t(s.length).toBeGreaterThan(0),await t(r.length).toBeGreaterThan(0),await n.click(s[0]),await n.click(r[0])},p={name:"Primary",args:{render_api:!1,items:d,buttons:N},play:A},m={name:"Autoplay False",args:{render_api:!1,items:d,autoplay:!1,buttons:N},play:A},g={name:"With Heading and Paragraph",args:{render_api:!1,items:d,heading:"Latest Stories",subheading:"News",paragraph:"Stay up to date with the latest from Colby.",buttons:[{url:"https://www.colby.edu",title:"All News"}]},play:async e=>{await A(e);const{canvas:a,canvasElement:n}=e,s=n.querySelectorAll(".carousel__context")[0].querySelectorAll(".text-group__heading")[0];await t(s.textContent.slice(0,-1)).toBe("Latest Stories"),await t(s).toBeVisible()}},h={name:"Custom Interval",args:{render_api:!1,items:d,autoplay:!0,interval:300,buttons:[{url:"https://www.colby.edu",title:"All News"}]},play:A},y={name:"Single Slide (No Autoplay)",args:{render_api:!1,items:[d[0]],autoplay:!0,buttons:[{url:"https://www.colby.edu",title:"Read More"}]},play:async({canvas:e,canvasElement:a,userEvent:n})=>{await u(()=>{const c=a.querySelectorAll(".carousel__main .carousel__slides-context .carousel__slides-context-wrap:first-child")[0].querySelectorAll(".text-group__heading")[0];t(c.textContent.slice(0,-1)).toBe("Future of Artificial Intelligence"),t(c).toBeVisible()});const o=a.querySelector(".carousel__main");await t(o).not.toBeNull(),await n.hover(o),await n.unhover(o);const s=e.getAllByRole("button",{name:"Next"});await t(s.length).toBeGreaterThan(0),await n.click(s[0])}},w={name:"Light Type",args:{render_api:!0,api:"Unexpected Feed",heading:"Unexpected",paragraph:"Fallback mode check.",cta:"Read Story",autoplay:!1,buttons:[{url:"https://news.colby.edu/",title:"All News"}]},beforeEach:()=>{const e=B(l,"get").mockResolvedValue({data:b(5)});return()=>e.mockRestore()},play:async({canvas:e,userEvent:a,canvasElement:n})=>{await u(()=>{t(e.getByText("Unexpected")).toBeInTheDocument()}),await t(l.get).toHaveBeenCalledWith(S);const s=n.querySelectorAll(".carousel__main .carousel__slides-context .carousel__slides-context-wrap:first-child")[0].querySelectorAll(".text-group__heading")[0];t(s.textContent.slice(0,-1)).toBe("Innovative Research in Marine Biology"),t(s).toBeVisible();const r=e.getAllByRole("button",{name:"Next"});await a.click(r[0])}},x={name:"Latest News (API Mocked)",args:{render_api:!0,api:"Latest News",heading:"News",paragraph:"Latest from Colby.",cta:"Read Story",autoplay:!1,buttons:[{url:"https://news.colby.edu/",title:"All News"}]},beforeEach:()=>{const e=B(l,"get").mockResolvedValue({data:b(5)});return()=>e.mockRestore()},play:async({canvas:e,userEvent:a,canvasElement:n})=>{await u(()=>{const i=n.querySelectorAll(".carousel__main .carousel__slides-context .carousel__slides-context-wrap:first-child")[0].querySelectorAll(".text-group__heading")[0];t(i.textContent.slice(0,-1)).toBe("Innovative Research in Marine Biology"),t(i).toBeVisible()}),await t(l.get).toHaveBeenCalledWith(S),await t(e.getByText("News")).toBeInTheDocument();const o=e.getAllByText("Read Story");await t(o.length).toBeGreaterThanOrEqual(1);const s=e.getAllByRole("button",{name:"Next"}),r=e.getAllByRole("button",{name:"Previous"});await a.click(s[0]),await a.click(r[0])}},_={name:"Academic News (API Mocked)",args:{render_api:!0,api:"Academic News",heading:"Academic Highlights",paragraph:"Research and scholarship from Colby faculty and students.",cta:"Read Story",autoplay:!1,buttons:[{url:"https://news.colby.edu/",title:"All Academic News"}]},beforeEach:()=>{const e=B(l,"get").mockResolvedValue({data:b(5)});return()=>e.mockRestore()},play:async({canvas:e,userEvent:a,canvasElement:n})=>{await u(()=>{const v=n.querySelectorAll(".carousel__context")[0].querySelectorAll(".text-group__heading")[0];t(v.textContent.slice(0,-1)).toBe("Academic Highlights"),t(v).toBeVisible()});const s=n.querySelectorAll(".carousel__context")[0].querySelectorAll(".text-group__subheading")[0];await t(l.get).toHaveBeenCalledWith(T),t(s.textContent.slice(0,-1)).toBe("Academic News"),t(s).toBeVisible();const c=n.querySelectorAll(".carousel__main .carousel__slides-context .carousel__slides-context-wrap:first-child")[0].querySelectorAll(".text-group__heading")[0];t(c.textContent.slice(0,-1)).toBe("Innovative Research in Marine Biology"),t(c).toBeVisible();const i=e.getAllByRole("button",{name:"Next"}),R=e.getAllByRole("button",{name:"Previous"});await a.click(i[0]),await a.click(R[0])}},f={name:"Faculty Accomplishments (API Mocked)",args:{render_api:!0,api:"Faculty Accomplishments",heading:"Faculty News",paragraph:"Recent faculty accomplishments.",cta:"Read Story",autoplay:!1,FAbuttons:[{url:"https://news.colby.edu/external/faculty-accomplishments/",title:"All Faculty News"}]},beforeEach:()=>{const e=[{title:{rendered:"Faculty Achievement in Quantum Computing"},content:{rendered:"<p>Professor Smith published a groundbreaking paper on quantum computing that challenges existing theoretical frameworks.</p>"},external_url:"https://example.com/faculty-1"},{title:{rendered:"National Teaching Award Recipient"},content:{rendered:"<p>Professor Jones has been recognized with a national teaching award for excellence in undergraduate education.</p>"},external_url:"https://example.com/faculty-2"},{title:{rendered:"Climate Research Breakthrough"},content:{rendered:"<p>A Colby research team has made a significant discovery in understanding local climate patterns and their global implications.</p>"},external_url:"https://example.com/faculty-3"}],a=B(l,"get").mockResolvedValue({data:e});return()=>a.mockRestore()},play:async({canvas:e,userEvent:a})=>{await u(()=>{t(e.getByText("Faculty News")).toBeInTheDocument()}),await t(l.get).toHaveBeenCalledWith(I),await t(e.getByText("Faculty Achievement in Quantum Computing")).toBeInTheDocument(),await t(e.getByText("Faculty Accomplishments")).toBeInTheDocument();const n=e.getAllByRole("button",{name:"Next"}),o=e.getAllByRole("button",{name:"Previous"});await a.click(n[0]),await a.click(o[0])}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Primary",
  args: {
    render_api: false,
    items: mockItems,
    buttons: sharedButtons
  },
  play: runBasicInteractions
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Autoplay False",
  args: {
    render_api: false,
    items: mockItems,
    autoplay: false,
    buttons: sharedButtons
  },
  play: runBasicInteractions
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
      canvas,
      canvasElement
    } = ctx;
    const first = canvasElement.querySelectorAll('.carousel__context')[0];
    const firstHeading = first.querySelectorAll('.text-group__heading')[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe('Latest Stories');
    await expect(firstHeading).toBeVisible();
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
      const first = canvasElement.querySelectorAll('.carousel__main .carousel__slides-context .carousel__slides-context-wrap:first-child')[0];
      const firstHeading = first.querySelectorAll('.text-group__heading')[0];
      expect(firstHeading.textContent.slice(0, -1)).toBe('Future of Artificial Intelligence');
      expect(firstHeading).toBeVisible();
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

    // await expect(
    //   canvas.getByText("Future of Artificial Intelligence"),
    // ).toBeInTheDocument();
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
    userEvent,
    canvasElement
  }) => {
    await waitFor(() => {
      expect(canvas.getByText("Unexpected")).toBeInTheDocument();
    });
    await expect(axios.get).toHaveBeenCalledWith(LATEST_NEWS_ENDPOINT);
    const first = canvasElement.querySelectorAll('.carousel__main .carousel__slides-context .carousel__slides-context-wrap:first-child')[0];
    const firstHeading = first.querySelectorAll('.text-group__heading')[0];
    expect(firstHeading.textContent.slice(0, -1)).toBe('Innovative Research in Marine Biology');
    expect(firstHeading).toBeVisible();
    const nextButtons = canvas.getAllByRole("button", {
      name: "Next"
    });
    await userEvent.click(nextButtons[0]);
  }
}`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
    userEvent,
    canvasElement
  }) => {
    await waitFor(() => {
      const first = canvasElement.querySelectorAll('.carousel__main .carousel__slides-context .carousel__slides-context-wrap:first-child')[0];
      const firstHeading = first.querySelectorAll('.text-group__heading')[0];
      expect(firstHeading.textContent.slice(0, -1)).toBe('Innovative Research in Marine Biology');
      expect(firstHeading).toBeVisible();
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
}`,...x.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
    userEvent,
    canvasElement
  }) => {
    await waitFor(() => {
      const first = canvasElement.querySelectorAll('.carousel__context')[0];
      const firstHeading = first.querySelectorAll('.text-group__heading')[0];
      expect(firstHeading.textContent.slice(0, -1)).toBe('Academic Highlights');
      expect(firstHeading).toBeVisible();
    });
    const first = canvasElement.querySelectorAll('.carousel__context')[0];
    const firstSubHeading = first.querySelectorAll('.text-group__subheading')[0];
    await expect(axios.get).toHaveBeenCalledWith(ACADEMIC_NEWS_ENDPOINT);
    expect(firstSubHeading.textContent.slice(0, -1)).toBe('Academic News');
    expect(firstSubHeading).toBeVisible();
    const firstSlide = canvasElement.querySelectorAll('.carousel__main .carousel__slides-context .carousel__slides-context-wrap:first-child')[0];
    const firstSlideHeading = firstSlide.querySelectorAll('.text-group__heading')[0];
    expect(firstSlideHeading.textContent.slice(0, -1)).toBe('Innovative Research in Marine Biology');
    expect(firstSlideHeading).toBeVisible();
    const nextButtons = canvas.getAllByRole("button", {
      name: "Next"
    });
    const prevButtons = canvas.getAllByRole("button", {
      name: "Previous"
    });
    await userEvent.click(nextButtons[0]);
    await userEvent.click(prevButtons[0]);
  }
}`,..._.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const Y=["Primary","AutoplayFalse","WithHeadingAndParagraph","CustomInterval","SingleSlide","LightType","LatestNewsApi","AcademicNewsApi","FacultyAccomplishmentsApi"];export{_ as AcademicNewsApi,m as AutoplayFalse,h as CustomInterval,f as FacultyAccomplishmentsApi,x as LatestNewsApi,w as LightType,p as Primary,y as SingleSlide,g as WithHeadingAndParagraph,Y as __namedExportsOrder,j as default};
