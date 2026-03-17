<?php

return function (array $data, array $block): ?WP_Error {
    $errors = [];

    if (empty($data['heading'])) {
        $errors[] = 'heading';
    }

    if (empty($data['paragraph'])) {
        $errors[] = 'paragraph';
    }

    if (empty($data['image'])) {
        $errors[] = 'image';
    }

    if (!empty($errors)) {
        return new WP_Error(
            'colby_invalid_full_bleed_image',
            sprintf(__('Full Bleed Image requires the following fields before saving: %s.', 'colby'), implode(', ', $errors))
        );
    }

    return null;
};
