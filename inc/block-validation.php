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
    if (!wp?.data || !wp?.domReady) {
        return;
    }

    const LOCK_NAME = 'acf-validation-lock';
    const AUTOSAVE_LOCK_NAME = 'acf-validation-autosave-lock';
    const NOTICE_ID = 'acf-universal-save-lock';
    const rules = window.colbyAcfBlockValidationRules || {};

    let lastLockedState = null;

    function getFieldsByKey(fieldKey) {
        return Array.from(
            document.querySelectorAll(`.acf-field[data-key="${fieldKey}"]`)
        ).filter((field) => !field.closest('.acf-clone'));
    }

    function isFieldVisible(field) {
        if (!field || field.closest('.acf-clone')) {
            return false;
        }

        if (field.hidden || field.getAttribute('aria-hidden') === 'true') {
            return false;
        }

        return field.offsetParent !== null;
    }

    function getFieldValue(field) {
        if (!field) {
            return '';
        }

        const checked = field.querySelector(
            'input[type="radio"]:checked, input[type="checkbox"]:checked'
        );

        if (checked) {
            return checked.value;
        }

        const select = field.querySelector('select');

        if (select) {
            return select.value;
        }

        const input = field.querySelector('input:not([type="hidden"]), textarea');

        if (input) {
            return input.value;
        }

        const hidden = field.querySelector('input[type="hidden"]');

        if (hidden) {
            return hidden.value;
        }

        return '';
    }

    function getRepeaterRowCount(field) {
        const countInput = field.querySelector(':scope > .acf-input > input[type="hidden"]');

        if (countInput) {
            return parseInt(countInput.value || '0', 10);
        }

        return field.querySelectorAll(':scope .acf-row:not(.acf-clone)').length;
    }

    function conditionMatches(condition, field) {
        const actual = getFieldValue(field);
        const expected = condition.value;
        const operator = condition.operator || '==';

        if (operator === '!=') {
            return String(actual) !== String(expected);
        }

        return String(actual) === String(expected);
    }

    function ruleConditionsPass(rule, field) {
        if (!Array.isArray(rule.when) || !rule.when.length) {
            return true;
        }

        const block = field.closest('[data-type^="acf/"]');

        return rule.when.every((condition) => {
            const conditionField = block
                ? block.querySelector(`.acf-field[data-key="${condition.field}"]`)
                : document.querySelector(`.acf-field[data-key="${condition.field}"]`);

            return conditionMatches(condition, conditionField);
        });
    }

    function fieldIsEmpty(field, rule) {
        const type = rule.type || '';

        if (type === 'repeater') {
            const minimum = parseInt(rule.min || '1', 10);
            return getRepeaterRowCount(field) < minimum;
        }

        if (['image', 'file'].includes(type) || ['image'].includes(rule.name)) {
            const hiddenValue = field.querySelector('input[type="hidden"]');
            return !hiddenValue || !hiddenValue.value || hiddenValue.value === '0';
        }

        if (
            ['post', 'post_object', 'relationship', 'user', 'taxonomy'].includes(type) ||
            ['post'].includes(rule.name)
        ) {
            const select = field.querySelector('select');

            if (select) {
                if (select.multiple) {
                    return Array.from(select.selectedOptions).length === 0;
                }

                return !String(select.value || '').trim();
            }

            const hiddenValues = Array.from(
                field.querySelectorAll('input[type="hidden"]')
            ).filter((input) => {
                return input.name && !input.name.includes('_acf');
            });

            return !hiddenValues.some((input) => {
                return input.value && input.value !== '0';
            });
        }

        if (
            field.classList.contains('acf-field-radio') ||
            field.classList.contains('acf-field-checkbox')
        ) {
            return !field.querySelector(
                'input[type="radio"]:checked, input[type="checkbox"]:checked'
            );
        }

        const wysiwyg = field.querySelector('.wp-editor-area');

        if (wysiwyg) {
            return !String(wysiwyg.value || '').trim();
        }

        const input = field.querySelector('input:not([type="hidden"]), textarea, select');

        if (input) {
            return !String(input.value || '').trim();
        }

        return false;
    }

    function getMessage(rule) {
        if (rule.type === 'repeater') {
            const minimum = parseInt(rule.min || '1', 10);

            return `${rule.label} requires at least ${minimum} ${
                minimum === 1 ? 'row' : 'rows'
            } before saving.`;
        }

        return `${rule.label} is required before saving.`;
    }

    function markFieldInvalid(field, rule) {
        field.classList.add('acf-error');

        const label = field.querySelector(':scope > .acf-label');

        if (!label || label.querySelector('.acf-error-message')) {
            return;
        }

        const message = document.createElement('div');
        message.className = 'acf-error-message';
        message.innerHTML = `<p>${getMessage(rule)}</p>`;
        label.appendChild(message);
    }

    function clearFieldInvalid(field) {
        field.classList.remove('acf-error');

        field
            .querySelectorAll('.acf-error-message')
            .forEach((message) => message.remove());
    }

    function validateConfiguredFields() {
        let hasErrors = false;

        Object.entries(rules).forEach(([fieldKey, rule]) => {
            const fields = getFieldsByKey(fieldKey);

            if (!fields.length) {
                return;
            }

            fields.forEach((field) => {
                if (!isFieldVisible(field)) {
                    clearFieldInvalid(field);
                    return;
                }

                if (!ruleConditionsPass(rule, field)) {
                    clearFieldInvalid(field);
                    return;
                }

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
        return Array.from(
            document.querySelectorAll('.acf-error, .acf-error-message, .acf-notice.-error')
        ).some((error) => {
            const field = error.closest('.acf-field');

            if (!field) {
                return true;
            }

            return isFieldVisible(field);
        });
    }

    function showNotice() {
        wp.data.dispatch('core/notices').removeNotice(NOTICE_ID);

        wp.data.dispatch('core/notices').createNotice(
            'error',
            'Draft cannot be saved: Please complete the required block fields before saving.',
            {
                id: NOTICE_ID,
                isDismissible: true,
            }
        );
    }

    function clearNotice() {
        wp.data.dispatch('core/notices').removeNotice(NOTICE_ID);
    }

    function lockSave() {
        wp.data.dispatch('core/editor').lockPostSaving(LOCK_NAME);

        if (wp.data.dispatch('core/editor').lockPostAutosaving) {
            wp.data.dispatch('core/editor').lockPostAutosaving(AUTOSAVE_LOCK_NAME);
        }

        if (lastLockedState !== true) {
            showNotice();
        }

        lastLockedState = true;
    }

    function unlockSave() {
        wp.data.dispatch('core/editor').unlockPostSaving(LOCK_NAME);

        if (wp.data.dispatch('core/editor').unlockPostAutosaving) {
            wp.data.dispatch('core/editor').unlockPostAutosaving(AUTOSAVE_LOCK_NAME);
        }

        if (lastLockedState !== false) {
            clearNotice();
        }

        lastLockedState = false;
    }

    function syncSaveLock() {
        const configuredFieldsAreValid = validateConfiguredFields();
        const shouldLock = !configuredFieldsAreValid || hasExistingAcfErrors();

        if (shouldLock) {
            lockSave();
            return false;
        }

        unlockSave();
        return true;
    }

    function scheduleSyncSaveLock() {
        window.clearTimeout(scheduleSyncSaveLock.timeout);
        scheduleSyncSaveLock.timeout = window.setTimeout(syncSaveLock, 100);
    }

    function blockSaveAttempt(event) {
        const saveButton = event.target.closest(
            '.editor-post-save-draft, .editor-post-publish-button, .editor-post-publish-panel__toggle, .editor-post-publish-button__button'
        );

        if (!saveButton) {
            return;
        }

        if (!syncSaveLock()) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }

    function blockKeyboardSave(event) {
        if (!(event.metaKey || event.ctrlKey) || event.key.toLowerCase() !== 's') {
            return;
        }

        if (!syncSaveLock()) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }

    wp.domReady(function () {
        syncSaveLock();

        wp.data.subscribe(scheduleSyncSaveLock);

        document.addEventListener('click', blockSaveAttempt, true);
        document.addEventListener('keydown', blockKeyboardSave, true);
        document.addEventListener('input', scheduleSyncSaveLock, true);
        document.addEventListener('change', scheduleSyncSaveLock, true);
        document.addEventListener('blur', scheduleSyncSaveLock, true);

        if (window.acf) {
            acf.addAction('append', scheduleSyncSaveLock);
            acf.addAction('remove', scheduleSyncSaveLock);
            acf.addAction('invalid_field', scheduleSyncSaveLock);
            acf.addAction('valid_field', scheduleSyncSaveLock);
            acf.addAction('validation_complete', scheduleSyncSaveLock);
        }
    });
})(window.wp);
JS);
});
