<?php

return function (array $data, array $block): ?WP_Error {
    if (empty($data['image'])) {
        return new WP_Error(
            'colby_invalid_hw_image_section',
            __('HW Image Section requires an image before saving.', 'colby')
        );
    }

    return null;
};
