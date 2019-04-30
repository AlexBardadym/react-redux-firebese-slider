import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyBeYTqJproyR1MQ0JBVrnP-sVtxpvo4Ct8",
  authDomain: "login-urich.firebaseapp.com",
  databaseURL: "https://login-urich.firebaseio.com",
  projectId: "login-urich",
  storageBucket: "login-urich.appspot.com",
  messagingSenderId: "126399566432"
};
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const usersRef = databaseRef.child("users");
