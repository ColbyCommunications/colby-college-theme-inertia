import{c as i,a,e as l,h as u,m as g,F as p,r as h,d as s,t as c}from"./iframe-BfBFAde5.js";import{_ as f}from"./Context-Dp7yX81d.js";import{_ as x}from"./AnimatedBorder-CQpfkfOi.js";import{_ as y}from"./Picture-CxKtrm5G.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-T77HtXsG.js";import"./ButtonGroup-DeVPz35K.js";import"./Button-u50yI3p6.js";import"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";const _={class:"facts-figures"},b={class:"facts-figures__inner relative mx-auto my-0 w-full max-w-screen-2xl gap-x-10 px-5 md:grid md:grid-cols-12"},B={class:"facts-figures__inner mx-auto my-0 w-full max-w-screen-2xl gap-x-10 px-5 md:grid md:grid-cols-12"},w={class:"facts-figures__main mt-4 md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-7"},v={class:"facts-figures__image mt-12 md:order-[-1] md:col-span-5 md:mt-0"},T={class:"facts-figures__inner relative mx-auto my-0 mt-12 w-full max-w-screen-2xl gap-x-10 px-5 md:mt-0 md:grid md:grid-cols-12"},F={class:"pb-6 md:relative md:bottom-[16px] md:col-span-7 md:col-start-6 md:pb-8 lg:bottom-[70px] lg:col-span-6 lg:col-start-7"},I={class:"grid w-full max-w-screen-2xl grid-cols-6 gap-x-3 md:gap-x-10"},S={class:"font-extended text-24 leading-115 font-normal text-indigo"},C={class:"font-body text-12 leading-140 font-normal text-indigo-800"},d={__name:"FactsFigures",props:{heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]},image:{type:Object,default:null},facts:{type:Array,default:()=>[]}},setup(e){return(k,z)=>(s(),i("div",_,[a("div",b,[l(x,{class:"col-span-12 block h-px w-0 bg-azure"})]),a("div",B,[a("div",w,[l(f,{size:"large",type:"dark",arrow:!0,reverse:!0,heading:e.heading,paragraph:e.paragraph,buttons:{items:e.buttons}},null,8,["heading","paragraph","buttons"])]),a("div",v,[e.image?(s(),u(y,{key:0,class:"h-full w-full object-cover","size-desktop":e.image?.sizes?.Square||e.image?.srcset,"size-mobile":e.image?.sizes?.Square||e.image?.src,alt:e.image?.alt||""},null,8,["size-desktop","size-mobile","alt"])):g("",!0)])]),a("div",T,[a("div",F,[a("div",I,[(s(!0),i(p,null,h(e.facts,(o,m)=>(s(),i("div",{key:m,class:"facts-figures__figure col-span-2"},[a("h3",S,c(o.figure),1),a("p",C,c(o.paragraph),1)]))),128))])])])]))}};d.__docgenInfo={exportName:"default",displayName:"FactsFigures",description:"",tags:{},props:[{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:'""'}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"image",type:{name:"object"},defaultValue:{func:!1,value:"null"}},{name:"facts",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/FactsFigures/FactsFigures.vue"]};const{expect:t}=__STORYBOOK_MODULE_TEST__,P={title:"Core Components/Facts and Figures",component:d},r={name:"Primary",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",facts:[{figure:"100%",paragraph:"consectetur adipiscing elit"},{figure:"100%",paragraph:"consectetur adipiscing elit"}],image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/600x400",Square_mobile:"https://placehold.co/400x300"}},paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},play:async({canvas:e})=>{await t(e.getByText("Lorem ipsum")).toBeInTheDocument(),await t(e.getAllByText("100%").length).toBeGreaterThan(0)}},n={name:"Without Image",args:{subheading:"By the Numbers",heading:"Colby at a Glance",facts:[{figure:"2,000",paragraph:"students enrolled"},{figure:"58",paragraph:"majors and minors"},{figure:"10:1",paragraph:"student-to-faculty ratio"}],paragraph:"Colby College is one of America's premier liberal arts colleges."},play:async({canvas:e})=>{await t(e.getByText("Colby at a Glance")).toBeInTheDocument(),await t(e.getByText("2,000")).toBeInTheDocument(),await t(e.getByText("10:1")).toBeInTheDocument()}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Lorem ipsum")).toBeInTheDocument();
    await expect(canvas.getAllByText("100%").length).toBeGreaterThan(0);
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Without Image",
  args: {
    subheading: "By the Numbers",
    heading: "Colby at a Glance",
    facts: [{
      figure: "2,000",
      paragraph: "students enrolled"
    }, {
      figure: "58",
      paragraph: "majors and minors"
    }, {
      figure: "10:1",
      paragraph: "student-to-faculty ratio"
    }],
    paragraph: "Colby College is one of America's premier liberal arts colleges."
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Colby at a Glance")).toBeInTheDocument();
    await expect(canvas.getByText("2,000")).toBeInTheDocument();
    await expect(canvas.getByText("10:1")).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};const W=["Primary","WithoutImage"];export{r as Primary,n as WithoutImage,W as __namedExportsOrder,P as default};
