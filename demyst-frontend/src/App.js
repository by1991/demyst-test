
import React, { useState } from "react";
import { Button } from '@mui/material';
import './App.css';
import CompanyForm from './components/CompanyForm';
import { getData } from './helpers/ApiHelper';

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [applicationId, setApplicationId] = useState(null);

  function startApplication() {
    getData('/initiateAppplication').then(
      (result) => {
        if (result) {
          console.log(result);
          setIsStarted(result.IsSuccess);
          setApplicationId(result.ApplicationId);
        }
      },
      (error) => {
        console.log(error);
        alert("Server error, please try again!");
      }
    );
  }

  return (
    <div className="app">
      <h1 className="title">Welcome!</h1>

      {!isStarted &&
        <div>
          <h1 className="title">Click Start Application button to apply for business loan</h1>
          <Button variant="contained" color="primary" type="submit" onClick={startApplication}>
            Start Application
          </Button>
        </div>
      }

      {isStarted &&
        <div>
          <h2 className="title">Your application id is {applicationId}, please fill in below form to request balance sheet.</h2>
          <CompanyForm />
        </div>
      }
      
      <footer>
        <hr className="separater"></hr>
        <h3 className="title">Demyst Data Demo App</h3>
      </footer>
    </div>
  );
}

export default App;