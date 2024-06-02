import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn_kNTlxXiM4BmIdJF01hJPUb7q5-pAj8",
  authDomain: "checkpoint2-d9b9f.firebaseapp.com",
  projectId: "checkpoint2-d9b9f",
  storageBucket: "checkpoint2-d9b9f.appspot.com",
  messagingSenderId: "388682434062",
  appId: "1:388682434062:web:2a8b1c239aa715bfe2de5f",
  measurementId: "G-1D0YBM4H2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  export const auth=getAuth(app)