import{k as T,w as b,c as A,a as l,r as p,o as y,e as W}from"./iframe-DUhMLh8B.js";import"./preload-helper-PPVm8Dsz.js";const I={class:"embed"},R={class:"embed__main"},h=["innerHTML"],i={__name:"Embed",props:{embed:{type:String,default:""}},setup(e){const t=e,a=p(null),E=()=>{if(!a.value)return;a.value.querySelectorAll("script").forEach(r=>{const c=document.createElement("script");Array.from(r.attributes).forEach(w=>{c.setAttribute(w.name,w.value)}),c.appendChild(document.createTextNode(r.innerHTML)),r.parentNode.replaceChild(c,r)}),window.twttr&&window.twttr.widgets&&window.twttr.widgets.load(),window.instgrm&&window.instgrm.Embeds.process()};return T(()=>{E()}),b(()=>t.embed,async()=>{await W(),E()}),(u,r)=>(y(),A("div",I,[l("div",R,[l("div",{ref_key:"embedContainer",ref:a,innerHTML:e.embed},null,8,h)])]))}};i.__docgenInfo=Object.assign({displayName:i.name??i.__name},{exportName:"default",displayName:"Embed",description:"",tags:{},props:[{name:"embed",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Embed/Embed.vue"]});const{expect:n,waitFor:m}=__STORYBOOK_MODULE_TEST__,D=e=>({components:{Embed:i},setup(){const t=p(e.embed);return T(()=>{window.__EMBED_SET_VALUE__=a=>{t.value=a}}),{embedValue:t}},template:'<Embed :embed="embedValue" />'}),f={title:"Core Components/Embed",component:i,argTypes:{embed:{control:"text"}}},o={label:"Video Embed",args:{embed:'<iframe width="560" height="315" src="https://www.youtube.com/embed/jQixf1UCKac?si=N5FBRCM5T5qLExde" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'},play:async({canvasElement:e})=>{const t=e.querySelector("iframe");await n(t).not.toBeNull()}},s={label:"Weather Embed",render:D,args:{embed:'<a class="weatherwidget-io" href="https://forecast7.com/en/44d55n69d63/waterville/?unit=us" data-label_1="WATERVILLE" data-label_2="WEATHER" data-theme="original">WATERVILLE WEATHER</a><script id="weatherwidget-io-js" data-story="initial">window.__WEATHER_WIDGET_SCRIPT_RAN__ = (window.__WEATHER_WIDGET_SCRIPT_RAN__ || 0) + 1;<\/script>'},beforeEach:()=>(window.__TWITTER_WIDGET_CALLED__=0,window.__INSTAGRAM_WIDGET_CALLED__=0,window.twttr={widgets:{load:()=>{window.__TWITTER_WIDGET_CALLED__+=1}}},window.instgrm={Embeds:{process:()=>{window.__INSTAGRAM_WIDGET_CALLED__+=1}}},()=>{delete window.twttr,delete window.instgrm,delete window.__EMBED_SET_VALUE__,delete window.__TWITTER_WIDGET_CALLED__,delete window.__INSTAGRAM_WIDGET_CALLED__,delete window.__WEATHER_WIDGET_SCRIPT_RAN__}),play:async({canvas:e,canvasElement:t})=>{await n(e.getByText("WATERVILLE WEATHER")).toBeInTheDocument(),await m(()=>{n(window.__TWITTER_WIDGET_CALLED__).toBeGreaterThan(0),n(window.__INSTAGRAM_WIDGET_CALLED__).toBeGreaterThan(0)}),window.__EMBED_SET_VALUE__?.('<div class="weatherwidget-io">UPDATED WEATHER</div><script id="weatherwidget-io-js" data-story="updated" async>window.__WEATHER_WIDGET_SCRIPT_RAN__ = (window.__WEATHER_WIDGET_SCRIPT_RAN__ || 0) + 1;<\/script>'),await m(()=>{n(e.getByText("UPDATED WEATHER")).toBeInTheDocument()});const a=t.querySelector('script[data-story="updated"]');await n(a).not.toBeNull()}},_={label:"Empty Embed",args:{embed:""},play:async({canvasElement:e})=>{const t=e.querySelector(".embed");await n(t).not.toBeNull()}},d={label:"HTML Only (No Script)",args:{embed:'<div class="custom-widget"><p>This is a static HTML embed with no scripts.</p></div>'},play:async({canvas:e})=>{await n(e.getByText("This is a static HTML embed with no scripts.")).toBeInTheDocument()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  label: "Video Embed",
  args: {
    embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/jQixf1UCKac?si=N5FBRCM5T5qLExde" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  play: async ({
    canvasElement
  }) => {
    const iframe = canvasElement.querySelector("iframe");
    await expect(iframe).not.toBeNull();
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  label: "Weather Embed",
  render: renderWithMutableEmbed,
  args: {
    embed: \`<a class="weatherwidget-io" href="https://forecast7.com/en/44d55n69d63/waterville/?unit=us" data-label_1="WATERVILLE" data-label_2="WEATHER" data-theme="original">WATERVILLE WEATHER</a><script id="weatherwidget-io-js" data-story="initial">window.__WEATHER_WIDGET_SCRIPT_RAN__ = (window.__WEATHER_WIDGET_SCRIPT_RAN__ || 0) + 1;<\/script>\`
  },
  beforeEach: () => {
    window.__TWITTER_WIDGET_CALLED__ = 0;
    window.__INSTAGRAM_WIDGET_CALLED__ = 0;
    window.twttr = {
      widgets: {
        load: () => {
          window.__TWITTER_WIDGET_CALLED__ += 1;
        }
      }
    };
    window.instgrm = {
      Embeds: {
        process: () => {
          window.__INSTAGRAM_WIDGET_CALLED__ += 1;
        }
      }
    };
    return () => {
      delete window.twttr;
      delete window.instgrm;
      delete window.__EMBED_SET_VALUE__;
      delete window.__TWITTER_WIDGET_CALLED__;
      delete window.__INSTAGRAM_WIDGET_CALLED__;
      delete window.__WEATHER_WIDGET_SCRIPT_RAN__;
    };
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByText("WATERVILLE WEATHER")).toBeInTheDocument();
    await waitFor(() => {
      expect(window.__TWITTER_WIDGET_CALLED__).toBeGreaterThan(0);
      expect(window.__INSTAGRAM_WIDGET_CALLED__).toBeGreaterThan(0);
    });
    window.__EMBED_SET_VALUE__?.('<div class="weatherwidget-io">UPDATED WEATHER</div><script id="weatherwidget-io-js" data-story="updated" async>window.__WEATHER_WIDGET_SCRIPT_RAN__ = (window.__WEATHER_WIDGET_SCRIPT_RAN__ || 0) + 1;<\/script>');
    await waitFor(() => {
      expect(canvas.getByText("UPDATED WEATHER")).toBeInTheDocument();
    });
    const liveScript = canvasElement.querySelector('script[data-story="updated"]');
    await expect(liveScript).not.toBeNull();
  }
}`,...s.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  label: "Empty Embed",
  args: {
    embed: ""
  },
  play: async ({
    canvasElement
  }) => {
    const container = canvasElement.querySelector(".embed");
    await expect(container).not.toBeNull();
  }
}`,..._.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  label: "HTML Only (No Script)",
  args: {
    embed: '<div class="custom-widget"><p>This is a static HTML embed with no scripts.</p></div>'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("This is a static HTML embed with no scripts.")).toBeInTheDocument();
  }
}`,...d.parameters?.docs?.source}}};const S=["VideoEmbed","WeatherEmbed","EmptyEmbed","HtmlOnlyEmbed"];export{_ as EmptyEmbed,d as HtmlOnlyEmbed,o as VideoEmbed,s as WeatherEmbed,S as __namedExportsOrder,f as default};
