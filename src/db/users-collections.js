"use strict";

import { addDoc, collection, getDocs, query, where, updateDoc } from "firebase/firestore"
import { db } from "../firebase/firebase.config"

/**
 * Collection reference to the 'users' collection in Firestore.
 * @type {CollectionReference<DocumentData>}
 */
const userCollection = collection(db, "users")

const userParams = {
    level: 1,
    lives: 5,
    rewards: 0,
    checkpoints_level_1: {
        1: false,
        2: false,
        3: false
    },
    checkpoints_level_2: {
        1: false,
        2: false
    },
    checkpoints_level_3: {
        1: false,
        2: false,
        3: false,
    },
    checkpoints_level_4: {
        1: false,
        2: false,
        3: false,
    },
    position_level_1: {
        x: 0,
        y: 10,
        z: 0,
    },
    position_level_2: {
        x: 0,
        y: 10,
        z: 0,
    },
    position_level_3: {
        x: 0,
        y: 10,
        z: 0,
    },
    position_level_4: {
        x: 0,
        y: 10,
        z: 0,
    },
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
        console.log(data);
        return {
            success: true,
            data: data,
        }
    } catch (error) {
        return {
            success: false,
            error,
        }
    }
}

const updateUser = async (userEmail, level, doc) => {
    try {
        const userSnapshot = await getDocs(query(userCollection, where("email", "==", userEmail)));

        const userDoc = userSnapshot.docs[0];
        const userData = userDoc.data();

        if (userData[doc]) {
            userData[doc][level] = true;
        } else {
            return { success: false, message: "Invalid level or checkpoint" };
        }

        await updateDoc(userDoc.ref, userData);
        return { success: true, message: "User updated successfully" };
    } catch (error) {
        return error;
    }
};

export { createUser, readUser, updateUser };
