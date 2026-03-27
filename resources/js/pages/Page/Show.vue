<template>
  <AppLayout :site-data="resolvedSiteData" :menus="resolvedMenus">
    <template v-if="resolvedLayout === 'with-sidebar'">
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
          class="sidebar-page__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto md:mt-20 mt-16"
        >
          <div
            v-if="!resolvedIsPost && resolvedSidebar"
            class="sidebar-page__secondary md:col-span-3 xl:col-span-2 mb-16 md:mb-0 [&>div+div]:mt-7"
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
            :class="
              !resolvedIsPost
                ? 'sidebar-page__main xl:col-start-4 md:col-span-9'
                : 'sidebar-page__main md:col-span-12'
            "
          >
            <Wysiwyg :content="resolvedContent" />
          </div>
        </div>
      </section>
    </template>

    <ComponentRouter v-else :components="resolvedBlocks" />
  </AppLayout>
</template>
<script setup>
import { computed } from "vue";
import { usePage } from "@inertiajs/vue3";
import AppLayout from "../Layouts/App.vue";
import ComponentRouter from "../../components/ComponentRouter/ComponentRouter.vue";
import Hero from "../../components/Hero/Hero.vue";
import OverlayHero from "../../components/OverlayHero/OverlayHero.vue";
import SubpageNav from "../../components/SubpageNav/SubpageNav.vue";
import Widget from "../../components/Widget/Widget.vue";
import Wysiwyg from "../../components/Wysiwyg/Wysiwyg.vue";

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
});

const page = usePage();

const resolvedLayout = computed(() => props.layout || page.props?.layout || "default");
const resolvedBlocks = computed(() => props.blocks || page.props?.blocks || []);
const resolvedHero = computed(() => props.hero || page.props?.hero || null);
const resolvedSidebar = computed(() => props.sidebar || page.props?.sidebar || null);
const resolvedContent = computed(() => props.content || page.props?.content || "");
const resolvedIsPost = computed(() => {
  if (props.isPost !== null) {
    return props.isPost;
  }
  return !!page.props?.isPost;
});

const resolvedSiteData = computed(() => props.siteData || page.props?.site_data || {});
const resolvedMenus = computed(() => props.menus || page.props?.menus || {});
</script>
