import { createContext, useEffect, useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ResearchContext = createContext();

const researchContextProvider = ({ children }) => {
  const [researchs, setResearches] = useState([]);
  const { fetchWithToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const fetchResearchInfos = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/researchInfo`
      );

      if (response.status === 200) {
        const researchInfosData = response.data;
        setResearchInfos(researchInfosData);
        // console.log("researchInfos:", researchInfosData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  //unchanged researchInfo
  const newResearchInfo = async (newResearchInfoData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/researchInfo`,
        newResearchInfoData
      );
      if (response.status === 201) {
        const addedResearchInfo = response.data;
        setResearchInfos((prevResearchInfos) => [...prevResearchInfos, addedResearchInfo]);
        // console.log(addedresearchInfo, "new ResearchInfo added");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateResearchInfo = async (researchInfoId, updatedResearchInfo) => {
    try {
      const response = await fetchWithToken(
        `researchInfo/${researchInfoId}`,
        "PUT",
        updatedResearchInfo
      );
      if (response.status === 200) {
        const updatedResearchInfo = response.data;
        setResearchInfos((prevResearchInfos) =>
          prevResearchInfos.map((researchInfo) =>
            researchInfo._id === updatedResearchInfo._id
              ? updatedResearchInfo
              : researchInfo
          )
        );
        navigate("/");
        // console.log("ResearchInfo updated:", updatedResearchInfo);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteResearchInfo = async (researchInfoId) => {
    try {
      const response = await fetchWithToken(
        `researchInfo/${researchInfoId}`,
        "DELETE"
      );
      if (response.status === 200) {
        setResearchInfos((prevResearchInfos) =>
          prevResearchInfos.filter((researchInfo) => researchInfo._id !== researchInfoId)
        );
        navigate("/");
        console.log("ResearchInfo deleted:", researchInfoId);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchResearchInfos();
  }, []);

  return (
    <ResearchInfoContext.Provider
      value={{
        fetchResearchInfos,
        researchInfos,
        newResearchInfo,
        updateResearchInfo,
        deleteResearchInfo,
      }}
    >
      {children}
    </ResearchInfoContext.Provider>
  );
};

export default ResearchInfoContextProvider;
