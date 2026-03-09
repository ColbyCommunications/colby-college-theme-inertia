import{o as w,b as y}from"./iframe-BfrXP-2i.js";import{_ as u}from"./Search-CSWEiVOL.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-ASD-Nliy.js";const{expect:e,userEvent:S,waitFor:i}=__STORYBOOK_MODULE_TEST__,d={title:"Core Components/Search",component:u,parameters:{backgrounds:{default:"light"}},beforeEach:()=>(window.__SEARCH_HELPER_LOG__=[],delete window.__SEARCH_STORY_REF__,()=>{delete window.__SEARCH_STORY_REF__,delete window.__SEARCH_HELPER_LOG__})},_=a=>({components:{Search:u},setup(){const t=y(null);return w(()=>{window.__SEARCH_STORY_REF__=t.value}),{args:a,searchRef:t}},template:'<Search ref="searchRef" v-bind="args" />'}),l=a=>{const t={state:{query:""},setQuery(n){return this.state.query=n,{search:()=>{window.__SEARCH_HELPER_LOG__=window.__SEARCH_HELPER_LOG__||[],window.__SEARCH_HELPER_LOG__.push(n)}}},search(){window.__SEARCH_HELPER_LOG__=window.__SEARCH_HELPER_LOG__||[],window.__SEARCH_HELPER_LOG__.push(this.state.query)}},o=window.__SEARCH_STORY_REF__?.$;return o?.setupState?.aisIS?(o.setupState.aisIS.value={instantSearchInstance:{helper:t},$el:a},o):null},c={args:{},render:_,play:async({canvas:a,canvasElement:t})=>{await e(a.getByText("What are you looking for?")).toBeVisible();const o=t.querySelector(".search");await e(o).not.toBeNull();const n=t.querySelector(".ais-InstantSearch");await e(n).not.toBeNull();const r=l(t);await e(r).not.toBeNull(),await e(r?.setupState?.search).toBeTypeOf("function"),r.setupState.search("biology");const p=[{objectID:"1",query:"biology"},{objectID:"2",query:"chemistry"}],h=r.setupState.removeExactQueryQuerySuggestion(p);await e(h.length).toBe(1),window.__SEARCH_STORY_REF__?.clearSearch?.(),await i(()=>{e(a.getByText("What are you looking for?")).toBeInTheDocument()})}},s={args:{},render:_,play:async({canvas:a,canvasElement:t})=>{await e(a.getByText("What are you looking for?")).toBeVisible(),await i(()=>{const r=t.querySelector('input[type="search"]');e(r).not.toBeNull()},{timeout:3e3});const o=t.querySelector('input[type="search"]');await S.type(o,"computer science");const n=l(t);await e(n).not.toBeNull(),await e(n?.setupState?.search).toBeTypeOf("function"),n.setupState.search("computer science"),await i(()=>{e(a.queryByText("What are you looking for?")).not.toBeInTheDocument()}),window.__SEARCH_STORY_REF__?.clearSearch?.(),await i(()=>{e(a.getByText("What are you looking for?")).toBeInTheDocument()})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const B=["Default","SearchInteraction"];export{c as Default,s as SearchInteraction,B as __namedExportsOrder,d as default};
