<?php

return function (array $data, array $block): ?WP_Error {
    $images_count = isset($data['images']) ? (int) $data['images'] : 0;

    if ($images_count < 1) {
        return new WP_Error(
            'colby_invalid_image_grid',
            __('Image Grid requires at least one image before saving.', 'colby')
        );
    }

    return null;
};
