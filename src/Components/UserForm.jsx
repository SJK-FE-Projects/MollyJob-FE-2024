import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";



const AuthForm = ({ isLogin = true }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [nationality, setNationality] = useState("");
  const [mail, setMail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  const [tel, setTel] = useState("");

  const navigate = useNavigate();
  const { saveToken } = useContext(AuthContext);

  const handleFirstName = (event) => setFirstname(event.target.value);
  const handleLastName = (event) => setLastname(event.target.value);
  const handleNationality = (event) => setNationality(event.target.value);
  const handleMail = (event) => setMail(event.target.value);
  const handleBirthdate = (event) => setBirthday(event.target.value);
  const handleAddress = (event) => setAddress(event.target.value);
  const handleTel = (event) => setTel(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const reqBody = { firstname, lastname, birthday, nationality, mail, address,tel };

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
            First Name
            <input
              type="text"
              required
              value={firstname}
              onChange={handleFirstName}
            />
          </label>
          <label>
            Last Name
            <input
              type="text"
              required
              value={lastname}
              onChange={handleLastName}
            />
          </label>
          <label>
            Nationality
            <input
              type="text"
              required
              value={nationality}
              onChange={handleNationality}
            />
          </label>
          <label>
            Birthday
            <input
              type="date"
              
              value={birthdate}
              onChange={handleBirthdate}
            />
          </label>
          <label>
            Address
            <input
              type="text"
              
              value={address}
              onChange={handleAddress}
            />
          </label>
          <label>
            Phone number
            <input
              type="tel"
              
              value={tel}
              onChange={handleTel}
            />
          </label>
          <label>
            Email
            <input
              type="mail"
              
              value={mail}
              onChange={handleMail}
            />
          </label>
       

        <button mt="xl" variant="filled" bg={theme.colors.dark[1]} size="xs" radius="xl" type="submit">{isLogin ? "Login" : "Signup"}</button>
      </form>
    </>
  );
};

export default AuthForm;