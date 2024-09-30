<template>
    <pre>{{ thisJsonData }}</pre>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

let thisError = ref(null);
let thisJsonData = ref(null)

async function getBookCountAPI() {
    try {
        const response = await axios.get("https://countbooks-3y55czmnpq-uc.a.run.app");
        thisJsonData.value = response.data;
        thisError.value = null;
    } catch (error) {
        console.error('Error fetching book count: ', error);
        thisError.value = error;
        thisJsonData.value = null;
    }
}

onMounted(() => {
    getBookCountAPI();
});
</script>