import{o as w,i as E,c as y,a as p,b as h,d as g,k as f}from"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";const T={class:"embed"},v={class:"embed__main"},_=["innerHTML"],u={__name:"Embed",props:{embed:{type:String,default:""}},setup(e){const t=e,a=h(null),m=()=>{if(!a.value)return;a.value.querySelectorAll("script").forEach(s=>{const d=document.createElement("script");Array.from(s.attributes).forEach(l=>{d.setAttribute(l.name,l.value)}),d.appendChild(document.createTextNode(s.innerHTML)),s.parentNode.replaceChild(d,s)}),window.twttr&&window.twttr.widgets&&window.twttr.widgets.load(),window.instgrm&&window.instgrm.Embeds.process()};return w(()=>{m()}),E(()=>t.embed,async()=>{await f(),m()}),(b,s)=>(g(),y("div",T,[p("div",v,[p("div",{ref_key:"embedContainer",ref:a,innerHTML:e.embed},null,8,_)])]))}};u.__docgenInfo={exportName:"default",displayName:"Embed",description:"",tags:{},props:[{name:"embed",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Embed/Embed.vue"]};const{expect:c}=__STORYBOOK_MODULE_TEST__,L={title:"Core Components/Embed",component:u,argTypes:{embed:{control:"text"}}},r={label:"Video Embed",args:{embed:'<iframe width="560" height="315" src="https://www.youtube.com/embed/jQixf1UCKac?si=N5FBRCM5T5qLExde" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'},play:async({canvas:e,canvasElement:t})=>{const a=t.querySelector("iframe");await c(a).not.toBeNull()}},n={label:"Weather Embed",args:{embed:`<a class="weatherwidget-io" href="https://forecast7.com/en/44d55n69d63/waterville/?unit=us" data-label_1="WATERVILLE" data-label_2="WEATHER" data-theme="original" >WATERVILLE WEATHER</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');<\/script>`},play:async({canvas:e})=>{await c(e.getByText("WATERVILLE WEATHER")).toBeInTheDocument()}},i={label:"Empty Embed",args:{embed:""},play:async({canvasElement:e})=>{const t=e.querySelector(".embed");await c(t).not.toBeNull()}},o={label:"HTML Only (No Script)",args:{embed:'<div class="custom-widget"><p>This is a static HTML embed with no scripts.</p></div>'},play:async({canvas:e})=>{await c(e.getByText("This is a static HTML embed with no scripts.")).toBeInTheDocument()}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  label: "Video Embed",
  args: {
    embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/jQixf1UCKac?si=N5FBRCM5T5qLExde" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  play: async ({
    canvas,
    canvasElement
  }) => {
    const iframe = canvasElement.querySelector("iframe");
    await expect(iframe).not.toBeNull();
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  label: "Weather Embed",
  args: {
    // You can now paste the raw embed code directly, script and all
    embed: \`<a class="weatherwidget-io" href="https://forecast7.com/en/44d55n69d63/waterville/?unit=us" data-label_1="WATERVILLE" data-label_2="WEATHER" data-theme="original" >WATERVILLE WEATHER</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');<\/script>\`
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("WATERVILLE WEATHER")).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  label: "HTML Only (No Script)",
  args: {
    embed: '<div class="custom-widget"><p>This is a static HTML embed with no scripts.</p></div>'
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("This is a static HTML embed with no scripts.")).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};const x=["VideoEmbed","WeatherEmbed","EmptyEmbed","HtmlOnlyEmbed"];export{i as EmptyEmbed,o as HtmlOnlyEmbed,r as VideoEmbed,n as WeatherEmbed,x as __namedExportsOrder,L as default};
