<template>
  <div class="colby-table-block">
    <slot v-if="!render_api && !externalItems" />

    <div
      v-if="render_api || externalItems"
      class="!mb-10 justify-between md:flex"
    >
      <h2
        class="font-extended text-24 leading-110 -tracking-3 font-normal text-indigo"
        v-text="heading"
      />
    </div>

    <div
      v-if="render_api || externalItems"
      class="!mb-8 mt-6 flex flex-wrap justify-between md:mt-0 md:flex-nowrap md:space-x-12"
    >
      <label
        class="relative mb-6 flex w-full max-w-sm shrink-0 text-[0] md:mb-0 md:shrink"
      >
        Search
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
          xmlns="https://www.w3.org/2000/svg"
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
        class="mr-5 mb-6 w-full max-w-[120px] cursor-pointer font-body text-10 leading-130 font-normal text-indigo-900 hover:underline md:mb-0"
        aria-label="Select a department"
      >
        <option value="All Departments">All Departments</option>
        <option value="AFAM">African American Studies</option>
        <option value="AMER">American Studies</option>
        <option value="ANTH">Anthropology</option>
        <option value="ART">Art</option>
        <option value="BIOL">Biology</option>
        <option value="CHEM">Chemistry</option>
        <option value="CINE">Cinema Studies</option>
        <option value="CLAS">Classics</option>
        <option value="COMP">Computer Science</option>
        <option value="EAST">East Asian Studies</option>
        <option value="ECON">Economics</option>
        <option value="EDUC">Education</option>
        <option value="ENGL">English</option>
        <option value="ENVS">Environmental Studies</option>
        <option value="FRIT">French and Italian</option>
        <option value="GEOL">Geology</option>
        <option value="GMRU">German and Russian</option>
        <option value="GLST">Global Studies</option>
        <option value="GOVT">Government</option>
        <option value="HIST">History</option>
        <option value="INDP">Independent Major</option>
        <option value="ISP">Integrated Studies</option>
        <option value="JWST">Jewish Studies</option>
        <option value="LTAM">Latin American Studies</option>
        <option value="MATH">Mathematics</option>
        <option value="MUSI">Music</option>
        <option value="THEA">Performance, Theater, and Dance</option>
        <option value="PHIL">Philosophy</option>
        <option value="PHYS">Physics and Astronomy</option>
        <option value="PSYC">Psychology</option>
        <option value="RELG">Religious Studies</option>
        <option value="SCIT">Science, Technology, and Society</option>
        <option value="SOCY">Sociology</option>
        <option value="SPAN">Spanish</option>
        <option value="STAT">Statistics</option>
        <option value="WGST">Women's, Gender, and Sexuality Studies</option>
        <option value="WRTG">Writing Department</option>
      </select>

      <select
        v-if="
          api !== 'Department Courses' &&
          api !== 'Offices' &&
          api !== 'People'
        "
        v-model="selectedDivision"
        @change="toggleTermDivision($event, true)"
        class="mr-5 mb-6 w-full max-w-[120px] cursor-pointer font-body text-10 leading-130 font-normal text-indigo-900 hover:underline md:mb-0"
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
          class="mr-5 font-body text-10 leading-130 font-normal text-indigo-900 hover:underline"
          :class="{ '!text-indigo font-bold': filters.term === 'all' }"
          @click="toggleTermType('All')"
        >
          All
        </button>
        <button
          v-for="(term, index) in filterOptions"
          :key="index"
          class="mr-5 font-body text-10 leading-130 font-normal text-indigo-900 hover:underline"
          :class="{ '!text-indigo font-bold': filters.term === term }"
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
        <tr v-if="headings">
          <th
            v-for="(heading_item, index) in headings"
            :key="index"
            class="h-12 whitespace-nowrap bg-[#eef4ff] px-6 text-left font-body text-18 leading-120 font-semibold text-indigo md:h-11 md:text-14"
          >
            {{ heading_item }}
          </th>
        </tr>

        <tr
          v-for="(item, index) in paginatedItems"
          :key="index"
          class="h-12 w-full odd:bg-gray-100 md:h-10"
        >
          <td class="whitespace-normal px-6 py-2">
            <a
              v-if="item.link.url && !item.image"
              class="inline-flex items-center font-body text-16 leading-140 font-semibold text-indigo hover:underline md:text-12"
              :href="item.link.url"
            >
              {{ item.link.title }}
            </a>

            <div v-if="item.image">
              <a :href="item.link.url" class="flex">
                <picture>
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

            <Modal
              v-if="item.description"
              v-model="item.modalOpen"
            >
              <template #content>
                <h3
                  class="flex items-center bg-[#eef4ff] px-5 py-2 text-left font-body text-20 leading-120 font-semibold text-indigo md:text-14"
                  v-text="item.title"
                />
                <p
                  class="p-5 font-body text-20 leading-140 font-normal text-indigo-800 md:text-12"
                  v-html="item.description"
                />
              </template>
              <template #button>
                <span
                  class="inline-flex items-center font-body text-16 leading-140 font-semibold text-indigo hover:underline md:text-12"
                  v-html="item.link.title"
                />
              </template>
            </Modal>

            <span
              v-if="!item.description && !item.image && !item.link.url"
              class="inline-flex items-center font-body text-20 leading-140 font-semibold text-indigo md:text-12"
            >
              {{ item.link.title }}
            </span>
          </td>

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
      class="pagination mt-10 flex items-center justify-between"
    >
      <span
        class="pagination__text font-body text-12 leading-140 font-normal text-indigo-800"
      >
        Showing {{ paginatedItems.length }} of {{ inputFilteredItems.length }}
      </span>

      <div
        class="inline-flex h-8 items-center space-x-1 rounded-md bg-gray-100 px-5 py-0.5"
      >
        <button
          v-if="currentPage !== 1"
          class="block p-2 font-body text-14 leading-140 font-normal text-indigo-800 transition-all duration-200 ease-in-out hover:bg-[#eef4ff] hover:text-indigo hover:underline md:text-10"
          @click="navigatePages('prev')"
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
            v-for="pageIndex in totalPages"
            :key="pageIndex"
            class="pagination__item"
          >
            <button
              class="block p-2 py-1 font-body text-14 leading-140 font-normal text-indigo-800 transition-all duration-200 ease-in-out hover:bg-[#eef4ff] hover:text-indigo hover:underline md:text-10"
              :class="{ 'bg-[#eef4ff]': currentPage === pageIndex }"
              @click="navigateFn(pageIndex)"
            >
              {{ pageIndex }}
            </button>
          </li>
        </ul>

        <button
          v-if="currentPage !== totalPages"
          class="block p-2 font-body text-14 leading-140 font-normal text-indigo-800 transition-all duration-200 ease-in-out hover:bg-[#eef4ff] hover:text-indigo hover:underline md:text-10"
          @click="navigatePages('next')"
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
import { ref, computed, onMounted } from "vue";
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

  // NEW
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
const headings = ref(undefined);
const items = ref([]);
const currentPage = ref(1);
const searchTerm = ref("");
const filterOptions = ref([]);
const selectedDepartment = ref("All Departments");
const selectedDivision = ref("All Divisions");
const filters = ref({
  term: "all",
  department: "all",
  division: "all",
});

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
    g = g.filter((item) =>
      filters.value.department.includes(item.department),
    );
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
  if (dir === "prev") {
    if (currentPage.value !== 1) {
      currentPage.value -= 1;
    }
  } else {
    if (currentPage.value !== totalPages.value) {
      currentPage.value += 1;
    }
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
        "GEOL",
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
      toggleTermDivision(
        { target: { value: params.get("division") } },
        false,
      );
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
    headings.value = props.initial_headings;
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
        headings.value = ["Name", "Title", "Department"];
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
        headings.value = ["Name"];
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
        headings.value = ["Name"];
        break;
    }

    initFuse();
  }
});
</script>