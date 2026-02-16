import{c as r,a,e as o,h as c,m,F as u,b as p,d as t,t as d}from"./iframe-BI_3ezP0.js";import{_ as g}from"./Context-rCALFtqQ.js";import{_ as f}from"./AnimatedBorder-7xIr6NEF.js";import{_ as h}from"./Picture-DioVXFI5.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-8rV2ZAMN.js";import"./ButtonGroup-DeTJD12j.js";import"./Button-e0IECFmJ.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";const x={class:"facts-figures"},_={class:"facts-figures__inner relative md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"},y={class:"facts-figures__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"},b={class:"facts-figures__main md:col-start-6 lg:col-start-7 md:col-span-7 lg:col-span-6 mt-4"},v={class:"facts-figures__image md:col-span-5 md:order-[-1] mt-12 md:mt-0"},w={class:"facts-figures__inner relative md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto mt-12 md:mt-0"},F={class:"md:relative lg:bottom-[70px] md:bottom-[16px] md:col-start-6 lg:col-start-7 md:col-span-7 lg:col-span-6 pb-6 md:pb-8"},k={class:"grid grid-cols-6 gap-x-3 md:gap-x-10 max-w-screen-2xl w-full"},z={class:"font-extended font-normal text-24 text-indigo leading-115"},S={class:"font-body font-normal text-12 text-indigo-800 leading-140"},n={__name:"FactsFigures",props:{heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]},image:{type:Object,default:null},facts:{type:Array,default:()=>[]}},setup(e){return(q,V)=>(t(),r("div",x,[a("div",_,[o(f,{class:"block col-span-12 w-0 h-px bg-azure"})]),a("div",y,[a("div",b,[o(g,{size:"large",type:"dark",arrow:!0,reverse:!0,heading:e.heading,paragraph:e.paragraph,buttons:{items:e.buttons}},null,8,["heading","paragraph","buttons"])]),a("div",v,[e.image?(t(),c(h,{key:0,class:"w-full h-full object-cover","size-desktop":e.image?.sizes?.Square||e.image?.srcset,"size-mobile":e.image?.sizes?.Square||e.image?.src,alt:e.image?.alt||""},null,8,["size-desktop","size-mobile","alt"])):m("",!0)])]),a("div",w,[a("div",F,[a("div",k,[(t(!0),r(u,null,p(e.facts,(i,l)=>(t(),r("div",{key:l,class:"facts-figures__figure col-span-2"},[a("h3",z,d(i.figure),1),a("p",S,d(i.paragraph),1)]))),128))])])])]))}};n.__docgenInfo={exportName:"default",displayName:"FactsFigures",description:"",tags:{},props:[{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"image",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"facts",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/FactsFigures/FactsFigures.vue"]};const D={title:"Core Components/Facts and Figures",component:n},s={name:"Primary",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",facts:[{figure:"100%",paragraph:"consectetur adipiscing elit"},{figure:"100%",paragraph:"consectetur adipiscing elit"}],image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/600x400",Square_mobile:"https://placehold.co/400x300"}},paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Primary",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    facts: [{
      figure: "100%",
      paragraph: "consectetur adipiscing elit"
    }, {
      figure: "100%",
      paragraph: "consectetur adipiscing elit"
    }],
    image: {
      src: "https://placeholdit.com/400x600/dddddd/999999",
      srcset: "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
      alt: "this is an alt tag",
      sizes: {
        Square: "https://placehold.co/600x400",
        Square_mobile: "https://placehold.co/400x300"
      }
    },
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
}`,...s.parameters?.docs?.source}}};const I=["Primary"];export{s as Primary,I as __namedExportsOrder,D as default};
