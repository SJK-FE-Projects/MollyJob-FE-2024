import React from 'react';
import { Link } from 'react-router-dom';


const WelcomeSplitScreen = () => {
  return <div>
    <h1>
      Welcome to the Welcome from SplitScreen page
    </h1>
    <Link to="/student/login">
      <h1>
        Enter as a Student
      </h1>
    </Link>
    <Link to="coworker/login">
      <h1>
      Enter as a CoWorker
      </h1>
    </Link>


  </div>;
}

export default WelcomeSplitScreen;