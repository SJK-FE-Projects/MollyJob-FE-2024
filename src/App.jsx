import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import WelcomeSplitScreen from './Pages/WelcomeSplitScreen'
import LoginPage from './Pages/LoginPage'
import CoverLetterPage from './Pages/CoverLetterPage'


import styles from './Styles/App.module.css'
import Navigation from './Components/Navigation'

function App() {

  return (
    <div className={styles.App}>
      <Routes>
        <Route path='/' element={WelcomeSplitScreen} />
        <Route path='/student/login' element={LoginPage} />
        <Route path='/coworker/login' element={LoginPage} />
        <Route path='/coworker/coverletterform' element={CoverLetterPage} />
        <Route path='/student/coverletterform' element={CoverLetterPage} />
      </Routes>


      <Navigation />

    </div>
  )
}

export default App
