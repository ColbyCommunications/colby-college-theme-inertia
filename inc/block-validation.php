<?php
/**
 * ACF block validation rules shared by PHP validation and Gutenberg editor JS.
 *
 * Convention:
 * resources/js/components/{BlockName}/acf/validation.php
 *
 * Each per-block validation file should return an array keyed by ACF field key:
 *
 * return [
 *     'field_632352355646a' => [
 *         'name'  => 'image',
 *         'label' => 'Media Context image',
 *         'type'  => 'image',
 *     ],
 * ];
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Directories that contain block component folders.
 *
 * Override this with the `colby_acf_block_validation_component_roots` filter
 * if the components directory moves.
 */
function colby_acf_block_validation_component_roots(): array {
    $roots = [
        get_stylesheet_directory() . '/resources/js/components',
    ];

    /**
     * Filter the component root directories scanned for acf/validation.php files.
     *
     * @param array<int, string> $roots Absolute directory paths.
     */
    return array_values(array_filter((array) apply_filters('colby_acf_block_validation_component_roots', $roots)));
}

/**
 * Find validation.php files colocated with block field definitions.
 *
 * Expected path:
 * resources/js/components/{BlockName}/acf/validation.php
 */
function colby_acf_block_validation_rule_files(): array {
    $files = [];

    foreach (colby_acf_block_validation_component_roots() as $root) {
        if (!is_string($root) || !is_dir($root)) {
            continue;
        }

        $matches = glob(trailingslashit($root) . '*/acf/validation.php');

        if (is_array($matches)) {
            $files = array_merge($files, $matches);
        }
    }

    /**
     * Filter discovered validation rule files.
     *
     * @param array<int, string> $files Absolute validation.php file paths.
     */
    return array_values(array_unique(array_filter((array) apply_filters('colby_acf_block_validation_rule_files', $files))));
}

/**
 * Load all colocated block validation rules.
 *
 * Each file must return an array keyed by field key. Invalid files are ignored
 * rather than fataling the editor.
 */
function colby_acf_block_colocated_validation_rules(): array {
    $rules = [];

    foreach (colby_acf_block_validation_rule_files() as $file) {
        if (!is_readable($file)) {
            continue;
        }

        $file_rules = include $file;

        if (!is_array($file_rules)) {
            continue;
        }

        $rules = array_replace($rules, $file_rules);
    }

    return $rules;
}

/**
 * Required ACF block field rules keyed by ACF field key.
 *
 * Rules are loaded from colocated files at:
 * resources/js/components/{BlockName}/acf/validation.php
 */
function colby_acf_block_validation_rules(): array {
    static $rules = null;

    if ($rules !== null) {
        return $rules;
    }

    $rules = colby_acf_block_colocated_validation_rules();

    /**
     * Filter the final validation rules used by both PHP and JS.
     *
     * @param array<string, array<string, mixed>> $rules Rules keyed by ACF field key.
     */
    $rules = (array) apply_filters('colby_acf_block_validation_rules', $rules);

    return $rules;
}

/**
 * Return all rules for a given ACF field name.
 */
function colby_acf_block_validation_rules_for_name(string $name): array {
    return array_filter(
        colby_acf_block_validation_rules(),
        static function (array $rule) use ($name): bool {
            return ($rule['name'] ?? '') === $name;
        }
    );
}

/**
 * Register one generic ACF validation callback for each field name represented in the rules map.
 */
add_action('acf/init', function (): void {
    $field_names = array_unique(
        array_filter(
            array_map(
                static fn(array $rule): string => (string) ($rule['name'] ?? ''),
                colby_acf_block_validation_rules()
            )
        )
    );

    foreach ($field_names as $field_name) {
        add_filter(
            "acf/validate_value/name={$field_name}",
            'colby_validate_acf_block_configured_required_field',
            10,
            4
        );
    }
});

/**
 * Generic ACF validation callback for every configured field name.
 */
function colby_validate_acf_block_configured_required_field($valid, $value, $field, $input_name) {
    $field_name = isset($field['name']) ? (string) $field['name'] : '';

    if ($field_name === '') {
        return $valid;
    }

    return colby_validate_acf_block_required_field(
        $valid,
        $value,
        $field,
        $input_name,
        colby_acf_block_validation_rules_for_name($field_name)
    );
}

/**
 * Validate an ACF block field against configured required-field rules.
 */
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

/**
 * Determine whether a submitted ACF value should count as empty.
 */
function colby_acf_block_value_is_empty($value): bool {
    if (is_string($value)) {
        return trim($value) === '';
    }

    if (is_array($value)) {
        return count(array_filter($value, static function ($item): bool {
            return !colby_acf_block_value_is_empty($item);
        })) === 0;
    }

    return empty($value);
}

/**
 * Enqueue editor-only CSS and JS that uses the same validation rules to proactively lock Gutenberg saving.
 */
add_action('enqueue_block_editor_assets', function (): void {
    wp_register_style('colby-block-validation-editor', false);
    wp_enqueue_style('colby-block-validation-editor');

    wp_add_inline_style(
        'colby-block-validation-editor',
        '.components-notice__content, .components-snackbar__content { white-space: pre-line; }'
    );

    wp_register_script(
        'colby-acf-block-validation',
        false,
        ['wp-data', 'wp-dom-ready', 'wp-notices', 'wp-editor', 'wp-block-editor'],
        null,
        true
    );

    wp_enqueue_script('colby-acf-block-validation');

    wp_add_inline_script(
        'colby-acf-block-validation',
        'window.colbyAcfBlockValidationRules = ' . wp_json_encode(colby_acf_block_validation_rules()) . ';',
        'before'
    );

    wp_add_inline_script('colby-acf-block-validation', <<<'JS'
(function (wp) {
    if (!wp || !wp.data || !wp.domReady) {
        return;
    }

    const LOCK_NAME = 'acf-validation-lock';
    const NOTICE_ID = 'acf-universal-save-lock';
    const rules = window.colbyAcfBlockValidationRules || {};

    let lastLockedState = null;

    function cssEscape(value) {
        if (window.CSS && typeof window.CSS.escape === 'function') {
            return window.CSS.escape(value);
        }

        return String(value).replace(/["\\]/g, '\\$&');
    }

    function getFieldsByKey(fieldKey) {
        return Array.from(
            document.querySelectorAll(`.acf-field[data-key="${fieldKey}"]`)
        ).filter((field) => {
            return !field.closest('.acf-clone');
        });
    }

    function getFieldType(field, rule) {
        if (rule.type) {
            return rule.type;
        }

        const classMatch = Array.from(field.classList).find(function (className) {
            return className.indexOf('acf-field-') === 0 && className !== 'acf-field';
        });

        return classMatch ? classMatch.replace('acf-field-', '') : '';
    }

    function getRepeaterRowCount(field) {
        const countInput = field.querySelector(':scope > .acf-input > input[type="hidden"]');

        if (countInput) {
            return parseInt(countInput.value || '0', 10);
        }

        return field.querySelectorAll(':scope .acf-row:not(.acf-clone)').length;
    }

    function getImageValue(field) {
        const hiddenInput = field.querySelector(
            ':scope > .acf-input input[type="hidden"][name]'
        );

        return hiddenInput ? hiddenInput.value : '';
    }

    function getRelationshipLikeValueCount(field) {
        const selectedValues = field.querySelectorAll(
            ':scope > .acf-input .acf-rel-item input[type="hidden"], ' +
            ':scope > .acf-input .values input[type="hidden"], ' +
            ':scope > .acf-input select option:checked'
        );

        if (selectedValues.length) {
            return Array.from(selectedValues).filter(function (input) {
                return String(input.value || '').trim() !== '';
            }).length;
        }

        const hiddenInput = field.querySelector(':scope > .acf-input input[type="hidden"][name]');
        return hiddenInput && String(hiddenInput.value || '').trim() !== '' ? 1 : 0;
    }

    function getWysiwygValue(field) {
        const textarea = field.querySelector(':scope > .acf-input textarea.wp-editor-area');

        if (!textarea) {
            return '';
        }

        if (
            window.tinymce &&
            textarea.id &&
            window.tinymce.get(textarea.id) &&
            !window.tinymce.get(textarea.id).isHidden()
        ) {
            return window.tinymce.get(textarea.id).getContent();
        }

        return textarea.value || '';
    }

    function getBasicInputValue(field) {
        const checked = field.querySelector(
            ':scope > .acf-input input[type="radio"]:checked, :scope > .acf-input input[type="checkbox"]:checked'
        );

        if (checked) {
            return checked.value || '';
        }

        const select = field.querySelector(':scope > .acf-input select');
        if (select) {
            return select.value || '';
        }

        const textarea = field.querySelector(':scope > .acf-input textarea:not(.wp-editor-area)');
        if (textarea) {
            return textarea.value || '';
        }

        const input = field.querySelector(
            ':scope > .acf-input input:not([type="hidden"]):not([type="button"]):not([type="submit"]):not([type="radio"]):not([type="checkbox"])'
        );

        return input ? input.value || '' : '';
    }

    function valueIsEmpty(value) {
        if (Array.isArray(value)) {
            return value.every(valueIsEmpty);
        }

        if (value && typeof value === 'object') {
            return Object.values(value).every(valueIsEmpty);
        }

        return String(value || '').trim() === '';
    }

    function fieldIsEmpty(field, rule) {
        const type = getFieldType(field, rule);
        const minimum = parseInt(rule.min || '1', 10);

        if (type === 'repeater') {
            return getRepeaterRowCount(field) < minimum;
        }

        if (['image', 'file'].includes(type) || ['image', 'post'].includes(rule.name)) {
            return valueIsEmpty(getImageValue(field));
        }

        if (['relationship', 'post_object', 'user', 'taxonomy'].includes(type) || rule.name === 'post') {
            return getRelationshipLikeValueCount(field) < 1;
        }

        if (type === 'wysiwyg') {
            return valueIsEmpty(getWysiwygValue(field));
        }

        return valueIsEmpty(getBasicInputValue(field));
    }

    function getMessage(rule) {
        if (rule.type === 'repeater') {
            const minimum = parseInt(rule.min || '1', 10);
            return rule.label + ' requires at least ' + minimum + ' ' + (minimum === 1 ? 'row' : 'rows') + ' before saving.';
        }

        return rule.label + ' is required before saving.';
    }

    function markFieldInvalid(field, rule) {
        field.classList.add('acf-error');

        const label = field.querySelector(':scope > .acf-label');

        if (!label || label.querySelector('.acf-error-message[data-colby-validation="1"]')) {
            return;
        }

        const message = document.createElement('div');
        message.className = 'acf-error-message';
        message.dataset.colbyValidation = '1';
        message.innerHTML = '<p>' + getMessage(rule) + '</p>';

        label.appendChild(message);
    }

    function clearFieldInvalid(field) {
        field
            .querySelectorAll(':scope > .acf-label .acf-error-message[data-colby-validation="1"]')
            .forEach(function (message) {
                message.remove();
            });

        if (!field.querySelector(':scope > .acf-label .acf-error-message')) {
            field.classList.remove('acf-error');
        }
    }

    function validateConfiguredFields() {
        let hasErrors = false;

        Object.entries(rules).forEach(([fieldKey, rule]) => {
            const fields = getFieldsByKey(fieldKey);

            if (!fields.length) {
                return;
            }

            fields.forEach((field) => {
                if (fieldIsEmpty(field, rule)) {
                    markFieldInvalid(field, rule);
                    hasErrors = true;
                } else {
                    clearFieldInvalid(field);
                }
            });
        });

        return !hasErrors;
    }

    function hasExistingAcfErrors() {
        return Boolean(
            document.querySelector(
                '.acf-error-message:not([data-colby-validation="1"]), .acf-notice.-error'
            )
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

    function syncSaveLock() {
        const configuredFieldsAreValid = validateConfiguredFields();
        const shouldLock = !configuredFieldsAreValid || hasExistingAcfErrors();

        if (shouldLock) {
            wp.data.dispatch('core/editor').lockPostSaving(LOCK_NAME);
            wp.data.dispatch('core/editor').lockPostAutosaving(LOCK_NAME);

            if (lastLockedState !== true) {
                showNotice();
            }

            lastLockedState = true;
            return true;
        }

        wp.data.dispatch('core/editor').unlockPostSaving(LOCK_NAME);
        wp.data.dispatch('core/editor').unlockPostAutosaving(LOCK_NAME);

        if (lastLockedState !== false) {
            clearNotice();
        }

        lastLockedState = false;
        return false;
    }

    function isSaveControl(element) {
        const button = element && element.closest ? element.closest('button, [role="button"], .components-button') : null;

        if (!button) {
            return false;
        }

        if (
            button.classList.contains('editor-post-save-draft') ||
            button.classList.contains('editor-post-publish-button') ||
            button.classList.contains('editor-post-publish-button__button') ||
            button.classList.contains('editor-post-publish-panel__toggle')
        ) {
            return true;
        }

        const ariaLabel = String(button.getAttribute('aria-label') || '').toLowerCase();
        const text = String(button.textContent || '').trim().toLowerCase();

        return (
            ariaLabel === 'save draft' ||
            ariaLabel === 'save' ||
            ariaLabel === 'publish' ||
            ariaLabel === 'update' ||
            text === 'save draft' ||
            text === 'save' ||
            text === 'publish' ||
            text === 'update'
        );
    }

    function preventSaveIfInvalid(event) {
        if (!isSaveControl(event.target)) {
            return;
        }

        if (!syncSaveLock()) {
            return;
        }

        event.preventDefault();
        event.stopImmediatePropagation();
        showNotice();
    }

    function preventKeyboardSaveIfInvalid(event) {
        const isSaveShortcut = (event.metaKey || event.ctrlKey) && String(event.key || '').toLowerCase() === 's';

        if (!isSaveShortcut) {
            return;
        }

        if (!syncSaveLock()) {
            return;
        }

        event.preventDefault();
        event.stopImmediatePropagation();
        showNotice();
    }

    function scheduleSync() {
        window.clearTimeout(scheduleSync.timeout);
        scheduleSync.timeout = window.setTimeout(syncSaveLock, 100);
    }

    wp.domReady(function () {
        syncSaveLock();

        wp.data.subscribe(scheduleSync);

        document.addEventListener('click', preventSaveIfInvalid, true);
        document.addEventListener('keydown', preventKeyboardSaveIfInvalid, true);

        document.addEventListener('input', scheduleSync, true);
        document.addEventListener('change', scheduleSync, true);
        document.addEventListener('blur', scheduleSync, true);
        document.addEventListener('click', scheduleSync, true);

        if (window.acf) {
            window.acf.addAction('append', scheduleSync);
            window.acf.addAction('remove', scheduleSync);
            window.acf.addAction('invalid_field', scheduleSync);
            window.acf.addAction('valid_field', scheduleSync);
            window.acf.addAction('validation_complete', scheduleSync);
        }
    });
})(window.wp);
JS);
});
