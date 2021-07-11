import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyBn7DbuOjGPW3b6EiADXXso4xo0KoZpqgU",
    authDomain: "project71-4d04b.firebaseapp.com",
    databaseURL: "https://project71-4d04b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "project71-4d04b",
    storageBucket: "project71-4d04b.appspot.com",
    messagingSenderId: "896974871999",
    appId: "1:896974871999:web:e342169232737fd662d50a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();