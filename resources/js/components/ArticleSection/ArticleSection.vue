<template>
    <Carousel
        class="article-section"
        :perView="perView"
        :gap="gap"
        :render_api="renderApi"
        :api="api"
        v-slot="{ pauseCarousel, playCarousel }"
    >
        <div
            class="article-section__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto space-y-16 md:space-y-0"
        >
            <!-- Intro / Context -->
            <div class="article-section__intro md:col-span-4 lg:col-span-3 space-y-10">
                <Context
                    size="small"
                    :subheading="subheading"
                    :heading="heading"
                    :paragraph="paragraph"
                    :buttons="{ items: buttons }"
                />
                <ArrowControls
                    v-if="showCarouselControls"
                    size="large"
                    type="light"
                    @prev="onPrev"
                    @next="onNext"
                />
            </div>

            <!-- Grid -->
            <div
                class="article-section__grid md:col-start-5 md:col-span-8"
                @mouseenter="pauseCarousel?.()"
                @mouseleave="playCarousel?.()"
            >
                <ArticleGrid v-bind="gridProps" />
            </div>
        </div>
    </Carousel>
</template>

<script setup>
    import { computed } from 'vue';

    // Child components (adjust import paths to your project)
    import Carousel from '../Carousel/Carousel.vue';
    import Context from '../Context/Context.vue';
    import ArrowControls from '../ArrowControls/ArrowControls.vue';
    import ArticleGrid from '../ArticleGrid/ArticleGrid.vue';

    const props = defineProps({
        // Carousel controls
        perView: { type: Number, default: 2 },
        gap: { type: Number, default: 20 },

        // API / data flags
        renderApi: { type: [Boolean, Number, String], default: false },
        api: { type: String, default: '' },

        // Content
        heading: { type: String, default: '' },
        paragraph: { type: String, default: '' },
        subheading: { type: String, default: '' },
        buttons: { type: Array, default: () => [] },

        // Show/Hide arrow controls area from the original `{% if carousel %}`
        showCarouselControls: { type: Boolean, default: false },

        // Anything the grid needs—pass through as a single object
        // (e.g. { renderApi, posts, api, range, border, cta, columns, style, size, items })
        gridProps: { type: Object, default: () => ({}) },
    });

    // Optional: events for ArrowControls; parent can listen or
    // you can forward to a provided Carousel API if you expose one.
    const onPrev = () => {
        // Intentionally empty—wire to Carousel if you expose controls via provide/inject or events.
        // Or emit to parent:
        // emit('prev')
    };
    const onNext = () => {
        // Same note as above
        // emit('next')
    };

    // If you need a normalized boolean for renderApi internally:
    const renderApiBool = computed(() => {
        const v = String(props.renderApi);
        return v === 'true' || v === '1' || v === 'yes';
    });
</script>
