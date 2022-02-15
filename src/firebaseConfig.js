import Firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCYGfAb2m9tHJo1_seVuqJ69py7LvY_Nx8",
    authDomain: "welly-trip-advisor.firebaseapp.com",
    projectId: "welly-trip-advisor",
    storageBucket: "welly-trip-advisor.appspot.com",
    messagingSenderId: "1066728571046",
    appId: "1:1066728571046:web:71a4563381b11ad05c7467"
};

const firebase = Firebase.initializeApp(firebaseConfig);

const { FieldValue } = Firebase.firestore

export const auth = getAuth()

export {firebase, FieldValue}

