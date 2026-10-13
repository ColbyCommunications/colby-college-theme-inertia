<template>
    <section class="pop-open-section">
      <div class="mx-auto w-full max-w-screen-2xl px-5">
        <div class="max-w-3xl">
          <div
            v-if="subheading"
            class="mb-2 font-body text-14 font-semibold uppercase leading-120 tracking-wide text-indigo"
          >
            {{ subheading }}
          </div>
  
          <h2
            v-if="heading"
            class="font-extended text-36 leading-110 text-indigo"
          >
            {{ heading }}
          </h2>
  
          <div
            v-if="paragraph"
            class="mt-4 font-body text-18 leading-150"
            v-html="paragraph"
          />
  
          <!-- Modal -->
          <Modal
            v-if="display_mode === 'modal'"
            v-model="isOpen"
            :full="false"
          >
            <template #button="{ open, isOpen: modalIsOpen }">
              <button
                type="button"
                class="mt-6 inline-flex min-h-[44px] items-center justify-center"
                aria-haspopup="dialog"
                :aria-expanded="modalIsOpen ? 'true' : 'false'"
                @click="open"
              >
                {{ button_text }}
              </button>
            </template>
  
            <template #content>
              <div class="p-5 md:p-10">
                <ComponentRouter :components="blocks" />
              </div>
            </template>
          </Modal>
  
          <!-- Drawer -->
          <template v-else>
            <button
              type="button"
              class="mt-6 inline-flex min-h-[44px] items-center justify-center"
              aria-haspopup="dialog"
              :aria-expanded="isOpen ? 'true' : 'false'"
              @click="isOpen = true"
            >
              {{ button_text }}
            </button>
  
            <Drawer
              v-model="isOpen"
              :side="drawer_side"
              :title="heading"
            >
              <ComponentRouter :components="blocks" />
            </Drawer>
          </template>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  import Modal from "@/js/components/Modal/Modal.vue";
  import Drawer from "@/js/components/Drawer/Drawer.vue";
  import ComponentRouter from "@/js/components/ComponentRouter/ComponentRouter.vue";
  
  defineProps({
    subheading: {
      type: String,
      default: "",
    },
  
    heading: {
      type: String,
      default: "",
    },
  
    paragraph: {
      type: String,
      default: "",
    },
  
    button_text: {
      type: String,
      default: "Learn More",
    },
  
    display_mode: {
      type: String,
      default: "modal",
    },
  
    drawer_side: {
      type: String,
      default: "right",
    },
  
    blocks: {
      type: Array,
      default: () => [],
    },
  });
  
  const isOpen = ref(false);
  </script>