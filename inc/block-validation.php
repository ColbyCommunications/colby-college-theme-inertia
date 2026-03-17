<?php

function colby_block_name_to_folder(string $block_name): ?string {
    if (strpos($block_name, 'acf/') !== 0) {
        return null;
    }
    $slug = substr($block_name, 4);
    return implode('', array_map('ucfirst', explode('-', $slug)));
}

function colby_block_validation_is_truthy($value): bool {
    return in_array($value, [true, 1, '1', 'true', 'yes', 'on'], true);
}

function colby_validate_blocks(array $blocks): array {
    static $validators = [];
    $errors = [];

    foreach ($blocks as $block) {
        $block_name = $block['blockName'] ?? '';
        $folder = colby_block_name_to_folder($block_name);

        if ($folder) {
            if (!array_key_exists($folder, $validators)) {
                $path = get_theme_file_path("resources/js/components/{$folder}/acf/validation.php");
                $validators[$folder] = file_exists($path) ? include $path : null;
            }

            if (is_callable($validators[$folder])) {
                $data = $block['attrs']['data'] ?? [];
                $result = $validators[$folder]($data, $block);
                if (is_wp_error($result)) {
                    $errors[] = $result;
                }
            }
        }

        if (!empty($block['innerBlocks'])) {
            $errors = array_merge($errors, colby_validate_blocks($block['innerBlocks']));
        }
    }

    return $errors;
}

function colby_get_request_content(WP_REST_Request $request): string {
    $content_sources = [
        $request->get_param('content'),
        $request->get_json_params()['content'] ?? null,
        $request->get_body_params()['content'] ?? null,
    ];

    foreach ($content_sources as $content_param) {
        if (is_array($content_param) && !empty($content_param['raw'])) {
            return (string) $content_param['raw'];
        }

        if (is_string($content_param) && $content_param !== '') {
            return $content_param;
        }
    }

    $body = $request->get_body();
    if ($body) {
        $decoded_body = json_decode($body, true);
        $content_param = $decoded_body['content'] ?? null;

        if (is_array($content_param) && !empty($content_param['raw'])) {
            return (string) $content_param['raw'];
        }

        if (is_string($content_param) && $content_param !== '') {
            return $content_param;
        }
    }

    return '';
}

function colby_get_block_validation_error(WP_REST_Request $request): ?WP_Error {
    $content = colby_get_request_content($request);

    if (!$content) {
        return null;
    }

    $blocks = parse_blocks($content);
    $errors = colby_validate_blocks($blocks);

    if (!empty($errors)) {
        $messages = array_map(function ($error) {
            return $error->get_error_message();
        }, $errors);
        $message = implode("\n", $messages);

        if (count($messages) > 1) {
            $message = "\n" . $message;
        }

        return new WP_Error(
            'colby_block_validation_failed',
            $message,
            ['status' => 400]
        );
    }

    return null;
}

function colby_validate_blocks_on_save($prepared_post, WP_REST_Request $request) {
    $validation_error = colby_get_block_validation_error($request);

    if ($validation_error) {
        return $validation_error;
    }

    return $prepared_post;
}

add_action('init', function () {
    $post_types = get_post_types(['show_in_rest' => true], 'names');

    foreach ($post_types as $post_type) {
        if (!post_type_supports($post_type, 'editor')) {
            continue;
        }

        add_filter("rest_pre_insert_{$post_type}", 'colby_validate_blocks_on_save', 10, 2);
    }
});

add_filter('rest_request_before_callbacks', function ($response, array $handler, WP_REST_Request $request) {
    if (strpos($request->get_route(), '/autosaves') === false) {
        return $response;
    }

    $validation_error = colby_get_block_validation_error($request);

    return $validation_error ?: $response;
}, 10, 3);

add_action('enqueue_block_editor_assets', function () {
    wp_register_style('colby-block-validation-editor', false);
    wp_enqueue_style('colby-block-validation-editor');
    wp_add_inline_style(
        'colby-block-validation-editor',
        '.components-notice__content, .components-snackbar__content { white-space: pre-line; }'
    );
});
