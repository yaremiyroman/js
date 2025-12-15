// eslint.config.js
const { defineConfig } = require("eslint/config");
const js = require("@eslint/js");
const tsplugin = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");

module.exports = defineConfig([
    // js.configs.recommended,
    {
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
            },
            globals: {
                browser: "readonly",
                // The `es2021` global environment (like Promise) doesn’t need explicit definition.
            },
        },
        plugins: { "@typescript-eslint": tsplugin },
        rules: {
            // ...tsplugin.configs.recommended.rules,
            // Add custom rule overrides here, e.g.:
            // "semi": ["error", "always"],
            "quotes": ["error", "single"],
            "max-len": ["error", { "code": 120 }],
        },
    },
]);
