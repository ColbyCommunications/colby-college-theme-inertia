import{r as w,o as _,p as v,k,c as r,i as o,a as e,F as h,e as S,b as f,n as L,d,t as g}from"./iframe-7uD2a8ZT.js";import{_ as q}from"./Context-CQIFRsi9.js";import{g as x}from"./noframework.waypoints-DEzq0FwH.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-PBIYzyPI.js";import"./ButtonGroup-gYAAuFwZ.js";import"./Button-DjixpZEP.js";const z={class:"dark-interstitial__inner relative md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"},I={class:"dark-interstitial__main md:col-start-3 md:col-span-8"},V={key:1,class:"dark-interstitial__inner relative md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto mt-12"},C={class:"dark-interstitial__figures md:col-start-3 md:col-span-8 grid grid-cols-8 gap-x-10 max-w-screen-2xl w-full"},F={class:"font-extended font-normal text-36 text-canary leading-100"},A={class:"font-body font-normal text-14 text-indigo-200 leading-130"},D={key:2,class:"dark-interstitial__images-wrap overflow-scroll md:overflow-visible mt-28"},B={class:"dark-interstitial__inner relative md:grid grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-9 md:px-5 my-0 mx-auto mr-9 md:mr-auto whitespace-nowrap text-[0]"},W={class:"dark-interstitial__image relative pb-[119.44444444444444%]"},N=["srcset"],E=["src","alt"],P={key:0,class:"font-body font-normal text-12 text-indigo-200 leading-140 mt-2"},y={__name:"DarkInterstitial",props:{icon:{type:Boolean,default:!1},subheading:{type:String,default:""},heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]},facts:{type:Array,default:()=>[]},images:{type:Array,default:()=>[]}},setup(a){const n=w([]);let p=[];const b=i=>{if(!i)return;const t=i.querySelector("h3"),s=i.querySelector("p");x.to(t,{duration:.4,opacity:1,scale:1,ease:"power3.inOut",onComplete:()=>{x.to(s,{opacity:1,duration:.3,ease:"power1.out"})}})};return _(async()=>{await v(),n.value&&n.value.length&&n.value.forEach(i=>{const t=new Waypoint({element:i,handler:()=>{b(i),t.destroy()},offset:"bottom-in-view"});p.push(t)})}),k(()=>{p.forEach(i=>i.destroy()),p=[]}),(i,t)=>(d(),r("div",{class:L(["dark-interstitial py-24 bg-indigo [&+.dark-interstitial]:mt-0 !max-w-full",a.icon?"md:pt-12 relative":""])},[a.icon?(d(),r(h,{key:0},[t[0]||(t[0]=e("div",{class:"relative hidden md:flex justify-end max-w-screen-2xl w-full px-5 my-0 mx-auto mb-16"},[e("svg",{class:"w-5 fill-canary",viewBox:"0 0 20.83 30","aria-hidden":"true"},[e("path",{d:"m1.76 30 2.47-4.16 2.32-1.09.43-1.27 1.57 1.18 1.96-.88.49-3.54 1.08.98.39 1.77 1.76-2.41 1.58.74 1.18-2.06.89.39 1.17-.88 1.68.2.1-1.38-2.07-1.28-.53-1.88.24-2.25-2.17.1.4-9.92L13.85.2l-1.76 1.19h-1.87L10.13 0H8.64L5.41 7.08 4.32 9.5l.39 1.3-1.47.59-.29 1.87-.69 1.47-2.16-.2L0 28.39 1.76 30Z"})])],-1)),t[1]||(t[1]=e("div",{class:"bg-darkinterstitial__pattern bg-cover opacity-30 absolute z-0 top-0 left-0 w-full h-full"},null,-1))],64)):o("",!0),e("div",z,[e("div",I,[S(q,{size:"medium",type:"light",arrow:!0,reverse:!0,align:"center",subheading:a.subheading,heading:a.heading,paragraph:a.paragraph,buttons:{items:a.buttons}},null,8,["subheading","heading","paragraph","buttons"])])]),Array.isArray(a.facts)&&a.facts.length?(d(),r("div",V,[e("div",C,[(d(!0),r(h,null,f(a.facts,(s,u)=>(d(),r("div",{key:u,class:"dark-interstitial__fact col-span-4 space-y-3"},[e("div",{class:"dark-interstitial__fact--animated",ref_for:!0,ref_key:"factContainers",ref:n},[e("h3",F,g(s.figure),1),e("p",A,g(s.paragraph),1)],512)]))),128))])])):o("",!0),Array.isArray(a.images)&&a.images.length?(d(),r("div",D,[e("div",B,[t[2]||(t[2]=e("span",{class:"absolute top-0 left-[20px] hidden md:block w-[calc(100%_-_40px)] h-px bg-white z-[1]"},null,-1)),(d(!0),r(h,null,f(a.images,(s,u)=>(d(),r("div",{key:u,class:"inline-block col-span-4 w-full md:w-auto mr-6 md:mr-0"},[e("div",W,[e("picture",null,[e("source",{media:"(min-width:768px)",srcset:s?.image?.sizes?.Square},null,8,N),e("img",{class:"absolute w-full h-full object-cover",src:s?.image?.sizes?.Square,alt:s.alt||"",loading:"lazy",decoding:"async"},null,8,E)])]),s.caption?(d(),r("p",P,g(s.caption),1)):o("",!0)]))),128))])])):o("",!0)],2))}};y.__docgenInfo={exportName:"default",displayName:"DarkInterstitial",description:"",tags:{},props:[{name:"icon",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"subheading",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"facts",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"images",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/DarkInterstitial/DarkInterstitial.vue"]};const $={title:"Core Components/Dark Interstitial",component:y},l={name:"Primary",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",icon:!0,paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}},c={name:"With Facts",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",facts:[{figure:"100%",paragraph:"consectetur adipiscing elit"},{figure:"100%",paragraph:"consectetur adipiscing elit"}],paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}},m={name:"With Images",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",images:[{image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/400x400",Square_mobile:"https://placehold.co/300x300"}}},{image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/400x400",Square_mobile:"https://placehold.co/300x300"}}},{image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/400x400",Square_mobile:"https://placehold.co/300x300"}}}],paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Primary",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    icon: true,
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "With Facts",
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
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "With Images",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    images: [{
      image: {
        src: "https://placeholdit.com/400x600/dddddd/999999",
        srcset: "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
        alt: "this is an alt tag",
        sizes: {
          Square: "https://placehold.co/400x400",
          Square_mobile: "https://placehold.co/300x300"
        }
      }
    }, {
      image: {
        src: "https://placeholdit.com/400x600/dddddd/999999",
        srcset: "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
        alt: "this is an alt tag",
        sizes: {
          Square: "https://placehold.co/400x400",
          Square_mobile: "https://placehold.co/300x300"
        }
      }
    }, {
      image: {
        src: "https://placeholdit.com/400x600/dddddd/999999",
        srcset: "https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",
        alt: "this is an alt tag",
        sizes: {
          Square: "https://placehold.co/400x400",
          Square_mobile: "https://placehold.co/300x300"
        }
      }
    }],
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
}`,...m.parameters?.docs?.source}}};const G=["Primary","Facts","Images"];export{c as Facts,m as Images,l as Primary,G as __namedExportsOrder,$ as default};
