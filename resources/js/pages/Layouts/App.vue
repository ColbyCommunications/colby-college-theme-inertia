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
    />

    <main
      id="main"
      class="colby-page pb-20 md:pb-[100px] [&>div+div]:mt-20 md:[&>div>section:not(:first-child)]:mt-[100px]"
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
</script>

<style scoped></style>
