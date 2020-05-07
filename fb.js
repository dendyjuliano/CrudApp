import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyC5A8UUW2NILUtVSziqBw-wwUdc5wobOoE",
    authDomain: "crudapp-29a77.firebaseapp.com",
    databaseURL: "https://crudapp-29a77.firebaseio.com",
    projectId: "crudapp-29a77",
    storageBucket: "crudapp-29a77.appspot.com",
    messagingSenderId: "891968935171",
    appId: "1:891968935171:web:55fcd6504985810af1c536",
    measurementId: "G-X7X0ETNBM4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;