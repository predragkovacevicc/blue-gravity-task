# Node.js Application

## Table of Contents

- [Node.js Application](#nodejs-application)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)

## Description

This application is a test project developed to showcase my skills in Node.js for job purposes allowing me to demonstrates my ability to build a full-featured web application with user authentication, content management, and interaction capabilities.

## Features

It is designed to allow users to:

- **Add and Manage Different Types of Content:** Users can get, create, update, and delete various types of content within the application.
- **Register and Login:** New users can register an account, and existing users can log in to access the application’s features.
- **Rate Contents:** Registered users can rate the different types of content available in the app with the grades 1-5.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: The application requires Node.js to run. Download and install the version 20.17.0 from [Node.js official website](https://nodejs.org/).
- **npm**: npm (Node Package Manager) comes bundled with Node.js and is used to manage the project’s dependencies.
- **Git**: Git is needed to clone and manage the repository. Install Git from the [official website](https://git-scm.com/).
- **PostgreSQL**: The application uses PostgreSQL as the database. Install PostgreSQL version 16 from the [official website](https://www.postgresql.org/download/) and ensure that it is running on your local machine.
- **pgAdmin** (Optional): For an intuitive interface to manage PostgreSQL databases, you can use pgAdmin. Download it from the [pgAdmin website](https://www.pgadmin.org/download/) if you prefer a graphical tool for database management.

## Installation

Follow these steps to set up and run the application locally:

1. **Clone the Repository:**

   To copy the entire project codebase to your local system run the following command:

   ```bash
   git clone git@github.com:predragkovacevicc/blue-gravity-task.git
   ```

2. **Install the required Node.js packages:**

   To install required Node.js packaged run the following command:

   ```bash
   npm install
   ```

3. **Set Up DATABASE_URL Environment Variable:**

   Make sure that a DATABASE_URL in .env file in the root directory correctly connected to local PostgreSQL database:

4. **Run Migrations:**

   To generate the entire database based on prisma schema execute the following command:

   ```bash
   npm run migrate
   ```

5. **Start the Application in Development Mode:**

   ```bash
   npm start
   ```

   Visual Studio Code Debugger: If you are using Visual Studio Code, a debugger is set up for this project. You can start debugging by pressing F5. This will launch the application in debug mode and open the Debug panel in VS Code.

6. **Start the Application in Production Mode:**

   When running the application in a production environment, you need to build the project first, witch will compile the TypeScript code into JavaScript. Run the following command to compile the TypeScript files into JavaScript and prepare the application for production:

   ```bash
   npm run build
   ```

   This will generate a build directory containing the compiled code.

   Once the application is built, start the production server with:

   ```bash
   npm run start:prod
   ```

   This command will run the compiled JavaScript files located in the build directory using Node.js.

7. **Accessing the Application:**

   Once the application is up and running, you can access it by opening a web browser and navigating to:

   http://localhost:5000
