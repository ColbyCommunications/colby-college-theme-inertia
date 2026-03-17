<?php

return function (array $data, array $block): ?WP_Error {
    $errors = [];

    if (empty($data['heading'])) {
        $errors[] = 'heading';
    }

    if (empty($data['paragraph'])) {
        $errors[] = 'paragraph';
    }

    if (empty($data['caption'])) {
        $errors[] = 'caption';
    }

    if (empty($data['post_image'])) {
        $errors[] = 'post > image';
    }

    if (!empty($errors)) {
        return new WP_Error(
            'colby_invalid_featured_post',
            sprintf(__('Featured Post requires the following fields before saving: %s.', 'colby'), implode(', ', $errors))
        );
    }

    return null;
};
