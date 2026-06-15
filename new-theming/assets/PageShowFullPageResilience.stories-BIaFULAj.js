import{a as y}from"./index-DNeoPP0G.js";import{_ as w}from"./Show-CYRouXmk.js";import"./preload-helper-DmLEtdH0.js";import"./iframe-CnrjvFls.js";import"./_commonjsHelpers-CE1G-McA.js";import"./Alert-BBDj9y69.js";import"./ButtonGroup-DkbncDde.js";import"./Button-7VUkjaD3.js";import"./SiteHeader-NtiCWV3-.js";import"./ColbyLogo-CEGhfwUZ.js";import"./Hamburger-DFxhheDM.js";import"./UtilityMenu-DWObmWUd.js";import"./Modal-BJ-og-K2.js";import"./Search-ScNaCu_I.js";import"./Icon-CmcMkQl2.js";import"./MobileMenu-Cp1jtOUV.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./SiteFooter-DyuGHZtI.js";import"./AthleticsLogo-CwNJGAxO.js";import"./ActionMenu-DBweRJYu.js";import"./Breadcrumbs-B1hAu1kL.js";import"./ComponentRouter-B4wfgy5h.js";import"./Hero-kmelmAQU.js";import"./Context-D5cZySbU.js";import"./TextGroup-CmaI_y-9.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./Picture-Dqrw0ueQ.js";import"./HomeHero-DTLL4LfB.js";import"./HlsBackground-B8HRjIt4.js";import"./OverlayHero-D8MNTMT-.js";import"./Video-DOqs8SQe.js";const{expect:a,waitFor:k,spyOn:h}=__STORYBOOK_MODULE_TEST__,f="https://news.colby.edu/wp-json/wp/v2/posts?per_page=5&tags=561&_embed=1",b="https://news.colby.edu/wp-json/wp/v2/posts?per_page=5&categories=8,12,14,15&_embed=1",_="https://news.colby.edu/wp-json/custom/v1/external-posts",n={url:"https://www.colby.edu",address:{text:"4000 Mayflower Hill<br>Waterville, ME 04901"},phone:"207-859-4000",alert:null},r={utility:[{title:"Directory",url:"#"},{title:"News",url:"#"}],main:[{title:"Admissions & Aid",url:"#"},{title:"Academics",url:"#"}],footer:[{title:"Academics",url:"#"},{title:"Campus Life",url:"#"}],action:[{title:"Contact Colby",url:"#"}],social:[{title:"Instagram",url:"#",icon:"instagram"}]},x={src:"https://placehold.co/1200x800",srcset:"https://placehold.co/1200x800 1200w, https://placehold.co/800x533 800w",alt:"Students on campus",sizes:{Square:"https://placehold.co/900x600",Square_mobile:"https://placehold.co/500x333",Hero:"https://placehold.co/1800x900",Rectangle:"https://placehold.co/1280x720",Rectangle_mobile:"https://placehold.co/800x450"}},g=()=>({blockName:"acf/hero",attrs:{data:{subheading:"Resilience",heading:"Resilience Hero Marker",paragraph:"Resilience hero paragraph.",image:x}}}),o=async e=>{const t=await e.findAllByText("Admissions & Aid");await a(t.length).toBeGreaterThan(0),await a(await e.findByText("Contact Colby")).toBeInTheDocument()},s=e=>({components:{PageShow:w},setup(){return{args:e}},template:'<PageShow v-bind="args" />'}),ee={title:"Templates/Page Show/Full Page/Resilience",component:w,parameters:{layout:"fullscreen"}},i={render:s,args:{layout:"default",blocks:null,siteData:n,menus:r},play:async({canvas:e})=>{await o(e),await a(e.queryByText("Resilience Hero Marker")).not.toBeInTheDocument()}},c={render:s,args:{layout:"default",blocks:[],siteData:n,menus:r},play:async({canvas:e})=>{await o(e),await a(e.queryByText("Resilience Hero Marker")).not.toBeInTheDocument()}},p={render:s,args:{layout:"default",blocks:[{blockName:"acf/not-a-real-block",attrs:{data:{heading:"Should Not Render"}}},g()],siteData:n,menus:r},play:async({canvas:e})=>{await o(e),await a(await e.findByText("Resilience Hero Marker")).toBeInTheDocument(),await a(e.queryByText("Should Not Render")).not.toBeInTheDocument()}},m={render:s,args:{layout:"default",blocks:[{blockName:"acf/carousel",attrs:{data:{render_api:!0,api:"Latest News",heading:"Resilience API Carousel Marker",paragraph:"Should render even when API returns empty.",autoplay:!1,buttons:[{url:"#",title:"All News"}]}}},{blockName:"acf/article-section",attrs:{data:{renderApi:!0,api:"Academic News",perView:1}}},{blockName:"acf/article-grid",attrs:{data:{display_posts_method:"api",api_source:"media_coverage",external_media_api:"all_media",range:3,columns:3,cta:"Read Story"}}}],siteData:n,menus:r},beforeEach:()=>{const e=h(y,"get").mockImplementation(t=>{const l=String(t);return l===f?Promise.resolve({data:[]}):l===b?Promise.resolve({data:[]}):l===_?Promise.resolve({data:[]}):Promise.resolve({data:[]})});return()=>{e.mockRestore()}},play:async({canvas:e})=>{await o(e),await k(()=>{a(y.get).toHaveBeenCalled()}),await a(await e.findByText("Resilience API Carousel Marker")).toBeInTheDocument()}},d={render:s,args:{layout:"default",blocks:[g(),{blockName:"acf/article-grid",attrs:{data:{display_posts_method:"internal",render_posts_category:1,post_limit:12,columns:3,cta:"Read Story"}}}],siteData:n,menus:r},beforeEach:()=>{const e=h(y,"get").mockImplementation(t=>String(t).includes("/wp-json/wp/v2/posts?categories=1")?Promise.resolve({data:{},headers:{}}):Promise.resolve({data:[]}));return()=>{e.mockRestore()}},play:async({canvas:e})=>{await o(e),await a(await e.findByText("Resilience Hero Marker")).toBeInTheDocument()}},u={render:s,args:{layout:"default",blocks:[g(),{blockName:"acf/article-grid",attrs:{data:{display_posts_method:"api",api_source:"media_coverage",external_media_api:"all_media",range:3,columns:3,cta:"Read Story"}}}],siteData:n,menus:r},beforeEach:()=>{const e=h(y,"get").mockImplementation(t=>String(t)===_?Promise.resolve({data:{}}):Promise.resolve({data:[]}));return()=>{e.mockRestore()}},play:async({canvas:e})=>{await o(e),await a(await e.findByText("Resilience Hero Marker")).toBeInTheDocument()}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const ae=["NullBlocksProp","EmptyBlocksArray","UnknownBlockIgnored","ApiEmptyResponses","InternalGridFetchErrorHandled","ExternalGridFetchErrorHandled"];export{m as ApiEmptyResponses,c as EmptyBlocksArray,u as ExternalGridFetchErrorHandled,d as InternalGridFetchErrorHandled,i as NullBlocksProp,p as UnknownBlockIgnored,ae as __namedExportsOrder,ee as default};
