<template>
  <AppLayout
    :site-data="resolvedSiteData"
    :menus="resolvedMenus"
    :page-title="props.title"
  >
    <template
      v-if="
        page_categories && page_categories.find((pc) => pc.slug === 'office')
      "
    >
      <section class="sidebar-page">
        <div
          class="sidebar-page__inner mx-auto my-0 mt-16 w-full max-w-screen-2xl gap-x-10 px-5 md:mt-20 md:grid md:grid-cols-12"
        >
          <div
            v-if="!resolvedIsPost && resolvedSidebar"
            class="sidebar-page__secondary mb-16 md:col-span-3 md:mb-0 xl:col-span-2 [&>div+div]:mt-7"
          >
            <SubpageNav
              :heading="resolvedSidebar.nav?.heading"
              :items="resolvedSidebar.nav?.items"
              :parent-permalink="resolvedSidebar.nav?.parentPermalink"
            />

            <Widget
              v-for="(widget, idx) in resolvedSidebar.widgets || []"
              :key="idx"
              :heading="widget.heading"
              :text="widget.text"
              :buttons="widget.buttons"
            />
          </div>
          <div
            class="[&>div>section:not(:first-child)]:mt-20 [&>div>section[data-block-name='core/heading']_a]:underline [&>div>section[data-block-name='core/heading']_a:hover]:no-underline [&>div>section[data-block-name='core/heading']+section]:mt-[20px]"
            :class="
              !resolvedIsPost
                ? 'sidebar-page__main md:col-span-9 xl:col-start-4'
                : 'sidebar-page__main md:col-span-12'
            "
          >
            <DirectoryCard
              type="offices"
              :name="title"
              :address="address"
              :phone="phone"
              :email="email"
              :fax="fax"
              :location="location"
              :image="image"
            />
            <ComponentRouter :components="resolvedBlocks" />
          </div>
        </div>
      </section>
    </template>
    <template v-else>
      <Hero
        v-if="resolvedHero && resolvedHero.type === 'default'"
        v-bind="resolvedHero.props"
      />
      <OverlayHero
        v-else-if="resolvedHero && resolvedHero.type === 'overlay'"
        v-bind="resolvedHero.props"
      />
      <section class="sidebar-page">
        <div
          class="sidebar-page__inner mx-auto my-0 mt-16 w-full max-w-screen-2xl gap-x-10 px-5 md:mt-20 md:grid md:grid-cols-12"
        >
          <div
            v-if="!resolvedIsPost && resolvedSidebar"
            class="sidebar-page__secondary mb-16 md:col-span-3 md:mb-0 xl:col-span-2 [&>div+div]:mt-7"
          >
            <SubpageNav
              :heading="resolvedSidebar.nav?.heading"
              :items="resolvedSidebar.nav?.items"
              :parent-permalink="resolvedSidebar.nav?.parentPermalink"
            />

            <Widget
              v-for="(widget, idx) in resolvedSidebar.widgets || []"
              :key="idx"
              :heading="widget.heading"
              :text="widget.text"
              :buttons="widget.buttons"
            />
          </div>

          <div
            class="[&>div>section:not(:first-child)]:mt-20 [&>div>section[data-block-name='core/heading']_a]:underline [&>div>section[data-block-name='core/heading']_a:hover]:no-underline [&>div>section[data-block-name='core/heading']+section]:mt-[20px]"
            :class="
              !resolvedIsPost
                ? 'sidebar-page__main md:col-span-9 xl:col-start-4'
                : 'sidebar-page__main md:col-span-12'
            "
          >
            <ComponentRouter :components="resolvedBlocks" />
          </div>
        </div>
      </section>
    </template>
  </AppLayout>
</template>
<script setup>
import { computed, defineAsyncComponent } from "vue";
import { usePage } from "@inertiajs/vue3";
import AppLayout from "../Layouts/App.vue";
import ComponentRouter from "../../components/ComponentRouter/ComponentRouter.vue";
const Hero = defineAsyncComponent(
  () => import("../../components/Hero/Hero.vue"),
);
const OverlayHero = defineAsyncComponent(
  () => import("../../components/OverlayHero/OverlayHero.vue"),
);
const SubpageNav = defineAsyncComponent(
  () => import("../../components/SubpageNav/SubpageNav.vue"),
);
const Widget = defineAsyncComponent(
  () => import("../../components/Widget/Widget.vue"),
);
import DirectoryCard from "../../components/DirectoryCard/DirectoryCard.vue";

const props = defineProps({
  title: String,
  content: {
    type: String,
    default: "",
  },
  acf: Object,
  layout: {
    type: String,
    default: null,
  },
  blocks: {
    type: Array,
    default: null,
  },
  hero: {
    type: Object,
    default: null,
  },
  sidebar: {
    type: Object,
    default: null,
  },
  isPost: {
    default: null,
  },
  siteData: {
    type: Object,
    default: null,
  },
  menus: {
    type: Object,
    default: null,
  },
  page_categories: {
    type: Array,
    default: [],
  },
  address: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  fax: {
    type: String,
    default: "",
  },
  location: {
    type: String,
    default: "",
  },
  image: String,
});

const page = usePage();

console.log(props);

const resolvedLayout = computed(
  () => props.layout || page.props?.layout || "default",
);
const resolvedBlocks = computed(() => props.blocks || page.props?.blocks || []);
const resolvedHero = computed(() => props.hero || page.props?.hero || null);
const resolvedSidebar = computed(
  () => props.sidebar || page.props?.sidebar || null,
);
const resolvedContent = computed(
  () => props.content || page.props?.content || "",
);
const resolvedIsPost = computed(() => {
  if (props.isPost !== null) {
    return props.isPost;
  }
  return !!page.props?.isPost;
});

const resolvedSiteData = computed(
  () => props.siteData || page.props?.site_data || {},
);
const resolvedMenus = computed(() => props.menus || page.props?.menus || {});
</script>
