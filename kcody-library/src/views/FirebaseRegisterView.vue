<template>
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email"/></p>
    <p><input type="password" placeholder="Password" v-model="password"/></p>
    <p><button @click="register">Save to Firebase as User</button></p>
    <p><button @click="registerAsAdmin">Save to Firebase as Admin</button></p>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useStore } from 'vuex';
import { useRouter } from "vue-router";
const email = ref("");
const password = ref("");
const router = useRouter();
const store = useStore();
// const auth = getAuth();
const register = () => {
    console.log(email.value, " ", password.value);
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(async (data) => {
        // add User
        console.log("Firebase Register Succesful!");
        router.push("/firebaseSignin");
        try {
            const docRef = await addDoc(collection(store.state.db, "users"), {
            email: email.value, 
            password: password.value,
            isAdmin: false
        });
        console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding Document: ", e)
        }
    }).catch((error) => {
        console.group(error.code)
    })    
};
const registerAsAdmin = () => {
    console.log(email.value, " ", password.value);
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(async (data) => {
        // add User
        console.log("Firebase Register Succesful!");
        router.push("/firebaseSignin");
        try {
            const docRef = await addDoc(collection(store.state.db, "users"), {
            email: email.value, 
            password: password.value,
            isAdmin: true
        });
        console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding Document: ", e)
        }
    }).catch((error) => {
        console.group(error.code)
    })    
};
</script>