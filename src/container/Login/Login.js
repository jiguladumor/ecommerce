import React, { useState } from "react";
import * as yup from "yup";
import { Form, Formik, useFormik } from "formik";
import { forgotpassword, googlelogin, signinuser, signupuser } from '../redux/action/auth.Action';
import { useDispatch } from "react-redux";

export default function Login() {
  const [usertype, setuserType] = useState("Login");
  const [reset, setReset] = useState([])
  const [password, setpassword] = useState(false);
  const dispatch = useDispatch()

  const handleLogin = (values) => {
    console.log(values);
    dispatch(signinuser(values));
  };

  const handleSignup = (values) => {
    console.log(values);
    dispatch(signupuser(values))
  };

  const handleGoogalesignup = () => {
    dispatch(googlelogin())
}

  const handlepassword = (values) => {
    // alert(JSON.stringify(values.email));
    dispatch(forgotpassword(values))

  let Login = {
    email: yup
      .string()
      .required("please enter email")
      .email("please enter your email"),
    password: yup.string().required("please enter your password"),
  };

  let Signup = {
    name: yup.string().required("please enter your name"),
    email: yup
      .string()
      .required("please enter email")
      .email("please enter your email"),
    password: yup.string().required("please enter your password"),
  };

  let Password = {
    email: yup.string().required('enter email').email('enter valid email')
  }


  let loginschema, initval;

  if (usertype === "Login") {
    loginschema = yup.object().shape(Login);
    initval = {
      email: "",
      password: "",
    };
  } else if (usertype === "Signup") {
    loginschema = yup.object().shape(Signup);
    initval = {
      name: "",
      email: "",
      password: "",
    };
  } else if (reset) {
    console.log(reset);
    loginschema = yup.object().shape(Password);
    initval = {
      email: ''
    }
  }


  const formik = useFormik({
    initialValues: initval,
    validationSchema: loginschema,
    onSubmit:(values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      if (usertype === "Login" && !password) {
        handleLogin(values)
      } else if (usertype === "Signup" && !password ) {
        handleSignup(values)
      } else if (password) {
        handlepassword(values)
      }
      resetForm();
    },
  });

  // console.log(formik.errors);

  return (
    <section id="appointment" className="appointment">
      <div className="container">
        <div className='section-title'>
          {
            password ?
              <h2 className='center'>Forget password</h2> :
              usertype === 'Login' ? <h2 className='center'>Login</h2> : <h2 className='center'>Signup</h2>
          }
        </div>
        <div action method="post" className="php-email-form ">
          <Formik value={formik}>
            <Form onSubmit={formik.handleSubmit}>
              <div className="row">
                {password === true ? (
                  <div className="col-md-12  form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    <p>{formik.errors.email}</p>
                    <div className="validate" />
                  </div>
                ) : null}
                {

                  usertype === "Login" ? null : (
                    <div className="col-md-12 form-group mt-3 mt-md-0">
                      <input
                        type="name"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Your name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                      />
                      <p>{formik.errors.name}</p>
                      <div className="validate" />
                    </div>
                  )
                }

                <div className="col-md-12 form-group mt-3 mt-md-0 ">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your email"
                    data-rule="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    data-msg="Please enter a valid email"
                  />


                  <p>{formik.errors.email}</p>
                  <div className="validate" />
                </div>
                <br></br>

                <div className="col-md-12 form-group mt-3 mt-md-0">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="phone"
                    placeholder="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  <p>{formik.errors.password}</p>
                  <div className="validate" />
                </div>
              </div>

              {/* {password ? (
                <div className="text-center">
                  <button type="submit" onClick={() => passwordchng()}>
                    Forget password
                  </button>
                  <br></br>
                </div>
              ) : usertype === "Login" ? (
                <div className="text-center">
                  <button className="" type="submit" onClick={() => handleLogin()}>
                    Login
                  </button>
                  <br></br>
                </div>
              ) : (
                <div className="text-center">
                  <button onClick={() => handleSignup()} type={"submit"}>
                    signup
                  </button>
                </div>
              )} */}
              {
                password ?
                  <div className="text-center">
                    <button type="submit">Forgot password</button>
                  </div>
                  :
                  usertype === 'Login' ?
                    <div className="text-center">
                      <button type="submit">Login</button><br></br>
                    </div> :
                    <div className="text-center">
                      <button type="submit">signup</button>
                    </div>
              }
              {password === true ? (
                <div className="text-center mt-5">
                  <span>already have an account ?</span>
                  <button onClick={() => setpassword(false)} >Login</button>
                </div>
              ) : usertype === "Login" ? (
                <div className="text-center mt-5">
                  <span>create a New account ? </span>
                  <button className="border-0 bg-transparent text-warning"
                    onClick={() => {
                      setuserType("Signup");
                    }}
                  >
                    <a>signup</a>
                  </button>{" "}
                  <br></br>
                  <button
                    onClick={() => {
                      setpassword(true);
                    }}
                  >
                    Forget password
                  </button>
                </div>
              ) : (
                <div className="text-center mt-5">
                  <span>already have an account ?</span>
                  <button className="border-0 bg-transparent text-warning"
                    onClick={() => {
                      setuserType("Login");
                    }}
                  >
                    Login
                  </button>
                </div>
                
              )}
              <div>
                <button onClick={() => {handleGoogalesignup() }}>Googale Signup</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
}
}