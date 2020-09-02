import React from "react";
import './Login.css';

const Login = () => {
  return(
    <>
    <div className='hero'>
      <div className="level-center">>
        <div className="login-container">
          <h1><strong>Welcome Back! <br></br>Please Sign in Below:</strong></h1>
        </div>
      
      <div className="form">
        <div className="field">
          <p class="control has-icons-left has-icons-right">
            <input className="input" type="email" placeholder="Email" />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
      </div>

      <div className="field is-right">
        <p class="control has-icons-left">
          <input className="input" type="password" placeholder="Password" />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </p>
      </div>

      <div className="field">
        <p className="control">
          <button className="button">
            Login
          </button>
        </p>
      </div>
      </div>
    </div>
  </div>
  </>
  )
};

export default Login;
