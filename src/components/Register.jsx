import { useContext } from "react";
import { Link,useOutletContext } from "react-router-dom";
import UserContext from "../utils/UserContext";
const Register = () => {
  const {setUserName}=useContext(UserContext);
  const { setIsLoggedIn } = useOutletContext();
  return (
    <div className="register-box dark:shadow-lg dark:shadow-indigo-600 dark:bg-[#191740]">
      <h2 className="dark:text-white" style={{ textAlign: 'center' }}>Register</h2>
      <div className="register-container">
        <form>
          <div className="form-group">
            <label className="dark:text-white">UserName:</label>
            <input className="dark:bg-gray-800 bg:text-white" type="text" name="fullName" onChange={(e)=>{
              setUserName(e.target.value);
            }} />
          </div>
          <div className="form-group">
            <label className="dark:text-white">Email:</label>
            <input className="dark:bg-gray-800 bg:text-white" type="email" name="email" />
          </div>
          <div className="form-group">
            <label className="dark:text-white">Password:</label>
            <input className="dark:bg-gray-800 bg:text-white" type="password" name="password" />
          </div>
          <div className="form-group">
            <label className="dark:text-white">Confirm Password:</label>
            <input className="dark:bg-gray-800 bg:text-white" type="password" name="confirmPassword" />
          </div>
          <button className="form-register" type="submit">
          <Link style={{textDecoration:'none', color:'inherit'}} to="/" onClick={()=>{
            setIsLoggedIn?setIsLoggedIn(true):setIsLoggedIn(false)
          }}>Register</Link></button>
          <p className="dark:text-white" style={{marginTop:'15px'}}>Already have an account ? <span><Link to="/login" className="dark:text-yellow-500" style={{textDecoration:'none'}}>Login ?</Link></span></p>
        </form>
      </div>
    </div>
  );
};

export default Register;
