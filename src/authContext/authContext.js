import React, { createContext, useContext, useState } from 'react';
import {
 createUserWithEmailAndPassword,
 signInWithEmailAndPassword,
 onAuthStateChanged,
 signOut,
} from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({});

export function useAuth() {
 return useContext(AuthContext);
}

export function AuthProvider({ children }) {
 const navigate = useNavigate();
 const [user, setCurrentUser] = useState();
 const [loading, setLoading] = useState(false);
 const [error, setError] = useState('');

 onAuthStateChanged(auth, (currentUser) => {
  setCurrentUser(currentUser);
 });

 const signup = async (email, password) => {
  try {
   console.log(email);
   const user = await createUserWithEmailAndPassword(auth, email, password);
   console.log(user);
   navigate('/account');
  } catch (error) {
   console.log(error.message);
  }
 };

 const login = async (email, password) => {
  try {
   const user = await signInWithEmailAndPassword(auth, email, password);
   console.log(user);
   navigate('/card');
  } catch (error) {
   console.log(error.message);
  }
 };

 async function logout() {
  await signOut(auth);
 }

 const value = {
  user,
  loading,
  error,
  login,
  signup,
  logout,
 };

 return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
