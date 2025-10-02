<template>
    <div class="facts-figures">
        <!-- top rule -->
        <div
            class="facts-figures__inner relative md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"
        >
            <AnimatedBorder class="block col-span-12 w-0 h-px bg-azure" />
        </div>

        <!-- main row -->
        <div
            class="facts-figures__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"
        >
            <div
                class="facts-figures__main md:col-start-6 lg:col-start-7 md:col-span-7 lg:col-span-6 mt-4"
            >
                <Context
                    size="large"
                    type="dark"
                    :arrow="true"
                    :reverse="true"
                    :heading="heading"
                    :paragraph="paragraph"
                    :buttons="{ items: buttons }"
                />
            </div>

            <!-- image -->
            <div class="facts-figures__image md:col-span-5 md:order-[-1] mt-12 md:mt-0">
                <picture v-if="image">
                    <source
                        media="(min-width:768px)"
                        :srcset="image?.sizes?.Square || image?.srcset"
                    />
                    <img
                        class="w-full h-full object-cover"
                        :src="image?.sizes?.Square || image?.src"
                        :alt="image?.alt || ''"
                    />
                </picture>
            </div>
        </div>

        <!-- facts grid -->
        <div
            class="facts-figures__inner relative md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto mt-12 md:mt-0"
        >
            <div
                class="md:relative lg:bottom-[70px] md:bottom-[16px] md:col-start-6 lg:col-start-7 md:col-span-7 lg:col-span-6 pb-6 md:pb-8"
            >
                <div class="grid grid-cols-6 gap-x-3 md:gap-x-10 max-w-screen-2xl w-full">
                    <div
                        v-for="(fact, i) in facts"
                        :key="i"
                        class="facts-figures__figure col-span-2"
                    >
                        <h3 class="font-extended font-normal text-24 text-indigo leading-115">
                            {{ fact.figure }}
                        </h3>
                        <p class="font-body font-normal text-12 text-indigo-800 leading-140">
                            {{ fact.paragraph }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- If you ever need the bottom rule again:
        <AnimatedBorder class="block col-span-12 w-0 h-px bg-azure" />
        --></div>
    </div>
</template>

<script setup>
    import Context from '../Context/Context.vue';
    import AnimatedBorder from '../AnimatedBorder/AnimatedBorder.vue';

    const props = defineProps({
        heading: { type: String, default: '' },
        paragraph: { type: String, default: '' },
        buttons: { type: Array, default: () => [] },
        image: {
            type: Object,
            default: null, // { srcset, src, sizes: { Square }, alt }
        },
        facts: {
            type: Array,
            default: () => [], // [{ figure: '10:1', paragraph: 'Student-to-faculty ratio' }, ...]
        },
    });
</script>
