import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signin.scss";
import AnimatedRoute from "../../components/AnimatedPage/AnimatedPage";
import signin from "./../../static/signInBg.webp";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUserInput = (e) => setUsername(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);
  return (
    <>
      <AnimatedRoute>
        <div className="signInPageContainer">
          <div className="left">
            <img src={signin} alt="" className="signInImg" />
          </div>
          <div className="right">
            <div className="formContainer">
              <h2 className="heading">Sign In</h2>

              <form method="post" className="form">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="formInput"
                  value={username}
                  onChange={handleUserInput}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="formInput"
                  value={password}
                  onChange={handlePwdInput}
                />

                <input type="submit" value="SIGN IN" className="cta mt-5" />
              </form>
              <span className="link">Forgot Password?</span>
              <span className="link">
                Don't have an account?
                <span className="redirect">
                  <Link to="/signup" className="text-reset">
                    Sign Up!
                  </Link>
                </span>
              </span>
            </div>
          </div>
        </div>
      </AnimatedRoute>
    </>
  );
};

export default SignIn;
