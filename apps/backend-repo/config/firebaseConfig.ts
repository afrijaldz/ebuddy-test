import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import admin from "firebase-admin";

const serviceAccount = require("./ebuddy-test-firebase.json");

export const firebaseConfig = {
  apiKey: "AIzaSyDW-RVkyF4FBM3okNMHfCyjsljDWM7bNVs",
  authDomain: "ebuddy-test-a785f.firebaseapp.com",
  projectId: "ebuddy-test-a785f",
  storageBucket: "ebuddy-test-a785f.firebasestorage.app",
  messagingSenderId: "336168882105",
  appId: "1:336168882105:web:db2a7fb649413fd580b068",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

export const firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ebuddy-test-a785f.firebaseio.com",
});
