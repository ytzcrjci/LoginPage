import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
 apiKey: 'AIzaSyApKARbzPLRJK1zmAn6gq04pnqLseN2Le4',
 authDomain: 'users-7f32e.firebaseapp.com',
 databaseURL: 'https://users-7f32e-default-rtdb.firebaseio.com',
 projectId: 'users-7f32e',
 storageBucket: 'users-7f32e.appspot.com',
 messagingSenderId: '704595946421',
 appId: '1:704595946421:web:bb4b01846b470fe39b47fc',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
