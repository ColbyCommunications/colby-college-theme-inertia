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

        <Picture
            v-if="showPosterImage"
            class="z-[-10] absolute top-0 left-0 w-full h-full"
            :src="image?.url"
            :alt="image?.alt || ''"
            :width="image.width"
            :height="image.height"
            :loading="priority ? 'eager' : 'lazy'"
            :fetch-priority="priority ? 'high' : 'auto'"
            :progressive="!priority"
            sizes="100vw"
          />

        <!-- Background media -->
        <video
            v-if="selectedVideo && !selectedHlsVideo"
            class="z-[-10] absolute min-w-full min-h-full w-auto h-auto bg-repeat bg-cover top-0 right-0 bottom-0 left-0 object-cover"
            playsinline
            autoplay
            muted
            loop
            preload="metadata"
            :poster="posterUrl || undefined"
        >
            <source :src="selectedVideo" type="video/mp4" />
        </video>
        <HlsBackground
            v-if="selectedHlsVideo"
            :src="selectedHlsVideo"
            :fallback-src="selectedMp4Fallback"
            :poster="posterUrl"
        />
       
    </div>
</template>

<script setup>
    import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
    import Context from '../Context/Context.vue';
    import HlsBackground from '../HlsBackground/HlsBackground.vue';
    import Picture from '../Picture/Picture.vue';

    // Props mirror the Twig variables you used
    const props = defineProps({
        heading: { type: String, default: '' },
        buttons: { type: Array, default: () => [] }, // array of button items
        caption: { type: String, default: '' },
        video: { type: String, default: '' },
        video_tablet: { type: String, default: '' },
        video_mobile: { type: String, default: '' },
        hls_video: { type: String, default: '' },
        hls_video_tablet: { type: String, default: '' },
        hls_video_mobile: { type: String, default: '' },
        poster: { type: String, default: '' },
        priority: { type: Boolean, default: false },
        image: {
            type: Object,
            default: () => ({ src: '', srcset: '', sizeDesktop: '', sizeMobile: '', alt: '' }),
        },
    });

    const isMobile = ref(
        typeof window !== 'undefined' ? window.matchMedia('(max-width: 767px)').matches : false,
    );
    const isTablet = ref(
        typeof window !== 'undefined'
            ? window.matchMedia('(min-width: 768px) and (max-width: 1023px)').matches
            : false,
    );
    let mobileMediaQuery = null;
    let tabletMediaQuery = null;
    let mobileVideoTimer = null;
    const canLoadMobileVideo = ref(false);

    function updateViewport() {
        isMobile.value = mobileMediaQuery?.matches ?? false;
        isTablet.value = tabletMediaQuery?.matches ?? false;
    }

    function normalizeMediaUrl(src) {
        if (!src) {
            return '';
        }

        const rawSrc = String(src);
        const colby = window.colby || {};

        if (colby.isLocal && colby.PRIMARY_DOMAIN) {
            try {
                const url = new URL(rawSrc, window.location.origin);
                return `https://${colby.PRIMARY_DOMAIN}${url.pathname}`;
            } catch {
                return rawSrc;
            }
        }

        return rawSrc;
    }

    const posterUrl = computed(() =>
        optimizedPosterUrl(props.poster || props.image?.sizes?.Hero || props.image?.url || ''),
    );

    function optimizedPosterUrl(src) {
        const normalizedSrc = normalizeMediaUrl(src);
        if (!normalizedSrc) {
            return '';
        }

        const width = isMobile.value ? 640 : isTablet.value ? 1280 : 1920;
        return `https://www.colby.edu/cdn-cgi/image/width=${width},format=auto,quality=60/${normalizedSrc}`;
    }

    const selectedVideo = computed(() => {
        if (selectedHlsVideo.value) {
            return '';
        }

        if (isMobile.value) {
            return canLoadMobileVideo.value ? props.video_mobile || '' : '';
        }

        if (isTablet.value) {
            return props.video_tablet || props.video || '';
        }

        return props.video || '';
    });

    const selectedMp4Fallback = computed(() => {
        if (isMobile.value) {
            return props.video_mobile || '';
        }

        if (isTablet.value) {
            return props.video_tablet || props.video || '';
        }

        return props.video || '';
    });

    const selectedHlsVideo = computed(() => {
        if (isMobile.value) {
            return props.hls_video_mobile || props.hls_video || '';
        }

        if (isTablet.value) {
            return props.hls_video_tablet || props.hls_video || '';
        }

        return props.hls_video || '';
    });

    const showPosterImage = computed(() => !selectedVideo.value || isMobile.value || !!selectedHlsVideo.value);

    onMounted(() => {
        mobileMediaQuery = window.matchMedia('(max-width: 767px)');
        tabletMediaQuery = window.matchMedia('(min-width: 768px) and (max-width: 1023px)');
        updateViewport();
        mobileMediaQuery.addEventListener('change', updateViewport);
        tabletMediaQuery.addEventListener('change', updateViewport);

        if (props.video_mobile) {
            const loadMobileVideo = () => {
                mobileVideoTimer = window.setTimeout(() => {
                    canLoadMobileVideo.value = true;
                }, 2000);
            };

            if (document.readyState === 'complete') {
                loadMobileVideo();
            } else {
                window.addEventListener('load', loadMobileVideo, { once: true });
            }
        }
    });

    onBeforeUnmount(() => {
        mobileMediaQuery?.removeEventListener('change', updateViewport);
        tabletMediaQuery?.removeEventListener('change', updateViewport);
        if (mobileVideoTimer) {
            window.clearTimeout(mobileVideoTimer);
        }
    });

</script>
