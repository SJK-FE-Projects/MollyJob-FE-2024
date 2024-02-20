import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { EducationContext } from "../Context/EducationContext.jsx";
import { AuthContext } from "../Context/AuthContext";
import EduForm from "../Components/EducationForm";
import ResearchForm from "../Components/ResearchForm";
import WorkExpForm from "../Components/WorkingExperienceForm";

const CLFormWork = () => {
  <>
<EduForm/>
<ResearchForm/>  
<WorkExpForm/>
  </>


  /* const { fetchEducations, deleteEducation, education } =
    useContext(EducationContext);*/
};

export default CLFormWork;
