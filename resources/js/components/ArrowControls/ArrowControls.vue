<template>
    <div class="arrow-controls space-x-4">
        <ArrowButton :size="size" :type="type" @prev="$emit('prev')" />
        <ArrowButton :size="size" :type="type" :reverse="true" @next="$emit('next')" />
    </div>
</template>

<script setup>
    import ArrowButton from '../ArrowButton/ArrowButton.vue';

    const props = defineProps({
        size: { type: String, default: 'large' },
        type: { type: String, default: 'light' },
    });

    defineEmits(['prev', 'next']);
</script>
