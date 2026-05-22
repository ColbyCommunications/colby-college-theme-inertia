<!-- Footer.vue -->
<template>
  <footer
    v-if="footerStyle === 'colby.edu'"
    class="footer space-y-14 bg-indigo pt-14 pb-14"
  >
    <div
      class="footer__inner mx-auto my-0 w-full max-w-screen-2xl space-y-8 px-5 md:grid md:grid-cols-12 md:space-y-0 md:gap-x-10"
    >
      <div
        class="footer__left flex items-start justify-between border-solid md:col-span-5 md:justify-start md:space-x-8 md:border-r md:border-white/20 lg:space-x-12"
      >
        <div>
          <a
            class="mb-4 block transition-all duration-200 ease-in-out hover:text-white hover:underline "
            :href="address.url"
            aria-label="Go to colby.edu homepage"
          >
            <ColbyLogo
              v-if="logo.length == 0"
              :url="url"
              fillColor="--color-white"
            />
          </a>

          <a
            v-if="display_athletics_logo"
            class="relative block transition-all duration-200 ease-in-out hover:text-white hover:underline lg:hidden"
            href="https://colbyathletics.com"
            aria-label="Go to colbyathletics.com homepage"
          >
            <AthleticsLogo
              class="relative left-[-11px] w-[125px] md:w-[100px]"
            />
          </a>
        </div>

        <address
          class="footer__address w-[225px] space-y-2 font-body text-20 leading-140 font-normal text-[#b7c2d5] not-italic md:w-[120px] md:text-12"
        >
          <div v-html="address.text"></div>

          <a
            class="block transition-all duration-200 ease-in-out hover:text-white hover:underline min-h-[44px] min-w-[44px] leading-[44px]"
            :href="`tel:${phone}`"
          >
            {{ phone }}
          </a>
        </address>

        <a
          v-if="display_athletics_logo"
          class="relative hidden transition-all duration-200 ease-in-out hover:text-white hover:underline lg:block"
          href="https://colbyathletics.com"
          aria-label="Go to colbyathletics.com homepage"
        >
          <AthleticsLogo
            class="absolute top-[-14px] left-[-20px] hidden w-[125px] md:block md:w-[100px]"
          />
        </a>
      </div>

      <div
        class="footer__right md:col-span-7 md:pl-10 lg:col-start-6 lg:col-end-13 lg:pl-16"
      >
        <ul
          class="footer__links flex flex-wrap border-y border-solid border-[#365185] pt-8 pb-4 md:border-y-0 md:pt-0 md:pb-0"
        >
          <li
            v-for="(item, index) in menus.footer"
            :key="index"
            class="mb-4 flex min-h-[44px] min-w-[44px] basis-1/2 items-center font-body text-16 leading-130 font-normal text-[#b7c2d5] md:text-14 lg:basis-1/4"
          >
            <a
              :href="item.url"
              class="w-full transition-all duration-200 ease-in-out hover:text-white hover:underline min-h-[44px] min-w-[44px] leading-[44px]"
            >
              {{ item.title }}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="mx-auto mt-6 w-full max-w-screen-2xl px-5 md:px-0">
      <div class="flex flex-col gap-6 md:grid md:grid-cols-12">
        <ActionMenu :menu="menus.action" />

        <div
          class="col-span-8 flex flex-wrap items-center justify-start gap-4 md:justify-end"
        >
          <div>
            <Button
              size="small"
              type="dark"
              url="https://news.colby.edu/newsletter/"
              title="Newsletter"
            />
          </div>

          <div class="flex w-72 items-center">
            <SocialMenu :menu="menus.social" />
          </div>
        </div>
      </div>
    </div>

    <div class="nondescrimination-message hidden space-y-4 bg-[#eef4ff]">
      <div class="mx-auto max-w-screen-2xl px-5 py-8 font-normal">
        <div>
          <b class="text-indigo">
            NOTICE OF NONDISCRIMINATORY POLICY AS TO STUDENTS
          </b>
        </div>
        <div class="text-indigo-800">
          Colby College admits students of any race, color, national and ethnic
          origin to all the rights, privileges, programs, and activities
          generally accorded or made available to students at the school. It
          does not discriminate on the basis of race, color, national and ethnic
          origin in administration of its educational policies, admissions
          policies, scholarship and loan programs, and athletic and other
          school-administered programs. See
          <a
            href="https://afa.colby.edu/nondiscrimination-policy/"
            target="_blank"
            class="text-indigo italic underline hover:text-indigo-800 hover:no-underline"
          >
            Colby's Nondiscrimination Policy and Compliance Information.
          </a>
        </div>
      </div>
    </div>
  </footer>
  <footer v-else class="footer-child bg-indigo py-14">
    <div
      class="footer__inner mx-auto my-0 w-full max-w-screen-2xl gap-x-10 px-5 md:grid md:grid-cols-12"
    >
      <div class="footer__left md:col-span-6">
        <a
          class="mb-4 block transition-all duration-200 ease-in-out hover:text-white hover:underline"
          :href="address?.url"
          aria-label="Go to the homepage"
        >
          <ColbyLogo
            v-if="logo.length == 0"
            :url="url"
            fillColor="--color-white"
          />

          <img v-else :src="logo" :style="logoStyle" />
        </a>
        <p
          class="mt-8 font-body text-14 leading-130 font-normal text-gray-500 md:mt-7"
          v-html="address?.text"
        />
      </div>

      <div class="footer__right mt-6 md:col-span-5 md:col-start-8 md:mt-0">
        <ul
          class="footer__links space-between footer__links flex grid grid-cols-2 flex-wrap gap-4 border-y border-solid border-[#365185] pt-8 pb-4 md:border-y-0 md:pt-0 md:pb-0"
        >
          <li
            v-for="(item, index) in menus.footer"
            :key="index"
            class="col-span-1 font-body text-18 leading-120 font-normal"
          >
            <a
              class="flex min-h-[44px] items-center text-gray-200 transition-all duration-200 ease-in-out hover:text-white hover:underline"
              :href="item.url"
              >{{ item.title }}</a
            >
          </li>
        </ul>
      </div>
      <div class="col-span-12 border-b border-gray-800 pb-8 md:pb-12"></div>
    </div>

    <div
      class="footer__inner mx-auto mt-12 w-full max-w-screen-2xl gap-x-10 px-5 md:grid md:grid-cols-12"
    >
      <div class="items-center justify-between md:col-span-12 md:flex">
        <ul
          class="footer__utility flex flex-wrap gap-6 md:flex-nowrap md:gap-0 md:space-x-6"
        >
          <li
            v-for="(item, index) in menus.action"
            :key="index"
            class="inline-block"
          >
            <a
              class="btn group inline-flex min-h-[44px] min-w-[44px] flex-row items-center space-x-1.5 rounded border border-solid border-white bg-indigo px-4 py-1.5 font-body text-14 leading-130 font-normal text-white !no-underline outline-offset-[-1px] transition-all duration-200 ease-in-out focus:outline focus:outline-2 focus:outline-canary"
              :href="item.url"
            >
              <Icon
                :name="item.title.toLowerCase()"
                class="h-3.5 w-3.5 fill-white"
              />
              <span class="btn__text">
                {{ item.title }}
                <div
                  class="btn__border block h-px w-0 bg-white transition-all duration-200 ease-in-out group-hover:w-full"
                ></div>
              </span>
            </a>
          </li>
        </ul>

        <ul class="footer__socials mt-10 flex space-x-4 md:mt-0">
          <li
            v-for="(item, index) in menus.social"
            :key="index"
            class="text-[0]"
          >
            <a class="flex text-indigo-100" :href="item.platform.url">
              <Icon
                :name="item.platform.title.toLowerCase()"
                class="max-h-6 w-full max-w-6 fill-indigo-100 transition-all duration-200 ease-in-out hover:fill-indigo-500 md:max-h-4 md:max-w-4"
              />
              <span class="sr-only">{{ item.platform.title }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup>
import ColbyLogo from "../Logos/ColbyLogo.vue";
import AthleticsLogo from "../Logos/AthleticsLogo.vue";
import ActionMenu from "../Menus/ActionMenu.vue";
import Button from "../Button/Button.vue";
import SocialMenu from "../Menus/SocialMenu.vue";
import Icon from "@/js/components/Icon/Icon.vue";
import { useAttrs } from "vue";

const props = defineProps({
  menus: { type: Object, default: () => ({}) },
  url: { type: String, default: "" },
  address: { type: Object, default: () => ({}) },
  phone: { type: String, default: "" },
  logo: { type: String, default: "" },
  logoStyle: { type: String, default: "" },
  footerStyle: { type: String, default: "" },
  display_athletics_logo: { type: Boolean },
});

console.log(props);
</script>
<style scoped>
.home .nondescrimination-message {
  display: block !important;
}

.home .footer {
  padding-bottom: 0rem !important;
}
</style>
