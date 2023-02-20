import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app'
import { getAuth,connectAuthEmulator } from 'firebase/auth';

/* code from our Firebase console */
const firebaseConfig = {
    apiKey: "AIzaSyBSURCA7gFW9OV4YmHICoFL_jJh0k9nYus",
    authDomain: "recipe-app-5dc3b.firebaseapp.com",
    projectId: "recipe-app-5dc3b",
    storageBucket: "recipe-app-5dc3b.appspot.com",
    messagingSenderId: "199371767143",
    appId: "1:199371767143:web:dd1e154b5514589e4283c2",
    measurementId: "G-4D2WG4Y4XZ",
  };

// Initialize Firebase
initializeApp(firebaseConfig)
