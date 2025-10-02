<template>
    <div>
        <Head v-if="$slots.head">
            <slot name="head" />
        </Head>

        <a href="#main" class="skip-to-main">Skip to Main Content</a>

        <!-- Global alert (replaces {% include 'alert.twig' with global_alert %}) -->
        <Alert v-if="global_alert && global_alert.active" v-bind="global_alert" />

        <!-- Header (replaces {% include 'header.twig' %}) -->
        <SiteHeader
            :utility="menus.utility ? menus.utility : []"
            :main="menus.primary ? menus.primary : []"
        />

        <!-- Main (replaces {% block content %}...{% endblock %}) -->
        <main
            id="main"
            class="colby-page [&>div+div]:mt-20 md:[&>div+div]:mt-[100px] pb-20 md:pb-[100px]"
        >
            <slot>
                <!-- default fallback -->
                Sorry, no content
            </slot>
        </main>
        <SiteFooter
            :address="global_address"
            :phone="global_phone"
            :main="menus.footer ? menus.footer : []"
            :social="global_social"
        />
    </div>
</template>
<script setup>
    import { Head, usePage } from '@inertiajs/vue3';

    // Replace these with your actual component paths
    import Alert from '../../components/Alert/Alert.vue';
    import SiteHeader from '../../components/SiteHeader/SiteHeader.vue';
    import SiteFooter from '../../components/SiteFooter/SiteFooter.vue';

    const props = defineProps({
        // Matches your Twig variables; pass them from your Inertia controllers
        global_alert: { type: Object, default: null },

        utility_menu: { type: Object, default: () => ({ items: [] }) },
        main_menu: { type: Object, default: () => ({ items: [] }) },

        footer_menu: { type: Object, default: () => ({ items: [] }) },
        action_menu: { type: Object, default: () => ({ items: [] }) },

        global_address: { type: [String, Object], default: '' },
        global_phone: { type: [String, Object], default: '' },
        global_social: { type: [Array, Object], default: () => [] },
    });

    const page = usePage();
    const site = page.props.site;
    const menus = page.props.menus;
    console.log(page.props);
</script>

<style>
    /* carry over skip link behavior if you had it in CSS */
    .skip-to-main {
        position: absolute;
        left: -9999px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
    }
    .skip-to-main:focus {
        position: static;
        width: auto;
        height: auto;
    }
</style>
