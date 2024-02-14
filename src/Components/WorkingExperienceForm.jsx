import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";



const AuthForm = ({ isLogin = true }) => {
  const [jobType, setJobType] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [company, setCompany] = useState("");

  const navigate = useNavigate();
  const { saveToken } = useContext(AuthContext);

  const handleJobType = (event) => setJobType(event.target.value);
  const handleJobRole = (event) => setJobRole(event.target.value);
  const handleCompany = (event) => setCompany(event.target.value);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const reqBody = { jobType, jobRole, company };

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
          Job Type
          <select
            type="dropdown"
            value={jobType}
            onChange={handleJobType}
          >
            <option value="internship">Internship</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
            <option value="freelance">Freelance</option>
            <option value="temporary">Temporary</option>

          </select>
        </label>
        <label>
          Job Role
          <input
            type="text"
            value={jobRole}
            onChange={handleJobRole}
          />
        </label>
        <label>
          Company
          <input
            type="text"
            value={company}
            onChange={handleCompany}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AuthForm;