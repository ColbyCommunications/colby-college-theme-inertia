<template>
  <div class="list-section">
    <div
      class="list-section__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-9 md:px-5 my-0 mx-auto"
    >
      <div class="list-section__main md:col-span-12">
        <div
          class="list-section__lists md:flex flex-wrap justify-center md:space-x-5 lg:space-x-10 space-y-10 md:space-y-0"
        >
          <div
            v-for="(list, index) in lists"
            :key="index"
            class="list-section__list md:w-[calc(20%-16px)] lg:w-[calc(20%-32px)] space-y-6"
          >
            <h2
              class="list-section__heading font-extended text-20 font-normal leading-110 -tracking-3 text-indigo"
            >
              {{ list.heading }}
            </h2>
            <ul class="space-y-2.5 ml-[14px]">
              <li
                v-for="(item, idx) in list.items"
                :key="idx"
                class="font-body text-14 font-normal leading-130 text-indigo-800"
              >
                <a
                  class="text-indigo-800 hover:text-indigo hover:underline transition-all duration-200 ease-in-out"
                  :href="item.link?.url || item.url"
                >
                  {{ item.link?.title || item.title }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  lists: { type: Array, default: () => [] },
});
</script>
