<template>
    <div id="app">
        <h1>Book Counter</h1>
        <button @click="getBookCount()">Get Book Count</button>
        <p v-if="thisCount !== null">Total number of books: {{  thisCount  }}</p>
        <p v-if="thisError">{{  thisError }}</p>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
let thisCount = ref(null);
let thisError = ref(null);

async function getBookCount() {
    try {
        const response = await axios.get("https://countbooks-3y55czmnpq-uc.a.run.app");
        thisCount.value = response.data.count;
        thisError.value = null;
    } catch (error) {
        console.error('Error fetching book count: ', error);
        thisError.value = error;
        thisCount.value = null;
    }
}
</script>