
# eslint-config-phaistos-networks

This package provides Phaistos Networks's .eslintrc as an extensible shared config.

*It's basically a clone of [Airbnb's](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) same project with different and more rules and some other minor changes*

### How to update

1. `git commit -am …`
2. `npm version patch`
3. `git push`
4. `npm publish`

## Usage

We export three ESLint configurations for your usage.

### eslint-config-phaistos-networks

Our default export contains all of our ESLint rules, including EcmaScript 6+
and React. It requires `eslint` and `eslint-plugin-react`.

1. `npm install --save-dev eslint-config-phaistos-networks eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y babel-eslint eslint`
2. add `"extends": "phaistos-networks"` to your .eslintrc

### eslint-config-phaistos-networks/base

Lints ES6+ but does not lint React. Requires `eslint`.

1. `npm install --save-dev eslint-config-phaistos-networks eslint-plugin-import babel-eslint eslint`
2. add `"extends": "phaistos-networks/base"` to your .eslintrc

### eslint-config-phaistos-networks/legacy

Lints ES5 and below. Only requires `eslint`.

1. `npm install --save-dev eslint-config-phaistos-networks eslint`
2. add `"extends": "phaistos-networks/legacy"` to your .eslintrc

### If you want to have eslint installed globally, i.e running eslint in terminal (CLI)


```bash
npm install -g eslint
npm install -g babel-eslint
npm install -g eslint-plugin-react
npm install -g eslint-plugin-import
npm install -g eslint-plugin-jsx-a11y
npm install -g eslint-config-phaistos-networks
```

### Additional notes

+ Remove the args from yours sublimeLinter config so that the local `.eslintrc` as honored
+ Make sure you add any additional rules and constants to .eslintrc that are specific to the project
+ Make sure an `.eslintignore ` is in place so that you target your eslint where needed
+ Run `eslint . --fix` when you have your eslint in place to fix those easy to fix errors


