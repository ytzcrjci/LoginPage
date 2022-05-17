import React from 'react';
import { Link } from 'react-router-dom';

import './register.module.scss';
import styles from './register.module.scss';

import FormRegister from './form-register/form-register';

export default function RegisterPage() {
 return (
  <div className={styles.fullcontainer}>
   <div className={styles.container}>
    <div className={styles.loginlink}>
     <div>
      <Link to="/login">Allready a member?</Link>
      <img src="../images/Member-vector.png" alt="member-icon"></img>
     </div>
    </div>
    <div className={styles.titleSection}>
     <div className={styles.title}>Input your information</div>
     <div className={styles.desc}>
      We need you to help us with some basic information for your account
      creation. Here are our <a href="/">terms and conditins</a>. Please
      read them carefully. We are GDRP compliiant
     </div>
    </div>
    <hr className={styles.hr}></hr>
    <FormRegister></FormRegister>
   </div>
   <div className={styles.illustration}>
    <img src="../images/illustration3.png" alt="Illustration"></img>
   </div>
  </div>
 );
}
