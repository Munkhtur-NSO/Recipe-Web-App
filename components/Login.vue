<template>
  <div class="loginButton">
    <button v-if="loggedIn" @click="handleFacebookLogout">Logout</button>
    <button v-else @click="handleFacebookLogin">Login with Facebook</button>
    <p>{{name}}</p>
  </div>
  
</template>

<script>
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
  signOut,
} from "firebase/auth";
import VueJwtDecode from 'vue-jwt-decode';

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
var user1,loggedIn,name;

export default {
  beforeMount() {
    this.checkToken()
  },
   data() {
    return{
      loggedIn: false,
      name: null
    }
  },
  // data: {
  //   token: ''
  // },
  methods: {
    async checkToken() {
    if(localStorage.getItem('accessToken') != null) {
      
      this.loggedIn = true;
      console.log('accesstoken',this.loggedIn);
      let accessToken = localStorage.getItem('accessToken');
      try{
        let decoded = await VueJwtDecode.decode(accessToken,'RS256');
        this.name = decoded.name;
        console.log('parse.user=>',decoded);}
        
      catch (error) {console.error(error);}
      
      console.log('accessToken=>',accessToken);
      
      } else {console.log('nope'); this.loggedIn = false;}
      // if(loggedIn) {
      // console.log('yes',localStorage.getItem('accessToken'))
      // } else {console.log('nope',localStorage.getItem('accessToken'))}
    },

    handleFacebookLogout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          console.log("Sign-out successful.");
        })
        .catch((_error) => {
          // An error happened.
          console.log("Sign-out error.");
        });
        localStorage.removeItem('accessToken');
        this.checkToken();
    },

    handleFacebookLogin(path, data) {
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          // The signed-in user info.
          const user = result.user;
          user1 = user;
          
          console.log("=======>", user);
          

          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          const credential = FacebookAuthProvider.credentialFromResult(result);
          const accessToken = credential.accessToken;
          this.token = accessToken;
          localStorage.setItem('accessToken', user.accessToken);
          this.checkToken();
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
.loginButton {
  position: absolute;
  top: 20px;
  right: 200px;
}
</style>
