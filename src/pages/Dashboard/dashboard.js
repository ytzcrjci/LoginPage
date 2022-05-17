import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../authContext/authContext';

import FormButton from '../../form/form-inputs/form-button';
import Illustration from '../login-page/illustration/illustration';

import './dashboard.module.scss';
import styles from './dashboard.module.scss';

function DashBoard() {
 const [isSubmitting, setIsSubmitting] = useState();
 const { user, logout } = useAuth();

 function signout() {
  logout();
 }

 return (
  <div className={styles.container}>
   <Illustration></Illustration>
   <div className={styles.content}>
    <div className={styles.contentInfo}>
     <h1 className={styles.title}>Dashboard</h1>
     <div>
      {user ? (
       <div className={styles.logged}>
        Hello: <u>{user.email}!</u>
        <br />
        Your name: {user.name}
        <br />
        Your Surname: <br />
        <div className={styles.button}>
         <FormButton
          topic="Logging out"
          onClick={signout}
          title="Logout"
          classname="btn btn-login"
         ></FormButton>
        </div>
       </div>
      ) : (
       <div classname={styles.notlogged}>
        You have been logged out <br />
        <div className={styles.button}></div>
        <Link to="/login">Turn back to the Login Page</Link>
       </div>
      )}
     </div>
    </div>
   </div>
  </div>
 );
}

export default DashBoard;
