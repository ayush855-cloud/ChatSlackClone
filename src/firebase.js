import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAzFw1W3SloaZqeh-Dm03YBjWkGS3w_6fc",
    authDomain: "slack-clone-3bd93.firebaseapp.com",
    projectId: "slack-clone-3bd93",
    storageBucket: "slack-clone-3bd93.appspot.com",
    messagingSenderId: "541884526525",
    appId: "1:541884526525:web:c5de09ac8a68c6d83d2cd4",
    measurementId: "G-LC1CXEZLXD"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth=firebaseApp.auth();
const provider=new firebase.auth.GoogleAuthProvider();
export {db,auth,provider};
