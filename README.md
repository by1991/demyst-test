# Demyst Data Exercise

## Prerequisites
- Install NodeJs v16

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
- 1. Click 'Start Application' button:
![Architecture](/screenshots/screenshot1.png)
- 2. Fill in the form then click 'Submit' button:
![Architecture](/screenshots/screenshot2.png)
- 3. Review balance sheet then click 'Confirm' button:
![Architecture](/screenshots/screenshot3.png)
- 4. Final approved loan amount will be displayed at the bottom

## Frontend Implementation
> Use ReactJs and Material UI to develop the frontend application
- /demyst-frontend/src/App.js implements the main app
- /demyst-frontend/src/helpers implements helper functions and constants
- /demyst-frontend/src/components implements function components for balance sheet and form display

## Backend Implementation
> Follow test-driven development practice by creating unit tests before implementing the API server
- Create unit tests using Mocha (https://mochajs.org/)
  - Unit tests are under demyst-backend/test/server.js
  - The unit tests cover all APIs and 20, 60, 100 "preAssessment" values
- Implement web server using Express (https://expressjs.com/)
  - /demyst-backend/app/server.js implements 3 APIs for frontend
    - GET /initiateAppplication: initiates a new application
    - GET /getBalanceSheet: gets the balance sheet based on the accounting provider type
    - POST /requestDecision: sends data to decision engine and get the final result
  - /demyst-backend/app/accounting.js simulates the accounting software APIs
  - /demyst-backend/app/decision.js simulates the decision engine APIs

## Scalability Improvements
> - Move backend server to Serverless Function / Lambda to increase scalability
> - Dockerize the frontend app to make it portable
> - References:
  - https://github.com/awsdocs/aws-lambda-developer-guide/tree/main/sample-apps/blank-nodejs
  - https://rsbh.dev/blog/dockerize-react-app