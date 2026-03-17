<?php

return function (array $data, array $block): ?WP_Error {
    $items_count = isset($data['items']) ? (int) $data['items'] : 0;

    if ($items_count < 1) {
        return new WP_Error(
            'colby_invalid_related_content',
            __('Related Content requires at least one item before saving.', 'colby')
        );
    }

    return null;
};
