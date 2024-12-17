import admin from 'firebase-admin'

const serviceAccount = require("../config/ebuddy-test-firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const auth = admin.auth();

export default function authCollection() {
  async function register(email: string, password: string, displayName: string) {
    try {
      const userRecord = await auth.createUser({
        email: email,
        password: password,
        displayName: displayName,
        disabled: false,
      });
  
      return userRecord
    } catch (error) {
      throw error
    }
  }
  
  return {
    register
  }
}

