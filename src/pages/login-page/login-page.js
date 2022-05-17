import React from 'react';
import Illustration from '../login-page/illustration/illustration';
import LoginForm from './login-form/login-form';
import './login-page.module.scss';
import styles from './login-page.module.scss';

export default function LoginPage() {
 return (
  <div className={styles.container}>
   <Illustration />
   <LoginForm />
  </div>
 );
}
