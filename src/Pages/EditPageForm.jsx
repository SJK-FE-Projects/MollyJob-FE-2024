import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const EditPageForm = () => {
  const [user, setUser] = useState([]);
  const { userId } = useContext(AuthContext);
  const [file, setFile] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/${userId}`
      );
      if (response.ok) {
        const data = await response.json();
        setUser(data);
        //console.log(data.firstName);
        //console.log(data.role.name);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchData();
    }
  }, [userId]);

  return (
    <>
      <h1>Edit Page</h1>
      <p>
        Welcome {user.firstName} <npms /> as {user.role && user.role.name}
      </p>
      <p>Upload image</p>
      <input
        type="file"
        onChange={(event) => {
          setFile(URL.createObjectURL(event.target.files[0]));
        }}
      />
      <img src={file} style={{ height: "100px", width: "100px" }} />
    </>
  );
};

export default EditPageForm;
