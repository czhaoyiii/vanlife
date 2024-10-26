import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3nqfRQYGETPzFduFfZuoIg1oRNPlOoKE",
  authDomain: "vanlife-58fb3.firebaseapp.com",
  projectId: "vanlife-58fb3",
  storageBucket: "vanlife-58fb3.appspot.com",
  messagingSenderId: "48399449113",
  appId: "1:48399449113:web:e7ca16fcda0ffab20a3e88",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Refactoring the fetching functions below
const vansCollectionRef = collection(db, "vans");

// Retrieving all the vans from the database
export async function getVans() {
  const snapshot = await getDocs(vansCollectionRef);
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vans;
}

export async function getVan(id) {
  const docRef = doc(db, "vans", id);
  const snapshot = await getDoc(docRef);
  return {
    ...snapshot.data(),
    id: snapshot.id,
  };
}

export async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "123"));
  const snapshot = await getDocs(q);
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vans;
}

export async function loginUser(email, password) {
  try {
    // Create a query to find the user with the provided email
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);

    // Check if the user exists
    if (querySnapshot.empty) {
      throw new Error("User not found");
    }

    // Retrieve the user data
    let user = null;
    querySnapshot.forEach((doc) => {
      user = doc.data();
    });

    // Check if the password matches
    if (user.password !== password) {
      throw new Error("Incorrect password");
    }

    // If both email and password match, return success
    return { success: true, user };
  } catch (error) {
    // Return error message if something goes wrong
    return { success: false, message: error.message };
  }
}
