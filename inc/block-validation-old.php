<?php

add_filter('acf/validate_value/name=image', 'colby_validate_acf_block_image_fields', 10, 4);
add_filter('acf/validate_value/name=images', 'colby_validate_acf_block_images_fields', 10, 4);
add_filter('acf/validate_value/name=items', 'colby_validate_acf_block_items_fields', 10, 4);
add_filter('acf/validate_value/name=lists', 'colby_validate_acf_block_lists_fields', 10, 4);
add_filter('acf/validate_value/name=heading', 'colby_validate_acf_block_heading_fields', 10, 4);
add_filter('acf/validate_value/name=paragraph', 'colby_validate_acf_block_paragraph_fields', 10, 4);
add_filter('acf/validate_value/name=caption', 'colby_validate_acf_block_caption_fields', 10, 4);
add_filter('acf/validate_value/name=api', 'colby_validate_acf_block_api_fields', 10, 4);
add_filter('acf/validate_value/name=department_code', 'colby_validate_acf_block_department_code_fields', 10, 4);
add_filter('acf/validate_value/name=image_orientation', 'colby_validate_acf_block_image_orientation_fields', 10, 4);
add_filter('acf/validate_value/name=post', 'colby_validate_acf_block_post_fields', 10, 4);
add_filter('acf/validate_value/name=quote', 'colby_validate_acf_block_quote_fields', 10, 4);
add_filter('acf/validate_value/name=name', 'colby_validate_acf_block_name_fields', 10, 4);

function colby_validate_acf_block_image_fields($valid, $value, $field, $input_name) {
    return colby_validate_acf_block_required_field($valid, $value, $field, $input_name, [
        'field_62f1374ab8b30' => ['label' => 'Facts & Figures image'],
        'field_62f04962c24bf' => ['label' => 'Dark Interstitial image'],
        'field_62f13e1e94ba5' => ['label' => 'Testimonial Carousel item image'],
        'field_63276f24f54f1' => ['label' => 'HW Image Section image'],
        'field_632352355646a' => ['label' => 'Media Context image'],
        'field_62efce910cb2f' => ['label' => 'Home Hero image'],
        'field_62f17bf984cec' => ['label' => 'Full Bleed Image image'],
        'field_62f02c486f1cf' => ['label' => 'Featured Post image'],
    ]);
}

function colby_validate_acf_block_images_fields($valid, $value, $field, $input_name) {
    return colby_validate_acf_block_required_field($valid, $value, $field, $input_name, [
        'field_632ce6e12a347' => ['label' => 'Image Grid images', 'type' => 'repeater', 'min' => 1],
        'field_62f04959c24be' => ['label' => 'Dark Interstitial images', 'type' => 'repeater', 'min' => 1],
    ]);
}

function colby_validate_acf_block_items_fields($valid, $value, $field, $input_name) {
    return colby_validate_acf_block_required_field($valid, $value, $field, $input_name, [
        'field_62f1991af30cf' => ['label' => 'Related Content items', 'type' => 'repeater', 'min' => 1],
        'field_62effcd636d00' => ['label' => 'Carousel items', 'type' => 'repeater', 'min' => 1],
        'field_62f13e1194ba4' => ['label' => 'Testimonial Carousel items', 'type' => 'repeater', 'min' => 1],
        'field_6323387e9b95b' => ['label' => 'Section Nav items', 'type' => 'repeater', 'min' => 1],
        'field_63248292c1929' => ['label' => 'List Section list items', 'type' => 'repeater', 'min' => 1],
    ]);
}

function colby_validate_acf_block_lists_fields($valid, $value, $field, $input_name) {
    return colby_validate_acf_block_required_field($valid, $value, $field, $input_name, [
        'field_63248274c1927' => ['label' => 'List Section lists', 'type' => 'repeater', 'min' => 1],
    ]);
}

function colby_validate_acf_block_heading_fields($valid, $value, $field, $input_name) {
    return colby_validate_acf_block_required_field($valid, $value, $field, $input_name, [
        'field_62effc4336cfd' => ['label' => 'Carousel heading'],
        'field_62f02b016f1ca' => ['label' => 'Featured Post heading'],
        'field_62f17af284ce9' => ['label' => 'Full Bleed Image heading'],
        'field_62efce910cb19' => ['label' => 'Home Hero heading'],
        'field_6348625fd29bf' => ['label' => 'Stat Group item heading'],
    ]);
}

function colby_validate_acf_block_paragraph_fields($valid, $value, $field, $input_name) {
    return colby_validate_acf_block_required_field($valid, $value, $field, $input_name, [
        'field_62effc5436cfe' => ['label' => 'Carousel paragraph'],
        'field_62f02b2f6f1cb' => ['label' => 'Featured Post paragraph'],
        'field_62f17b4784cea' => ['label' => 'Full Bleed Image paragraph'],
    ]);
}

function colby_validate_acf_block_caption_fields($valid, $value, $field, $input_name) {
    return colby_validate_acf_block_required_field($valid, $value, $field, $input_name, [
        'field_62f02de84f93a' => ['label' => 'Featured Post caption'],
    ]);
}

function colby_validate_acf_block_api_fields($valid, $value, $field, $input_name) {
    return colby_validate_acf_block_required_field($valid, $value, $field, $input_name, [
        'field_634f6698dda41' => ['label' => 'Article Section API'],
        'field_634f65ea3db19' => ['label' => 'Carousel API'],
        'field_632dceddb1f59' => ['label' => 'Table API'],
    ]);
}

function colby_validate_acf_block_department_code_fields($valid, $value, $field, $input_name) {
    return colby_validate_acf_block_required_field($valid, $value, $field, $input_name, [
        'field_632cbb90b5ffa' => ['label' => 'Table department code'],
    ]);
}

function colby_validate_acf_block_image_orientation_fields($valid, $value, $field, $input_name) {
    return colby_validate_acf_block_required_field($valid, $value, $field, $input_name, [
        'field_632ce3502a346' => ['label' => 'Image Grid image orientation'],
    ]);
}

function colby_validate_acf_block_post_fields($valid, $value, $field, $input_name) {
    return colby_validate_acf_block_required_field($valid, $value, $field, $input_name, [
        'field_66683fa550ed9' => ['label' => 'People Grid person'],
        'field_672a7d03cddee' => ['label' => 'People Grid person'],
    ]);
}

function colby_validate_acf_block_quote_fields($valid, $value, $field, $input_name) {
    return colby_validate_acf_block_required_field($valid, $value, $field, $input_name, [
        'field_62f13e6994ba8' => ['label' => 'Testimonial Carousel quote'],
    ]);
}

function colby_validate_acf_block_name_fields($valid, $value, $field, $input_name) {
    return colby_validate_acf_block_required_field($valid, $value, $field, $input_name, [
        'field_62f13e8794ba9' => ['label' => 'Testimonial Carousel name'],
    ]);
}

function colby_validate_acf_block_required_field($valid, $value, $field, $input_name, array $rules) {
    if (!$valid) {
        return $valid;
    }

    if (!is_string($input_name) || strpos($input_name, 'acf-block') === false) {
        return $valid;
    }

    $field_key = isset($field['key']) ? (string) $field['key'] : '';
    if ($field_key === '' || !isset($rules[$field_key])) {
        return $valid;
    }

    $rule = $rules[$field_key];
    $label = $rule['label'] ?? ($field['label'] ?? 'This field');
    $type = $rule['type'] ?? ($field['type'] ?? '');

    if ($type === 'repeater') {
        $minimum = isset($rule['min']) ? (int) $rule['min'] : 1;
    
        if (is_array($value)) {
            $count = count($value);
        } elseif (is_numeric($value)) {
            $count = (int) $value;
        } else {
            $count = 0;
        }
    
        if ($count < $minimum) {
            return sprintf(
                __('%s requires at least %d %s before saving.', 'colby'),
                $label,
                $minimum,
                _n('row', 'rows', $minimum, 'colby')
            );
        }
    
        return $valid;
    }

    if (colby_acf_block_value_is_empty($value)) {
        return sprintf(__('%s is required before saving.', 'colby'), $label);
    }

    return $valid;
}

function colby_acf_block_value_is_empty($value): bool {
    if (is_string($value)) {
        return trim($value) === '';
    }

    if (is_array($value)) {
        return count(array_filter($value, static function ($item) {
            return !colby_acf_block_value_is_empty($item);
        })) === 0;
    }

    return empty($value);
}


add_action('enqueue_block_editor_assets', function () {
    wp_register_style('colby-block-validation-editor', false);
    wp_enqueue_style('colby-block-validation-editor');
    wp_add_inline_style(
        'colby-block-validation-editor',
        '.components-notice__content, .components-snackbar__content { white-space: pre-line; }'
    );
    $script = <<<'JS'
(function (wp) {
    if (!wp?.data || !wp.data.select('core/block-editor')) {
        return;
    }

    const LOCK_NAME = 'acf-validation-lock';
    const NOTICE_ID = 'acf-universal-save-lock';

    let lastLockedState = null;

    function getRepeaterRowCount(repeater) {
        const countInput = repeater.querySelector(
            ':scope > .acf-input > input[type="hidden"]'
        );

        if (countInput) {
            return parseInt(countInput.value || '0', 10);
        }

        return repeater.querySelectorAll(':scope .acf-row:not(.acf-clone)').length;
    }

    function getSectionNavBlocksWithEmptyItems() {
        return Array.from(
            document.querySelectorAll('[data-type="acf/section-nav"]')
        ).filter((block) => {
            const repeater = block.querySelector(
                '.acf-field-repeater[data-name="items"]'
            );

            return repeater && getRepeaterRowCount(repeater) === 0;
        });
    }

    function hasAcfValidationErrors() {
        return Boolean(
            document.querySelector(
                '.acf-error, .acf-error-message, .acf-notice.-error'
            )
        );
    }

    function hasBlockingValidationErrors() {
        return (
            hasAcfValidationErrors() ||
            getSectionNavBlocksWithEmptyItems().length > 0
        );
    }

    function showNotice() {
        wp.data.dispatch('core/notices').removeNotice(NOTICE_ID);

        wp.data.dispatch('core/notices').createNotice(
            'error',
            'Draft cannot be saved: Please complete the required block fields before saving.',
            {
                id: NOTICE_ID,
                isDismissible: true
            }
        );
    }

    function clearNotice() {
        wp.data.dispatch('core/notices').removeNotice(NOTICE_ID);
    }

    function markEmptySectionNavRepeaters() {
        getSectionNavBlocksWithEmptyItems().forEach((block) => {
            const repeater = block.querySelector(
                '.acf-field-repeater[data-name="items"]'
            );

            if (!repeater || repeater.classList.contains('acf-error')) {
                return;
            }

            repeater.classList.add('acf-error');

            const label = repeater.querySelector(':scope > .acf-label');

            if (label && !label.querySelector('.acf-error-message')) {
                const message = document.createElement('div');
                message.className = 'acf-error-message';
                message.innerHTML = '<p>The Section Nav block requires at least one navigation item.</p>';
                label.appendChild(message);
            }
        });
    }

    function clearResolvedSectionNavRepeaterErrors() {
        document
            .querySelectorAll('[data-type="acf/section-nav"] .acf-field-repeater[data-name="items"].acf-error')
            .forEach((repeater) => {
                if (getRepeaterRowCount(repeater) > 0) {
                    repeater.classList.remove('acf-error');

                    repeater
                        .querySelectorAll(':scope > .acf-label .acf-error-message')
                        .forEach((message) => message.remove());
                }
            });
    }

    function syncSaveLock() {
        clearResolvedSectionNavRepeaterErrors();

        const shouldLock = hasBlockingValidationErrors();

        if (shouldLock) {
            markEmptySectionNavRepeaters();

            wp.data.dispatch('core/editor').lockPostSaving(LOCK_NAME);

            if (lastLockedState !== true) {
                showNotice();
            }

            lastLockedState = true;
            return;
        }

        wp.data.dispatch('core/editor').unlockPostSaving(LOCK_NAME);

        if (lastLockedState !== false) {
            clearNotice();
        }

        lastLockedState = false;
    }

    function scheduleSyncSaveLock() {
        window.clearTimeout(scheduleSyncSaveLock.timeout);

        scheduleSyncSaveLock.timeout = window.setTimeout(syncSaveLock, 100);
    }

    wp.domReady(function () {
        syncSaveLock();

        wp.data.subscribe(scheduleSyncSaveLock);

        document.addEventListener('input', scheduleSyncSaveLock, true);
        document.addEventListener('change', scheduleSyncSaveLock, true);
        document.addEventListener('blur', scheduleSyncSaveLock, true);
        document.addEventListener('click', scheduleSyncSaveLock, true);

        if (window.acf) {
            acf.addAction('invalid_field', scheduleSyncSaveLock);
            acf.addAction('valid_field', scheduleSyncSaveLock);
            acf.addAction('append', scheduleSyncSaveLock);
            acf.addAction('remove', scheduleSyncSaveLock);
            acf.addAction('validation_complete', scheduleSyncSaveLock);
        }
    });
})(window.wp);
JS;
    wp_add_inline_script('wp-blocks', $script);
});
