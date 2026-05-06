<template>
  <div class="directory-card grid w-full max-w-screen-2xl grid-cols-8 gap-10">
    <div v-if="hasImage" class="directory-card__image col-span-8 md:col-span-4">
      <div class="relative pb-[119.44444444444444%]">
        <Picture
          class="absolute h-full w-full object-cover"
          :src="image"
          :alt="`Image of ${props.name}`"
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
    type: String,
    default: '',
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
  curriculum_itae: { type: String, default: "" },
  email: { type: String, default: "" },
  fax: { type: String, default: "" },
  location: { type: String, default: "" },
  address: { type: String, default: "" },
  office_hours: { type: String, default: "" },

  // Visibility Flags
  hide_photo: { type: Boolean, default: false },
  hide_pronouns: { type: Boolean, default: false },
  hide_department: { type: Boolean, default: false },
  hide_phone_number: { type: Boolean, default: false },
  hide_cv: { type: Boolean, default: false },
  hide_email: { type: Boolean, default: false },
  hide_fax: { type: Boolean, default: false },
  hide_location: { type: Boolean, default: false },
  hide_office_hours: { type: Boolean, default: false },
});

// Computed Logic for Image Data
// This handles the fallback logic seen in the Twig: (post.thumbnail or image)
const hasImage = computed(() => {
  return (props.image) && !props.hidePhoto;
});

const imageAlt = computed(() => {
  if (props.image.alt) return props.image.alt;
  if (props.post.first_name && props.post.last_name) {
    return `Image of ${props.post.first_name} ${props.post.last_name}`;
  }
  return "Directory Image";
});

</script>
