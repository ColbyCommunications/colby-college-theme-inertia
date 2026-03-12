<template>
  <div ref="container" class="border--animated block col-span-12 h-px" :class="[colorClass, widthClass]" />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { gsap } from "gsap";
import "waypoints/lib/noframework.waypoints"; // attaches window.Waypoint

const container = ref(null);
let waypoint = null;
const widthClass = ref('w-0');

defineProps({
  colorClass: { type: String, default: 'bg-azure' },
});

const animateBorder = () => {
  if (!container.value) return;
  gsap.to(container.value, {
    width: "100%",
    duration: 2.5,
    ease: "circ.inOut", // GSAP 3 syntax
  });
};

onMounted(() => {

  if (typeof window !== "undefined" && container.value) {
    if (window.colby.DISABLE_ANIMATIONS === false) {
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
        offset: "bottom-in-view",
      });
    } else {
      widthClass.value = 'w-full';
    }
  }
});

onBeforeUnmount(() => {
  if (waypoint && waypoint.destroy) waypoint.destroy();
});
</script>
