module.exports = {
  'rules': {
    // enforces getter/setter pairs in objects
    'accessor-pairs': 1,
    // enforces return statements in callbacks of array's methods
    // http://eslint.org/docs/rules/array-callback-return
    'array-callback-return': 1,
    // treat var statements as if they were block scoped
    'block-scoped-var': 1,
    // specify the maximum cyclomatic complexity allowed in a program
    'complexity': [0, 11],
    // require return statements to either always or never specify values
    'consistent-return': 1,
    // specify curly brace conventions for all control statements
    'curly': [1, 'multi-line'],
    // require default case in switch statements
    'default-case': 1,
    // encourages use of dot notation whenever possible
    'dot-notation': [1, { 'allowKeywords': true }],
    // enforces consistent newlines before or after dots
    'dot-location': [1, 'property'],
    // require the use of === and !==
    'eqeqeq': [1, 'smart'],
    // make sure for-in loops have an if statement
    'guard-for-in': 1,
    // Blacklist certain identifiers to prevent them being used
    // http://eslint.org/docs/rules/id-blacklist
    'id-blacklist': 0,
    // disallow the use of alert, confirm, and prompt
    'no-alert': 0,
    // disallow use of arguments.caller or arguments.callee
    'no-caller': 1,
    // disallow lexical declarations in case/default clauses
    // http://eslint.org/docs/rules/no-case-declarations.html
    'no-case-declarations': 1,
    // disallow division operators explicitly at beginning of regular expression
    'no-div-regex': 1,
    // disallow else after a return in an if
    'no-else-return': 0,
    // disallow Unnecessary Labels
    // http://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 1,
    // disallow comparisons to null without a type-checking operator
    'no-eq-null': 1,
    // disallow use of eval()
    'no-eval': 1,
    // disallow adding to native types
    'no-extend-native': 1,
    // disallow unnecessary function binding
    'no-extra-bind': 1,
    // disallow fallthrough of case statements
    'no-fallthrough': 1,
    // disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 1,
    // disallow the type conversions with shorter notations
    'no-implicit-coercion': 0,
    // disallow use of eval()-like methods
    'no-implied-eval': 2,
    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 0,
    // disallow usage of __iterator__ property
    'no-iterator': 1,
    // disallow use of labels for anything other then loops and switches
    'no-labels': [1, { 'allowLoop': false, 'allowSwitch': false }],
    // disallow unnecessary nested blocks
    'no-lone-blocks': 1,
    // disallow creation of functions within loops
    'no-loop-func': 1,
    // disallow use of multiple spaces
    'no-multi-spaces': 1,
    // disallow use of multiline strings
    'no-multi-str': 1,
    // disallow reassignments of native objects
    'no-native-reassign': 1,
    // disallow use of new operator when not part of the assignment or comparison
    'no-new': 0,
    // disallow use of new operator for Function object
    'no-new-func': 1,
    // disallows creating new instances of String, Number, and Boolean
    'no-new-wrappers': 1,
    // disallow use of (old style) octal literals
    'no-octal': 1,
    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    'no-octal-escape': 1,
    // disallow reassignment of function parameters
    // disallow parameter object manipulation
    // rule: http://eslint.org/docs/rules/no-param-reassign.html
    'no-param-reassign': [0, { 'props': true }],
    // disallow use of process.env
    'no-process-env': 0,
    // disallow usage of __proto__ property
    'no-proto': 1,
    // disallow declaring the same variable more then once
    'no-redeclare': 1,
    // disallow use of assignment in return statement
    // NOTE: let's leave this to IGNORE for now so we can do ref => this.node = ref. Pehaps later
    'no-return-assign': 0,
    // disallow use of `javascript:` urls.
    'no-script-url': 1,
    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 1,
    // disallow use of comma operator
    'no-sequences': 1,
    // restrict what can be thrown as an exception
    'no-throw-literal': 1,
    // disallow unmodified conditions of loops
    // http://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 0,
    // disallow usage of expressions in statement position
    'no-unused-expressions': 1,
    // disallow unused labels
    // http://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 1,
    // disallow unnecessary .call() and .apply()
    'no-useless-call': 1,
    // disallow unnecessary string escaping
    // http://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 1,
    // disallow use of void operator
    'no-void': 1,
    // disallow usage of configurable warning terms in comments: e.g. todo
    'no-warning-comments': [0, { 'terms': ['todo', 'fixme', 'xxx'], 'location': 'start' }],
    // disallow use of the with statement
    'no-with': 1,
    // require use of the second argument for parseInt()
    'radix': 0,
    // requires to declare all vars on top of their containing scope
    'vars-on-top': 1,
    // require immediate function invocation to be wrapped in parentheses
    // http://eslint.org/docs/rules/wrap-iife.html
    'wrap-iife': [1, 'outside'],
    // require or disallow Yoda conditions
    'yoda': 1,
    // Disallow unnecessary computed property keys on objects (no-useless-computed-key)
    'no-useless-computed-key': 1,
    // Disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': [1, {
      "ignoreDestructuring": true,
      "ignoreImport": true,
      "ignoreExport": true
    }],
    // Require or disallow the Unicode Byte Order Mark (BOM) (unicode-bom)
    // NOT needed for UTF so off for now
    'unicode-bom': 0,
    // Disallow use of Object.prototypes builtins directly
    'no-prototype-builtins': 0,
    // requires object keys to be sorted
    'sort-keys': 0,
    // disallow parseInt() in favor of binary, octal, and hexadecimal literals (prefer-numeric-literals)
    'prefer-numeric-literals': 0,
    // enforce position of line comments (line-comment-position)
    'line-comment-position': [0, { "position": "above" }],

    // DEPRECATED as of 4.0
    // require or disallow newlines around directives (lines-around-directive)
    // 'lines-around-directive': [1, 'always'],

    // require function names to match the name of the variable or property to which they are assigned (func-name-matching)
    'func-name-matching': 1,
    // disallow redundant return statements (no-useless-return)
    'no-useless-return': 1,

    // Disallow Use of Chained Assignment Expressions (no-multi-assign)
    "no-multi-assign": 2,
    // enforce the location of single-line statements
    // This rule aims to enforce a consistent location for single-line statements.
    'nonblock-statement-body-position' : [2, 'below'],

    // disallow use of the Buffer() constructor (no-buffer-constructor)
    'no-buffer-constructor': 2,

    // disallow the use of debugger (no-debugger)
    'no-debugger': 1,

    // Enforces that a return statement is present in property getters (getter-return)
    'getter-return': 'error'
  }
};
