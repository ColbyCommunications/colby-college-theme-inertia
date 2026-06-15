<template>
  <AppLayout>
    <div class="page__main">
      <div class="hero relative mb-8 py-24 md:py-48">
        <div
          class="hero__pattern absolute top-0 left-0 z-[-1] !mt-0 h-full w-full bg-notfound__pattern bg-cover bg-center"
        />
      </div>

      <div class="mx-auto max-w-screen-2xl px-5">
        <h2
          class="mb-5 font-extended text-24 leading-110 font-normal text-indigo"
        >
          Page Not Found
        </h2>

        <p class="font-body text-16 leading-150 text-coal">
          Sorry, we couldn't find the page you were looking for. Please try our

          <Modal
            :full="true"
            classes="top-0 h-screen w-screen"
            v-model="showModal"
          >
            <template #content>
              <div
                class="mx-auto my-0 mt-16 w-full max-w-screen-2xl px-5 md:mt-20 md:grid md:grid-cols-12"
              >
                <div class="md:col-span-12">
                  <Search />
                </div>
              </div>
            </template>

            <template #button="{ open, isOpen }">
              <button
                type="button"
                class="cursor-pointer text-inherit underline transition-all duration-200 ease-in-out hover:no-underline"
                :class="{ 'no-underline': isOpen }"
                aria-haspopup="dialog"
                :aria-expanded="isOpen ? 'true' : 'false'"
                @click="open"
              >
                Search
              </button>
            </template>
          </Modal>

          or visit the

          <a
            href="/"
            class="underline transition-all duration-200 ease-in-out hover:no-underline"
          >
            Colby.edu Homepage
          </a>.
        </p>
      </div>
    </div>
  </AppLayout>
</template>
<script setup>
import { ref } from "vue";
import AppLayout from '../Layouts/App.vue'
import Modal from "@/js/components/Modal/Modal.vue";
import Search from "@/js/components/Search/Search.vue";

const showModal = ref(false);
</script>

