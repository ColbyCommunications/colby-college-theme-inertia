<template>
    <div
        class="dark-interstitial py-24 bg-indigo [&+.dark-interstitial]:mt-0 !max-w-full"
        :class="icon ? 'md:pt-12 relative' : ''"
    >
        <!-- Top icon + bg pattern -->
        <template v-if="icon">
            <div
                class="relative hidden md:flex justify-end max-w-screen-2xl w-full px-5 my-0 mx-auto mb-16"
            >
                <svg class="w-5 fill-canary" viewBox="0 0 20.83 30" aria-hidden="true">
                    <path
                        d="m1.76 30 2.47-4.16 2.32-1.09.43-1.27 1.57 1.18 1.96-.88.49-3.54 1.08.98.39 1.77 1.76-2.41 1.58.74 1.18-2.06.89.39 1.17-.88 1.68.2.1-1.38-2.07-1.28-.53-1.88.24-2.25-2.17.1.4-9.92L13.85.2l-1.76 1.19h-1.87L10.13 0H8.64L5.41 7.08 4.32 9.5l.39 1.3-1.47.59-.29 1.87-.69 1.47-2.16-.2L0 28.39 1.76 30Z"
                    />
                </svg>
            </div>
            <div
                class="bg-darkinterstitial__pattern bg-cover opacity-30 absolute z-0 top-0 left-0 w-full h-full"
            ></div>
        </template>

        <!-- Main content -->
        <div
            class="dark-interstitial__inner relative md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"
        >
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

        <!-- Facts -->
        <div
            v-if="Array.isArray(facts) && facts.length"
            class="dark-interstitial__inner relative md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto mt-12"
        >
            <div
                class="dark-interstitial__figures md:col-start-3 md:col-span-8 grid grid-cols-8 gap-x-10 max-w-screen-2xl w-full"
            >
                <div
                    v-for="(fact, i) in facts"
                    :key="i"
                    class="dark-interstitial__fact col-span-4 space-y-3"
                >
                    <div class="dark-interstitial__fact--animated" ref="container">
                        <h3 class="font-extended font-normal text-36 text-canary leading-100">
                            {{ fact.figure }}
                        </h3>
                        <p class="font-body font-normal text-14 text-indigo-200 leading-130">
                            {{ fact.paragraph }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Images -->
        <div
            v-if="Array.isArray(images) && images.length"
            class="dark-interstitial__images-wrap overflow-scroll md:overflow-visible mt-28"
        >
            <div
                class="dark-interstitial__inner relative md:grid grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-9 md:px-5 my-0 mx-auto mr-9 md:mr-auto whitespace-nowrap text-[0]"
            >
                <span
                    class="absolute top-0 left-[20px] hidden md:block w-[calc(100%_-_40px)] h-px bg-white z-[1]"
                ></span>

                <div
                    v-for="(img, idx) in images"
                    :key="idx"
                    class="inline-block col-span-4 w-full md:w-auto mr-6 md:mr-0"
                >
                    <div class="dark-interstitial__image relative pb-[119.44444444444444%]">
                        <!-- Real site assets -->
                        <picture>
                            <source media="(min-width:768px)" :srcset="img?.image?.sizes?.Square" />
                            <img
                                class="absolute w-full h-full object-cover"
                                :src="img?.image?.sizes?.Square"
                                :alt="img.alt || ''"
                                loading="lazy"
                                decoding="async"
                            />
                        </picture>
                    </div>

                    <p
                        v-if="img.caption"
                        class="font-body font-normal text-12 text-indigo-200 leading-140 mt-2"
                    >
                        {{ img.caption }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    // ES6 + Composition API
    import { ref, onMounted, onBeforeUnmount, defineProps, nextTick } from 'vue';
    import Context from '../Context/Context.vue'; // adjust path as needed
    import { gsap } from 'gsap';
    import 'waypoints/lib/noframework.waypoints';

    const props = defineProps({
        icon: { type: Boolean, default: false },

        // Context content
        subheading: { type: String, default: '' },
        heading: { type: String, default: '' },
        paragraph: { type: String, default: '' },
        buttons: { type: Array, default: () => [] },

        // Facts: [{ figure: string, paragraph: string }]
        facts: { type: Array, default: () => [] },

        // Images:
        // - In component library mode: { srcset, src, alt, caption? }
        // - In site mode: { image: { sizes: { Square } }, alt, caption? }
        images: { type: Array, default: () => [] },
    });

    const container = ref(null);
    let waypoint = null;

    const animateFact = () => {
        if (!container.value) return;

        const heading = container.value.querySelector('h3');
        const paragraph = container.value.querySelector('p');

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
        await nextTick(); // wait until DOM refs are populated

        if (container.value) {
            waypoint = new Waypoint({
                element: container.value,
                handler: () => {
                    animateFact();
                },
                offset: 'bottom-in-view',
            });
        }
    });

    onBeforeUnmount(() => {
        if (waypoint && waypoint.destroy) {
            waypoint.destroy();
        }
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
</style>
