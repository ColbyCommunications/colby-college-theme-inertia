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
            v-if="buttons.items.length > 0"
            :type="btnType"
            :size="btnSize"
            :align="align"
            :items="buttons.items"
            :arrow="arrow"
            :reverse="reverse"
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
        arrow: { type: Boolean, default: false },
        reverse: { type: Boolean, default: false },
    });

    
    let btnType;
    if (props.type == 'light') {
        btnType = 'dark';
    } else {
        btnType = 'light';
    }

    let btnSize;
    if (props.size == 'xlarge') {
        btnSize = 'large';
    } else if (props.size == 'large') {
        btnSize = 'medium';
    } else if (props.size == 'medium') {
        btnSize = 'medium';
    } else if (props.size == 'small') {
        btnSize = 'small';
    } else if (props.size == 'xsmall') {
        btnSize = 'small';
    }

</script>
