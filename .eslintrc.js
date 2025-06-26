const { rules } = require("./commitlint.config");

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "next",
    "turbo",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-native/all", // for expo
    "prettier",
  ],
  plugins: ["@typescript-eslint", "react", "react-native"],
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["client/**/*.{ts,tsx,js,jsx}"],
      env: {
        "react-native/react-native": true,
      },
    },
    {
      files: ["admin/**/*.{ts,tsx,js,jsx}"],
      env: {
        node: true,
        browser: true,
      },
    },
  ],
  ignorePatterns: ["node_modules", "dist", "build"],
  rules: {
    ...rules,
    quotes: ["error", "single", { avoidEscape: true }],
  },
};
