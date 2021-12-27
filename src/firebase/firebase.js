import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

//this config is being used for both development and production environment. Though, it is a best practice creating a second project and have two configs: one for production (prodConfig) and another for development (devConfig), so you choose the config based on the environment.

const config = {
  apiKey: "AIzaSyCQroIMI3QUryeW5HDChlKelsLTh2IM48U",
  authDomain: "siristore-57b74.firebaseapp.com",
  projectId: "siristore-57b74",
  databaseURL: "https://siristore-57b74-default-rtdb.firebaseio.com/",
  storageBucket: "siristore-57b74.appspot.com",
  messagingSenderId: "194688247349",
  appId: "1:194688247349:web:76b7a82e657e370d9a337c",
  measurementId: "G-B6767VY0YQ"
};
/*
apiKey: "AIzaSyCQroIMI3QUryeW5HDChlKelsLTh2IM48U",
authDomain: "siristore-57b74.firebaseapp.com",
projectId: "siristore-57b74",
storageBucket: "siristore-57b74.appspot.com",
messagingSenderId: "194688247349",
appId: "1:194688247349:web:76b7a82e657e370d9a337c",
measurementId: "G-B6767VY0YQ"
*/

if (!firebase.apps.length) {
  //initializing with the config object
  firebase.initializeApp(config);
}

//separting database API and authentication
const db = firebase.database();
const auth = firebase.auth();

const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { db, auth, facebookProvider };
