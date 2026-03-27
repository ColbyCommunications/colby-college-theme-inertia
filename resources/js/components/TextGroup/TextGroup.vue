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
        class="text-group__subheading mr-4 mb-2 font-extended font-bold whitespace-nowrap uppercase md:mb-0"
        :class="[
          subheadingSize,
          'leading-130',
          'tracking-8',
          textAlign,
          subheadingColor,
        ]"
      >
        {{ subheading }}
      </component>

      <component
        v-if="heading"
        :is="headingTag"
        class="text-group__heading mt-2 font-extended"
        :class="[
          headingWeight,
          headingSizeMobile,
          headingSize,
          'leading-110',
          '-tracking-3',
          textAlign,
          headingColor,
        ]"
        v-html="strippedHeading"
      />

      <div v-if="paragraph" v-html="paragraphWithClasses" />
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
// import { gsap } from 'gsap';
import 'waypoints/lib/noframework.waypoints';

const container = ref(null);
const isBot = ref(false); // 2. Bot state
let waypointInstance = null;

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
});

console.log(props);


let gsapInstance = null;

async function getGsap() {
  if (gsapInstance) return gsapInstance;
  const mod = await import('gsap');
  gsapInstance = mod.gsap;
  return gsapInstance;
}


/* ... All computed properties (sizes, textAlign, colors, tags, paragraphWithClasses) remain identical ... */
/* (Keeping them exactly as they were in your snippet) */
const sizes = computed(() => {
  const s = props.size;
  const isStatic = props.static === true;
  if (s === "xlarge") return { sub: "text-24", head: "md:text-48", headMobile: "text-48", weight: "font-normal", p: "md:text-20", pMobile: "text-20" };
  if (s === "large") return { sub: "text-18", head: "md:text-36", headMobile: "text-28", weight: "font-normal", p: "md:text-18", pMobile: "text-18" };
  if (s === "medium") return { sub: "text-14", head: "md:text-24", headMobile: "text-28", weight: "font-normal", p: "md:text-16", pMobile: "text-18" };
  if (s === "small" && isStatic) return { sub: "text-12", head: "text-20", headMobile: "", weight: "font-normal", p: "text-14", pMobile: "" };
  if (s === "small") return { sub: "text-12", head: "md:text-20", headMobile: "text-28", weight: "font-normal", p: "md:text-14", pMobile: "text-18" };
  if (s === "xsmall") return { sub: "text-12", head: "md:text-18", headMobile: "text-24", weight: "font-bold", p: "md:text-12", pMobile: "text-12" };
  return { sub: "", head: "", headMobile: "", weight: "font-normal", p: "", pMobile: "" };
});
const textAlign = computed(() => props.align === "center" ? "text-center" : "text-left");
const subheadingColor = computed(() => props.type === "light" ? "text-canary" : "text-azure");
const headingColor = computed(() => props.type === "light" ? "text-white" : "text-indigo");
const paragraphColor = computed(() => props.type === "light" ? "text-[#eef4ff]" : "text-indigo-800");
const subheadingTag = computed(() => { if (props.hero) return props.date ? "div" : "h1"; if (props.heading) return "div"; return "h2"; });
const headingTag = computed(() => (props.date ? "h1" : "h2"));
const subheadingSize = computed(() => sizes.value.sub);
const headingSize = computed(() => sizes.value.head);
const headingSizeMobile = computed(() => sizes.value.headMobile || "");
const headingWeight = computed(() => sizes.value.weight);
const paragraphSize = computed(() => sizes.value.p);
const paragraphSizeMobile = computed(() => sizes.value.pMobile || "");
const strippedHeading = computed(() => (props.heading || "").replace(/<[^>]*>/g, ""));
const paragraphWithClasses = computed(() => {
  let html = String(props.paragraph || "");
  const startsWithBlockTag = /^\s*<(p|ul|ol)\b/i.test(html.trim());
  if (!startsWithBlockTag) html = `<p>${html}</p>`;
  const pCls = `text-group__p font-body font-normal ${paragraphSizeMobile.value} ${paragraphSize.value} leading-[1.75] ${textAlign.value} ${paragraphColor.value} mt-2`;
  const ulCls = `list-disc font-body font-normal ${paragraphSizeMobile.value} ${paragraphSize.value} leading-130 ${paragraphColor.value} mt-2`;
  const olCls = `list-decimal font-body font-normal ${paragraphSizeMobile.value} ${paragraphSize.value} leading-130 ${paragraphColor.value} mt-2`;
  const liCls = `${paragraphColor.value}`;
  return html.replaceAll("<p>", `<p class="${pCls}">`).replaceAll("<ul>", `<ul class="${ulCls}">`).replaceAll("<ol>", `<ol class="${olCls}">`).replaceAll("<li>", `<li class="${liCls}">`);
});

// --- Animation Methods ---
const animateSubheading = async () => {
    if (!container.value || isBot.value) return;
    const gsap = await getGsap();
    const target = container.value.querySelectorAll('.text-group__subheading > .word-wrap');
    gsap.to(target, {
        duration: 0.7,
        stagger: 0.1,
        opacity: 1,
        ease: 'power3.easeInOut',
        onComplete: () => {
            animateHeading();
            animateParagraph();
        },
    });
};

const animateHeading = async () => {
    if (!container.value || isBot.value) return;
    const gsap = await getGsap();
    const target = container.value.querySelectorAll('.text-group__heading span');
    gsap.to(target, { duration: 0.2, stagger: 0.1, opacity: 1, y: 0, ease: 'power3.easeInOut' });
};

const animateParagraph = async() => {
    if (!container.value || isBot.value) return;
    const gsap = await getGsap();
    const target = container.value.querySelectorAll('.text-group__p');
    gsap.to(target, { delay: 0.4, duration: 0.4, stagger: 0.08, opacity: 1, ease: 'Circ.easeIn' });
};

// --- Lifecycle Hooks ---
onMounted(() => {
    isBot.value = window.colby.DISABLE_ANIMATIONS === true;

    if (!container.value) return;

    // 3. If it's a bot, exit early and do NOT split text into spans
    if (isBot.value) return;

    const subheading = container.value.querySelector('.text-group__subheading');
    const paragraph = container.value.querySelector('.text-group__p');
    const heading = container.value.querySelector('.text-group__heading');

    if (subheading) {
        let words = subheading.innerHTML.split(' ');
        subheading.innerHTML = '';
        words.forEach((word) => {
            let wordWrap = document.createElement('span');
            wordWrap.classList.add('word-wrap');
            wordWrap.innerHTML = word;
            subheading.append(wordWrap);
            subheading.append(' ');
        });
    }

    if (heading) {
        let headingText = heading.innerHTML.split(' ');
        heading.innerHTML = '';
        headingText.forEach((word) => {
            let wordWrap = document.createElement('span');
            wordWrap.innerHTML = word;
            heading.append(wordWrap);
            heading.append(' ');
        });
    }

    waypointInstance = new window.Waypoint({
        element: container.value,
        handler: function () {
            if (subheading) {
                animateSubheading();
            } else if (heading) {
                animateHeading();
                animateParagraph();
            } else if (paragraph) {
                animateParagraph();
            }
            this.destroy(); 
        },
        offset: 'bottom-in-view',
    });
});

onBeforeUnmount(() => {
    if (waypointInstance && typeof waypointInstance.destroy === 'function') {
        waypointInstance.destroy();
    }
});
</script>

<style lang="scss">
.text-group__subheading span {
    display: inline-block;
}

.text-group--animated {
    .text-group__subheading span {
        display: inline-block;
        opacity: 0;
    }

    .text-group__heading span {
        display: inline-block;
        opacity: 0;
        transform: translate(0, 10px);
    }

    .text-group__p {
        opacity: 0;
    }
}

/* 4. Force visibility for crawlers */
.is-bot-visitor {
    .text-group__subheading,
    .text-group__heading,
    .text-group__p,
    .text-group__heading span,
    .text-group__subheading span {
        opacity: 1 !important;
        transform: none !important;
        display: block !important; /* Ensure block visibility */
    }
    
    .text-group__subheading span {
        display: inline-block !important;
    }
}
</style>