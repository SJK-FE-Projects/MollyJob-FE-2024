
import React from 'react'
import { Link } from 'react-router-dom';

function Navigation() {

  return (
    <>
      <div className="NavBar">
        <h1>
        Hello from Navigation
        </h1>
        
        <Link to="/student/login"> 
          Login as a Student
        </Link>
        <Link to="coworker/login"> 
          Login as a CoWorker
        </Link>
      </div>
    </>
  )
}

export default Navigation