<template>
  <div class="colby-table-block">
    <table
      v-if="!render_api && !externalItems"
      class="block w-full overflow-scroll md:table md:overflow-auto"
    >
      <tbody>
        <tr v-if="normalizedHeadings.length">
          <th
            v-for="(heading, index) in normalizedHeadings"
            :key="`th-${index}`"
            scope="col"
            class="h-12 bg-[#eef4ff] px-6 text-left font-body text-18 leading-120 font-semibold whitespace-nowrap text-indigo md:h-11 md:text-14"
          >
            <span class="sr-only">{{ heading }}</span>
          </th>
        </tr>
        <tr
          v-for="(item, itemIndex) in manualItems"
          :key="`row-${itemIndex}`"
          class="h-12 w-full odd:bg-gray-100 md:h-10"
        >
          <td
            class="px-6 py-2 text-left font-normal whitespace-nowrap md:whitespace-normal"
          >
            <component
              :is="item.link ? 'a' : 'span'"
              class="inline-flex min-h-[44px] min-w-[44px] items-center font-body text-16 leading-140 font-semibold md:text-12"
              :class="
                item.link
                  ? 'cursor-pointer text-indigo hover:underline'
                  : 'text-indigo-800'
              "
              :href="item.link ? item.link.url : null"
            >
              <div
                v-if="item.image"
                class="table__image relative mr-3 hidden overflow-hidden rounded-[50%] md:block"
              >
                <picture>
                  <source
                    media="(min-width:768px)"
                    :srcset="item.image.srcset"
                  />
                  <img
                    class="h-6 w-6"
                    :src="item.image.src"
                    :alt="item.image.alt"
                  />
                </picture>
              </div>

              {{ item.link ? item.link.title : item.title }}
            </component>
          </td>

          <td
            v-if="item.columns"
            v-for="(column, colIndex) in item.columns"
            :key="`col-${itemIndex}-${colIndex}`"
            class="px-6 py-2 font-body text-16 leading-140 font-normal text-indigo-800 md:text-12"
          >
            <a
              v-if="column.link_or_text === 'link'"
              :href="column.link.url"
              class="inline-flex cursor-pointer items-center font-body text-20 text-indigo !underline hover:!no-underline md:text-12"
            >
              {{ column.link.title }}
            </a>
            <template v-else>
              <span>{{
                Array.isArray(column.column)
                  ? column.column.join(", ")
                  : column.column
              }}</span>
            </template>
          </td>
        </tr>
      </tbody>
    </table>

    <div
      v-if="(render_api || externalItems) && initial_heading"
      class="!mb-10 justify-between md:flex"
    >
      <h2
        class="-tracking-3 font-extended text-24 leading-110 font-normal text-indigo"
        v-text="initial_heading"
      />
    </div>

    <div
      v-if="render_api || externalItems"
      class="mt-6 !mb-8 flex flex-wrap justify-between md:mt-0 md:flex-nowrap md:space-x-12"
    >
      <label
        class="relative mb-6 flex w-full max-w-sm shrink-0 text-[0] md:mb-0 md:shrink"
      >
        <svg
          class="absolute top-3 left-3 w-2.5 fill-indigo-800"
          viewBox="0 0 9.6 9.6"
        >
          <path
            d="M3.6 1.2c-1.3 0-2.4 1.1-2.4 2.4C1.2 4.9 2.3 6 3.6 6 4.9 6 6 4.9 6 3.6c0-1.3-1.1-2.4-2.4-2.4zM0 3.6C0 1.6 1.6 0 3.6 0s3.6 1.6 3.6 3.6c0 .8-.2 1.5-.7 2.1l2.9 2.9c.2.2.2.6 0 .8-.2.2-.6.2-.8 0L5.7 6.5c-.6.5-1.3.7-2.1.7-2 0-3.6-1.6-3.6-3.6z"
            style="fill-rule: evenodd; clip-rule: evenodd"
          />
        </svg>
        <input
          class="h-[34px] w-full max-w-sm rounded-md border border-solid border-indigo-400 bg-white p-2.5 pl-7 font-body text-10 leading-130 font-normal text-indigo-800 placeholder-indigo-800"
          type="text"
          name="search-input"
          placeholder="Search"
          v-model="searchTerm"
          @input="onSearchChange"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="12"
          width="12"
          class="absolute top-3 right-3 cursor-pointer fill-indigo-800"
          :class="{
            block: searchTerm.length > 0,
            hidden: searchTerm.length === 0,
          }"
          viewBox="0 0 48 48"
          @click="searchTerm = ''"
        >
          <path
            d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
          />
        </svg>
      </label>

      <select
        v-if="api === 'Course Catalogue'"
        v-model="selectedDepartment"
        @change="toggleDepartment($event)"
        class="mr-5 mb-6 min-h-[44px] w-full max-w-[120px] min-w-[44px] cursor-pointer font-body text-10 leading-130 font-normal text-indigo-900 hover:underline md:mb-0"
        aria-label="Select a department"
      >
        <option value="All Departments">All Departments</option>
      </select>

      <select
        v-if="
          api !== 'Department Courses' && api !== 'Offices' && api !== 'People'
        "
        v-model="selectedDivision"
        @change="toggleTermDivision($event, true)"
        class="mr-5 mb-6 min-h-[44px] w-full max-w-[120px] min-w-[44px] cursor-pointer font-body text-10 leading-130 font-normal text-indigo-900 hover:underline md:mb-0"
        aria-label="Select a division"
      >
        <option value="All Divisions">All Divisions</option>
        <option value="Humanities">Humanities</option>
        <option value="Interdisciplinary Studies">
          Interdisciplinary Studies
        </option>
        <option value="Natural Sciences">Natural Sciences</option>
        <option value="Social Sciences">Social Sciences</option>
      </select>

      <div v-if="filterOptions.length > 0" class="mb-6 flex md:mb-0">
        <button
          class="mr-5 min-h-[44px] min-w-[44px] cursor-pointer font-body text-10 leading-130 font-normal text-indigo-900 hover:underline"
          :class="{ 'font-bold !text-indigo': filters.term === 'all' }"
          @click="toggleTermType('All')"
        >
          All
        </button>
        <button
          v-for="(term, index) in filterOptions"
          :key="index"
          class="mr-5 min-h-[44px] min-w-[44px] cursor-pointer font-body text-10 leading-130 font-normal text-indigo-900 hover:underline"
          :class="{ 'font-bold !text-indigo': filters.term === term }"
          @click="toggleTermType(term)"
        >
          {{ term }}
        </button>
      </div>
    </div>

    <table
      v-if="render_api || externalItems"
      class="colby-table-block block w-full overflow-scroll md:table md:overflow-auto"
    >
      <tbody>
        <tr v-if="normalizedHeadings.length">
          <th
            v-for="(heading, index) in normalizedHeadings"
            :key="`th-${index}`"
            scope="col"
            class="h-12 bg-[#eef4ff] px-6 text-left font-body text-18 leading-120 font-semibold whitespace-nowrap text-indigo md:h-11 md:text-14"
          >
            {{ heading }}
          </th>
        </tr>

        <tr
          v-for="(item, index) in paginatedItems"
          :key="index"
          class="h-12 min-h-[44px] w-full min-w-[44px] leading-[44px] odd:bg-gray-100 md:h-10"
        >
          <th
            scope="row"
            class="px-6 py-2 text-left font-normal whitespace-normal"
          >
            <a
              v-if="item.link.url && !item.image"
              class="inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center font-body text-16 leading-140 font-semibold text-indigo hover:underline md:text-12"
              :href="item.link.url"
            >
              {{ item.link.title }}
            </a>

            <div v-if="item.image">
              <a
                :href="item.link.url"
                class="flex min-h-[44px] min-w-[44px] leading-[44px]"
              >
                <picture class="flex items-center">
                  <source
                    media="(min-width:768px)"
                    :srcset="item.image.srcset || item.image.src"
                  />
                  <img
                    class="table__image relative mr-3 hidden h-6 w-6 overflow-hidden rounded-[50%] md:block"
                    :src="
                      item.image.src
                        ? item.image.src
                        : '/wp-content/uploads/2022/10/profile_placeholder.jpeg'
                    "
                    :alt="item.image.alt"
                  />
                </picture>
                <span
                  class="inline-flex items-center font-body text-16 leading-140 font-semibold text-indigo hover:underline md:text-12"
                >
                  {{ item.link.title }}
                </span>
              </a>
            </div>

            <Modal v-if="item.description" v-model="item.modalOpen">
              <template #content>
                <h3
                  class="flex items-center bg-[#eef4ff] px-5 py-2 text-left font-body text-20 leading-120 font-semibold text-indigo md:text-14"
                  v-text="item.title"
                />
                <p
                  class="p-5 font-body text-20 leading-[1.5rem] font-normal text-indigo-800 md:text-12"
                  v-html="item.description"
                />
              </template>
              <template #button>
                <button
                  type="button"
                  class="inline-flex cursor-pointer items-center text-left font-body text-16 leading-140 font-semibold text-indigo hover:underline md:text-12"
                  v-html="item.link?.title || item.title"
                  @click.stop="item.modalOpen = true"
                ></button>
              </template>
            </Modal>

            <span
              v-if="!item.description && !item.image && !item.link.url"
              class="inline-flex items-center font-body text-20 leading-140 font-semibold text-indigo md:text-12"
            >
              {{ item.link.title }}
            </span>
          </th>

          <td
            v-for="(column, colIndex) in item.columns"
            :key="colIndex"
            class="px-6 py-2 font-body text-16 leading-140 font-normal text-indigo-800 md:text-12"
            v-text="column"
          />
        </tr>
      </tbody>
    </table>

    <div
      v-if="totalPages > 0"
      class="pagination mt-10 flex flex-wrap items-center justify-between gap-y-4"
    >
      <span
        class="pagination__text font-body text-12 leading-140 font-normal text-indigo-800"
      >
        Showing {{ paginatedItems.length }} of {{ inputFilteredItems.length }}
      </span>

      <div
        class="inline-flex h-8 items-center space-x-1 rounded-md bg-gray-100 px-2 py-0.5 md:px-5"
      >
        <button
          v-if="currentPage > 1"
          class="block cursor-pointer p-2 font-body text-14 leading-140 font-normal text-indigo-800 transition-all duration-200 ease-in-out hover:bg-[#eef4ff] hover:text-indigo hover:underline md:text-10"
          @click="navigatePages('prev')"
          aria-label="Previous"
        >
          <svg
            class="w-1 fill-indigo-800"
            viewBox="0 0 4.2 7"
            style="enable-background: new 0 0 4.2 7"
            xml:space="preserve"
          >
            <path
              d="M4 .2c.3.3.3.7 0 1L1.7 3.5 4 5.8c.3.3.3.7 0 1-.3.3-.7.3-1 0L.2 4c-.3-.3-.3-.7 0-1L3 .2c.3-.3.7-.3 1 0z"
              style="fill-rule: evenodd; clip-rule: evenodd"
            />
          </svg>
        </button>

        <ul class="pagination__container inline-flex space-x-1">
          <li
            v-for="pageIndex in visiblePages"
            :key="pageIndex"
            class="pagination__item"
          >
            <button
              class="block min-h-[36px] min-w-[36px] cursor-pointer p-1 py-1 font-body text-14 leading-140 font-normal text-indigo-800 transition-all duration-200 ease-in-out hover:bg-[#eef4ff] hover:text-indigo hover:underline md:min-h-[44px] md:min-w-[44px] md:p-2 md:text-10"
              :class="{ 'bg-[#eef4ff] font-bold': currentPage === pageIndex }"
              @click="navigateFn(pageIndex)"
            >
              {{ pageIndex }}
            </button>
          </li>
        </ul>

        <button
          v-if="currentPage < totalPages"
          class="block cursor-pointer p-2 font-body text-14 leading-140 font-normal text-indigo-800 transition-all duration-200 ease-in-out hover:bg-[#eef4ff] hover:text-indigo hover:underline md:text-10"
          @click="navigatePages('next')"
          aria-label="Next"
        >
          <svg
            class="w-1 rotate-180 fill-indigo-800"
            viewBox="0 0 4.2 7"
            style="enable-background: new 0 0 4.2 7"
            xml:space="preserve"
          >
            <path
              d="M4 .2c.3.3.3.7 0 1L1.7 3.5 4 5.8c.3.3.3.7 0 1-.3.3-.7.3-1 0L.2 4c-.3-.3-.3-.7 0-1L3 .2c.3-.3.7-.3 1 0z"
              style="fill-rule: evenodd; clip-rule: evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import Fuse from "fuse.js";
import Modal from "@/js/components/Modal/Modal.vue";

const props = defineProps({
  render_api: {
    type: Boolean,
    default: false,
  },
  api: {
    type: String,
    default: "",
  },
  departmentCode: {
    type: String,
    default: "",
  },
  itemsPerPage: {
    type: Number,
    default: 20,
  },
  externalItems: {
    type: Array,
    default: null,
  },
  manualItems: { type: Array, default: () => [] },

  headings: {
    type: Array,
    default: () => [],
  },

  initial_items: {
    type: Array,
    default: () => [],
  },
  initial_heading: {
    type: String,
    default: "",
  },
  initial_headings: {
    type: Array,
    default: () => [],
  },
  initial_filter_options: {
    type: Array,
    default: () => [],
  },
  hydrated_from_server: {
    type: Boolean,
    default: false,
  },
  should_client_refresh: {
    type: Boolean,
    default: false,
  },
});

const fuse = ref(null);
const heading = ref(undefined);
const currentHeadings = ref(undefined);
const items = ref([]);
const currentPage = ref(1);
const searchTerm = ref("");
const filterOptions = ref([]);
const selectedDepartment = ref("All Departments");
const selectedDivision = ref("All Divisions");
const windowWidth = ref(
  typeof window !== "undefined" ? window.innerWidth : 1024,
);

const filters = ref({
  term: "all",
  department: "all",
  division: "all",
});

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

const filteredItems = computed(() => {
  let f = [];

  if (
    props.api !== "Departments" &&
    props.api !== "People" &&
    props.api !== "Offices"
  ) {
    f = items.value.filter((item) => item.type.includes(filters.value.term));
  }

  let g = f.length === 0 ? items.value : f;

  if (selectedDepartment.value !== "All Departments") {
    g = g.filter((item) => item.department === filters.value.department);
  }

  if (selectedDivision.value !== "All Divisions") {
    g = g.filter((item) => filters.value.department.includes(item.department));
  }

  if (fuse.value) {
    fuse.value.setCollection(g);
  }

  return g;
});

const inputFilteredItems = computed(() => {
  let u = [];

  if (fuse.value) {
    if (searchTerm.value.length > 0) {
      const f = fuse.value.search(searchTerm.value);
      u = f.map((item) => item.item);
    } else {
      u = filteredItems.value;
    }
  }

  return u;
});

const pageIndexStart = computed(() => {
  return (currentPage.value - 1) * props.itemsPerPage;
});

const pageIndexEnd = computed(() => {
  return pageIndexStart.value + props.itemsPerPage;
});

const paginatedItems = computed(() => {
  return inputFilteredItems.value.slice(
    pageIndexStart.value,
    pageIndexEnd.value,
  );
});

const totalPages = computed(() => {
  return Math.ceil(inputFilteredItems.value.length / props.itemsPerPage);
});

const visiblePages = computed(() => {
  const total = totalPages.value;
  const current = currentPage.value;

  // Set dynamic max bounds based on window width
  let maxVisible = 15;
  if (windowWidth.value < 500) {
    maxVisible = 5;
  } else if (windowWidth.value < 768) {
    maxVisible = 8;
  } else if (windowWidth.value < 1024) {
    maxVisible = 10;
  }

  if (total <= maxVisible) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  let start = current - Math.floor(maxVisible / 2);
  let end = current + Math.floor(maxVisible / 2);

  if (start < 1) {
    start = 1;
    end = maxVisible;
  }

  if (end > total) {
    end = total;
    start = total - maxVisible + 1;
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
});

function initFuse() {
  if (filteredItems.value) {
    fuse.value = new Fuse(filteredItems.value, {
      shouldSort: true,
      threshold: 0.6,
      ignoreLocation: false,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["title", "description", "faculty"],
    });
  }
}

const normalizedHeadings = computed(() => {
  const sourceHeadings = Array.isArray(currentHeadings.value)
    ? currentHeadings.value
    : props.headings || [];

  const sourceItems =
    props.render_api || props.externalItems ? items.value : props.manualItems;

  const normalizedSourceHeadings = sourceHeadings.map((heading) => {
    if (heading && typeof heading === "object") {
      return heading.heading || "";
    }
    return heading || "";
  });

  const maxColumnCount = sourceItems.reduce((max, item) => {
    return Math.max(max, Array.isArray(item.columns) ? item.columns.length : 0);
  }, 0);

  let totalHeadingsNeeded = 0;

  if (normalizedSourceHeadings.length !== maxColumnCount + 1) {
    if (normalizedSourceHeadings.length > maxColumnCount + 1) {
      totalHeadingsNeeded =
        normalizedSourceHeadings.length - maxColumnCount + 1;
    } else {
      totalHeadingsNeeded =
        maxColumnCount + 1 - normalizedSourceHeadings.length;
    }
  }

  let headings = [...normalizedSourceHeadings];

  for (let i = 0; i < totalHeadingsNeeded; i++) {
    headings.push("");
  }

  return headings.map((heading, index) => {
    return heading.trim() !== "" ? heading : `Column ${index + 1}`;
  });
});

function updateQueryParams() {
  const params = new URLSearchParams();

  if (selectedDepartment.value !== "All Departments") {
    params.set("department", selectedDepartment.value);
  }

  if (selectedDivision.value !== "All Divisions") {
    params.set("division", selectedDivision.value);
  }

  if (currentPage.value > 1) {
    params.set("pag", currentPage.value);
  }

  if (filters.value.term !== "all") {
    params.set("term", filters.value.term);
  }

  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.pushState({ path: newUrl }, "", newUrl);
}

function navigateFn(index) {
  currentPage.value = index;
  updateQueryParams();
}

function navigatePages(dir) {
  if (dir === "prev" && currentPage.value > 1) {
    currentPage.value -= 1;
  } else if (dir === "next" && currentPage.value < totalPages.value) {
    currentPage.value += 1;
  }
  updateQueryParams();
}

function toggleDepartment(event) {
  if (selectedDivision.value !== "All Divisions") {
    selectedDivision.value = "All Divisions";
  }

  currentPage.value = 1;

  if (event.target.value === "All Departments") {
    filters.value.department = "all";
  } else {
    filters.value.department = event.target.value;
  }

  updateQueryParams();
}

function toggleTermType(term) {
  currentPage.value = 1;
  filters.value.term = term === "All" ? "all" : term;
  updateQueryParams();
}

function toggleTermDivision(event, runUpdate) {
  if (selectedDepartment.value !== "All Departments") {
    selectedDepartment.value = "All Departments";
  }

  currentPage.value = 1;

  switch (event.target.value) {
    case "Humanities":
      filters.value.department = [
        "ART",
        "CLAS",
        "EAST",
        "ENGL",
        "FRIT",
        "GMRU",
        "MUSI",
        "THEA",
        "PHIL",
        "RELG",
        "SPAN",
        "WRTG",
      ];
      break;
    case "Interdisciplinary Studies":
      filters.value.department = [
        "AFAM",
        "AMER",
        "INTD",
        "EDUC",
        "ENVS",
        "GLST",
        "LTAM",
        "SCIT",
        "WGST",
      ];
      break;
    case "Natural Sciences":
      filters.value.department = [
        "PHYS",
        "BIOL",
        "CHEM",
        "COMP",
        "ERSC",
        "MATH",
        "STAT",
      ];
      break;
    case "Social Sciences":
      filters.value.department = [
        "ANTH",
        "ECON",
        "GOVT",
        "HIST",
        "PSYC",
        "SOCY",
      ];
      break;
    default:
      break;
  }

  if (runUpdate) {
    updateQueryParams();
  }
}

function onSearchChange() {
  currentPage.value = 1;
}

onMounted(() => {
  window.addEventListener("resize", handleResize);

  const params = new URLSearchParams(window.location.search);

  if (
    props.api !== "Departments" &&
    props.api !== "People" &&
    props.api !== "Offices" &&
    props.api !== "Department Courses"
  ) {
    if (params.has("department")) {
      selectedDepartment.value = params.get("department");
      filters.value.department = params.get("department");
    }
  }

  if (
    props.api !== "People" &&
    props.api !== "Offices" &&
    props.api !== "Department Courses"
  ) {
    if (params.has("division")) {
      selectedDivision.value = params.get("division");
      filters.value.division = params.get("division");
      toggleTermDivision({ target: { value: params.get("division") } }, false);
    }
  }

  if (
    props.api !== "Departments" &&
    props.api !== "People" &&
    props.api !== "Offices"
  ) {
    if (params.has("term")) {
      filters.value.term = params.get("term");
    }
  }

  if (params.has("pag")) {
    currentPage.value = Number(params.get("pag"));
  }

  if (props.render_api) {
    heading.value = props.initial_heading;
    currentHeadings.value = props.initial_headings;
    filterOptions.value = props.initial_filter_options;
    items.value = props.initial_items || [];
    initFuse();
  }

  if (props.externalItems) {
    heading.value = props.api;

    switch (props.api) {
      case "People":
        items.value = props.externalItems.map((item) => ({
          image: {
            src: item.thumbnail,
            alt: item.post_title,
          },
          title: item.post_title,
          link: {
            title: item.post_title,
            url: `/people/people-directory/${item.post_name}/`,
          },
          columns: [
            item.business_title,
            item.department ? item.department : "",
          ],
          modalOpen: false,
        }));
        currentHeadings.value = ["Name", "Title", "Department"];
        break;

      case "Offices":
        items.value = props.externalItems.map((item) => ({
          title: item.post_title,
          link: {
            title: item.post_title,
            url: `/people/offices-directory/${item.post_name}/`,
          },
          columns: [],
          modalOpen: false,
        }));
        currentHeadings.value = ["Name"];
        break;

      case "Departments":
        heading.value = "Departments and Programs";
        items.value = props.externalItems.map((item) => ({
          title: item.post_title,
          link: {
            title: item.post_title,
            url: `/academics/departments-and-programs/${item.post_name}/`,
          },
          columns: [],
          department: item.department_code,
          modalOpen: false,
        }));
        currentHeadings.value = ["Name"];
        break;
    }

    initFuse();
  }
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>
