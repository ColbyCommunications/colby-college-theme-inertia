import{_ as T}from"./Show-BmnPU_ex.js";import"./iframe-qn9ebuhk.js";import"./preload-helper-PPVm8Dsz.js";import"./Alert-DBc5kIO3.js";import"./ButtonGroup-CoN_pgMt.js";import"./Button-zNl_wLY1.js";import"./SiteHeader-B0t8OrE1.js";import"./ColbyLogo-BQuICFrX.js";import"./Hamburger-T1XoY29n.js";import"./UtilityMenu-BGQ2ZnM3.js";import"./Modal-D99wf2ur.js";import"./Search-BW4ewLn-.js";import"./MobileMenu-B8dV9GJP.js";import"./SiteFooter-BNtZUhBu.js";import"./AthleticsLogo-DLFTVRL4.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ActionMenu-Di6rz8m2.js";import"./Icon-DYWa9bB5.js";import"./Hero-CmxhkBhE.js";import"./Context-zu6BnEJv.js";import"./TextGroup-Jc2jy6rj.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./Picture-BukFCmKj.js";import"./OverlayHero-DM7d-Uwy.js";import"./Video-Drdr9osb.js";import"./SubpageNav-CF3M3yBF.js";import"./Widget-D2b3RbEp.js";import"./Wysiwyg-DsxPtfhB.js";const{expect:o}=__STORYBOOK_MODULE_TEST__,a={url:"https://www.colby.edu",address:{text:"4000 Mayflower Hill<br>Waterville, ME 04901"},phone:"207-859-4000",alert:null},n={utility:[{title:"Directory",url:"#"},{title:"News",url:"#"}],main:[{title:"Admissions & Aid",url:"#"},{title:"Academics",url:"#"}],footer:[{title:"Academics",url:"#"},{title:"Campus Life",url:"#"}],action:[{title:"Contact Colby",url:"#"}],social:[{title:"Instagram",url:"#",icon:"instagram"}]},y={src:"https://placehold.co/1200x800",srcset:"https://placehold.co/1200x800 1200w, https://placehold.co/800x533 800w",alt:"Students on campus",sizes:{Square:"https://placehold.co/900x600",Square_mobile:"https://placehold.co/500x333",Hero:"https://placehold.co/1800x900",Rectangle:"https://placehold.co/1280x720",Rectangle_mobile:"https://placehold.co/800x450"}},k={src:"https://placehold.co/600x400",srcset:"https://placehold.co/600x400 600w, https://placehold.co/300x200 300w",alt:"Story card",sizes:{desktop:"https://placehold.co/600x400",mobile:"https://placehold.co/300x200"}},s=(e,t="Composition")=>({blockName:"acf/hero",attrs:{data:{subheading:t,heading:e,paragraph:`${e} paragraph.`,image:y}}}),f=e=>({blockName:"acf/home-hero",attrs:{data:{subheading:"Composition",heading:e,caption:"composition caption",paragraph:`${e} paragraph.`,image:y}}}),x=(e,t)=>({blockName:"acf/carousel",attrs:{data:{render_api:!1,heading:e,paragraph:`${e} paragraph.`,autoplay:!1,buttons:[{url:"#",title:"All Stories"}],items:[{image:y,heading:t,subheading:"Carousel",paragraph:`${t} paragraph.`,url:"#",buttons:[{button:{url:"#",title:"Read Story"}}]}]}}}),w=e=>({blockName:"acf/article-grid",attrs:{data:{display_posts_method:"manual",columns:3,cta:"Read Story",items:[{image:k,heading:e,subheading:"Grid",paragraph:`${e} paragraph.`,url:"#"}]}}}),g=e=>({blockName:"acf/facts-figures",attrs:{data:{subheading:"Composition",heading:e,paragraph:`${e} paragraph.`,facts:[{figure:"100",paragraph:"marker"}],image:y}}}),S=e=>({blockName:"acf/dark-interstitial",attrs:{data:{subheading:"Composition",heading:e,icon:!0,paragraph:`${e} paragraph.`}}}),H=(e,t)=>({blockName:"acf/article-section",attrs:{data:{renderApi:!1,heading:e,subheading:"Composition",paragraph:`${e} paragraph.`,gridProps:{items:[{image:k,heading:t,subheading:"Section",paragraph:`${t} paragraph.`,url:"#",buttons:[{button:{size:"small",title:"Read",url:"#"}}]}]}}}}),r=async e=>{const t=await e.findAllByText("Admissions & Aid");await o(t.length).toBeGreaterThan(0),await o(await e.findByText("Contact Colby")).toBeInTheDocument()},i=e=>({components:{PageShow:T},setup(){return{args:e}},template:'<PageShow v-bind="args" />'}),oe={title:"Templates/Page Show/Full Page/Composition",component:T,parameters:{layout:"fullscreen"}},l={render:i,args:{layout:"default",blocks:[s("Composition Single Hero")],siteData:a,menus:n},play:async({canvas:e})=>{await r(e),await o(await e.findByText("Composition Single Hero")).toBeInTheDocument()}},m={render:i,args:{layout:"default",blocks:[x("Composition Single Carousel","Composition Carousel Item")],siteData:a,menus:n},play:async({canvas:e})=>{await r(e),await o(await e.findByText("Composition Single Carousel")).toBeInTheDocument()}},p={render:i,args:{layout:"default",blocks:[s("Composition Hero Repeat A"),s("Composition Hero Repeat B")],siteData:a,menus:n},play:async({canvas:e})=>{await r(e),await o(await e.findByText("Composition Hero Repeat A")).toBeInTheDocument(),await o(await e.findByText("Composition Hero Repeat B")).toBeInTheDocument()}},d={render:i,args:{layout:"default",blocks:[w("Composition Grid Repeat A"),w("Composition Grid Repeat B")],siteData:a,menus:n},play:async({canvas:e})=>{await r(e);const t=await e.findAllByText("Read Story");await o(t.length).toBeGreaterThanOrEqual(2)}},u={render:i,args:{layout:"default",blocks:[s("Order Hero First"),x("Order Carousel Second","Order Carousel Second Item")],siteData:a,menus:n},play:async({canvas:e,canvasElement:t})=>{await r(e),await o(await e.findByText("Order Hero First")).toBeInTheDocument(),await o(await e.findByText("Order Carousel Second")).toBeInTheDocument();const c=t.textContent||"";await o(c.indexOf("Order Hero First")).toBeLessThan(c.indexOf("Order Carousel Second"))}},h={render:i,args:{layout:"default",blocks:[x("Order Carousel First","Order Carousel First Item"),s("Order Hero Second")],siteData:a,menus:n},play:async({canvas:e,canvasElement:t})=>{await r(e),await o(await e.findByText("Order Carousel First")).toBeInTheDocument(),await o(await e.findByText("Order Hero Second")).toBeInTheDocument();const c=t.textContent||"";await o(c.indexOf("Order Carousel First")).toBeLessThan(c.indexOf("Order Hero Second"))}},B={render:i,args:{layout:"default",blocks:[f("Composition HomeHero Only"),w("Composition Grid No Hero"),g("Composition Facts No Hero"),S("Composition Dark No Hero")],siteData:a,menus:n},play:async({canvas:e})=>{await r(e),await o(await e.findByText("Composition HomeHero Only")).toBeInTheDocument(),await o(await e.findByText("Composition Grid No Hero")).toBeInTheDocument(),await o(await e.findByText("Composition Facts No Hero")).toBeInTheDocument(),await o(await e.findByText("Composition Dark No Hero")).toBeInTheDocument(),await o(e.queryByText("Composition Single Hero")).not.toBeInTheDocument()}},C={render:i,args:{layout:"default",blocks:[S("Composition Dark First"),H("Composition Section Second","Composition Section Grid Item"),w("Composition Grid Third"),x("Composition Carousel Fourth","Composition Carousel Item Fourth"),g("Composition Facts Fifth"),f("Composition HomeHero Sixth"),s("Composition Hero Seventh")],siteData:a,menus:n},play:async({canvas:e})=>{await r(e),await o(await e.findByText("Composition Dark First")).toBeInTheDocument(),await o(await e.findByText("Composition Section Second")).toBeInTheDocument(),await o(await e.findByText("Composition Grid Third")).toBeInTheDocument(),await o(await e.findByText("Composition Carousel Fourth")).toBeInTheDocument(),await o(await e.findByText("Composition Facts Fifth")).toBeInTheDocument(),await o(await e.findByText("Composition HomeHero Sixth")).toBeInTheDocument(),await o(await e.findByText("Composition Hero Seventh")).toBeInTheDocument()}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    layout: "default",
    blocks: [makeHeroBlock("Composition Single Hero")],
    siteData,
    menus
  },
  play: async ({
    canvas
  }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Composition Single Hero")).toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    layout: "default",
    blocks: [makeCarouselBlock("Composition Single Carousel", "Composition Carousel Item")],
    siteData,
    menus
  },
  play: async ({
    canvas
  }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Composition Single Carousel")).toBeInTheDocument();
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    layout: "default",
    blocks: [makeHeroBlock("Composition Hero Repeat A"), makeHeroBlock("Composition Hero Repeat B")],
    siteData,
    menus
  },
  play: async ({
    canvas
  }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Composition Hero Repeat A")).toBeInTheDocument();
    await expect(await canvas.findByText("Composition Hero Repeat B")).toBeInTheDocument();
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    layout: "default",
    blocks: [makeGridBlock("Composition Grid Repeat A"), makeGridBlock("Composition Grid Repeat B")],
    siteData,
    menus
  },
  play: async ({
    canvas
  }) => {
    await assertGlobalShell(canvas);
    const ctas = await canvas.findAllByText("Read Story");
    await expect(ctas.length).toBeGreaterThanOrEqual(2);
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    layout: "default",
    blocks: [makeHeroBlock("Order Hero First"), makeCarouselBlock("Order Carousel Second", "Order Carousel Second Item")],
    siteData,
    menus
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Order Hero First")).toBeInTheDocument();
    await expect(await canvas.findByText("Order Carousel Second")).toBeInTheDocument();
    const text = canvasElement.textContent || "";
    await expect(text.indexOf("Order Hero First")).toBeLessThan(text.indexOf("Order Carousel Second"));
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    layout: "default",
    blocks: [makeCarouselBlock("Order Carousel First", "Order Carousel First Item"), makeHeroBlock("Order Hero Second")],
    siteData,
    menus
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Order Carousel First")).toBeInTheDocument();
    await expect(await canvas.findByText("Order Hero Second")).toBeInTheDocument();
    const text = canvasElement.textContent || "";
    await expect(text.indexOf("Order Carousel First")).toBeLessThan(text.indexOf("Order Hero Second"));
  }
}`,...h.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    layout: "default",
    blocks: [makeHomeHeroBlock("Composition HomeHero Only"), makeGridBlock("Composition Grid No Hero"), makeFactsBlock("Composition Facts No Hero"), makeDarkBlock("Composition Dark No Hero")],
    siteData,
    menus
  },
  play: async ({
    canvas
  }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Composition HomeHero Only")).toBeInTheDocument();
    await expect(await canvas.findByText("Composition Grid No Hero")).toBeInTheDocument();
    await expect(await canvas.findByText("Composition Facts No Hero")).toBeInTheDocument();
    await expect(await canvas.findByText("Composition Dark No Hero")).toBeInTheDocument();
    await expect(canvas.queryByText("Composition Single Hero")).not.toBeInTheDocument();
  }
}`,...B.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    layout: "default",
    blocks: [makeDarkBlock("Composition Dark First"), makeArticleSectionBlock("Composition Section Second", "Composition Section Grid Item"), makeGridBlock("Composition Grid Third"), makeCarouselBlock("Composition Carousel Fourth", "Composition Carousel Item Fourth"), makeFactsBlock("Composition Facts Fifth"), makeHomeHeroBlock("Composition HomeHero Sixth"), makeHeroBlock("Composition Hero Seventh")],
    siteData,
    menus
  },
  play: async ({
    canvas
  }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Composition Dark First")).toBeInTheDocument();
    await expect(await canvas.findByText("Composition Section Second")).toBeInTheDocument();
    await expect(await canvas.findByText("Composition Grid Third")).toBeInTheDocument();
    await expect(await canvas.findByText("Composition Carousel Fourth")).toBeInTheDocument();
    await expect(await canvas.findByText("Composition Facts Fifth")).toBeInTheDocument();
    await expect(await canvas.findByText("Composition HomeHero Sixth")).toBeInTheDocument();
    await expect(await canvas.findByText("Composition Hero Seventh")).toBeInTheDocument();
  }
}`,...C.parameters?.docs?.source}}};const te=["SingleHeroOnly","SingleCarouselOnly","RepeatedHeroTwice","RepeatedArticleGridTwice","Order_HeroThenCarousel","Order_CarouselThenHero","NoHero_MixedBlocks","AllSeven_Reordered"];export{C as AllSeven_Reordered,B as NoHero_MixedBlocks,h as Order_CarouselThenHero,u as Order_HeroThenCarousel,d as RepeatedArticleGridTwice,p as RepeatedHeroTwice,m as SingleCarouselOnly,l as SingleHeroOnly,te as __namedExportsOrder,oe as default};
