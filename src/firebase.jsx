import { initializeApp } from "firebase/app";
import { getAuth, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import toast from "react-hot-toast";
import { userHandle } from "./utils";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXwPiVikk1UM_pT-rcTc_wlnN0Y6pH9ms",
  authDomain: "instagram-clone-by-efeisik.firebaseapp.com",
  projectId: "instagram-clone-by-efeisik",
  storageBucket: "instagram-clone-by-efeisik.appspot.com",
  messagingSenderId: "842684019677",
  appId: "1:842684019677:web:d68e512b8794ad3db27c34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

onAuthStateChanged(auth, user => {
    userHandle(user || false)
})

export const login = async(email, password) => {
    try{
        const response = await signInWithEmailAndPassword(auth, email, password)
    }
    catch (err) {
        toast.error(err.code)
    }
}

export const logout = async () => {
    try {
        await signOut(auth)
    }catch (err){
        toast.error(err.code)
    }
}