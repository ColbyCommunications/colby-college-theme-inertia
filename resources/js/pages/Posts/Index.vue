<template>
  <AppLayout>
    <Head title="Posts" />
    <h1 class="text-2xl font-bold mb-4">Latest Posts</h1>
    <ul class="space-y-6">
      <li v-for="p in posts" :key="p.id" class="border-b pb-4">
        <h2 class="text-xl font-semibold">
          <Link :href="p.link">{{ p.title }}</Link>
        </h2>
        <p class="text-sm opacity-70">{{ p.date }}</p>
        <p class="mt-2">{{ p.excerpt }}</p>
      </li>
    </ul>
  </AppLayout>
</template>
<script setup>
import AppLayout from '../Layouts/App.vue'
const props = defineProps({ posts: { type: Array, default: () => [] }, pagination: { type: Object, default: () => ({ current: 1, total: 1 }) } })
const { posts, pagination } = props
</script>
