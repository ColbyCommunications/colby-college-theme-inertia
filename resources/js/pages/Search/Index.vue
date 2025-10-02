<template>
  <AppLayout>
    <Head title="Search" />
    <form class="mb-6" action="/" method="get">
      <input type="search" name="s" :value="query" class="border p-2 w-full" placeholder="Search" />
    </form>
    <ul class="space-y-2">
      <li v-for="r in results" :key="r.id">
        <Link :href="r.link">{{ r.title }}</Link>
        <span class="opacity-60"> ({{ r.type }})</span>
      </li>
    </ul>
  </AppLayout>
</template>
<script setup>
import AppLayout from '../Layouts/App.vue'
defineProps({ query: String, results: { type: Array, default: () => [] } })
</script>
