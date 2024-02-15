import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EducationContext } from "./Context/EducationContext.jsx";
import { AuthContext } from "../contexts/AuthContext";

const CLForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { fetchEducations, deleteEducation, education } =
    useContext(EducationContext);
};

export default CLForm;
