<template>
  <div>
    <a href="#main" class="skip-to-main">Skip to Main Content</a>

    <Alert v-if="global_alert && global_alert.active" v-bind="global_alert" />

    <SiteHeader
      :url="siteData.url"
      :menus="{ main: menus.main, utility: menus.utility }"
    />

    <main
      id="main"
      class="colby-page pb-20 md:pb-[100px] [&>div+div]:mt-20 md:[&>div+div]:mt-[100px]"
    >
      <slot>
        <!-- default fallback -->
        Sorry, no content
      </slot>
    </main>
    <SiteFooter
      :url="siteData.url"
      :address="siteData.address"
      :phone="siteData.phone"
      :menu="menus.footer"
    />
  </div>
</template>
<script setup>
import { usePage } from "@inertiajs/vue3";

import Alert from "../../components/Alert/Alert.vue";
import SiteHeader from "../../components/SiteHeader/SiteHeader.vue";
import SiteFooter from "../../components/SiteFooter/SiteFooter.vue";

const page = usePage();
const siteData = page.props.site_data;
const menus = page.props.menus;
</script>

<style>
/* carry over skip link behavior if you had it in CSS */
.skip-to-main {
  position: absolute;
  left: -9999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
.skip-to-main:focus {
  position: static;
  width: auto;
  height: auto;
}
</style>
