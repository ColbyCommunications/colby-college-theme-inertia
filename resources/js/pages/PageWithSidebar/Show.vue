<template>
  <AppLayout :site-data="resolvedSiteData" :menus="resolvedMenus">
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
            class="
            [&_h2]:leading-110
            [&_h2]:-tracking-3
            [&_h2]:font-extended
            [&_h2]:font-normal
            [&_h2]:text-indigo
            [&_h2]:text-24

            [&_h3]:text-20
            [&_h3]:leading-110
            [&_h3]:-tracking-3
            [&_h3]:text-indigo
            [&_h3]:font-extended
            [&_h3]:font-normal
            
            
            [&_h4]:text-16
            [&_h4]:leading-110
            [&_h4]:-tracking-3
            [&_h4]:text-indigo
            [&_h4]:font-extended
            [&_h4]:font-normal
            
            [&>div>section:not(:first-child)]:mt-20
            [&>div>section[data-block-name='core/heading']+section]:mt-[15px]
            "
            :class="
              !resolvedIsPost
                ? 'sidebar-page__main xl:col-start-4 md:col-span-9'
                : 'sidebar-page__main md:col-span-12'
            "
          >
          <ComponentRouter :components="resolvedBlocks" />
          </div>
        </div>
    </section>
  </AppLayout>
</template>
<script setup>
import { computed, defineAsyncComponent } from "vue";
import { usePage } from "@inertiajs/vue3";
import AppLayout from "../Layouts/App.vue";
import ComponentRouter from "../../components/ComponentRouter/ComponentRouter.vue";
const Hero = defineAsyncComponent(() => import("../../components/Hero/Hero.vue"));
const OverlayHero = defineAsyncComponent(() => import("../../components/OverlayHero/OverlayHero.vue"));
const SubpageNav = defineAsyncComponent(() => import("../../components/SubpageNav/SubpageNav.vue"));
const Widget = defineAsyncComponent(() => import("../../components/Widget/Widget.vue"));

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
