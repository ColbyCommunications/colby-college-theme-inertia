<template>
  <AppLayout>
    <div class="post">
      <FullBleedHero
        :heading="hero?.heading || title"
        :subheading="hero?.subheading || (use_post_date ? date : '')"
        :paragraph="hero?.paragraph ?? excerpt"
        :type="hero?.type || 'light'"
        :image="hero?.image || image"
        :hero="true"
      />

      <SectionNav
        v-if="sectionMenu?.items?.length"
        :heading="sectionMenu.heading"
        :items="sectionMenu.items"
      />

      <div
        class="post__inner mb-20 
        [&>.wysiwyg>div]:mt-16 
        [&>.wysiwyg>div]:grid 
        md:[&>.wysiwyg>div]:grid-cols-12 
        [&>.wysiwyg>div]:gap-x-10 
        [&>.wysiwyg>div]:max-w-screen-2xl 
        [&>.wysiwyg>div]:w-full 
        [&>.wysiwyg>div]:px-5 
        [&>.wysiwyg>div]:my-0 
        [&>.wysiwyg>div]:mx-auto
        [&>.wysiwyg>div>section:not(:first-child)]:mt-10
        [&>.wysiwyg>div>section[data-block-name='core/heading']+section]:mt-[10px]

        md:[&>.wysiwyg>div>section[data-block-name='acf/paragraph']]:col-span-8 
        md:[&>.wysiwyg>div>section[data-block-name='acf/paragraph']]:col-start-3
        md:[&>.wysiwyg>div>section[data-block-name='acf/paragraph']_p:not(:last-child)]:mb-4
        md:[&>.wysiwyg>div>section[data-block-name='core/heading']]:col-span-8 
        md:[&>.wysiwyg>div>section[data-block-name='core/heading']]:col-start-3
        md:[&>.wysiwyg>div>section[data-block-name='acf/embed']]:col-span-8 
        md:[&>.wysiwyg>div>section[data-block-name='acf/embed']]:col-start-3
        md:[&>.wysiwyg>div>section[data-block-name='acf/table']]:col-span-8 
        md:[&>.wysiwyg>div>section[data-block-name='acf/table']]:col-start-3
        md:[&>.wysiwyg>div>section[data-block-name='acf/image-grid']]:col-span-10 
        md:[&>.wysiwyg>div>section[data-block-name='acf/image-grid']]:col-start-2
        md:[&>.wysiwyg>div>section[data-block-name='acf/block-quote']]:col-span-10 
        md:[&>.wysiwyg>div>section[data-block-name='acf/block-quote']]:col-start-2 
        md:[&>.wysiwyg>div>section[data-block-name='acf/image-text']]:col-span-8 
        md:[&>.wysiwyg>div>section[data-block-name='acf/image-text']]:col-start-3 
        md:[&>.wysiwyg>div>section[data-block-name='acf/image']]:col-span-8 
        md:[&>.wysiwyg>div>section[data-block-name='acf/image']]:col-start-3
        md:[&>.wysiwyg>div>section[data-block-name='core/group']]:col-span-8 
        md:[&>.wysiwyg>div>section[data-block-name='core/group']]:col-start-3
        
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
        
        ">
        <div class="wysiwyg">
          <ComponentRouter :components="resolvedBlocks" />
        </div>
      </div>
    </div>
  </AppLayout>
</template>
<script setup>
import {
  computed,
  defineAsyncComponent,
} from "vue";

import { usePage } from "@inertiajs/vue3";

import AppLayout from "../Layouts/App.vue";
import ComponentRouter from "../../components/ComponentRouter/ComponentRouter.vue";
import SectionNav from "../../components/SectionNav/SectionNav.vue";

const FullBleedHero = defineAsyncComponent(() =>
  import(
    "../../components/FullBleedHero/FullBleedHero.vue"
  )
);


const props = defineProps({
  title: {
    type: String,
    default: "",
  },

  acf: {
    type: Object,
    default: () => ({}),
  },

  date: {
    type: String,
    default: "",
  },

  image: {
    type: Object,
    default: null,
  },

  excerpt: {
    type: String,
    default: "",
  },

  use_post_date: {
    type: Boolean,
    default: false,
  },

  blocks: {
    type: Array,
    default: () => [],
  },

  /**
   * Normalized hero data from single.php.
   *
   * Events use event_date as hero.subheading.
   */
  hero: {
    type: Object,
    default: null,
  },

  /**
   * Events Menu or Colby Impact Menu,
   * resolved by WordPress in single.php.
   */
  sectionMenu: {
    type: Object,
    default: () => ({
      heading: "",
      items: [],
    }),
  },

  isEvent: {
    type: Boolean,
    default: false,
  },

  eventDate: {
    type: String,
    default: "",
  },

  showSubmitStory: {
    type: Boolean,
    default: true,
  },
});

const page = usePage();

console.log(props);

const resolvedBlocks = computed(() => {
  return props.blocks || page.props?.blocks || [];
});
</script>