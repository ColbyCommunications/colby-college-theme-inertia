<!-- resources/js/components/Picture.vue -->
<template>
    <picture>
        <source v-if="in_component_library" media="(min-width:768px)" :srcset="srcset" />
        <source v-else media="(min-width:768px)" :srcset="sizeDesktop" />

        <img
            :class="klass"
            :src="in_component_library ? src : sizeMobile"
            :alt="alt"
            loading="lazy"
            decoding="async"
        />
    </picture>
</template>

<script setup>
    const props = defineProps({
        klass: { type: String, default: '' }, // 'class' is reserved in Vue templates, so use 'klass'
        srcset: String,
        src: String,
        sizeDesktop: String,
        sizeMobile: String,
        alt: { type: String, default: '' },
        in_component_library: { type: Boolean, default: false },
    });
</script>
