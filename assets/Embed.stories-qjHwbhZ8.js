import{d,h as n}from"./iframe-0N6o4Hv8.js";import _ from"./Embed-buvmacr7.js";import"./preload-helper-PPVm8Dsz.js";const{expect:m,waitFor:T}=__STORYBOOK_MODULE_TEST__,E=e=>({components:{Embed:_},setup(){const o=d(e.embed);return n(()=>{window.__EMBED_SET_VALUE__=s=>{o.value=s}}),{embedValue:o}},template:'<Embed :embed="embedValue" />'}),p={title:"Core Components/Embed",component:_,argTypes:{embed:{control:"text"}}},t={label:"Video Embed",args:{embed:'<iframe width="560" height="315" src="https://www.youtube.com/embed/jQixf1UCKac?si=N5FBRCM5T5qLExde" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'},play:async({canvasElement:e})=>{}},a={label:"Weather Embed",render:E,args:{embed:'<a class="weatherwidget-io" href="https://forecast7.com/en/44d55n69d63/waterville/?unit=us" data-label_1="WATERVILLE" data-label_2="WEATHER" data-theme="original">WATERVILLE WEATHER</a><script id="weatherwidget-io-js" data-story="initial">window.__WEATHER_WIDGET_SCRIPT_RAN__ = (window.__WEATHER_WIDGET_SCRIPT_RAN__ || 0) + 1;<\/script>'},beforeEach:()=>(window.__TWITTER_WIDGET_CALLED__=0,window.__INSTAGRAM_WIDGET_CALLED__=0,window.twttr={widgets:{load:()=>{window.__TWITTER_WIDGET_CALLED__+=1}}},window.instgrm={Embeds:{process:()=>{window.__INSTAGRAM_WIDGET_CALLED__+=1}}},()=>{delete window.twttr,delete window.instgrm,delete window.__EMBED_SET_VALUE__,delete window.__TWITTER_WIDGET_CALLED__,delete window.__INSTAGRAM_WIDGET_CALLED__,delete window.__WEATHER_WIDGET_SCRIPT_RAN__}),play:async({canvas:e,canvasElement:o})=>{}},r={label:"Empty Embed",args:{embed:""},play:async({canvasElement:e})=>{}},i={label:"HTML Only (No Script)",args:{embed:'<div class="custom-widget"><p>This is a static HTML embed with no scripts.</p></div>'},play:async({canvas:e})=>{}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  label: "Video Embed",
  args: {
    embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/jQixf1UCKac?si=N5FBRCM5T5qLExde" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  play: async ({
    canvasElement
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const iframe = canvasElement.querySelector("iframe");
    await expect(iframe).not.toBeNull();
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    if (import.meta.env.MODE !== 'test') return;
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
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  label: "Empty Embed",
  args: {
    embed: ""
  },
  play: async ({
    canvasElement
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    const container = canvasElement.querySelector(".embed");
    await expect(container).not.toBeNull();
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  label: "HTML Only (No Script)",
  args: {
    embed: '<div class="custom-widget"><p>This is a static HTML embed with no scripts.</p></div>'
  },
  play: async ({
    canvas
  }) => {
    if (import.meta.env.MODE !== 'test') return;
    await expect(canvas.getByText("This is a static HTML embed with no scripts.")).toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};const b=["VideoEmbed","WeatherEmbed","EmptyEmbed","HtmlOnlyEmbed"];export{r as EmptyEmbed,i as HtmlOnlyEmbed,t as VideoEmbed,a as WeatherEmbed,b as __namedExportsOrder,p as default};
