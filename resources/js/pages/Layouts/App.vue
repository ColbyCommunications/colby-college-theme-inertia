<template>
  <div>
    <a
      href="#main"
      class="absolute top-auto left-[-9999px] h-px w-px overflow-hidden focus:static focus:h-auto focus:w-auto"
      >Skip to Main Content</a
    >

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
      :menus="{
        action: menus.action,
        footer: menus.footer,
        social: menus.social,
      }"
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

<style scoped></style>
