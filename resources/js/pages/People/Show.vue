<template>
    <AppLayout :site-data="resolvedSiteData" :menus="resolvedMenus">
        <Hero
        :subheading="hero.subheading"
        :heading="hero.heading"
        :paragraph="hero.paragraph"
        />
    
        <section class="sidebar-page">
            <div
                class="sidebar-page__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto md:mt-20 mt-16"
            >
                <div
                class="sidebar-page__secondary md:col-span-3 xl:col-span-2 mb-16 md:mb-0 [&>div+div]:mt-7"
                >
                <SubpageNav
                    heading="People"
                    :items="peopleMenu.items"
                    :menu-obj="true"
                />
        
                <Widget
                    heading="Resources"
                    :buttons="[
                    {
                        button: {
                        url: '/directory-profile-update-form/',
                        title: 'Update Your Directory Profile',
                        },
                    },
                    ]"
                />
                </div>
        
                <div class="sidebar-page__main xl:col-start-4 md:col-span-9">
                    <Table
                        :externalItems="people"
                        api="People"
                        :items-per-page="100"
                    />
                </div>
            </div>
        </section>
    </AppLayout>
  </template>
  
<script setup>
    import { computed, defineAsyncComponent } from "vue";
    import { usePage } from "@inertiajs/vue3";
    import AppLayout from "../Layouts/App.vue";
    import Hero from "../../components/Hero/Hero.vue";
    import SubpageNav from "../../components/SubpageNav/SubpageNav.vue";
    import Widget from "../../components/Widget/Widget.vue";
    import Table from "../../components/Table/Table.vue";
  
  const props = defineProps({
    hero: {
      type: Object,
      required: true,
    },
    people: {
      type: Array,
      default: () => [],
    },
    peopleMenu: {
      type: Object,
      default: () => ({
        heading: "People",
        items: [],
      }),
    },
  });

    const page = usePage();

    const resolvedLayout = computed(() => props.layout || page.props?.layout || "default");
    const resolvedSiteData = computed(() => props.siteData || page.props?.site_data || {});
    const resolvedMenus = computed(() => props.menus || page.props?.menus || {});
</script>