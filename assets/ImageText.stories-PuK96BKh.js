import{l as s,c as a,a as c,m,j as l,t as p,n as o,d as t}from"./iframe-BI_3ezP0.js";import"./preload-helper-PPVm8Dsz.js";const w={class:"colby-image-text-block overflow-auto mx-auto"},S={key:0,class:"flex flex-col md:block"},T=["src","alt"],I=["src"],k=["innerHTML"],C=["src","alt"],b=["src"],V={key:2,class:"text-center text-indigo text-12 pt-2"},L=["innerHTML"],x={__name:"ImageText",props:{image:{type:Object,default:null},imagePath:{type:String,default:""},imageScale:{type:String,default:"100"},wrappingText:{type:String,default:"no-wrap"},alignImage:{type:String,default:"left"},alignText:{type:String,default:"left"},paragraphText:{type:String,default:""},caption:{type:String,default:""},mediaCaption:{type:String,default:""}},setup(e){const f=e,i=s(()=>(parseInt(f.imageScale)||100)/100),r=s(()=>i.value<1?{width:`${i.value*100}%`}:{}),h=s(()=>i.value<1?`${i.value*100}%`:"100%"),y=s(()=>i.value>=1?"100%":`calc(100% - ${i.value*100}% - 1rem)`),v=s(()=>{switch(f.imageScale){case"75":return"md:max-w-75";case"50":return"md:max-w-50";case"25":return"md:max-w-25";default:return"max-w-full"}});return(W,B)=>(t(),a("div",w,[e.wrappingText==="wrap"?(t(),a("div",S,[c("div",{class:o(["self-center !mb-4",[e.alignImage==="left"?"md:!mr-4 float-left":"md:!ml-4 float-right",e.caption||e.mediaCaption?"!mb-4":""]])},[e.image?(t(),a("img",{key:0,src:e.image.url,alt:e.image.alt,class:"max-w-full",style:l(r.value)},null,12,T)):e.imagePath?(t(),a("img",{key:1,src:e.imagePath,class:"max-w-full",style:l(r.value)},null,12,I)):m("",!0),e.mediaCaption||e.caption?(t(),a("figcaption",{key:2,class:"text-center text-indigo text-12 pt-2",style:l(r.value)},p(e.mediaCaption||e.caption),5)):m("",!0)],2),c("div",{innerHTML:e.paragraphText},null,8,k)])):(t(),a("div",{key:1,class:o(["flex flex-col md:flex-wrap",e.alignImage==="right"?"md:flex-row-reverse":"md:flex-row"])},[c("div",{class:o(["mb-4 flex flex-col items-center shrink-0",[e.alignImage==="left"?"md:mr-4":"md:ml-4",v.value]]),style:l({flexBasis:h.value})},[e.image?(t(),a("img",{key:0,src:e.image.url,alt:e.image.alt,class:"max-w-full",style:l(r.value)},null,12,C)):e.imagePath?(t(),a("img",{key:1,src:e.imagePath,class:"max-w-full",style:l(r.value)},null,12,b)):m("",!0),e.mediaCaption||e.caption?(t(),a("figcaption",V,p(e.mediaCaption||e.caption),1)):m("",!0)],6),c("div",{class:o(e.alignText==="center"?"flex flex-col items-center":""),style:l({flexBasis:y.value}),innerHTML:e.paragraphText},null,14,L)],2))]))}};x.__docgenInfo={exportName:"default",displayName:"ImageText",description:"",tags:{},props:[{name:"image",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"imagePath",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"imageScale",type:{name:"string"},defaultValue:{func:!1,value:'"100"'}},{name:"wrappingText",type:{name:"string"},defaultValue:{func:!1,value:'"no-wrap"'}},{name:"alignImage",type:{name:"string"},defaultValue:{func:!1,value:'"left"'}},{name:"alignText",type:{name:"string"},defaultValue:{func:!1,value:'"left"'}},{name:"paragraphText",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"caption",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"mediaCaption",type:{name:"string"},defaultValue:{func:!1,value:'""'}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/ImageText/ImageText.vue"]};const j={title:"Core Components/Image Text",component:x,tags:["autodocs"],argTypes:{imageScale:{control:"select",options:["100","75","50","25"]},wrappingText:{control:"select",options:["wrap","no-wrap"]},alignImage:{control:"select",options:["left","right"]},alignText:{control:"select",options:["left","center"]}}},P="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo odio, ultrices quis auctor eu, fermentum at dolor. Vivamus cursus lorem ut ultrices iaculis. Phasellus et ante nec urna facilisis fringilla. Fusce tincidunt, magna sit amet varius porttitor, orci metus lacinia mi, vel vulputate nisl diam lacinia augue.</p>",n={name:"Default",args:{image:{url:"https://placehold.co/400x300",alt:"Placeholder image"},imageScale:"50",alignImage:"left",wrappingText:"no-wrap",paragraphText:P,mediaCaption:"Image caption here"}},g={name:"Wrap Left",args:{...n.args,wrappingText:"wrap",alignImage:"left"}},u={name:"Wrap Right",args:{...n.args,wrappingText:"wrap",alignImage:"right"}},d={name:"Side-by-Side Right",args:{...n.args,alignImage:"right",imageScale:"50"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
  }
}`,...n.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Wrap Left",
  args: {
    ...Default.args,
    wrappingText: "wrap",
    alignImage: "left"
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Wrap Right",
  args: {
    ...Default.args,
    wrappingText: "wrap",
    alignImage: "right"
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Side-by-Side Right",
  args: {
    ...Default.args,
    alignImage: "right",
    imageScale: "50"
  }
}`,...d.parameters?.docs?.source}}};const H=["Default","WrapLeft","WrapRight","SideBySideRight"];export{n as Default,d as SideBySideRight,g as WrapLeft,u as WrapRight,H as __namedExportsOrder,j as default};
