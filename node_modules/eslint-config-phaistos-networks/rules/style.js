module.exports = {
  'rules': {
    // enforce spacing inside array brackets
    'array-bracket-spacing': [1, 'never'],
    // enforce one true brace style
    'brace-style': [1, '1tbs', { 'allowSingleLine': true }],
    // require camel case names
    'camelcase': [2, { 'properties': 'always' }],
    // enforce spacing before and after comma
    'comma-spacing': [1, { 'before': false, 'after': true }],
    // enforce one true comma style
    'comma-style': [2, 'last'],
    // disallow padding inside computed properties
    'computed-property-spacing': [1, 'never'],
    // enforces consistent naming when capturing the current execution context
    "consistent-this": [1, "that"],
    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': 1,
    // require function expressions to have a name
    'func-names': 1,
    // enforces use of function declarations or expressions
    'func-style': 0,
    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    'id-length': 0,
    // this option sets a specific tab width for your code
    // https://github.com/eslint/eslint/blob/master/docs/rules/indent.md
    'indent': [1, 2, { 'SwitchCase': 1, 'VariableDeclarator': 1 }],
    // specify whether double or single quotes should be used in JSX attributes
    // http://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': [2, 'prefer-double'],
    // enforces spacing between keys and values in object literal properties
    'key-spacing': [1, { 'beforeColon': false, 'afterColon': true }],
    // require a space before & after certain keywords
    'keyword-spacing': [1, {
      'before': true,
      'after': true,
      'overrides': {
        'return': { 'after': true },
        'throw': { 'after': true },
        'case': { 'after': true }
      }
    }],
    // enforces empty lines around comments
    'lines-around-comment': 0,
    // disallow mixed 'LF' and 'CRLF' as linebreaks
    'linebreak-style': [1, 'unix'],
    // specify the maximum length of a line in your program
    // https://github.com/eslint/eslint/blob/master/docs/rules/max-len.md
    'max-len': [1, 120, 2,  {
      'ignoreUrls': true,
      'tabWidth': 2,
      'ignoreTrailingComments': true,
      'ignoreComments': false,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
      'ignoreRegExpLiterals': true
    }],
    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': 0,
    // require a capital letter for constructors
    'new-cap': 0,
    // disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 1,

    // Deprecated as of 4.0
    // allow/disallow an empty newline after var statement
    // 'newline-after-var': 0,

    // Deprecated as of 4.0
    // http://eslint.org/docs/rules/newline-before-return
    // 'newline-before-return': 0,

    // enforces new line after each method call in the chain to make it
    // more readable and easy to maintain
    // http://eslint.org/docs/rules/newline-per-chained-call
    'newline-per-chained-call': [0, { 'ignoreChainWithDepth': 3 }],
    // disallow use of the Array constructor
    'no-array-constructor': 1,

    // disallow use of the Buffer() constructor
    // not yet ready
    // 'no-buffer-constructor': 1,

    // disallow use of the continue statement
    'no-continue': 0,
    // disallow comments inline after code
    'no-inline-comments': 0,
    // disallow if as the only statement in an else block
    'no-lonely-if': 1,
    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': [1, 'smart-tabs'],
    // disallow multiple empty lines and only one newline at the end
    'no-multiple-empty-lines': [1, { 'max': 1, 'maxEOF': 1 }],
    // disallow nested ternary expressions
    'no-nested-ternary': 1,
    // disallow use of the Object constructor
    'no-new-object': 1,
    // disallow space between function identifier and application
    'no-spaced-func': 1,
    // disallow the use of ternary operators
    'no-ternary': 0,
    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 1,
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 0,
    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    // http://eslint.org/docs/rules/no-unneeded-ternary
    'no-unneeded-ternary': [1, { 'defaultAssignment': false }],
    // disallow whitespace before properties
    // http://eslint.org/docs/rules/no-whitespace-before-property
    'no-whitespace-before-property': 1,
    // require padding inside curly braces
    'object-curly-spacing': [1, 'always'],
    // enforce placing object properties on separate lines
    // TODO: this causes issues
    // TODO: UPDATE IT LATER
    'object-property-newline': 0,
    // allow just one var statement per function
    'one-var': [1, 'never'],
    // require a newline around variable declaration
    // http://eslint.org/docs/rules/one-var-declaration-per-line
    'one-var-declaration-per-line': [1, 'always'],
    // require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': 0,
    // enforce operators to be placed before or after line breaks
    'operator-linebreak': [1, 'before'],
    // enforce padding within blocks
    'padded-blocks': [1, 'never'],
    // require quotes around object literal property names
    // http://eslint.org/docs/rules/quote-props.html
    'quote-props': [1, 'as-needed', { 'keywords': false, 'unnecessary': true, 'numbers': false }],
    // specify whether double or single quotes should be used
    'quotes': [1, 'single', 'avoid-escape'],
    // require identifiers to match the provided regular expression
    'id-match': 0,
    // enforce spacing before and after semicolons
    'semi-spacing': [1, { 'before': false, 'after': true }],
    // require or disallow use of semicolons instead of ASI
    'semi': [1, 'always'],


    // sort variables within the same declaration block
    'sort-vars': 0,
    // require or disallow space before blocks
    'space-before-blocks': 1,
    // require or disallow space before function opening parenthesis
    // https://github.com/eslint/eslint/blob/master/docs/rules/space-before-function-paren.md
    'space-before-function-paren': 1,
    // require or disallow spaces inside parentheses
    'space-in-parens': [1, 'never'],
    // require spaces around operators
    'space-infix-ops': [1, {"int32Hint": false}],
    // Require or disallow spaces before/after unary operators
    'space-unary-ops': 0,
    // require or disallow a space immediately following the // or /* in a comment
    'spaced-comment': [1, 'always', {
      'exceptions': ['-', '+'],
      'markers': ['=', '!']           // space here to support sprockets directives
    }],
    // require regex literals to be wrapped in parentheses
    'wrap-regex': 0,
    // enforce a maximum file length
    'max-lines': [1, { 'max': 300, 'skipComments': true, 'skipBlankLines': true }],
    // Disallow mixes of different operators
    'no-mixed-operators': 0,
    // require or disallow line breaks inside braces
    // Causes issues, not for now
    'object-curly-newline': [0, {
      'multiline': true
    }],
    // Enforce spacing between rest and spread operators and their expressions
    'rest-spread-spacing': [1],
    // Enforce or disallow capitalization of the first letter of a comment
    'capitalized-comments': 0,

    // enforce line breaks between array elements (array-element-newline)
    'array-element-newline': 0,

    // Enforce location of semicolons (semi-style)
    'semi-style': 0,

    // Require or disallow padding lines between statements (padding-line-between-statements)
    'padding-line-between-statements': ['error', { blankLine: "any", prev: "*", next: "return" }],

    // for-direction
    'for-direction': 'warn',

    // Enforce spacing around colons of switch statements (switch-colon-spacing)
    "switch-colon-spacing": ["error", {"after": true, "before": false}],

    // enforce line breaks after opening and before closing array brackets (array-bracket-newline)
    "array-bracket-newline": ["warn", { "multiline" : true }],

  }
};
