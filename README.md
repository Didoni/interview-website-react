# React App with basic Login

This repository contains an application built using React and showcasing login functionality. The user is asked to **Sign In** when they first enter the website. To authenticate, the app contacts and API which returns **200 OK** if the authentication succeeds and **401 unauthorized** if the authentication fails. Upon success, the user is presented with the **Private Notes** page. A personalised **Welcome** message appears on this page, together with a **Logout** button.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To run this project locally, you need to install [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable).

### Installing

Clone the GitHub repository locally and install the dependencies:

```
yarn install
```

Next, start the development server:

```
yarn serve
```

The app can then be accessed by visiting http://localhost:9000/. The authentication API should be running to enable the app to authenticate its users.

## Built With

- [React](https://reactjs.org/), [Webpack](https://webpack.js.org/), [Babel](https://babeljs.io/) - The web framework and build environment set up tools
- [React Router](https://reacttraining.com/react-router/) - Routing
- [Material-UI](https://material-ui.com/) - Styled components
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - AJAX library

## Code Maintenance

The following packages were used to facilitate the creation of maintainable and clean code, as well as testing it.

- [ESLint](https://eslint.org/), [Prettier](https://prettier.io/) - Code formatting, style and syntax checking
- [Husky](https://www.npmjs.com/package/husky) - Git hooks used to trigger testing and code checks
- [Jest](https://jestjs.io/), [Enzyme](https://airbnb.io/enzyme/) - Unit testing
