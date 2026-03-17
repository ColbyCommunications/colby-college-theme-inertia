<?php

return function (array $data, array $block): ?WP_Error {
    if (empty($data['image'])) {
        return new WP_Error(
            'colby_invalid_facts_figures',
            __('Facts & Figures requires an image before saving.', 'colby')
        );
    }

    return null;
};
