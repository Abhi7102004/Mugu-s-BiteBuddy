import { useState,useContext } from "react";
import { Link,useOutletContext } from "react-router-dom";
import UserContext from "../utils/UserContext";
const Login = () => {
  const { setIsLoggedIn } = useOutletContext();
  const {setUserName}=useContext(UserContext);
  return (
    <div className="login-container dark:shadow-lg dark:shadow-indigo-600 dark:bg-[#191740]">
      <h2 className="text-center dark:text-white">Login Form</h2>
      <form>
        <div className="form-group">
          <label className="dark:text-white">Email/Username</label>
          <input
            className="dark:bg-gray-800 bg:text-white"
            type="email"
            name="email"
            required
            onChange={(e)=>{
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label className="dark:text-white">Password:</label>
          <input
            className="dark:bg-gray-800 bg:text-white"
            type="password"
            name="password"
            required
          />
        </div>
        <button className="form-login" type="submit"><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/" onClick={()=>{
          setIsLoggedIn?setIsLoggedIn(true):setIsLoggedIn(false)
        }}>Login</Link></button>
        <p className="dark:text-white" style={{ marginTop: '15px' }}>Don't have an account ? <span><Link to="/register" className="dark:text-yellow-400" style={{ textDecoration: 'none' }}>Register ?</Link></span></p>
      </form>
    </div>
  );
};

export default Login;
