import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyBRXSFNbdGWv6I9Ww-rKMXpKdiinoJKG1M',
  authDomain: 'journal-app-f654d.firebaseapp.com',
  databaseURL: 'https://journal-app-f654d.firebaseio.com',
  projectId: 'journal-app-f654d',
  storageBucket: 'journal-app-f654d.appspot.com',
  messagingSenderId: '652811244643',
  appId: '1:652811244643:web:57426506e52d9828bd1456',
  measurementId: 'G-79J50M6N1S',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
