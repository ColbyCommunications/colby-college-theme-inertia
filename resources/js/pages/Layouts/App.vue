<template>
  <div>
    <a
      href="#main"
      class="absolute top-auto left-[-9999px] h-px w-px overflow-hidden focus:static focus:h-auto focus:w-auto"
      >Skip to Main Content</a
    >

    <Alert v-if="globalAlert && globalAlert.active" v-bind="globalAlert" />

    <SiteHeader
      :url="resolvedSiteData.url"
      :menus="{ main: resolvedMenus.main, utility: resolvedMenus.utility }"
      :logo="resolvedSiteData.headerlogo"
      :logoStyle="resolvedSiteData['headerlogo_styles']"
      :utilityMenuStyle="resolvedSiteData['utility_menu_style']"
      :utilityMenuButton="utilityButtonProps"
    />

    <main
      id="main"
      class="
        colby-page 
        pb-20 
        md:pb-[100px] 
        [&>div+div]:mt-20
        md:[&>div>section:not(section[data-block-name='acf/home-hero']+section[data-block-name='acf/carousel'])>div:not(.section-nav):not(.hero):not(.home-hero):not(.overlay-hero)]:mt-[100px]
        md:[&>div>section[data-block-name='acf/context-article-grid']+section[data-block-name='acf/hero']>div]:mt-[100px]
        md:[&>div>section[data-block-name='acf/home-hero']+section[data-block-name='acf/carousel']]:mt-[-50px]
        [&>div>section>div.full-bleed]:w-full 
        [&>div>section>div:not(.full-bleed)]:px-[10px]
        md:[&>div>section>div:not(.full-bleed)]:max-w-screen-2xl
        md:[&>div>section>div:not(.full-bleed)]:mx-auto"
    >
      <slot>
        <!-- default fallback -->
        Sorry, no content
      </slot>
    </main>
    <SiteFooter
      :url="resolvedSiteData.url"
      :address="resolvedSiteData.address"
      :phone="resolvedSiteData.phone"
      :menus="{
        action: resolvedMenus.action,
        footer: resolvedMenus.footer,
        social: resolvedMenus.social,
      }"
      :logo="resolvedSiteData.footerlogo"
      :logoStyle="resolvedSiteData['footerlogo_styles']"
      :footerStyle="resolvedSiteData['footer_style']"
    />
  </div>
</template>
<script setup>
import { computed } from "vue";
import { usePage } from "@inertiajs/vue3";

import Alert from "../../components/Alert/Alert.vue";
import SiteHeader from "../../components/SiteHeader/SiteHeader.vue";
import SiteFooter from "../../components/SiteFooter/SiteFooter.vue";

const props = defineProps({
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
const pageSiteData = computed(() => page.props?.site_data || {});
const pageMenus = computed(() => page.props?.menus || {});

const resolvedSiteData = computed(() => ({
  url: "",
  address: {},
  phone: "",
  alert: null,
  ...(pageSiteData.value || {}),
  ...(props.siteData || {}),
}));

const resolvedMenus = computed(() => ({
  main: [],
  utility: [],
  action: [],
  footer: [],
  social: [],
  ...(pageMenus.value || {}),
  ...(props.menus || {}),
}));

const globalAlert = computed(() => resolvedSiteData.value.alert || null);

const utilityButtonProps = computed(() => ({
    text: resolvedSiteData.value.utility_button_text,
    url: resolvedSiteData.value.utility_button_url
  }));

</script>

