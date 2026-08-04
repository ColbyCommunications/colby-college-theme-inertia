<template>
  <div
    class="directory-card mb-20 grid w-full max-w-screen-2xl grid-cols-8 gap-10"
  >
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
          <span class="sr-only">Directory profile for </span>
          {{ name }}
        </h1>
        <div
          v-if="pronouns && !hide_pronouns"
          class="mt-2 font-body text-12 leading-140 font-semibold text-indigo"
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
                class="font-body text-16 leading-[1.5] font-normal text-indigo"
              >
                {{ title }}
              </p>
            </div>

            <div v-if="department && !hide_department" class="col-span-2">
              <h2
                class="mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"
              >
                Department
              </h2>
              <p
                class="font-body text-16 leading-[1.5] font-normal text-indigo"
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
                <li v-if="phone && !hide_phone_number" class="col-span-2 mb-3">
                  <a
                    class="flex min-h-[44px] min-w-[44px] items-center leading-[44px] text-indigo hover:text-coal hover:underline"
                    :href="`tel:${phone}`"
                  >
                    <Icon
                      name="phone"
                      class="mr-1.5 h-3 shrink-0 fill-indigo"
                    />
                    {{ phone }}
                  </a>
                </li>

                <li v-if="curriculum_vitae && !hide_cv" class="col-span-2 mb-3">
                  <a
                    class="flex min-h-[44px] min-w-[44px] items-center text-indigo hover:text-coal hover:underline"
                    :href="curriculum_vitae"
                    target="_blank"
                  >
                    <Icon
                      name="clipboard"
                      class="mr-1.5 h-3 shrink-0 fill-indigo"
                    />
                    Curriculum Vitae/Personal Webpage
                  </a>
                </li>

                <li v-if="email && !hide_email" class="col-span-2 mb-3">
                  <a
                    class="flex min-h-[44px] min-w-[44px] items-center leading-[44px] text-indigo hover:text-coal hover:underline"
                    :href="`mailto:${email}`"
                  >
                    <Icon
                      name="email"
                      class="mr-1.5 h-3 shrink-0 fill-indigo"
                    />
                    {{ email }}
                  </a>
                </li>

                <li v-if="fax && !hide_fax" class="col-span-2 mb-3">
                  <a
                    class="flex min-h-[44px] min-w-[44px] items-center leading-[44px] text-indigo hover:text-coal hover:underline"
                    :href="`tel:${fax}`"
                  >
                    <Icon name="fax" class="mr-1.5 h-4 shrink-0 fill-indigo" />
                    {{ fax }}
                  </a>
                </li>

                <li v-if="location && !hide_location" class="col-span-2 mb-3">
                  <div class="flex items-center text-indigo">
                    <Icon
                      name="location"
                      class="mr-1.5 h-3 shrink-0 fill-indigo"
                    />
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
              <p class="font-body text-12 leading-130 font-normal text-indigo">
                {{ address }}
              </p>
            </div>

            <div v-if="office_hours && !hide_office_hours" class="col-span-4">
              <h2
                class="mb-3 font-body text-10 leading-140 font-bold tracking-8 text-indigo uppercase"
              >
                Office Hours
              </h2>
              <p class="font-body text-12 leading-130 font-normal text-indigo">
                {{ office_hours }}
              </p>
            </div>
          </template>

          <template v-else-if="type === 'offices'">
            <div class="col-span-4">
              <h2
                class="mb-3 font-body text-10 leading-[1.5] font-bold tracking-8 text-indigo uppercase"
              >
                Address
              </h2>
              <p
                class="font-body text-16 leading-[1.5] font-normal text-indigo"
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
                    class="flex min-h-[44px] min-w-[44px] items-center leading-[44px] text-indigo hover:text-indigo hover:underline"
                    :href="`tel:${phone}`"
                  >
                    <Icon
                      name="phone"
                      class="mr-1.5 h-3 shrink-0 fill-indigo"
                    />
                    {{ phone }}
                  </a>
                </li>

                <li v-if="curriculum_vitae" class="col-span-2 mb-3">
                  <a
                    class="flex min-h-[44px] min-w-[44px] items-center leading-[44px] text-indigo hover:text-coal hover:underline"
                    :href="curriculum_vitae"
                    target="_blank"
                  >
                    <Icon
                      name="clipboard"
                      class="mr-1.5 h-3 shrink-0 fill-indigo"
                    />
                    Curriculum Vitae/Personal Webpage
                  </a>
                </li>

                <li v-if="email" class="col-span-2 mb-3">
                  <a
                    class="flex min-h-[44px] min-w-[44px] items-center leading-[44px] text-indigo hover:text-coal hover:underline"
                    :href="`mailto:${email}`"
                  >
                    <Icon
                      name="email"
                      class="mr-1.5 h-3 shrink-0 fill-indigo"
                    />
                    {{ email }}
                  </a>
                </li>

                <li v-if="fax" class="col-span-2 mb-3">
                  <a
                    class="flex min-h-[44px] min-w-[44px] items-center leading-[44px] text-indigo hover:text-coal hover:underline"
                    :href="`tel:${fax}`"
                  >
                    <Icon name="fax" class="mr-1.5 h-4 shrink-0 fill-indigo" />
                    {{ fax }}
                  </a>
                </li>

                <li v-if="location" class="col-span-2 mb-3">
                  <div class="flex items-center text-indigo">
                    <Icon
                      name="location"
                      class="mr-1.5 h-3 shrink-0 fill-indigo"
                    />
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
import Picture from "../Picture/Picture.vue";
import Icon from "../Icon/Icon.vue";

const props = defineProps({
  post: {
    type: Object,
    default: () => ({}),
  },
  image: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "people",
  },
  name: { type: String, default: "" },
  pronouns: { type: String, default: "" },
  title: { type: String, default: "" },
  department: { type: String, default: "" },
  phone: { type: String, default: "" },
  curriculum_vitae: { type: String, default: "" },
  email: { type: String, default: "" },
  fax: { type: String, default: "" },
  location: { type: String, default: "" },
  address: { type: String, default: "" },
  office_hours: { type: String, default: "" },

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

const hasImage = computed(() => {
  return props.image && !props.hide_photo;
});

const imageAlt = computed(() => {
  if (props.image.alt) return props.image.alt;
  if (props.post.first_name && props.post.last_name) {
    return `Image of ${props.post.first_name} ${props.post.last_name}`;
  }
  return "Directory Image";
});
</script>
