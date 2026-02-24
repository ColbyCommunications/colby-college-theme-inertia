import{c as s,a,e as i,m,d as o}from"./iframe-BfBFAde5.js";import{_ as u}from"./Context-Dp7yX81d.js";import{_ as d}from"./Picture-CxKtrm5G.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-T77HtXsG.js";import"./ButtonGroup-DeVPz35K.js";import"./Button-u50yI3p6.js";const p={class:"collage-section full-bleed space-y-16 bg-gray-100 pt-16 pb-[100%] md:pt-24 md:pb-40"},h={class:"collage-section__inner mx-auto my-0 w-full max-w-screen-2xl gap-x-10 px-5 md:grid md:grid-cols-12"},b={class:"collage-section___context md:col-span-8 md:col-start-3"},y={class:"collage-section__inner mx-auto mt-12 w-full max-w-screen-2xl gap-x-10 px-5 md:grid md:grid-cols-12"},x={class:"md:col-span-12"},f={class:"collage-section__collage relative"},w={key:0,class:"collage-section__image1 relative right-[-20px] z-[1] w-full md:right-auto md:w-1/2"},v={class:"relative pb-[65.28117359413203%] md:pb-[87.5%]"},T={key:1,class:"collage-section__image2 absolute top-[80%] left-[-20px] z-[2] w-[80%] md:top-[40%] md:left-[30%] md:w-[40%]"},z={class:"relative pb-[80.43478260869566%]"},I={key:2,class:"collage-section__image3 absolute top-[150%] right-0 z-[3] w-[66%] md:top-[10%] md:w-[44%]"},S={class:"relative pb-[85.18518518518518%] md:pb-[56.31067961165048%]"},g={__name:"CollageSection",props:{subheading:{type:String,default:""},heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]},images:{type:Array,required:!0,default:()=>[]}},setup(e){return(B,_)=>(o(),s("div",p,[a("div",h,[a("div",b,[i(u,{size:"medium",align:"center",subheading:e.subheading,heading:e.heading,paragraph:e.paragraph,buttons:{items:e.buttons}},null,8,["subheading","heading","paragraph","buttons"])])]),a("div",y,[a("div",x,[a("div",f,[e.images[0]?(o(),s("div",w,[a("div",v,[i(d,{class:"absolute h-full w-full object-cover",srcset:e.images[0].srcset,src:e.images[0].src,sizeMobile:e.images[0].image.sizes.Hero,sizeDesktop:e.images[0].image.sizes.Hero,alt:e.images[0].alt},null,8,["srcset","src","sizeMobile","sizeDesktop","alt"])])])):m("",!0),e.images[1]?(o(),s("div",T,[a("div",z,[i(d,{class:"absolute h-full w-full object-cover",srcset:e.images[1].srcset,src:e.images[1].src,sizeMobile:e.images[1].image.sizes.Square,sizeDesktop:e.images[1].image.sizes.Square,alt:e.images[1].alt},null,8,["srcset","src","sizeMobile","sizeDesktop","alt"])])])):m("",!0),e.images[2]?(o(),s("div",I,[a("div",S,[i(d,{class:"absolute h-full w-full object-cover",srcset:e.images[2].srcset,src:e.images[2].src,sizeMobile:e.images[2].image.sizes.Rectangle,"size-desktop":e.images[2].image.sizes.Rectangle,alt:e.images[2].alt},null,8,["srcset","src","sizeMobile","size-desktop","alt"])])])):m("",!0)])])])]))}};g.__docgenInfo={exportName:"default",displayName:"CollageSection",description:"",tags:{},props:[{name:"subheading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"images",type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/CollageSection/CollageSection.vue"]};const{expect:r}=__STORYBOOK_MODULE_TEST__,j={title:"Core Components/Collage Section",component:g},t={heading:"Lorem Ipsum",subheading:"Veritatis sit voluptatem",images:[{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",image:{sizes:{Hero:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",mobile:"https://placehold.co/300x200"}}},{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",image:{sizes:{Square:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",mobile:"https://placehold.co/300x200"}}},{src:"https://placeholdit.com/600x400/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",image:{sizes:{Rectangle:"https://www.colby.edu/wp-content/uploads/2025/12/Untitled-2025-12-18T101409.127-2400x1320.jpeg",mobile:"https://placehold.co/300x200"}}}],paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},l={name:"Default",args:{...t},play:async({canvas:e})=>{await r(e.getByText("Lorem Ipsum")).toBeInTheDocument(),await r(e.getByText(t.paragraph)).toBeInTheDocument()}},n={name:"Single Image",args:{...t,images:[t.images[0]]},play:async({canvas:e})=>{await r(e.getByText("Lorem Ipsum")).toBeInTheDocument()}},c={name:"Two Images",args:{...t,images:[t.images[0],t.images[1]]},play:async({canvas:e})=>{await r(e.getByText("Lorem Ipsum")).toBeInTheDocument()}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  // 👇 Rename this story
  name: "Default",
  args: {
    ...globalArgs
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Lorem Ipsum")).toBeInTheDocument();
    await expect(canvas.getByText(globalArgs.paragraph)).toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Single Image",
  args: {
    ...globalArgs,
    images: [globalArgs.images[0]]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Lorem Ipsum")).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Two Images",
  args: {
    ...globalArgs,
    images: [globalArgs.images[0], globalArgs.images[1]]
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Lorem Ipsum")).toBeInTheDocument();
  }
}`,...c.parameters?.docs?.source}}};const M=["Primary","SingleImage","TwoImages"];export{l as Primary,n as SingleImage,c as TwoImages,M as __namedExportsOrder,j as default};
