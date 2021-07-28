import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

import { firebaseConfig } from "./config/firebase";

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

const userCollection = db.collection("users");

export { db, auth, userCollection };
