import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCtFMqkstGKlb-RRh3PFK3YrWj3eFfpbNE",
    authDomain: "servicedesk-d1eee.firebaseapp.com",
    projectId: "servicedesk-d1eee",
    storageBucket: "servicedesk-d1eee.appspot.com",
    messagingSenderId: "68275640981",
    appId: "1:68275640981:web:c1c7da901c61c2743fd99c",
    measurementId: "G-YMLRGHPWQ8"
  }

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
