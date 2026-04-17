<!-- Footer.vue -->
<template>
  <footer v-if="footerStyle === 'colby.edu'" class="footer space-y-14 bg-indigo pt-14 pb-14">
    <div
      class="footer__inner mx-auto my-0 w-full max-w-screen-2xl space-y-8 gap-x-10 px-5 md:grid md:grid-cols-12 md:space-y-0"
    >
      <div
        class="footer__left flex items-start justify-between border-solid border-indigo-900 md:col-span-5 md:justify-start md:space-x-8 md:border-r lg:space-x-12"
      >
        <div>
          <ColbyLogo v-if="logo.length == 0" :url="url" fillColor="--color-white" />
          <img v-else :src="logo" :style="logoStyle"></img>
          <AthleticsLogo class="block lg:hidden" />
        </div>

        <address
          class="footer__address w-[225px] space-y-2 font-body text-20 leading-140 font-normal text-[#b7c2d5] not-italic md:w-[120px] md:text-12"
        >
          <div v-html="address.text"></div>
          <a
            class="block transition-all duration-200 ease-in-out hover:text-white hover:underline"
            href="tel:{{ phone }}"
            >{{ phone }}</a
          >
        </address>
        <!-- Athletics logo (desktop / lg+) -->
        <AthleticsLogo class="hidden lg:block" />
      </div>
      <div class="footer__right md:col-span-6 lg:col-start-7">
        <ul
          class="footer__links space-between flex flex-wrap border-y border-solid border-[#365185] pt-8 pb-4 md:border-y-0 md:pt-0 md:pb-0"
        >
          <li
            v-for="(item, index) in menus.footer"
            :key="index"
            class="mb-4 basis-1/2 list-none flex-col font-body text-16 leading-130 font-normal text-[#b7c2d5] md:basis-1/2 md:text-14 lg:basis-1/4 min-w-[44px] min-h-[44px] inline-flex items-left justify-center"
          >
            <a
              :href="item.url"
              class="text-[#b7c2d5] transition-all duration-200 ease-in-out hover:text-white hover:underline h-full"
            >
              {{ item.title }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="mx-auto mt-6 w-full max-w-screen-2xl space-y-8 md:space-y-0">
      <div
        class="flex flex-col items-center justify-start px-5 md:grid md:grid-cols-12 md:px-0"
      >
        <!-- Action Menu -->
        <ActionMenu :menu="menus.action" />

        <!-- Newsletter & Social -->
        <div
          class="col-span-8 flex w-full items-center justify-start md:justify-end"
        >
          <div>
            <!-- Newsletter Button -->
            <Button
              size="small"
              type="dark"
              url="https://news.colby.edu/newsletter/"
              title="Newsletter"
            />
          </div>
          <div class="flex w-72 items-center">
            <!-- Social Menu -->
            <SocialMenu :menu="menus.social" />
          </div>
        </div>
      </div>
    </div>
    <div class="nondescrimination-message hidden py-8 px-10 bg-[#eef4ff] space-y-4 mx-auto">
      <div class="footer__inner md:grid md:grid-cols-1 gap-x-1 max-w-screen-2xl w-full px-5 my-0 mx-auto space-y-8 md:space-y-0 font-normal">
        <div>
          <div><b class="text-indigo">NOTICE OF NONDISCRIMINATORY POLICY AS TO STUDENTS</b></div>
          <div class="text-indigo-800">Colby College admits students of any race, color, national and ethnic origin to all the rights, privileges, programs, and activities generally accorded or made available to students at the school. It does not discriminate on the basis of race, color, national and ethnic origin in administration of its educational policies, admissions policies, scholarship and loan programs, and athletic and other school-administered programs. See <a href="https://afa.colby.edu/nondiscrimination-policy/" target="_blank" class="italic underline text-indigo hover:no-underline hover:text-indigo-800">Colby's Nondiscrimination Policy and Compliance Information.</a></div>
        </div>
      </div>
    </div>
  </footer>
  <footer v-else class="footer-child bg-indigo py-14">
    <div class="footer__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 my-0 mx-auto">
      <div class="footer__left md:col-span-6">
        <a 
          class="block hover:text-white hover:underline transition-all duration-200 ease-in-out mb-4" 
          :href="address?.url" 
          aria-label="Go to the homepage"
        >
          <ColbyLogo v-if="logo.length == 0" :url="url" fillColor="--color-white" />

          <img v-else :src="logo" :style="logoStyle" />
        </a>
        <p class="font-body font-normal text-14 leading-130 text-gray-500 mt-8 md:mt-7" v-html=" address?.text" />
      </div>
      
      <div class="footer__right md:col-start-8 md:col-span-5 mt-6 md:mt-0">
        <ul
          class="footer__links space-between flex flex-wrap border-y border-solid border-[#365185] pt-8 pb-4 md:border-y-0 md:pt-0 md:pb-0 footer__links grid grid-cols-2 gap-4"
        >

        <li
          v-for="(item, index) in menus.footer"
          :key="index"
          class="col-span-1 font-body font-normal text-18 leading-120"
        >
          <a class="flex items-center min-h-[44px] text-gray-200 hover:text-white hover:underline transition-all duration-200 ease-in-out" :href="item.url">{{ item.title }}</a>
        
        </li>
        </ul>
      </div>
      <div class="col-span-12 pb-8 md:pb-12 border-b border-gray-800"></div>
    </div>

    <div class="footer__inner md:grid md:grid-cols-12 gap-x-10 max-w-screen-2xl w-full px-5 mt-12 mx-auto">
      <div class="md:col-span-12 md:flex justify-between items-center">
        
        <ul class="footer__utility flex flex-wrap md:flex-nowrap gap-6 md:gap-0 md:space-x-6">
          <li 
            v-for="(item, index) in menus.action" 
            :key="index" 
            class="inline-block"
          >
            <a 
              class="btn group inline-flex flex-row items-center space-x-1.5 rounded border border-solid border-white font-body font-normal text-14 leading-130 !no-underline text-white bg-indigo focus:outline focus:outline-2 focus:outline-canary outline-offset-[-1px] py-1.5 px-4 transition-all duration-200 ease-in-out min-w-[44px] min-h-[44px]" 
              :href="item.url"
            >
              <Icon :name="item.title.toLowerCase()" class="fill-white w-3.5 h-3.5" />
              <span class="btn__text">
                {{ item.title }}
                <div class="btn__border block bg-white h-px w-0 group-hover:w-full transition-all duration-200 ease-in-out"></div>
              </span>
            </a>
          </li>
        </ul>

        <ul class="footer__socials flex space-x-4 mt-10 md:mt-0">
          <li 
            v-for="(item, index) in menus.social" 
            :key="index" 
            class="text-[0]"
          >
            <a class="flex text-indigo-100" :href="item.platform.url">
              <Icon 
                :name="item.platform.title.toLowerCase()" 
                class="fill-indigo-100 hover:fill-indigo-500 max-w-6 md:max-w-4 max-h-6 md:max-h-4 w-full transition-all duration-200 ease-in-out" 
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

const props = defineProps({
  menus: { type: Object, default: () => ({}) },
  url: { type: String, default: "" },
  address: { type: Object, default: () => ({}) },
  phone: { type: String, default: "" },
  logo: { type: String, default: "" },
  logoStyle: { type: String, default: "" },
  footerStyle: { type: String, default: "" },
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
