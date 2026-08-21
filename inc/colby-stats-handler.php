<?php

// 1. Process the form submission (Bypasses rewrite rules completely)
add_action('init', function () {
    if (strpos($_SERVER['REQUEST_URI'], '/colby-stats/update') !== false && $_SERVER['REQUEST_METHOD'] === 'POST') {
        global $wpdb;
        $table_name = $wpdb->prefix . 'colby_stats';
        
        // Handle both raw JSON and standard form data payloads
        $payload = json_decode(file_get_contents('php://input'), true);
        if (empty($payload) && !empty($_POST)) {
            $payload = $_POST;
        }

        if (is_array($payload)) {
            foreach ($payload as $key => $value) {
                // Ensure we don't save Inertia's internal tracking data if it passed through
                if ($key === '_method' || $key === 'remember') continue;

                $wpdb->replace(
                    $table_name,
                    [
                        'stat_key'   => sanitize_key($key),
                        'stat_value' => wp_json_encode($value)
                    ],
                    ['%s', '%s']
                );
            }
        }

        wp_safe_redirect(wp_get_referer() ?: '/colby-stats');
        exit;
    }
});

// 2. Create the database table
function colby_create_colby_stats_table() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'colby_stats';
    
    // Only run dbDelta if table doesn't exist to save resources
    if ($wpdb->get_var("SHOW TABLES LIKE '$table_name'") !== $table_name) {
        $charset_collate = $wpdb->get_charset_collate();

        $sql = "CREATE TABLE $table_name (
            id mediumint(9) NOT NULL AUTO_INCREMENT,
            stat_key varchar(255) NOT NULL,
            stat_value longtext NOT NULL,
            PRIMARY KEY  (id),
            UNIQUE KEY stat_key (stat_key)
        ) $charset_collate;";

        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
        dbDelta($sql);
    }
}
add_action('init', 'colby_create_colby_stats_table');

// Helper function to populate dropdowns based on target block type
function colby_populate_dataset_source_dropdown($field, $target_block_type) {
    global $wpdb;
    $table_name = $wpdb->prefix . 'colby_stats';

    $choices = [
        'none' => 'Manual Entry'
    ];

    if ($wpdb->get_var("SHOW TABLES LIKE '$table_name'") === $table_name) {
        $results = $wpdb->get_results("SELECT stat_key, stat_value FROM $table_name");

        foreach ($results as $row) {
            $data = json_decode($row->stat_value, true);

            if (is_array($data) && isset($data['block_type']) && $data['block_type'] === $target_block_type) {
                $page_id = $data['page_id'] ?? 0;
                $page_title = get_the_title($page_id) ?: "Page ID: $page_id";
                
                $choices[$row->stat_key] = sprintf('%s (%s)', $page_title, $row->stat_key);
            }
        }
    }

    $field['choices'] = $choices;
    return $field;
}

// 1. Target the Facts & Figures dropdown specifically (using its unique key)
add_filter('acf/load_field/key=field_dataset_source', function ($field) {
    return colby_populate_dataset_source_dropdown($field, 'acf/facts-figures');
});

// 2. Target the Dark Interstitial dropdown specifically (using its unique key)
add_filter('acf/load_field/key=field_dark_interstitial_dataset_source', function ($field) {
    return colby_populate_dataset_source_dropdown($field, 'acf/dark-interstitial');
});

// 3. Target the Stat Group dropdown specifically (using its unique key)
add_filter('acf/load_field/key=field_stat_group_dataset_source', function ($field) {
    return colby_populate_dataset_source_dropdown($field, 'acf/stat-group');
});