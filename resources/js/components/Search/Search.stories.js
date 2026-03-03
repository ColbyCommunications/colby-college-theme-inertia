import { ref, onMounted } from "vue";
import { expect, userEvent, waitFor } from "storybook/test";
import Search from "./Search.vue";

export default {
  title: "Core Components/Search",
  component: Search,
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
  beforeEach: () => {
    window.__SEARCH_HELPER_LOG__ = [];
    delete window.__SEARCH_STORY_REF__;

    return () => {
      delete window.__SEARCH_STORY_REF__;
      delete window.__SEARCH_HELPER_LOG__;
    };
  },
};

const render = (args) => ({
  components: { Search },
  setup() {
    const searchRef = ref(null);

    onMounted(() => {
      window.__SEARCH_STORY_REF__ = searchRef.value;
    });

    return { args, searchRef };
  },
  template: '<Search ref="searchRef" v-bind="args" />',
});

const attachMockHelper = (canvasElement) => {
  const helper = {
    state: { query: "" },
    setQuery(query) {
      this.state.query = query;
      return {
        search: () => {
          window.__SEARCH_HELPER_LOG__ = window.__SEARCH_HELPER_LOG__ || [];
          window.__SEARCH_HELPER_LOG__.push(query);
        },
      };
    },
    search() {
      window.__SEARCH_HELPER_LOG__ = window.__SEARCH_HELPER_LOG__ || [];
      window.__SEARCH_HELPER_LOG__.push(this.state.query);
    },
  };

  const vm = window.__SEARCH_STORY_REF__?.$;
  if (!vm?.setupState?.aisIS) {
    return null;
  }

  vm.setupState.aisIS.value = {
    instantSearchInstance: { helper },
    $el: canvasElement,
  };

  return vm;
};

export const Default = {
  args: {},
  render,
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByText("What are you looking for?")).toBeVisible();

    const searchContainer = canvasElement.querySelector(".search");
    await expect(searchContainer).not.toBeNull();

    const aisWrapper = canvasElement.querySelector(".ais-InstantSearch");
    await expect(aisWrapper).not.toBeNull();

    const vm = attachMockHelper(canvasElement);
    await expect(vm).not.toBeNull();
    await expect(vm?.setupState?.search).toBeTypeOf("function");
    vm.setupState.search("biology");

    const suggestions = [
      { objectID: "1", query: "biology" },
      { objectID: "2", query: "chemistry" },
    ];
    const filtered = vm.setupState.removeExactQueryQuerySuggestion(suggestions);
    await expect(filtered.length).toBe(1);

    window.__SEARCH_STORY_REF__?.clearSearch?.();
    await waitFor(() => {
      expect(canvas.getByText("What are you looking for?")).toBeInTheDocument();
    });
  },
};

export const SearchInteraction = {
  args: {},
  render,
  play: async ({ canvas, canvasElement }) => {
    await expect(canvas.getByText("What are you looking for?")).toBeVisible();

    await waitFor(
      () => {
        const searchInput = canvasElement.querySelector('input[type="search"]');
        expect(searchInput).not.toBeNull();
      },
      { timeout: 3000 },
    );

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
  },
};
