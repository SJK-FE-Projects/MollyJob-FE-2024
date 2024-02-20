import { Route, Routes } from "react-router-dom";
import WelcomeSplitScreen from './Pages/WelcomeSplitScreen';
import LoginPage from './Pages/LoginPage'
import CoverLetterFormStudent from './Pages/CoverLetterFormStudent'


import styles from './Styles/App.module.scss'
import Navigation from './Components/Navigation'
import CLFormWork from "./Pages/CoverLetterFormCoWorker";
import CoverLetterPage from "./Pages/CoverLetterPage";
import StudentPage from "./Pages/StudentPage";
import CoWorkerPage from "./Pages/CoWorkerPage";

function App() {

  return (
    <div className={styles.App}>
      <Routes>
        <Route path='/' element={<WelcomeSplitScreen/>} />
        <Route path='student/login' element={<LoginPage/>} />
        <Route path='coworker/login' element={<LoginPage/>} />
        <Route path='student' element={<StudentPage/>} />
        <Route path='coworker' element={<CoWorkerPage/>} />
        <Route path='coworker/coverletterform' element={<CLFormWork/>} />
        <Route path='coworker/coverletter' element={<CoverLetterPage/>} />
        <Route path='student/coverletterform' element={<CoverLetterFormStudent/>} />
        <Route path='student/coverletter' element={<CoverLetterPage/>} />
      </Routes>
      <Navigation/>
    </div>
  )
}

export default App
