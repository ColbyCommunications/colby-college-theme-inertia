<template>
    <!-- Modal -->
    <VueFinalModal
        v-model="showModal"
        :class="classes"
        :classes="{
            '!px-0': full === true,
            'modal__container flex justify-center items-center px-5': true,
        }"
        :content-class="{
            'w-full max-w-none h-full max-h-none': full === true,
            'max-w-xl max-h-96 rounded': !full,
            'modal__content relative w-full overflow-hidden bg-white overflow-y-auto': true,
        }"
    >
        <button
            class="absolute py-2.5"
            :class="{ 'right-5 top-7': full === true, 'top-3 right-3': full === false }"
            @click="closeModal"
            aria-label="Close modal"
        >
            <span
                class="relative block w-6 h-0.5 bg-indigo transition-all duration-200 ease-in-out bg-transparent"
            >
                <span
                    class="absolute left-0 w-full h-full bg-indigo origin-center top-[-8px] transition-all duration-200 ease-in-out !top-0 rotate-45"
                />
                <span
                    class="absolute left-0 w-full h-full bg-indigo origin-center top-[8px] transition-all duration-200 ease-in-out !top-0 rotate-[-45deg]"
                />
            </span>
        </button>

        <slot name="content" :showModal="showModal" />
    </VueFinalModal>

    <!-- Trigger -->
    <button
        class="text-left group active"
        :class="{ '[&>span]:text-indigo-1000 [&>span>svg]:fill-indigo-1000': showModal === true }"
        @click="toggleModal"
        type="button"
    >
        <slot name="button" :showModal="showModal" />
    </button>
</template>

<script setup>
    import { ref, inject } from 'vue';
    import { VueFinalModal } from 'vue-final-modal';

    const props = defineProps({
        full: { type: Boolean, default: false },
        classes: { type: String, default: '' },
    });

    // Optional: global event bus (mitt) if you previously used this.emitter
    // In your app root, do: provide('emitter', mitt())
    const emitter = inject('emitter', null);

    const showModal = ref(false);

    function toggleModal() {
        showModal.value = !showModal.value;
        if (emitter) {
            emitter.emit(showModal.value ? 'open-modal' : 'close-modal', {});
        }
    }

    function closeModal() {
        showModal.value = false;
        if (emitter) {
            emitter.emit('close-modal', {});
        }
    }
</script>
