import React from 'react';
import { Formik, Form } from 'formik';
import { loginValidation } from '../../../form/form-validation/login-validation';
import { Link, useNavigate } from 'react-router-dom';
import '../login-page.module.scss';
import '../../../form/formik-errors.scss';
import '../../../form/container-form.scss';

import FormButton from '../../../form/form-inputs/form-button';
import GoogleButton from '../../../form/form-inputs/form-google-button';
import InputsForm from '../../../form/form-inputs/form-inputs';
import FormCheckbox from '../../../form/form-inputs/form-checkbox';

import { useAuth } from '../../../authContext/authContext';

export default function LoginForm(props) {
 const { login, user } = useAuth();
 const navigate = useNavigate();
 return (
  <Formik
   enableReinitialize={true}
   novalidate
   initialValues={{
    loginemail: '',
    loginpassword: '',
    toggle: true,
   }}
   validationSchema={loginValidation}
   onSubmit={async (values) => {
    const response = await login(values.loginemail, values.loginpassword);
    console.log(response);
    if (user) navigate('/account');
   }}
  >
   {({ values, isSubmitting, handleBlur, handleChange }) => (
    <div className="container-form">
     <div className="container-form-content">
      <img src="../images/logo.png" alt="logo"></img>
      <div className="title-primary title">Login to Your Account</div>
      <div className="desc">See what is going on with your business</div>
      <GoogleButton></GoogleButton>
      <div className="break-desc">
       ------------- or Sign in with Email -------------{' '}
      </div>
      <Form noValidate method="get" autoComplete="off">
       <InputsForm
        value={values.loginemail}
        title="Email *"
        onChange={handleChange}
        onBlur={handleBlur}
        id="loginemail"
        name="loginemail"
        type="email"
        placeholder="abc@mail.com"
       ></InputsForm>
       <InputsForm
        required
        value={values.loginpassword}
        title="Password *"
        onChange={handleChange}
        onBlur={handleBlur}
        id="loginpassword"
        name="loginpassword"
        type="password"
        placeholder="**********"
       ></InputsForm>
       <div className="checkbox-label-content">
        <FormCheckbox
         type="checkbox"
         required
         onChange={handleChange}
         onBlur={handleBlur}
         id="rememberme"
         disabled={isSubmitting}
         title="Remember me"
        ></FormCheckbox>
        <a href="/">Forgot Password?</a>
       </div>
       {/* {JSON.stringify({values})} */}
       {/* {errors.toggle ? errors.toggle : null} */}
       <FormButton
        loginTitle="Logging in"
        title="Login"
        submitted={isSubmitting}
        classname="btn btn-login"
       ></FormButton>
      </Form>
      <div className="register-section">
       <span className="register-section-desc">
        Not Registered yet?<Link to="/"> Create an account</Link>
       </span>
      </div>
      {/* <LoadedTakenEmails/> */}
     </div>
    </div>
   )}
  </Formik>
 );
}
