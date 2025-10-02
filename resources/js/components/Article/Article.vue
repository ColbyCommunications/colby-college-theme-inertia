<template>
    <article
        :class="[
            'article space-y-4',
            { 'pt-1 border-t-2 border-solid border-indigo-600': !!border },
        ]"
    >
        <!-- Image -->
        <template v-if="image">
            <!-- Linked image when there's a primary button -->
            <a
                v-if="hasButtons"
                class="article__image relative block overflow-hidden"
                :class="{ article__image__person: postType === 'people' }"
                :href="buttons[0].button.url"
                :aria-label="ariaLabel"
            >
                <picture v-if="useDesktopMobile">
                    <source media="(min-width:768px)" :srcset="image.sizes.desktop" />
                    <img
                        class="w-full object-cover hover:scale-105 transition-all duration-500 ease-in-out"
                        :src="image.sizes.mobile || image.src"
                        :alt="image?.alt || ''"
                    />
                </picture>
                <picture v-else>
                    <source media="(min-width:768px)" :srcset="image.srcset" />
                    <img
                        class="w-full object-cover hover:scale-105 transition-all duration-500 ease-in-out"
                        :src="image.src"
                        :alt="image?.alt || ''"
                    />
                </picture>
            </a>

            <!-- Plain image (no buttons) -->
            <div
                v-else
                class="article__image relative"
                :class="{ article__image__person: postType === 'people' }"
            >
                <picture v-if="useDesktopMobile">
                    <source media="(min-width:768px)" :srcset="image.sizes.desktop" />
                    <img
                        class="w-full object-cover"
                        :src="image.sizes.mobile || image.src"
                        :alt="image?.alt || ''"
                    />
                </picture>
                <picture v-else>
                    <source media="(min-width:768px)" :srcset="image.srcset" />
                    <img class="w-full object-cover" :src="image?.src" :alt="image.alt || ''" />
                </picture>
            </div>
        </template>

        <!-- Context block -->
        <Context
            :size="size || 'small'"
            :static="true"
            :subheading="subheading"
            :heading="heading"
            :paragraph="paragraph"
            :buttons="{ items: buttons }"
        />
    </article>
</template>

<script setup>
    import { computed } from 'vue';
    import Context from '../Context/Context.vue';

    const props = defineProps({
        border: { type: [Boolean, String], default: false },
        image: { type: Object, default: null }, // { srcset, src, sizes:{desktop,mobile}, alt }
        buttons: { type: Array, default: () => [] }, // [{ button: { url, title, target } }]
        postType: { type: String, default: '' }, // 'people' | ...
        heading: { type: String, default: '' },
        subheading: { type: String, default: '' },
        paragraph: { type: String, default: '' },
        size: { type: String, default: 'small' },
        inComponentLibrary: { type: Boolean, default: false }, // kept for parity, if you need it
    });

    const hasButtons = computed(() => Array.isArray(props.buttons) && props.buttons[0].button.url);

    const useDesktopMobile = computed(
        () => !!props.image.sizes.desktop || !!props.image.sizes.mobile
    );

    const ariaLabel = computed(() => {
        const raw = props.heading || '';
        const stripped = raw.replace(/<[^>]*>/g, '');
        return stripped.replace(/"/g, '').toLowerCase();
    });
</script>
