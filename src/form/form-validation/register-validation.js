import * as Yup from 'yup';
import { string, boolean, number } from 'yup';
import { useState } from 'react';

const TakenEmaill = () => {
 const url =
  'https://users-7f32e-default-rtdb.firebaseio.com/users-7f32e-default-rtdb.json';
 const [loadedEmails, setLoadedEmails] = useState([]);
 fetch(url)
  .then((response) => {
   return response.json();
  })
  .then((data) => {
   const emails = [];
   for (const key in data) {
    const email = {
     id: key,
     ...data[key],
    };
    emails.push(email);
   }
   setLoadedEmails(emails);
  });
};

const takenEmail = ['ania@wp.pl', 'basia@wp.pl'];

export const registerValidation = Yup.object().shape({
 name: string()
  .min(3, "It's too short")
  .required('You have to enter your name'),
 email: string()
  .email('Invalid email')
  .required('This field is required')
  .notOneOf([takenEmail], 'Email already taken!'),
 password: string()
  .required('This field is required')
  .min(8, 'Must contain more than 8 characters')
  .max(42, "Can't contain more than 42 characters")
  .matches('[A-Z]', 'Must contain one or more big letter')
  .matches('[0-9]', 'Must contain one or more number')
  .matches(
   /[●!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/,
   'Must contain one or more special character'
  ),
 confirmpassword: string()
  .required('You have to confirm your password!')
  .oneOf([Yup.ref('password')], 'Password not matched'),
 phonenumber: number().required('This field is required'),
 toggle: boolean().required('Must agree').isTrue('Must agree'),
});
