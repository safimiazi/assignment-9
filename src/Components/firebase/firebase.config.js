// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_APIKEY,
//   authDomain:import.meta.env.VITE_AUTHDOMAIN,
//   projectId:import.meta.env.VITE_PROJECTID,
//   storageBucket:import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
//   appId:import.meta.env.VITE_APPID
// };


const firebaseConfig = {
    apiKey: "AIzaSyAE-K8RizaG7lZMWGXvfCfBEwZqpDPWyb4",
    authDomain: "event-management-project-4aada.firebaseapp.com",
    projectId: "event-management-project-4aada",
    storageBucket: "event-management-project-4aada.appspot.com",
    messagingSenderId: "154962950711",
    appId: "1:154962950711:web:6ac23c0d346504b5f19db2"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
