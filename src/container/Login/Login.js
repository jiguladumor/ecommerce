import React, { useState } from "react";
import * as yup from "yup";
import { Form, Formik, useFormik } from "formik";
import { forgotpassword, googlelogin, signinuser, signupuser } from '../redux/action/auth.Action';
import { useDispatch } from "react-redux";

// export default function Login() {
//   const [usertype, setuserType] = useState("login");
//   const [reset, setReset] = useState([])
 
//   const dispatch = useDispatch()

//   const handleLogin = (values) => {
//     // console.log(values);
//     dispatch(signinuser(values));
//   };

//   const handleSignup = (values) => {
//     // console.log(values);
//     dispatch(signupuser(values))
//   };

//   const handleGoogalesignup = () => {
//     dispatch(googlelogin())
// }

//   const handlePassword = (values) => {
//     // alert(JSON.stringify(values.email));
//     dispatch(forgotpassword(values))

//   let login = {
//     email: yup.string().required("please enter email").email("please enter your email"),
//     password: yup.string().required("please enter your password"),
//   };

//   let Signup = {
//     name: yup.string().required("please enter your name"),
//     email: yup.string().required("please enter email").email("please enter your email"),
//     password: yup.string().required("please enter your password"),
//   };

//   let Password = {
//     email: yup.string().required('enter email').email('enter valid email')
//   }


//   let loginschema, initval;

//   // console.log(reset);
//   if (usertype === "login" && !reset) {
//     loginschema = yup.object().shape(login);
//     initval = {
//         email: '',
//         password: ''
//     }
// } else if (usertype === "Signup" && !reset) {
//     loginschema = yup.object().shape(Signup);
//     initval = {
//         // name: '',
//         email: '',
//         password: ''
//     }
// } else if (reset) {
//     console.log(reset);
//     loginschema = yup.object().shape(Password);
//     initval = {
//         email: ''
//     }
// }


//   const formik = useFormik({
//     initialValues: initval,
//     validationSchema: loginschema,
//     onSubmit:(values, { resetForm }) => {
//       // alert(JSON.stringify(values, null, 2));
//       if (usertype === "login" && !reset) {
//         handleLogin(values)
//       } else if (usertype === "Signup" && !reset ) {
//         handleSignup(values)
//       } else if (reset) {
//         handlePassword(values)
//       }
//       resetForm();
//     },
//   });

//   // console.log(formik.errors);

//   return (
//     <section id="appointment" className="appointment">
//       <div className="container">
//         <div className='section-title'>
//           {
//             reset ?
//               <h2 className='center'>Forget password</h2> :
//               usertype === 'login' ? <h2 className='center'>login</h2> : <h2 className='center'>Signup</h2>
//           }
//         </div>
//         <div action method="post" className="php-email-form ">
//           <Formik value={formik}>
//             <Form onSubmit={formik.handleSubmit}>
//               <div className="row">
//                 {reset === true ? (
//                   <div className="col-md-12  form-group mt-3 mt-md-0">
//                     <input
//                       type="email"
//                       className="form-control"
//                       name="email"
//                       id="email"
//                       placeholder="Your email"
//                       onChange={formik.handleChange}
//                       value={formik.values.email}
//                     />
//                     <p>{formik.errors.email}</p>
//                     <div className="validate" />
//                   </div>
//                 ) : null}
//                 {

//                   usertype === "login" ? null : (
//                     <div className="col-md-12 form-group mt-3 mt-md-0">
//                       <input
//                         type="name"
//                         className="form-control"
//                         name="name"
//                         id="name"
//                         placeholder="Your name"
//                         onChange={formik.handleChange}
//                         value={formik.values.name}
//                       />
//                       <p>{formik.errors.name}</p>
//                       <div className="validate" />
//                     </div>
//                   )
//                 }

//                 <div className="col-md-12 form-group mt-3 mt-md-0 ">
//                   <input
//                     type="email"
//                     className="form-control"
//                     name="email"
//                     id="email"
//                     placeholder="Your email"
//                     data-rule="email"
//                     onChange={formik.handleChange}
//                     value={formik.values.email}
//                     data-msg="Please enter a valid email"
//                   />


//                   <p>{formik.errors.email}</p>
//                   <div className="validate" />
//                 </div>
//                 <br></br>

//                 <div className="col-md-12 form-group mt-3 mt-md-0">
//                   <input
//                     type="password"
//                     className="form-control"
//                     name="password"
//                     id="phone"
//                     placeholder="password"
//                     onChange={formik.handleChange}
//                     value={formik.values.password}
//                   />
//                   <p>{formik.errors.password}</p>
//                   <div className="validate" />
//                 </div>
//               </div>

//               {
//                 reset ?
//                   <div className="text-center">
//                     <button type="submit">Forgot password</button>
//                   </div>
//                   :
//                   usertype === 'login' ?
//                     <div className="text-center">
//                       <button type="submit">login</button><br></br>
//                     </div> :
//                     <div className="text-center">
//                       <button type="submit">signup</button>
//                     </div>
//               }
//               {reset === true ? (
//                 <div className="text-center mt-5">
//                   <span>already have an account ?</span>
//                   <button onClick={() => setReset(false)} >login</button>
//                 </div>
//               ) : usertype === "login" ? (
//                 <div className="text-center mt-5">
//                   <span>create a New account ? </span>
//                   <button className="border-0 bg-transparent text-warning"
//                     onClick={() => {
//                       setuserType("Signup");
//                     }}
//                   >
//                     <a>signup</a>
//                   </button>{" "}
//                   <br></br>
//                   <button
//                     onClick={() => {
//                       setReset(true);
//                     }}
//                   >
//                     Forget password
//                   </button>
//                 </div>
//               ) : (
//                 <div className="text-center mt-5">
//                   <span>already have an account ?</span>
//                   <button className="border-0 bg-transparent text-warning"
//                     onClick={() => {
//                       setuserType("login");
//                     }}
//                   >
//                     login
//                   </button>
//                 </div>                
//               )}
//               <div>
//                 <button onClick={() => {handleGoogalesignup() }}>Googale Signup</button>
//               </div>
//             </Form>
//           </Formik>
//         </div>
//       </div>
//     </section>
//   );
// }
// }

// import React, { useState } from 'react';
// import * as yup from 'yup';
// import { Form, Formik, useFormik } from 'formik';
// import { useDispatch } from 'react-redux';
// import { forgotpassword, googlelogin, signinuser, signupuser } from '../redux/action/auth.Action';

function Login(props) {
    const [userType, setUserType] = useState('login')
    const [reset, setReset] = useState(false)
    
    const dispatch = useDispatch();

    const handletLogin = (values) => {
        dispatch(signinuser(values));

    }

    const handleGoogalesignup = () => {
        dispatch(googlelogin())
    }

    const handleSignup = (values) => {
        dispatch(signupuser(values))
    }
    const handlepassword = (values) => {
        dispatch(forgotpassword(values)) 
    }

    let login_set = {
        email: yup.string().required('enter email').email('enter valid email'),
        password: yup.string().required('please enter password'),
    }

    let signup_set = {
        email: yup.string().required('enter email').email('enter valid email'),
        password: yup.string().required('please enter password'),
    }
    let password_set = {
        email: yup.string().required('enter email').email('enter valid email')
    }


    let schema, initVal;

    // console.log(reset);
    if (userType === "login" && !reset) {
        schema = yup.object().shape(login_set);
        initVal = {
            email: '',
            password: ''
        }
    } else if (userType === "Signup" && !reset) {
        schema = yup.object().shape(signup_set);
        initVal = {
            // name: '',
            email: '',
            password: ''
        }
    } else if (reset) {
        console.log(reset);
        schema = yup.object().shape(password_set);
        initVal = {
            email: ''
        }
    }

    const formik = useFormik({
        initialValues: initVal,
        validationSchema: schema,
        onSubmit: (values, { resetForm }) => {
            if (userType === "login" && !reset) {
                handletLogin(values)
            } else if (userType === "Signup" && !reset) {
                handleSignup(values)
            } else if (reset) {
                handlepassword(values)
            }
            resetForm();
        }
    })


    return (
        <section id="appointment" className="appointment d-flex">
            <div className="container">
                <div className='section-title'>
                    {
                        reset ?
                            <h2 className='centerr'>Reset Password</h2> :
                            userType === 'login' ? <h2 className='centerr'>login</h2> : <h2 className='centerr'>Signup</h2>
                    }
                </div>
                <div className='php-email-form'>
                    <Formik value={formik}>
                        <Form onSubmit={formik.handleSubmit}>
                            <div className='row align-items-center justify-content-center'>
                                <div className="col-md-7 form-group mt-3 mt-md-0">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        onBlur={formik.handleBlur}
                                    />
                                    {
                                        formik.errors.email && formik.touched.email ? <p>{formik.errors.email}</p> : ''
                                    }
                                    <div className="validate" />
                                </div>
                                {
                                    reset === true ?
                                        null :
                                        <div className="col-md-7 form-group mt-3 mt-md-0">
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                id="password"
                                                placeholder="Your Password"
                                                onChange={formik.handleChange}
                                                value={formik.values.password}
                                                onBlur={formik.handleBlur}
                                            />
                                            {
                                                formik.errors.password && formik.touched.password ? <p>{formik.errors.password}</p> : ''
                                            }

                                            <div className="validate" />
                                        </div>
                                }
                                {
                                    reset ?
                                        <div className="text-center">
                                            <button type="submit" >Forgot password</button><br></br>
                                        </div>
                                        :
                                        userType === 'login' ?
                                            <div className="text-center">
                                                <button type="submit">login</button><br></br>
                                            </div> :
                                            <div className="text-center">
                                                <button type="submit">signup</button>
                                            </div>
                                }
                                {
                                    reset === true ?
                                        <div className='text-center mt-5'>
                                            <span>already have an account ?</span>
                                            <a onClick={() => setReset(false)}>login</a>
                                        </div> :
                                        userType === 'login' ?
                                            <div className='text-center mt-5'>
                                                <span>create a New account ?</span>
                                                <a onClick={() => { setUserType('Signup') }} >Signup</a> <br></br>
                                                <a className='mt-3' onClick={() => { setReset(true) }}>Forget password</a>
                                            </div> :
                                            <div className='text-center mt-5'>
                                                <span>already have an account ?</span>
                                                <a onClick={() => { setUserType('login') }} >login</a>
                                            </div>
                                }
                            </div>
                            <div>
                                <button onClick={() => {handleGoogalesignup() }}>Googale Signup</button>
                            </div>
                        </Form>
                    </Formik>
                    <div>
                    </div>
                </div>
            </div>


        </section >
    );
}





export default Login;