import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCTOm-EAfkQQmoeWvMG23WEnmdu03n7vbQ",
  authDomain: "challenge-a86e9.firebaseapp.com",
  databaseURL: "https://challenge-a86e9.firebaseio.com",
  projectId: "challenge-a86e9",
  storageBucket: "challenge-a86e9.appspot.com",
  messagingSenderId: "94998083123",
  appId: "1:94998083123:web:94603f99049361a2a6d546",
  measurementId: "G-BLPQY1RYQE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }