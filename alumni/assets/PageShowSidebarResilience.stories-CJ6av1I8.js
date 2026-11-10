import{_ as m}from"./Show-BUnYuus7.js";import"./preload-helper-DK9VPF6O.js";import"./iframe-Ch-F7mRI.js";import"./index.esm-DzP5VTEA.js";import"./_commonjsHelpers-CE1G-McA.js";import"./Alert-4y55lLnl.js";import"./ButtonGroup-CiX96mvA.js";import"./Button-CFu-p7gn.js";import"./SiteHeader-DZA5XPTr.js";import"./ColbyLogo-Dm7nEapF.js";import"./Hamburger-B2PdxwKq.js";import"./UtilityMenu-BoHCMWh7.js";import"./Modal-CrDRPn3p.js";import"./MobileMenu-Brs4Kf6-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./SiteFooter-D8Q1_SV7.js";import"./AthleticsLogo-DmT921xS.js";import"./ActionMenu-B8nfKlj8.js";import"./Icon-BFTjqFax.js";import"./Breadcrumbs-BolgffV6.js";import"./ComponentRouter-Be1CBHnY.js";import"./Hero-kKzKCQl7.js";import"./Context-BT2jSdVb.js";import"./TextGroup-CstJfdRV.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./Picture-B-XzAAwP.js";import"./HomeHero-DjRgkr_H.js";import"./HlsBackground-C_igSLiZ.js";import"./OverlayHero-D2Y1lLg_.js";import"./Video-DcFJp-yt.js";const{expect:t}=__STORYBOOK_MODULE_TEST__,s={url:"https://www.colby.edu",address:{text:"4000 Mayflower Hill<br>Waterville, ME 04901"},phone:"207-859-4000",alert:null},l={utility:[{title:"Directory",url:"#"},{title:"News",url:"#"}],main:[{title:"Admissions & Aid",url:"#"},{title:"Academics",url:"#"}],footer:[{title:"Academics",url:"#"},{title:"Campus Life",url:"#"}],action:[{title:"Contact Colby",url:"#"}],social:[{title:"Instagram",url:"#",icon:"instagram"}]},u={src:"https://placehold.co/1200x800",srcset:"https://placehold.co/1200x800 1200w, https://placehold.co/800x533 800w",alt:"Students on campus",sizes:{Square:"https://placehold.co/900x600",Square_mobile:"https://placehold.co/500x333",Hero:"https://placehold.co/1800x900",Rectangle:"https://placehold.co/1280x720",Rectangle_mobile:"https://placehold.co/800x450"}},p={type:"default",props:{subheading:"Academics",heading:"Sidebar Resilience Default Hero",paragraph:"Default hero resilience marker paragraph.",align:"default",image:u,buttons:[{button:{url:"#",title:"Apply",target:""}}],imageOrientation:"landscape"}},y={type:"overlay",props:{size:"medium",subheading:"Overlay",heading:"Sidebar Resilience Overlay Hero",paragraph:"Overlay resilience marker paragraph.",buttons:[{button:{url:"#",title:"Explore",target:""}}],fromPage:!0}},d=async e=>{const a=await e.findAllByText("Admissions & Aid");await t(a.length).toBeGreaterThan(0),await t(await e.findByText("Contact Colby")).toBeInTheDocument()},c=e=>({components:{PageShow:m},setup(){return{args:e}},template:'<PageShow v-bind="args" />'}),Y={title:"Templates/Page Templates/Full Page w Sidebar/Resilience",component:m,parameters:{layout:"fullscreen"}},n={render:c,args:{layout:"with-sidebar",isPost:!1,hero:p,sidebar:null,content:"<p>Sidebar null payload content marker.</p>",siteData:s,menus:l},play:async({canvas:e,canvasElement:a})=>{await d(e),await t(await e.findByText("Sidebar Resilience Default Hero")).toBeInTheDocument(),await t(await e.findByText("Sidebar null payload content marker.")).toBeInTheDocument(),await t(a.querySelector(".sidebar-page__secondary")).toBeNull()}},i={render:c,args:{layout:"with-sidebar",isPost:!1,hero:p,sidebar:{nav:{heading:"",parentPermalink:"#",items:[]},widgets:[]},content:"<p>Sidebar empty collections content marker.</p>",siteData:s,menus:l},play:async({canvas:e,canvasElement:a})=>{await d(e),await t(await e.findByText("Sidebar empty collections content marker.")).toBeInTheDocument(),await t(a.querySelector(".sidebar-page__secondary")).not.toBeNull(),await t(e.queryByText("Sidebar Overview")).not.toBeInTheDocument()}},r={render:c,args:{layout:"with-sidebar",isPost:!1,hero:p,sidebar:{nav:{heading:"Sidebar Resilience Nav",parentPermalink:"#",items:[{title:"Resilience Item",url:"#",active:!0}]},widgets:[{heading:"Malformed Widget Buttons",text:"<p>Widget should still render text.</p>",buttons:[{title:"",url:"",target:""}]}]},content:"<p>Sidebar malformed widget content marker.</p>",siteData:s,menus:l},play:async({canvas:e})=>{await d(e),await t(await e.findByText("Sidebar Resilience Nav")).toBeInTheDocument(),await t(await e.findByText("Malformed Widget Buttons")).toBeInTheDocument(),await t(await e.findByText("Widget should still render text.")).toBeInTheDocument()}},o={render:c,args:{layout:"with-sidebar",isPost:!0,hero:y,sidebar:{nav:{heading:"Should Be Hidden",parentPermalink:"#",items:[{title:"Hidden Item",url:"#"}]},widgets:[{heading:"Should Be Hidden Widget",text:"<p>Hidden widget text</p>",buttons:[{url:"#",title:"Hidden",target:""}]}]},content:"<p>Overlay post mode resilience content marker.</p>",siteData:s,menus:l},play:async({canvas:e,canvasElement:a})=>{await d(e),await t(await e.findByText("Sidebar Resilience Overlay Hero")).toBeInTheDocument(),await t(await e.findByText("Overlay post mode resilience content marker.")).toBeInTheDocument(),await t(e.queryByText("Should Be Hidden")).not.toBeInTheDocument(),await t(a.querySelector(".sidebar-page__secondary")).toBeNull()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const j=["SidebarNullPayload_NonPost","SidebarEmptyCollections_NonPost","SidebarMalformedWidgetButtons_NonPost","OverlayHeroMissingImage_Post"];export{o as OverlayHeroMissingImage_Post,i as SidebarEmptyCollections_NonPost,r as SidebarMalformedWidgetButtons_NonPost,n as SidebarNullPayload_NonPost,j as __namedExportsOrder,Y as default};
