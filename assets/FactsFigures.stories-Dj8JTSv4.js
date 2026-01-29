import{c as t,a as e,e as o,i as l,F as m,b as u,d as s,t as d}from"./iframe-BzNJ8ej3.js";import{_ as p}from"./Context-BKPlwLwA.js";import{_ as g}from"./AnimatedBorder-Cjhk7t16.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-CIzKGSF1.js";import"./ButtonGroup-j4UMCLkE.js";import"./Button-CSqc9WXQ.js";import"./noframework.waypoints-DEzq0FwH.js";const h={class:"facts-figures"},f={class:"facts-figures__inner relative md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"},x={class:"facts-figures__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"},_={class:"facts-figures__main md:col-start-6 lg:col-start-7 md:col-span-7 lg:col-span-6 mt-4"},y={class:"facts-figures__image md:col-span-5 md:order-[-1] mt-12 md:mt-0"},b={key:0},v=["srcset"],w=["src","alt"],F={class:"facts-figures__inner relative md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto mt-12 md:mt-0"},S={class:"md:relative lg:bottom-[70px] md:bottom-[16px] md:col-start-6 lg:col-start-7 md:col-span-7 lg:col-span-6 pb-6 md:pb-8"},q={class:"grid grid-cols-6 gap-x-3 md:gap-x-10 max-w-screen-2xl w-full"},V={class:"font-extended font-normal text-24 text-indigo leading-115"},k={class:"font-body font-normal text-12 text-indigo-800 leading-140"},n={__name:"FactsFigures",props:{heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]},image:{type:Object,default:null},facts:{type:Array,default:()=>[]}},setup(a){return(L,z)=>(s(),t("div",h,[e("div",f,[o(g,{class:"block col-span-12 w-0 h-px bg-azure"})]),e("div",x,[e("div",_,[o(p,{size:"large",type:"dark",arrow:!0,reverse:!0,heading:a.heading,paragraph:a.paragraph,buttons:{items:a.buttons}},null,8,["heading","paragraph","buttons"])]),e("div",y,[a.image?(s(),t("picture",b,[e("source",{media:"(min-width:768px)",srcset:a.image?.sizes?.Square||a.image?.srcset},null,8,v),e("img",{class:"w-full h-full object-cover",src:a.image?.sizes?.Square||a.image?.src,alt:a.image?.alt||""},null,8,w)])):l("",!0)])]),e("div",F,[e("div",S,[e("div",q,[(s(!0),t(m,null,u(a.facts,(i,c)=>(s(),t("div",{key:c,class:"facts-figures__figure col-span-2"},[e("h3",V,d(i.figure),1),e("p",k,d(i.paragraph),1)]))),128))])])])]))}};n.__docgenInfo={exportName:"default",displayName:"FactsFigures",description:"",tags:{},props:[{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"image",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"facts",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/FactsFigures/FactsFigures.vue"]};const $={title:"Core Components/Facts and Figures",component:n},r={name:"Primary",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",facts:[{figure:"100%",paragraph:"consectetur adipiscing elit"},{figure:"100%",paragraph:"consectetur adipiscing elit"}],image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/600x400",Square_mobile:"https://placehold.co/400x300"}},paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const D=["Primary"];export{r as Primary,D as __namedExportsOrder,$ as default};
