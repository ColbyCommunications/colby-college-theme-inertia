import{a0 as u,o as _,b as B,p as m,a as n,K as k,e as s,u as P,c as g,F as T,r as q,d as R,j as I,t as C,q as W,h as Y}from"./iframe-CQJlxVxo.js";import{S as G}from"./search-CarmNYN5.js";import{_ as V}from"./Button-D33RBgaZ.js";import"./preload-helper-PPVm8Dsz.js";const M={class:"flex flex-col justify-between md:flex-row"},z=["onReset"],K={class:"relative flex w-full max-w-sm text-[0]"},U=["value","onInput"],b={__name:"Searchbox",setup(o){return(a,e)=>{const t=u("ais-search-box");return _(),B(t,{class:"w-full"},{default:m(({currentRefinement:i,refine:p})=>[n("div",M,[e[1]||(e[1]=n("h1",{class:"-tracking-3 mb-5 font-extended text-24 leading-110 font-normal text-indigo md:mb-0",textContent:"Search"},null,-1)),n("form",{class:"flex w-full justify-items-end md:w-1/4",onSubmit:e[0]||(e[0]=k(()=>{},["prevent"])),onReset:k(h=>p(""),["prevent"])},[n("label",K,[s(P(G),{class:"absolute top-3 left-3 w-2.5 fill-indigo-800"}),n("input",{id:"search",name:"search",type:"search","aria-label":"Search",placeholder:"Search",autocorrect:"off",autocapitalize:"off",autocomplete:"off",spellcheck:"false",required:"",maxlength:"512",class:"h-[34px] w-full max-w-sm rounded-md border border-solid border-indigo-400 bg-white p-2.5 pl-7 font-body text-10 leading-130 font-normal text-indigo-800 placeholder-indigo-800",value:i,onInput:h=>p(h.target.value)},null,40,U)])],40,z)])]),_:1})}}};b.__docgenInfo=Object.assign({displayName:b.name??b.__name},{exportName:"default",displayName:"Searchbox",description:"",tags:{},sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Search/Searchbox.vue"]});const J={class:"button-group mb-10 flex flex-wrap justify-end gap-4"},X=["aria-label","onClick"],Z={class:"btn__text"},v={__name:"QuerySuggestions",props:{search:Function,removeExactQueryQuerySuggestion:Function},setup(o){return(a,e)=>{const t=u("ais-configure"),i=u("ais-highlight"),p=u("ais-hits"),h=u("ais-index");return _(),B(h,{"index-name":"prod_colbyedu_aggregated_query_suggestions","index-id":"colby-qs"},{default:m(()=>[s(t,{hitsPerPage:8}),s(p,{"transform-items":o.removeExactQueryQuerySuggestion},{default:m(({items:l,sendEvent:r})=>[n("ul",J,[(_(!0),g(T,null,q(l,d=>(_(),g("li",{key:d.objectID,"aria-label":d.query,onClick:x=>o.search(d.query),class:"btn group inline-flex cursor-pointer flex-row items-center space-x-1.5 rounded border border-solid border-indigo-300 bg-indigo-100 px-3 py-1 font-body text-10 leading-130 font-normal text-indigo outline-offset-[-1px] transition-all duration-200 ease-in-out hover:bg-[#eef4ff] focus:bg-[#eef4ff] focus:outline focus:outline-2 focus:outline-canary"},[n("span",Z,[s(i,{hit:d,attribute:"query"},null,8,["hit"])])],8,X))),128))])]),_:1},8,["transform-items"])]),_:1})}}};v.__docgenInfo=Object.assign({displayName:v.name??v.__name},{exportName:"default",displayName:"QuerySuggestions",description:"",tags:{},props:[{name:"search",type:{name:"func"}},{name:"removeExactQueryQuerySuggestion",type:{name:"func"}}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Search/QuerySuggestions.vue"]});const ee={class:"search"},te={class:"mb-5 flex w-full items-center border-b border-gray-200 pb-4"},ne={class:"qs mb-12",role:"region","aria-label":"Query Suggestions"},ae={key:0,class:"-tracking-3 text-left font-extended text-24 leading-110 font-normal text-indigo",textContent:"What are you looking for?"},oe={key:1},se={class:"article space-y-4"},re={class:"context w-full space-y-5"},ce={class:"text-group"},ie=["textContent"],le={class:"text-group__heading -tracking-3 mt-2 text-left font-extended text-20 leading-110 font-normal text-indigo"},ue={class:"text-group__p mt-2 text-left font-body text-12 leading-130 font-normal break-words text-indigo-800 md:text-12"},_e={class:"button-group flex flex-wrap gap-4"},de={key:1},pe={class:"-tracking-3 font-extended text-24 leading-110 font-normal text-indigo"},y={__name:"Search",setup(o,{expose:a}){const e=R(""),t=R(null);function i(l){e.value=l;const r=t.value?.instantSearchInstance?.helper;r&&r.setQuery(l).search()}function p(){e.value="";const l=t.value?.instantSearchInstance?.helper;l&&l.setQuery("").search();const r=t.value?.$el.querySelector('input[type="search"]');r&&(r.value="")}function h(l){const r=t.value?.instantSearchInstance?.helper?.state;if(r&&"query"in r){const d=r.query.toLowerCase();return e.value=d,l.filter(x=>x.query.toLowerCase()!==d)}return l}return a({clearSearch:p}),(l,r)=>{const d=u("ais-configure"),x=u("ais-highlight"),N=u("ais-snippet"),L=u("ais-hits"),Q=u("ais-state-results"),F=u("ais-index"),j=u("ais-instant-search");return _(),g("div",ee,[s(j,{id:"modal-top",ref_key:"aisIS",ref:t,"index-name":"prod_colbyedu_aggregated","search-client":l.searchClient},{default:m(()=>[s(d,{hitsPerPage:1}),n("div",te,[s(b)]),n("div",ne,[s(v,{search:i,removeExactQueryQuerySuggestion:h})]),e.value?I("",!0):(_(),g("p",ae)),e.value?(_(),g("div",oe,[s(F,{"index-name":"prod_colbyedu_aggregated","index-id":"results"},{default:m(()=>[s(d,{hitsPerPage:20}),s(Q,null,{default:m(({results:{hits:A,query:D}})=>[A.length>0?(_(),B(L,{key:0,class:"article-grid mx-auto my-0 grid w-full max-w-screen-2xl grid-cols-8 gap-10 pb-6"},{default:m(({items:$,sendEvent:ge})=>[(_(!0),g(T,null,q($,f=>(_(),g("div",{class:"article-grid__item col-span-4 md:col-span-2",key:f.objectID},[n("article",se,[n("div",re,[n("div",ce,[n("div",{class:"text-group__subheading text-left font-extended text-12 leading-130 font-bold tracking-8 text-azure uppercase",textContent:C(f.originIndexLabel)},null,8,ie),n("h2",le,[s(x,{attribute:"cleaned_title",hit:f},null,8,["hit"])]),n("p",ue,[s(N,{attribute:"content",hit:f},null,8,["hit"])])]),n("div",_e,[s(V,{size:"small",type:"light",url:f.permalink,title:"Read More"},null,8,["url"])])])])]))),128))]),_:1})):(_(),g("div",de,[n("p",pe,[r[0]||(r[0]=W(" No results found for the query: ",-1)),n("q",null,C(D),1)])]))]),_:1})]),_:1})])):I("",!0)]),_:1},8,["search-client"])])}}};y.__docgenInfo=Object.assign({displayName:y.name??y.__name},{exportName:"default",displayName:"Search",description:"",tags:{},expose:[{name:"clearSearch"}],sourceFiles:["/home/runner/work/colby-college-theme-inertia/colby-college-theme-inertia/resources/js/components/Search/Search.vue"]});const{expect:c,userEvent:he,waitFor:E}=__STORYBOOK_MODULE_TEST__,Se={title:"Core Components/Search",component:y,parameters:{backgrounds:{default:"light"}},beforeEach:()=>(window.__SEARCH_HELPER_LOG__=[],delete window.__SEARCH_STORY_REF__,()=>{delete window.__SEARCH_STORY_REF__,delete window.__SEARCH_HELPER_LOG__})},O=o=>({components:{Search:y},setup(){const a=R(null);return Y(()=>{window.__SEARCH_STORY_REF__=a.value}),{args:o,searchRef:a}},template:'<Search ref="searchRef" v-bind="args" />'}),H=o=>{const a={state:{query:""},setQuery(t){return this.state.query=t,{search:()=>{window.__SEARCH_HELPER_LOG__=window.__SEARCH_HELPER_LOG__||[],window.__SEARCH_HELPER_LOG__.push(t)}}},search(){window.__SEARCH_HELPER_LOG__=window.__SEARCH_HELPER_LOG__||[],window.__SEARCH_HELPER_LOG__.push(this.state.query)}},e=window.__SEARCH_STORY_REF__?.$;return e?.setupState?.aisIS?(e.setupState.aisIS.value={instantSearchInstance:{helper:a},$el:o},e):null},S={args:{},render:O,play:async({canvas:o,canvasElement:a})=>{await c(o.getByText("What are you looking for?")).toBeVisible();const e=a.querySelector(".search");await c(e).not.toBeNull();const t=a.querySelector(".ais-InstantSearch");await c(t).not.toBeNull();const i=H(a);await c(i).not.toBeNull(),await c(i?.setupState?.search).toBeTypeOf("function"),i.setupState.search("biology");const p=[{objectID:"1",query:"biology"},{objectID:"2",query:"chemistry"}],h=i.setupState.removeExactQueryQuerySuggestion(p);await c(h.length).toBe(1),window.__SEARCH_STORY_REF__?.clearSearch?.(),await E(()=>{c(o.getByText("What are you looking for?")).toBeInTheDocument()})}},w={args:{},render:O,play:async({canvas:o,canvasElement:a})=>{await c(o.getByText("What are you looking for?")).toBeVisible(),await E(()=>{const i=a.querySelector('input[type="search"]');c(i).not.toBeNull()},{timeout:3e3});const e=a.querySelector('input[type="search"]');await he.type(e,"computer science");const t=H(a);await c(t).not.toBeNull(),await c(t?.setupState?.search).toBeTypeOf("function"),t.setupState.search("computer science"),await E(()=>{c(o.queryByText("What are you looking for?")).not.toBeInTheDocument()}),window.__SEARCH_STORY_REF__?.clearSearch?.(),await E(()=>{c(o.getByText("What are you looking for?")).toBeInTheDocument()})}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {},
  render,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByText("What are you looking for?")).toBeVisible();
    const searchContainer = canvasElement.querySelector(".search");
    await expect(searchContainer).not.toBeNull();
    const aisWrapper = canvasElement.querySelector(".ais-InstantSearch");
    await expect(aisWrapper).not.toBeNull();
    const vm = attachMockHelper(canvasElement);
    await expect(vm).not.toBeNull();
    await expect(vm?.setupState?.search).toBeTypeOf("function");
    vm.setupState.search("biology");
    const suggestions = [{
      objectID: "1",
      query: "biology"
    }, {
      objectID: "2",
      query: "chemistry"
    }];
    const filtered = vm.setupState.removeExactQueryQuerySuggestion(suggestions);
    await expect(filtered.length).toBe(1);
    window.__SEARCH_STORY_REF__?.clearSearch?.();
    await waitFor(() => {
      expect(canvas.getByText("What are you looking for?")).toBeInTheDocument();
    });
  }
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {},
  render,
  play: async ({
    canvas,
    canvasElement
  }) => {
    await expect(canvas.getByText("What are you looking for?")).toBeVisible();
    await waitFor(() => {
      const searchInput = canvasElement.querySelector('input[type="search"]');
      expect(searchInput).not.toBeNull();
    }, {
      timeout: 3000
    });
    const searchInput = canvasElement.querySelector('input[type="search"]');
    await userEvent.type(searchInput, "computer science");
    const vm = attachMockHelper(canvasElement);
    await expect(vm).not.toBeNull();
    await expect(vm?.setupState?.search).toBeTypeOf("function");
    vm.setupState.search("computer science");
    await waitFor(() => {
      expect(canvas.queryByText("What are you looking for?")).not.toBeInTheDocument();
    });
    window.__SEARCH_STORY_REF__?.clearSearch?.();
    await waitFor(() => {
      expect(canvas.getByText("What are you looking for?")).toBeInTheDocument();
    });
  }
}`,...w.parameters?.docs?.source}}};const we=["Default","SearchInteraction"];export{S as Default,w as SearchInteraction,we as __namedExportsOrder,Se as default};
