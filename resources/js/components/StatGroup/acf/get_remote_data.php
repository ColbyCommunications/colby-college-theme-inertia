<?php

function colby_block_stat_group_get_remote_data(array $data, int $index, array $block = []): array
{
    $dataset_key = 'none';

    if (!empty($data['dataset_source']) && $data['dataset_source'] !== 'none') {
        $dataset_key = $data['dataset_source'];
    } elseif (!empty($data['field_stat_group_dataset_source']) && $data['field_stat_group_dataset_source'] !== 'none') {
        $dataset_key = $data['field_stat_group_dataset_source'];
    } else {
        foreach ($data as $val) {
            if (is_string($val) && strpos($val, '_') !== false && strlen($val) > 5) {
                global $wpdb;
                $table_name = $wpdb->prefix . 'colby_stats';
                $exists = $wpdb->get_var($wpdb->prepare(
                    "SELECT COUNT(*) FROM $table_name WHERE stat_key = %s",
                    $val
                ));
                if ($exists) {
                    $dataset_key = $val;
                    break;
                }
            }
        }
    }

    if ($dataset_key !== 'none') {
        global $wpdb;
        $table_name = $wpdb->prefix . 'colby_stats';

        $row = $wpdb->get_row($wpdb->prepare(
            "SELECT stat_value FROM $table_name WHERE stat_key = %s",
            $dataset_key
        ));

        if ($row) {
            $stat_data = json_decode($row->stat_value, true);

            if (!empty($stat_data['fields']['items']) && is_array($stat_data['fields']['items'])) {
                $data['items'] = $stat_data['fields']['items'];
            }
        }
    }

    return $data;
}