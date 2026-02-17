import{c as r,a,e as o,h as c,m,F as u,r as p,d as t,t as d}from"./iframe-smcTNgWJ.js";import{_ as g}from"./Context-DqAioVFh.js";import{_ as f}from"./AnimatedBorder-CXfGb79h.js";import{_ as h}from"./Picture-DxrAmS_6.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-WtWkjzc1.js";import"./ButtonGroup-0OSwBJFl.js";import"./Button-BaqycuYP.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";const x={class:"facts-figures"},_={class:"facts-figures__inner relative mx-auto my-0 w-full max-w-screen-2xl gap-x-10 px-5 md:grid md:grid-cols-12"},y={class:"facts-figures__inner mx-auto my-0 w-full max-w-screen-2xl gap-x-10 px-5 md:grid md:grid-cols-12"},b={class:"facts-figures__main mt-4 md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-7"},v={class:"facts-figures__image mt-12 md:order-[-1] md:col-span-5 md:mt-0"},w={class:"facts-figures__inner relative mx-auto my-0 mt-12 w-full max-w-screen-2xl gap-x-10 px-5 md:mt-0 md:grid md:grid-cols-12"},F={class:"pb-6 md:relative md:bottom-[16px] md:col-span-7 md:col-start-6 md:pb-8 lg:bottom-[70px] lg:col-span-6 lg:col-start-7"},k={class:"grid w-full max-w-screen-2xl grid-cols-6 gap-x-3 md:gap-x-10"},z={class:"font-extended text-24 leading-115 font-normal text-indigo"},S={class:"font-body text-12 leading-140 font-normal text-indigo-800"},n={__name:"FactsFigures",props:{heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]},image:{type:Object,default:null},facts:{type:Array,default:()=>[]}},setup(e){return(q,V)=>(t(),r("div",x,[a("div",_,[o(f,{class:"col-span-12 block h-px w-0 bg-azure"})]),a("div",y,[a("div",b,[o(g,{size:"large",type:"dark",arrow:!0,reverse:!0,heading:e.heading,paragraph:e.paragraph,buttons:{items:e.buttons}},null,8,["heading","paragraph","buttons"])]),a("div",v,[e.image?(t(),c(h,{key:0,class:"h-full w-full object-cover","size-desktop":e.image?.sizes?.Square||e.image?.srcset,"size-mobile":e.image?.sizes?.Square||e.image?.src,alt:e.image?.alt||""},null,8,["size-desktop","size-mobile","alt"])):m("",!0)])]),a("div",w,[a("div",F,[a("div",k,[(t(!0),r(u,null,p(e.facts,(i,l)=>(t(),r("div",{key:l,class:"facts-figures__figure col-span-2"},[a("h3",z,d(i.figure),1),a("p",S,d(i.paragraph),1)]))),128))])])])]))}};n.__docgenInfo={exportName:"default",displayName:"FactsFigures",description:"",tags:{},props:[{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"image",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"facts",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/FactsFigures/FactsFigures.vue"]};const D={title:"Core Components/Facts and Figures",component:n},s={name:"Primary",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",facts:[{figure:"100%",paragraph:"consectetur adipiscing elit"},{figure:"100%",paragraph:"consectetur adipiscing elit"}],image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/600x400",Square_mobile:"https://placehold.co/400x300"}},paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
