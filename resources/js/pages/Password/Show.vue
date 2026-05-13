<template>
    <AppLayout :site-data="resolvedSiteData" :menus="resolvedMenus">
        <div class="grid gap-10 max-w-screen-2xl w-full my-0 mx-auto grid-cols-12 mt-20">
            <div v-html="password_form" class="
            col-span-12 [&_[type='password']]:border 
            [&_[type='submit']]:border 
            [&_[type='submit']]:px-10 
            [&_[type='submit']]:bg-[#002878] 
            [&_[type='submit']]:text-white 
            [&_[type='submit']:hover]:bg-[#fff]
            [&_[type='submit']:hover]:text-[#002878]
            [&_[type='submit']]:cursor-pointer" />
        </div>
    </AppLayout>
</template>
  <script setup>
  import { computed, defineAsyncComponent } from "vue";
  import { usePage } from "@inertiajs/vue3";
  import AppLayout from "../Layouts/App.vue";

  
  const props = defineProps({
    password_form: String,
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
  