module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-scss'],
  rules: {
    'comment-whitespace-inside': null,
    'no-descending-specificity': null,
    'declaration-empty-line-before': null,
    'value-keyword-case': null,
    'selector-nested-pattern': '^&',
    'max-empty-lines': 2,
    'no-duplicate-selectors': true,
    'string-quotes': 'single',
    'max-nesting-depth': 3,
    'selector-max-class': 3,
    'selector-type-case': 'lower',
    'selector-class-pattern': '([a-z][a-z0-9]*(-[a-z0-9]+)*)',
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'responsive', 'variants', 'screen'],
      },
    ],
  },
};
