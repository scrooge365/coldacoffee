module.exports = {
  extends: "react-tools"
};
const path = require("path");

module.exports = {
  // So parent files don't get applied
  root: true,
  globals: {
    preval: false
  },
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    "plugin:import/recommended",
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module"
  },
  plugins: ["babel", "import", "jsx-a11y"],
  settings: {
    "import/resolver": {
      "babel-module": {}
    }
  },
  rules: {
    "linebreak-style": "off", // Don't play nicely with Windows
    // 'arrow-body-style': 'off', // Incompatible with prettier
    // 'arrow-parens': 'off', // Incompatible with prettier
    // 'object-curly-newline': 'off', // Incompatible with prettier
    // 'function-paren-newline': 'off', // Incompatible with prettier
    // indent: 'off', // Incompatible with prettier
    // 'implicit-arrow-linebreak': 'off', // Incompatible with prettier
    // 'space-before-function-paren': 'off', // Incompatible with prettier
    // 'no-confusing-arrow': 'off', // Incompatible with prettier
    // 'no-mixed-operators': 'off', // Incompatible with prettier
    "function-paren-newline": ["error", "consistent"],
    "arrow-parens": ["error", "always"],
    "consistent-this": ["error", "self"],
    "max-len": [
      "error",
      120,
      2,
      {
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
        ignoreTrailingComments: true,
        ignoreUrls: true
      }
    ], // airbnb is allowing some edge cases
    "no-console": "error", // airbnb is using warn
    // 'prefer-destructuring': 'off', // airbnb is using error. destructuring harm grep potential.
    "no-alert": "error", // airbnb is using warn
    "no-param-reassign": "off", // airbnb use error
    "no-prototype-builtins": "off", // airbnb use error
    "operator-linebreak": "off", // airbnb use error
    "jsx-quotes": ["error", "prefer-single"],
    "spaced-comment": ["error", "always", { markers: [":", "::"] }],

    "import/namespace": ["error", { allowComputed: true }],
    "import/order": [
      "error",
      {
        groups: [
          ["index", "sibling", "parent", "internal", "external", "builtin"]
        ],
        "newlines-between": "never"
      }
    ],

    // 'react/jsx-indent': 'off', // Incompatible with prettier
    // 'react/jsx-closing-bracket-location': 'off', // Incompatible with prettier
    // 'react/jsx-wrap-multilines': 'off', // Incompatible with prettier
    // 'react/jsx-indent-props': 'off', // Incompatible with prettier
    // 'react/jsx-one-expression-per-line': 'off', // Incompatible with prettier
    "react/jsx-handler-names": [
      "error",
      {
        // airbnb is disabling this rule
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on"
      }
    ],
    "react/jsx-curly-brace-presence": "off", // airbnb use error, it's buggy
    // 'react/forbid-prop-types': 'off', // airbnb use error
    // 'react/require-default-props': 'off', // airbnb use error, it's buggy
    // 'react/destructuring-assignment': 'off', // airbnb use error
    "react/jsx-filename-extension": ["error", { extensions: [".js"] }], // airbnb is using .jsx
    "react/no-danger": "error", // airbnb is using warn
    "react/no-direct-mutation-state": "error", // airbnb is using off
    "react/no-find-dom-node": "off", // airbnb use error
    "react/sort-prop-types": [
      "error",
      { sortShapeProp: true, ignoreCase: true }
    ], // airbnb use off

    // 'mocha/handle-done-callback': 'error',
    // 'mocha/no-exclusive-tests': 'error',
    // 'mocha/no-global-tests': 'error',
    // 'mocha/no-pending-tests': 'error',
    // 'mocha/no-skipped-tests': 'error',

    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/no-autofocus": "off", // We are a library, people do what they want.
    "react/jsx-sort-default-props": ["error", { ignoreCase: true }],
    "jsx-a11y/anchor-is-valid": [
      "error",
      { components: ["Link"], specialLink: ["to"] }
    ]
  }
};
