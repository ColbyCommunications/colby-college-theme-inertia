<?php

return function (array $data, array $block): ?WP_Error {
    $errors = [];

    if (empty($data['heading'])) {
        $errors[] = 'heading';
    }

    if (empty($data['image'])) {
        $errors[] = 'image';
    }

    if (!empty($errors)) {
        return new WP_Error(
            'colby_invalid_home_hero',
            sprintf(__('Home Hero requires the following fields before saving: %s.', 'colby'), implode(', ', $errors))
        );
    }

    return null;
};
