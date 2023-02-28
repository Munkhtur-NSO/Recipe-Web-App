<template>
  <div>
    <div class="card">
        <div  v-for="value in main" :key="value.id">
            <h2>{{ value.name }}</h2>
            <p class="ingredients">{{ value.ingredients }}</p>
            <p class="instructions">{{ value.instructions }}</p>
            <p><button>Add to Favorite</button></p>
        </div>
    </div>

    <!-- <div class="flex-container">
      <div >
            <h2>Hi</h2>
            <p class="price">$19.99</p>
            <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
            <p><button>Add to Favorite</button></p>
      </div>
      <div >2</div>
      <div >3</div> 
      <div >4</div>
    </div> -->
</div>
</template>

<script>
    import { initializeApp } from "firebase/app";
    import { getFirestore, getDocs , collection } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
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

const docRef = collection(db, "Recipe");

export default {
    beforeMount() {
    this.Main()
  },
    data() {
        return{
            main: []
    }
    },
    methods: {
        async Main(){
                   // Get a document, forcing the SDK to fetch from the offline cache.
        try {
        const querySnapshot = await getDocs(docRef);
        querySnapshot.forEach((doc) => {
        this.main.push(doc.data())
        console.log(doc.id, " => ", doc.data());
        });
        } catch (e) {
        console.log("Error getting cached document:", e);
        }
        console.log("main==========>:", this.main);
        } 
    }
}
</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.card .ingredients {
  overflow: hidden;
  color: grey;
  font-size: 22px;
  height: 100px;
  text-overflow: ellipsis; 
}

.card .instructions {
  overflow: hidden;
  color: black;
  font-size: 22px;
  height: 100px;
  text-overflow: ellipsis; 
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}

.flex-container {
  display: flex;
  align-items: stretch;
  background-color: #f1f1f1;
}

.flex-container>div {
  background-color: DodgerBlue;
  color: white;
  width: 100px;
  height: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}
</style>