<!-- SiteFooter.vue -->
<template>
  <footer
    class="footer bg-indigo pt-14"
    :class="config.show_policy ? 'pb-0' : 'pb-14'"
  >
    <!-- ================================================================= -->
    <!-- TOP SECTION                                                       -->
    <!-- ================================================================= -->
    <div
      v-if="config.show_top"
      class="footer__inner mx-auto my-0 w-full max-w-screen-2xl space-y-8 px-5 md:grid md:grid-cols-12 md:space-y-0 md:gap-x-10"
    >
      <!-- TOP LEFT: Modular Layout -->
      <div
        class="footer__left flex min-w-0 flex-col gap-y-6 border-solid md:col-span-5"
        :class="
          config.show_vertical_divider
            ? 'md:border-r md:border-white/20 md:pr-8 lg:pr-10'
            : ''
        "
      >
        <!-- Top Row: Logos & Address -->
        <div
          v-if="
            config.show_logo ||
            config.show_athletics ||
            (config.show_address && (address?.text || phone))
          "
          class="flex flex-wrap items-start justify-between gap-x-6 gap-y-6 md:justify-start xl:gap-x-8"
        >
          <!-- Logos Column (Stacked on lg and below, flattened into row on xl+) -->
          <div
            v-if="config.show_logo || config.show_athletics"
            class="flex shrink-0 flex-col items-start gap-y-4 xl:contents"
          >
            <a
              v-if="config.show_logo"
              class="block max-w-full shrink-0 transition-all duration-200 ease-in-out hover:text-white hover:underline xl:order-1"
              :href="address?.url || url || '/'"
              aria-label="Go to homepage"
            >
              <ColbyLogo v-if="!logo" :url="url" fillColor="--color-white" />
              <template v-else>
                <img
                  :src="logo"
                  :style="desktopWidthStyle"
                  class="hidden h-auto max-w-full md:block"
                  alt="Site Logo"
                />
                <img
                  :src="logo"
                  :style="mobileWidthStyle"
                  class="block h-auto max-w-full md:hidden"
                  alt="Site Logo"
                />
              </template>
            </a>

            <AthleticsLogo
              v-if="config.show_athletics"
              class="relative left-[-11px] w-[125px] shrink-0 md:w-[100px] xl:top-[-14px] xl:left-0 xl:order-3"
            />
          </div>

          <!-- Address & Phone Column (Middle on xl+, Right of stacked logos on lg and below) -->
          <address
            v-if="config.show_address && (address?.text || phone)"
            class="footer__address shrink-0 space-y-2 font-body text-20 leading-140 font-normal whitespace-nowrap text-white not-italic md:text-12 xl:order-2"
          >
            <div v-if="address?.text" v-html="address.text"></div>

            <a
              v-if="phone"
              class="block min-h-[44px] min-w-[44px] leading-[44px] transition-all duration-200 ease-in-out hover:text-white hover:underline"
              :href="`tel:${phone}`"
            >
              {{ phone }}
            </a>
          </address>
        </div>

        <!-- Mission Statement (Full width of the left column) -->
        <div
          v-if="config.show_mission && (config.mission || mission)"
          class="font-body text-14 leading-[1.5] font-normal text-white"
          v-html="config.mission || mission"
        />
      </div>

      <!-- TOP RIGHT -->
      <div
        class="footer__right min-w-0 md:col-span-7"
        :class="[
          config.show_vertical_divider
            ? 'md:pl-10 lg:col-start-6 lg:col-end-13 lg:pl-16'
            : 'md:col-start-6 md:col-end-13',
        ]"
      >
        <!-- Right Option 1: Unsorted Variant -->
        <ul
          v-if="config.right_variant === 'unsorted'"
          class="footer__links grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] items-center gap-x-4 gap-y-2 lg:gap-x-6"
          :class="
            config.show_vertical_divider
              ? 'border-t border-solid border-[#365185] pt-8 md:border-t-0 md:pt-0'
              : ''
          "
        >
          <li
            v-for="(item, index) in menus.footer"
            :key="index"
            class="font-body text-16 leading-[1.3] font-normal text-white md:text-14"
          >
            <a
              :href="item.url"
              class="flex min-h-[44px] items-center break-words transition-all duration-200 ease-in-out hover:text-white hover:underline"
            >
              {{ item.title }}
            </a>
          </li>
        </ul>

        <!-- Right Options 2, 3, 4, 5: Single / Two / Three / Four Columns with Headings -->
        <div
          v-else
          class="grid gap-8"
          :class="[
            rightGridColsClass,
            config.show_vertical_divider
              ? 'border-t border-solid border-[#365185] pt-8 md:border-t-0 md:pt-0'
              : '',
          ]"
        >
          <div
            v-for="(col, colIdx) in footerColumns"
            :key="colIdx"
            class="flex flex-col"
          >
            <h3
              v-if="col.heading"
              class="font-extended mb-3 text-14 leading-130 font-bold tracking-8 text-white uppercase"
            >
              {{ col.heading }}
            </h3>
            <ul class="space-y-1">
              <li
                v-for="(item, itemIdx) in col.items"
                :key="itemIdx"
                class="font-body text-16 leading-[1.3] font-normal text-white md:text-14"
              >
                <a
                  :href="item.url"
                  class="flex min-h-[44px] items-center break-words text-gray-200 transition-all duration-200 ease-in-out hover:text-white hover:underline"
                >
                  {{ item.title }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Conditional Horizontal Bottom Divider -->
      <div
        v-if="config.show_bottom_divider"
        class="col-span-12 border-b border-[#365185] pt-4 md:border-white/20 md:pt-12"
      ></div>
    </div>

    <!-- ================================================================= -->
    <!-- BOTTOM SECTION                                                    -->
    <!-- ================================================================= -->
    <div
      v-if="
        config.show_bottom &&
        (config.show_action_left ||
          config.show_action_right ||
          config.show_social)
      "
      class="mx-auto w-full max-w-screen-2xl px-5"
      :class="config.show_top ? 'mt-12 md:mt-14' : ''"
    >
      <div class="flex flex-col gap-6 md:grid md:grid-cols-12 md:items-start">
        <!-- Bottom Left: Action Menu Left -->
        <div
          v-if="config.show_action_left"
          :class="
            config.show_action_right || config.show_social
              ? 'md:col-span-5'
              : 'md:col-span-12'
          "
        >
          <ActionMenu
            :menu="config.action_left_items"
            :variant="config.action_left_style"
          />
        </div>

        <!-- Bottom Right: Action Menu Right + Social Menu -->
        <div
          v-if="config.show_action_right || config.show_social"
          class="flex flex-wrap items-start justify-start gap-x-4 gap-y-3 md:justify-end"
          :class="config.show_action_left ? 'md:col-span-7' : 'md:col-span-12'"
        >
          <ActionMenu
            v-if="config.show_action_right"
            :menu="config.action_right_items"
            :variant="config.action_right_style"
            class="md:justify-end"
          />

          <div v-if="config.show_social" class="flex min-h-[44px] items-center">
            <SocialMenu :menu="menus.social" :size="config.social_size" />
          </div>
        </div>
      </div>
    </div>

    <!-- ================================================================= -->
    <!-- NONDISCRIMINATION POLICY                                          -->
    <!-- ================================================================= -->
    <div
      v-if="config.show_policy"
      class="nondescrimination-message space-y-4 bg-cloud"
      :class="config.show_top || config.show_bottom ? 'mt-14' : ''"
    >
      <div class="mx-auto max-w-screen-2xl px-5 py-8 font-normal">
        <div v-if="config.policy_heading">
          <b class="text-indigo">
            {{ config.policy_heading }}
          </b>
        </div>
        <div
          v-if="config.policy_body"
          class="text-coal [&_a]:text-indigo [&_a]:italic [&_a]:underline [&_a:hover]:text-coal [&_a:hover]:no-underline"
          v-html="config.policy_body"
        ></div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import { usePage } from "@inertiajs/vue3";
import ColbyLogo from "../Logos/ColbyLogo.vue";
import AthleticsLogo from "../Logos/AthleticsLogo.vue";
import ActionMenu from "../Menus/ActionMenu.vue";
import SocialMenu from "../Menus/SocialMenu.vue";

const props = defineProps({
  menus: { type: Object, default: () => ({}) },
  url: { type: String, default: "" },
  address: { type: Object, default: () => ({}) },
  mission: { type: String, default: "" },
  phone: { type: String, default: "" },
  logo: { type: String, default: "" },
  logoStyle: {
    type: [Object, String],
    default: () => ({ desktop: "", mobile: "" }),
  },
  footerStyle: { type: String, default: "" },
  display_athletics_logo: { type: Boolean, default: true },
  footerConfig: { type: Object, default: null },
});

const page = usePage();

const config = computed(() => {
  const raw = props.footerConfig || page.props?.site_data?.footer_config || {};

  return {
    show_top: raw.show_top ?? true,
    show_logo: raw.show_logo ?? true,
    show_mission: raw.show_mission ?? false,
    mission: raw.mission || "",
    show_address: raw.show_address ?? true,
    show_athletics: raw.show_athletics ?? props.display_athletics_logo ?? true,
    show_vertical_divider: raw.show_vertical_divider ?? true,
    show_bottom_divider: raw.show_bottom_divider ?? false,
    right_variant: raw.right_variant || "unsorted",
    col_1_heading: raw.col_1_heading || "",
    col_1_items: Array.isArray(raw.col_1_items) ? raw.col_1_items : [],
    col_2_heading: raw.col_2_heading || "",
    col_2_items: Array.isArray(raw.col_2_items) ? raw.col_2_items : [],
    col_3_heading: raw.col_3_heading || "",
    col_3_items: Array.isArray(raw.col_3_items) ? raw.col_3_items : [],
    col_4_heading: raw.col_4_heading || "",
    col_4_items: Array.isArray(raw.col_4_items) ? raw.col_4_items : [],
    show_bottom: raw.show_bottom ?? true,
    show_action_left: raw.show_action_left ?? true,
    action_left_style: raw.action_left_style || "link",
    action_left_items: Array.isArray(raw.action_left_items)
      ? raw.action_left_items
      : props.menus?.action || [],
    show_action_right: raw.show_action_right ?? false,
    action_right_style: raw.action_right_style || "filled",
    action_right_items: Array.isArray(raw.action_right_items)
      ? raw.action_right_items
      : [],
    show_social: raw.show_social ?? true,
    social_size: raw.social_size || "small",
    show_policy: raw.show_policy ?? false,
    policy_heading: raw.policy_heading || "",
    policy_body: raw.policy_body || "",
  };
});

// Two Column and Four Column both use a 2-column grid on desktop so cols 3 & 4 stack beneath cols 1 & 2
const rightGridColsClass = computed(() => {
  const variant = config.value.right_variant;
  if (variant === "two_col" || variant === "four_col") {
    return "grid-cols-1 sm:grid-cols-2";
  }
  if (variant === "three_col") {
    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  }
  return "grid-cols-1";
});

const footerColumns = computed(() => {
  const variant = config.value.right_variant;
  const colCount =
    variant === "four_col"
      ? 4
      : variant === "three_col"
        ? 3
        : variant === "two_col"
          ? 2
          : 1;

  const allColumns = [
    {
      heading: config.value.col_1_heading,
      items: config.value.col_1_items,
    },
    {
      heading: config.value.col_2_heading,
      items: config.value.col_2_items,
    },
    {
      heading: config.value.col_3_heading,
      items: config.value.col_3_items,
    },
    {
      heading: config.value.col_4_heading,
      items: config.value.col_4_items,
    },
  ];

  return allColumns.slice(0, colCount);
});

const parseWidth = (val) => {
  if (!val || typeof val !== "string") return undefined;
  const cleaned = val
    .replace(/width\s*:/i, "")
    .replace(/;/g, "")
    .trim();
  if (!cleaned) return undefined;
  return /^\d+$/.test(cleaned) ? `${cleaned}px` : cleaned;
};

const desktopWidthStyle = computed(() => {
  if (typeof props.logoStyle === "string") return props.logoStyle;
  const w = parseWidth(props.logoStyle?.desktop);
  return w ? { width: w } : {};
});

const mobileWidthStyle = computed(() => {
  if (typeof props.logoStyle === "string") return props.logoStyle;
  const w = parseWidth(props.logoStyle?.mobile || props.logoStyle?.desktop);
  return w ? { width: w } : {};
});
</script>
