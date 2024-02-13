import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import WelcomeSplitScreen from './Pages/WelcomeSplitScreen'
import LoginPage from './Pages/LoginPage'


import styles from './Styles/App.module.css'
import Navigation from './Components/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.App}>
      <Routes>
        <Route path='/' component={WelcomeSplitScreen} />
        <Route path='/student/login' component={LoginPage} />
      </Routes>


      <Navigation />

    </div>
  )
}

export default App
