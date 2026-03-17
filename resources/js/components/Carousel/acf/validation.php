<?php

return function (array $data, array $block): ?WP_Error {
    $errors = [];
    $display_method = (string) ($data['display_posts_method'] ?? '');
    $render_api = colby_block_validation_is_truthy($data['render_api'] ?? false);

    if (empty($data['heading'])) {
        $errors[] = 'heading';
    }

    if (empty($data['paragraph'])) {
        $errors[] = 'paragraph';
    }

    $is_api_mode = $display_method === 'api' || ($display_method === '' && $render_api);
    if ($is_api_mode && $render_api && empty($data['api'])) {
        $errors[] = 'api';
    }

    if ($display_method === 'manual') {
        $items_count = isset($data['items']) ? (int) $data['items'] : 0;
        if ($items_count < 1) {
            $errors[] = 'items';
        }
    }

    if (!empty($errors)) {
        return new WP_Error(
            'colby_invalid_carousel',
            sprintf(__('Carousel requires the following fields before saving: %s.', 'colby'), implode(', ', $errors))
        );
    }

    return null;
};
