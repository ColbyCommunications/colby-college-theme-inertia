import{c as d,a as o,d as m}from"./iframe-g8QkBjID.js";import"./preload-helper-PPVm8Dsz.js";const l={class:"embed"},p={class:"embed__main"},u=["innerHTML"],c={__name:"Embed",props:{embed:{type:String,default:""}},setup(e){return(a,s)=>(m(),d("div",l,[o("div",p,[o("div",{innerHTML:e.embed},null,8,u)])]))}};c.__docgenInfo={exportName:"default",displayName:"Embed",description:"",tags:{},props:[{name:"embed",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Embed/Embed.vue"]};const g={title:"Core Components/Embed",component:c,argTypes:{embed:{control:"text"}}},t={name:"Video Embed",args:{embed:'<iframe width="560" height="315" src="https://www.youtube.com/embed/jQixf1UCKac?si=N5FBRCM5T5qLExde" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'}},r={name:"Weather Embed",args:{embed:'<a class="weatherwidget-io" href="https://forecast7.com/en/44d55n69d63/waterville/?unit=us" data-label_1="WATERVILLE" data-label_2="WEATHER" data-theme="original" >WATERVILLE WEATHER</a>'},play:async()=>{const e="weatherwidget-io-js";if(document.getElementById(e))window.__weatherwidget_init&&window.__weatherwidget_init();else{const a=document,s="script",i=a.getElementsByTagName(s)[0],n=a.createElement(s);n.id=e,n.src="https://weatherwidget.io/js/widget.min.js",i.parentNode.insertBefore(n,i)}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Video Embed",
  args: {
    embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/jQixf1UCKac?si=N5FBRCM5T5qLExde" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Weather Embed",
  args: {
    // 1. We ONLY keep the HTML part here. We remove the <script> tag.
    embed: \`<a class="weatherwidget-io" href="https://forecast7.com/en/44d55n69d63/waterville/?unit=us" data-label_1="WATERVILLE" data-label_2="WEATHER" data-theme="original" >WATERVILLE WEATHER</a>\`
  },
  // 2. We use the play function to run the script manually
  play: async () => {
    const scriptId = "weatherwidget-io-js";

    // Check if script is already loaded (from visiting the story previously)
    if (!document.getElementById(scriptId)) {
      const d = document;
      const s = "script";
      const fjs = d.getElementsByTagName(s)[0];
      const js = d.createElement(s);
      js.id = scriptId;
      js.src = "https://weatherwidget.io/js/widget.min.js";
      fjs.parentNode.insertBefore(js, fjs);
    } else {
      // If the script is already there, we force the widget to re-scan the DOM
      // because Vue just replaced the <a> tag.
      if (window.__weatherwidget_init) {
        window.__weatherwidget_init();
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const f=["Primary","Secondary"];export{t as Primary,r as Secondary,f as __namedExportsOrder,g as default};
