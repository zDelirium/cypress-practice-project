# Cypress Practice Project

Test automation practice project using Node, TypeScript and Cypress using page object model.

## Prequisites
- `Node` version 12 or later (?)

## How to use

1. Clone the repo
2. `npm install`
3. `npx cypress open` or `$(npm bin)/cypress open` or `./node_modules/.bin/cypress open`

## Test suites

The tests are performed on this website: http://automationpractice.com/index.php. 

Note: You might be getting a lot of **508** errors. The website is just that unstable.

The test suites are all defined in `cypress/integration/scenarios`:
- Create Account
- Login
- Logout
