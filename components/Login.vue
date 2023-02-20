<template>
    <!-- <button @click={handleFacebookLogin}>
        Login with Facebook
    </button> -->
    <button @click={handleFacebookLogin}>Login with Facebook</button>
</template>


<script>

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

  const firebaseConfig = {
  apiKey: "AIzaSyBSURCA7gFW9OV4YmHICoFL_jJh0k9nYus",
  authDomain: "recipe-app-5dc3b.firebaseapp.com",
  projectId: "recipe-app-5dc3b",
  storageBucket: "recipe-app-5dc3b.appspot.com",
  messagingSenderId: "199371767143",
  appId: "1:199371767143:web:dd1e154b5514589e4283c2",
  measurementId: "G-4D2WG4Y4XZ"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  // methods: {
  //   handleFacebookLogin(path, data) {
        
  //   }
  // }
  
  // const handleFacebookLogin = () => {
  //   const provider = new firebase.auth.FacebookAuthProvider();

  //   firebase.auth()
  //           .signInWithPopup(provider)
  //           .then((result) => {
  //             var credential = result.credential;

  //             var token = credential.accessToken;

  //             var user = result.user;
  //           }).catch((error) => {
  //             var errorCode = error.code;
  //             var errorMessage = error.message;
  //             var email = error.email;
  //             var credential = error.credential;
  //           });
  // }
    export default {
      methods: {
  handleFacebookLogin(path, data) {
// Create an instance of the Facebook provider object:
    var provider = new firebase.auth.FacebookAuthProvider();
firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
         /** @type {firebase.auth.OAuthCredential} */
         var credential = result.credential;
var token = credential.accessToken;
var user = result.user;
    }).catch((error) => {
       // Handle Errors here.
       var errorCode = error.code;
       var errorMessage = error.message;
       // The email of the user's account used.
       var email = error.email;
       // The firebase.auth.AuthCredential type that was used.
       var credential = error.credential;
    
    });
}
}
    }
</script>

