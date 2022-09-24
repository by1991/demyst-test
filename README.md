# Demyst Data Exercise

## Prerequisites
- Install Node version 16

## Run Program
- Run Backend Server (URL: http://localhost:4000):
  - `cd demyst-backend`
  - `npm install`
  - `node app/server.js`
- Run Frontend (URl: http://localhost:3000):
  - `cd demyst-frontend`
  - `npm install`
  - `npm start`
- Run Backend Server Unit Tests:
  - run `npm test` command under demyst-backend folder
- Run Frontend Unit Tests:
  - run `npm test` command under demyst-frontend folder

## User Guide
- Click 'Start Application' button
!![Architecture](/screenshots/screenshot1.png)

## Frontend Implementation

## Backend Implementation
>Follow test-driven development practice by creating unit tests before the implementation
- Create unit tests using Mocha (https://mochajs.org/)
  - Unit tests are under demyst-backend/test/server.js
  - The unit tests cover all APIs and 20, 60, 100 "preAssessment" values
- Implement web server using Express (https://expressjs.com/)



## Scalability Improvements
> Move backend server to Serverless Function / Lambda to increase scalability
- References:
  - https://github.com/awsdocs/aws-lambda-developer-guide/tree/main/sample-apps/blank-nodejs