<?php

return function (array $data, array $block): ?WP_Error {
    $items_count = isset($data['items']) ? (int) $data['items'] : 0;

    for ($i = 0; $i < $items_count; $i++) {
        if (empty($data["items_{$i}_heading"])) {
            return new WP_Error(
                'colby_invalid_stat_group',
                sprintf(__('Stat Group item %d requires a heading.', 'colby'), $i + 1)
            );
        }
    }

    return null;
};
