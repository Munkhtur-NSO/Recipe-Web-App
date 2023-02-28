<template>
    <form @submit.prevent="checkForm">
  <p>
    <label for="name">Жорны нэр</label>
    <input
      id="name"
      v-model="name"
      type="text"
      name="name"
    >
  </p>

  <p>
    <label for="ingredients">Орц</label>
    <input
      id="ingredients"
      v-model="ingredients"
      type="text"
      name="ingredients"
    >
  </p>

  <p>
    <label for="instructions">Заавар</label>
    <input
      id="instructions"
      v-model="instructions"
      type="text"
      name="instructions"
    >
  </p>


  <p>
    <input
      type="submit"
      value="Submit"
    >
  </p>

</form>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc  } from "firebase/firestore";

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
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Add a new document with a generated id.

export default {
   
  data() {
    return{
    name: null,
    ingredients: null,
    instructions: null
    }
  },
  methods:{
     async checkForm() {
      try{
          const docRef =  await addDoc(collection(db, "Recipe"), {
        name:         this.name,
        ingredients:  this.ingredients,
        instructions: this.instructions
    });
    console.log("Document written with ID: ", docRef.id);
    } catch (error) {alert(error)}

      this.name = null
      this.ingredients = null
      this.instructions = null   
    }
  }
}
</script>

<style >
    h1 {
        position: absolute;
        top: 200px;
    }
</style>