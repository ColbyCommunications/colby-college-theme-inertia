<template>
  <div 
    class="section-nav full-bleed py-6 bg-gray-100 overflow-x-auto !mt-0"
    :class="{ 'is-bot-visitor': isBot }"
  >
    <div ref="container" class="section-nav__inner flex px-5 space-x-10 lg:justify-center">
      <h2
        class="section-nav__heading font-extended font-bold text-14 md:text-12 tracking-8 text-azure uppercase whitespace-nowrap"
      >
        {{ title }}
      </h2>
      <ul class="flex items-center space-x-7 pr-9 md:pr-0">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="section-nav__item font-body font-medium text-14 md:text-10 text-indigo-800 leading-130 whitespace-nowrap"
        >
          <a
            class="text-indigo-800 hover:text-indigo hover:underline transition-all duration-200 ease-in-out"
            :href="item.link.url"
          >
            <span class="material-icons-sharp !text-14 align-bottom mr-1">{{item.icon_class}}</span>
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