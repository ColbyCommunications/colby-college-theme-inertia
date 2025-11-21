<?php

function acf_normalize_types(array $data, $parent_key = null): array
{
    foreach ($data as $key => $value) {

        // Skip nested arrays (handled recursively)
        if (is_array($value)) {
            $data[$key] = acf_normalize_types($value, $key);
            continue;
        }

        // Fetch ACF field object if available
        $field = get_field_object($key) ?: get_field_object($parent_key);

        if (!$field || empty($field['type'])) {
            continue;
        }

        switch ($field['type']) {
            case 'true_false':
                $data[$key] = filter_var($value, FILTER_VALIDATE_BOOLEAN);
                break;

            case 'number':
            case 'range':
                $data[$key] = is_numeric($value) ? $value + 0 : null;
                break;

            case 'select':
            case 'radio':
                if ($field['multiple']) {
                    $data[$key] = is_array($value) ? $value : [$value];
                }
                break;

            case 'post_object':
            case 'relationship':
                // They come as strings—we normalize to int
                if (is_numeric($value)) {
                    $data[$key] = (int)$value;
                }
                break;

            case 'image':
                // You already replace IDs with URLs later
                if (is_numeric($value)) {
                    $data[$key] = (int)$value;
                }
                break;

            case 'text':
            case 'textarea':
            case 'wysiwyg':
            default:
                // Leave as string
                break;
        }
    }
    return $data;
}