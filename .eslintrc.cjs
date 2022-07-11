/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
    "plugin:tailwindcss/recommended"
  ],
  rules: {
    "comma-dangle": [2, "never"],
    "max-len": ["error", { code: 120 }],
    "prettier/prettier": [
      "warn",
      {
        trailingComma: "none",
        printWidth: 150
      }
    ],
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/migration-from-tailwind-2": "off"
  }
};
