<template>
  <div
    class="subpage-nav rounded-md border-[0.75px] border-solid border-indigo bg-white md:space-y-5 md:border-0 md:bg-transparent"
    :class="{ 'is-bot-visitor': isBot }"
    @click.self="toggleMenu"
  >
    <div ref="container" class="subpage-nav--animated">
      <h2>
        <div
          class="relative w-full px-6 py-4 text-left font-extended text-14 leading-130 font-bold tracking-8 text-azure uppercase md:px-0 md:py-0 md:text-12"
          @click="toggleMenu"
        >
          <a
            :href="parentPermalink"
            class="pointer-events-none inline-block min-h-[44px] min-w-[44px] leading-[44px] md:pointer-events-auto"
          >
            {{ heading }}
            <div class="absolute top-6 right-8 w-1.5 md:hidden">
              <span
                class="relative block h-0.5 w-6 bg-azure transition-all duration-200 ease-in-out"
                :class="{ 'bg-transparent': menuOpen }"
              >
                <span
                  class="absolute top-[-6px] left-0 h-full w-full origin-center bg-azure transition-all duration-200 ease-in-out"
                  :class="{ '!top-0 rotate-45': menuOpen }"
                ></span>
                <span
                  class="absolute top-[6px] left-0 h-full w-full origin-center bg-azure transition-all duration-200 ease-in-out"
                  :class="{ '!top-0 rotate-[-45deg]': menuOpen }"
                ></span>
              </span>
            </div>
          </a>
        </div>
      </h2>
      <ul
        v-if="items.length > 0"
        class="subpage-nav__items mt-0 border-t border-solid border-[#eef4ff] py-4 md:block md:border-t-0 md:py-0"
        :class="{ hidden: !menuOpen && !isBot }"
      >
        <li
          v-for="(item, index) in items"
          :key="index"
          class="subpage-nav__item font-body text-14 leading-140 font-normal text-coal md:text-10 md:font-medium"
        >
          <a
            class="block flex min-h-[44px] min-w-[44px] items-center border-solid px-6 transition-all duration-200 ease-in-out hover:bg-cloud md:border-l-2 md:px-0 md:pl-2.5"
            :class="{
              'border-indigo text-gray-1000': item.active,
              'border-transparent text-coal hover:text-indigo hover:underline':
                !item.active,
            }"
            :href="item.url"
            v-html="item.title"
          >
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
  heading: { type: String, default: "" },
  items: { type: Array, default: () => [] },
  parentPermalink: { type: String, default: "" },
});

const menuOpen = ref(false);
const container = ref(null);
const isBot = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

onMounted(() => {
  // Check global bot detection variable
  isBot.value = window?.colby?.DISABLE_ANIMATIONS === true;

  if (!container.value) return;

  // Only run animations if not a bot
  if (!isBot.value) {
    const targets = container.value.querySelectorAll("li");
    gsap.to(targets, {
      delay: 0.6,
      duration: 0.4,
      stagger: 0.1,
      opacity: 1,
      y: 0,
      ease: "power3.easeIn",
    });
  }
});
</script>

<style lang="scss" scoped>
.subpage-nav__item {
  opacity: 0;
  transform: translate(0, 20px);
}

// Global override for bots
.is-bot-visitor {
  .subpage-nav__item {
    opacity: 1 !important;
    transform: translate(0, 0) !important;
  }
}
</style>
