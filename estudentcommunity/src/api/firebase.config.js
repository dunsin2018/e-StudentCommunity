import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "e-studentunioncommunity.firebaseapp.com",
  databaseURL: "https://e-studentunioncommunity.firebaseio.com",
  projectId: "e-studentunioncommunity",
  storageBucket: "e-studentunioncommunity.appspot.com",
  messagingSenderId: "712260542008",
  appId: process.env.REACT_APP_APP_ID,
  measurementId: "G-P2WD9SBNWS",
};

export const createUserProfileData = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdDate,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
