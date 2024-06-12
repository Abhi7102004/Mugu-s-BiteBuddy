import { useState, useContext, useEffect } from "react";
import { Link, useOutletContext, useNavigate } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Login = () => {
  const { setIsLoggedIn } = useOutletContext();
  const { setUserName } = useContext(UserContext);
  const [userNameValidate, setUserNameValidate] = useState(false);
  const [passwordValidate, setPasswordValidate] = useState(false);
  const [userNameData, setUserNameData] = useState("");
  const [passwordData, setPasswordData] = useState("");
  const [showInvalidMessage, setShowInvalidMessage] = useState(false);
  const navigate = useNavigate();

  const validateUsername = (username) => {
    return username.length >= 6;
  };

  const validatePassword = (password) => {
    return password.length >=8;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (userNameValidate && passwordValidate) {
      setIsLoggedIn(true);
      navigate("/");
    } else {
      setIsLoggedIn(false);
      setShowInvalidMessage(true);
      const timer = setTimeout(() => {
        setShowInvalidMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  };
  

  return (
    <div className="login-container dark:shadow-lg dark:shadow-indigo-600 dark:bg-[#191740]">
      <h2 className="text-center dark:text-white">Login Form</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group relative">
          <label className="dark:text-white">Username</label>
          <div className="relative">
          <input
            className="dark:bg-gray-800 dark:text-white pr-10"
            type="text"
            name="username"
            required
            onChange={(e) => {
              const value = e.target.value;
              setUserName(value);
              setUserNameData(value);
              setUserNameValidate(validateUsername(value));
            }}
          />
          {userNameData && (
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
              {userNameValidate ? "✅" : "❌"}
            </span>
          )}
          </div>
        </div>
        <div className="form-group relative">
          <label className="dark:text-white">Password</label>
          <div className="relative"> 
            <input
              className="dark:bg-gray-800 dark:text-white pr-10"
              type="password"
              name="password"
              required
              onChange={(e) => {
                const value = e.target.value;
                setPasswordData(value);
                setPasswordValidate(validatePassword(value));
              }}
            />
            {passwordData && (
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
                {passwordValidate ? "✅" : "❌"}
              </span>
            )}
          </div>
        </div>

        {showInvalidMessage && (
          <span className="text-left text-red-700 dark:text-red-300 font-semibold">
            Invalid Credentials
          </span>
        )}
        <button className="form-login" type="submit">
          Login
        </button>
        <p className="dark:text-white" style={{ marginTop: '15px' }}>
          Don't have an account?{" "}
          <span>
            <Link to="/register" className="dark:text-yellow-400" style={{ textDecoration: 'none' }}>
              Register?
            </Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
