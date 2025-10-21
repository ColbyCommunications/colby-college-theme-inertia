<!-- resources/js/components/SiteHeader.vue -->
<template>
    <div class="header__inner flex justify-between max-w-screen-2xl w-ful px-5">
        <!-- Left -->
        <div class="header__left flex items-center justify-between w-full md:w-auto">
            <a href="/" aria-label="Go to colby.edu homepage">
                <Logo />
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
    import { ref, computed } from 'vue';
    import { usePage } from '@inertiajs/vue3';
    import ActionMenu from '../ActionMenu/ActionMenu.vue';
    import Logo from '../Logo/Logo.vue';

    // Reactive toggle for mobile menu
    const active = ref(false);
    const toggleActive = () => {
        active.value = !active.value;
    };

    // Access global Inertia page props (shared WP menus and site info)
    const page = usePage();

    // Site info (e.g., home URL)
    const site = computed(() => page.props.site || { url: '/' });

    // Menus
    const main = computed(() => page.props.menus?.main || []);
    const utility = computed(() => page.props.menus?.utility || []);

    // Optional presentation props
    const logoClass = 'fill-indigo w-[120px] md:w-[100px]';
    const actionMenuMobileBreakpoints = 'flex md:hidden';
    const actionMenuDesktopBreakpoints = 'hidden md:block float-right';

    // Current page detection for active menu items
    const isCurrent = (item) => {
        try {
            const here = new URL(window.location.href);
            const there = new URL(item.url, window.location.origin);
            return here.pathname.replace(/\/+$/, '') === there.pathname.replace(/\/+$/, '');
        } catch {
            return false;
        }
    };

    // Debugging
    console.log('Inertia menus:', page.props.menus);
    console.log('Main menu:', main.value);
    console.log('Utility menu:', utility.value);
    console.log('Site info:', site.value);
</script>
