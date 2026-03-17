import{k as H,c as b,a as c,F as _,j as k,r as C,o as v,t as D,n as E,b as y,A as L,p as O,v as S,T}from"./iframe-2EPpb5ip.js";import{_ as j}from"./Icon-D4Aebhhy.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const P={class:"accordion mx-auto w-full max-w-screen-2xl",role:"accordion"},R={class:"colby-accordion-block border-b border-gray-300"},F={class:"accordion__header"},N=["aria-expanded","onClick"],V={class:"font-body !text-18 leading-120 font-bold text-indigo"},I={class:"flex shrink-0 items-center justify-center w-11 h-9 bg-gray-100 border border-gray-300 rounded-sm"},z={class:"accordion__window"},q={class:"accordion__content"},U=["innerHTML"],f={__name:"Accordion",props:{panels:{type:Array,required:!0,default:()=>[]},single:{type:Boolean,default:!1},openByDefault:{type:Boolean,default:!1}},setup(r){const o=r,n=C([]),a=t=>n.value.includes(t),i=t=>{a(t)?n.value=n.value.filter(h=>h!==t):o.single?n.value=[t]:n.value.push(t)},s=t=>{t.style.height="0",t.style.visibility="hidden",t.offsetHeight,t.style.height=t.scrollHeight+"px",t.style.visibility="visible"},m=t=>{t.style.height="auto"},A=t=>{t.style.height=t.scrollHeight+"px",t.style.visibility="visible",t.offsetHeight,t.style.height="0",t.style.visibility="hidden"};return H(()=>{o.openByDefault&&o.panels.length>0&&n.value.push(0)}),(t,h)=>(v(),b("div",P,[c("div",R,[(v(!0),b(_,null,k(r.panels,(g,l)=>(v(),b("div",{key:l,class:"accordion__panel border-t border-solid border-gray-300",role:"region"},[c("div",F,[c("button",{class:"accordion__button flex items-center justify-between gap-x-3 !px-0 !py-6",type:"button","aria-expanded":a(l),onClick:K=>i(l)},[c("h3",V,D(g.heading),1),c("div",I,[c("div",{class:E(["icon-container transition-all duration-200 ease-in-out",t.isOpen?"rotate-90":"-rotate-90"])},[y(j,{name:"chevron",class:"fill-azure w-1.5"})],2)])],8,N)]),y(T,{name:"accordion",onEnter:s,onAfterEnter:m,onLeave:A},{default:L(()=>[O(c("div",z,[c("div",q,[c("div",{innerHTML:g.content},null,8,U)])],512),[[S,a(l)]])]),_:2},1024)]))),128))])]))}},B=M(f,[["__scopeId","data-v-6a8b5266"]]);f.__docgenInfo=Object.assign({displayName:f.name??f.__name},{exportName:"default",displayName:"Accordion",description:"",tags:{},props:[{name:"panels",type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"single",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"openByDefault",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Accordion/Accordion.vue"]});const{expect:e,waitFor:$}=__STORYBOOK_MODULE_TEST__,W={title:"Core Components/Accordion",component:B,argTypes:{single:{control:"boolean",description:"If true, opening one panel automatically closes others."},openByDefault:{control:"boolean",description:"If true, the first panel will be open when the component mounts."},panels:{control:"object",description:"Array of content objects. Content accepts HTML strings."}},parameters:{backgrounds:{default:"light"}}},x=r=>({components:{Accordion:B},setup(){return{args:r}},template:`
    <div class="p-10">
      <Accordion v-bind="args" />
    </div>
  `}),w=[{heading:"Admissions & Aid",content:"<p>Learn about our application process, financial aid options, and deadlines for the upcoming academic year..</p>"},{heading:"Academics",content:"<p>Explore our diverse range of majors, minors, and research opportunities available to undergraduate students.</p>"},{heading:"Campus Life",content:"<p>Discover student organizations, housing options, and the vibrant community events happening on campus.</p>"}],d={args:{panels:w,single:!1,openByDefault:!1},render:x,play:async({canvas:r,userEvent:o})=>{const n=r.getAllByRole("button"),a=n[0],i=n[1],s=n[2];await o.click(a),await e(a).toHaveAttribute("aria-expanded","true"),await o.click(i),await e(a).toHaveAttribute("aria-expanded","true"),await e(i).toHaveAttribute("aria-expanded","true"),await o.click(s),await e(a).toHaveAttribute("aria-expanded","true"),await e(i).toHaveAttribute("aria-expanded","true"),await e(s).toHaveAttribute("aria-expanded","true"),await o.click(a),await e(a).toHaveAttribute("aria-expanded","false"),await e(i).toHaveAttribute("aria-expanded","true"),await e(s).toHaveAttribute("aria-expanded","true"),await o.click(s),await e(s).toHaveAttribute("aria-expanded","false"),await e(i).toHaveAttribute("aria-expanded","true")}},u={args:{panels:w,single:!0,openByDefault:!1},render:x,play:async({canvas:r,userEvent:o})=>{const n=r.getAllByRole("button"),a=n[0],i=n[1],s=n[2];await o.click(a),await e(a).toHaveAttribute("aria-expanded","true"),await o.click(i),await e(i).toHaveAttribute("aria-expanded","true"),await e(a).toHaveAttribute("aria-expanded","false"),await o.click(s),await e(s).toHaveAttribute("aria-expanded","true"),await e(i).toHaveAttribute("aria-expanded","false"),await e(a).toHaveAttribute("aria-expanded","false"),await o.click(s),await e(s).toHaveAttribute("aria-expanded","false"),await e(i).toHaveAttribute("aria-expanded","false"),await e(a).toHaveAttribute("aria-expanded","false")}},p={args:{panels:w,single:!0,openByDefault:!0},render:x,play:async({canvas:r,userEvent:o})=>{const n=r.getAllByRole("button"),a=n[0],i=n[2];await $(()=>{e(a).toHaveAttribute("aria-expanded","true")}),await o.click(i),await e(i).toHaveAttribute("aria-expanded","true"),await e(a).toHaveAttribute("aria-expanded","false")}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    panels: basicPanels,
    single: false,
    openByDefault: false
  },
  render,
  play: async ({
    canvas,
    userEvent
  }) => {
    const buttons = canvas.getAllByRole("button");
    const firstButton = buttons[0];
    const secondButton = buttons[1];
    const thirdButton = buttons[2];

    // Click first panel, assert it expanded
    await userEvent.click(firstButton);
    await expect(firstButton).toHaveAttribute("aria-expanded", "true");

    // Click second panel, assert both are expanded (multi-expand mode)
    await userEvent.click(secondButton);
    await expect(firstButton).toHaveAttribute("aria-expanded", "true");
    await expect(secondButton).toHaveAttribute("aria-expanded", "true");

    // Click third panel, assert all three are expanded
    await userEvent.click(thirdButton);
    await expect(firstButton).toHaveAttribute("aria-expanded", "true");
    await expect(secondButton).toHaveAttribute("aria-expanded", "true");
    await expect(thirdButton).toHaveAttribute("aria-expanded", "true");

    // Click first again, assert it collapsed while others stay open
    await userEvent.click(firstButton);
    await expect(firstButton).toHaveAttribute("aria-expanded", "false");
    await expect(secondButton).toHaveAttribute("aria-expanded", "true");
    await expect(thirdButton).toHaveAttribute("aria-expanded", "true");

    // Collapse third, assert it collapsed
    await userEvent.click(thirdButton);
    await expect(thirdButton).toHaveAttribute("aria-expanded", "false");
    await expect(secondButton).toHaveAttribute("aria-expanded", "true");
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    panels: basicPanels,
    single: true,
    openByDefault: false
  },
  render,
  play: async ({
    canvas,
    userEvent
  }) => {
    const buttons = canvas.getAllByRole("button");
    const firstButton = buttons[0];
    const secondButton = buttons[1];
    const thirdButton = buttons[2];

    // Click first panel, assert it expanded
    await userEvent.click(firstButton);
    await expect(firstButton).toHaveAttribute("aria-expanded", "true");

    // Click second panel, assert first auto-closes
    await userEvent.click(secondButton);
    await expect(secondButton).toHaveAttribute("aria-expanded", "true");
    await expect(firstButton).toHaveAttribute("aria-expanded", "false");

    // Click third panel, assert second auto-closes
    await userEvent.click(thirdButton);
    await expect(thirdButton).toHaveAttribute("aria-expanded", "true");
    await expect(secondButton).toHaveAttribute("aria-expanded", "false");
    await expect(firstButton).toHaveAttribute("aria-expanded", "false");

    // Click third again to collapse it, assert all are now closed
    await userEvent.click(thirdButton);
    await expect(thirdButton).toHaveAttribute("aria-expanded", "false");
    await expect(secondButton).toHaveAttribute("aria-expanded", "false");
    await expect(firstButton).toHaveAttribute("aria-expanded", "false");
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    panels: basicPanels,
    single: true,
    // Usually pairs well with single mode
    openByDefault: true
  },
  render,
  play: async ({
    canvas,
    userEvent
  }) => {
    const buttons = canvas.getAllByRole("button");
    const firstButton = buttons[0];
    const thirdButton = buttons[2];

    // Assert first panel starts expanded
    await waitFor(() => {
      expect(firstButton).toHaveAttribute("aria-expanded", "true");
    });

    // Click third panel, assert first auto-closes (single mode)
    await userEvent.click(thirdButton);
    await expect(thirdButton).toHaveAttribute("aria-expanded", "true");
    await expect(firstButton).toHaveAttribute("aria-expanded", "false");
  }
}`,...p.parameters?.docs?.source}}};const X=["Default","SingleMode","PreOpened"];export{d as Default,p as PreOpened,u as SingleMode,X as __namedExportsOrder,W as default};
