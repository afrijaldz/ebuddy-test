import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { firebaseAdmin, auth as firebaseAuth } from "../config/firebaseConfig";
import { FirebaseUser } from "@ebuddy-test/types";

const auth = firebaseAdmin.auth();

export default function authCollection() {
  async function register(
    email: string,
    password: string,
    displayName: string
  ) {
    try {
      const userRecord = await auth.createUser({
        email: email,
        password: password,
        displayName: displayName,
        disabled: false,
      });

      return userRecord;
    } catch (error) {
      throw error;
    }
  }

  async function login(email: string, password: string): Promise<FirebaseUser> {
    try {
      const user: UserCredential = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );

      if (!user) throw new Error("User not found");
      const userProvider = user.user as unknown as FirebaseUser;
      return userProvider;
    } catch (error) {
      throw error;
    }
  }

  return {
    register,
    login,
  };
}
