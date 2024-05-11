"use strict";

import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/firebase.config"

/**
 * Collection reference to the 'users' collection in Firestore.
 * @type {CollectionReference<DocumentData>}
 */
const userCollection = collection(db, "user")

const userParams = {
    level: 1,
    checkpointsLevel1: {
        1: false,
        2: false,
        3: false,
    }
}


/**
 * Creates a new user document in Firestore.
 * @param {Object} userData - The data of the user to be created.
 * @returns {Promise<DocumentReference>} A promise that resolves with the reference to the newly created user document.
 */
const createUser = async (userData) => {
    const user = {
        ...userData,
        ...userParams
    }

    try {
        const res = await addDoc(userCollection, user);
        return { success: true, message: "User created successfully", data: res };
    } catch (error) {
        return { success: false, message: error.message }
    }
}

/**
 * Reads the data of a user from Firestore based on their email.
 * @param {string} userEmail - The email of the user to be read.
 * @returns {Promise<{ success: boolean, userData?: Object, message?: string }>} A promise that resolves with an object containing the success status, user data if found, and an optional message.
 */
const readUser = async (userEmail) => {
    try {
        const res = await getDocs(
            query(userCollection, where('email', '==', userEmail))
        )

        if (res.empty) {
            return {
                success: false,
                data: null,
            }
        }
        const data = res.docs.map((doc) => doc.data())
        return {
            success: true,
            data,
        }
    } catch (error) {
        return {
            success: false,
            error,
        }
    }
}

/**
 * Updates the data of a user in Firestore.
 * @param {string} userEmail - The email of the user to be updated.
 * @param {Object} userData - The updated data of the user.
 * @returns {Promise<{ success: boolean, message?: string }>} A promise that resolves with an object containing the success status and an optional message.
 */
const updateUser = async (userEmail, userData) => {
    try {
        const userSnapshot = await getDocs(query(userCollection, where("email", "==", userEmail)));

        const userDoc = userSnapshot.docs[0];
        await userDoc.ref.update(userData);
        return { success: true, message: "User updated successfully" };
    } catch (error) {
        return error;
    }
};

export { createUser, readUser, updateUser };
