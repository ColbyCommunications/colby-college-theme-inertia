import{_ as t}from"./Picture-Ch0VQRYV.js";import"./iframe-DmoDTqUy.js";import"./preload-helper-PPVm8Dsz.js";const n={title:"Core Components/Picture",component:t},e=r=>({components:{Picture:t},setup(){return{args:r}},template:`
      <Picture v-bind="args" />
    `});e.args={alt:"this is an alt",class:"w-full h-auto rounded",sizeMobile:"https://placehold.co/600x400/gray/white?text=Mobile+Size",sizeDesktop:"https://placehold.co/1200x600/gray/white?text=Desktop+Size"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    Picture
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <Picture v-bind="args" />
    \`
})`,...e.parameters?.docs?.source}}};const i=["Primary"];export{e as Primary,i as __namedExportsOrder,n as default};
