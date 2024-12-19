import { NextFunction, Response } from "express";
import { firebaseAdmin } from "../config/firebaseConfig";
import { RequestOptions } from "../types/controller";

const db = firebaseAdmin.firestore();

const usersCollection = db.collection("users");

// const addUser = async (userId, userData) => {
//   try {
//     await usersCollection.doc(userId).set(userData);
//     console.log(`User ${userId} added successfully!`);
//   } catch (error) {
//     console.error('Error adding user:', error);
//   }
// };

export const getUsers = async (
  request: RequestOptions,
  _res: Response,
  next: NextFunction
) => {
  try {
    const snapshot = await usersCollection.get();

    if (snapshot) {
      request.data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      request.statusCode = 200;
      next();
    }
  } catch (error) {
    request.data = null;
    request.message = error;
    request.statusCode = 500;
    request.status = "error";
    next();
  }
};

export const updateUser = async (
  request: RequestOptions,
  _: Response,
  next: NextFunction
) => {
  const { user_id } = request.params;

  try {
    const userRef = usersCollection.doc(user_id);

    const result = await userRef.update(request.body);

    if (result) {
      const userSnapshot = await userRef.get();

      request.data = userSnapshot.data();
      request.statusCode = 200;
      next();
    }
  } catch (error) {
    request.data = null;
    request.message = error;
    request.statusCode = 500;
    request.status = "error";
    next();
  }
};
