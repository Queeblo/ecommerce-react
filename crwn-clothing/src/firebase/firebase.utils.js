import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAMxElG74brIAFI3AXdGYI3LWUK_exhNms",
    authDomain: "crwn-db-dfec2.firebaseapp.com",
    databaseURL: "https://crwn-db-dfec2.firebaseio.com",
    projectId: "crwn-db-dfec2",
    storageBucket: "crwn-db-dfec2.appspot.com",
    messagingSenderId: "643525958364",
    appId: "1:643525958364:web:c892ffa031c8ac1625f219",
    measurementId: "G-3WX7WY58D1"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;