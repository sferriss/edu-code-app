import firebase from 'firebase/app';
import 'firebase/auth';

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY as string;
const authDomain = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string;
const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID as string;
const storageBucket = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string;
const messagingSenderId = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string;
const appId = import.meta.env.VITE_FIREBASE_APP_ID as string;
const measurementId = import.meta.env.VITE_FIREBASE_MEASUREMENT_ID as string;

const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId,
    measurementId: measurementId
};

firebase.initializeApp(firebaseConfig);

export default firebase;