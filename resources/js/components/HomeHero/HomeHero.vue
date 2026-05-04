<template>
    <div
        class="home-hero relative h-[calc(100vh_-_145px)] md:h-[calc(100vh_-_100px)] overflow-hidden full-bleed"
    >
        <!-- Bottom overlay -->
        <div
            class="home-hero__bottom absolute bottom-0 left-0 w-full pt-24 pb-[50px]"
            :style="{
                background:
                    'linear-gradient(180deg, rgba(1, 33, 105, 0) 0%, rgba(14, 20, 34, 0.4) 25%)',
            }"
        >
            <div
                class="home-hero__inner grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto"
            >
                <div class="home-hero__main md:col-start-6 md:col-span-7">
                    <Context
                        size="xlarge"
                        type="light"
                        :arrow="true"
                        :reverse="true"
                        :date="true"
                        :heading="heading"
                        :buttons="{ items: buttons }"
                    />
                </div>
            </div>

            <div v-if="caption" class="home-hero__inner max-w-screen-2xl w-full px-5 my-0 mx-auto mt-24">
                <div
                    class="font-extended font-bold text-12 tracking-8 text-canary uppercase text-right md:text-left"
                >
                    {{ caption }}
                </div>
            </div>
        </div>

        <!-- Background media -->
        <video
            v-if="video"
            class="z-[-10] absolute min-w-full min-h-full w-auto h-auto bg-repeat bg-cover top-0 right-0 bottom-0 left-0 object-cover"
            playsinline
            autoplay
            muted
            loop
            preload="metadata"
            :poster="poster"
        >
            <source src="https://www.colby.edu/wp-content/uploads/2025/12/Untitled.mp4" type="video/mp4" />
        </video>

        <Picture
            v-else
            class="z-[-10] absolute top-0 left-0 w-full h-full"
            :src="image?.url"
            :alt="image?.alt || ''"
            loading="eager"
            :width="image.width"
            :height="image.height"
          />
       
    </div>
</template>

<script setup>
    import Context from '../Context/Context.vue';
    import Picture from '../Picture/Picture.vue';

    // Props mirror the Twig variables you used
    const props = defineProps({
        heading: { type: String, default: '' },
        buttons: { type: Array, default: () => [] }, // array of button items
        caption: { type: String, default: '' },
        video: { type: String, default: '' },
        poster: { type: String, default: '' },
        // For images:
        // - inComponentLibrary === true: { srcset, src, alt }
        // - otherwise: { sizeDesktop, sizeMobile, src, alt }
        image: {
            type: Object,
            default: () => ({ src: '', srcset: '', sizeDesktop: '', sizeMobile: '', alt: '' }),
        },
    });

</script>
