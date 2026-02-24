import{o as T,k,u as I,c as o,F as y,a,m as d,e as w,r as b,n as L,b as q,d as r,t as x}from"./iframe-BfBFAde5.js";import{_ as S}from"./Context-Dp7yX81d.js";import{_ as D}from"./Picture-CxKtrm5G.js";import{g as v}from"./index-DDlvirwQ.js";import"./noframework.waypoints-DVP5Ss7z.js";import"./preload-helper-PPVm8Dsz.js";import"./TextGroup-T77HtXsG.js";import"./ButtonGroup-DeVPz35K.js";import"./Button-u50yI3p6.js";const E={class:"dark-interstitial__inner relative md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"},A={class:"dark-interstitial__main md:col-start-3 md:col-span-8"},z={key:1,class:"dark-interstitial__inner relative md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto mt-12"},C={class:"dark-interstitial__figures md:col-start-3 md:col-span-8 grid grid-cols-8 gap-x-10 max-w-screen-2xl w-full"},F={class:"font-extended font-normal text-36 text-canary leading-100"},W={class:"font-body font-normal text-14 text-indigo-200 leading-130"},O={key:2,class:"dark-interstitial__images-wrap overflow-scroll md:overflow-visible mt-28"},V={class:"dark-interstitial__inner relative md:grid grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-9 md:px-5 my-0 mx-auto mr-9 md:mr-auto whitespace-nowrap text-[0]"},N={class:"dark-interstitial__image relative pb-[119.44444444444444%]"},G={key:0,class:"font-body font-normal text-12 text-indigo-200 leading-140 mt-2"},B={__name:"DarkInterstitial",props:{icon:{type:Boolean,default:!1},subheading:{type:String,default:""},heading:{type:String,default:""},paragraph:{type:String,default:""},buttons:{type:Array,default:()=>[]},facts:{type:Array,default:()=>[]},images:{type:Array,default:()=>[]}},setup(e){const n=q([]);let g=[];const _=i=>{if(!i)return;const t=i.querySelector("h3"),s=i.querySelector("p");v.to(t,{duration:.4,opacity:1,scale:1,ease:"power3.inOut",onComplete:()=>{v.to(s,{opacity:1,duration:.3,ease:"power1.out"})}})};return T(async()=>{await k(),n.value&&n.value.length&&n.value.forEach(i=>{const t=new Waypoint({element:i,handler:()=>{_(i),t.destroy()},offset:"bottom-in-view"});g.push(t)})}),I(()=>{g.forEach(i=>i.destroy()),g=[]}),(i,t)=>(r(),o("div",{class:L(["dark-interstitial py-24 bg-indigo [&+.dark-interstitial]:mt-0 !max-w-full",e.icon?"md:pt-12 relative":""])},[e.icon?(r(),o(y,{key:0},[t[0]||(t[0]=a("div",{class:"relative hidden md:flex justify-end max-w-screen-2xl w-full px-5 my-0 mx-auto mb-16"},[a("svg",{class:"w-5 fill-canary",viewBox:"0 0 20.83 30","aria-hidden":"true"},[a("path",{d:"m1.76 30 2.47-4.16 2.32-1.09.43-1.27 1.57 1.18 1.96-.88.49-3.54 1.08.98.39 1.77 1.76-2.41 1.58.74 1.18-2.06.89.39 1.17-.88 1.68.2.1-1.38-2.07-1.28-.53-1.88.24-2.25-2.17.1.4-9.92L13.85.2l-1.76 1.19h-1.87L10.13 0H8.64L5.41 7.08 4.32 9.5l.39 1.3-1.47.59-.29 1.87-.69 1.47-2.16-.2L0 28.39 1.76 30Z"})])],-1)),t[1]||(t[1]=a("div",{class:"bg-darkinterstitial__pattern bg-cover opacity-30 absolute z-0 top-0 left-0 w-full h-full"},null,-1))],64)):d("",!0),a("div",E,[a("div",A,[w(S,{size:"medium",type:"light",arrow:!0,reverse:!0,align:"center",subheading:e.subheading,heading:e.heading,paragraph:e.paragraph,buttons:{items:e.buttons}},null,8,["subheading","heading","paragraph","buttons"])])]),Array.isArray(e.facts)&&e.facts.length?(r(),o("div",z,[a("div",C,[(r(!0),o(y,null,b(e.facts,(s,f)=>(r(),o("div",{key:f,class:"dark-interstitial__fact col-span-4 space-y-3"},[a("div",{class:"dark-interstitial__fact--animated",ref_for:!0,ref_key:"factContainers",ref:n},[a("h3",F,x(s.figure),1),a("p",W,x(s.paragraph),1)],512)]))),128))])])):d("",!0),Array.isArray(e.images)&&e.images.length?(r(),o("div",O,[a("div",V,[t[2]||(t[2]=a("span",{class:"absolute top-0 left-[20px] hidden md:block w-[calc(100%_-_40px)] h-px bg-white z-[1]"},null,-1)),(r(!0),o(y,null,b(e.images,(s,f)=>(r(),o("div",{key:f,class:"inline-block col-span-4 w-full md:w-auto mr-6 md:mr-0"},[a("div",N,[w(D,{class:"absolute w-full h-full object-cover","size-desktop":s?.image?.sizes?.Square,"size-mobile":s?.image?.sizes?.Square,alt:s.alt||"",loading:"lazy"},null,8,["size-desktop","size-mobile","alt"])]),s.caption?(r(),o("p",G,x(s.caption),1)):d("",!0)]))),128))])])):d("",!0)],2))}};B.__docgenInfo={exportName:"default",displayName:"DarkInterstitial",description:"",tags:{},props:[{name:"icon",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"subheading",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"heading",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"paragraph",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"buttons",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"facts",type:{name:"array"},defaultValue:{func:!1,value:"[]"}},{name:"images",type:{name:"array"},defaultValue:{func:!1,value:"[]"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/DarkInterstitial/DarkInterstitial.vue"]};const{expect:l}=__STORYBOOK_MODULE_TEST__,Y={title:"Core Components/Dark Interstitial",component:B},c={name:"Primary",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",icon:!0,paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},play:async({canvas:e})=>{const n=e.getAllByText("Lorem ipsum");await l(n.length).toBeGreaterThanOrEqual(2),await l(e.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument()}},m={name:"With Facts",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",facts:[{figure:"100%",paragraph:"consectetur adipiscing elit"},{figure:"100%",paragraph:"consectetur adipiscing elit"}],paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},play:async({canvas:e})=>{const n=e.getAllByText("Lorem ipsum");await l(n.length).toBeGreaterThanOrEqual(2),await l(e.getAllByText("100%").length).toBeGreaterThan(0)}},u={name:"With Images",args:{subheading:"Lorem ipsum",heading:"Lorem ipsum",images:[{image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/400x400",Square_mobile:"https://placehold.co/300x300"}}},{image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/400x400",Square_mobile:"https://placehold.co/300x300"}}},{image:{src:"https://placeholdit.com/400x600/dddddd/999999",srcset:"https://placeholdit.com/300x200/dddddd/999999 300w, https://placeholdit.com/600x400/dddddd/999999 600w",alt:"this is an alt tag",sizes:{Square:"https://placehold.co/400x400",Square_mobile:"https://placehold.co/300x300"}}}],paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},play:async({canvas:e})=>{const n=e.getAllByText("Lorem ipsum");await l(n.length).toBeGreaterThanOrEqual(2)}},p={name:"Without Icon",args:{subheading:"Campus Update",heading:"New Facilities",icon:!1,paragraph:"Colby is investing in state-of-the-art facilities for students."},play:async({canvas:e})=>{await l(e.getByText("Campus Update")).toBeInTheDocument(),await l(e.getByText("New Facilities")).toBeInTheDocument()}},h={name:"Without Facts or Images",args:{subheading:"Quick Info",heading:"Important Dates",icon:!0,paragraph:"Check the academic calendar for important deadlines."},play:async({canvas:e})=>{await l(e.getByText("Quick Info")).toBeInTheDocument(),await l(e.getByText("Important Dates")).toBeInTheDocument()}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Primary",
  args: {
    subheading: "Lorem ipsum",
    heading: "Lorem ipsum",
    icon: true,
    paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  play: async ({
    canvas
  }) => {
    // Both subheading and heading are "Lorem ipsum", so use getAllByText
    const loremElements = canvas.getAllByText("Lorem ipsum");
    await expect(loremElements.length).toBeGreaterThanOrEqual(2);
    await expect(canvas.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")).toBeInTheDocument();
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvas
  }) => {
    // Both subheading and heading are "Lorem ipsum", so use getAllByText
    const loremElements = canvas.getAllByText("Lorem ipsum");
    await expect(loremElements.length).toBeGreaterThanOrEqual(2);
    await expect(canvas.getAllByText("100%").length).toBeGreaterThan(0);
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvas
  }) => {
    // Both subheading and heading are "Lorem ipsum", so use getAllByText
    const loremElements = canvas.getAllByText("Lorem ipsum");
    await expect(loremElements.length).toBeGreaterThanOrEqual(2);
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Without Icon",
  args: {
    subheading: "Campus Update",
    heading: "New Facilities",
    icon: false,
    paragraph: "Colby is investing in state-of-the-art facilities for students."
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Campus Update")).toBeInTheDocument();
    await expect(canvas.getByText("New Facilities")).toBeInTheDocument();
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Without Facts or Images",
  args: {
    subheading: "Quick Info",
    heading: "Important Dates",
    icon: true,
    paragraph: "Check the academic calendar for important deadlines."
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText("Quick Info")).toBeInTheDocument();
    await expect(canvas.getByText("Important Dates")).toBeInTheDocument();
  }
}`,...h.parameters?.docs?.source}}};const Z=["Primary","Facts","Images","WithoutIcon","WithoutFacts"];export{m as Facts,u as Images,c as Primary,h as WithoutFacts,p as WithoutIcon,Z as __namedExportsOrder,Y as default};
