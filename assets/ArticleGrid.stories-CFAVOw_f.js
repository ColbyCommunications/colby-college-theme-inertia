import{a as o}from"./index-C0Zqfgkc.js";import I from"./ArticleGrid-BfhEIwB6.js";import{c as p,a as A,b as k}from"./mock-data-iuhpH0Ld.js";import"./iframe-ChoNu1wD.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-bCJO3rz8.js";import"./Article-DfWsROgf.js";import"./ButtonGroup-DmkXXZnL.js";import"./Button-gzcwp9hK.js";import"./Picture-uLfvtuIJ.js";const{expect:t,spyOn:m,waitFor:c}=__STORYBOOK_MODULE_TEST__,T=[{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag"},heading:"Future of Artificial Intelligence",subheading:"Technology",paragraph:"AI is reshaping industries at an unprecedented pace.",url:"#",sizes:{desktop:"https://placehold.co/600x400",mobile:"https://placehold.co/300x200"},buttons:[{button:{title:"Read Story",url:"https://www.colby.edu"}}]},{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag"},heading:"Sustainable Energy Solutions",subheading:"Environment",paragraph:"Solar and wind energy are becoming more accessible than ever.",url:"#",sizes:{desktop:"https://placehold.co/600x400",mobile:"https://placehold.co/300x200"},buttons:[{button:{title:"Learn More",url:"https://www.colby.edu/academics"}}]},{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag"},heading:"Modern Architecture Trends",subheading:"Design",paragraph:"Exploring the intersection of function and aesthetics in 2024.",url:"#",sizes:{desktop:"https://placehold.co/600x400",mobile:"https://placehold.co/300x200"},buttons:[{button:{title:"Read Story",url:"https://www.colby.edu/news"}}]}],v=[{...p(1)[0],title:{rendered:"President Interview in National Press"},tags:[{name:"president"}]},{...p(1)[0],title:{rendered:"Editor Pick: Colby Climate Story"},tags:[{name:"editors-pick"}]},{...p(1)[0],title:{rendered:"General Media Mention"},tags:[{name:"campus"}]},{...p(1)[0],title:{rendered:"Ignored Non-Media Story"},story_type:[{slug:"campus-story"}]},{...p(1)[0],title:{rendered:"Ignored Missing Content"},content:{rendered:""}}],i=(e,a,n)=>{e&&Object.defineProperty(e,a,{configurable:!0,get:()=>n})},D={title:"Core Components/Article Grid",component:I},s=e=>({components:{ArticleGrid:I},setup(){return{args:e}},template:'<ArticleGrid v-bind="args" />'}),g={render:s,args:{display_posts_method:"manual",columns:3,cta:"Read Story",items:T,border:!1},play:async({canvas:e})=>{await t(await e.findByText("Future of Artificial Intelligence")).toBeVisible(),await t(await e.findByText("Sustainable Energy Solutions")).toBeVisible(),await t(await e.findByText("Modern Architecture Trends")).toBeVisible()}},h={render:s,args:{display_posts_method:"manual",style:"accordion",columns:3,render_api:!1,items:T},play:async({canvas:e,canvasElement:a,userEvent:n})=>{await t(await e.findByText("Future of Artificial Intelligence")).toBeVisible();const r=a.querySelector(".article-grid"),u=a.querySelectorAll(".article-grid__item");i(r,"clientWidth",1200),u.forEach(d=>{i(d,"offsetWidth",300),i(d,"offsetHeight",420)}),window.dispatchEvent(new Event("resize"));const l=await e.findAllByText("Read More");await n.click(l[0]);const S=await e.findAllByText("AI is reshaping industries at an unprecedented pace.");await t(S.length).toBeGreaterThan(0),await t(e.getAllByText("Read Story").length).toBeGreaterThan(0),await n.click(l[1]);const y=await e.findAllByText("Solar and wind energy are becoming more accessible than ever.");await t(y.length).toBeGreaterThan(0),i(r,"clientWidth",300),u.forEach(d=>{i(d,"offsetWidth",300),i(d,"offsetHeight",380)}),window.dispatchEvent(new Event("resize")),await n.click(l[0]);const E=a.querySelectorAll(".material-icons-sharp");E.length>0&&await n.click(E[0].closest("button"))}},R=()=>{const e=A(12);return e[0]=k({title:{rendered:"Internal Story With ACF Summary"},excerpt:{rendered:""},acf_blocks:[{name:"acf/paragraph",fields:{paragraph_text:"<p>Fallback summary from ACF paragraph content for internal fetch coverage branch testing.</p>"}}],link:"https://news.colby.edu/story/internal-acf/"}),e[1]=k({title:{rendered:"Internal Story With Empty Summary"},excerpt:{rendered:""},acf_blocks:[],link:"https://news.colby.edu/story/internal-empty/"}),e},M=()=>A(6).map((e,a)=>({...e,id:100+a,title:{rendered:`Page Two Story ${a+1}`},link:`https://news.colby.edu/story/page-two-${a+1}/`})),w={render:s,args:{display_posts_method:"internal",render_posts_category:1,columns:3,post_limit:-1,cta:"Read Story"},beforeEach:()=>{const e=R(),a=M(),n=m(o,"get").mockImplementation(r=>r.includes("page=2")?Promise.resolve({data:a,headers:{"x-wp-totalpages":"3"}}):Promise.resolve({data:e,headers:{"x-wp-totalpages":"3"}}));return()=>n.mockRestore()},play:async({canvas:e,userEvent:a})=>{await t(await e.findByText("Internal Story With ACF Summary")).toBeVisible(),await c(()=>{t(o.get).toHaveBeenCalledTimes(1)});const n=await e.findByRole("button",{name:"See More"});await a.click(n),await c(()=>{t(e.getByText("Page Two Story 1")).toBeInTheDocument()}),await c(()=>{t(o.get).toHaveBeenCalledTimes(2)}),await t(o.get.mock.calls[1][0]).toContain("page=2");const r=e.getAllByText("Read Story");await t(r.length).toBeGreaterThan(5)}},x={render:s,args:{display_posts_method:"api",api_source:"media_coverage",external_media_api:"all_media",columns:3,range:3,cta:"Read Story"},beforeEach:()=>{const e=m(o,"get").mockResolvedValue({data:v});return()=>e.mockRestore()},play:async({canvas:e})=>{await c(()=>{t(o.get).toHaveBeenCalledWith("https://news.colby.edu/wp-json/custom/v1/external-posts")}),await t(await e.findByText("President Interview in National Press")).toBeVisible(),await t(await e.findByText("Editor Pick: Colby Climate Story")).toBeVisible(),await t(await e.findByText("General Media Mention")).toBeVisible()}},f={render:s,args:{display_posts_method:"api",api_source:"media_coverage",external_media_api:"president",columns:2,range:4,cta:"Read Story"},beforeEach:()=>{const e=m(o,"get").mockResolvedValue({data:v});return()=>e.mockRestore()},play:async({canvas:e})=>{await c(()=>{t(o.get).toHaveBeenCalledWith("https://news.colby.edu/wp-json/custom/v1/external-posts")}),await t(await e.findByText("President Interview in National Press")).toBeVisible(),await t(e.queryByText("Editor Pick: Colby Climate Story")).not.toBeInTheDocument()}},B={render:s,args:{display_posts_method:"api",api_source:"media_coverage",external_media_api:"highlight",columns:4,range:4,cta:"Read Story"},beforeEach:()=>{const e=m(o,"get").mockResolvedValue({data:v});return()=>e.mockRestore()},play:async({canvas:e})=>{await c(()=>{t(o.get).toHaveBeenCalledWith("https://news.colby.edu/wp-json/custom/v1/external-posts")}),await t(await e.findByText("Editor Pick: Colby Climate Story")).toBeVisible(),await t(e.queryByText("President Interview in National Press")).not.toBeInTheDocument()}},_={render:s,args:{display_posts_method:"api",api_source:"media_coverage",external_media_api:"unknown_source",columns:3,range:3,cta:"Read Story"},beforeEach:()=>{const e=m(o,"get").mockResolvedValue({data:v});return()=>e.mockRestore()},play:async({canvasElement:e})=>{await c(()=>{t(o.get).toHaveBeenCalledWith("https://news.colby.edu/wp-json/custom/v1/external-posts")});const a=e.querySelectorAll(".article-grid__item");await t(a.length).toBe(0)}},b={render:s,args:{display_posts_method:"manual",style:"accordion",columns:3,render_api:!1,items:T.map(({buttons:e,...a})=>a)},play:async({canvas:e,canvasElement:a,userEvent:n})=>{await t(await e.findByText("Future of Artificial Intelligence")).toBeVisible();const r=a.querySelector(".article-grid"),u=a.querySelectorAll(".article-grid__item");i(r,"clientWidth",960),u.forEach(y=>{i(y,"offsetWidth",320),i(y,"offsetHeight",360)}),window.dispatchEvent(new Event("resize"));const l=await e.findAllByText("Read More");await n.click(l[0]);const S=await e.findAllByText("AI is reshaping industries at an unprecedented pace.");await t(S.length).toBeGreaterThan(0),await t(e.queryByText("Learn More")).not.toBeInTheDocument()}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    display_posts_method: "manual",
    columns: 3,
    cta: "Read Story",
    items: mockItems,
    border: false
  },
  play: async ({
    canvas
  }) => {
    await expect(await canvas.findByText("Future of Artificial Intelligence")).toBeVisible();
    await expect(await canvas.findByText("Sustainable Energy Solutions")).toBeVisible();
    await expect(await canvas.findByText("Modern Architecture Trends")).toBeVisible();
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
    await expect(await canvas.findByText("Future of Artificial Intelligence")).toBeVisible();
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
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
    userEvent
  }) => {
    await expect(await canvas.findByText("Internal Story With ACF Summary")).toBeVisible();
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
    });
    const seeMore = await canvas.findByRole("button", {
      name: "See More"
    });
    await userEvent.click(seeMore);
    await waitFor(() => {
      expect(canvas.getByText("Page Two Story 1")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(2);
    });
    await expect(axios.get.mock.calls[1][0]).toContain("page=2");
    const ctaButtons = canvas.getAllByText("Read Story");
    await expect(ctaButtons.length).toBeGreaterThan(5);
  }
}`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
    canvas
  }) => {
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith("https://news.colby.edu/wp-json/custom/v1/external-posts");
    });
    await expect(await canvas.findByText("President Interview in National Press")).toBeVisible();
    await expect(await canvas.findByText("Editor Pick: Colby Climate Story")).toBeVisible();
    await expect(await canvas.findByText("General Media Mention")).toBeVisible();
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
    canvas
  }) => {
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith("https://news.colby.edu/wp-json/custom/v1/external-posts");
    });
    await expect(await canvas.findByText("President Interview in National Press")).toBeVisible();
    await expect(canvas.queryByText("Editor Pick: Colby Climate Story")).not.toBeInTheDocument();
  }
}`,...f.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
    canvas
  }) => {
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith("https://news.colby.edu/wp-json/custom/v1/external-posts");
    });
    await expect(await canvas.findByText("Editor Pick: Colby Climate Story")).toBeVisible();
    await expect(canvas.queryByText("President Interview in National Press")).not.toBeInTheDocument();
  }
}`,...B.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
    await expect(await canvas.findByText("Future of Artificial Intelligence")).toBeVisible();
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
    const aiSummary = await canvas.findAllByText("AI is reshaping industries at an unprecedented pace.");
    await expect(aiSummary.length).toBeGreaterThan(0);
    await expect(canvas.queryByText("Learn More")).not.toBeInTheDocument();
  }
}`,...b.parameters?.docs?.source}}};const N=["ManualGrid","Accordion","InternalFetch","ApiFetch","TwoColumnGrid","FourColumnGrid","WithBorder","AccordionNoButtons"];export{h as Accordion,b as AccordionNoButtons,x as ApiFetch,B as FourColumnGrid,w as InternalFetch,g as ManualGrid,f as TwoColumnGrid,_ as WithBorder,N as __namedExportsOrder,D as default};
