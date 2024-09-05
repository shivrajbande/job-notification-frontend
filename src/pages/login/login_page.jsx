import React from "react";
import {useState, useReducer} from 'react';
import "./login.css";
import ImageURl from "../../assets/images/job portal.jpg";
import CustomButtom from "../../componenets/button.jsx";
import {loginReducer} from '../../reducers/login/reducer.jsx';
import {login} from '../../services/login_service.jsx';

const Login = () => {
  const [credentails,setCredentials] = useState({email:'',password : ''});
  const[state,dispatch] = useReducer(loginReducer,{user:null,loading:false,error:null});
  const handleSubmit =(e)=>{
    e.preventDefault();
    login(dispatch)(credentails);
    

  }
  return (
    <>
      <div className="main">
        <div className="left">
          <h2>Welcome back!</h2>
          <p id = "details-para">Please enter your details</p>
          <div className="middle-content">
            <input type="email" name="user-email" id="" placeholder="Email" onChange={(e)=>setCredentials({...credentails,email:e.target.value})}/>
            <input
              type="password"
              name="user-password"
              placeholder="Password"
              onChange={(e)=>setCredentials({...credentails,password:e.target.value})}
            />
          </div>
          <div className="forgot-password">
            <div className="checkbox-content">
              <input type="checkbox" />
              <p id = "remember-para">remember for next 30days</p>
            </div>

            <a href="/">
              <p id="forgot">forgot password?</p>
            </a>
          </div>

          <div className="bottom-content">
           
            <button onClick={handleSubmit}>
              <span id = "login">Log-In</span>
            </button>
            <button>
              <div className="googlelogo-content">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"
                  alt=""
                  id="google-logo"
                />
                <span id = "login">Log-In with google</span>
              </div>
            </button>
          </div>
        </div>
        <div className="right">
          <img src={ImageURl} alt="hhelo" />
        </div>
      </div>

       {/* Show loading, success, or error messages */}
       {state.loading && <p>Logging in...</p>}
      {state.error && <p style={{ color: 'red' }}>{state.error}</p>}
      {state.user && <p>Welcome, {state.user.username}!</p>}
    </>
  );
};
export default Login;
