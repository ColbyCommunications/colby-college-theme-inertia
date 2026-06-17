<template>
    <div v-html="heading" class="
    [&_h2]:font-extended
    [&_h2]:text-24
    [&_h2]:font-normal
    [&_h2]:leading-110
    [&_h2]:-tracking-3
    [&_h2]:text-indigo

    [&_h3]:font-extended
    [&_h3]:font-bold
    [&_h3]:text-18
    [&_h3]:text-indigo

    [&_h4]:font-extended
    [&_h4]:font-normal
    [&_h4]:text-20
    [&_h4]:leading-110
    [&_h4]:-tracking-3
    [&_h4]:text-indigo

    [&_h5]:font-extended
    [&_h5]:font-bold
    [&_h5]:text-14
    [&_h5]:leading-130
    [&_h5]:tracking-8
    [&_h5]:text-azure
    [&_h5]:uppercase

    [&_h6]:font-extended
    [&_h6]:font-bold
    [&_h6]:text-12
    [&_h6]:tracking-8
    [&_h6]:text-azure
    [&_h6]:uppercase
    " />
</template>

<script setup>

const props = defineProps({
  heading: { type: String, default: "" },
});
</script>