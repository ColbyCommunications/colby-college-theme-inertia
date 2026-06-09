<template>
  <div class="list-section">
    <div
      class="list-section__inner mx-auto my-0 w-full max-w-screen-2xl gap-x-10 px-9 md:grid md:grid-cols-12 md:px-5"
    >
      <div class="list-section__main md:col-span-12">
        <div
          class="list-section__lists flex-wrap justify-center space-y-10 md:flex md:space-y-0 md:space-x-5 lg:space-x-10"
        >
          <div
            v-for="(list, index) in lists"
            :key="index"
            class="list-section__list space-y-6 md:w-[calc(20%-16px)] lg:w-[calc(20%-32px)]"
          >
            <h2
              class="list-section__heading -tracking-3 font-extended text-20 leading-110 font-normal text-indigo"
            >
              {{ list.heading }}
            </h2>
            <ul class="list-spacing ml-[14px] list-disc">
              <li
                v-for="(item, idx) in list.items"
                :key="idx"
                class="font-body text-14 leading-130 font-normal text-indigo-800"
              >
                <a
                  class="text-indigo-800 transition-all duration-200 ease-in-out hover:text-indigo hover:underline"
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
const props = defineProps({
  lists: { type: Array, default: () => [] },
});
</script>
