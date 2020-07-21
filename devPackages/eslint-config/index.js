const { resolve } = require('path');

module.exports = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "tsconfigRootDir": resolve(__dirname, "..", ".."),
    "project": [
      "./packages/*/tsconfig.json",
      "./packages/*/tests/tsconfig.json",
      "./packages/core/tests/examples/tsconfig.json",
      "./devPackages/*/tsconfig.json"
    ]
  },
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier/@typescript-eslint"
  ],
  "rules": {
    // TODO: enable this later
    "@typescript-eslint/explicit-function-return-type": "off",
    // TODO: enable this later
    "@typescript-eslint/consistent-type-assertions": "off",
    // TODO: enable this later
    "@typescript-eslint/no-explicit-any": "off",
    // Unwanted (for now)
    "@typescript-eslint/no-use-before-define": "off",
    // TODO: turn this back on if we add a polyfill or stop supporting IE
    "@typescript-eslint/prefer-includes": "off",
    // TODO: turn this back on if we add polyfill or stop supporting IE
    "@typescript-eslint/prefer-string-starts-ends-with": "off",
    // TODO: turn this back on when we're ready to fix all the usages
    "@typescript-eslint/no-non-null-assertion": "off",
    // The whole point of ts-ignore is to purposefully ignore errors...
    "@typescript-eslint/ban-ts-ignore": "off",
    // It's OK to return values and ignore them
    "@typescript-eslint/no-misused-promises": [
      "error",
      { "checksVoidReturn": false }
    ],
    // Allow for property deletion through destructuring
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "ignoreRestSiblings": true,
        "argsIgnorePattern": "^_"
      }
    ],
    // Don't allow bare uses of 'name'
    "no-restricted-globals": [
      "error",
      {
        "name": "name",
        "message": "Did you mean to use the 'name' global here?"
      }
    ],

    // Added with monorepo
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/restrict-plus-operands": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/ban-ts-comment": "off"
  }
};
