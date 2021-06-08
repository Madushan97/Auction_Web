import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
// import './ValidatedLoginForm.css'
import {Link} from 'react-router-dom'
import Popup from "reactjs-popup";



const ConfirmationLog = () => (
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
      
    })}
  >
      
    {props => {
      const {
        values,
        touched,
        errors,
        
        handleChange,
        handleBlur,
        handleSubmit
      } = props;

      
      return (

        
        <form onSubmit={handleSubmit}>
            <h2>Confirmation</h2>
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

          
        
        
        <Link
        to='./Messagepopup'>
          
          <Popup trigger={<button> Delete Auction</button>} position="right center">
            <h3>The request has been sent</h3>
        </Popup>
        </Link>
          
        </form>
      );
    }}
  </Formik>
);

export default ConfirmationLog;
