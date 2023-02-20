<template>
  <button
    @click="
      {
        handleFacebookLogin;
      }
    "
  >
    Login with Facebook
  </button>
</template>



<script>
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBSURCA7gFW9OV4YmHICoFL_jJh0k9nYus",
  authDomain: "recipe-app-5dc3b.firebaseapp.com",
  projectId: "recipe-app-5dc3b",
  storageBucket: "recipe-app-5dc3b.appspot.com",
  messagingSenderId: "199371767143",
  appId: "1:199371767143:web:dd1e154b5514589e4283c2",
  measurementId: "G-4D2WG4Y4XZ",
};

firebase.initializeApp(firebaseConfig);

export default {
methods: {
  handleFacebookLogin(path, data) {
    var provider = new firebase.auth.FacebookAuthProvider();
firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
         var credential = result.credential;
var token = credential.accessToken;
var user = result.user;
    }).catch((error) => {
       var errorCode = error.code;
       var errorMessage = error.message;
       var email = error.email;
       var credential = error.credential;
    
    });
}
}
}

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
// export default {
//   const auth = getAuth();
// signInWithPopup(auth, provider)
//   .then((result) => {
//     // The signed-in user info.
//     const user = result.user;

//     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//     const credential = FacebookAuthProvider.credentialFromResult(result);
//     const accessToken = credential.accessToken;

//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = FacebookAuthProvider.credentialFromError(error);

//     // ...
//   });
// };
</script>
