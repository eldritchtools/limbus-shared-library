// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";

export default [
  // 1️⃣ Base JS rules
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: { js },
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  // 2️⃣ React recommended rules
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
    },
    rules: {
      // Use React recommended rules
      ...pluginReact.configs.flat.recommended.rules,
      ...pluginReactHooks.configs.flat.recommended.rules,

      // Turn off false warning for React 17+ JSX transform
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "no-dupe-keys": "off",
    },
    settings: {
      react: {
        version: "detect", // automatically detect React version
      },
    },
  },
];