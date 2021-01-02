import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBTcPZCTxfXFfvpN54iKJdm5_l3b90OwFM",
  authDomain: "cislowski-shop2021.firebaseapp.com",
  projectId: "cislowski-shop2021",
  storageBucket: "cislowski-shop2021.appspot.com",
  messagingSenderId: "650962294760",
  appId: "1:650962294760:web:f9f42d8c4dfdd2db84f65d"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }