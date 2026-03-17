<?php

return function (array $data, array $block): ?WP_Error {
    $render_api = colby_block_validation_is_truthy($data['render_api'] ?? false);

    if (!$render_api) {
        return null;
    }

    $errors = [];

    if (empty($data['api'])) {
        $errors[] = 'api';
    }

    if (($data['api'] ?? '') === 'Department Courses' && empty($data['department_code'])) {
        $errors[] = 'department_code';
    }

    if (!empty($errors)) {
        return new WP_Error(
            'colby_invalid_table',
            sprintf(__('Table requires the following fields before saving: %s.', 'colby'), implode(', ', $errors))
        );
    }

    return null;
};
