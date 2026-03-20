import{c as r,o}from"./iframe-B8gNiuYi.js";import"./preload-helper-PPVm8Dsz.js";const s=["innerHTML"],t={__name:"Paragraph",props:{text:{type:String,default:""}},setup(a){return(u,c)=>(o(),r("div",{class:"colby-paragraph-block",innerHTML:a.text},null,8,s))}};t.__docgenInfo=Object.assign({displayName:t.name??t.__name},{exportName:"default",displayName:"Paragraph",description:"",tags:{},props:[{name:"text",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Paragraph/Paragraph.vue"]});const{expect:i}=__STORYBOOK_MODULE_TEST__,m={title:"Core Components/Paragraph",component:t,tags:["autodocs"]},e={name:"Default",args:{text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo odio, ultrices quis auctor eu, fermentum at dolor. Vivamus cursus lorem ut ultrices iaculis."},play:async({canvas:a})=>{await i(a.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo odio, ultrices quis auctor eu, fermentum at dolor. Vivamus cursus lorem ut ultrices iaculis.")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
