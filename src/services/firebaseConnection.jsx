import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyBR8xNTik4SCm2vZIYSP4A4MtQi3WHe1iM",
    authDomain: "ammarhes-challenge.firebaseapp.com",
    projectId: "ammarhes-challenge",
    storageBucket: "ammarhes-challenge.appspot.com",
    messagingSenderId: "117424443325",
    appId: "1:117424443325:web:9a97c3cdfe6f84be378cd4"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

export { auth };