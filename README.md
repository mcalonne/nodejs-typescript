# NodeJS project template with TypeScript

## Informations

Application skeleton to start a new "easy to use" NodeJS project with TypeScript (REST API).
In that purpose, the following list of dependencies have  been embedded:

- HAPI (+ inert, vision and swagger)
- JOI
- Typescript

## Project structure

- **src/config**: folder containg the application configuration.
- **src/constants**: folder containing constants and TS types definitions.
- **src/controllers**: folder containing HAPI controllers handling clients requests defined in the *src/routes* folder (it also uses services located in *src/services*)
- **src/helpers**: folder containing common functions and methods used accross the application.
- **src/routes**: folder containing the routes declared in HAPI.
- **src/services**: folder containing the services called by the controllers.

This is just a starter pack.

## How to use it ?

Install the project:

```
npm i
cp .env.example .env
```

Edit the **.env** file for configuring the environnement variables.

Start the application:

```
npm run dev
```

The application should now run and the server must be up and ready:

Server is running at: http://localhost:3007
NodeJS application is running...

You can test the endpoint GET /hello => http://localhost:3007/hello
It is just a basic example showing how to use Hapi.

## Available commands

See the package.json