<?php

if (!function_exists('colby_block_table_is_truthy')) {
    function colby_block_table_is_truthy($value): bool
    {
        return in_array($value, [true, 1, '1', 'true'], true);
    }
}

if (!function_exists('colby_block_table_get_cached_remote_json')) {
    function colby_block_table_get_cached_remote_json(string $cache_key, string $url, int $ttl = 300): array
    {
        $cached = get_transient($cache_key);

        if ($cached !== false) {
            return is_array($cached) ? $cached : [];
        }

        $response = wp_remote_get($url, [
            'timeout' => 10,
            'headers' => [
                'Accept' => 'application/json',
            ],
        ]);

        if (is_wp_error($response)) {
            return [];
        }

        $status = wp_remote_retrieve_response_code($response);
        if ($status < 200 || $status >= 300) {
            return [];
        }

        $body = wp_remote_retrieve_body($response);
        $data = json_decode($body, true);

        if (!is_array($data)) {
            return [];
        }

        set_transient($cache_key, $data, $ttl);

        return $data;
    }
}

if (!function_exists('colby_block_table_number_to_string')) {
    function colby_block_table_number_to_string(int $i, bool $capitalize = false): string
    {
        $numberwords = [
            'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
            'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        ];

        $word = $numberwords[$i] ?? (string) $i;

        return $capitalize ? ucfirst($word) : $word;
    }
}

if (!function_exists('colby_block_table_requirements')) {
    function colby_block_table_requirements(string $area, string $labsci, string $writing, string $div): string
    {
        $reqs = false;
        $to_return = '';

        if ($area !== '') {
            $to_return .= $area;
            $reqs = true;
        }

        if ($labsci === 'L' || $labsci === 'D') {
            if ($reqs) {
                $to_return .= ',&nbsp;';
            }
            $to_return .= 'Lb';
            $reqs = true;
        }

        if (in_array($writing, ['W1', 'W2', 'W3'], true)) {
            if ($reqs) {
                $to_return .= ',&nbsp;';
            }
            $to_return .= $writing;
            $reqs = true;
        }

        if ($div !== '') {
            if ($reqs) {
                $to_return .= ',&nbsp;';
            }
            $to_return .= $div;
            $reqs = true;
        }

        if ($reqs) {
            $to_return = ' <strong class="recs">' . $to_return . '.</strong>';
        }

        return $to_return;
    }
}

if (!function_exists('colby_block_table_credit_hours')) {
    function colby_block_table_credit_hours(string $crsno, int $minhrs, int $maxhrs): string
    {
        $credit_hours = '';

        if ($maxhrs !== 0) {
            if ($crsno !== 'MU193') {
                $credit_hours = ' <em class="creditHours">' . colby_block_table_number_to_string($minhrs, true);

                if ($minhrs !== $maxhrs) {
                    if ($minhrs + 1 === $maxhrs) {
                        $credit_hours .= ' or ';
                    } else {
                        if ($minhrs < $maxhrs) {
                            $credit_hours .= ' to ';
                        } else {
                            $credit_hours = ' Min hrs greater than Max hrs report to Registrar ';
                        }
                    }

                    $credit_hours .= colby_block_table_number_to_string($maxhrs, false);
                }

                $credit_hours .= ' credit hour';

                if (
                    colby_block_table_number_to_string($minhrs, true) !== 'One' ||
                    colby_block_table_number_to_string($maxhrs, true) !== 'One'
                ) {
                    $credit_hours .= 's';
                }

                $credit_hours .= '.</em>';
            }
        } else {
            $credit_hours = '<em class="creditHours">Noncredit.</em>';
        }

        return $credit_hours;
    }
}

if (!function_exists('colby_block_table_faculty')) {
    function colby_block_table_faculty(array $sections): string
    {
        $faculty = [];

        foreach ($sections as $section) {
            $section_faculty = array_map(function ($obj) {
                $name = $obj['faculty_name'] ?? '';
                return explode(',', $name)[0] ?? '';
            }, $section['faculty'] ?? []);

            $faculty = array_merge($faculty, $section_faculty);
        }

        $faculty = array_values(array_unique(array_filter($faculty)));

        return implode(', ', $faculty);
    }
}

if (!function_exists('colby_block_table_render_desc')) {
    function colby_block_table_render_desc(array $item): string
    {
        $credit_hours = colby_block_table_credit_hours(
            (string) ($item['crsno'] ?? ''),
            (int) ($item['minhrs'] ?? 0),
            (int) ($item['maxhrs'] ?? 0)
        );

        $reqs = '';
        $prereq = '';

        if (!empty($item['prereq'])) {
            $prereq =
                ' <em class="prerequisite">Prerequisite:</em> <span class="prereq">' .
                $item['prereq'] .
                '</span>';
        }

        $crsno = (string) ($item['crsno'] ?? '');
        if (substr($crsno, 0, 2) !== 'IS') {
            $reqs = colby_block_table_requirements(
                (string) ($item['area'] ?? ''),
                (string) ($item['labsci'] ?? ''),
                (string) ($item['writing'] ?? ''),
                (string) ($item['diversity'] ?? '')
            );
        }

        $faculty = colby_block_table_faculty($item['sections'] ?? []);

        return ($item['abstr'] ?? '') . "<br/>{$prereq} {$credit_hours} {$reqs} <i style=\"text-transform: uppercase\">{$faculty}</i>";
    }
}

if (!function_exists('colby_block_table_remove_tags')) {
    function colby_block_table_remove_tags(?string $str): string
    {
        return $str ? preg_replace('/(<([^>]+)>)/i', '', $str) : '';
    }
}

if (!function_exists('colby_block_table_transform_dept')) {
    function colby_block_table_transform_dept(array $item): string
    {
        $dept = strtolower($item['Dept'] ?? '');
        $text = strtolower($item['Text'] ?? '');

        switch ($dept) {
            case 'afam': return 'african-american-studies';
            case 'amer': return 'american-studies';
            case 'anth': return 'anthropology';
            case 'art': return 'art';
            case 'biol': return 'biology';
            case 'chem': return 'chemistry';
            case 'clas': return 'classics';
            case 'comp': return 'computer-science';
            case 'east': return 'east-asian-studies';
            case 'econ': return 'economics';
            case 'educ': return 'education';
            case 'engl': return 'english';
            case 'envs': return 'environmental-studies';
            case 'frit': return 'french-and-italian';
            case 'geol': return 'geology';
            case 'glst': return 'global-studies';
            case 'gmru': return 'german-and-russian';
            case 'govt': return 'government';
            case 'hist': return 'history';
            case 'ltam': return 'latin-american-studies';
            case 'math': return 'mathematics';
            case 'musi': return 'music';
            case 'phil': return 'philosophy';
            case 'phys': return 'physics-and-astronomy';
            case 'psyc': return 'psychology';
            case 'relg': return 'religious-studies';
            case 'scit': return 'science-technology-and-society';
            case 'socy': return 'sociology';
            case 'span': return 'spanish';
            case 'stat': return 'statistics';
            case 'thea': return 'performance-theater-and-dance';
            case 'wrtg': return 'writing-department';
            case 'wgst': return 'womens-gender-and-sexuality-studies';
            case 'intd':
                switch ($text) {
                    case 'jewish studies':
                        return 'jewish-studies';
                    case 'cinema studies':
                        return 'cinema-studies';
                    default:
                        return '';
                }
            default:
                return '';
        }
    }
}

if (!function_exists('colby_block_table_map_session_types')) {
    function colby_block_table_map_session_types(string $sess_offered): array
    {
        $item_types = array_map('trim', explode(',', $sess_offered));

        return array_map(function ($type) {
            switch ($type) {
                case 'FA':
                    return 'Fall';
                case 'SP':
                    return 'Spring';
                case 'JP':
                    return 'January';
                default:
                    return $type;
            }
        }, $item_types);
    }
}

if (!function_exists('colby_block_table_get_endpoint')) {
    function colby_block_table_get_endpoint(array $data): ?string
    {
        switch ($data['api'] ?? '') {
            case 'Department Courses':
            case 'Course Catalogue':
                return 'https://www.colby.edu/endpoints/v1/courses/';

            case 'Majors and Minors':
                return 'https://www.colby.edu/endpoints/v1/majorsminors/';

            default:
                return null;
        }
    }
}

if (!function_exists('colby_block_table_normalize_items')) {
    function colby_block_table_normalize_items(array $payload, array $data): array
    {
        $api = $data['api'] ?? '';
        $department_code = $data['departmentCode'] ?? '';

        switch ($api) {
            case 'Department Courses':
                $courses = $payload['courses'] ?? [];

                $filtered = array_filter($courses, function ($item) use ($department_code) {
                    return ($item['dept'] ?? '') === $department_code && !empty($item['longTitle']);
                });

                return array_map(function ($item) {
                    $title = (!empty($item['secTitle']) && strpos($item['secTitle'], 'See ') === false)
                        ? $item['secTitle']
                        : ($item['longTitle'] ?? '');

                    return [
                        'title' => $title,
                        'type' => colby_block_table_map_session_types((string) ($item['sessOffered'] ?? '')),
                        'link' => [
                            'title' => $title,
                            'url' => null,
                        ],
                        'columns' => [
                            $item['crsno'] ?? '',
                            colby_block_table_remove_tags($item['abstr'] ?? ''),
                        ],
                        'modalOpen' => false,
                    ];
                }, array_values($filtered));

            case 'Course Catalogue':
                $courses = $payload['courses'] ?? [];

                $filtered = array_filter($courses, function ($item) {
                    return !empty($item['longTitle']);
                });

                return array_map(function ($item) {
                    $title = (!empty($item['secTitle']) && strpos($item['secTitle'], 'See ') === false)
                        ? $item['secTitle']
                        : ($item['longTitle'] ?? '');

                    return [
                        'title' => $title,
                        'description' => colby_block_table_render_desc($item),
                        'type' => colby_block_table_map_session_types((string) ($item['sessOffered'] ?? '')),
                        'department' => $item['dept'] ?? '',
                        'link' => [
                            'title' => $title,
                            'url' => null,
                        ],
                        'columns' => [
                            $item['crsno'] ?? '',
                            $item['dept'] ?? '',
                        ],
                        'faculty' => colby_block_table_faculty($item['sections'] ?? []),
                        'modalOpen' => false,
                    ];
                }, array_values($filtered));

            case 'Majors and Minors':
                $majors = [];
                $minors = [];

                foreach ($payload as $item) {
                    if (($item['Type'] ?? '') === 'Major') {
                        $majors[] = $item;
                    } else {
                        $minors[] = $item;
                    }
                }

                $combined = array_merge($majors, $minors);

                return array_map(function ($item) {
                    return [
                        'title' => $item['Text'] ?? '',
                        'type' => ($item['Type'] ?? '') . 's',
                        'link' => [
                            'title' => $item['Text'] ?? '',
                            'url' => '/academics/departments-and-programs/' . colby_block_table_transform_dept($item),
                        ],
                        'columns' => [
                            $item['Dept'] ?? '',
                            $item['Type'] ?? '',
                        ],
                        'department' => $item['Dept'] ?? '',
                        'modalOpen' => false,
                    ];
                }, $combined);

            default:
                return [];
        }
    }
}

if (!function_exists('colby_block_table_get_heading')) {
    function colby_block_table_get_heading(array $data): string
    {
        switch ($data['api'] ?? '') {
            case 'Department Courses':
                return 'Department Courses';
            case 'Course Catalogue':
                return 'Course Catalogue';
            case 'Majors and Minors':
                return 'Majors and Minors';
            case 'Departments':
                return 'Departments and Programs';
            case 'Departments':
                return 'Departments and Programs';
            case 'Offices':
                return 'Offices';
            default:
                return $data['api'] ?? '';
        }
    }
}

if (!function_exists('colby_block_table_get_headings')) {
    function colby_block_table_get_headings(array $data): array
    {
        switch ($data['api'] ?? '') {
            case 'Department Courses':
                return ['Name', 'Course Number', 'Description'];
            case 'Course Catalogue':
                return ['Name', 'Course Number', 'Department'];
            case 'Majors and Minors':
                return ['Name', 'Department', 'Type'];
            case 'Departments':
                return ['Name'];
            case 'Offices':
                return ['Name'];
            default:
                return [];
        }
    }
}

if (!function_exists('colby_block_table_get_filter_options')) {
    function colby_block_table_get_filter_options(array $data): array
    {
        switch ($data['api'] ?? '') {
            case 'Department Courses':
            case 'Course Catalogue':
                return ['Fall', 'Spring', 'January'];
            case 'Majors and Minors':
                return ['Majors', 'Minors'];
            case 'Departments':
                return [];
            default:
                return [];
        }
    }
}

if (!function_exists('colby_block_table_fetch_department_items')) {
    function colby_block_table_fetch_department_items(array $data): array
    {
        $retrieved_departments = get_posts([
            'post_type'      => 'page',
            'posts_per_page' => -1,
            'order'          => 'ASC',
            'orderby'        => 'title',
            'tax_query'      => [
                [
                    'taxonomy' => 'page-categories',
                    'field'    => 'slug',
                    'terms'    => 'department',
                ],
            ],
        ]);

        if (empty($retrieved_departments)) {
            return [];
        }

        $items = [];

        foreach ($retrieved_departments as $department) {
            $department_code = get_post_meta($department->ID, 'department_code', true);

            $items[] = [
                'title' => $department->post_title,
                'link' => [
                    'title' => $department->post_title,
                    'url' => '/academics/departments-and-programs/' . $department->post_name . '/',
                ],
                'columns' => [],
                'department' => $department_code ?: '',
                'modalOpen' => false,
            ];
        }

        return $items;
    }
}

if (!function_exists('colby_block_table_fetch_office_items')) {
    function colby_block_table_fetch_office_items(array $data): array
    {
        $retrieved_offices = get_posts([
            'post_type'      => 'page',
            'posts_per_page' => -1,
            'order'          => 'ASC',
            'orderby'        => 'title',
            'tax_query'      => [
                [
                    'taxonomy' => 'page-categories',
                    'field'    => 'slug',
                    'terms'    => 'office',
                ],
            ],
        ]);

        if (empty($retrieved_offices)) {
            return [];
        }

        $items = [];

        foreach ($retrieved_offices as $office) {

            $items[] = [
                'title' => $office->post_title,
                'link' => [
                    'title' => $office->post_title,
                    'url' => '/people/offices-directory/' . $office->post_name . '/',
                ],
                'columns' => [],
            ];
        }

        return $items;
    }
}

if (!function_exists('colby_block_table_get_remote_data')) {
    function colby_block_table_get_remote_data(array $data, int $index, array $block = []): array
    {
        $render_api = $data['render_api'] ?? false;

        if (!colby_block_table_is_truthy($render_api)) {
            if ($data['items']) {
                $data['manualItems'] = $data['items'];
            }
            return $data;
        }

        $api = $data['api'] ?? '';

        // Special WordPress-backed case
        if ($api === 'Departments') {
            $items = colby_block_table_fetch_department_items($data);

            $data['initial_items'] = $items;
            $data['initial_heading'] = colby_block_table_get_heading($data);
            $data['initial_headings'] = colby_block_table_get_headings($data);
            $data['initial_filter_options'] = colby_block_table_get_filter_options($data);
            $data['hydrated_from_server'] = !empty($items);
            $data['should_client_refresh'] = false;

            return $data;
        } elseif ($api === 'Offices') {
            $items = colby_block_table_fetch_office_items($data);

            $data['initial_items'] = $items;
            $data['initial_heading'] = colby_block_table_get_heading($data);
            $data['initial_headings'] = colby_block_table_get_headings($data);
            $data['initial_filter_options'] = colby_block_table_get_filter_options($data);
            $data['hydrated_from_server'] = !empty($items);
            $data['should_client_refresh'] = false;

            return $data;
        }

        // Remote endpoint-backed cases
        $endpoint = colby_block_table_get_endpoint($data);

        if (!$endpoint) {
            return $data;
        }

        $cache_key = 'colby_block_table_' . md5($endpoint . '|' . $api . '|' . ($data['departmentCode'] ?? ''));
        $payload = colby_block_table_get_cached_remote_json($cache_key, $endpoint, 1800);

        if (empty($payload)) {
            return $data;
        }

        $data['initial_items'] = colby_block_table_normalize_items($payload, $data);
        $data['initial_heading'] = colby_block_table_get_heading($data);
        $data['initial_headings'] = colby_block_table_get_headings($data);
        $data['initial_filter_options'] = colby_block_table_get_filter_options($data);
        $data['hydrated_from_server'] = !empty($data['initial_items']);
        $data['should_client_refresh'] = false;

        return $data;
    }
}
