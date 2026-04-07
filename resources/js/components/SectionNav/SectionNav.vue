<template>
  <div
    class="section-nav full-bleed !mt-0 overflow-x-auto bg-gray-100 py-6"
    :class="{ 'is-bot-visitor': isBot }"
  >
    <div
      ref="container"
      class="section-nav__inner flex space-x-10 px-5 lg:justify-center"
    >
      <h2
        class="section-nav__heading font-extended text-14 font-bold tracking-8 whitespace-nowrap text-azure uppercase md:text-12"
      >
        {{ title }}
      </h2>
      <ul class="flex items-center space-x-7 pr-9 md:pr-0">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="section-nav__item font-body text-14 leading-130 font-medium whitespace-nowrap text-indigo-800 md:text-10"
        >
          <a
            class="text-indigo-800 transition-all duration-200 ease-in-out hover:text-indigo hover:underline"
            :href="item.link.url"
          >
            <span class="material-symbols-sharp mr-1 align-bottom !text-14">{{
              item.icon_class
            }}</span>
            {{ item.link.title }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

defineProps({
  title: { type: String, default: "" },
  items: { type: Array, default: () => [] },
});

const container = ref(null);
const isBot = ref(false);

onMounted(() => {
  // 1. Check for bot traffic
  isBot.value = window?.colby?.DISABLE_ANIMATIONS === true;

  if (!container.value) return;

  // 2. Only execute GSAP if not a bot
  if (!isBot.value) {
    const targets = container.value.querySelectorAll("li");
    gsap.to(targets, {
      delay: 0.6,
      duration: 0.4,
      stagger: 0.1,
      opacity: 1,
      x: 0,
      ease: "power3.easeIn",
    });
  }
});
</script>

<style lang="scss" scoped>
.section-nav__item {
  opacity: 0;
  transform: translate(20px, 0);
}

// 3. Override for bots/crawlers
.is-bot-visitor {
  .section-nav__item {
    opacity: 1 !important;
    transform: translate(0, 0) !important;
  }
}
</style>
