import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAvNS3Yy5fomir_N0vsdH1ebqhiSp1l18U",
  authDomain: "farmwithme-bf3e7.firebaseapp.com",
  databaseURL: "https://farmwithme-bf3e7.firebaseio.com",
  projectId: "farmwithme-bf3e7",
  storageBucket: "farmwithme-bf3e7.appspot.com",
  messagingSenderId: "74596922341",
  appId: "1:74596922341:web:d93e20f8946fd68702b50c",
  measurementId: "G-9C6QQFTB2Z",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
