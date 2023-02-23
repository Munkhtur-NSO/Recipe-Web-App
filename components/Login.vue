<template>
  <div class="button">
    <button v-if="isLoggedIn" @click="handleFacebookLogout">Logout</button>
    <button v-else @click="handleFacebookLogin">Login with Facebook</button>
  </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSURCA7gFW9OV4YmHICoFL_jJh0k9nYus",
  authDomain: "recipe-app-5dc3b.firebaseapp.com",
  projectId: "recipe-app-5dc3b",
  storageBucket: "recipe-app-5dc3b.appspot.com",
  messagingSenderId: "199371767143",
  appId: "1:199371767143:web:dd1e154b5514589e4283c2",
  measurementId: "G-4D2WG4Y4XZ",
};

const app = initializeApp(firebaseConfig);
const provider = new FacebookAuthProvider();
var user1;
export default {
  methods: {
    isLoggedIn : function(){ console.log("Login>>",this.user1); return this.user1},
    handleFacebookLogout(){
      console.log("Logout>>",user1);
    },
    handleFacebookLogin(path, data) {
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          // The signed-in user info.
          const user = result.user;
          user1 = user;
          console.log("=======>", user);
          console.log("1=======>", user1);

          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          const credential = FacebookAuthProvider.credentialFromResult(result);
          const accessToken = credential.accessToken;

          // IdP data available using getAdditionalUserInfo(result)
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = FacebookAuthProvider.credentialFromError(error);

          // ...
        });
    },
  },
};
</script>

<style>
.button {
  position: absolute;
  top: 100px;
}
</style>
