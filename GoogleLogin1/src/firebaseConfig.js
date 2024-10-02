import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyC6PVS_Zjp1rcjPD68oG9TYuJXp-ijWJMI",
    authDomain: "vuejs-social-login.firebaseapp.com",
    projectId: "vuejs-social-login",
    storageBucket: "vuejs-social-login.appspot.com",
    messagingSenderId: "149187253027",
    appId: "1:149187253027:web:5ffd9e135f903244c97296",
    measurementId: "G-KVN6KQXHM9"
  };

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;