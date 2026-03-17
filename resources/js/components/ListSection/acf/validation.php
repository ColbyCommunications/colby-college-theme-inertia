<?php

return function (array $data, array $block): ?WP_Error {
    $lists_count = isset($data['lists']) ? (int) $data['lists'] : 0;

    if ($lists_count < 1) {
        return new WP_Error(
            'colby_invalid_list_section',
            __('List Section requires at least one list before saving.', 'colby')
        );
    }

    for ($i = 0; $i < $lists_count; $i++) {
        $items_count = isset($data["lists_{$i}_items"]) ? (int) $data["lists_{$i}_items"] : 0;
        if ($items_count < 1) {
            return new WP_Error(
                'colby_invalid_list_section',
                sprintf(__('List Section list %d requires at least one item.', 'colby'), $i + 1)
            );
        }
    }

    return null;
};
