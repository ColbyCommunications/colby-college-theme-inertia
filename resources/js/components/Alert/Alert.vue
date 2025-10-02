<template>
    <div class="alert py-7" :class="bgClass">
        <div
            class="alert__inner grid md:items-center gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"
        >
            <div class="md:flex md:items-start">
                <div class="alert__content md:flex md:mt-0.5 md:mr-4 mb-4 md:mb-0">
                    <div
                        class="alert__heading font-extended font-bold text-14 md:text-12 tracking-8 uppercase mr-4 whitespace-nowrap mb-2 md:mb-0"
                        :class="headingClass"
                    >
                        {{ heading }}:
                    </div>

                    <p class="alert__p font-normal text-14 md:text-16 leading-130 text-white">
                        {{ paragraph }}
                    </p>
                </div>

                <!-- Button group -->
                <ButtonGroup
                    :type="buttonType"
                    :size="buttonSize"
                    :items="buttons"
                    class="shrink-0"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed } from 'vue';
    import ButtonGroup from '../ButtonGroup/ButtonGroup.vue';

    const props = defineProps({
        type: { type: String, default: 'info' }, // 'emergency' or anything else
        heading: { type: String, required: true },
        paragraph: { type: String, required: true },
        buttons: { type: Array, default: () => [] }, // [{ label, href, target?, ... }, ...]
        // optional overrides for the included button group
        buttonType: { type: String, default: 'dark' },
        buttonSize: { type: String, default: 'medium' },
    });

    const bgClass = computed(() =>
        props.type === 'emergency' ? 'bg-notification-red' : 'bg-indigo'
    );

    const headingClass = computed(() =>
        props.type === 'emergency' ? 'text-black underline' : 'text-canary'
    );
</script>
