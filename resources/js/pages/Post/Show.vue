<template>
  <AppLayout>
    <Head :title="title" />
    <article class="prose max-w-none">
      <h1>{{ title }}</h1>
      <img v-if="image" :src="image" class="my-4" :alt="title" />
      <div v-html="content" />
      <p class="text-sm opacity-70 mt-6">By {{ author }} · {{ date }}</p>
    </article>
  </AppLayout>
</template>
<script setup>
import AppLayout from '../Layouts/App.vue'
defineProps({ title: String, content: String, image: String, author: String, date: String, acf: Object })
</script>
