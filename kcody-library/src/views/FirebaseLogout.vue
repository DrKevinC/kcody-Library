<template>
    <p v-if="currentUser">Current User is: {{ currentUser.email }}</p>
    <p v-else>No-one is logged in currently</p>
    <p><button @click="logout">Firebase Logout</button></p>
</template>

<script setup>
import { getAuth, signOut } from "firebase/auth"
import { ref } from "vue";
import router from "@/router";
const auth = getAuth();
const currentUser = ref(auth.currentUser)
const logout = () => {
    signOut(auth).then(() => {
    console.log("Signed out Succesfully");
    router.push("/")
    }).catch((error) => {
    console.log("An error occurred in signout: ", error);
    });
}
</script>