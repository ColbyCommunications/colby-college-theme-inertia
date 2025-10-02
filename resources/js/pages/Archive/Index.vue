<template>
  <AppLayout>
    <Head :title="title" />
    <h1 class="text-2xl font-bold mb-4">{{ title }}</h1>
    <ul class="list-disc pl-5">
      <li v-for="i in items" :key="i.id">
        <Link :href="i.link">{{ i.title }}</Link>
        <span class="opacity-60"> — {{ i.date }}</span>
      </li>
    </ul>
  </AppLayout>
</template>
<script setup>
import AppLayout from '../Layouts/App.vue'
defineProps({ title: String, items: { type: Array, default: () => [] } })
</script>
