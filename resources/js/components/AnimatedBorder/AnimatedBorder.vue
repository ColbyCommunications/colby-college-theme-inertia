<template>
    <div class="border--animated" ref="container" />
</template>

<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue';
    import { gsap } from 'gsap';
    import 'waypoints/lib/noframework.waypoints'; // attaches window.Waypoint

    const container = ref(null);
    let waypoint = null;

    const animateBorder = () => {
        if (!container.value) return;
        gsap.to(container.value, {
            width: '100%',
            duration: 2.5,
            ease: 'circ.inOut', // GSAP 3 syntax
        });
    };

    onMounted(() => {
        if (typeof window !== 'undefined' && container.value) {
            waypoint = new window.Waypoint({
                element: container.value,
                handler: () => {
                    animateBorder();
                    // Run once
                    if (waypoint && waypoint.destroy) {
                        waypoint.destroy();
                        waypoint = null;
                    }
                },
                offset: 'bottom-in-view',
            });
        }
    });

    onBeforeUnmount(() => {
        if (waypoint && waypoint.destroy) waypoint.destroy();
    });
</script>
