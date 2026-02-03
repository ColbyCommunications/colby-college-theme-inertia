<template>
  <div class="directory-card grid w-full max-w-screen-2xl grid-cols-8 gap-10">
    <div v-if="hasImage" class="directory-card__image col-span-8 md:col-span-4">
      <div class="relative pb-[119.44444444444444%]">
        <Picture
          class="absolute h-full w-full object-cover"
          :srcset="image.srcset"
          :src="image.src"
          :sizeDesktop="desktopSrc"
          :sizeMobile="mobileSrc"
          :alt="imageAlt"
        />
      </div>
    </div>

    <div
      class="directory-card__main col-span-8 grid items-center md:col-span-4"
    >
      <div class="directory-card__content">
        <h1 class="font-body text-24 leading-115 font-semibold text-indigo">
          {{ name }}
        </h1>
        <div
          v-if="pronouns && !hidePronouns"
          class="mt-2 font-body text-12 leading-140 font-semibold text-indigo-800"
        >
          {{ pronouns }}
        </div>

        <div class="mt-10 grid w-full grid-cols-4 gap-10">
          <template v-if="type === 'people'">
            <div class="col-span-2">
              <h2
                class="mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"
              >
                Title
              </h2>
              <p
                class="font-body text-16 leading-130 font-normal text-indigo-800"
              >
                {{ title }}
              </p>
            </div>

            <div v-if="department && !hideDepartment" class="col-span-2">
              <h2
                class="mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"
              >
                Department
              </h2>
              <p
                class="font-body text-16 leading-130 font-normal text-indigo-800"
              >
                {{ department }}
              </p>
            </div>

            <div class="col-span-4">
              <h2
                class="mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"
              >
                Information
              </h2>
              <ul
                class="directiory_information grid grid-cols-4 gap-x-10 font-body text-12 leading-140 font-normal"
              >
                <li v-if="phone && !hidePhoneNumber" class="col-span-2 mb-3">
                  <a
                    class="flex items-center text-indigo-800 hover:text-indigo hover:underline"
                    :href="`tel:${phone}`"
                  >
                    <Icon name="phone" class="mr-1.5 h-3 fill-indigo-800" />
                    {{ phone }}
                  </a>
                </li>

                <li v-if="curriculumVitae && !hideCv" class="col-span-2 mb-3">
                  <a
                    class="flex items-center text-indigo-800 hover:text-indigo hover:underline"
                    :href="curriculumVitae"
                    target="_blank"
                  >
                    <Icon name="clipboard" class="mr-1.5 h-3 fill-indigo-800" />
                    Curriculum Vitae/Personal Webpage
                  </a>
                </li>

                <li v-if="email && !hideEmail" class="col-span-2 mb-3">
                  <a
                    class="flex items-center text-indigo-800 hover:text-indigo hover:underline"
                    :href="`mailto:${email}`"
                  >
                    <Icon name="email" class="mr-1.5 h-3 fill-indigo-800" />
                    {{ email }}
                  </a>
                </li>

                <li v-if="fax && !hideFax" class="col-span-2 mb-3">
                  <a
                    class="flex items-center text-indigo-800 hover:text-indigo hover:underline"
                    :href="`tel:${fax}`"
                  >
                    <Icon name="fax" class="mr-1.5 h-4 fill-indigo-800" />
                    {{ fax }}
                  </a>
                </li>

                <li v-if="location && !hideLocation" class="col-span-2 mb-3">
                  <div class="flex items-center text-indigo-800">
                    <Icon name="location" class="mr-1.5 h-3 fill-indigo-800" />
                    {{ location }}
                  </div>
                </li>
              </ul>
            </div>

            <div v-if="address" class="col-span-4">
              <h2
                class="mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"
              >
                Address
              </h2>
              <p
                class="font-body text-12 leading-130 font-normal text-indigo-800"
              >
                {{ address }}
              </p>
            </div>

            <div v-if="officeHours && !hideOfficeHours" class="col-span-4">
              <h2
                class="mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"
              >
                Office Hours
              </h2>
              <p
                class="font-body text-12 leading-130 font-normal text-indigo-800"
              >
                {{ officeHours }}
              </p>
            </div>
          </template>

          <template v-else-if="type === 'offices'">
            <div class="col-span-4">
              <h2
                class="mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"
              >
                Address
              </h2>
              <p
                class="font-body text-16 leading-130 font-normal text-indigo-800"
              >
                {{ address }}
              </p>
            </div>

            <div class="col-span-4">
              <h2
                class="mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"
              >
                Links
              </h2>
              <ul
                class="grid grid-cols-4 gap-x-10 font-body text-12 leading-140 font-normal"
              >
                <li v-if="phone" class="col-span-2 mb-3">
                  <a
                    class="flex items-center text-indigo-800 hover:text-indigo hover:underline"
                    :href="`tel:${phone}`"
                  >
                    <Icon name="phone" class="mr-1.5 h-3 fill-indigo-800" />
                    {{ phone }}
                  </a>
                </li>

                <li v-if="curriculumVitae" class="col-span-2 mb-3">
                  <a
                    class="flex items-center text-indigo-800 hover:text-indigo hover:underline"
                    :href="curriculumVitae"
                    target="_blank"
                  >
                    <Icon name="clipboard" class="mr-1.5 h-3 fill-indigo-800" />
                    Curriculum Vitae/Personal Webpage
                  </a>
                </li>

                <li v-if="email" class="col-span-2 mb-3">
                  <a
                    class="flex items-center text-indigo-800 hover:text-indigo hover:underline"
                    :href="`mailto:${email}`"
                  >
                    <Icon name="email" class="mr-1.5 h-3 fill-indigo-800" />
                    {{ email }}
                  </a>
                </li>

                <li v-if="fax" class="col-span-2 mb-3">
                  <a
                    class="flex items-center text-indigo-800 hover:text-indigo hover:underline"
                    :href="`tel:${fax}`"
                  >
                    <Icon name="fax" class="mr-1.5 h-4 fill-indigo-800" />
                    {{ fax }}
                  </a>
                </li>

                <li v-if="location" class="col-span-2 mb-3">
                  <div class="flex items-center text-indigo-800">
                    <Icon name="location" class="mr-1.5 h-3 fill-indigo-800" />
                    {{ location }}
                  </div>
                </li>
              </ul>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";
// Assuming you have these base components created
import Picture from "../Picture/Picture.vue";
import Icon from "../Icon/Icon.vue";

const props = defineProps({
  // Data Objects
  post: {
    type: Object,
    default: () => ({}),
  },
  image: {
    type: Object,
    default: () => ({}),
  },

  // Configuration
  type: {
    type: String, // 'people' or 'offices'
    default: "people",
  },

  // Text Content
  name: { type: String, default: "" },
  pronouns: { type: String, default: "" },
  title: { type: String, default: "" },
  department: { type: String, default: "" },
  phone: { type: String, default: "" },
  curriculumVitae: { type: String, default: "" },
  email: { type: String, default: "" },
  fax: { type: String, default: "" },
  location: { type: String, default: "" },
  address: { type: String, default: "" },
  officeHours: { type: String, default: "" },

  // Visibility Flags
  hidePhoto: { type: Boolean, default: false },
  hidePronouns: { type: Boolean, default: false },
  hideDepartment: { type: Boolean, default: false },
  hidePhoneNumber: { type: Boolean, default: false },
  hideCv: { type: Boolean, default: false },
  hideEmail: { type: Boolean, default: false },
  hideFax: { type: Boolean, default: false },
  hideLocation: { type: Boolean, default: false },
  hideOfficeHours: { type: Boolean, default: false },
});

// Computed Logic for Image Data
// This handles the fallback logic seen in the Twig: (post.thumbnail or image)
const hasImage = computed(() => {
  return (props.post.thumbnail || props.image.src) && !props.hidePhoto;
});

const imageAlt = computed(() => {
  if (props.image.alt) return props.image.alt;
  if (props.post.first_name && props.post.last_name) {
    return `Image of ${props.post.first_name} ${props.post.last_name}`;
  }
  return "Directory Image";
});

// Helper to safely access nested post thumbnail properties if they exist
const desktopSrc = computed(() =>
  props.post?.thumbnail?.src
    ? props.post.thumbnail.src("Square")
    : props.image.src,
);
const mobileSrc = computed(() =>
  props.post?.thumbnail?.src
    ? props.post.thumbnail.src("Square_mobile")
    : props.image.src,
);
</script>
