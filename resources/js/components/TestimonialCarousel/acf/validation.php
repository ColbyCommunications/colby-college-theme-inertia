<?php

return function (array $data, array $block): ?WP_Error {
    $items_count = isset($data['items']) ? (int) $data['items'] : 0;

    if ($items_count < 1) {
        return new WP_Error(
            'colby_invalid_testimonial_carousel',
            __('Testimonial Carousel requires at least one item before saving.', 'colby')
        );
    }

    for ($i = 0; $i < $items_count; $i++) {
        $errors = [];

        if (empty($data["items_{$i}_image"])) {
            $errors[] = 'image';
        }

        if (empty($data["items_{$i}_testimonial_quote"])) {
            $errors[] = 'quote';
        }

        if (empty($data["items_{$i}_testimonial_name"])) {
            $errors[] = 'name';
        }

        if (!empty($errors)) {
            return new WP_Error(
                'colby_invalid_testimonial_carousel',
                sprintf(__('Testimonial Carousel item %d is missing: %s.', 'colby'), $i + 1, implode(', ', $errors))
            );
        }
    }

    return null;
};
