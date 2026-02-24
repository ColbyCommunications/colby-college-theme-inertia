import{o as m,c as b,a as r,F as H,r as _,b as k,d as v,t as C,n as D,e as E,w as L,f as S,v as T,T as M}from"./iframe-BfBFAde5.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const P={class:"accordion mx-auto w-full max-w-screen-2xl"},R={class:"colby-accordion-block border-b border-gray-300"},j={class:"accordion__header"},F=["aria-expanded","onClick"],V={class:"font-body !text-18 leading-120 font-bold text-indigo"},z={class:"flex h-9 w-11 shrink-0 items-center justify-center rounded-sm border border-gray-300 bg-gray-100"},I={class:"accordion__window"},N={class:"accordion__content"},q=["innerHTML"],g={__name:"Accordion",props:{panels:{type:Array,required:!0,default:()=>[]},single:{type:Boolean,default:!1},openByDefault:{type:Boolean,default:!1}},setup(c){const o=c,n=k([]),a=t=>n.value.includes(t),i=t=>{a(t)?n.value=n.value.filter(d=>d!==t):o.single?n.value=[t]:n.value.push(t)},s=t=>{t.style.height="0",t.style.visibility="hidden",t.offsetHeight,t.style.height=t.scrollHeight+"px",t.style.visibility="visible"},y=t=>{t.style.height="auto"},A=t=>{t.style.height=t.scrollHeight+"px",t.style.visibility="visible",t.offsetHeight,t.style.height="0",t.style.visibility="hidden"};return m(()=>{o.openByDefault&&o.panels.length>0&&n.value.push(0)}),(t,d)=>(v(),b("div",P,[r("div",R,[(v(!0),b(H,null,_(c.panels,(h,l)=>(v(),b("div",{key:l,class:"accordion__panel border-t border-solid border-gray-300"},[r("div",j,[r("button",{class:"accordion__button flex items-center justify-between gap-x-3 !px-0 !py-6",type:"button","aria-expanded":a(l),onClick:K=>i(l)},[r("h3",V,C(h.heading),1),r("div",z,[r("div",{class:D(["-rotate-90 transition-all duration-200 ease-in-out",{"!rotate-90":a(l)}])},[...d[0]||(d[0]=[r("svg",{class:"w-1.5 fill-azure",viewBox:"0 0 10.5 6.4",xmlns:"http://www.w3.org/2000/svg"},[r("path",{d:"M5.2 6.4L0 1.1 1.1 0l4.2 4.2L9.4 0l1.1 1.1z"})],-1)])],2)])],8,F)]),E(M,{name:"accordion",onEnter:s,onAfterEnter:y,onLeave:A},{default:L(()=>[S(r("div",I,[r("div",N,[r("div",{innerHTML:h.content},null,8,q)])],512),[[T,a(l)]])]),_:2},1024)]))),128))])]))}},B=O(g,[["__scopeId","data-v-450bad30"]]);g.__docgenInfo={exportName:"default",displayName:"Accordion",description:"",tags:{},props:[{name:"panels",type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"single",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"openByDefault",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Accordion/Accordion.vue"]};const{expect:e,waitFor:U}=__STORYBOOK_MODULE_TEST__,J={title:"Core Components/Accordion",component:B,argTypes:{single:{control:"boolean",description:"If true, opening one panel automatically closes others."},openByDefault:{control:"boolean",description:"If true, the first panel will be open when the component mounts."},panels:{control:"object",description:"Array of content objects. Content accepts HTML strings."}},parameters:{backgrounds:{default:"light"}}},w=c=>({components:{Accordion:B},setup(){return{args:c}},template:`
    <div class="p-10">
      <Accordion v-bind="args" />
    </div>
  `}),x=[{heading:"Admissions & Aid",content:"<p>Learn about our application process, financial aid options, and deadlines for the upcoming academic year..</p>"},{heading:"Academics",content:"<p>Explore our diverse range of majors, minors, and research opportunities available to undergraduate students.</p>"},{heading:"Campus Life",content:"<p>Discover student organizations, housing options, and the vibrant community events happening on campus.</p>"}],u={args:{panels:x,single:!1,openByDefault:!1},render:w,play:async({canvas:c,userEvent:o})=>{const n=c.getAllByRole("button"),a=n[0],i=n[1],s=n[2];await o.click(a),await e(a).toHaveAttribute("aria-expanded","true"),await o.click(i),await e(a).toHaveAttribute("aria-expanded","true"),await e(i).toHaveAttribute("aria-expanded","true"),await o.click(s),await e(a).toHaveAttribute("aria-expanded","true"),await e(i).toHaveAttribute("aria-expanded","true"),await e(s).toHaveAttribute("aria-expanded","true"),await o.click(a),await e(a).toHaveAttribute("aria-expanded","false"),await e(i).toHaveAttribute("aria-expanded","true"),await e(s).toHaveAttribute("aria-expanded","true"),await o.click(s),await e(s).toHaveAttribute("aria-expanded","false"),await e(i).toHaveAttribute("aria-expanded","true")}},p={args:{panels:x,single:!0,openByDefault:!1},render:w,play:async({canvas:c,userEvent:o})=>{const n=c.getAllByRole("button"),a=n[0],i=n[1],s=n[2];await o.click(a),await e(a).toHaveAttribute("aria-expanded","true"),await o.click(i),await e(i).toHaveAttribute("aria-expanded","true"),await e(a).toHaveAttribute("aria-expanded","false"),await o.click(s),await e(s).toHaveAttribute("aria-expanded","true"),await e(i).toHaveAttribute("aria-expanded","false"),await e(a).toHaveAttribute("aria-expanded","false"),await o.click(s),await e(s).toHaveAttribute("aria-expanded","false"),await e(i).toHaveAttribute("aria-expanded","false"),await e(a).toHaveAttribute("aria-expanded","false")}},f={args:{panels:x,single:!0,openByDefault:!0},render:w,play:async({canvas:c,userEvent:o})=>{const n=c.getAllByRole("button"),a=n[0],i=n[2];await U(()=>{e(a).toHaveAttribute("aria-expanded","true")}),await o.click(i),await e(i).toHaveAttribute("aria-expanded","true"),await e(a).toHaveAttribute("aria-expanded","false")}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const Q=["Default","SingleMode","PreOpened"];export{u as Default,f as PreOpened,p as SingleMode,Q as __namedExportsOrder,J as default};
