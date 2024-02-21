import { useContext, useState } from "react";
import { Link, json, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import styles from "../Styles/signUp.module.css";

const AuthForm = ({ isLogin = false }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nationality, setNationality] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [role, setRole] = useState("");
  const myLocation = useLocation();

  const navigate = useNavigate();
  const currentPath = myLocation.pathname;
  const { saveToken } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const reqBody = {
      firstName,
      lastName,
      nationality,
      email,
      password,
      dob,
      address,
      tel,
      profilePic,
      role,
    };
    console.log(reqBody);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/${
          isLogin ? "login" : `signup/${role}`
        }`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(reqBody),
        }
      );
      if (response.status === 201) {
        alert("Signed In");
        navigate("/login");
      }
      if (response.status === 200) {
        const parsed = await response.json();
        console.log(parsed);
        saveToken(parsed.token);
        alert("Logged In");
      }
    } catch (error) {
      console.log("error in authform");
    }
  };

  return (
    <div className={styles.formContainer}>
      {currentPath}
      <form className={styles.signupForm} onSubmit={handleSubmit}>
        {!isLogin && (
          <label>
            <span>Firstname</span>
            <input
              className={styles.signupInput}
              type="text"
              required
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </label>
        )}
        {!isLogin && (
          <label>
            <span>LastName</span>
            <input
              className={styles.signupInput}
              type="text"
              required
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </label>
        )}

        {!isLogin && (
          <label>
            <span>Nationality</span>
            <select
              value={nationality}
              onChange={(event) => setNationality(event.target.value)}
              required
              className={styles.signupInput}
            >
              <option value="">-- Please select --</option>
              <option value="DE">German</option>
              <option value="EN">American</option>
              <option value="CN">Chinese</option>
            </select>
          </label>
        )}
        {!isLogin && (
          <label>
            <span>Date of Birth</span>
            <input
              type="date"
              value={dob}
              onChange={(event) => setDob(event.target.value)}
              required
              className={styles.signupInput}
            />
          </label>
        )}
        {!isLogin && (
          <label>
            <span>Address</span>
            <textarea
              rows={3}
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              required
              className={styles.signupInput}
            />
          </label>
        )}
        {!isLogin && (
          <label>
            <span>Telephone No.</span>
            <input
              type="number"
              value={tel}
              onChange={(event) => setTel(event.target.value)}
              className={styles.signupInput}
            />
          </label>
        )}

        <label>
          <span>Email</span>
          <input
            className={styles.signupInput}
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label>
          <span>Password</span>
          <input
            className={styles.signupInput}
            type="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>

        {!isLogin && (
          <label>
            <span>Profile Picture</span>
            <input
              type="text"
              className={styles.signupInput}
              value={profilePic}
              onChange={(event) => setProfilePic(event.target.value)}
              defaultValue="https://static.thenounproject.com/png/363633-200.png"
            />
          </label>
        )}
        {!isLogin && (
          <label>
            <span>Account Type</span>
            <select
              value={role}
              onChange={(event) => setRole(event.target.value)}
              className={styles.signupInput}
            >
              <option value="">-- Please select --</option>
              <option value="65cb6d074640963d6e9003be">Student</option>
              <option value="65cb6df259b9fab588737144">Job Seeker</option>
            </select>
          </label>
        )}

        <button type="submit">{isLogin ? "Login" : "Signup"}</button>
      </form>
    </div>
  );
};

export default AuthForm;
