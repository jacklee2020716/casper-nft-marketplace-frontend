/**
 * @type {import("stylelint").ConfigRules}
 */
const commonRules = {
  "alpha-value-notation": null,
  "color-function-notation": null,
  "comment-empty-line-before": null,
  "custom-property-empty-line-before": null,
  "declaration-empty-line-before": null,
  "function-whitespace-after": null,
  "no-descending-specificity": null,
  "rule-empty-line-before": null,
  "value-keyword-case": null,
};

/**
 * @type {import("stylelint").Config}
 */
module.exports = {
  overrides: [
    {
      extends: ["stylelint-config-standard", "stylelint-config-prettier"],
      rules: {
        ...commonRules,
        "function-no-unknown": null,
      },
    },
  ],
};
