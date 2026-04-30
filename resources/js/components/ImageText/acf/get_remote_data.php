<?php

if (!function_exists('colby_block_image_text_scale_factor')) {
    function colby_block_image_text_scale_factor($scale): float
    {
        return match ((string) ($scale ?: '100')) {
            '75' => 0.75,
            '50' => 0.5,
            '25' => 0.25,
            default => 1.0,
        };
    }
}

if (!function_exists('colby_block_image_text_resolve_local_path')) {
    function colby_block_image_text_resolve_local_path(string $url): string
    {
        if ($url === '') {
            return '';
        }

        if (str_starts_with($url, home_url())) {
            return ABSPATH . ltrim(str_replace(home_url(), '', $url), '/');
        }

        if (str_starts_with($url, site_url())) {
            return ABSPATH . ltrim(str_replace(site_url(), '', $url), '/');
        }

        if (str_starts_with($url, '/')) {
            return ABSPATH . ltrim($url, '/');
        }

        return $url;
    }
}

if (!function_exists('colby_block_image_text_get_path_dimensions')) {
    function colby_block_image_text_get_path_dimensions(string $image_path): array
    {
        $path = colby_block_image_text_resolve_local_path($image_path);

        if (!$path || !file_exists($path)) {
            return [
                'width' => 0,
                'height' => 0,
            ];
        }

        $size = @getimagesize($path);

        if (!$size) {
            return [
                'width' => 0,
                'height' => 0,
            ];
        }

        return [
            'width' => (int) $size[0],
            'height' => (int) $size[1],
        ];
    }
}

if (!function_exists('colby_block_image_text_get_base_image')) {
    function colby_block_image_text_get_base_image(array $data): array
    {
        $image = $data['image'] ?? null;
        $image_path = $data['image_path'] ?? '';

        if (is_array($image) && !empty($image['url'])) {
            return [
                'src' => $image['url'],
                'alt' => $image['alt'] ?? '',
                'caption' => $data['media_caption'] ?? ($image['caption'] ?? ''),
                'width' => (int) ($image['width'] ?? 0),
                'height' => (int) ($image['height'] ?? 0),
                'source' => 'image',
            ];
        }

        if (!empty($image_path)) {
            $dimensions = colby_block_image_text_get_path_dimensions($image_path);

            return [
                'src' => $image_path,
                'alt' => '',
                'caption' => $data['caption'] ?? '',
                'width' => $dimensions['width'],
                'height' => $dimensions['height'],
                'source' => 'image_path',
            ];
        }

        return [
            'src' => '',
            'alt' => '',
            'caption' => '',
            'width' => 0,
            'height' => 0,
            'source' => '',
        ];
    }
}

if (!function_exists('colby_block_image_text_normalize_image')) {
    function colby_block_image_text_normalize_image(array $data): array
    {
        $scale = (string) ($data['image_scale'] ?? '100');
        $scale_factor = colby_block_image_text_scale_factor($scale);

        $base = colby_block_image_text_get_base_image($data);

        $scaled_width = $base['width'] > 0
            ? (int) round($base['width'] * $scale_factor)
            : 0;

        $scaled_height = $base['height'] > 0
            ? (int) round($base['height'] * $scale_factor)
            : 0;

        $container_width = 920 * $scale_factor;

        if ($scaled_width <= 0) {
            $image_flex_basis = 'auto';
            $text_flex_basis = '100%';
        } else {
            $image_flex_basis = $scaled_width . 'px';

            if ($scale === '100' && $scaled_width > $container_width) {
                $text_flex_basis = '100%';
            } elseif ($scaled_width < $container_width) {
                $text_flex_basis = 'calc(100% - ' . $scaled_width . 'px - 1rem)';
            } else {
                $text_flex_basis = 'calc(100% - ' . $scale . '% - 1rem)';
            }
        }

        return [
            'src' => $base['src'],
            'alt' => $base['alt'],
            'caption' => $base['caption'],
            'width' => $scaled_width,
            'height' => $scaled_height,
            'caption_width' => $scaled_width,
            'image_flex_basis' => $image_flex_basis,
            'text_flex_basis' => $text_flex_basis,
            'scale' => $scale,
            'scale_factor' => $scale_factor,
            'source' => $base['source'],
        ];
    }
}

if (!function_exists('colby_block_image_text_get_remote_data')) {
    function colby_block_image_text_get_remote_data(array $data, int $index, array $block = []): array
    {
        $data['image_data'] = colby_block_image_text_normalize_image($data);
        $data['hydrated_from_server'] = true;

        return $data;
    }
}