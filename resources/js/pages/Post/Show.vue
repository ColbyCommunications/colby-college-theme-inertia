<template>
  <AppLayout>
    <div class="post">
      <FullBleedHero
        :heading="title"
        :subheading="use_post_date ? date : ''"
        :paragraph="excerpt"
        type="light"
        :image="image"
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
  import { computed, defineAsyncComponent } from "vue";
  import AppLayout from '../Layouts/App.vue';
  import { usePage } from "@inertiajs/vue3";
  import ComponentRouter from "../../components/ComponentRouter/ComponentRouter.vue";
  const FullBleedHero = defineAsyncComponent(() => import("../../components/FullBleedHero/FullBleedHero.vue"));

  const props = defineProps({
    title: String,
    acf: Object,
    date: String,
    image: Object,
    excerpt: String,
    use_post_date: Boolean,
    blocks: {
      type: Array,
      default: null,
    },
  });
  const page = usePage();

  const resolvedBlocks = computed(() => props.blocks || page.props?.blocks || []);
  console.log(resolvedBlocks);
</script>
