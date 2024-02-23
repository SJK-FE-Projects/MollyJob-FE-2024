import { Route, Routes } from "react-router-dom";
import WelcomeSplitScreen from "./Pages/WelcomeSplitScreen";
import CoverLetterFormWorker from "./Pages/CoverLetterFormCoWorker";
import CoverLetterFormStudent from "./Pages/CoverLetterFormStudent";
import styles from "./Styles/App.module.scss";
//import Navigation from "./Components/Navigation";
import SignUpPage from "./Pages/SingUpPage";
import LoginPage from "./Pages/LoginPage";
import EditPageForm from "./Pages/EditPageForm";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<WelcomeSplitScreen />} />
        <Route path="signup/" element={<SignUpPage />} />
        <Route path="login/" element={<LoginPage />} />
        <Route path="profile/" element={<EditPageForm />} />

        <Route
          path="coworker/coverletterform"
          element={<CoverLetterFormWorker />}
        />
        <Route
          path="student/coverletterform"
          element={<CoverLetterFormStudent />}
        />
      </Routes>
      {/* This line is commented for testing purpose <Navigation />*/}
    </div>
  );
}

export default App;
