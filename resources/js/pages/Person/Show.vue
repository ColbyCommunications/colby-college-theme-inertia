<template>
  <AppLayout>
    <section class="sidebar-page">
      <div
        class="sidebar-page__inner mx-auto my-0 mt-8 w-full max-w-screen-2xl px-5"
      >
        <a
          class="inline-flex min-h-[44px] min-w-[44px] items-center py-1.5 font-body text-14 leading-140 leading-[44px] font-normal text-indigo-800 hover:text-indigo hover:underline md:text-10 md:font-medium"
          href="/people/people-directory"
        >
          <Icon name="chevron" class="mr-2 w-1 fill-indigo-800" /> Back to Index
        </a>
      </div>
      <div
        class="sidebar-page__inner mx-auto my-0 mt-16 w-full max-w-screen-2xl gap-x-10 px-5 md:grid md:grid-cols-12"
      >
        <div
          class="sidebar-page__secondary mb-16 md:col-span-3 md:mb-0 xl:col-span-2 [&>div+div]:mt-7"
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
                url: '/directory-profile-update-form/',
                title: 'Update Your Directory Profile',
              },
            ]"
          />
        </div>
        <div
          class="sidebar-page__main directory-person-main space-y-16 md:col-span-9 xl:col-start-4"
        >
          <DirectoryCard
            :name="title"
            :pronouns="acf.pronouns"
            :department="acf.department"
            :title="acf.title"
            :phone="acf.phone"
            :curriculum_vitae="acf.curriculum_vitae"
            :email="acf.email"
            :location="acf.building"
            :office_hours="acf.office_hours"
            :address="acf.address"
            :fax="acf.fax"
            :bio="acf.bio"
            :hide_pronouns="acf.hide_pronouns"
            :hide_phone_number="acf.hide_phone_number"
            :hide_fax="acf.hide_fax"
            :hide_department="acf.hide_department"
            :hide_cv="acf.hide_cv"
            :hide_bio="acf.hide_bio"
            :hide_office_hours="acf.hide_office_hours"
            :hide_office_location="acf.hide_office_location"
            :hide_photo="acf.hide_photo"
            :hide_email="acf.hide_email"
            :image="image"
          />
          <h2
            v-if="!acf.hide_courses && acf.current_courses.length"
            class="-tracking-3 mb-10 font-extended text-24 leading-110 font-normal text-indigo"
          >
            Current Courses
          </h2>
          <Table
            v-if="!acf.hide_courses && acf.current_courses.length"
            :manualItems="acf.current_courses"
            :external_items="null"
            :render_api="false"
            :headings="[
              {
                heading: 'Title',
              },
              {
                heading: 'Course Number(s)',
              },
              {
                heading: 'Section(s)',
              },
            ]"
          />
          <div class="grid w-full md:grid-cols-9">
            <div class="md:col-span-6">
              <div
                class="wysiwyg [&_h2]:-tracking-3 [&_h4]:-tracking-3 [&_div+div]:mt-20 md:[&_div+div]:mt-[100px] [&_div+figure]:mt-20 md:[&_div+figure]:mt-[100px] [&_div+h2]:mt-16 md:[&_div+h2]:mt-20 [&_figure+div]:mt-20 md:[&_figure+div]:mt-[100px] [&_figure+figure]:mt-20 md:[&_figure+figure]:mt-[100px] [&_figure+h2]:mt-16 md:[&_figure+h2]:mt-20 [&_h2]:font-extended [&_h2]:text-24 [&_h2]:leading-110 [&_h2]:font-normal [&_h2]:text-indigo [&_h2+ol]:mt-4 [&_h2+p]:mt-2 [&_h2+ul]:mt-4 [&_h3]:font-extended [&_h3]:text-18 [&_h3]:font-bold [&_h3]:text-indigo [&_h3+ol]:mt-4 [&_h3+p]:mt-2 [&_h3+table]:mt-5 [&_h3+ul]:mt-4 [&_h4]:font-extended [&_h4]:text-20 [&_h4]:leading-110 [&_h4]:font-normal [&_h4]:text-indigo [&_h4+ol]:mt-2 [&_h4+p]:mt-2 [&_h4+ul]:mt-2 [&_h5]:font-extended [&_h5]:text-14 [&_h5]:leading-130 [&_h5]:font-bold [&_h5]:tracking-8 [&_h5]:text-azure [&_h5]:uppercase [&_h5+ol]:mt-2 [&_h5+p]:mt-2 [&_h5+ul]:mt-2 [&_h6]:font-extended [&_h6]:text-12 [&_h6]:font-bold [&_h6]:tracking-8 [&_h6]:text-azure [&_h6]:uppercase [&_h6+p]:mt-2 [&_hr]:my-16 [&_hr]:border-t [&_hr]:border-solid [&_hr]:border-indigo-300 [&_li>a:only-child]:inline-block [&_li>a:only-child]:min-h-[44px] [&_ol]:mb-4 [&_ol]:pl-6 [&_ol+h2]:mt-20 [&_ol>li]:ml-3 [&_ol>li]:list-outside [&_ol>li]:list-decimal [&_ol>li]:font-body [&_ol>li]:text-16 [&_ol>li]:leading-130 [&_ol>li]:font-normal [&_ol>li]:text-indigo-800 [&_ol>li+li]:mt-2 [&_ol>li>a]:underline [&_ol>li>a:hover]:text-indigo [&_ol>li>a:hover]:no-underline [&_p]:font-body [&_p]:text-16 [&_p]:leading-[1.5] [&_p]:font-normal [&_p]:text-indigo-800 [&_p+div]:mt-10 md:[&_p+div]:mt-[50px] [&_p+h2]:mt-20 [&_p+h3]:mt-6 [&_p+p]:mt-6 [&_p+table]:mt-10 md:[&_p+table]:mt-[50px] [&_p+ul]:mt-6 [&_p>a]:underline [&_p>a:hover]:text-indigo [&_p>a:hover]:no-underline [&_p>a:only-child]:inline-block [&_p>a:only-child]:min-h-[44px] [&_ul]:mb-4 [&_ul]:pl-6 [&_ul+h2]:mt-20 [&_ul>li]:ml-3 [&_ul>li]:list-outside [&_ul>li]:list-disc [&_ul>li]:font-body [&_ul>li]:text-16 [&_ul>li]:leading-130 [&_ul>li]:font-normal [&_ul>li]:text-indigo-800 [&_ul>li+li]:mt-2 [&_ul>li>a]:underline [&_ul>li>a:hover]:text-indigo [&_ul>li>a:hover]:no-underline"
              >
                <span v-if="!acf.hide_bio" v-html="acf.bio" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </AppLayout>
</template>
<script setup>
import { computed, defineAsyncComponent } from "vue";
import AppLayout from "../Layouts/App.vue";
import { usePage } from "@inertiajs/vue3";
import Icon from "@/js/components/Icon/Icon.vue";
import DirectoryCard from "../../components/DirectoryCard/DirectoryCard.vue";

// Converted to async components
const Widget = defineAsyncComponent(
  () => import("../../components/Widget/Widget.vue"),
);
const Table = defineAsyncComponent(
  () => import("../../components/Table/Table.vue"),
);
const SubpageNav = defineAsyncComponent(
  () => import("../../components/SubpageNav/SubpageNav.vue"),
);

const props = defineProps({
  title: String,
  image: String,
  author: String,
  date: String,
  acf: Object,
  type: String,
  peopleMenu: {
    type: Object,
    default: () => ({
      heading: "People",
      items: [],
    }),
  },
});
const page = usePage();

const resolvedLayout = computed(
  () => props.layout || page.props?.layout || "default",
);
const resolvedSiteData = computed(
  () => props.siteData || page.props?.site_data || {},
);
const resolvedMenus = computed(() => props.menus || page.props?.menus || {});
</script>
