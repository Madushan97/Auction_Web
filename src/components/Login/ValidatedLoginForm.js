import React from "react";
import { Formik } from "formik";
// import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import './ValidatedLoginForm.css'
import {Link} from 'react-router-dom'



const ValidatedLoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    

    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
    })}
  >
      
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;

      return (

        
        <form onSubmit={handleSubmit}>
            <h2>Welcome to Admin Login</h2>
          <label htmlFor="email">Email</label>

          <input
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
          />

          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}

          <label htmlFor="email">Password</label>

          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />

          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
        <Link
        to='./AdminHomePage'>
          <button  type="submit" disabled={isSubmitting}>
            Login
          </button>
        </Link>
        
        <Link
        to='./PasswordReset'>
          <button type="submit" disabled={isSubmitting}>
            Reset Paswword
          </button>
        </Link>
          
        </form>
      );
    }}
  </Formik>
);

export default ValidatedLoginForm;
