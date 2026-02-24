import{c as n,a as g,j as l,m,t as D,n as p,l as o,d as r}from"./iframe-BfBFAde5.js";import"./preload-helper-PPVm8Dsz.js";const b={class:"colby-image-text-block overflow-auto mx-auto"},N={key:0,class:"flex flex-col md:block"},k=["src","alt"],V=["src"],L=["innerHTML"],O=["src","alt"],M=["src"],j={key:2,class:"text-center text-indigo text-12 pt-2"},A=["innerHTML"],C={__name:"ImageText",props:{image:{type:Object,default:null},imagePath:{type:String,default:""},imageScale:{type:String,default:"100"},wrappingText:{type:String,default:"no-wrap"},alignImage:{type:String,default:"left"},alignText:{type:String,default:"left"},paragraphText:{type:String,default:""},caption:{type:String,default:""},mediaCaption:{type:String,default:""}},setup(e){const B=e,c=o(()=>(parseInt(B.imageScale)||100)/100),s=o(()=>c.value<1?{width:`${c.value*100}%`}:{}),P=o(()=>c.value<1?`${c.value*100}%`:"100%"),R=o(()=>c.value>=1?"100%":`calc(100% - ${c.value*100}% - 1rem)`),W=o(()=>{switch(B.imageScale){case"75":return"md:max-w-75";case"50":return"md:max-w-50";case"25":return"md:max-w-25";default:return"max-w-full"}});return(E,H)=>(r(),n("div",b,[e.wrappingText==="wrap"?(r(),n("div",N,[g("div",{class:p(["self-center !mb-4",[e.alignImage==="left"?"md:!mr-4 float-left":"md:!ml-4 float-right",e.caption||e.mediaCaption?"!mb-4":""]])},[e.image?(r(),n("img",{key:0,src:e.image.url,alt:e.image.alt,class:"max-w-full",style:l(s.value)},null,12,k)):e.imagePath?(r(),n("img",{key:1,src:e.imagePath,class:"max-w-full",style:l(s.value)},null,12,V)):m("",!0),e.mediaCaption||e.caption?(r(),n("figcaption",{key:2,class:"text-center text-indigo text-12 pt-2",style:l(s.value)},D(e.mediaCaption||e.caption),5)):m("",!0)],2),g("div",{innerHTML:e.paragraphText},null,8,L)])):(r(),n("div",{key:1,class:p(["flex flex-col md:flex-wrap",e.alignImage==="right"?"md:flex-row-reverse":"md:flex-row"])},[g("div",{class:p(["mb-4 flex flex-col items-center shrink-0",[e.alignImage==="left"?"md:mr-4":"md:ml-4",W.value]]),style:l({flexBasis:P.value})},[e.image?(r(),n("img",{key:0,src:e.image.url,alt:e.image.alt,class:"max-w-full",style:l(s.value)},null,12,O)):e.imagePath?(r(),n("img",{key:1,src:e.imagePath,class:"max-w-full",style:l(s.value)},null,12,M)):m("",!0),e.mediaCaption||e.caption?(r(),n("figcaption",j,D(e.mediaCaption||e.caption),1)):m("",!0)],6),g("div",{class:p(e.alignText==="center"?"flex flex-col items-center":""),style:l({flexBasis:R.value}),innerHTML:e.paragraphText},null,14,A)],2))]))}};C.__docgenInfo={exportName:"default",displayName:"ImageText",description:"",tags:{},props:[{name:"image",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"imagePath",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"imageScale",type:{name:"string"},defaultValue:{func:!1,value:'"100"'}},{name:"wrappingText",type:{name:"string"},defaultValue:{func:!1,value:'"no-wrap"'}},{name:"alignImage",type:{name:"string"},defaultValue:{func:!1,value:'"left"'}},{name:"alignText",type:{name:"string"},defaultValue:{func:!1,value:'"left"'}},{name:"paragraphText",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"caption",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"mediaCaption",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/ImageText/ImageText.vue"]};const{expect:a}=__STORYBOOK_MODULE_TEST__,z={title:"Core Components/Image Text",component:C,tags:["autodocs"],argTypes:{imageScale:{control:"select",options:["100","75","50","25"]},wrappingText:{control:"select",options:["wrap","no-wrap"]},alignImage:{control:"select",options:["left","right"]},alignText:{control:"select",options:["left","center"]}}},i="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo odio, ultrices quis auctor eu, fermentum at dolor. Vivamus cursus lorem ut ultrices iaculis. Phasellus et ante nec urna facilisis fringilla. Fusce tincidunt, magna sit amet varius porttitor, orci metus lacinia mi, vel vulputate nisl diam lacinia augue.</p>",t={name:"Default",args:{image:{url:"https://placehold.co/400x300",alt:"Placeholder image"},imageScale:"50",alignImage:"left",wrappingText:"no-wrap",paragraphText:i,mediaCaption:"Image caption here"},play:async({canvas:e})=>{await a(e.getByText("Image caption here")).toBeInTheDocument()}},u={name:"Wrap Left",args:{...t.args,wrappingText:"wrap",alignImage:"left"},play:async({canvas:e})=>{await a(e.getByText("Image caption here")).toBeInTheDocument()}},d={name:"Wrap Right",args:{...t.args,wrappingText:"wrap",alignImage:"right"},play:async({canvas:e})=>{await a(e.getByText("Image caption here")).toBeInTheDocument()}},h={name:"Side-by-Side Right",args:{...t.args,alignImage:"right",imageScale:"50"},play:async({canvas:e})=>{await a(e.getByText("Image caption here")).toBeInTheDocument()}},x={name:"Scale 25%",args:{...t.args,imageScale:"25",wrappingText:"no-wrap"},play:async({canvas:e})=>{await a(e.getByRole("img")).toBeInTheDocument()}},y={name:"Scale 75%",args:{...t.args,imageScale:"75",wrappingText:"no-wrap"},play:async({canvas:e})=>{await a(e.getByRole("img")).toBeInTheDocument()}},T={name:"Scale 100%",args:{...t.args,imageScale:"100",wrappingText:"no-wrap"},play:async({canvas:e})=>{await a(e.getByRole("img")).toBeInTheDocument()}},f={name:"Image Path Only",args:{imagePath:"https://placehold.co/400x300",imageScale:"50",wrappingText:"no-wrap",paragraphText:i},play:async({canvas:e})=>{await a(e.getByRole("img")).toBeInTheDocument()}},w={name:"No Caption",args:{image:{url:"https://placehold.co/400x300",alt:"Placeholder image"},imageScale:"50",wrappingText:"wrap",alignImage:"left",paragraphText:i},play:async({canvas:e})=>{await a(e.getByRole("img")).toBeInTheDocument()}},I={name:"Wrap with Image Path",args:{imagePath:"https://placehold.co/400x300",imageScale:"50",wrappingText:"wrap",alignImage:"left",paragraphText:i,mediaCaption:"Path-based image caption"},play:async({canvas:e})=>{await a(e.getByText("Path-based image caption")).toBeInTheDocument()}},S={name:"Centered Text",args:{image:{url:"https://placehold.co/400x300",alt:"Centered text image"},imageScale:"50",wrappingText:"no-wrap",alignImage:"left",alignText:"center",paragraphText:i},play:async({canvas:e})=>{await a(e.getByAltText("Centered text image")).toBeInTheDocument()}},v={name:"Wrap Right No Caption",args:{image:{url:"https://placehold.co/400x300",alt:"No caption wrap right"},imageScale:"75",wrappingText:"wrap",alignImage:"right",paragraphText:i},play:async({canvas:e})=>{await a(e.getByAltText("No caption wrap right")).toBeInTheDocument()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Default",
  args: {
    image: {
      url: "https://placehold.co/400x300",
      alt: "Placeholder image"
    },
    imageScale: "50",
    alignImage: "left",
    wrappingText: "no-wrap",
    paragraphText: sampleText,
    mediaCaption: "Image caption here"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Image caption here")).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Wrap Left",
  args: {
    ...Default.args,
    wrappingText: "wrap",
    alignImage: "left"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Image caption here")).toBeInTheDocument();
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Wrap Right",
  args: {
    ...Default.args,
    wrappingText: "wrap",
    alignImage: "right"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Image caption here")).toBeInTheDocument();
  }
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Side-by-Side Right",
  args: {
    ...Default.args,
    alignImage: "right",
    imageScale: "50"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Image caption here")).toBeInTheDocument();
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Scale 25%",
  args: {
    ...Default.args,
    imageScale: "25",
    wrappingText: "no-wrap"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole("img")).toBeInTheDocument();
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Scale 75%",
  args: {
    ...Default.args,
    imageScale: "75",
    wrappingText: "no-wrap"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole("img")).toBeInTheDocument();
  }
}`,...y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "Scale 100%",
  args: {
    ...Default.args,
    imageScale: "100",
    wrappingText: "no-wrap"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole("img")).toBeInTheDocument();
  }
}`,...T.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: "Image Path Only",
  args: {
    imagePath: "https://placehold.co/400x300",
    imageScale: "50",
    wrappingText: "no-wrap",
    paragraphText: sampleText
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole("img")).toBeInTheDocument();
  }
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "No Caption",
  args: {
    image: {
      url: "https://placehold.co/400x300",
      alt: "Placeholder image"
    },
    imageScale: "50",
    wrappingText: "wrap",
    alignImage: "left",
    paragraphText: sampleText
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByRole("img")).toBeInTheDocument();
  }
}`,...w.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Wrap with Image Path",
  args: {
    imagePath: "https://placehold.co/400x300",
    imageScale: "50",
    wrappingText: "wrap",
    alignImage: "left",
    paragraphText: sampleText,
    mediaCaption: "Path-based image caption"
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Path-based image caption")).toBeInTheDocument();
  }
}`,...I.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Centered Text",
  args: {
    image: {
      url: "https://placehold.co/400x300",
      alt: "Centered text image"
    },
    imageScale: "50",
    wrappingText: "no-wrap",
    alignImage: "left",
    alignText: "center",
    paragraphText: sampleText
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByAltText("Centered text image")).toBeInTheDocument();
  }
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Wrap Right No Caption",
  args: {
    image: {
      url: "https://placehold.co/400x300",
      alt: "No caption wrap right"
    },
    imageScale: "75",
    wrappingText: "wrap",
    alignImage: "right",
    paragraphText: sampleText
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByAltText("No caption wrap right")).toBeInTheDocument();
  }
}`,...v.parameters?.docs?.source}}};const q=["Default","WrapLeft","WrapRight","SideBySideRight","Scale25","Scale75","Scale100","ImagePathOnly","NoCaption","WrapWithImagePath","CenteredText","WrapRightNoCaption"];export{S as CenteredText,t as Default,f as ImagePathOnly,w as NoCaption,T as Scale100,x as Scale25,y as Scale75,h as SideBySideRight,u as WrapLeft,d as WrapRight,v as WrapRightNoCaption,I as WrapWithImagePath,q as __namedExportsOrder,z as default};
