<template>
  <div
    class="text-group--animated"
    ref="container"
    :class="{ 'is-bot-visitor': isBot }"
  >
    <section class="text-group text-group--animated">
      <component
        v-if="subheading"
        :is="subheadingTag"
        class="text-group__subheading font-extended mb-2 font-bold uppercase md:mb-0"
        :class="[
          subheadingSize,
          'leading-130',
          'tracking-8',
          textAlign,
          subheadingColor,
        ]"
        v-html="subheading"
      />

      <component
        v-if="heading"
        :is="headingTag"
        class="text-group__heading my-2 font-stretch-semi-expanded"
        :class="[
          headingWeight,
          headingSizeMobile,
          headingSize,
          'leading-[1.5]',
          '-tracking-3',
          textAlign,
          headingColor,
        ]"
        v-html="strippedHeading"
      />

      <WYSIWYG
        v-if="paragraph"
        :html="paragraph"
        :size="size"
        :align="align"
        :type="type"
        :static="static"
      />
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed, nextTick } from "vue";
import WYSIWYG from "@/js/components/WYSIWYG/WYSIWYG.vue";
import "waypoints/lib/noframework.waypoints";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const container = ref(null);
const isBot = ref(false);
let waypointInstance = null;
let splitSubheading = null;
let splitHeading = null;

const emit = defineEmits(["animation-complete"]);

const props = defineProps({
  size: { type: String, default: "medium" },
  align: { type: String, default: "left" },
  type: { type: String, default: "dark" },
  subheading: String,
  heading: String,
  paragraph: String,
  static: { type: Boolean, default: false },
  hero: { type: Boolean, default: false },
  date: { type: Boolean, default: false },
  disableAnimations: { type: Boolean, default: false },
});

console.log(props.heading);

const sizes = computed(() => {
  const s = props.size;
  const isStatic = props.static === true;

  if (s === "xlarge")
    return {
      sub: "text-24",
      head: "md:text-48",
      headMobile: "text-48",
      weight: "font-medium",
    };

  if (s === "large")
    return {
      sub: "text-18",
      head: "md:text-36",
      headMobile: "text-28",
      weight: "font-semibold",
    };

  if (s === "medium")
    return {
      sub: "text-14",
      head: "md:text-24",
      headMobile: "text-28",
      weight: "font-semibold",
    };

  if (s === "small" && isStatic)
    return {
      sub: "text-12",
      head: "text-20",
      headMobile: "",
      weight: "font-semibold",
    };

  if (s === "small")
    return {
      sub: "text-12",
      head: "md:text-20",
      headMobile: "text-28",
      weight: "font-semibold",
    };

  if (s === "xsmall")
    return {
      sub: "text-12",
      head: "md:text-18",
      headMobile: "text-24",
      weight: "font-semibold",
    };

  return {
    sub: "",
    head: "",
    headMobile: "",
    weight: "font-medium",
  };
});

const textAlign = computed(() =>
  props.align === "center" ? "text-center" : "text-left",
);

const subheadingColor = computed(() =>
  props.type === "light" ? "text-gold" : "text-azure",
);

const headingColor = computed(() =>
  props.type === "light" ? "text-white" : "text-indigo",
);

const paragraphColor = computed(() =>
  props.type === "light" ? "text-[#eef4ff]" : "text-coal",
);

const subheadingTag = computed(() => "h2");

const headingTag = computed(() => {
  if (props.hero) {
    return "h1";
  } else if (props.subheading) {
    return "h3";
  } else {
    return "h2";
  }
});

const subheadingSize = computed(() => sizes.value.sub);
const headingSize = computed(() => sizes.value.head);
const headingSizeMobile = computed(() => sizes.value.headMobile || "");
const headingWeight = computed(() => sizes.value.weight);
const strippedHeading = computed(() => props.heading || "");

const animateSubheading = () => {
  if (!container.value || isBot.value || !splitSubheading) return;

  gsap.to(splitSubheading.words, {
    duration: 0.5,
    stagger: 0.1,
    opacity: 1,
    ease: "power3.easeInOut",
    onComplete: () => {
      animateHeading();
      animateParagraph();
    },
  });
};

const animateHeading = () => {
  if (!container.value || isBot.value || !splitHeading) return;

  gsap.to(splitHeading.words, {
    duration: 0.2,
    stagger: 0.1,
    opacity: 1,
    y: 0,
    ease: "power3.easeInOut",
  });
};

const animateParagraph = () => {
  if (!container.value || isBot.value) return;

  const target = container.value.querySelectorAll(".text-group__p, ul, ol");

  if (!target.length) {
    emit("animation-complete");
    return;
  }

  gsap.to(target, {
    delay: 0.4,
    duration: 0.4,
    stagger: 0.08,
    opacity: 1,
    ease: "Circ.easeIn",
    onComplete: () => emit("animation-complete"),
  });
};

onMounted(async () => {
  isBot.value =
    window.colby?.DISABLE_ANIMATIONS === true || props.disableAnimations;

  if (!container.value) return;

  if (isBot.value || props.disableAnimations) {
    emit("animation-complete");
    return;
  }

  await nextTick();

  const subheading = container.value.querySelector(".text-group__subheading");
  const heading = container.value.querySelector(".text-group__heading");

  if (subheading) {
    splitSubheading = new SplitText(subheading, {
      type: "words",
      wordsClass: "word-wrap",
    });
  }

  if (heading) {
    splitHeading = new SplitText(heading, {
      type: "words",
      wordsClass: "word-wrap",
    });
  }

  waypointInstance = new window.Waypoint({
    element: container.value,
    handler: function () {
      if (props.subheading) {
        animateSubheading();
      } else if (props.heading) {
        animateHeading();
        animateParagraph();
      } else if (props.paragraph) {
        animateParagraph();
      }
      this.destroy();
    },
    offset: "bottom-in-view",
  });
});

onBeforeUnmount(() => {
  if (splitSubheading) splitSubheading.revert();
  if (splitHeading) splitHeading.revert();
  if (waypointInstance?.destroy) waypointInstance.destroy();
});
</script>

<style lang="scss">
.text-group__subheading .word-wrap {
  display: inline-block;
}

.text-group--animated {
  .text-group__subheading .word-wrap {
    display: inline-block;
    opacity: 0;
  }

  .text-group__heading .word-wrap {
    display: inline-block;
    opacity: 0;
    transform: translate(0, 10px);
  }

  .text-group__p,
  ul,
  ol {
    opacity: 0;
  }
}

.is-bot-visitor {
  .text-group__subheading,
  .text-group__heading,
  .text-group__p,
  ul,
  ol,
  .text-group__heading .word-wrap,
  .text-group__subheading .word-wrap {
    opacity: 1 !important;
    transform: none !important;
    display: block !important;
  }

  .text-group__subheading .word-wrap,
  .text-group__heading .word-wrap {
    display: inline-block !important;
  }
}
</style>
