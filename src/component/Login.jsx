import { useState } from "react";
import { Link } from "react-router-dom";
import useVisible from "./useVisible";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const [visible, toggle] = useVisible();

  return (
    <div className="App">
      <form>
        <div className="container">
          <div className="row h-100">
            <div className="col">
              <div className="welcom-back">
                <h3>
                  Welcome Back <span style={{ color: "#8CADE1" }}>!</span>
                </h3>
              </div>
              <div className="input">
                <div className="email mt-5 col-10">
                  <input
                    placeholder=" "
                    className="col-12 mt-3"
                    type="email"
                    id="email"
                    name="email"
                  />
                  <label htmlFor="email">E-mail</label>
                </div>
                {/*end Email */}
                {/*start password */}
                <div className="pass mt-5 col-10">
                  <input
                    placeholder=" "
                    className="col-12 mt-3"
                    type={visible ? "text" : "password"}
                    id="pass"
                    name="pass"
                  />
                  <label htmlFor="pass">Password</label>
                  {visible ? (
                    <FontAwesomeIcon
                      icon={faEye}
                      style={{
                        color: "whitesmoke",
                        fontSize: "20px",
                        position: "absolute",
                        right: "10px",
                        bottom: "5px",
                      }}
                      onClick={toggle}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      style={{
                        color: "whitesmoke",
                        fontSize: "20px",
                        position: "absolute",
                        right: "10px",
                        bottom: "5px",
                      }}
                      onClick={toggle}
                    />
                  )}
                </div>

                <Link to="" className="forgot-pass mt-3 mb-0">
                  Forgot Password?
                </Link>

                <p className="our-login">our Login</p>
                {/*start Signup */}
                <div className="login">
                  <Link to="" className="google">
                    <FontAwesomeIcon
                      style={{ fontSize: "20px" }}
                      icon={faGoogle}
                    />

                    <p>Google</p>
                  </Link>

                  <Link to="" className="facebook">
                    <FontAwesomeIcon
                      style={{ fontSize: "20px" }}
                      icon={faFacebookF}
                    />

                    <p>Facebook</p>
                  </Link>
                </div>
                {/*end Signup */}
                {/*start btnSignup */}
                <input
                  type="submit"
                  className="btn-singup my-3"
                  value="Login"
                />
                {/*end bt*/}
                <p id="not-account">
                  Don't have an account?{" "}
                  <Link to="/signup" style={{ color: "#8CADE1" }}>
                    Signup
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
