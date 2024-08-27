# MyAdminProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Overview

This is an Angular admin project designed to provide basic user authentication functionality, including login, signup, and user detail display. The project utilizes Angular CLI 16 and Node.js 16 to ensure compatibility and smooth operation.

## Features

- User Login
- User Signup
- User Detail Display
- Authentication Guard for Protected Routes

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js 16**: This project is built using Node.js 16. Please ensure that this version of Node.js is installed on your machine.
- **Angular CLI 16**: The project requires Angular CLI 16. You can install it globally using the following command:

  ```bash
  npm install -g @angular/cli@16
  ```


my-admin-project/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── login/
│   │   │   │   ├── login.component.ts
│   │   │   │   ├── login.component.html
│   │   │   │   └── login.component.css
│   │   │   ├── signup/
│   │   │   │   ├── signup.component.ts
│   │   │   │   ├── signup.component.html
│   │   │   │   └── signup.component.css
│   │   │   └── user-detail/
│   │   │       ├── user-detail.component.ts
│   │   │       ├── user-detail.component.html
│   │   │       └── user-detail.component.css
│   │   ├── services/
│   │   │   └── auth.service.ts
│   │   ├── guards/
│   │   │   └── auth.guard.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.component.css
│   ├── assets/
│   │   └── users.json
│   ├── styles.css
│   └── index.html
├── angular.json
├── package.json
└── tsconfig.json

## Setup and Installation

1. Clone the Repository:

```bash
git clone https://github.com/SamayJain10/my-admin-project-v16.git
cd my-admin-project-v16
```
2. Install Dependencies:

Install the required Node.js packages by running:

```bash
npm install
```

3. Ensure Node.js and Angular CLI Versions:

Check that you have Node.js 16 installed:

```bash
node -v
```

4. Ensure Angular CLI 16 is installed:

```bash
ng version
```
5. Run the Application:

Start the Angular development server:

```bash
ng serve
```

The application will be available at http://localhost:4200.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
Thanks to all contributors and supporters of this project
