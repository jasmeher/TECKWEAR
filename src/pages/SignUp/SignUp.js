import React from "react";
import { Link } from "react-router-dom";
import "./signUp.scss";
import AnimatedRoute from "./../../components/AnimatedPage/AnimatedPage";
import signup from "./../../static/signupBg2.webp";

const SignUp = () => {
  return (
    <>
      <AnimatedRoute>
        <div className="signUpContainer">
          <div className="left">
            <img src={signup} alt="" className="signUpImg" />
          </div>
          <div className="right">
            <div className="formContainer">
              <h2 className="heading">Sign Up</h2>

              <form method="post" className="form">
                <input
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  className="formInput"
                />
                <input
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  className="formInput"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="formInput"
                />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="formInput"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="formInput"
                />
                <input
                  type="password"
                  name="cpassword"
                  placeholder="Confirm Password"
                  className="formInput"
                />

                <input type="submit" value="SIGN UP" className="cta mt-5" />
              </form>

              <span className="link">
                Already have an account?
                <span className="redirect">
                  <Link to="/signin" className="text-reset">
                    Sign In!
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

export default SignUp;
