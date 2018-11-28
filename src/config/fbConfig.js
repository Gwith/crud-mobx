import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAyw99WL2SBwVICai5q9nDpi9TeXxZOFwg",
  authDomain: "crud-movies.firebaseapp.com",
  databaseURL: "https://crud-movies.firebaseio.com",
  projectId: "crud-movies",
  storageBucket: "crud-movies.appspot.com",
  messagingSenderId: "1069737031932"
};
firebase.initializeApp(config);
const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

export default db;
