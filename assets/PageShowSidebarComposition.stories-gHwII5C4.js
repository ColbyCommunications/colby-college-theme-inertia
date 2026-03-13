import{_ as u}from"./Show-BukuhAbs.js";import"./iframe-B6ZAXbo8.js";import"./preload-helper-PPVm8Dsz.js";import"./Alert-b5NNVp_H.js";import"./ButtonGroup-pSVp0Pu7.js";import"./Button-BpT5iMmR.js";import"./SiteHeader-BYevM-fn.js";import"./ColbyLogo-B_bomUhS.js";import"./Hamburger-CnscLAo0.js";import"./UtilityMenu-DEBYbtxM.js";import"./Modal-BPZc7VW8.js";import"./Search-DPQlGtG_.js";import"./MobileMenu-Br0fRkLd.js";import"./SiteFooter-BEI5V1jF.js";import"./AthleticsLogo-DJv15ge4.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ActionMenu-Cv3Oe3K2.js";import"./Icon-B3rBYH6W.js";import"./Hero-D4_j7Bbq.js";import"./Context-C_1on05M.js";import"./TextGroup-J623lyxw.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./Picture-BrpWGNuJ.js";import"./OverlayHero-DAjY248f.js";import"./Video-CNMOrKmL.js";import"./SubpageNav-mZufnjLH.js";import"./Widget-pYUzbJow.js";import"./Wysiwyg-DOTU_2Os.js";const{expect:e}=__STORYBOOK_MODULE_TEST__,s={url:"https://www.colby.edu",address:{text:"4000 Mayflower Hill<br>Waterville, ME 04901"},phone:"207-859-4000",alert:null},r={utility:[{title:"Directory",url:"#"},{title:"News",url:"#"}],main:[{title:"Admissions & Aid",url:"#"},{title:"Academics",url:"#"}],footer:[{title:"Academics",url:"#"},{title:"Campus Life",url:"#"}],action:[{title:"Contact Colby",url:"#"}],social:[{title:"Instagram",url:"#",icon:"instagram"}]},g={src:"https://placehold.co/1200x800",srcset:"https://placehold.co/1200x800 1200w, https://placehold.co/800x533 800w",alt:"Students on campus",sizes:{Square:"https://placehold.co/900x600",Square_mobile:"https://placehold.co/500x333",Hero:"https://placehold.co/1800x900",Rectangle:"https://placehold.co/1280x720",Rectangle_mobile:"https://placehold.co/800x450"}},l={type:"default",props:{subheading:"Academics",heading:"Sidebar Composition Default Hero",paragraph:"Sidebar composition hero marker paragraph.",align:"default",image:g,buttons:[{button:{url:"#",title:"Apply",target:""}}],imageOrientation:"landscape"}},p=async t=>{const d=await t.findAllByText("Admissions & Aid");await e(d.length).toBeGreaterThan(0),await e(await t.findByText("Contact Colby")).toBeInTheDocument()},m=t=>({components:{PageShow:u},setup(){return{args:t}},template:'<PageShow v-bind="args" />'}),K={title:"Templates/Page Show/Full Page w Sidebar/Composition",component:u,parameters:{layout:"fullscreen"}},n={render:m,args:{layout:"with-sidebar",isPost:!1,hero:l,sidebar:{nav:{heading:"Composition Nav Only",parentPermalink:"#",items:[{title:"Composition Nav Item A",url:"#",active:!0},{title:"Composition Nav Item B",url:"#"}]},widgets:[]},content:"<p>Sidebar composition nav-only content marker.</p>",siteData:s,menus:r},play:async({canvas:t})=>{await p(t),await e(await t.findByText("Composition Nav Only")).toBeInTheDocument(),await e(await t.findByText("Composition Nav Item A")).toBeInTheDocument(),await e(t.queryByText("Composition Widget A")).not.toBeInTheDocument()}},i={render:m,args:{layout:"with-sidebar",isPost:!1,hero:l,sidebar:{nav:{heading:"",parentPermalink:"#",items:[]},widgets:[{heading:"Composition Widget Only",text:"<p>Composition widget-only text marker.</p>",buttons:[{url:"#",title:"Widget CTA",target:""}]}]},content:"<p>Sidebar composition widgets-only content marker.</p>",siteData:s,menus:r},play:async({canvas:t})=>{await p(t),await e(await t.findByText("Composition Widget Only")).toBeInTheDocument(),await e(await t.findByText("Composition widget-only text marker.")).toBeInTheDocument(),await e(await t.findByText("Widget CTA")).toBeInTheDocument()}},o={render:m,args:{layout:"with-sidebar",isPost:!1,hero:l,sidebar:{nav:{heading:"Composition Widgets Order",parentPermalink:"#",items:[{title:"Order Item",url:"#",active:!0}]},widgets:[{heading:"Composition Widget First",text:"<p>First widget text</p>",buttons:[{url:"#",title:"First CTA",target:""}]},{heading:"Composition Widget Second",text:"<p>Second widget text</p>",buttons:[{url:"#",title:"Second CTA",target:""}]}]},content:"<p>Sidebar composition widget-order content marker.</p>",siteData:s,menus:r},play:async({canvas:t,canvasElement:d})=>{await p(t),await e(await t.findByText("Composition Widget First")).toBeInTheDocument(),await e(await t.findByText("Composition Widget Second")).toBeInTheDocument();const c=d.textContent||"";await e(c.indexOf("Composition Widget First")).toBeLessThan(c.indexOf("Composition Widget Second"))}},a={render:m,args:{layout:"with-sidebar",isPost:!1,hero:l,sidebar:{nav:{heading:"Composition Many Nav",parentPermalink:"#",items:[{title:"Composition Nav 1",url:"#",active:!0},{title:"Composition Nav 2",url:"#"},{title:"Composition Nav 3",url:"#"},{title:"Composition Nav 4",url:"#"},{title:"Composition Nav 5",url:"#"},{title:"Composition Nav 6",url:"#"}]},widgets:[]},content:"<p>Sidebar composition many-nav content marker.</p>",siteData:s,menus:r},play:async({canvas:t})=>{await p(t),await e(await t.findByText("Composition Many Nav")).toBeInTheDocument(),await e(await t.findByText("Composition Nav 1")).toBeInTheDocument(),await e(await t.findByText("Composition Nav 6")).toBeInTheDocument()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const U=["NavOnly","WidgetsOnly","MultipleWidgetsOrder","ManyNavItems"];export{a as ManyNavItems,o as MultipleWidgetsOrder,n as NavOnly,i as WidgetsOnly,U as __namedExportsOrder,K as default};
