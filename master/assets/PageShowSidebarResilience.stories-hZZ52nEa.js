import{_ as m}from"./Show-D6boCI44.js";import"./preload-helper-CNn__nYE.js";import"./iframe-BAs6q_sz.js";import"./_commonjsHelpers-CE1G-McA.js";import"./Alert-CYvV1F_S.js";import"./ButtonGroup-DxPuqVAQ.js";import"./Button-99EF_HJL.js";import"./SiteHeader-B5EZC0TE.js";import"./ColbyLogo-8RenVxxm.js";import"./Hamburger-WGUfgrLC.js";import"./UtilityMenu-DgkxTwXs.js";import"./Modal-QffeqfdV.js";import"./Search-BPI2yBZO.js";import"./Icon-CkWTyprp.js";import"./MobileMenu-DizwFzMz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./SiteFooter-DVdgpGR2.js";import"./AthleticsLogo-pylvMMdk.js";import"./ActionMenu-CS6j5VN_.js";import"./Breadcrumbs-C67Ztp_n.js";import"./ComponentRouter-s2uu3iSG.js";import"./Hero-D0yTiZdW.js";import"./Context-r-673oOh.js";import"./TextGroup-DbWf8UBh.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./Picture-BPjJ_Tvf.js";import"./HomeHero-DV2xH5L1.js";import"./HlsBackground-CQ2fMX8O.js";import"./OverlayHero-QQUqehQd.js";import"./Video-kRGB3cVE.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,s={url:"https://www.colby.edu",address:{text:"4000 Mayflower Hill<br>Waterville, ME 04901"},phone:"207-859-4000",alert:null},l={utility:[{title:"Directory",url:"#"},{title:"News",url:"#"}],main:[{title:"Admissions & Aid",url:"#"},{title:"Academics",url:"#"}],footer:[{title:"Academics",url:"#"},{title:"Campus Life",url:"#"}],action:[{title:"Contact Colby",url:"#"}],social:[{title:"Instagram",url:"#",icon:"instagram"}]},u={src:"https://placehold.co/1200x800",srcset:"https://placehold.co/1200x800 1200w, https://placehold.co/800x533 800w",alt:"Students on campus",sizes:{Square:"https://placehold.co/900x600",Square_mobile:"https://placehold.co/500x333",Hero:"https://placehold.co/1800x900",Rectangle:"https://placehold.co/1280x720",Rectangle_mobile:"https://placehold.co/800x450"}},p={type:"default",props:{subheading:"Academics",heading:"Sidebar Resilience Default Hero",paragraph:"Default hero resilience marker paragraph.",align:"default",image:u,buttons:[{button:{url:"#",title:"Apply",target:""}}],imageOrientation:"landscape"}},y={type:"overlay",props:{size:"medium",subheading:"Overlay",heading:"Sidebar Resilience Overlay Hero",paragraph:"Overlay resilience marker paragraph.",buttons:[{button:{url:"#",title:"Explore",target:""}}],fromPage:!0}},d=async e=>{const a=await e.findAllByText("Admissions & Aid");await t(a.length).toBeGreaterThan(0),await t(await e.findByText("Contact Colby")).toBeInTheDocument()},c=e=>({components:{PageShow:m},setup(){return{args:e}},template:'<PageShow v-bind="args" />'}),U={title:"Templates/Page Show/Full Page w Sidebar/Resilience",component:m,parameters:{layout:"fullscreen"}},n={render:c,args:{layout:"with-sidebar",isPost:!1,hero:p,sidebar:null,content:"<p>Sidebar null payload content marker.</p>",siteData:s,menus:l},play:async({canvas:e,canvasElement:a})=>{await d(e),await t(await e.findByText("Sidebar Resilience Default Hero")).toBeInTheDocument(),await t(await e.findByText("Sidebar null payload content marker.")).toBeInTheDocument(),await t(a.querySelector(".sidebar-page__secondary")).toBeNull()}},i={render:c,args:{layout:"with-sidebar",isPost:!1,hero:p,sidebar:{nav:{heading:"",parentPermalink:"#",items:[]},widgets:[]},content:"<p>Sidebar empty collections content marker.</p>",siteData:s,menus:l},play:async({canvas:e,canvasElement:a})=>{await d(e),await t(await e.findByText("Sidebar empty collections content marker.")).toBeInTheDocument(),await t(a.querySelector(".sidebar-page__secondary")).not.toBeNull(),await t(e.queryByText("Sidebar Overview")).not.toBeInTheDocument()}},r={render:c,args:{layout:"with-sidebar",isPost:!1,hero:p,sidebar:{nav:{heading:"Sidebar Resilience Nav",parentPermalink:"#",items:[{title:"Resilience Item",url:"#",active:!0}]},widgets:[{heading:"Malformed Widget Buttons",text:"<p>Widget should still render text.</p>",buttons:[{title:"",url:"",target:""}]}]},content:"<p>Sidebar malformed widget content marker.</p>",siteData:s,menus:l},play:async({canvas:e})=>{await d(e),await t(await e.findByText("Sidebar Resilience Nav")).toBeInTheDocument(),await t(await e.findByText("Malformed Widget Buttons")).toBeInTheDocument(),await t(await e.findByText("Widget should still render text.")).toBeInTheDocument()}},o={render:c,args:{layout:"with-sidebar",isPost:!0,hero:y,sidebar:{nav:{heading:"Should Be Hidden",parentPermalink:"#",items:[{title:"Hidden Item",url:"#"}]},widgets:[{heading:"Should Be Hidden Widget",text:"<p>Hidden widget text</p>",buttons:[{url:"#",title:"Hidden",target:""}]}]},content:"<p>Overlay post mode resilience content marker.</p>",siteData:s,menus:l},play:async({canvas:e,canvasElement:a})=>{await d(e),await t(await e.findByText("Sidebar Resilience Overlay Hero")).toBeInTheDocument(),await t(await e.findByText("Overlay post mode resilience content marker.")).toBeInTheDocument(),await t(e.queryByText("Should Be Hidden")).not.toBeInTheDocument(),await t(a.querySelector(".sidebar-page__secondary")).toBeNull()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    layout: "with-sidebar",
    isPost: false,
    hero: defaultHeroPayload,
    sidebar: null,
    content: "<p>Sidebar null payload content marker.</p>",
    siteData,
    menus
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Sidebar Resilience Default Hero")).toBeInTheDocument();
    await expect(await canvas.findByText("Sidebar null payload content marker.")).toBeInTheDocument();
    await expect(canvasElement.querySelector(".sidebar-page__secondary")).toBeNull();
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    layout: "with-sidebar",
    isPost: false,
    hero: defaultHeroPayload,
    sidebar: {
      nav: {
        heading: "",
        parentPermalink: "#",
        items: []
      },
      widgets: []
    },
    content: "<p>Sidebar empty collections content marker.</p>",
    siteData,
    menus
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Sidebar empty collections content marker.")).toBeInTheDocument();
    await expect(canvasElement.querySelector(".sidebar-page__secondary")).not.toBeNull();
    await expect(canvas.queryByText("Sidebar Overview")).not.toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    layout: "with-sidebar",
    isPost: false,
    hero: defaultHeroPayload,
    sidebar: {
      nav: {
        heading: "Sidebar Resilience Nav",
        parentPermalink: "#",
        items: [{
          title: "Resilience Item",
          url: "#",
          active: true
        }]
      },
      widgets: [{
        heading: "Malformed Widget Buttons",
        text: "<p>Widget should still render text.</p>",
        buttons: [{
          title: "",
          url: "",
          target: ""
        }]
      }]
    },
    content: "<p>Sidebar malformed widget content marker.</p>",
    siteData,
    menus
  },
  play: async ({
    canvas
  }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Sidebar Resilience Nav")).toBeInTheDocument();
    await expect(await canvas.findByText("Malformed Widget Buttons")).toBeInTheDocument();
    await expect(await canvas.findByText("Widget should still render text.")).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    layout: "with-sidebar",
    isPost: true,
    hero: overlayHeroPayload,
    sidebar: {
      nav: {
        heading: "Should Be Hidden",
        parentPermalink: "#",
        items: [{
          title: "Hidden Item",
          url: "#"
        }]
      },
      widgets: [{
        heading: "Should Be Hidden Widget",
        text: "<p>Hidden widget text</p>",
        buttons: [{
          url: "#",
          title: "Hidden",
          target: ""
        }]
      }]
    },
    content: "<p>Overlay post mode resilience content marker.</p>",
    siteData,
    menus
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Sidebar Resilience Overlay Hero")).toBeInTheDocument();
    await expect(await canvas.findByText("Overlay post mode resilience content marker.")).toBeInTheDocument();
    await expect(canvas.queryByText("Should Be Hidden")).not.toBeInTheDocument();
    await expect(canvasElement.querySelector(".sidebar-page__secondary")).toBeNull();
  }
}`,...o.parameters?.docs?.source}}};const Y=["SidebarNullPayload_NonPost","SidebarEmptyCollections_NonPost","SidebarMalformedWidgetButtons_NonPost","OverlayHeroMissingImage_Post"];export{o as OverlayHeroMissingImage_Post,i as SidebarEmptyCollections_NonPost,r as SidebarMalformedWidgetButtons_NonPost,n as SidebarNullPayload_NonPost,Y as __namedExportsOrder,U as default};
