"use strict";

const rules = {
  // See: https://eslint.org/docs/rules/array-bracket-newline
  "array-bracket-newline": "off",

  // See: https://eslint.org/docs/rules/array-bracket-spacing
  "array-bracket-spacing": ["error", "never"],

  // See: array-element-newline
  "array-element-newline": "off",

  // See: https://eslint.org/docs/rules/block-spacing
  "block-spacing": "error",

  // See: https://eslint.org/docs/rules/brace-style
  "brace-style": ["error", "stroustrup"],

  // See: https://eslint.org/docs/rules/camelcase
  "camelcase": "off",

  // See: https://eslint.org/docs/rules/capitalized-comments
  "capitalized-comments": "off",

  // See: https://eslint.org/docs/rules/comma-dangle
  "comma-dangle": ["error", "never"],

  // See: https://eslint.org/docs/rules/comma-spacing
  "comma-spacing": [
    "error", { "before": false, "after": true }
  ],

  // See: https://eslint.org/docs/rules/comma-style
  "comma-style": "off",

  // See: https://eslint.org/docs/rules/computed-property-spacing
  "computed-property-spacing": ["error", "never"],

  // See: https://eslint.org/docs/rules/consistent-this
  "consistent-this": ["error", "self"],

  // See: https://eslint.org/docs/rules/eol-last
  "eol-last": ["error", "always"],

  // See: https://eslint.org/docs/rules/func-call-spacing
  "func-call-spacing": ["error", "never"],

  // See: https://eslint.org/docs/rules/func-name-matching
  "func-name-matching": "off",

  // See: https://eslint.org/docs/rules/func-names
  "func-names": ["error", "always"],

  // See: https://eslint.org/docs/rules/func-style
  "func-style": ["error", "declaration"],

  // See: https://eslint.org/docs/rules/function-paren-newline
  "function-paren-newline": "off",

  // See: https://eslint.org/docs/rules/id-blacklist
  "id-blacklist": "off",

  // See: https://eslint.org/docs/rules/id-length
  "id-length": "off",

  // See: https://eslint.org/docs/rules/id-match
  "id-match": "off",

  // See: https://eslint.org/docs/rules/implicit-arrow-linebreak
  "implicit-arrow-linebreak": ["error", "beside"],

  // See: https://eslint.org/docs/rules/indent
  "indent": ["error", 2, { "SwitchCase": 1 }],

  // See: https://eslint.org/docs/rules/jsx-quotes
  "jsx-quotes": "off",

  // See: https://eslint.org/docs/rules/key-spacing
  "key-spacing": ["error", { "beforeColon": false }],

  // See: https://eslint.org/docs/rules/keyword-spacing
  "keyword-spacing": ["error", { "before": true }],

  // See: https://eslint.org/docs/rules/line-comment-position
  "line-comment-position": ["error", { "position": "above" }],

  // See: https://eslint.org/docs/rules/linebreak-style
  "linebreak-style": "off",

  // See: https://eslint.org/docs/rules/lines-around-comment
  "lines-around-comment": "off",

  // See: https://eslint.org/docs/rules/lines-between-class-members
  "lines-between-class-members": "off",

  // See: https://eslint.org/docs/rules/max-depth
  "max-depth": ["error", 4],

  // See: https://eslint.org/docs/rules/max-len
  "max-len": [
    "error",
    {
      "code": 130,
      "comments": 150
    }
  ],

  // See: https://eslint.org/docs/rules/max-lines
  "max-lines": [
    "error",
    {
      "max": 700,
      "skipComments": true,
      "skipBlankLines": true
    }
  ],

  // See: https://eslint.org/docs/rules/max-lines-per-function
  "max-lines-per-function": "off",

  // See: https://eslint.org/docs/rules/max-nested-callbacks
  "max-nested-callbacks": ["error", 5],

  // See: https://eslint.org/docs/rules/max-params
  "max-params": ["error", 3],

  // See: https://eslint.org/docs/rules/max-statements
  "max-statements": "off",

  // See: https://eslint.org/docs/rules/max-statements-per-line
  "max-statements-per-line": "off",

  // See: https://eslint.org/docs/rules/multiline-comment-style
  "multiline-comment-style": "off",

  // See: https://eslint.org/docs/rules/multiline-ternary
  "multiline-ternary": "off",

  // See: https://eslint.org/docs/rules/new-cap
  "new-cap": "off",

  // See: https://eslint.org/docs/rules/new-parens
  "new-parens": "error",

  // See: https://eslint.org/docs/rules/newline-per-chained-call
  "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 4 }],

  // See: https://eslint.org/docs/rules/no-array-constructor
  "no-array-constructor": "off",

  // See: https://eslint.org/docs/rules/no-bitwise
  "no-bitwise": "off",

  // See: https://eslint.org/docs/rules/no-continue
  "no-continue": "off",

  // See: https://eslint.org/docs/rules/no-inline-comments
  "no-inline-comments": "error",

  // See: https://eslint.org/docs/rules/no-lonely-if
  "no-lonely-if": "error",

  // See: https://eslint.org/docs/rules/no-mixed-operators
  "no-mixed-operators": "error",

  // See: https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
  "no-mixed-spaces-and-tabs": "error",

  // See: https://eslint.org/docs/rules/no-multi-assign
  "no-multi-assign": "error",

  // See: https://eslint.org/docs/rules/no-multiple-empty-lines
  "no-multiple-empty-lines": ["error", { "max": 2 }],

  // See: https://eslint.org/docs/rules/no-negated-condition
  "no-negated-condition": "error",

  // See: https://eslint.org/docs/rules/no-nested-ternary
  "no-nested-ternary": "error",

  // See: https://eslint.org/docs/rules/no-new-object
  "no-new-object": "error",

  // See: https://eslint.org/docs/rules/no-plusplus
  "no-plusplus": "off",

  // See: https://eslint.org/docs/rules/no-restricted-syntax
  "no-restricted-syntax": "off",

  // See: https://eslint.org/docs/rules/no-tabs
  "no-tabs": "off",

  // See: https://eslint.org/docs/rules/no-ternary
  "no-ternary": "off",

  // See: https://eslint.org/docs/rules/no-trailing-spaces
  "no-trailing-spaces": "warn",

  // See: https://eslint.org/docs/rules/no-underscore-dangle
  "no-underscore-dangle": "off",

  // See: https://eslint.org/docs/rules/no-unneeded-ternary
  "no-unneeded-ternary": "error",

  // See: https://eslint.org/docs/rules/no-whitespace-before-property
  "no-whitespace-before-property": "error",

  // See: https://eslint.org/docs/rules/nonblock-statement-body-position
  "nonblock-statement-body-position": "off",

  // See: https://eslint.org/docs/rules/object-curly-newline
  "object-curly-newline": "off",

  // See: https://eslint.org/docs/rules/object-curly-spacing
  "object-curly-spacing": ["error", "always"],

  // See: https://eslint.org/docs/rules/object-property-newline
  "object-property-newline": "off",

  // See: https://eslint.org/docs/rules/one-var
  "one-var": ["error", "never"],

  // See: https://eslint.org/docs/rules/one-var-declaration-per-line
  "one-var-declaration-per-line": "error",

  // See: https://eslint.org/docs/rules/operator-assignment
  "operator-assignment": ["error", "always"],

  // See: https://eslint.org/docs/rules/operator-linebreak
  "operator-linebreak": "off",

  // See: https://eslint.org/docs/rules/padded-blocks
  "padded-blocks": ["error", "never"],

  // See: https://eslint.org/docs/rules/padding-line-between-statements
  "padding-line-between-statements": [
    "error",
    {
      "blankLine": "always",
      "prev": "*",
      "next": "return"
    }
  ],

  // See: https://eslint.org/docs/rules/prefer-object-spread
  "prefer-object-spread": "off",

  // See: https://eslint.org/docs/rules/quote-props
  "quote-props": ["error", "as-needed"],

  // See: https://eslint.org/docs/rules/quotes
  "quotes": ["error", "double"],

  // See: https://eslint.org/docs/rules/semi
  "semi": ["error", "always"],

  // See: https://eslint.org/docs/rules/semi-style
  "semi-style": ["error", "last"],

  // See: https://eslint.org/docs/rules/sort-keys
  "sort-keys": "off",

  // See: https://eslint.org/docs/rules/sort-vars
  "sort-vars": "error",

  // See: https://eslint.org/docs/rules/space-before-blocks
  "space-before-blocks": "error",

  // See: https://eslint.org/docs/rules/space-before-function-paren
  "space-before-function-paren": ["error", "never"],

  // See: https://eslint.org/docs/rules/space-in-parens
  "space-in-parens": ["error", "never"],

  // See: https://eslint.org/docs/rules/space-infix-ops
  "space-infix-ops": "error",

  // See: https://eslint.org/docs/rules/space-unary-ops
  "space-unary-ops": "error",

  // See: https://eslint.org/docs/rules/spaced-comment
  "spaced-comment": ["error", "always"],

  // See: https://eslint.org/docs/rules/switch-colon-spacing
  "switch-colon-spacing": "error",

  // See: https://eslint.org/docs/rules/template-tag-spacing
  "template-tag-spacing": ["error", "never"],

  // See: https://eslint.org/docs/rules/unicode-bom
  "unicode-bom": "error",

  // See: https://eslint.org/docs/rules/wrap-regex
  "wrap-regex": "off"
};

module.exports = { rules };
