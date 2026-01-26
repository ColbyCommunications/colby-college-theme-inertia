<template>
    <button
        class="arrow-btn inline-flex items-center justify-center w-12 h-12 bg-indigo-100 hover:bg-indigo-200 focus:bg-indigo-200 rounded border border-solid border-indigo-300 transition-all duration-200 ease-in-out"
        @click="handleClick"
    >
        <span class="sr-only">
            {{ reverse ? 'Next' : 'Previous' }}
        </span>
        <svg
            class="arrow-btn__arrow w-5 h-5"
            :class="{ 'rotate-180': reverse }"
            viewBox="0 0 26.9 26.5"
        >
            <path d="M26.9 12.7h-25L14 .7l-.8-.7L0 13.2l13.2 13.3.8-.7L1.9 13.7h25z" />
        </svg>
    </button>
</template>

<script setup>
    const props = defineProps({
        // size: { type: String, default: 'large' },
        // type: { type: String, default: 'light' },
        reverse: { type: Boolean, default: false },
    });

    const emit = defineEmits(['prev', 'next']);

    function handleClick() {
        if (props.reverse) {
            emit('next');
        } else {
            emit('prev');
        }
    }
</script>
