import { useForm } from "react-hook-form";
import useVisible from "./useVisible";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

const SignUp = (props) => {
  const [visible, toggle] = useVisible();

  const schema = yup.object().shape({
    fname: yup.string().required(),
    lname: yup.string().required(),
    email: yup.string().email().required(),
    pass: yup.string().min(4).max(25).required(),
  });

  const onFormSubmit = (data) => {
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

    const isDuplicate = existingUsers.some(
      (user) =>
        user.fname === data.fname &&
        user.lname === data.lname &&
        user.email === data.email &&
        user.pass === data.pass
    );

    if (!isDuplicate) {
      existingUsers.push(data);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      console.log("New account data saved:", data);
    } else {
      console.log("Duplicate account data not saved:", data);
    }
  };

  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onFormSubmit)} onChange={props.onChange}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="text-new ">
                <h3>Create new account</h3>
                <div></div>
              </div>
              <p className="text-login">
                Already have an account? <Link to="/login">Login</Link>
              </p>
              <div className="inputs ">
                <div className="name d-flex flex-wrap col-11 col-sm-10">
                  {/*start firstname */}
                  <div className="fname col-11 col-sm-12 me-2 me-ms-0~ col-lg-5 me-0">
                    <input
                      placeholder=" "
                      type="text"
                      id="fname"
                      name="fname"
                      {...register("fname")}
                    />
                    <label htmlFor="fname">FirstName</label>
                  </div>
                  {/*emd firstname */}

                  {/*start lastname*/}
                  <div className="lname col-11 col-sm-12 me-2 col-lg-5">
                    <input
                      placeholder=" "
                      type="text"
                      id="lname"
                      name="lname"
                      {...register("lname")}
                    />
                    <label htmlFor="lname">LastName</label>
                  </div>
                </div>
                {/*end lastname */} 
                {/*start Email */}
                <div className="email col-10">
                  <input
                    placeholder=" "
                    className="col-12"
                    type="email"
                    id="email"
                    name="email"
                    {...register("email")}
                  />
                  <label htmlFor="email">E-mail</label>
                </div>
                {/*end Email */}
                {/*start password */}
                <div className="pass col-10">
                  <input
                    placeholder=" "
                    className="col-12"
                    type={visible ? "text" : "password"}
                    id="pass"
                    name="pass"
                    {...register("pass")}
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
                {/*end password */}

                {/*start log */}
                <p className="our">our Signup with</p>
                {/*end log */}

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
                    {/* <img
                      src="facebook.png"
                      width={25}
                      height={25}
                      alt="facebook"
                    /> */}
                    <p>Facebook</p>
                  </Link>
                </div>
                {/*end Signup */}

                {/*start btnSignup */}
                <input
                  type="submit"
                  className="btn-singup"
                  value="Create Account"
                />
                {/*end btnSignup */}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
