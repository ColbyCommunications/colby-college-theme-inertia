<!-- Footer.vue -->
<template>
  <footer class="footer space-y-14 bg-indigo pt-14 pb-14">
    <div
      class="footer__inner mx-auto my-0 w-full max-w-screen-2xl space-y-8 gap-x-10 px-5 md:grid md:grid-cols-12 md:space-y-0"
    >
      <div
        class="footer__left flex items-start justify-between border-solid border-indigo-900 md:col-span-5 md:justify-start md:space-x-8 md:border-r lg:space-x-12"
      >
        <div>
          <ColbyLogo :url="url" fillColor="--color-white" />
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
              class="text-[#b7c2d5] transition-all duration-200 ease-in-out hover:text-white hover:underline "
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
</template>

<script setup>
import ColbyLogo from "../Logos/ColbyLogo.vue";
import AthleticsLogo from "../Logos/AthleticsLogo.vue";
import ActionMenu from "../Menus/ActionMenu.vue";
import Button from "../Button/Button.vue";
import SocialMenu from "../Menus/SocialMenu.vue";

const props = defineProps({
  menus: { type: Object, default: () => ({}) },
  url: { type: String, default: "" },
  address: { type: Object, default: () => ({}) },
  phone: { type: String, default: "" },
});
</script>
<style scoped>
  .home .nondescrimination-message {
    display: block !important;
  }

  .home .footer {
    padding-bottom: 0rem !important;
  }
</style>
