import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";



const ResearchForm = ({ isLogin = true }) => {
  const [projects, setProjects] = useState("");
  const [conference, setConference] = useState("");
  const [awards, setAwards] = useState("");
  const [competitions, setCompetitions] = useState("");
  const [researchArea, setResearchArea] = useState("");
  const [professor, setProfessor] = useState("");
  const [professorResearch, setProfessorResearch] = useState("");

  const navigate = useNavigate();
  const { saveToken } = useContext(AuthContext);

  const handleDegree = (event) => setDegree(event.target.value);
  const handleMajor = (event) => setMajor(event.target.value);
  const handleUni = (event) => setUni(event.target.value);
  const handleCountry = (event) => setCountry(event.target.value);
  const handleCourses = (event) => setCourses(event.target.value);
  const handleGPA = (event) => setGPA(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const reqBody = {degree, major, uni, country, courses, GPA};

    // try {
    //   const response = await fetch(
    //     // Do we need to add any url in the .env file ??????

    //     `${import.meta.env.VITE_API_URL}/auth/${isLogin ? "login" : "signup"}`,
    //     {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify(reqBody),
    //     }
    //   );

    //   console.log("Response status:", response.status);

    //   if (response.status === 201) {
    //     // The user was created successully
    //     navigate("/login");
    //   }
    //   if (response.status === 200) {
    //     // The user was logged in successully
    //     const parsed = await response.json();
    //     console.log(parsed);
    //     alert("User logged in successfully")
    //     navigate("/");

    //     saveToken(parsed.token);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
       
          <label>
            Degree
            <input
              type="text"
              required
              value={degree}
              onChange={handleDegree}
            />
          </label>
          <label>
            Major
            <input
              type="text"
              required
              value={major}
              onChange={handleMajor}
            />
          </label>
          <label>
            University
            <input
              type="text"
              required
              value={uni}
              onChange={handleUni}
            />
          </label>
          <label>
            Country
            <input
              type="text"
              value={country}
              onChange={handleCountry}
            />
          </label>
          <label>
            Courses
            <input
              type="text"
              
              value={courses}
              onChange={handleCourses}
            />
          </label>
          <label>
            GPA
            <input
              type="text"
              
              value={GPA}
              onChange={handleGPA}
            />
          </label>
       

        <button mt="xl" variant="filled" bg={theme.colors.dark[1]} size="xs" radius="xl" type="submit">{isLogin ? "Login" : "Signup"}</button>
      </form>
    </>
  );
};

export default ResearchForm;