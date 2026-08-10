<?php

/**
 * Whether the current request is an isolated TablePress iframe document.
 */
function colby_is_tablepress_iframe_request(): bool {
    if (!isset($_GET['tablepress_iframe_id'])) {
        return false;
    }

    $table_id = sanitize_text_field(
        wp_unslash($_GET['tablepress_iframe_id'])
    );

    if ($table_id === '') {
        return false;
    }

    /*
     * TablePress IDs are strings, not necessarily integers.
     *
     * Keep this deliberately restrictive because the value comes
     * directly from the URL.
     */
    return (bool) preg_match(
        '/^[A-Za-z0-9_-]+$/',
        $table_id
    );
}


/**
 * Render a TablePress table inside a small, same-origin HTML document.
 *
 * The table is rendered BEFORE wp_head() so TablePress can discover
 * the table and register all CSS, DataTables scripts, extensions,
 * and table-specific initialization before WordPress prints assets.
 */
function colby_render_tablepress_iframe(): void {
    if (!colby_is_tablepress_iframe_request()) {
        return;
    }

    $table_id = sanitize_text_field(
        wp_unslash($_GET['tablepress_iframe_id'])
    );

    /*
     * Make sure TablePress is actually available.
     */
    if (!function_exists('tablepress_get_table')) {
        status_header(503);

        wp_die(
            esc_html__(
                'The table service is currently unavailable.',
                'colby'
            ),
            esc_html__(
                'Table unavailable',
                'colby'
            ),
            array(
                'response' => 503,
            )
        );
    }

    /*
     * We don't want the WordPress admin bar inside the iframe.
     */
    add_filter(
        'show_admin_bar',
        '__return_false'
    );

    /*
     * Avoid caching an isolated interactive table document.
     */
    nocache_headers();

    /*
     * Important:
     *
     * Render the TablePress table BEFORE wp_head().
     *
     * TablePress uses this rendering pass to determine which
     * styles/scripts/DataTables configuration are required.
     */
    $table_html = tablepress_get_table(
        array(
            'id' => $table_id,
        )
    );

    if (
        !is_string($table_html)
        || trim($table_html) === ''
    ) {
        status_header(404);

        wp_die(
            esc_html__(
                'The requested table could not be found.',
                'colby'
            ),
            esc_html__(
                'Table not found',
                'colby'
            ),
            array(
                'response' => 404,
            )
        );
    }

    ?>
    <!doctype html>
    <html <?php language_attributes(); ?>>
    <head>
        <meta
            charset="<?php bloginfo('charset'); ?>"
        >

        <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
        >

        <?php wp_head(); ?>

        <style>
            html,
            body {
                width: 100%;
                max-width: none;
                margin: 0;
                padding: 0;
                background: transparent;
            }

            *,
            *::before,
            *::after {
                box-sizing: border-box;
            }

            body {
                padding: 5px;
                color: #1a1a1a;
                font-family:
                    "Libre Franklin",
                    -apple-system,
                    BlinkMacSystemFont,
                    "Segoe UI",
                    Roboto,
                    sans-serif;
                font-size: 16px;
            }

            /*
             * Make sure the TablePress/DataTables wrapper can use
             * the full iframe width.
             */
            .tablepress,
            .dt-container {
                width: 100%;
                max-width: none;
            }
        </style>
    </head>

    <body>
        <?php
        echo $table_html;
        // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
        ?>

        <?php wp_footer(); ?>

        <script>
        (() => {
            const parentOrigin = window.location.origin;

            let resizeFrame = 0;

            const getDocumentHeight = () => {
                return Math.max(
                    document.body?.scrollHeight || 0,
                    document.documentElement?.scrollHeight || 0
                );
            };

            const sendHeight = () => {
                window.cancelAnimationFrame(resizeFrame);

                resizeFrame = window.requestAnimationFrame(() => {
                    window.parent.postMessage(
                        {
                            type: 'tablepress_iframe_resize',
                            height: getDocumentHeight(),
                        },
                        parentOrigin
                    );
                });
            };

            /*
             * Initial measurements.
             */
            document.addEventListener(
                'DOMContentLoaded',
                sendHeight
            );

            window.addEventListener(
                'load',
                sendHeight
            );

            /*
             * ResizeObserver catches actual layout changes caused by:
             *
             * - pagination
             * - search/filtering
             * - responsive table behavior
             * - changing the number of visible rows
             * - DataTables initialization
             */
            if ('ResizeObserver' in window) {
                const resizeObserver =
                    new ResizeObserver(sendHeight);

                resizeObserver.observe(
                    document.documentElement
                );

                resizeObserver.observe(
                    document.body
                );
            }

            /*
             * MutationObserver catches DOM changes made by
             * DataTables and TablePress extensions.
             */
            const mutationObserver =
                new MutationObserver(sendHeight);

            mutationObserver.observe(
                document.body,
                {
                    childList: true,
                    subtree: true,
                    attributes: true,
                }
            );
        })();
        </script>
    </body>
    </html>
    <?php

    exit;
}


add_action(
    'template_redirect',
    'colby_render_tablepress_iframe',
    1
);