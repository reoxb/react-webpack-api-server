// https://eslint.org/docs/user-guide/configuring

module.exports = {
  "plugins": [
      "react"
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    // https://github.com/eslint/eslint/blob/master/conf/eslint-recommended.js
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    'ecmaFeatures': {
      "jsx": true
    }
  },
  // add your custom rules here
  rules: {
    'no-undef': 'off',
    'no-console': 'warn',
    indent: ['warn', 2],
  },
  // do not need if you using rule: 'no-undef':'off'
  // globals: {
  //   module: true,
  //   jQuery: true,
  //   $: true,
  // },
   settings: {
    "react": {
      "createClass": "createReactClass", // Regex for Component Factory to use,
                                         // default to "createReactClass"
      "pragma": "React",  // Pragma to use, default to "React"
      "version": "detect", // React version. "detect" automatically picks the version you have installed.
                           // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                           // default to latest and warns if missing
                           // It will default to "detect" in the future
      "flowVersion": "0.53" // Flow version
    },
    "propWrapperFunctions": [
        // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
        "forbidExtraProps",
        {"property": "freeze", "object": "Object"},
        {"property": "myFavoriteWrapper"}
    ],
    "linkComponents": [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      {"name": "Link", "linkAttribute": "to"}
    ]
  }
}
