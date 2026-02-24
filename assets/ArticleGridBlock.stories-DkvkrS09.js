import{_ as i}from"./ArticleGrid-KXy-Onmo.js";import"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C0Zqfgkc.js";import"./TextGroup-T77HtXsG.js";import"./Article-D1DehH2s.js";import"./ButtonGroup-DeVPz35K.js";import"./Button-u50yI3p6.js";import"./Picture-CxKtrm5G.js";const{expect:a}=__STORYBOOK_MODULE_TEST__,s=[{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag"},heading:"Future of Artificial Intelligence",subheading:"Technology",paragraph:"AI is reshaping industries at an unprecedented pace.",url:"#",sizes:{desktop:"https://placehold.co/600x400",mobile:"https://placehold.co/300x200"}},{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag"},heading:"Sustainable Energy Solutions",subheading:"Environment",paragraph:"Solar and wind energy are becoming more accessible than ever.",url:"#",sizes:{desktop:"https://placehold.co/600x400",mobile:"https://placehold.co/300x200"}},{image:{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag"},heading:"Modern Architecture Trends",subheading:"Design",paragraph:"Exploring the intersection of function and aesthetics in 2024.",url:"#",sizes:{desktop:"https://placehold.co/600x400",mobile:"https://placehold.co/300x200"}}],y={title:"Blocks/Article Grid",component:i,argTypes:{display_posts_method:{control:"select",options:["manual","internal","api"]},style:{control:"select",options:["","accordion"]},columns:{control:"select",options:[2,3,4]},render_api:{control:"boolean"},border:{control:"boolean"},cta:{control:"text"},items:{control:"object"}}},r=t=>({components:{ArticleGrid:i},setup(){return{args:t}},template:'<ArticleGrid v-bind="args" />'}),e={render:r,args:{display_posts_method:"manual",style:"",render_api:!1,columns:3,cta:"Read Story",items:s,border:0},play:async({canvas:t})=>{const o=await t.findByText("Future of Artificial Intelligence");await a(o).toBeVisible();const n=await t.findByText("Sustainable Energy Solutions");await a(n).toBeVisible();const d=await t.findByText("Modern Architecture Trends");await a(d).toBeVisible()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render,
  args: {
    display_posts_method: "manual",
    style: "",
    render_api: false,
    columns: 3,
    cta: "Read Story",
    items: mockItems,
    border: 0
  },
  play: async ({
    canvas
  }) => {
    const heading1 = await canvas.findByText("Future of Artificial Intelligence");
    await expect(heading1).toBeVisible();
    const heading2 = await canvas.findByText("Sustainable Energy Solutions");
    await expect(heading2).toBeVisible();
    const heading3 = await canvas.findByText("Modern Architecture Trends");
    await expect(heading3).toBeVisible();
  }
}`,...e.parameters?.docs?.source}}};const _=["ManualGrid"];export{e as ManualGrid,_ as __namedExportsOrder,y as default};
