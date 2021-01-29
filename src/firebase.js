import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBtKC2TKRm_O_HDw1uaEAGK2rS-7avLDY4',
  authDomain: 'challenge-aadd5.firebaseapp.com',
  projectId: 'challenge-aadd5',
  storageBucket: 'challenge-aadd5.appspot.com',
  messagingSenderId: '988779810314',
  appId: '1:988779810314:web:f2a41af778b63b2adcd9f3',
  measurementId: 'G-T4MC6GB7Q7',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
