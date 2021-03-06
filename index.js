'use strict';

module.exports = {
    rules: {
        /* Possible Errors ===================================================================== */
        /* https://github.com/eslint/eslint/tree/master/docs/rules#possible-errors               */
        /* ===================================================================================== */

        // Duplicates
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',

        // Typos
        'valid-typeof': 'error',
        'no-negated-in-lhs': 'error',
        'no-sparse-arrays': 'error',
        'no-unexpected-multiline': 'error',
        'no-cond-assign': ['error', 'except-parens'],

        // Overwrite
        'no-ex-assign': 'error',
        'no-func-assign': 'error',

        // JS Oddities
        'use-isnan': 'error',
        'no-obj-calls': 'error',

        // Debug
        'no-debugger': 'error',

        // Regex
        'no-control-regex': 'error',
        'no-regex-spaces': 'error',
        'no-empty-character-class': 'error',
        'no-invalid-regexp': ['error', { allowConstructorFlags: ['u', 'y'] }],

        // Not optimal
        'no-empty': 'error',
        'no-inner-declarations': 'error',
        'no-constant-condition': 'error',
        'no-unreachable': 'error',
        'no-extra-boolean-cast': 'error',

        // Extra Characters
        'comma-dangle': ['error', 'never'],
        'no-extra-semi': 'error',

        // JSDoc
        'valid-jsdoc': ['error', {
            requireReturn: false,
            requireReturnDescription: false
        }],

        // Whitespaces
        'no-irregular-whitespace': ['error', { skipComments: true }],

        /* Variables =========================================================================== */
        /* http://eslint.org/docs/rules/#variables                                               */
        /* ===================================================================================== */

        // Unused & undeclared variables
        'no-unused-vars': ['error', { args: 'after-used' }],
        'no-undef': 'error',
        'no-use-before-define': ['error', {
            functions: false,
            classes: true
        }],

        // Shadow variables
        'no-catch-shadow': 'error',
        'no-shadow': 'error',
        'no-shadow-restricted-names': 'error',

        /* Best Practices ====================================================================== */
        /* http://eslint.org/docs/rules/#best-practices                                          */
        /* ===================================================================================== */

        // Danger
        'no-extend-native': 'error',
        'no-native-reassign': 'error',
        'no-octal': 'error',
        'no-with': 'error',

        // Outdated
        'no-caller': 'error',
        'no-iterator': 'error',
        'no-proto': 'error',
        'no-octal-escape': 'error',
        'no-labels': 'error',
        'no-unused-labels': 'error',

        // Shadow vars
        'no-case-declarations': 'error',
        'no-empty-pattern': 'error',

        // Typos
        'no-self-compare': 'error',
        'array-callback-return': 'error',
        'curly': 'error',
        'no-new': 'error',
        'no-return-assign': 'error',
        'no-throw-literal': 'error',
        'no-redeclare': 'error',

        // Not Optimal
        'no-eval': 'error',
        'no-implied-eval': 'error',
        'no-self-assign': 'error',
        'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
        'no-loop-func': 'error',
        'no-new-func': 'error'
    }
};
