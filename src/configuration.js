// Import the functions you need from the SDKs you need
// eslint-disable-next-line
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBV9-9TUc6ssuFWpobhQv0GCevyj3RCcEk",
  authDomain: "fir-239c4.firebaseapp.com",
  databaseURL: "https://fir-239c4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-239c4",
  storageBucket: "fir-239c4.appspot.com",
  messagingSenderId: "536565702044",
  appId: "1:536565702044:web:3c496856f7bbae80957c59",
  measurementId: "G-XKF4315F2M"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const cong = initializeApp(firebaseConfig);

export default cong;