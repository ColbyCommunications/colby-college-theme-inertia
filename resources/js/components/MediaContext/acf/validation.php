<?php

return function (array $data, array $block): ?WP_Error {
    if (empty($data['image'])) {
        return new WP_Error(
            'colby_invalid_media_context',
            __('Media Context requires an image before saving.', 'colby')
        );
    }

    return null;
};
