<?php

return function (array $data, array $block): ?WP_Error {
    $render_api = colby_block_validation_is_truthy($data['render_api'] ?? false);
    $display_method = (string) ($data['display_posts_method'] ?? '');

    if ($render_api && $display_method === 'api' && empty($data['api'])) {
        return new WP_Error(
            'colby_invalid_article_section',
            __('Article Section requires an API selection when using API display method.', 'colby')
        );
    }

    return null;
};
