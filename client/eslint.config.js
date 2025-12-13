module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off", // Not needed in React 17+
    "no-unused-vars": "warn",
    "react/prop-types": "off", // optional if you don’t use PropTypes
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};