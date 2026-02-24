import{c as r,a,g as s,t as c,d as l}from"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";const i={class:"block-quote -tracking-3 relative pl-16 font-extended text-28 leading-110 font-normal text-indigo md:text-24"},n={__name:"BlockQuote",props:{quote:{type:String,required:!0,default:""}},setup(t){return(p,o)=>(l(),r("div",i,[o[0]||(o[0]=a("svg",{class:"block-quote__icon absolute top-0 left-0 w-8 fill-indigo",viewBox:"0 0 38.9 34","xml:space":"preserve","aria-hidden":"true"},[a("path",{d:"M16.9 0v8.3c-.1 0-.2.1-.3.1-1.1.4-2.1.8-3 1.5-1.6 1.1-2.7 2.6-3.4 4.3-.3.8-.6 1.6-.8 2.5v.2h7.4V34H0V20.2c0-.9.1-1.8.1-2.7.1-1.3.3-2.6.7-3.8.6-2.1 1.4-4 2.6-5.7C4.7 6.2 6.3 4.8 8 3.6c1.6-1.1 3.3-1.9 5.2-2.6 1.1-.4 2.3-.7 3.4-.9.1-.1.2-.1.3-.1zM38.9 0v8.3c-.1 0-.2.1-.3.1-1.1.4-2.1.8-3 1.5-1.6 1.1-2.7 2.6-3.4 4.3-.3.8-.6 1.6-.8 2.5v.2h7.4V34H22V20.2c0-.9.1-1.8.1-2.7.1-1.3.3-2.6.7-3.8.6-2.1 1.4-4 2.6-5.7 1.2-1.7 2.8-3.2 4.5-4.4 1.6-1.1 3.3-1.9 5.2-2.6 1.1-.4 2.3-.7 3.4-.9.2-.1.3-.1.4-.1z"})],-1)),s(" "+c(t.quote),1)]))}};n.__docgenInfo={exportName:"default",displayName:"BlockQuote",description:"",tags:{},props:[{name:"quote",type:{name:"string"},required:!0,defaultValue:{func:!1,value:'""'}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/BlockQuote/BlockQuote.vue"]};const{expect:u}=__STORYBOOK_MODULE_TEST__,f={title:"Core Components/Block Quote",component:n},e={name:"Default",args:{quote:"The only thing we have to fear is fear itself"},play:async({canvas:t})=>{await u(t.getByText("The only thing we have to fear is fear itself")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    quote: "The only thing we have to fear is fear itself"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("The only thing we have to fear is fear itself")).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const g=["Primary"];export{e as Primary,g as __namedExportsOrder,f as default};
