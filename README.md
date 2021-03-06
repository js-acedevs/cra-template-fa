# Create React App template

### This template provides structure, styles and common tool to get the project up and running.

To use this template within your project, add `--template fa` when creating a new app.

## How to use

For example run:

```sh
npx create-react-app my-app --template fa
```

or

```sh
yarn create-react-app my-app --template fa
```

## Tools

1. [Typescript](https://www.typescriptlang.org)
2. [ESLint](https://eslint.org)
3. [Prettier](https://prettier.io)
4. [Husky](https://github.com/typicode/husky#readme)
5. [TailwindCSS](https://tailwindcss.com/)
6. [Clsx](https://www.npmjs.com/package/clsx)
7. [Joi](https://github.com/sideway/joi#readme)
8. [Craco](https://github.com/gsoft-inc/craco)
9. [Dayjs](https://day.js.org/docs/en/installation/installation)
10. [GraphQL](https://graphql.org/)
11. [GraphQL-Codegen](https://www.graphql-code-generator.com/)
12. [Apollo](https://www.apollographql.com/)
13. [Loadable Components](https://loadable-components.com/)
14. [React Helmet](https://www.npmjs.com/package/react-helmet)
15. [i18n](https://www.npmjs.com/package/i18n)
16. [React Router](https://www.npmjs.com/package/react-router)

## Structure

### This template is structured based on atomic design patterns

[Learn more](https://github.com/danilowoz/react-atomic-design)

- :file_folder: components
  - :file_folder: atoms
  - :file_folder: molecules
  - :file_folder: organisms
  - :file_folder: templates
- :file_folder: config
- :file_folder: enums
- :file_folder: graphql
  - :file_folder: client
  - :file_folder: fragments
  - :file_folder: gen
  - :file_folder: hooks
  - :file_folder: mutation
  - :file_folder: query
  - :file_folder: subscription
- :file_folder: hooks
- :file_folder: interfaces
  - :file_folder: models
  - :file_folder: types
- :file_folder: pages
- :file_folder: routes
- :file_folder: styles
  - :file_folder: base
  - :file_folder: vendor
- :file_folder: utils
- :file_folder: validatiors

## Uninstall tailwind (guide)

1. delete tailwind.config.js
2. remove /styles/vendor/tailwincss/tailwind.css import in /styles/main.scss
3. delete /styles/vendor/tailwindcss
4. remove tailwind plugin from .eslintrc (under extends "plugin:tailwind/recommended")
5. uninstall following packages by running
   `npm uninstall tailwindcss@npm:@tailwindcss/postcss7-compat postcss autoprefixer`

# Getting Started with Create React App

This project was bootstrapped with [CRA Template FA](https://github.com/albrim-devfront/cra-template-fa.git)

## Available Scripts

### start

Starts development server

### build

Builds production version of the App

### test

Runs tests

### eject

Should not be used

### format

Runs prettier format

### type:check

Does typescript type checking

### lint

Lints all files in src folder

### analyze

Generates report for app and all its dependencies.

### codegen

Runs graphQL codegen
