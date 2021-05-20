import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDLcYCPGAV2VONuD_mHjoxn_WNs8uYSe9o",
    authDomain: "facebook-clone-8a468.firebaseapp.com",
    projectId: "facebook-clone-8a468",
    storageBucket: "facebook-clone-8a468.appspot.com",
    messagingSenderId: "187976775981",
    appId: "1:187976775981:web:325d4eb132d72bd528fba4",
    measurementId: "G-YB2BQX4Z4Y"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth = firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;