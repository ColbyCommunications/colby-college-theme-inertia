<template>
    <div
        class="dark-interstitial py-24 bg-indigo [&+.dark-interstitial]:mt-0 !max-w-full"
        :class="[
            icon ? 'md:pt-12 relative' : '',
            { 'is-bot-visitor': isBot }
        ]"
    >
        <template v-if="icon">
            <div class="relative hidden md:flex justify-end max-w-screen-2xl w-full px-5 my-0 mx-auto mb-16">
                <svg class="w-5 fill-canary" viewBox="0 0 20.83 30" aria-hidden="true">
                    <path d="m1.76 30 2.47-4.16 2.32-1.09.43-1.27 1.57 1.18 1.96-.88.49-3.54 1.08.98.39 1.77 1.76-2.41 1.58.74 1.18-2.06.89.39 1.17-.88 1.68.2.1-1.38-2.07-1.28-.53-1.88.24-2.25-2.17.1.4-9.92L13.85.2l-1.76 1.19h-1.87L10.13 0H8.64L5.41 7.08 4.32 9.5l.39 1.3-1.47.59-.29 1.87-.69 1.47-2.16-.2L0 28.39 1.76 30Z" />
                </svg>
            </div>
            <div class="bg-darkinterstitial__pattern bg-cover opacity-30 absolute z-0 top-0 left-0 w-full h-full"></div>
        </template>

        <div class="dark-interstitial__inner relative md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto">
            <div class="dark-interstitial__main md:col-start-3 md:col-span-8">
                <Context
                    size="medium"
                    type="light"
                    :arrow="true"
                    :reverse="true"
                    align="center"
                    :subheading="subheading"
                    :heading="heading"
                    :paragraph="paragraph"
                    :buttons="{ items: buttons }"
                />
            </div>
        </div>

        <div
            v-if="Array.isArray(facts) && facts.length"
            class="dark-interstitial__inner relative md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto mt-12"
        >
            <div class="dark-interstitial__figures md:col-start-3 md:col-span-8 grid grid-cols-8 gap-x-10 max-w-screen-2xl w-full">
                <div
                    v-for="(fact, i) in facts"
                    :key="i"
                    class="dark-interstitial__fact col-span-4 space-y-3"
                >
                    <div class="dark-interstitial__fact--animated" ref="factContainers">
                        <h3 class="font-extended font-normal text-36 text-canary leading-100">
                            {{ fact.figure }}
                        </h3>
                        <p class="font-body font-normal text-14 text-[#eef4ff] leading-130">
                            {{ fact.paragraph }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="Array.isArray(images) && images.length" class="dark-interstitial__images-wrap overflow-scroll md:overflow-visible mt-28">
            <div class="dark-interstitial__inner relative md:grid grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-9 md:px-5 my-0 mx-auto mr-9 md:mr-auto whitespace-nowrap text-[0]">
                <span class="absolute top-0 left-[20px] hidden md:block w-[calc(100%_-_40px)] h-px bg-white z-[1]"></span>
                <div v-for="(img, idx) in images" :key="idx" class="inline-block col-span-4 w-full md:w-auto mr-6 md:mr-0">
                    <div class="dark-interstitial__image relative pb-[119.44444444444444%]">
                        <Picture
                            class="absolute w-full h-full object-cover"
                            :size-desktop="img?.image?.src"
                            :size-mobile="img?.image?.src"
                            :alt="img.alt || ''"
                            loading="lazy"
                        />
                    </div>
                    <p v-if="img.caption" class="font-body font-normal text-12 text-[#eef4ff] leading-140 mt-2">
                        {{ img.caption }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import Context from '@/js/components/Context/Context.vue';
import Picture from '@/js/components/Picture/Picture.vue';
import { gsap } from 'gsap';
import 'waypoints/lib/noframework.waypoints';

const props = defineProps({
    icon: { type: Boolean, default: false },
    subheading: { type: String, default: '' },
    heading: { type: String, default: '' },
    paragraph: { type: String, default: '' },
    buttons: { type: Array, default: () => [] },
    facts: { type: Array, default: () => [] },
    images: { type: Array, default: () => [] },
});

const factContainers = ref([]);
const isBot = ref(false);
let waypoints = [];

const animateFact = (element) => {
    // Failsafe: if bot detection is active, don't let GSAP touch the styles
    if (!element || isBot.value) return;

    const heading = element.querySelector('h3');
    const paragraph = element.querySelector('p');

    gsap.to(heading, {
        duration: 0.4,
        opacity: 1,
        scale: 1,
        ease: 'power3.inOut',
        onComplete: () => {
            gsap.to(paragraph, {
                opacity: 1,
                duration: 0.3,
                ease: 'power1.out',
            });
        },
    });
};

onMounted(async () => {
    // 1. Sync reactivity with the global window variable
    isBot.value = window?.colby?.DISABLE_ANIMATIONS === true;

    await nextTick();

    // 2. Only setup Waypoints if this is a standard user session
    if (factContainers.value && factContainers.value.length && !isBot.value) {
        factContainers.value.forEach((el) => {
            const wp = new window.Waypoint({
                element: el,
                handler: function() {
                    animateFact(el);
                    this.destroy(); 
                },
                offset: 'bottom-in-view',
            });
            waypoints.push(wp);
        });
    }
});

onBeforeUnmount(() => {
    waypoints.forEach((wp) => wp.destroy());
    waypoints = [];
});
</script>

<style lang="scss">
.dark-interstitial__fact--animated {
    h3 {
        display: inline-block;
        opacity: 0;
        transform: scale(0.6);
    }

    p {
        opacity: 0;
    }
}

// 3. Forced visibility state for crawlers / bot traffic
.is-bot-visitor {
    .dark-interstitial__fact--animated {
        h3, p {
            opacity: 1 !important;
            transform: scale(1) !important;
        }
    }
}
</style>