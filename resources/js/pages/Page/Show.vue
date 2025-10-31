<template>
  <AppLayout>
    <ComponentRouter :components="props.blocks" />
  </AppLayout>
</template>
<script setup>
import { usePage } from "@inertiajs/vue3";
import AppLayout from "../Layouts/App.vue";
import ComponentRouter from "../../components/ComponentRouter/ComponentRouter.vue";

defineProps({ title: String, content: String, acf: Object });
const { props } = usePage();
</script>
