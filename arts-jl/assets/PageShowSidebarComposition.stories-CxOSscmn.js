import{_ as u}from"./Show-B_dXQ5V6.js";import"./preload-helper-Nb-6AGzV.js";import"./iframe-BIv2-NxB.js";import"./index.esm-CKxqdOyF.js";import"./_commonjsHelpers-CE1G-McA.js";import"./Alert-stnAhL_z.js";import"./ButtonGroup-CcLh1RHI.js";import"./Button-1C9mvqYb.js";import"./SiteHeader-CkSMJ_V5.js";import"./ColbyLogo-BYcvK11b.js";import"./Hamburger-BrmElm35.js";import"./UtilityMenu-CyOldP5a.js";import"./Modal-D7X9JgQg.js";import"./MobileMenu-CDj8lDRr.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./SiteFooter-BTAbExLv.js";import"./AthleticsLogo-nV9TkkjV.js";import"./ActionMenu-C5DBEskN.js";import"./Icon-CoXD9tPE.js";import"./Breadcrumbs--HgXtDu5.js";import"./ComponentRouter-D4KKbp_O.js";import"./Hero-BUM6Z0OZ.js";import"./Context-Bdt88WeJ.js";import"./TextGroup-CYBes9E4.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./Picture-C3EOImSb.js";import"./HomeHero-CEdendfi.js";import"./HlsBackground-BTXKr-UW.js";import"./OverlayHero-9hExFDB1.js";import"./Video-CCpu13ol.js";const{expect:e}=__STORYBOOK_MODULE_TEST__,s={url:"https://www.colby.edu",address:{text:"4000 Mayflower Hill<br>Waterville, ME 04901"},phone:"207-859-4000",alert:null},r={utility:[{title:"Directory",url:"#"},{title:"News",url:"#"}],main:[{title:"Admissions & Aid",url:"#"},{title:"Academics",url:"#"}],footer:[{title:"Academics",url:"#"},{title:"Campus Life",url:"#"}],action:[{title:"Contact Colby",url:"#"}],social:[{title:"Instagram",url:"#",icon:"instagram"}]},g={src:"https://placehold.co/1200x800",srcset:"https://placehold.co/1200x800 1200w, https://placehold.co/800x533 800w",alt:"Students on campus",sizes:{Square:"https://placehold.co/900x600",Square_mobile:"https://placehold.co/500x333",Hero:"https://placehold.co/1800x900",Rectangle:"https://placehold.co/1280x720",Rectangle_mobile:"https://placehold.co/800x450"}},l={type:"default",props:{subheading:"Academics",heading:"Sidebar Composition Default Hero",paragraph:"Sidebar composition hero marker paragraph.",align:"default",image:g,buttons:[{button:{url:"#",title:"Apply",target:""}}],imageOrientation:"landscape"}},p=async t=>{const d=await t.findAllByText("Admissions & Aid");await e(d.length).toBeGreaterThan(0),await e(await t.findByText("Contact Colby")).toBeInTheDocument()},m=t=>({components:{PageShow:u},setup(){return{args:t}},template:'<PageShow v-bind="args" />'}),Y={title:"Templates/Page Templates/Full Page w Sidebar/Composition",component:u,parameters:{layout:"fullscreen"}},n={render:m,args:{layout:"with-sidebar",isPost:!1,hero:l,sidebar:{nav:{heading:"Composition Nav Only",parentPermalink:"#",items:[{title:"Composition Nav Item A",url:"#",active:!0},{title:"Composition Nav Item B",url:"#"}]},widgets:[]},content:"<p>Sidebar composition nav-only content marker.</p>",siteData:s,menus:r},play:async({canvas:t})=>{await p(t),await e(await t.findByText("Composition Nav Only")).toBeInTheDocument(),await e(await t.findByText("Composition Nav Item A")).toBeInTheDocument(),await e(t.queryByText("Composition Widget A")).not.toBeInTheDocument()}},i={render:m,args:{layout:"with-sidebar",isPost:!1,hero:l,sidebar:{nav:{heading:"",parentPermalink:"#",items:[]},widgets:[{heading:"Composition Widget Only",text:"<p>Composition widget-only text marker.</p>",buttons:[{url:"#",title:"Widget CTA",target:""}]}]},content:"<p>Sidebar composition widgets-only content marker.</p>",siteData:s,menus:r},play:async({canvas:t})=>{await p(t),await e(await t.findByText("Composition Widget Only")).toBeInTheDocument(),await e(await t.findByText("Composition widget-only text marker.")).toBeInTheDocument(),await e(await t.findByText("Widget CTA")).toBeInTheDocument()}},o={render:m,args:{layout:"with-sidebar",isPost:!1,hero:l,sidebar:{nav:{heading:"Composition Widgets Order",parentPermalink:"#",items:[{title:"Order Item",url:"#",active:!0}]},widgets:[{heading:"Composition Widget First",text:"<p>First widget text</p>",buttons:[{url:"#",title:"First CTA",target:""}]},{heading:"Composition Widget Second",text:"<p>Second widget text</p>",buttons:[{url:"#",title:"Second CTA",target:""}]}]},content:"<p>Sidebar composition widget-order content marker.</p>",siteData:s,menus:r},play:async({canvas:t,canvasElement:d})=>{await p(t),await e(await t.findByText("Composition Widget First")).toBeInTheDocument(),await e(await t.findByText("Composition Widget Second")).toBeInTheDocument();const c=d.textContent||"";await e(c.indexOf("Composition Widget First")).toBeLessThan(c.indexOf("Composition Widget Second"))}},a={render:m,args:{layout:"with-sidebar",isPost:!1,hero:l,sidebar:{nav:{heading:"Composition Many Nav",parentPermalink:"#",items:[{title:"Composition Nav 1",url:"#",active:!0},{title:"Composition Nav 2",url:"#"},{title:"Composition Nav 3",url:"#"},{title:"Composition Nav 4",url:"#"},{title:"Composition Nav 5",url:"#"},{title:"Composition Nav 6",url:"#"}]},widgets:[]},content:"<p>Sidebar composition many-nav content marker.</p>",siteData:s,menus:r},play:async({canvas:t})=>{await p(t),await e(await t.findByText("Composition Many Nav")).toBeInTheDocument(),await e(await t.findByText("Composition Nav 1")).toBeInTheDocument(),await e(await t.findByText("Composition Nav 6")).toBeInTheDocument()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    layout: "with-sidebar",
    isPost: false,
    hero: defaultHeroPayload,
    sidebar: {
      nav: {
        heading: "Composition Nav Only",
        parentPermalink: "#",
        items: [{
          title: "Composition Nav Item A",
          url: "#",
          active: true
        }, {
          title: "Composition Nav Item B",
          url: "#"
        }]
      },
      widgets: []
    },
    content: "<p>Sidebar composition nav-only content marker.</p>",
    siteData,
    menus
  },
  play: async ({
    canvas
  }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Composition Nav Only")).toBeInTheDocument();
    await expect(await canvas.findByText("Composition Nav Item A")).toBeInTheDocument();
    await expect(canvas.queryByText("Composition Widget A")).not.toBeInTheDocument();
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
      widgets: [{
        heading: "Composition Widget Only",
        text: "<p>Composition widget-only text marker.</p>",
        buttons: [{
          url: "#",
          title: "Widget CTA",
          target: ""
        }]
      }]
    },
    content: "<p>Sidebar composition widgets-only content marker.</p>",
    siteData,
    menus
  },
  play: async ({
    canvas
  }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Composition Widget Only")).toBeInTheDocument();
    await expect(await canvas.findByText("Composition widget-only text marker.")).toBeInTheDocument();
    await expect(await canvas.findByText("Widget CTA")).toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    layout: "with-sidebar",
    isPost: false,
    hero: defaultHeroPayload,
    sidebar: {
      nav: {
        heading: "Composition Widgets Order",
        parentPermalink: "#",
        items: [{
          title: "Order Item",
          url: "#",
          active: true
        }]
      },
      widgets: [{
        heading: "Composition Widget First",
        text: "<p>First widget text</p>",
        buttons: [{
          url: "#",
          title: "First CTA",
          target: ""
        }]
      }, {
        heading: "Composition Widget Second",
        text: "<p>Second widget text</p>",
        buttons: [{
          url: "#",
          title: "Second CTA",
          target: ""
        }]
      }]
    },
    content: "<p>Sidebar composition widget-order content marker.</p>",
    siteData,
    menus
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Composition Widget First")).toBeInTheDocument();
    await expect(await canvas.findByText("Composition Widget Second")).toBeInTheDocument();
    const text = canvasElement.textContent || "";
    await expect(text.indexOf("Composition Widget First")).toBeLessThan(text.indexOf("Composition Widget Second"));
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    layout: "with-sidebar",
    isPost: false,
    hero: defaultHeroPayload,
    sidebar: {
      nav: {
        heading: "Composition Many Nav",
        parentPermalink: "#",
        items: [{
          title: "Composition Nav 1",
          url: "#",
          active: true
        }, {
          title: "Composition Nav 2",
          url: "#"
        }, {
          title: "Composition Nav 3",
          url: "#"
        }, {
          title: "Composition Nav 4",
          url: "#"
        }, {
          title: "Composition Nav 5",
          url: "#"
        }, {
          title: "Composition Nav 6",
          url: "#"
        }]
      },
      widgets: []
    },
    content: "<p>Sidebar composition many-nav content marker.</p>",
    siteData,
    menus
  },
  play: async ({
    canvas
  }) => {
    await assertGlobalShell(canvas);
    await expect(await canvas.findByText("Composition Many Nav")).toBeInTheDocument();
    await expect(await canvas.findByText("Composition Nav 1")).toBeInTheDocument();
    await expect(await canvas.findByText("Composition Nav 6")).toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};const j=["NavOnly","WidgetsOnly","MultipleWidgetsOrder","ManyNavItems"];export{a as ManyNavItems,o as MultipleWidgetsOrder,n as NavOnly,i as WidgetsOnly,j as __namedExportsOrder,Y as default};
