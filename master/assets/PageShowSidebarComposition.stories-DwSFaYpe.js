import{_ as u}from"./Show-jtJxrxux.js";import"./preload-helper-CNn__nYE.js";import"./iframe-BZgw57HR.js";import"./_commonjsHelpers-CE1G-McA.js";import"./Alert-nlTVc28J.js";import"./ButtonGroup-BaJsu1GL.js";import"./Button-Q_5EkEyO.js";import"./SiteHeader-BldJlDH2.js";import"./ColbyLogo-nsp4kZGd.js";import"./Hamburger-Bo2qh224.js";import"./UtilityMenu--sC_pllP.js";import"./Modal-DF3ZtzQq.js";import"./Search-CtSh-rA1.js";import"./Icon-Cf5sdbne.js";import"./MobileMenu-Ceb8X-aB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./SiteFooter-C19xCmnm.js";import"./AthleticsLogo-BMfGxlMS.js";import"./ActionMenu-BEaj2ZeU.js";import"./Breadcrumbs-CsaIxLLB.js";import"./ComponentRouter-Cq5PZdq5.js";import"./Hero-CpUUhoVA.js";import"./Context-B0mPVuwN.js";import"./TextGroup-CJvLR6YI.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./index-xgxdCp6f.js";import"./Picture-BJnc-O4A.js";import"./HomeHero-DAOd0s_g.js";import"./HlsBackground-2n1i3f1l.js";import"./OverlayHero-cJ7_yeFC.js";import"./Video-BjwpMAne.js";const{expect:e}=__STORYBOOK_MODULE_TEST__,s={url:"https://www.colby.edu",address:{text:"4000 Mayflower Hill<br>Waterville, ME 04901"},phone:"207-859-4000",alert:null},r={utility:[{title:"Directory",url:"#"},{title:"News",url:"#"}],main:[{title:"Admissions & Aid",url:"#"},{title:"Academics",url:"#"}],footer:[{title:"Academics",url:"#"},{title:"Campus Life",url:"#"}],action:[{title:"Contact Colby",url:"#"}],social:[{title:"Instagram",url:"#",icon:"instagram"}]},g={src:"https://placehold.co/1200x800",srcset:"https://placehold.co/1200x800 1200w, https://placehold.co/800x533 800w",alt:"Students on campus",sizes:{Square:"https://placehold.co/900x600",Square_mobile:"https://placehold.co/500x333",Hero:"https://placehold.co/1800x900",Rectangle:"https://placehold.co/1280x720",Rectangle_mobile:"https://placehold.co/800x450"}},l={type:"default",props:{subheading:"Academics",heading:"Sidebar Composition Default Hero",paragraph:"Sidebar composition hero marker paragraph.",align:"default",image:g,buttons:[{button:{url:"#",title:"Apply",target:""}}],imageOrientation:"landscape"}},p=async t=>{const d=await t.findAllByText("Admissions & Aid");await e(d.length).toBeGreaterThan(0),await e(await t.findByText("Contact Colby")).toBeInTheDocument()},m=t=>({components:{PageShow:u},setup(){return{args:t}},template:'<PageShow v-bind="args" />'}),Y={title:"Templates/Page Templates/Full Page w Sidebar/Composition",component:u,parameters:{layout:"fullscreen"}},n={render:m,args:{layout:"with-sidebar",isPost:!1,hero:l,sidebar:{nav:{heading:"Composition Nav Only",parentPermalink:"#",items:[{title:"Composition Nav Item A",url:"#",active:!0},{title:"Composition Nav Item B",url:"#"}]},widgets:[]},content:"<p>Sidebar composition nav-only content marker.</p>",siteData:s,menus:r},play:async({canvas:t})=>{await p(t),await e(await t.findByText("Composition Nav Only")).toBeInTheDocument(),await e(await t.findByText("Composition Nav Item A")).toBeInTheDocument(),await e(t.queryByText("Composition Widget A")).not.toBeInTheDocument()}},i={render:m,args:{layout:"with-sidebar",isPost:!1,hero:l,sidebar:{nav:{heading:"",parentPermalink:"#",items:[]},widgets:[{heading:"Composition Widget Only",text:"<p>Composition widget-only text marker.</p>",buttons:[{url:"#",title:"Widget CTA",target:""}]}]},content:"<p>Sidebar composition widgets-only content marker.</p>",siteData:s,menus:r},play:async({canvas:t})=>{await p(t),await e(await t.findByText("Composition Widget Only")).toBeInTheDocument(),await e(await t.findByText("Composition widget-only text marker.")).toBeInTheDocument(),await e(await t.findByText("Widget CTA")).toBeInTheDocument()}},o={render:m,args:{layout:"with-sidebar",isPost:!1,hero:l,sidebar:{nav:{heading:"Composition Widgets Order",parentPermalink:"#",items:[{title:"Order Item",url:"#",active:!0}]},widgets:[{heading:"Composition Widget First",text:"<p>First widget text</p>",buttons:[{url:"#",title:"First CTA",target:""}]},{heading:"Composition Widget Second",text:"<p>Second widget text</p>",buttons:[{url:"#",title:"Second CTA",target:""}]}]},content:"<p>Sidebar composition widget-order content marker.</p>",siteData:s,menus:r},play:async({canvas:t,canvasElement:d})=>{await p(t),await e(await t.findByText("Composition Widget First")).toBeInTheDocument(),await e(await t.findByText("Composition Widget Second")).toBeInTheDocument();const c=d.textContent||"";await e(c.indexOf("Composition Widget First")).toBeLessThan(c.indexOf("Composition Widget Second"))}},a={render:m,args:{layout:"with-sidebar",isPost:!1,hero:l,sidebar:{nav:{heading:"Composition Many Nav",parentPermalink:"#",items:[{title:"Composition Nav 1",url:"#",active:!0},{title:"Composition Nav 2",url:"#"},{title:"Composition Nav 3",url:"#"},{title:"Composition Nav 4",url:"#"},{title:"Composition Nav 5",url:"#"},{title:"Composition Nav 6",url:"#"}]},widgets:[]},content:"<p>Sidebar composition many-nav content marker.</p>",siteData:s,menus:r},play:async({canvas:t})=>{await p(t),await e(await t.findByText("Composition Many Nav")).toBeInTheDocument(),await e(await t.findByText("Composition Nav 1")).toBeInTheDocument(),await e(await t.findByText("Composition Nav 6")).toBeInTheDocument()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
