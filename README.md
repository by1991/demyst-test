# Demyst Data Exercise

## Frontend Implementation

## Backend Implementation
>Follow test-driven development practice by creating tests before the implementation
- Create unit tests using Mocha (https://mochajs.org/)
- Implement web server using Express (https://expressjs.com/)

## Run Program
- Run Backend Server (URL: http://localhost:4000):
  - `cd demyst-backend`
  - `npm install`
  - `node app/server.js`
- Run Backend Server Unit Tests:
  - run `npm test` command under demyst-backend folder
- Run Frontend (URl: http://localhost:3000):
  - `cd demyst-frontend`
  - `npm install`
  - `npm start`
- Run Frontend Unit Tests:
  - run `npm test` command under demyst-frontend folder

## Scalability Improvements
> Move backend server to Serverless Function / Lambda to increase scalability
- References:
  - https://github.com/awsdocs/aws-lambda-developer-guide/tree/main/sample-apps/blank-nodejs