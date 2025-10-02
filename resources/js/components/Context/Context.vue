<template>
    <div class="context w-full space-y-5">
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

        <ButtonGroup
            v-if="buttons.items.length"
            :type="btnType"
            :size="btnSize"
            :align="align"
            :items="buttons.items"
        />
    </div>
</template>

<script setup>
    import TextGroup from '../TextGroup/TextGroup.vue';
    import ButtonGroup from '../ButtonGroup/ButtonGroup.vue';

    const props = defineProps({
        // TextGroup props
        size: { type: String, default: 'medium' }, // 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall'
        align: { type: String, default: 'left' }, // 'left' | 'center'
        type: { type: String, default: 'dark' }, // 'light' | 'dark'
        subheading: { type: String, default: '' },
        heading: { type: String, default: '' },
        paragraph: { type: [String, Object], default: '' }, // can be HTML string
        isStatic: { type: Boolean, default: false }, // 'static' reserved word → renamed to isStatic
        hero: { type: Boolean, default: false },
        date: { type: Boolean, default: false },

        // Buttons
        buttons: {
            type: Object,
            default: () => ({ items: [] }),
        },
        btnType: { type: String, default: 'light' },
        btnSize: { type: String, default: 'medium' },
    });
</script>
