import { useContext, useState } from "react";
import { Link, useOutletContext, useNavigate } from "react-router-dom";
import UserContext from "../utils/UserContext";
const Register = () => {
  const { setUserName } = useContext(UserContext);
  const { setIsLoggedIn } = useOutletContext();
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidUserId, setIsValidUserId] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);
  const [showInvalidMessage, setShowInvalidMessage] = useState(false);

  const validateUserName = (username) => {
    if (username.length < 6) return false;
    return /^[a-zA-Z0-9_]+$/.test(username);
  }
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const validatePassword = (password) => {
    if (password.length < 8) return false;
    return /^[a-zA-Z0-9@]+$/.test(password);
  };
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    if (
      isValidUserId &&
      isValidEmail &&
      isValidPassword &&
      isValidConfirmPassword &&
      password === confirmPassword
    ) {
      setIsLoggedIn(true);
      navigate("/");
    } else {
      setIsLoggedIn(false);
      setShowInvalidMessage(true);
      setTimeout(() => {
        setShowInvalidMessage(false);
      }, 3000);
    }
  };
  return (
    <div className="register-box dark:shadow-lg dark:shadow-indigo-600 dark:bg-[#191740]">
      <h2 className="dark:text-white" style={{ textAlign: 'center' }}>Register</h2>
      <div className="register-container relative">
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label className="dark:text-white text-black">UserName:</label>
            <div className="relative">
              <input
                className="dark:bg-gray-800 dark:text-white"
                type="text"
                name="userName"
                onChange={(e) => {
                  const value = e.target.value;
                  setUserId(value);
                  setUserName(value);
                  setIsValidUserId(validateUserName(value));
                }}
              />
              {userId && (
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  {isValidUserId ? "✅" : "❌"}
                </span>
              )}
            </div>
          </div>
          <div className="form-group">
            <label className="dark:text-white">Email:</label>
            <div className="relative">
              <input
                className="dark:bg-gray-800 dark:text-white"
                type="email"
                name="email"
                onChange={(e) => {
                  const value = e.target.value;
                  setEmail(value);
                  setIsValidEmail(validateEmail(value));
                }}
              />
              {email && (
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  {isValidEmail ? "✅" : "❌"}
                </span>
              )}
            </div>
          </div>
          <div className="form-group">
            <label className="dark:text-white">Password:</label>
            <div className="relative">
              <input
                className="dark:bg-gray-800 dark:text-white"
                type="password"
                name="password"
                onChange={(e) => {
                  const value = e.target.value;
                  setPassword(value);
                  setIsValidPassword(validatePassword(value));
                }}
              />
              {password && (
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  {isValidPassword ? "✅" : "❌"}
                </span>
              )}
            </div>
          </div>
          <div className="form-group">
            <label className="dark:text-white">Confirm Password:</label>
            <div className="relative">
              <input
                className="dark:bg-gray-800 dark:text-white"
                type="password"
                name="confirmPassword"
                onChange={(e) => {
                  const value = e.target.value;
                  setConfirmPassword(value);
                  setIsValidConfirmPassword(value === password);
                }}
              />
              {confirmPassword && (
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  {isValidConfirmPassword ? "✅" : "❌"}
                </span>
              )}
            </div>
          </div>
          {showInvalidMessage && (
            <span className="text-left text-red-700 dark:text-red-300 font-semibold">
              Invalid Credentials
            </span>
          )}
          <button className="form-register" type="submit">Register</button>
          <p className="dark:text-white" style={{ marginTop: '15px' }}>Already have an account ? <span><Link to="/login" className="dark:text-yellow-500" style={{ textDecoration: 'none' }}>Login ?</Link></span></p>
        </form>
      </div>
    </div>
  );
};

export default Register;
