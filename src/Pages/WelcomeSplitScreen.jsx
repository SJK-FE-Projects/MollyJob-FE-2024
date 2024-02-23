import { Link } from "react-router-dom";

const WelcomeSplitScreen = () => {
  return (
    <div>
      <h1>Welcome to the Welcome from SplitScreen page</h1>
      <Link to="signup/">
        <h1>Signup</h1>
      </Link>
      <Link to="login/">
        <h1>Login</h1>
      </Link>
    </div>
  );
};

export default WelcomeSplitScreen;
