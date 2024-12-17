import admin from 'firebase-admin'
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { auth as firebaseAuth} from '../config/firebaseConfig'
import { User } from '@ebuddy-test/types'

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
  
  async function login(email: string, password: string): Promise<User>  {
    try {
      
      const user: UserCredential = await signInWithEmailAndPassword(firebaseAuth, email, password)
  
      if (!user) throw new Error('User not found')
      const userProvider = user.user as unknown as User
      return userProvider
    } catch (error) {
      throw error
    }
  }
  
  return {
    register,
    login
  }
}

