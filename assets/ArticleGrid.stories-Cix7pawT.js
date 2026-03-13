import{_ as C,a as c}from"./ArticleGrid-D9ZfhZGh.js";import{c as h,a as I,b as k}from"./mock-data-iuhpH0Ld.js";import"./iframe-DMklC8cl.js";import"./preload-helper-PPVm8Dsz.js";import"./index-42ANG6Sg.js";import"./TextGroup-khIptu3O.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./Article-C3OezhLW.js";import"./ButtonGroup-D9uDztKu.js";import"./Button-c_Wd58ef.js";import"./Picture-CD-gIuCw.js";const{expect:t,spyOn:y,waitFor:g,within:T}=__STORYBOOK_MODULE_TEST__,H=[{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag"},heading:"Future of Artificial Intelligence",subheading:"Technology",paragraph:"AI is reshaping industries at an unprecedented pace.",url:"#",sizes:{desktop:"https://placehold.co/600x400",mobile:"https://placehold.co/300x200"},buttons:[{button:{title:"Read Story",url:"https://www.colby.edu"}}]},{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag"},heading:"Sustainable Energy Solutions",subheading:"Environment",paragraph:"Solar and wind energy are becoming more accessible than ever.",url:"#",sizes:{desktop:"https://placehold.co/600x400",mobile:"https://placehold.co/300x200"},buttons:[{button:{title:"Learn More",url:"https://www.colby.edu/academics"}}]},{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag"},heading:"Modern Architecture Trends",subheading:"Design",paragraph:"Exploring the intersection of function and aesthetics in 2024.",url:"#",sizes:{desktop:"https://placehold.co/600x400",mobile:"https://placehold.co/300x200"},buttons:[{button:{title:"Read Story",url:"https://www.colby.edu/news"}}]}],b=[{...h(1)[0],title:{rendered:"President Interview in National Press"},tags:[{name:"president"}]},{...h(1)[0],title:{rendered:"Editor Pick: Colby Climate Story"},tags:[{name:"editors-pick"}]},{...h(1)[0],title:{rendered:"General Media Mention"},tags:[{name:"campus"}]},{...h(1)[0],title:{rendered:"Ignored Non-Media Story"},story_type:[{slug:"campus-story"}]},{...h(1)[0],title:{rendered:"Ignored Missing Content"},content:{rendered:""}}],d=(e,n,a)=>{e&&Object.defineProperty(e,n,{configurable:!0,get:()=>a})},K={title:"Core Components/Article Grid",component:C},p=e=>({components:{ArticleGrid:C},setup(){return{args:e}},template:'<ArticleGrid v-bind="args" />'}),_={render:p,args:{display_posts_method:"manual",columns:3,cta:"Read Story",items:H,border:!1},play:async({canvasElement:e})=>{const a=e.querySelectorAll(".grid .article-grid__item:first-child")[0].querySelectorAll(".text-group__heading")[0];await t(a.textContent.slice(0,-1)).toBe("Future of Artificial Intelligence"),await t(a).toBeVisible();const i=e.querySelectorAll(".grid .article-grid__item:nth-child(2)")[0].querySelectorAll(".text-group__heading")[0];await t(i.textContent.slice(0,-1)).toBe("Sustainable Energy Solutions"),await t(i).toBeVisible();const l=e.querySelectorAll(".grid .article-grid__item:nth-child(3)")[0].querySelectorAll(".text-group__heading")[0];await t(l.textContent.slice(0,-1)).toBe("Modern Architecture Trends"),await t(l).toBeVisible()}},w={render:p,args:{display_posts_method:"manual",style:"accordion",columns:3,render_api:!1,items:H},play:async({canvas:e,canvasElement:n,userEvent:a})=>{const i=n.querySelectorAll(".grid .article-grid__item:first-child")[0].querySelectorAll(".text-group__heading")[0];await t(i.textContent.slice(0,-1)).toBe("Future of Artificial Intelligence"),await t(i).toBeVisible();const o=n.querySelector(".article-grid"),l=n.querySelectorAll(".article-grid__item");d(o,"clientWidth",1200),l.forEach(u=>{d(u,"offsetWidth",300),d(u,"offsetHeight",420)}),window.dispatchEvent(new Event("resize"));const s=await e.findAllByText("Read More");await a.click(s[0]);const E=await e.findAllByText("AI is reshaping industries at an unprecedented pace.");await t(E.length).toBeGreaterThan(0),await t(e.getAllByText("Read Story").length).toBeGreaterThan(0),await a.click(s[1]);const q=await e.findAllByText("Solar and wind energy are becoming more accessible than ever.");await t(q.length).toBeGreaterThan(0),d(o,"clientWidth",300),l.forEach(u=>{d(u,"offsetWidth",300),d(u,"offsetHeight",380)}),window.dispatchEvent(new Event("resize")),await a.click(s[0]);const m=n.querySelectorAll(".material-icons-sharp");m.length>0&&await a.click(m[0].closest("button"))}},M=()=>{const e=I(12);return e[0]=k({title:{rendered:"Internal Story With ACF Summary"},excerpt:{rendered:""},acf_blocks:[{name:"acf/paragraph",fields:{paragraph_text:"<p>Fallback summary from ACF paragraph content for internal fetch coverage branch testing.</p>"}}],link:"https://news.colby.edu/story/internal-acf/"}),e[1]=k({title:{rendered:"Internal Story With Empty Summary"},excerpt:{rendered:""},acf_blocks:[],link:"https://news.colby.edu/story/internal-empty/"}),e},R=()=>I(6).map((e,n)=>({...e,id:100+n,title:{rendered:`Page Two Story ${n+1}`},link:`https://news.colby.edu/story/page-two-${n+1}/`})),f={render:p,args:{display_posts_method:"internal",render_posts_category:1,columns:3,post_limit:-1,cta:"Read Story"},beforeEach:()=>{const e=M(),n=R(),a=y(c,"get").mockImplementation(r=>r.includes("page=2")?Promise.resolve({data:n,headers:{"x-wp-totalpages":"3"}}):Promise.resolve({data:e,headers:{"x-wp-totalpages":"3"}}));return()=>a.mockRestore()},play:async({canvas:e,canvasElement:n,userEvent:a})=>{const i=n.querySelectorAll(".grid .article-grid__item:first-child")[0].querySelectorAll(".text-group__heading")[0];await t(i.textContent.slice(0,-1)).toBe("Internal Story With ACF Summary"),await t(i).toBeVisible(),await g(()=>{t(c.get).toHaveBeenCalledTimes(1)});const o=await e.findByRole("button",{name:"See More"});await a.click(o),await g(()=>{const s=n.querySelectorAll(".grid .article-grid__item:nth-child(4)")[0].querySelectorAll(".text-group__heading")[0];t(s).toBeInTheDocument()})}},x={render:p,args:{display_posts_method:"api",api_source:"media_coverage",external_media_api:"all_media",columns:3,range:3,cta:"Read Story"},beforeEach:()=>{const e=y(c,"get").mockResolvedValue({data:b});return()=>e.mockRestore()},play:async({canvas:e,canvasElement:n})=>{await g(()=>{t(c.get).toHaveBeenCalledWith("https://news.colby.edu/wp-json/custom/v1/external-posts")});const r=n.querySelectorAll(".grid .article-grid__item:first-child")[0].querySelectorAll(".text-group__heading")[0];await t(r.textContent.slice(0,-1)).toBe("President Interview in National Press"),await t(r).toBeVisible();const o=n.querySelectorAll(".grid .article-grid__item:nth-child(2)")[0].querySelectorAll(".text-group__heading")[0];await t(o.textContent.slice(0,-1)).toBe("Editor Pick: Colby Climate Story"),await t(o).toBeVisible();const s=n.querySelectorAll(".grid .article-grid__item:nth-child(3)")[0].querySelectorAll(".text-group__heading")[0];await t(s.textContent.slice(0,-1)).toBe("General Media Mention"),await t(s).toBeVisible()}},S={render:p,args:{display_posts_method:"api",api_source:"media_coverage",external_media_api:"president",columns:2,range:4,cta:"Read Story"},beforeEach:()=>{const e=y(c,"get").mockResolvedValue({data:b});return()=>e.mockRestore()},play:async({canvas:e,canvasElement:n})=>{await g(()=>{t(c.get).toHaveBeenCalledWith("https://news.colby.edu/wp-json/custom/v1/external-posts")});const r=n.querySelectorAll(".grid .article-grid__item:first-child")[0].querySelectorAll(".text-group__heading")[0];await t(r.textContent.slice(0,-1)).toBe("President Interview in National Press"),await t(r).toBeVisible(),await t(e.queryByText("Editor Pick: Colby Climate Story")).not.toBeInTheDocument()}},B={render:p,args:{display_posts_method:"api",api_source:"media_coverage",external_media_api:"highlight",columns:4,range:4,cta:"Read Story"},beforeEach:()=>{const e=y(c,"get").mockResolvedValue({data:b});return()=>e.mockRestore()},play:async({canvas:e,canvasElement:n})=>{await g(()=>{t(c.get).toHaveBeenCalledWith("https://news.colby.edu/wp-json/custom/v1/external-posts")});const r=n.querySelectorAll(".grid .article-grid__item:first-child")[0].querySelectorAll(".text-group__heading")[0];await t(r.textContent.slice(0,-1)).toBe("Editor Pick: Colby Climate Story"),await t(r).toBeVisible(),await t(e.queryByText("President Interview in National Press")).not.toBeInTheDocument()}},A={render:p,args:{display_posts_method:"api",api_source:"media_coverage",external_media_api:"unknown_source",columns:3,range:3,cta:"Read Story"},beforeEach:()=>{const e=y(c,"get").mockResolvedValue({data:b});return()=>e.mockRestore()},play:async({canvasElement:e})=>{await g(()=>{t(c.get).toHaveBeenCalledWith("https://news.colby.edu/wp-json/custom/v1/external-posts")});const n=e.querySelectorAll(".article-grid__item");await t(n.length).toBe(0)}},v={render:p,args:{display_posts_method:"manual",style:"accordion",columns:3,render_api:!1,items:H.map(({buttons:e,...n})=>n)},play:async({canvas:e,canvasElement:n,userEvent:a})=>{const i=n.querySelectorAll(".grid .article-grid__item:first-child")[0].querySelectorAll(".text-group__heading")[0];await t(i.textContent.slice(0,-1)).toBe("Future of Artificial Intelligence"),await t(i).toBeVisible();const o=n.querySelector(".article-grid"),l=n.querySelectorAll(".article-grid__item");d(o,"clientWidth",960),l.forEach(m=>{d(m,"offsetWidth",320),d(m,"offsetHeight",360)}),window.dispatchEvent(new Event("resize"));const s=await e.findAllByText("Read More");await a.click(s[0]);const E=n.querySelectorAll(".accordion__flyout")[0],q=await T(E).findAllByText("AI is reshaping industries at an unprecedented pace.");await t(q.length).toBeGreaterThan(0),await t(e.queryByText("Learn More")).not.toBeInTheDocument()}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    display_posts_method: "manual",
    columns: 3,
    cta: "Read Story",
    items: mockItems,
    border: false
  },
  play: async ({
    canvasElement
  }) => {
    const first = canvasElement.querySelectorAll('.grid .article-grid__item:first-child')[0];
    const firstHeading = first.querySelectorAll('.text-group__heading')[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe('Future of Artificial Intelligence');
    await expect(firstHeading).toBeVisible();
    const second = canvasElement.querySelectorAll('.grid .article-grid__item:nth-child(2)')[0];
    const secondHeading = second.querySelectorAll('.text-group__heading')[0];
    await expect(secondHeading.textContent.slice(0, -1)).toBe('Sustainable Energy Solutions');
    await expect(secondHeading).toBeVisible();
    const third = canvasElement.querySelectorAll('.grid .article-grid__item:nth-child(3)')[0];
    const thirdHeading = third.querySelectorAll('.text-group__heading')[0];
    await expect(thirdHeading.textContent.slice(0, -1)).toBe('Modern Architecture Trends');
    await expect(thirdHeading).toBeVisible();
  }
}`,..._.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    display_posts_method: "manual",
    style: "accordion",
    columns: 3,
    render_api: false,
    items: mockItems
  },
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    const first = canvasElement.querySelectorAll('.grid .article-grid__item:first-child')[0];
    const firstHeading = first.querySelectorAll('.text-group__heading')[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe('Future of Artificial Intelligence');
    await expect(firstHeading).toBeVisible();
    const grid = canvasElement.querySelector(".article-grid");
    const gridItems = canvasElement.querySelectorAll(".article-grid__item");
    setElementSize(grid, "clientWidth", 1200);
    gridItems.forEach(item => {
      setElementSize(item, "offsetWidth", 300);
      setElementSize(item, "offsetHeight", 420);
    });
    window.dispatchEvent(new Event("resize"));
    const readMoreButtons = await canvas.findAllByText("Read More");
    await userEvent.click(readMoreButtons[0]);
    const aiSummary = await canvas.findAllByText("AI is reshaping industries at an unprecedented pace.");
    await expect(aiSummary.length).toBeGreaterThan(0);
    await expect(canvas.getAllByText("Read Story").length).toBeGreaterThan(0);
    await userEvent.click(readMoreButtons[1]);
    const solarSummary = await canvas.findAllByText("Solar and wind energy are becoming more accessible than ever.");
    await expect(solarSummary.length).toBeGreaterThan(0);
    setElementSize(grid, "clientWidth", 300);
    gridItems.forEach(item => {
      setElementSize(item, "offsetWidth", 300);
      setElementSize(item, "offsetHeight", 380);
    });
    window.dispatchEvent(new Event("resize"));
    await userEvent.click(readMoreButtons[0]);
    const closeIcons = canvasElement.querySelectorAll(".material-icons-sharp");
    if (closeIcons.length > 0) {
      await userEvent.click(closeIcons[0].closest("button"));
    }
  }
}`,...w.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    display_posts_method: "internal",
    render_posts_category: 1,
    columns: 3,
    post_limit: -1,
    cta: "Read Story"
  },
  beforeEach: () => {
    const pageOne = buildInternalPageOne();
    const pageTwo = buildInternalPageTwo();
    const spy = spyOn(axios, "get").mockImplementation(url => {
      if (url.includes("page=2")) {
        return Promise.resolve({
          data: pageTwo,
          headers: {
            "x-wp-totalpages": "3"
          }
        });
      }
      return Promise.resolve({
        data: pageOne,
        headers: {
          "x-wp-totalpages": "3"
        }
      });
    });
    return () => spy.mockRestore();
  },
  play: async ({
    canvas,
    canvasElement,
    userEvent
  }) => {
    const first = canvasElement.querySelectorAll('.grid .article-grid__item:first-child')[0];
    const firstHeading = first.querySelectorAll('.text-group__heading')[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe('Internal Story With ACF Summary');
    await expect(firstHeading).toBeVisible();
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
    });
    const seeMore = await canvas.findByRole("button", {
      name: "See More"
    });
    await userEvent.click(seeMore);
    await waitFor(() => {
      const forth = canvasElement.querySelectorAll('.grid .article-grid__item:nth-child(4)')[0];
      const forthHeading = forth.querySelectorAll('.text-group__heading')[0];
      expect(forthHeading).toBeInTheDocument();
    });
    // await waitFor(() => {
    //   expect(axios.get).toHaveBeenCalledTimes(2);
    // });
    // await expect(axios.get.mock.calls[1][0]).toContain("page=2");

    // const ctaButtons = canvas.getAllByText("Read Story");
    // await expect(ctaButtons.length).toBeGreaterThan(5);
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    display_posts_method: "api",
    api_source: "media_coverage",
    external_media_api: "all_media",
    columns: 3,
    range: 3,
    cta: "Read Story"
  },
  beforeEach: () => {
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: externalMediaPosts
    });
    return () => spy.mockRestore();
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith("https://news.colby.edu/wp-json/custom/v1/external-posts");
    });
    const first = canvasElement.querySelectorAll('.grid .article-grid__item:first-child')[0];
    const firstHeading = first.querySelectorAll('.text-group__heading')[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe('President Interview in National Press');
    await expect(firstHeading).toBeVisible();
    const second = canvasElement.querySelectorAll('.grid .article-grid__item:nth-child(2)')[0];
    const secondHeading = second.querySelectorAll('.text-group__heading')[0];
    await expect(secondHeading.textContent.slice(0, -1)).toBe('Editor Pick: Colby Climate Story');
    await expect(secondHeading).toBeVisible();
    const third = canvasElement.querySelectorAll('.grid .article-grid__item:nth-child(3)')[0];
    const thirdHeading = third.querySelectorAll('.text-group__heading')[0];
    await expect(thirdHeading.textContent.slice(0, -1)).toBe('General Media Mention');
    await expect(thirdHeading).toBeVisible();
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    display_posts_method: "api",
    api_source: "media_coverage",
    external_media_api: "president",
    columns: 2,
    range: 4,
    cta: "Read Story"
  },
  beforeEach: () => {
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: externalMediaPosts
    });
    return () => spy.mockRestore();
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith("https://news.colby.edu/wp-json/custom/v1/external-posts");
    });
    const first = canvasElement.querySelectorAll('.grid .article-grid__item:first-child')[0];
    const firstHeading = first.querySelectorAll('.text-group__heading')[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe('President Interview in National Press');
    await expect(firstHeading).toBeVisible();
    await expect(canvas.queryByText("Editor Pick: Colby Climate Story")).not.toBeInTheDocument();
  }
}`,...S.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    display_posts_method: "api",
    api_source: "media_coverage",
    external_media_api: "highlight",
    columns: 4,
    range: 4,
    cta: "Read Story"
  },
  beforeEach: () => {
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: externalMediaPosts
    });
    return () => spy.mockRestore();
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith("https://news.colby.edu/wp-json/custom/v1/external-posts");
    });
    const first = canvasElement.querySelectorAll('.grid .article-grid__item:first-child')[0];
    const firstHeading = first.querySelectorAll('.text-group__heading')[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe('Editor Pick: Colby Climate Story');
    await expect(firstHeading).toBeVisible();
    await expect(canvas.queryByText("President Interview in National Press")).not.toBeInTheDocument();
  }
}`,...B.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    display_posts_method: "api",
    api_source: "media_coverage",
    external_media_api: "unknown_source",
    columns: 3,
    range: 3,
    cta: "Read Story"
  },
  beforeEach: () => {
    const spy = spyOn(axios, "get").mockResolvedValue({
      data: externalMediaPosts
    });
    return () => spy.mockRestore();
  },
  play: async ({
    canvasElement
  }) => {
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith("https://news.colby.edu/wp-json/custom/v1/external-posts");
    });
    const articles = canvasElement.querySelectorAll(".article-grid__item");
    await expect(articles.length).toBe(0);
  }
}`,...A.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
    canvas,
    canvasElement,
    userEvent
  }) => {
    const first = canvasElement.querySelectorAll('.grid .article-grid__item:first-child')[0];
    const firstHeading = first.querySelectorAll('.text-group__heading')[0];
    await expect(firstHeading.textContent.slice(0, -1)).toBe('Future of Artificial Intelligence');
    await expect(firstHeading).toBeVisible();
    const grid = canvasElement.querySelector(".article-grid");
    const gridItems = canvasElement.querySelectorAll(".article-grid__item");
    setElementSize(grid, "clientWidth", 960);
    gridItems.forEach(item => {
      setElementSize(item, "offsetWidth", 320);
      setElementSize(item, "offsetHeight", 360);
    });
    window.dispatchEvent(new Event("resize"));
    const readMoreButtons = await canvas.findAllByText("Read More");
    await userEvent.click(readMoreButtons[0]);
    const flyout = canvasElement.querySelectorAll('.accordion__flyout')[0];
    const aiSummary = await within(flyout).findAllByText("AI is reshaping industries at an unprecedented pace.");
    await expect(aiSummary.length).toBeGreaterThan(0);
    await expect(canvas.queryByText("Learn More")).not.toBeInTheDocument();
  }
}`,...v.parameters?.docs?.source}}};const U=["ManualGrid","Accordion","InternalFetch","ApiFetch","TwoColumnGrid","FourColumnGrid","WithBorder","AccordionNoButtons"];export{w as Accordion,v as AccordionNoButtons,x as ApiFetch,B as FourColumnGrid,f as InternalFetch,_ as ManualGrid,S as TwoColumnGrid,A as WithBorder,U as __namedExportsOrder,K as default};
