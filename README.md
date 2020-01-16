# cypress-and-jest-typescript-example [![renovate-app badge][renovate-badge]][renovate-app] [![CircleCI](https://circleci.com/gh/cypress-io/cypress-and-jest-typescript-example.svg?style=svg)](https://circleci.com/gh/cypress-io/cypress-and-jest-typescript-example)
> Example using Jest and Cypress with TypeScript in a single repo

If you are using Jest and Cypress types in the same project, they might conflict because both test runners use globals like `expect`. This project shows how to isolate Cypress TypeScript definitions from Jest TS definitions in the same project.

See the root level [tsconfig.json](tsconfig.json) and [jest.config.js](jest.config.js). The Cypress types are isolated from the root in the file [cypress/tsconfig.json](cypress/tsconfig.json)

## Additional information

See the excellent advice on setting TypeScript for Jest and Cypress in [TypeScript Deep Dive](https://basarat.gitbooks.io/typescript/content/) e-book by [Basarat Syed](https://twitter.com/basarat)

- [Using Jest with TypeScript](https://basarat.gitbooks.io/typescript/docs/testing/jest.html)
- [Cypress E2E with TypeScript](https://basarat.gitbooks.io/typescript/docs/testing/cypress.html)
- Cypress TypeScript transpilation was setup using [add-typescript-to-cypress](https://github.com/bahmutov/add-typescript-to-cypress) module

## Questions or problems

If you hit a problem using Jest and Cypress in the same project, please open an issue in this repository. Include a fork of this repository that shows the problem.

## License

This project is licensed under the terms of the [MIT license](/LICENSE.md).

[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
