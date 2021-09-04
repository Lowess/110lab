module.exports = {
  "presets": [
    "@babel/preset-env",
    ["@babel/preset-typescript", { "jsxPragma": "h" }],
  ],
  "plugins": [
    "@babel/plugin-syntax-object-rest-spread",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-class-properties",
    [
      "@babel/plugin-transform-react-jsx",
      {
        "pragma": "h"
      }
    ]
  ]
};
