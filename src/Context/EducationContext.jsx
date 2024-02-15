import { createContext, useEffect, useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const EducationContext = createContext();

const EducationContextProvider = ({ children }) => {
  const [educations, setEducations] = useState([]);
  const { fetchWithToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const fetchEducations = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/education`
      );

      if (response.status === 200) {
        const educationsData = response.data;
        setEducations(educationsData);
        // console.log("Educations:", educationsData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  //unchanged education
  const newEducation = async (newEducationData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/education`,
        newEducationData
      );
      if (response.status === 201) {
        const addedEducation = response.data;
        setEducations((prevEducations) => [...prevEducations, addedEducation]);
        // console.log(addedEducation, "new Education added");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateEducation = async (educationId, updatedEducation) => {
    try {
      const response = await fetchWithToken(
        `education/${educationId}`,
        "PUT",
        updatedEducation
      );
      if (response.status === 200) {
        const updatedEducation = response.data;
        setEducations((prevEducations) =>
          prevEducations.map((education) =>
            education._id === updatedEducation._id
              ? updatedEducation
              : education
          )
        );
        navigate("/");
        // console.log("Education updated:", updatedEducation);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteEducation = async (educationId) => {
    try {
      const response = await fetchWithToken(
        `education/${educationId}`,
        "DELETE"
      );
      if (response.status === 200) {
        setEducations((prevEducations) =>
          prevEducations.filter((education) => education._id !== educationId)
        );
        navigate("/");
        console.log("Education deleted:", educationId);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEducations();
  }, []);

  return (
    <EducationContext.Provider
      value={{
        fetchEducations,
        educations,
        newEducation,
        updateEducation,
        deleteEducation,
      }}
    >
      {children}
    </EducationContext.Provider>
  );
};

export default EducationContextProvider;
