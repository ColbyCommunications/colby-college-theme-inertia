<template>
    <div class="relative">
        <!-- API-rendered grid -->
        <div
            v-if="props.render_api"
            class="article-grid grid gap-10 max-w-screen-2xl w-full my-0 mx-auto grid-cols-12"
        >
            <div
                v-for="(item, index) in data"
                :key="index"
                class="article-grid__item glide__slide"
                :class="{
                    'col-span-12 md:col-span-6': props.columns === 2,
                    'col-span-12 md:col-span-6 lg:col-span-4': props.columns === 3,
                    'col-span-12 md:col-span-6 lg:col-span-3': props.columns === 4,
                }"
            >
                <article
                    class="article space-y-4"
                    :class="{ 'pt-1 border-t-2 border-solid border-indigo-600': props.border }"
                >
                    <div class="context w-full py-4">
                        <TextGroup
                            :size="size"
                            :align="align"
                            :type="type"
                            :subheading="subheading"
                            :heading="heading"
                            :paragraph="paragraph"
                            :static="isStatic"
                            :hero="hero"
                            :date="date"
                        />

                        <div class="button-group flex flex-wrap gap-4 mt-4">
                            <a
                                class="btn group inline-flex flex-row items-center space-x-1.5 rounded border border-solid border-indigo-300 font-body font-normal text-10 leading-130 text-indigo bg-indigo-100 hover:bg-indigo-200 focus:bg-indigo-200 focus:outline focus:outline-2 focus:outline-canary outline-offset-[-1px] py-1 px-3 transition-all duration-200 ease-in-out !no-underline"
                                :href="item.url"
                            >
                                <span class="btn__text">
                                    {{ props.cta }}
                                    <div
                                        class="btn__border block bg-indigo h-px w-0 group-hover:w-full transition-all duration-200 ease-in-out"
                                    />
                                </span>
                            </a>
                        </div>
                    </div>
                </article>
            </div>
        </div>

        <!-- Accordion style (non-API) -->
        <div
            v-if="!props.render_api && props.style === 'accordion'"
            ref="gridContainer"
            class="article-grid relative grid gap-10 max-w-screen-2xl w-full my-0 mx-auto"
            :class="gridColsClass"
        >
            <div
                v-for="(item, i) in props.items"
                :key="i"
                class="relative"
                :class="[
                    'article-grid__item transition-transform duration-500',
                    expandedIndex === i ? 'z-10 bg-white' : 'z-0',
                ]"
                :style="expandedIndex === i ? pickedUpStyle(i) : {}"
                :ref="(el) => (itemRefs[i] = el)"
            >
                <article
                    class="article space-y-4"
                    :class="{ 'pt-1 border-t-2 border-solid border-indigo-600': props.border }"
                >
                    <!-- Image -->
                    <a
                        v-if="item.image?.sizes?.desktop && item.image?.sizes?.mobile"
                        class="article__image relative block overflow-hidden"
                        :href="item.url"
                        :aria-label="item.heading"
                    >
                        <picture>
                            <source media="(min-width: 768px)" :srcset="item.image.sizes.desktop" />
                            <img
                                decoding="async"
                                class="w-full object-cover hover:scale-105 transition-all duration-500 ease-in-out"
                                :src="item.image.sizes.mobile"
                                :alt="item.title"
                            />
                        </picture>
                    </a>

                    <div class="context w-full space-y-5" :ref="(el) => (contextRefs[i] = el)">
                        <TextGroup class="text-group">
                            <div class="mr-6 flex flex-col justify-start shrink-0">
                                <div
                                    v-if="item.heading && item.subheading"
                                    class="text-12 text-azure text-group__subheading font-extended font-bold leading-130 tracking-8 uppercase"
                                >
                                    {{ item.subheading }}
                                </div>
                                <h2
                                    class="text-group__heading font-extended font-normal text-20 leading-110 -tracking-3 text-left text-indigo"
                                    :class="{ 'lg:text-16': props.columns === 4 }"
                                    v-html="item.heading"
                                />
                            </div>
                        </TextGroup>

                        <div class="button-group flex flex-wrap gap-4 mt-4">
                            <a
                                class="cursor-pointer btn group inline-flex flex-row items-center space-x-1.5 rounded border border-solid border-indigo-300 font-body font-normal text-10 leading-130 text-indigo bg-indigo-100 hover:bg-indigo-200 focus:bg-indigo-200 focus:outline focus:outline-2 focus:outline-canary outline-offset-[-1px] py-1 px-3 transition-all duration-200 ease-in-out !no-underline"
                                @click="toggleAccordion(i)"
                            >
                                <button class="btn__text">
                                    {{ expandedIndex === i ? 'Close' : 'Read More' }}
                                </button>
                            </a>
                        </div>
                    </div>
                </article>

                <!-- MOBILE: inline accordion -->
                <Transition
                    v-if="isMobileAccordion"
                    enter-active-class="transition-all duration-300 ease-out"
                    enter-from-class="opacity-0 -translate-y-2"
                    enter-to-class="opacity-100 translate-y-0"
                    leave-active-class="transition-all duration-200 ease-in"
                    leave-from-class="opacity-100 translate-y-0"
                    leave-to-class="opacity-0 -translate-y-2"
                >
                    <div
                        v-if="expandedIndex === i"
                        class="bg-indigo-200 text-indigo-800 text-14 border-[1px] border-indigo-500 flex flex-col mt-4 w-full"
                        :style="{ maxHeight: '80vh' }"
                    >
                        <div class="pt-4 pl-4 pr-4 flex w-full justify-end">
                            <button @click="toggleAccordion(i)">
                                <span class="material-icons-sharp text-indigo-800">close</span>
                            </button>
                        </div>

                        <div
                            class="text-group text-20 sm:text-18 md:text-20 lg:text-20 mb-4 p-4 flex-grow overflow-auto"
                            v-html="item.paragraph"
                        />
                        <div
                            v-if="Array.isArray(props.items[i].buttons)"
                            class="px-4 pb-4 flex mt-auto justify-end"
                        >
                            <a
                                v-for="(buttonObj, buttonIndex) in props.items[i].buttons"
                                :key="buttonIndex"
                                :href="buttonObj.button.url"
                                :target="buttonObj.button.target || '_self'"
                                class="cursor-pointer btn group inline-flex flex-row items-center space-x-1.5 rounded border border-solid border-indigo-300 font-body font-normal text-10 leading-130 text-indigo bg-indigo-100 hover:bg-indigo-200 focus:bg-indigo-200 focus:outline focus:outline-2 focus:outline-canary outline-offset-[-1px] py-1 px-3 transition-all duration-200 ease-in-out !no-underline ml-2"
                            >
                                {{ buttonObj.button.title }}
                            </a>
                        </div>
                    </div>
                </Transition>

                <!-- DESKTOP: side flyout -->
                <Transition
                    v-else
                    enter-active-class="transition-opacity duration-300"
                    enter-from-class="opacity-0"
                    enter-to-class="opacity-100"
                    leave-active-class="transition-opacity duration-300"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0"
                >
                    <div
                        v-if="expandedIndex === i"
                        class="absolute top-0 bg-indigo-200 text-indigo-800 text-14 border-[1px] border-indigo-500 flex flex-col"
                        :class="
                            accordionDirection(i) === 'right' ? 'left-full ml-4' : 'right-full mr-4'
                        "
                        :style="{ width: accordionWidth, height: calculateAccordionHeight(i) }"
                    >
                        <div
                            :class="[
                                'pt-4 pl-4 pr-4 flex w-full',
                                accordionDirection(i) === 'left' ? 'justify-end' : 'justify-start',
                            ]"
                        >
                            <button @click="toggleAccordion(i)">
                                <span class="material-icons-sharp text-indigo-800">close</span>
                            </button>
                        </div>

                        <div
                            class="text-group sm:text-18 md:text-20 lg:text-20 mb-4 p-4 flex-grow overflow-auto"
                            v-html="item.paragraph"
                        />
                        <div
                            v-if="Array.isArray(props.items[i].buttons)"
                            :class="[
                                'px-4 pb-4 flex mt-auto',
                                accordionDirection(i) === 'left' ? 'justify-start' : 'justify-end',
                            ]"
                        >
                            <a
                                v-for="(buttonObj, buttonIndex) in props.items[i].buttons"
                                :key="buttonIndex"
                                :href="buttonObj.button.url"
                                :target="buttonObj.button.target || '_self'"
                                :class="[
                                    'cursor-pointer btn group inline-flex flex-row items-center space-x-1.5 rounded border border-solid border-indigo-300 font-body font-normal text-10 leading-130 text-indigo bg-indigo-100 hover:bg-indigo-200 focus:bg-indigo-200 focus:outline focus:outline-2 focus:outline-canary outline-offset-[-1px] py-1 px-3 transition-all duration-200 ease-in-out !no-underline',
                                    accordionDirection(i) === 'left' ? 'mr-2' : 'ml-2',
                                ]"
                            >
                                {{ buttonObj.button.title }}
                            </a>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>

        <!-- passthrough slot when not API and not accordion -->
        <div
            :class="[
                'article-grid grid gap-10 max-w-screen-2xl w-full my-0 mx-auto',
                gridColsClass,
            ]"
            v-if="!props.render_api && style !== 'accordion'"
        >
            <template>
                <div
                    v-for="(item, i) in items"
                    :key="i"
                    v-if="item?.heading"
                    :class="['article-grid__item', itemColClass]"
                >
                    <!-- replace the path if your component lives elsewhere -->
                    <Article v-bind="item" />
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
    import { ref, reactive, computed, onMounted, onBeforeUnmount, nextTick } from 'vue';
    import axios from 'axios';
    // import moment from 'moment';
    import TextGroup from '../TextGroup/TextGroup.vue';
    import Article from '../Article/Article.vue';

    const props = defineProps({
        render_api: { type: Boolean, default: false },
        posts: { type: String, default: '' }, // e.g. 'media_coverage'
        api: { type: String, default: '' }, // e.g. 'all_media' | 'president' | 'highlight'
        range: { type: Number, default: 6 },
        border: { type: [Boolean, String], default: false },
        cta: { type: String, default: 'Read Story' },
        columns: { type: Number, default: 3 },
        style: { type: String, default: '' }, // e.g. 'accordion'
        size: { type: String, default: '' },
        items: { type: Array, default: () => [] },
    });

    const data = ref([]); // API items (normalized)
    const expandedIndex = ref(null); // which card is open
    const itemRefs = reactive([]); // per-card element refs
    const contextRefs = reactive([]); // per-card context refs
    const accordionWidth = ref('auto');
    const currentColumns = ref(props.columns);

    const gridContainer = ref(null);

    /* Helpers */
    const gridColsClass = computed(() => {
        if (props.columns === 4) return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
        if (props.columns === 3) return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
        return 'grid-cols-1 sm:grid-cols-2';
    });

    const itemColClass = computed(() => {
        if (props.columns === 4) return 'md:col-span-2 col-span-4';
        if (props.columns === 3) return 'md:col-span-3 col-span-9';
        return 'col-span-4';
    });

    const isMobileAccordion = computed(() => currentColumns.value === 1);

    const fetchApiData = async () => {
        if (!props.render_api) return;

        const endpoint = 'https://news.colby.edu/wp-json/custom/v1/external-posts';

        try {
            const { data: output } = await axios.get(endpoint);

            const filtered = output.filter((item) => {
                if (props.posts === 'media_coverage') {
                    const isMedia =
                        item.story_type?.[0]?.slug === 'media-coverage' && item.content?.rendered;
                    if (!isMedia) return false;

                    if (props.api === 'all_media') return true;
                    if (props.api === 'president')
                        return item.tags && item.tags.some((tag) => tag.name === 'president');
                    if (props.api === 'highlight')
                        return item.tags && item.tags.some((tag) => tag.name === 'editors-pick');
                }
                return false;
            });

            data.value = filtered
                .map((item) => ({
                    title: {
                        rendered: item.title.rendered.replace(/<(?!\/?(i|em)\b)[^>]+>/gi, ''),
                    },
                    'post-meta-fields': {
                        summary: [
                            `${item.content.rendered
                                .replace(/<(?!\/?(i|em)\b)[^>]+>/gi, '')
                                .substring(0, 120)}...`,
                        ],
                    },
                    url: item.external_url,
                    image: item.image,
                    // date: moment(item.date).format('MMM DD, YYYY'),
                }))
                .slice(0, props.range);
        } catch (e) {
            // optional: console.error(e);
        }
    };

    /* Layout / accordion logic */
    const updateColumns = () => {
        const container = gridContainer.value;
        if (!container || !container.children.length) return;

        const itemWidth = container.children[0].offsetWidth;
        const containerWidth = container.clientWidth;
        const newCols = Math.floor(containerWidth / itemWidth) || 1;

        if (newCols !== currentColumns.value) {
            currentColumns.value = newCols;
            if (expandedIndex.value !== null) {
                expandedIndex.value = null;
                accordionWidth.value = 'auto';
            }
        } else {
            currentColumns.value = newCols;
        }

        if (expandedIndex.value !== null && !isMobileAccordion.value) {
            printWidths(expandedIndex.value);
        }
    };

    const toggleAccordion = (index) => {
        expandedIndex.value = expandedIndex.value === index ? null : index;
        nextTick(() => {
            if (expandedIndex.value !== null && !isMobileAccordion.value) {
                printWidths(expandedIndex.value);
            } else {
                accordionWidth.value = 'auto';
            }
        });
    };

    const accordionDirection = (index) => {
        if (isMobileAccordion.value) return 'down';
        const positionInRow = index % currentColumns.value;
        return positionInRow < currentColumns.value / 2 ? 'right' : 'left';
    };

    const pickedUpStyle = (index) => {
        if (isMobileAccordion.value) return {};
        const positionInRow = index % currentColumns.value;
        const gap = '1.25rem';
        if (positionInRow === 0 || positionInRow === currentColumns.value - 1) return {};
        return accordionDirection(index) === 'right'
            ? { transform: `translateX(calc(-100% + -${gap}))`, zIndex: 10 }
            : { transform: `translateX(calc(100% + ${gap}))`, zIndex: 10 };
    };

    const printWidths = (index) => {
        const currentItem = itemRefs[index];
        if (!currentItem) return;

        const currentWidth = currentItem.offsetWidth;
        const container = currentItem.closest('.article-grid');
        if (!container) return;

        const containerWidth = container.clientWidth;
        const remainingWidth = containerWidth - currentWidth;
        const adjustedWidth = remainingWidth - 16; // Tailwind m-4 (approx) spacing
        accordionWidth.value = `${adjustedWidth}px`;
    };

    const calculateAccordionHeight = (index) => {
        const itemEl = itemRefs[index];
        const contextEl = contextRefs[index];
        if (!itemEl || !contextEl) return 'auto';
        return `${itemEl.offsetHeight}px`;
    };

    /* Lifecycle */
    onMounted(async () => {
        await fetchApiData();
        updateColumns();
        window.addEventListener('resize', updateColumns);
    });

    onBeforeUnmount(() => {
        window.removeEventListener('resize', updateColumns);
    });
</script>
