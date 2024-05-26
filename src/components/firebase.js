// firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';

const apiKey = import.meta.env.VITE_FIREBASE_apiKey;
const authDomain = import.meta.env.VITE_FIREBASE_authDomain;
const projectId = import.meta.env.VITE_FIREBASE_projectId;
const storageBucket = import.meta.env.VITE_FIREBASE_storageBucket;
const messagingSenderId = import.meta.env.VITE_FIREBASE_messagingSenderId;
const appId = import.meta.env.VITE_FIREBASE_appId;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const auth = firebaseApp.auth();

export { db, auth };
