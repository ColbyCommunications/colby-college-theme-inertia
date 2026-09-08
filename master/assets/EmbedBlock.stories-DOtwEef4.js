import"./iframe-B_u7WNeO.js";import t from"./Embed-BkKECBY1.js";import"./preload-helper-CNn__nYE.js";const{expect:a,waitFor:m}=__STORYBOOK_MODULE_TEST__,n={title:"Blocks/Embed",component:t,tags:["!autodocs"],argTypes:{embed:{control:"text",name:"Embed Code",table:{category:"Wordpress Fields"}},iframeTitle:{table:{disable:!0}}}},e={name:"Video Embed",args:{embed:'<iframe width="560" height="315" src="https://www.youtube.com/embed/jQixf1UCKac?si=N5FBRCM5T5qLExde" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'},play:async({canvasElement:r})=>{const o=r.querySelector("iframe");await a(o).not.toBeNull()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Video Embed",
  args: {
    embed: '<iframe width="560" height="315" src="https://www.youtube.com/embed/jQixf1UCKac?si=N5FBRCM5T5qLExde" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  },
  play: async ({
    canvasElement
  }) => {
    const iframe = canvasElement.querySelector("iframe");
    await expect(iframe).not.toBeNull();
  }
}`,...e.parameters?.docs?.source}}};const l=["VideoEmbed"];export{e as VideoEmbed,l as __namedExportsOrder,n as default};
