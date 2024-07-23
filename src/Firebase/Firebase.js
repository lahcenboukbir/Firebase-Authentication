import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBh1YXbb8-BuOFlmpPhcdulObQiO8s2ozQ",
    authDomain: "fir-authentication-42e64.firebaseapp.com",
    projectId: "fir-authentication-42e64",
    storageBucket: "fir-authentication-42e64.appspot.com",
    messagingSenderId: "704803882657",
    appId: "1:704803882657:web:9d67bfab35b570de5e52e0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
