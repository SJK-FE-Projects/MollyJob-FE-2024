import { Route, Routes } from "react-router-dom";
import WelcomeSplitScreen from "./Pages/WelcomeSplitScreen";
import LoginPage from "./Pages/LoginPage";
import CoverLetterFormWorker from "./Pages/CoverLetterFormCoWorker";
import CoverLetterFormStudent from "./Pages/CoverLetterFormStudent";

import styles from "./Styles/App.module.scss";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<WelcomeSplitScreen />} />
        <Route path="student/login" element={<LoginPage />} />
        <Route path="coworker/login" element={<LoginPage />} />
        <Route
          path="coworker/coverletterform"
          element={<CoverLetterFormWorker />}
        />
        <Route
          path="student/coverletterform"
          element={<CoverLetterFormStudent />}
        />
      </Routes>
      <Navigation />
    </div>
  );
}

export default App;
