import { createContext, useEffect, useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const WorkExperienceContext = createContext();

const WorkExperienceContextProvider = ({ children }) => {
  const [workExperiences, setWorkExperiences] = useState([]);
  const { fetchWithToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const fetchWorkExperiences = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/workExperience`
      );

      if (response.status === 200) {
        const workExperiencesData = response.data;
        setWorkExperiences(workExperiencesData);
        // console.log("WorkExperiences:", workExperiencesData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  //unchanged workExperience
  const newWorkExperience = async (newWorkExperienceData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/workExperience`,
        newWorkExperienceData
      );
      if (response.status === 201) {
        const addedWorkExperience = response.data;
        setWorkExperiences((prevWorkExperiences) => [...prevWorkExperiences, addedWorkExperience]);
        // console.log(addedWorkExperience, "new WorkExperience added");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateWorkExperience = async (workExperienceId, updatedWorkExperience) => {
    try {
      const response = await fetchWithToken(
        `workExperience/${workExperienceId}`,
        "PUT",
        updatedWorkExperience
      );
      if (response.status === 200) {
        const updatedWorkExperience = response.data;
        setWorkExperiences((prevWorkExperiences) =>
          prevWorkExperiences.map((workExperience) =>
            workExperience._id === updatedWorkExperience._id
              ? updatedWorkExperience
              : workExperience
          )
        );
        navigate("/");
        // console.log("WorkExperience updated:", updatedWorkExperience);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteWorkExperience = async (workExperienceId) => {
    try {
      const response = await fetchWithToken(
        `workExperience/${workExperienceId}`,
        "DELETE"
      );
      if (response.status === 200) {
        setWorkExperiences((prevWorkExperiences) =>
          prevWorkExperiences.filter((workExperience) => workExperience._id !== workExperienceId)
        );
        navigate("/");
        console.log("WorkExperience deleted:", workExperienceId);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWorkExperiences();
  }, []);

  return (
    <WorkExperienceContext.Provider
      value={{
        fetchWorkExperiences,
        workExperiences,
        newWorkExperience,
        updateWorkExperience,
        deleteWorkExperience,
      }}
    >
      {children}
    </WorkExperienceContext.Provider>
  );
};

export default WorkExperienceContextProvider;
