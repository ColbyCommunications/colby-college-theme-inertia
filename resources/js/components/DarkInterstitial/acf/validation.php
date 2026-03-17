<?php

return function (array $data, array $block): ?WP_Error {
    $images_count = isset($data['images']) ? (int) $data['images'] : 0;

    if ($images_count < 1) {
        return new WP_Error(
            'colby_invalid_dark_interstitial',
            __('Dark Interstitial requires at least one image before saving.', 'colby')
        );
    }

    for ($i = 0; $i < $images_count; $i++) {
        if (empty($data["images_{$i}_image"])) {
            return new WP_Error(
                'colby_invalid_dark_interstitial',
                sprintf(__('Dark Interstitial image row %d requires an image.', 'colby'), $i + 1)
            );
        }
    }

    return null;
};
