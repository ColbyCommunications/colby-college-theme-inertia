<!-- resources/js/components/SiteHeader.vue -->
<template>
    <div class="header__inner flex justify-between max-w-screen-2xl w-ful px-5">
        <!-- Left -->
        <div class="header__left flex items-center justify-between w-full md:w-auto">
            <a href="/" aria-label="Go to colby.edu homepage">
                <svg
                    role="img"
                    viewBox="0 0 98 50"
                    :class="logoClass"
                    style="enable-background: new 0 0 98 50"
                    xml:space="preserve"
                >
                    <title>Colby College logo</title>
                    <desc>Go to colby.edu homepage</desc>
                    <path
                        d="m53.3 0-6.4.7v1h1.2c2 0 2.5.8 2.5 2.7v26.2c0 2.9-.6 3.8-2.5 3.8h-1v1h10.4v-1H57c-2.3 0-2.9-.7-2.9-2.8V0h-.8zm9.8 0-6 .7v1c3 0 3.3.4 3.3 3.4v29.8c1.9.4 3.9.6 5.8.6 9.6 0 12.7-6.2 12.7-10.9 0-5.4-3.8-9.7-8.7-9.7-1.2 0-2.4.3-3.5.8s-2 1.2-2.8 2.2V0h-.8zM15.7 2.3C6.6 2.3 0 9.8 0 20c0 10.7 7.6 16 14.9 16 5.6 0 10.3-3 12.4-7.9.5 2.2 1.8 4.2 3.6 5.6 1.8 1.4 4 2.1 6.3 2.1 5.9 0 10.2-4.5 10.2-10.5S43 14.8 37.2 14.8 27 19.3 27 25.4l-.3 1.6c-2.3 4.7-5.8 7.1-10.6 7.1C9.3 34 4.7 27.6 4.7 18c0-8.2 3.9-14.5 11.2-14.5 5.2 0 8.3 2.6 9.8 8.7h.9V2.6h-.8c-.1.3-.4.6-.7.8-.3.2-.6.3-1 .2-1.8 0-4.7-1.3-8.4-1.3zm61.8 13.1v1c2.2.1 2.9.7 3.8 3L88 35.8 85.5 43c-1.6 4.5-4.7 3.1-5.5 2.8l-.2 4c.4.2.8.3 1.3.2 2.3 0 3.6-1 5.1-5.6L93.6 21c1.1-3.3 2.3-4.7 4.3-4.7v-1h-6.6v1c2.1.1 2.2 1.4 1.5 3.8l-3.3 10.5L85 19.4c-.7-1.7-.1-2.8 1.3-3v-1h-8.8zm-40.3.5c4.3 0 6.3 4.4 6.3 9.4 0 4.8-1.9 9.4-6.3 9.4-4.3 0-6.3-4.3-6.3-9.4 0-5.7 2.4-9.4 6.3-9.4zm31.6.5c2.9 0 6.2 2.9 6.2 8.5 0 6.8-3.8 9.5-7.9 9.5-2.6 0-3.2-1.2-3.2-3.9V19.2c1.6-1.9 3-2.8 4.9-2.8z"
                    />
                </svg>
            </a>

            <!-- Action menu (mobile) -->
            <ActionMenu :class="actionMenuMobileBreakpoints" />

            <!-- Hamburger -->
            <div class="header__hamburger-group flex lg:hidden items-center space-x-4">
                <label class="header__hamburger-label font-body font-normal text-20 text-indigo-800"
                    >Menu</label
                >

                <button
                    class="header__hamburger flex items-center justify-center w-[56px] h-[52px] text-[0] bg-indigo-100 rounded-sm"
                    @click="toggleActive"
                    aria-label="Toggle menu"
                    :aria-expanded="active ? 'true' : 'false'"
                    :aria-controls="'header-menus'"
                >
                    <span
                        class="relative block w-6 h-0.5 bg-indigo transition-all duration-200 ease-in-out"
                        :class="{ 'bg-transparent': active }"
                    >
                        <span
                            class="absolute left-0 w-full h-full bg-indigo origin-center top-[-6px] transition-all duration-200 ease-in-out"
                            :class="{ '!top-0 rotate-45': active }"
                        ></span>
                        <span
                            class="absolute left-0 w-full h-full bg-indigo origin-center top-[6px] transition-all duration-200 ease-in-out"
                            :class="{ '!top-0 rotate-[-45deg]': active }"
                        ></span>
                    </span>
                    Menu Button
                </button>
            </div>
        </div>

        <!-- Menus (wrapper) -->
        <div id="header-menus" class="header__menus">
            <!-- Mobile column -->
            <div
                class="md:hidden w-full md:w-0 flex flex-col justify-between h-[calc(100vh_-_145px)]"
            >
                <div class="py-12 overflow-auto">
                    <ul
                        class="header__main flex md:flex-row flex-col justify-center md:justify-end md:h-auto md:space-x-12 md:space-y-0 space-y-6 md:px-6 pl-16 md:px-4 w-full md:w-auto overflow-y-auto"
                    >
                        <li
                            v-for="item in main"
                            :key="item.id || item.url || item.title"
                            class="font-extended font-normal text-20 md:text-14 leading-110 !ml-8 lg:!ml-12 md:[&:first-child]:!ml-0"
                        >
                            <a
                                class="block md:py-7 text-indigo-800 hover:text-indigo-1000 border-transparent md:hover:border-azure md:focus:border-canary md:outline-0 transition-all duration-200 ease-in-out"
                                :class="{ '!text-indigo md:border-azure': isCurrent(item) }"
                                :href="item.url"
                                :target="item.target || undefined"
                                >{{ item.title }}</a
                            >
                        </li>
                    </ul>
                </div>

                <!-- Mobile utility -->
                <div class="bg-indigo-100 w-full p-5 pb-20">
                    <ul
                        class="grid md:inline-flex grid-cols-3 md:grid-cols-none grid-rows-2 md:grid-rows-none gap-2 md:gap-0 w-full md:w-auto md:space-x-6"
                    >
                        <li
                            v-for="u in utility"
                            :key="u.id || u.url || u.title"
                            class="font-body font-normal text-16 md:text-10 leading-110"
                        >
                            <a
                                class="block py-2 text-indigo-800 hover:text-indigo-1000 hover:underline transition-all duration-200 ease-in-out"
                                :href="u.url"
                            >
                                {{ u.title }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Desktop column -->
            <div class="hidden md:visible md:block md:w-full w-0">
                <nav
                    class="header__utility flex md:block h-[118px] md:h-auto pt-4 md:pt-0 px-5 bg-indigo-100"
                    aria-label="Utility menu"
                >
                    <ul
                        class="grid md:inline-flex grid-cols-3 md:grid-cols-none grid-rows-2 md:grid-rows-none gap-x-5 md:gap-0 w-full md:w-auto md:space-x-6"
                    >
                        <li
                            v-for="u in utility"
                            :key="u.id || u.url || u.title"
                            class="font-body font-normal text-16 md:text-10 leading-110 list-none"
                        >
                            <a
                                class="block py-2 text-indigo-800 hover:text-indigo-1000 hover:underline transition-all duration-200 ease-in-out"
                                :href="u.url"
                            >
                                {{ u.title }}
                            </a>
                        </li>
                    </ul>

                    <!-- Action menu (desktop) -->
                    <ActionMenu :class="actionMenuDesktopBreakpoints" />
                </nav>

                <ul
                    class="header__main flex md:flex-row flex-col justify-center md:justify-end h-[calc(100%_-_170px)] md:h-auto md:space-x-12 md:space-y-0 space-y-6 md:px-6 pl-24 md:px-4 w-full overflow-y-auto"
                    aria-label="Main menu"
                >
                    <li
                        v-for="item in main"
                        :key="item.id || item.url || item.title"
                        class="font-extended font-normal text-24 md:text-14 leading-110 !ml-6 lg:!ml-12 md:[&:first-child]:!ml-0 list-none"
                    >
                        <a
                            class="block md:py-7 text-indigo-800 hover:text-indigo-1000 md:hover:border-canary md:focus:border-azure md:outline-0 transition-all duration-200 ease-in-out"
                            :class="{ '!text-indigo md:border-azure': isCurrent(item) }"
                            :href="item.url"
                            :target="item.target || undefined"
                            >{{ item.title }}</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import ActionMenu from '../ActionMenu/ActionMenu.vue';

    const props = defineProps({
        main: { type: Array, default: () => [] }, // [{ id?, title, url, target? }, ...]
        utility: { type: Array, default: () => [] }, // [{ id?, title, url }, ...]
        // optional presentation props:
        logoClass: { type: String, default: 'fill-indigo w-[120px] md:w-[100px]' },
        actionMenuMobileBreakpoints: { type: String, default: 'flex md:hidden' },
        actionMenuDesktopBreakpoints: { type: String, default: 'hidden md:block float-right' },
    });

    const active = ref(false);
    const toggleActive = () => {
        active.value = !active.value;
    };

    // “current” detection similar to header.checkUrl('{{ item.title }}') in Twig.
    // Improve as needed (e.g., match by URL path or WP current menu item).
    const isCurrent = (item) => {
        try {
            const here = new URL(window.location.href);
            const there = new URL(item.url, window.location.origin);
            // match by path or direct link equality
            return here.pathname.replace(/\/+$/, '') === there.pathname.replace(/\/+$/, '');
        } catch {
            return false;
        }
    };
</script>
