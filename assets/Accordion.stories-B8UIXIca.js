import{o as H,c as f,a as c,F as _,r as k,b as C,d as b,t as D,n as E,e as g,w as L,f as S,v as T,T as O}from"./iframe-CGPm4GIA.js";import{_ as M}from"./Icon-C0W9NhA0.js";import{_ as P}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const R={class:"accordion mx-auto w-full max-w-screen-2xl"},j={class:"colby-accordion-block border-b border-gray-300"},F={class:"accordion__header"},V=["aria-expanded","onClick"],I={class:"font-body !text-18 leading-120 font-bold text-indigo"},N={class:"flex shrink-0 items-center justify-center w-11 h-9 bg-gray-100 border border-gray-300 rounded-sm"},z={class:"accordion__window"},q={class:"accordion__content"},U=["innerHTML"],y={__name:"Accordion",props:{panels:{type:Array,required:!0,default:()=>[]},single:{type:Boolean,default:!1},openByDefault:{type:Boolean,default:!1}},setup(r){const i=r,n=C([]),a=t=>n.value.includes(t),o=t=>{a(t)?n.value=n.value.filter(w=>w!==t):i.single?n.value=[t]:n.value.push(t)},s=t=>{t.style.height="0",t.style.visibility="hidden",t.offsetHeight,t.style.height=t.scrollHeight+"px",t.style.visibility="visible"},A=t=>{t.style.height="auto"},m=t=>{t.style.height=t.scrollHeight+"px",t.style.visibility="visible",t.offsetHeight,t.style.height="0",t.style.visibility="hidden"};return H(()=>{i.openByDefault&&i.panels.length>0&&n.value.push(0)}),(t,w)=>(b(),f("div",R,[c("div",j,[(b(!0),f(_,null,k(r.panels,(h,d)=>(b(),f("div",{key:d,class:"accordion__panel border-t border-solid border-gray-300"},[c("div",F,[c("button",{class:"accordion__button flex items-center justify-between gap-x-3 !px-0 !py-6",type:"button","aria-expanded":a(d),onClick:K=>o(d)},[c("h3",I,D(h.heading),1),c("div",N,[c("div",{class:E(["icon-container transition-all duration-200 ease-in-out",t.isOpen?"rotate-90":"-rotate-90"])},[g(M,{name:"chevron",class:"fill-azure w-1.5"})],2)])],8,V)]),g(O,{name:"accordion",onEnter:s,onAfterEnter:A,onLeave:m},{default:L(()=>[S(c("div",z,[c("div",q,[c("div",{innerHTML:h.content},null,8,U)])],512),[[T,a(d)]])]),_:2},1024)]))),128))])]))}},B=P(y,[["__scopeId","data-v-7d3fcdcf"]]);y.__docgenInfo={exportName:"default",displayName:"Accordion",description:"",tags:{},props:[{name:"panels",type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"single",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"openByDefault",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Accordion/Accordion.vue"]};const{expect:e,waitFor:$}=__STORYBOOK_MODULE_TEST__,W={title:"Core Components/Accordion",component:B,argTypes:{single:{control:"boolean",description:"If true, opening one panel automatically closes others."},openByDefault:{control:"boolean",description:"If true, the first panel will be open when the component mounts."},panels:{control:"object",description:"Array of content objects. Content accepts HTML strings."}},parameters:{backgrounds:{default:"light"}}},v=r=>({components:{Accordion:B},setup(){return{args:r}},template:`
    <div class="p-10">
      <Accordion v-bind="args" />
    </div>
  `}),x=[{heading:"Admissions & Aid",content:"<p>Learn about our application process, financial aid options, and deadlines for the upcoming academic year..</p>"},{heading:"Academics",content:"<p>Explore our diverse range of majors, minors, and research opportunities available to undergraduate students.</p>"},{heading:"Campus Life",content:"<p>Discover student organizations, housing options, and the vibrant community events happening on campus.</p>"}],l={args:{panels:x,single:!1,openByDefault:!1},render:v,play:async({canvas:r,userEvent:i})=>{const n=r.getAllByRole("button"),a=n[0],o=n[1],s=n[2];await i.click(a),await e(a).toHaveAttribute("aria-expanded","true"),await i.click(o),await e(a).toHaveAttribute("aria-expanded","true"),await e(o).toHaveAttribute("aria-expanded","true"),await i.click(s),await e(a).toHaveAttribute("aria-expanded","true"),await e(o).toHaveAttribute("aria-expanded","true"),await e(s).toHaveAttribute("aria-expanded","true"),await i.click(a),await e(a).toHaveAttribute("aria-expanded","false"),await e(o).toHaveAttribute("aria-expanded","true"),await e(s).toHaveAttribute("aria-expanded","true"),await i.click(s),await e(s).toHaveAttribute("aria-expanded","false"),await e(o).toHaveAttribute("aria-expanded","true")}},u={args:{panels:x,single:!0,openByDefault:!1},render:v,play:async({canvas:r,userEvent:i})=>{const n=r.getAllByRole("button"),a=n[0],o=n[1],s=n[2];await i.click(a),await e(a).toHaveAttribute("aria-expanded","true"),await i.click(o),await e(o).toHaveAttribute("aria-expanded","true"),await e(a).toHaveAttribute("aria-expanded","false"),await i.click(s),await e(s).toHaveAttribute("aria-expanded","true"),await e(o).toHaveAttribute("aria-expanded","false"),await e(a).toHaveAttribute("aria-expanded","false"),await i.click(s),await e(s).toHaveAttribute("aria-expanded","false"),await e(o).toHaveAttribute("aria-expanded","false"),await e(a).toHaveAttribute("aria-expanded","false")}},p={args:{panels:x,single:!0,openByDefault:!0},render:v,play:async({canvas:r,userEvent:i})=>{const n=r.getAllByRole("button"),a=n[0],o=n[2];await $(()=>{e(a).toHaveAttribute("aria-expanded","true")}),await i.click(o),await e(o).toHaveAttribute("aria-expanded","true"),await e(a).toHaveAttribute("aria-expanded","false")}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const X=["Default","SingleMode","PreOpened"];export{l as Default,p as PreOpened,u as SingleMode,X as __namedExportsOrder,W as default};
