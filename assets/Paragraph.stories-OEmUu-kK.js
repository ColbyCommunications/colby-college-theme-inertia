import{c as r,d as o}from"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";const s=["innerHTML"],a={__name:"Paragraph",props:{text:{type:String,default:""}},setup(t){return(c,i)=>(o(),r("div",{class:"colby-paragraph-block",innerHTML:t.text},null,8,s))}};a.__docgenInfo={exportName:"default",displayName:"Paragraph",description:"",tags:{},props:[{name:"text",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Paragraph/Paragraph.vue"]};const{expect:u}=__STORYBOOK_MODULE_TEST__,m={title:"Core Components/Paragraph",component:a,tags:["autodocs"]},e={name:"Default",args:{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo odio, ultrices quis auctor eu, fermentum at dolor. Vivamus cursus lorem ut ultrices iaculis."},play:async({canvas:t})=>{await u(t.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo odio, ultrices quis auctor eu, fermentum at dolor. Vivamus cursus lorem ut ultrices iaculis.")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo odio, ultrices quis auctor eu, fermentum at dolor. Vivamus cursus lorem ut ultrices iaculis."
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo odio, ultrices quis auctor eu, fermentum at dolor. Vivamus cursus lorem ut ultrices iaculis.")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,m as default};
