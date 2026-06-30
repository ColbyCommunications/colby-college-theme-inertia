import{a as y}from"./index-DNeoPP0G.js";import{_ as w}from"./Show-DvM02k77.js";import"./preload-helper-CNn__nYE.js";import"./iframe-DjjpInl-.js";import"./_commonjsHelpers-CE1G-McA.js";import"./Alert-DKOZC3Mp.js";import"./ButtonGroup-CQqu5YyY.js";import"./Button-Bw6Diio2.js";import"./SiteHeader-DxXAB-l_.js";import"./ColbyLogo-Lj06E9_L.js";import"./Hamburger-DOGM4H0n.js";import"./UtilityMenu-B-QGXhGW.js";import"./Modal-nCy5iyCB.js";import"./Search-R50J8Il0.js";import"./Icon-BECZIoR6.js";import"./MobileMenu-BzUux9Kw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./SiteFooter-C2wdENJR.js";import"./AthleticsLogo-9WUcam2W.js";import"./ActionMenu-Clar1d9s.js";import"./Breadcrumbs-DEgEFciH.js";import"./ComponentRouter-ByPckGIP.js";import"./Hero-Du3kD_7S.js";import"./Context-seblQqT6.js";import"./TextGroup-RUgViCqU.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./Picture-DE2EuVpt.js";import"./HomeHero-B3yJFPu0.js";import"./HlsBackground-DZwwYhOu.js";import"./OverlayHero-C4L2EwXU.js";import"./Video-BT2ZCAAu.js";const{expect:a,waitFor:k,spyOn:h}=__STORYBOOK_MODULE_TEST__,f="https://news.colby.edu/wp-json/wp/v2/posts?per_page=5&tags=561&_embed=1",b="https://news.colby.edu/wp-json/wp/v2/posts?per_page=5&categories=8,12,14,15&_embed=1",_="https://news.colby.edu/wp-json/custom/v1/external-posts",n={url:"https://www.colby.edu",address:{text:"4000 Mayflower Hill<br>Waterville, ME 04901"},phone:"207-859-4000",alert:null},r={utility:[{title:"Directory",url:"#"},{title:"News",url:"#"}],main:[{title:"Admissions & Aid",url:"#"},{title:"Academics",url:"#"}],footer:[{title:"Academics",url:"#"},{title:"Campus Life",url:"#"}],action:[{title:"Contact Colby",url:"#"}],social:[{title:"Instagram",url:"#",icon:"instagram"}]},x={src:"https://placehold.co/1200x800",srcset:"https://placehold.co/1200x800 1200w, https://placehold.co/800x533 800w",alt:"Students on campus",sizes:{Square:"https://placehold.co/900x600",Square_mobile:"https://placehold.co/500x333",Hero:"https://placehold.co/1800x900",Rectangle:"https://placehold.co/1280x720",Rectangle_mobile:"https://placehold.co/800x450"}},g=()=>({blockName:"acf/hero",attrs:{data:{subheading:"Resilience",heading:"Resilience Hero Marker",paragraph:"Resilience hero paragraph.",image:x}}}),o=async e=>{const t=await e.findAllByText("Admissions & Aid");await a(t.length).toBeGreaterThan(0),await a(await e.findByText("Contact Colby")).toBeInTheDocument()},s=e=>({components:{PageShow:w},setup(){return{args:e}},template:'<PageShow v-bind="args" />'}),ae={title:"Templates/Page Show/Full Page/Resilience",component:w,parameters:{layout:"fullscreen"}},l={render:s,args:{layout:"default",blocks:null,siteData:n,menus:r},play:async({canvas:e})=>{await o(e),await a(e.queryByText("Resilience Hero Marker")).not.toBeInTheDocument()}},c={render:s,args:{layout:"default",blocks:[],siteData:n,menus:r},play:async({canvas:e})=>{await o(e),await a(e.queryByText("Resilience Hero Marker")).not.toBeInTheDocument()}},p={render:s,args:{layout:"default",blocks:[{blockName:"acf/not-a-real-block",attrs:{data:{heading:"Should Not Render"}}},g()],siteData:n,menus:r},play:async({canvas:e})=>{await o(e),await a(await e.findByText("Resilience Hero Marker")).toBeInTheDocument(),await a(e.queryByText("Should Not Render")).not.toBeInTheDocument()}},m={render:s,args:{layout:"default",blocks:[{blockName:"acf/carousel",attrs:{data:{render_api:!0,api:"Latest News",heading:"Resilience API Carousel Marker",paragraph:"Should render even when API returns empty.",autoplay:!1,buttons:[{url:"#",title:"All News"}]}}},{blockName:"acf/article-section",attrs:{data:{renderApi:!0,api:"Academic News",perView:1}}},{blockName:"acf/article-grid",attrs:{data:{display_posts_method:"api",api_source:"media_coverage",external_media_api:"all_media",range:3,columns:3,cta:"Read Story"}}}],siteData:n,menus:r},beforeEach:()=>{const e=h(y,"get").mockImplementation(t=>{const i=String(t);return i===f?Promise.resolve({data:[]}):i===b?Promise.resolve({data:[]}):i===_?Promise.resolve({data:[]}):Promise.resolve({data:[]})});return()=>{e.mockRestore()}},play:async({canvas:e})=>{await o(e),await k(()=>{a(y.get).toHaveBeenCalled()}),await a(await e.findByText("Resilience API Carousel Marker")).toBeInTheDocument()}},d={render:s,args:{layout:"default",blocks:[g(),{blockName:"acf/article-grid",attrs:{data:{display_posts_method:"internal",render_posts_category:1,post_limit:12,columns:3,cta:"Read Story"}}}],siteData:n,menus:r},beforeEach:()=>{const e=h(y,"get").mockImplementation(t=>String(t).includes("/wp-json/wp/v2/posts?categories=1")?Promise.resolve({data:{},headers:{}}):Promise.resolve({data:[]}));return()=>{e.mockRestore()}},play:async({canvas:e})=>{await o(e),await a(await e.findByText("Resilience Hero Marker")).toBeInTheDocument()}},u={render:s,args:{layout:"default",blocks:[g(),{blockName:"acf/article-grid",attrs:{data:{display_posts_method:"api",api_source:"media_coverage",external_media_api:"all_media",range:3,columns:3,cta:"Read Story"}}}],siteData:n,menus:r},beforeEach:()=>{const e=h(y,"get").mockImplementation(t=>String(t)===_?Promise.resolve({data:{}}):Promise.resolve({data:[]}));return()=>{e.mockRestore()}},play:async({canvas:e})=>{await o(e),await a(await e.findByText("Resilience Hero Marker")).toBeInTheDocument()}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    layout: "default",
    blocks: null,
    siteData,
    menus
  },
  play: async ({
    canvas
  }) => {
    await assertGlobalShell(canvas);
    await expect(canvas.queryByText("Resilience Hero Marker")).not.toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    layout: "default",
    blocks: [],
    siteData,
    menus
  },
  play: async ({
    canvas
  }) => {
    await assertGlobalShell(canvas);
    await expect(canvas.queryByText("Resilience Hero Marker")).not.toBeInTheDocument();
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    layout: "default",
    blocks: [{
      blockName: "acf/not-a-real-block",
      attrs: {
        data: {
          heading: "Should Not Render"
        }
      }
    }, createHeroBlock()],
    siteData,
    menus
  },
  play: async ({
    canvas
  }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Resilience Hero Marker")).toBeInTheDocument();
    await expect(canvas.queryByText("Should Not Render")).not.toBeInTheDocument();
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    layout: "default",
    blocks: [{
      blockName: "acf/carousel",
      attrs: {
        data: {
          render_api: true,
          api: "Latest News",
          heading: "Resilience API Carousel Marker",
          paragraph: "Should render even when API returns empty.",
          autoplay: false,
          buttons: [{
            url: "#",
            title: "All News"
          }]
        }
      }
    }, {
      blockName: "acf/article-section",
      attrs: {
        data: {
          renderApi: true,
          api: "Academic News",
          perView: 1
        }
      }
    }, {
      blockName: "acf/article-grid",
      attrs: {
        data: {
          display_posts_method: "api",
          api_source: "media_coverage",
          external_media_api: "all_media",
          range: 3,
          columns: 3,
          cta: "Read Story"
        }
      }
    }],
    siteData,
    menus
  },
  beforeEach: () => {
    const axiosGetSpy = spyOn(axios, "get").mockImplementation(url => {
      const requestUrl = String(url);
      if (requestUrl === LATEST_NEWS_ENDPOINT) {
        return Promise.resolve({
          data: []
        });
      }
      if (requestUrl === ACADEMIC_NEWS_ENDPOINT) {
        return Promise.resolve({
          data: []
        });
      }
      if (requestUrl === EXTERNAL_GRID_ENDPOINT) {
        return Promise.resolve({
          data: []
        });
      }
      return Promise.resolve({
        data: []
      });
    });
    return () => {
      axiosGetSpy.mockRestore();
    };
  },
  play: async ({
    canvas
  }) => {
    await assertGlobalShell(canvas);
    await waitFor(() => {
      expect(axios.get).toHaveBeenCalled();
    });
    await expect(await canvas.findByText("Resilience API Carousel Marker")).toBeInTheDocument();
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    layout: "default",
    blocks: [createHeroBlock(), {
      blockName: "acf/article-grid",
      attrs: {
        data: {
          display_posts_method: "internal",
          render_posts_category: 1,
          post_limit: 12,
          columns: 3,
          cta: "Read Story"
        }
      }
    }],
    siteData,
    menus
  },
  beforeEach: () => {
    const axiosGetSpy = spyOn(axios, "get").mockImplementation(url => {
      const requestUrl = String(url);
      if (requestUrl.includes("/wp-json/wp/v2/posts?categories=1")) {
        // Non-array payload simulates an API contract break while staying deterministic.
        return Promise.resolve({
          data: {},
          headers: {}
        });
      }
      return Promise.resolve({
        data: []
      });
    });
    return () => {
      axiosGetSpy.mockRestore();
    };
  },
  play: async ({
    canvas
  }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Resilience Hero Marker")).toBeInTheDocument();
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    layout: "default",
    blocks: [createHeroBlock(), {
      blockName: "acf/article-grid",
      attrs: {
        data: {
          display_posts_method: "api",
          api_source: "media_coverage",
          external_media_api: "all_media",
          range: 3,
          columns: 3,
          cta: "Read Story"
        }
      }
    }],
    siteData,
    menus
  },
  beforeEach: () => {
    const axiosGetSpy = spyOn(axios, "get").mockImplementation(url => {
      const requestUrl = String(url);
      if (requestUrl === EXTERNAL_GRID_ENDPOINT) {
        // Non-array payload simulates an API contract break while staying deterministic.
        return Promise.resolve({
          data: {}
        });
      }
      return Promise.resolve({
        data: []
      });
    });
    return () => {
      axiosGetSpy.mockRestore();
    };
  },
  play: async ({
    canvas
  }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Resilience Hero Marker")).toBeInTheDocument();
  }
}`,...u.parameters?.docs?.source}}};const te=["NullBlocksProp","EmptyBlocksArray","UnknownBlockIgnored","ApiEmptyResponses","InternalGridFetchErrorHandled","ExternalGridFetchErrorHandled"];export{m as ApiEmptyResponses,c as EmptyBlocksArray,u as ExternalGridFetchErrorHandled,d as InternalGridFetchErrorHandled,l as NullBlocksProp,p as UnknownBlockIgnored,te as __namedExportsOrder,ae as default};
