import React, { useState, useEffect, createContext } from 'react';

const LoadedTakenEmails = () => {
 const url =
  'https://users-7f32e-default-rtdb.firebaseio.com/users-7f32e-default-rtdb.json';
 const [loadedEmails, setLoadedEmails] = useState([]);
 const [isLoading, setIsLoading] = useState(false);
 const values = Array.from(loadedEmails.values());

 useEffect(() => {
  setIsLoading(true);
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
    setIsLoading(false);
    setLoadedEmails(emails);
    console.log(values);
   });
 }, []);

 return (
  <div style={{ padding: '0 0 100px 0' }}>
   <h1 style={{ textAlign: 'center', padding: '40px 0' }}>NIE</h1>
   {loadedEmails.map((email) => (
    <div key={email.id} id={email.id}>
     {email.email}
    </div>
   ))}
  </div>
 );
};

export default LoadedTakenEmails;
