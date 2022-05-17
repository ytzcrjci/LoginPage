import React from 'react';
import { Formik, Form } from 'formik';
import { registerValidation } from '../../../form/form-validation/register-validation';
import { number } from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../../authContext/authContext';

import styles from './form-register.module.scss';
import './form-register.module.scss';
import '../../../form/form-inputs/form-inputs.scss';
import '../../../form/form-inputs/form-inputs.scss';

import FormButton from '../../../form/form-inputs/form-button';
import InputsForm from '../../../form/form-inputs/form-inputs';
import FormCheckbox from '../../../form/form-inputs/form-checkbox';

function FormRegister(props) {
 const url =
  'https://users-7f32e-default-rtdb.firebaseio.com/users-7f32e-default-rtdb.json';
 const { signup } = useAuth();
 let agreed = (
  <span>
   I agree with{' '}
   <a style={{ fontSize: '13px' }} href="/">
    terms and coditions
   </a>
  </span>
 );
 const navigate = useNavigate();
 return (
  <Formik
   novalidate
   enableReinitialize={true}
   initialValues={{
    id: number,
    name: '',
    surname: '',
    email: '',
    phonenumber: '',
    password: '',
    confirmpassword: '',
    toggle: true,
   }}
   validationSchema={registerValidation}
   onSubmit={async (values) => {
    await axios
     .post(url, {
      // id: '',
      name: values.name,
      surname: values.surname,
      phonenumber: values.phonenumber,
      email: values.email,
      password: values.password,
     })
     .then((res) => {
      console.log(values);
      navigate('/login');
     });
   }}
  >
   {({ handleChange, values, isSubmitting, handleBlur }) => (
    <Form noValidate method="get" autoComplete="off">
     <div className={styles.formSection}>
      <div className={styles.leftSection}>
       <InputsForm
        title="Name *"
        id="name"
        name="name"
        type="text"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Name"
       ></InputsForm>
      </div>
      <div className={styles.rightSection}>
       <InputsForm
        title="Surname"
        id="surname"
        name="surname"
        value={values.surname}
        onChange={handleChange}
        onBlur={handleBlur}
        type="text"
        placeholder="Surname"
       ></InputsForm>
      </div>
      <div className={styles.leftSection}>
       <InputsForm
        title="E-mail *"
        id="email"
        name="email"
        type="email"
        value={values.email}
        onBlur={handleBlur}
        placeholder="abc@mail.com"
       ></InputsForm>
      </div>
      <div className={styles.rightSection}>
       <InputsForm
        value={values.phonenumber}
        onChange={handleChange}
        title="Phone number *"
        id="phonenumber"
        name="phonenumber"
        type="number"
        onBlur={handleBlur}
        placeholder="678234110"
       ></InputsForm>
      </div>
      <div className={styles.leftSection}>
       <InputsForm
        onBlur={handleBlur}
        InputsForm
        value={values.password}
        onChange={handleChange}
        title="Password *"
        id="password"
        name="password"
        type="password"
        placeholder="**********"
       ></InputsForm>
      </div>
      <div className={styles.rightSection}>
       <InputsForm
        value={values.confirmpassword}
        onChange={handleChange}
        onBlur={handleBlur}
        title="Confirm password *"
        id="confirmpassword"
        name="confirmpassword"
        type="password"
        placeholder="**********"
       ></InputsForm>
      </div>
     </div>
     <hr className={styles.hr}></hr>
     <div className={styles.registerSection}>
      <div className={styles.checkboxLabelContent}>
       <FormCheckbox
        required
        onChange={handleChange}
        onBlur={handleBlur}
        id="rememberme"
        disabled={isSubmitting}
        title={agreed}
       />
      </div>
      <div className={styles.registerButton}>
       <FormButton
        loginTitle="Singing in"
        title="Create account"
        submitted={isSubmitting}
        classname="btn-register btn"
       />
      </div>
     </div>
    </Form>
   )}
  </Formik>
 );
}

export default FormRegister;
