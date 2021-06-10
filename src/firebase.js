import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDzwhDuWhhoQUO-h4gEqFBTL0yug5cpFKw",
    authDomain: "whatsapp-ac622.firebaseapp.com",
    projectId: "whatsapp-ac622",
    storageBucket: "whatsapp-ac622.appspot.com",
    messagingSenderId: "831725766010",
    appId: "1:831725766010:web:e92bb039bacb1567f682c3",
    measurementId: "G-NYXS89QEX7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider};
  export default db;